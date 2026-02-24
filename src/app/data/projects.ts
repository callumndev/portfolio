import { DateType } from "../../../types/experience";

export interface Project {
    id: string;
    order: number;
    title: string;
    image?: string;
    currentlyInProgress: boolean;
    startDate: DateType;
    endDate?: DateType;
    link?: string;
    description?: string;
    skills?: string[];
}

export const projects: Project[] = [
    {
        id: "watchcord",
        order: 3,
        title: "Watchcord",
        image: "/watchcord.png",
        currentlyInProgress: true,
        startDate: {
            month: "May",
            year: "2025",
        },
        link: "https://watchcord.ai",
        description: "AI-powered Discord moderation and community management platform",
        skills: [
            "AI", "Microservices", "TypeScript",
            "RabbitMQ", "React.js", "Tailwind CSS",
        ],
    },
    {
        id: "student-nav",
        order: 2,
        title: "Student Nav Website",
        currentlyInProgress: false,
        startDate: {
            month: "February",
            year: "2024",
        },
        endDate: {
            month: "March",
            year: "2024",
        },
        link: "https://student-nav.github.io",
        description: "As a team of 5, we developed a website under the Team Project unit at university. We settled on the idea of making a website targeted to new university students in Manchester, showing information, events and general tips for their new life",
        skills: [
            "Teamwork", "Git",
            "HTML5", "CSS3", "JavaScript"
        ],
    },
    {
        id: "setup-bot",
        order: 1,
        title: "Setup Bot, The Discord Experts",
        image: "/setup-bot.png",
        currentlyInProgress: false,
        startDate: {
            month: "September",
            year: "2022",
        },
        endDate: {
            month: "October",
            year: "2022",
        },
        link: "https://thediscordexperts.com/bots",
        description: "I undertook the responsibility of modernizing the existing Setup bot at The Discord Experts, a solution that streamlined the Discord server setup process for users",
        skills: [
            "JavaScript", "Discord.js", "MySQL",
        ],
    },
]
