import "./Tetris.css";

import Board from "C:/Users/dimes/WebstormProjects/tetris/src/components/Board";
import GameController from "C:/Users/dimes/WebstormProjects/tetris/src/components/GameController";
import GameStats from "C:/Users/dimes/WebstormProjects/tetris/src/components/GameStats";
import Previews from "C:/Users/dimes/WebstormProjects/tetris/src/components/Previews";

import { useBoard } from "C:/Users/dimes/WebstormProjects/tetris/src/hooks/useBoard";
import { useGameStats } from "C:/Users/dimes/WebstormProjects/tetris/src/hooks/useGameStats";
import { usePlayer } from "C:/Users/dimes/WebstormProjects/tetris/src/hooks/usePlayer";

const Tetris = ({ rows, columns, setGameOver }) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({
        rows,
        columns,
        player,
        resetPlayer,
        addLinesCleared,
    });
    return (
        <div className="Tetris">
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews tetrominoes={player.tetrominoes} />
            <GameController
                board={board}
                gameStats={gameStats}
                player={player}
                setGameOver={setGameOver}
                setPlayer={setPlayer}
            />
        </div>
    );
};

export default Tetris;
