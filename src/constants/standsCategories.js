export const StandsCategories = Object.freeze({
    Gold: { value: "Gold", text: "זהב" },
    BLACK_WOOD: { value: "BLACK_WOOD", text: "שחור עץ" },
    GLASS: { value: "GLASS", text: "זכוכית" },
});

export function getCategoryByValue(value) {
    return Object.values(StandsCategories).find(cat => cat.value === value);
}