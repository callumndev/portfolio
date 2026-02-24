export interface Connect {
    id: string;
    order: number;
    title: string;
    link?: string;
}

export const connect: Connect[] = [
    {
        id: "linkedin",
        order: 3,
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/cn-dev",
    },
    {
        id: "github",
        order: 2,
        title: "GitHub",
        link: "https://github.com/callumndev",
    },
    {
        id: "email",
        order: 1,
        title: "Email",
        link: "mailto:contact@cndev.me",
    },
]
