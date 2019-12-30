import React from "react";
import "./modal.css";


function Modal(props) {

    const display = {display: `${props.show}`};

    return (
        <div id="congratsModal" className="modal" style={display}>
            <div className="modal-content">
                <div className="modal-header">
                <h2>Congratulations!</h2>
                    <span className="close" onClick={props.onHide}>&times;</span>
                    
                </div>
                <div className="modal-body">
                    <p>Well done! You clicked all of them!</p>
                <p>Would you like to restart the game?</p>
                <button className="yes" onClick={props.restart}>Sure</button> 
                </div>
            </div>
        </div>
    );

}

export default Modal;