import "./Menu.css";

const Menu = ({ onclick }) => (
    <div className="Menu">
        <button className="Button" onClick={onclick}>
            Play Tetris
        </button>
        <h1>X -- rotate clockwise</h1>
        <h1>Z -- rotate counterclockwise</h1>
        <h1>Space -- hard drop</h1>
        <h1>Arrow keys for movement</h1>
        <h1>Have Fun!</h1>
    </div>
);

export default Menu;
