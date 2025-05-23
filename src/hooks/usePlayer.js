import { useState, useCallback } from "react";

import { randomTetromino } from "C:/Users/dimes/WebstormProjects/tetris/src/business/Tetrominoes";

const buildPlayer = (previous) => {
    let tetrominoes;

    if (previous) {
        tetrominoes = [...previous.tetrominoes];
        tetrominoes.unshift(randomTetromino());
    } else {
        tetrominoes = Array(6)
            .fill(0)
            .map((_) => randomTetromino());
    }

    return {
        collided: false,
        isHardDropping: false,
        position: { row: 0, column: 4 },
        tetrominoes,
        tetromino: tetrominoes.pop(),
    };
};

export const usePlayer = () => {
    const [player, setPlayer] = useState(buildPlayer());

    const resetPlayer = useCallback(() => {
        setPlayer((prev) => buildPlayer(prev));
    }, []);
    return [player, setPlayer, resetPlayer];
};
