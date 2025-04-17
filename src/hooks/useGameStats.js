import { useState, useCallback } from "react";

const buildGameStats = () => ({
    level: 1,
    linesCompleted: 0,
    linesPerLevel: 2,
    points: 0,
});

export const useGameStats = () => {
    const [gameStats, setGameStats] = useState(buildGameStats());

    const addLinesCleared = useCallback((lines) => {
        setGameStats((previous) => {
            let points = previous.points + lines * 100;
            if (lines === 3) points += 100;
            else if (lines === 4) points += 200;
            const { linesPerLevel } = previous;
            const newLinesCompleted = previous.linesCompleted + lines;
            const level =
                newLinesCompleted >= linesPerLevel
                    ? previous.level + 1
                    : previous.level;
            const linesCompleted = newLinesCompleted % linesPerLevel;

            return {
                level,
                linesCompleted,
                linesPerLevel,
                points,
            };
        }, []);
    }, []);

    return [gameStats, addLinesCleared];
};
