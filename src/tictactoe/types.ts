import { Ctx } from "boardgame.io"

export type G = {
    cells: Array<number>
}

export type ctx = Ctx & {
    currentPlayer: number,
    gameover?: {
        winner?: number
    }
}