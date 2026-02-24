export interface Connect {
    id: string;
    order: number;
    title: string;
    image?: string;
    link?: string;
}

export const connect: Connect[] = [
    {
        id: "linkedin",
        order: 3,
        title: "LinkedIn",
        image: "/linkedin.webp",
        link: "https://www.linkedin.com/in/cn-dev",
    },
    {
        id: "github",
        order: 2,
        title: "GitHub",
        image: "/github.svg",
        link: "https://github.com/callumndev",
    },
    {
        id: "email",
        order: 1,
        title: "Email",
        image: "email",
        link: "mailto:contact@cndev.me",
    },
]
