export const StandsCategories = Object.freeze({
    Gold: { value: 1, text: "זהב" },
    BLACK_WOOD: { value: 2, text: "שחור עץ" },
    GLASS: { value: 3, text: "זכוכית" },
    SWINGS: { value: 4, text: "נדנדה" },
});

export function getCategoryByValue(value) {
    return Object.values(StandsCategories).find(cat => cat.value === Number(value));
}