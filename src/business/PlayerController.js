import { hasCollision, isWithinBoard } from "C:/Users/dimes/WebstormProjects/tetris/src/business/Board";
import { rotate } from "C:/Users/dimes/WebstormProjects/tetris/src/business/Tetrominoes";
import { Action } from "C:/Users/dimes/WebstormProjects/tetris/src/business/Input";

const attemptRotation = ({ board, player, setPlayer, action }) => {
    let direction;
    if (action === Action.RotateX) {
        direction = 1;
    } else if (action === Action.RotateZ) {
        direction = -1;
    } else {
        direction = 2;
    }
    const shape = rotate({
        piece: player.tetromino.shape,
        direction,
    });

    const position = player.position;
    const isValidRotation =
        isWithinBoard({ board, position, shape }) &&
        !hasCollision({ board, position, shape });

    if (isValidRotation) {
        setPlayer({
            ...player,
            tetromino: {
                ...player.tetromino,
                shape,
            },
        });
    } else {
        return false;
    }
};

export const movePlayer = ({ delta, position, shape, board }) => {
    const desiredNextPosition = {
        row: position.row + delta.row,
        column: position.column + delta.column,
    };

    const collided = hasCollision({
        board,
        position: desiredNextPosition,
        shape,
    });

    const isOnBoard = isWithinBoard({
        board,
        position: desiredNextPosition,
        shape,
    });

    const preventMove = !isOnBoard || collided;
    const nextPosition = preventMove ? position : desiredNextPosition;

    const isMovingDown = delta.row > 0;
    const isHit = isMovingDown && (collided || !isOnBoard);

    return { collided: isHit, nextPosition };
};

const attemptMovement = ({ board, action, player, setPlayer, setGameOver }) => {
    const delta = { row: 0, column: 0 };
    let isHardDropping = false;

    if (action === Action.HardDrop) {
        isHardDropping = true;
    }else
    if (action === Action.SlowDrop) {
        delta.row += 1;
    }else
    if (action === Action.Left) {
        delta.column -= 1;
    }else
    if (action === Action.Right) {
        delta.column += 1;
    }

    const { collided, nextPosition } = movePlayer({
        delta,
        position: player.position,
        shape: player.tetromino.shape,
        board,
    });

    // ako sme se udrile odma, gameover
    const isGameOver = collided && player.position.row === 0;
    if (isGameOver) {
        setGameOver(isGameOver);
    }

    setPlayer({
        ...player,
        collided,
        isHardDropping,
        position: nextPosition,
    });
};

export const playerController = ({
                                     action,
                                     board,
                                     player,
                                     setPlayer,
                                     setGameOver,
                                 }) => {
    if (!action) return;

    if (
        action === Action.RotateX ||
        action === Action.RotateZ ||
        action == Action.Rotate180
    ) {
        attemptRotation({ board, player, setPlayer, action });
    } else {
        attemptMovement({ board, player, setPlayer, action, setGameOver });
    }
};
