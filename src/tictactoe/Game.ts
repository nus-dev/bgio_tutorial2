import { INVALID_MOVE } from "boardgame.io/core";
import { Game } from 'boardgame.io'
import { ctx, G } from "./types";

export const TicTacToe: Game<G, ctx> = {
    setup: (ctx, setupData) => ({ cells: Array(9).fill(null) }),

    moves: {
        clickCell: (G, ctx, id) => {
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
            }
            G.cells[id] = ctx.currentPlayer;
        },

        customMoves: (G, ctx, id) => {
            console.log(G, ctx, id);
        }
    },

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    endIf: (G, ctx) => {
        if (IsVictory(G.cells)) {
            return { winner: ctx.currentPlayer };
        }
        if (IsDraw(G.cells)) {
            return { draw: true };
        }
    },
};

// Return true if `cells` is in a winning configuration.
function IsVictory(cells: Array<number>) {
    const positions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    const isRowComplete = (row: any) => {
        const symbols = row.map((i: any) => cells[i]);
        return symbols.every((i: any) => i !== null && i === symbols[0]);
    };

    return positions.map(isRowComplete).some(i => i === true);
}

// Return true if all `cells` are occupied.
function IsDraw(cells: Array<number>) {
    return cells.filter((c: any) => c === null).length === 0;
}