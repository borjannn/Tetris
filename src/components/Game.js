import Menu from "C:/Users/dimes/WebstormProjects/tetris/src/components/Menu";
import Tetris from "C:/Users/dimes/WebstormProjects/tetris/src/components/Tetris";

import { useGameOver } from "C:/Users/dimes/WebstormProjects/tetris/src/hooks/useGameOver";

const Game = ({ rows, columns }) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => resetGameOver();

    return (
        <div className="Game">
            {gameOver ? (
                <Menu onclick={start} />
            ) : (
                <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
            )}
        </div>
    );
};
export default Game;
