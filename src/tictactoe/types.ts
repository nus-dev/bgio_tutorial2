import { Ctx } from "boardgame.io"

export type TicTacToeG = {
    cells: Array<string>
}

export interface TicTacToeCtx extends Ctx {
    gameover?: {
        winner?: number
    }
}