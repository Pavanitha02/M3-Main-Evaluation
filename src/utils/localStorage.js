import { LS_KEY } from "./constants";
export const getRestaurantsFromLS = () => {
    const data = localStorage.getItem(LS_KEY);
    if(!data) return [];
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Error parsing restaurant data from localStorage:", error);
        return [];
    }
};
export const saveRestaurantsToLS = (data) => {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
};