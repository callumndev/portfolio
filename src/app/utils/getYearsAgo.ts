/**
 * Gets how many years since a specified year and month (age)
 * @param {number} year Year
 * @param {number} month Month
 * @returns {number} Number of years ago
 */
export default function getYearsAgo(year: number, month: number): number {
    const birthday = new Date(year, month - 1); // Months are 0-indexed
    return new Date().getFullYear() - birthday.getFullYear();
}
