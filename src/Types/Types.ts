export type TFieldElement = {
    cords: {
        x: number
        y: number
    }
    symbol: string | null | undefined
}
export type TCount = {
    [key: string]: number
}

export enum statusGame {
    DRAW,
    INPROGRESS,
    WIN
}