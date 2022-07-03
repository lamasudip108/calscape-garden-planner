import React from "react";

export default function Navigation() {
    return (
        <div className="column right" style={{backgroundColor: "#f3f1f1"}}>
            <div id="wrapper">
                <div className="canvas-container">
                    <canvas id='garden'/>
                </div>
            </div>
            <div id="zoom-wrapper">
                <button id="zoom-in-button" className="scale-buttons" data-magnification-factor="0.025">+</button>
                <button id="zoom-out-button" className="scale-buttons" data-magnification-factor="-0.025">-</button>
            </div>
        </div>
    )
}
