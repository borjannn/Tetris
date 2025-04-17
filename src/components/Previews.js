import React from "react";
import Preview from "C:/Users/dimes/WebstormProjects/tetris/src/components/Preview";

const Previews = ({ tetrominoes }) => {
    //sakame se osven poslednoto
    const previewTetrominoes = tetrominoes
        .slice(1 - tetrominoes.length)
        .reverse();

    return (
        <>
            {previewTetrominoes.map((tetromino, index) => (
                <Preview tetromino={tetromino} index={index} key={index} />
            ))}
        </>
    );
};

export default React.memo(Previews);
