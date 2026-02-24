type EmploymentType = "Full-time" |
    "Part-time" |
    "Self-employed" |
    "Freelance" |
    "Contract" |
    "Internship" |
    "Apprenticeship" |
    "Temporary";

interface CompanyOrOrganization {
    image: string;
    name: string;
    type: string;
    industry: string;
}

type MonthType = "January" |
    "February" |
    "March" |
    "April" |
    "May" |
    "June" |
    "July" |
    "August" |
    "September" |
    "October" |
    "November" |
    "December";

export interface DateType {
    month: MonthType;
    year: string;
}

type LocationType = "On-site" | "Hybrid" | "Remote";

export interface Experience {
    id: string;
    order: number;
    title: string;
    employmentType: EmploymentType;
    companyOrOrganization: CompanyOrOrganization;
    currentlyWorking: boolean;
    startDate: DateType;
    endDate?: DateType;
    location: string;
    locationType: LocationType;
    description?: string;
    skills?: string[];
}
