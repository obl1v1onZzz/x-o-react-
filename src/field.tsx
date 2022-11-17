import {TFieldElement} from "./Types/Types";
import {currentPlayer} from "./currentPlayer";

export const fieldSize = 3
export let field = new Array(3).fill(null).map(() => {
    return new Array(3).fill(null)
})

export const getFieldElementByCoords = (
    x: number,
    y: number,
    field: string[][]
): string | null => {
    return field[x]?.[y] ?? null;
};
export const setNewFieldElement = (fieldElement: TFieldElement): boolean => {
    if (fieldElement.symbol?.length === 0) {
        field[fieldElement.cords.x][fieldElement.cords.y] = currentPlayer
        return true
    }
    return false
}