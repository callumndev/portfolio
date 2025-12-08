"use server";

type Repo = {
    fork: boolean;
    languages_url: string;
}

export type GitHubLanguages = Record<string, number>;

const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;
if (!username || !token) throw new Error("GITHUB_USERNAME or GITHUB_TOKEN is not set");

// Request headers for GitHub API
const headers: HeadersInit = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
}

// Manually cache in dev
let cachedAt = 0;
let cachedRes: Awaited<ReturnType<typeof getGitHubLanguages>> | null = null;
const cacheTime = 5 * 60 * 1000; // 5 minutes

/**
 * Returns an object of languages and their usage percentage across the repos on `process.env.GITHUB_USERNAME`'s Github profile.
 * Uses `process.env.GITHUB_TOKEN` for the authorization bearer
 * @returns {GitHubLanguages} Object, key being the language name, value being the percentage
 */
export async function getGitHubLanguages(): Promise<GitHubLanguages> {
    // Manually cache in dev
    const now = Date.now();
    if (process.env.NODE_ENV == "development") {

        // If still valid in cache
        if (cachedRes && now - cachedAt < cacheTime)
            return cachedRes;
    }

    // Fetch all the repos for the user
    const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos?per_page=1000&type=owner`, { headers });
    if (!fetchRepos.ok) {
        console.error("Failed to fetch repos for", username, "- Res:", await fetchRepos.text());
        throw new Error("Failed to fetch repos from GitHub for " + username);
    }

    // Filter out forks
    let repos: Repo[] = await fetchRepos.json();
    repos = repos.filter(repo => !repo.fork);

    // Collect languages
    const languages: Map<string, number> = new Map();

    // Total up bytes from each language
    for (const repo of repos) {
        // Fetch languages URL for this repo
        const fetchLang = await fetch(repo.languages_url, { headers });
        if (!fetchLang.ok) {
            console.error("Failed to languages URL", repo.languages_url, "- Res:", await fetchLang.text());
            continue;
        }

        // Add each of the languages and its bytes to the repo map
        const repoLanguages: GitHubLanguages = await fetchLang.json();
        for (const [name, bytes] of Object.entries(repoLanguages)) {
            const existingBytes = languages.get(name) ?? 0;
            const newTotalBytes = existingBytes + bytes;
            languages.set(name, newTotalBytes);
        }
    }

    // Transform map with bytes into percentages
    const totalBytes = languages.values().reduce((a, b) => a + b, 0);
    for (const [name, bytes] of languages) {
        const percentage = Number(((bytes / totalBytes) * 100).toFixed(2)); // Round to 2 decimal places
        languages.set(name, percentage);
    }

    // Return as object
    const object = Object.fromEntries(languages);

    if (process.env.NODE_ENV == "development") {
        cachedRes = object;
        cachedAt = now;
    }

    return object;
}
