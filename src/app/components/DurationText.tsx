import { DateType } from "../../../types/experience";

const MONTHS: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
}

function toDateFromMonthYear(monthName: string, year: number): Date {
    const monthIndex = MONTHS[monthName.toLowerCase()];
    return new Date(year, monthIndex, 1);
}

function formatDuration(from: Date, to: Date = new Date()): string {
    let monthsDiff =
        (to.getFullYear() - from.getFullYear()) * 12 +
        (to.getMonth() - from.getMonth());

    if (monthsDiff < 0) monthsDiff = 0;

    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);

    // fallback if it's 0 months
    return parts.length ? parts.join(" ") : "0 mos";
}

type StartEnd = {
    startDate: DateType;
    endDate?: DateType | null;
    currentlyWorking: boolean;
}

export function DurationText({ startDate, endDate, currentlyWorking }: StartEnd) {
    const start = toDateFromMonthYear(startDate.month, Number(startDate.year));

    const end = currentlyWorking || !endDate
        ? new Date()
        : toDateFromMonthYear(endDate.month, Number(endDate.year));

    const label = formatDuration(start, end); // e.g. "1 yr 3 mos"

    return <span>{label}</span>;
}
