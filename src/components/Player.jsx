import { useState } from "react"

export default function Player({ initialName, symbol }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName} </span>

    if (isEditing) {
        editablePlayerName = <input type="text" required defaultValue={playerName} className="player" onChange={handleChange} />
    }

    return (
        <li>
            <span className="player"></span>
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEdit} > {isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}