import { useState, useEffect } from "react";

import { buildBoard, nextBoard } from "C:/Users/dimes/WebstormProjects/tetris/src/business/Board";

export const useBoard = ({
                             rows,
                             columns,
                             player,
                             resetPlayer,
                             addLinesCleared,
                         }) => {
    const [board, setBoard] = useState(buildBoard({ rows, columns }));

    useEffect(() => {
        setBoard((previousBoard) =>
            nextBoard({
                board: previousBoard,
                player,
                resetPlayer,
                addLinesCleared,
            })
        );
    }, [player, resetPlayer, addLinesCleared]);

    return [board];
};
