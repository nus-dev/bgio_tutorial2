import { INVALID_MOVE } from "boardgame.io/core";
import { Game } from 'boardgame.io'
import { PylosCtx, PylosG } from "./types";

export const Pylos: Game<PylosG, PylosCtx> = {
    name: 'pylos',

    setup: (ctx, setupData) => ({ 
        bottomCells: Array(16).fill(null),
        secondCells: Array(9).fill(null),
        thirdCells: Array(4).fill(null),
        top: Array(1).fill(null),
        mode: 'push'
    }),
    
    moves: {
        clickCell: (G, ctx, floor, idx) => {
            if (G.mode === 'pop') {
                return;
            }

            const floorCells = getFloor(G, floor);
            if (floorCells[idx] !== null) {
                return INVALID_MOVE;
            }

            // 아래칸 없으면 못움직임
            if (floor >= 1) {
                const row = Math.floor(idx / (4 - floor)); 
                const col = idx % (4 - floor);
                const underFloor = floor - 1;
                const underFloorCells = getFloor(G, underFloor);
                if (!underFloorCells[row * underFloor + col] 
                    || !underFloorCells[row * underFloor + col + 1]
                    || !underFloorCells[(row + 1) * underFloor + col]
                    || !underFloorCells[(row + 1) * underFloor + col + 1]) {
                    return INVALID_MOVE;
                }
            }

            floorCells[idx] = ctx.currentPlayer;
        },

        toggleMode: (G) => {
            G.mode = G.mode === 'pop' ? 'push' : 'pop';
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
        if (IsVictory(G)) {
            return { winner: ctx.currentPlayer };
        }
    },
};

function getFloor(G: PylosG, floor: number): Array<string> {
    if (floor === 0) return G.bottomCells;
    if (floor === 1) return G.secondCells;
    if (floor === 2) return G.thirdCells;
    return G.top;
}

// Return true if `cells` is in a winning configuration.
function IsVictory(G: PylosG) {
    return !!G.top[0];
}