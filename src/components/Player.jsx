import { useState } from "react"

export default function Player({ name, symbol }) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        setIsEditing(true);
    }

    let playerName = <span className="player-name">{name}</span>

    if (isEditing) {
        playerName = <input type = "text" required className = "player" />
    }

    return (
        <li>
            <span className="player"></span>
            {playerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEdit} >Edit</button>
        </li>
    )
}