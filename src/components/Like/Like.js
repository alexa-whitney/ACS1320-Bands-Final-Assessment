import React, { useState } from "react";
import './Like.css';

function Like() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="like">
            <button onClick={handleDecrement}>👎</button>
            <h1 className="count">{count}</h1>
            <button onClick={handleIncrement}>👍</button>
        </div>
    );
}

export default Like;