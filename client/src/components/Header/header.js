import React from "react";
import "./header.css";

function Header(props) {

    const position = { position: props.counter };

    return (
        <div class="text-center">
            <nav class="navv">
                <h1 className="title">PICKLERICK!!</h1>
            </nav>
            <br></br>
            <h3 className="counter" >Counter: {props.count}</h3>
            <div className="instructions">
                <h3>Instructions: In this game you must click all the pictures without clicking any repeats to win the game!</h3>
            </div>
        </div>
    );

}

export default Header;