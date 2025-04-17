import "./GameController.css";

import { Action, actionForKey, actionIsDrop } from "C:/Users/dimes/WebstormProjects/tetris/src/business/Input";
import { playerController } from "C:/Users/dimes/WebstormProjects/tetris/src/business/PlayerController";

import { useInterval } from "C:/Users/dimes/WebstormProjects/tetris/src/hooks/useInterval";
import { useDropTime } from "C:/Users/dimes/WebstormProjects/tetris/src/hooks/useDropTime";

const GameController = ({
                            board,
                            gameStats,
                            player,
                            setGameOver,
                            setPlayer,
                        }) => {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats,
    });

    useInterval(() => {
        handleInput({ action: Action.SlowDrop });
    }, dropTime);

    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);
        if (actionIsDrop(action)) resumeDropTime();
    };

    const onKeyDown = ({ code }) => {
        const action = actionForKey(code);

        if (action === Action.Pause) {
            if (dropTime) {
                pauseDropTime();
                return;
            } else {
                resumeDropTime();
            }
        } else if (action === Action.Quit) {
            setGameOver(true);
        } else {
            handleInput({ action });
        }
    };

    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver,
        });
    };
    return (
        <input
            className="GameController"
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        />
    );
};

export default GameController;
