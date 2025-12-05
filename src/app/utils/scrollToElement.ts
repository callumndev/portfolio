/**
 * Scrolls to a specific element by ID on the page
 * @param {string} id Element ID
 * @param {ScrollBehavior} [behavior=smooth] Scroll behaviour when scrolling to the element. Type: `ScrollBehavior`
 * @returns {bool} True if element was found, false otherwise
 */
export default function scrollToElement(id: string, behavior: ScrollBehavior = "smooth"): boolean {
    const element = document.getElementById(id);
    if (!element) return false;

    element.scrollIntoView({ behavior });
    return true;
}
