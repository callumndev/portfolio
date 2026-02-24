import { Hero } from "./components/home/Hero";
import { About } from "./components/home/About";
import { Experience } from "./components/home/Experience";
import { Projects } from "./components/home/Projects";
import { Connect } from "./components/home/Connect";
import { getGitHubLanguages } from "./actions/getGitHubLanguages";
import { experience } from "./data/experience";
import { projects } from "./data/projects";
import { connect } from "./data/connect";

export const revalidate = 3600; // Cache page for an hour

export default async function Home() {
    const githubLanguages = await getGitHubLanguages();

    return (
        <main>
            {/* Hero */}
            <Hero />

            {/* About */}
            <About githubLanguages={githubLanguages} />

            {/* Experience */}
            <Experience experience={experience} />

            {/* Projects */}
            <Projects projects={projects} />

            {/* Connect */}
            <Connect connect={connect} />
        </main>
    );
}
