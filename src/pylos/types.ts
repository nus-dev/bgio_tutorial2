import { Ctx } from "boardgame.io"

export type PylosG = {
    bottomCells: Array<string>;
    secondCells: Array<string>;
    thirdCells: Array<string>;
    top: Array<string>;
    mode: 'push' | 'pop' | 'move';
}

export interface PylosCtx extends Ctx {
    gameover?: {
        winner?: number
    }
}