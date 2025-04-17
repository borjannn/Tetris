export const Action = {
    Left: "Left",
    HardDrop: "HardDrop",
    RotateX: "RotateX",
    RotateZ: "RotateZ",
    Rotate180: "Rotate180",
    SlowDrop: "SlowDrop",
    Right: "Right",
    Hold: "Hold",
    Quit: "Quit",
};

export const Key = {
    KeyX: Action.RotateX,
    KeyZ: Action.RotateZ,
    ArrowDown: Action.SlowDrop,
    ArrowLeft: Action.Left,
    ArrowRight: Action.Right,
    KeyA: Action.Rotate180,
    KeyC: Action.Hold,
    KeyQ: Action.Quit,
    Space: Action.HardDrop,
};

export const actionIsDrop = (action) =>
    [Action.SlowDrop, Action.HardDrop].includes(action);

export const actionForKey = (keyCode) => Key[keyCode];
