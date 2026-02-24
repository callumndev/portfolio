import type { Experience } from "../../../types/experience";

export const experience: Experience[] = [
    {
        id: "etas-contracting",
        order: 4,
        title: "NSS Expert - Junior Software Engineer",
        employmentType: "Contract",
        companyOrOrganization: {
            image: "/etas.jpeg",
            name: "ETAS",
            type: "Company",
            industry: "Software Development",
        },
        currentlyWorking: false,
        startDate: {
            month: "July",
            year: "2024",
        },
        endDate: {
            month: "September",
            year: "2025",
        },
        location: "Manchester, England, United Kingdom",
        locationType: "Hybrid",
        description: "Part-time Software Engineer alongside my university studies",
        skills: [
            "Spring Framework",
            "Scaled Agile Framework",
        ],
    },
    {
        id: "bosch-nss",
        order: 3,
        title: "NSS Expert - Junior Software Engineer",
        employmentType: "Contract",
        companyOrOrganization: {
            image: "/bosch.png",
            name: "Bosch Automotive Service Solutions UK",
            type: "Company",
            industry: "Software Development",
        },
        currentlyWorking: false,
        startDate: {
            month: "November",
            year: "2023",
        },
        endDate: {
            month: "June",
            year: "2024",
        },
        location: "Manchester, England, United Kingdom",
        locationType: "Hybrid",
        description: "Part-time Software Engineer alongside my university studies, continuing on from my internship during college",
        skills: [
            "Eclipse Jetty", "TypeScript", "React.js",
            "Tailwind CSS", "Electron.js",
        ],
    },
    {
        id: "bosch-internship",
        order: 2,
        title: "Software Development Intern",
        employmentType: "Internship",
        companyOrOrganization: {
            image: "/bosch.png",
            name: "Bosch Automotive Service Solutions UK",
            type: "Company",
            industry: "Software Development",
        },
        currentlyWorking: false,
        startDate: {
            month: "October",
            year: "2022",
        },
        endDate: {
            month: "September",
            year: "2023",
        },
        location: "Manchester, England, United Kingdom",
        locationType: "On-site",
        skills: [
            "Automotive Diagnostics", "Internal Tool Development", "Jira",
        ],
    },
    {
        id: "bosch-work-experience",
        order: 1,
        title: "Work Experience - Development",
        employmentType: "Temporary",
        companyOrOrganization: {
            image: "/bosch.png",
            name: "Bosch Automotive Service Solutions UK",
            type: "Company",
            industry: "Software Development",
        },
        currentlyWorking: false,
        startDate: {
            month: "June",
            year: "2022",
        },
        endDate: {
            month: "August",
            year: "2022",
        },
        location: "Manchester, England, United Kingdom",
        locationType: "On-site",
        description: "Work experience",
        skills: [
            "Java", "Jenkins", "Python",
            "Git", "Groovy"
        ],
    },
]
