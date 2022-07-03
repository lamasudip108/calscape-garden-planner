import React, {useEffect, useState} from "react";
import {fabric} from "fabric";

import Main from './components/plotter/main'

function Plotter() {

    const [levelOneHoverIndex, setLevelOneHoverIndex] = useState([]);
    const [levelTwoHoverIndex, setLevelTwoHoverIndex] = useState([]);
    const [canvasBox, setCanvasBox] = useState('');

    const levelOneHoverHandler = (e, name) => {
        setLevelOneHoverIndex((prev) => [[], name]);
        setLevelTwoHoverIndex([])
    };

    const levelTwoHoverHandler = (e, name) => {
        setLevelTwoHoverIndex((prev) => [[], name]);
    };

    const mouseOutHandler = (e) => {
        setLevelOneHoverIndex([]);
        setLevelTwoHoverIndex([])
    };

    useEffect(() => {
        let canvas = new fabric.Canvas('garden', {selection: false, hoverCursor: 'pointer'});
        let grid = 50;
        let unitScale = 10;
        let canvasWidth = 100 * unitScale;
        let canvasHeight = 50 * unitScale;

        canvas.setWidth(canvasWidth);
        canvas.setHeight(canvasHeight);

        // create grid
        for (let i = 0; i < (canvasWidth / grid); i++) {
            canvas.add(new fabric.Line([i * grid, 0, i * grid, canvasHeight], {
                type: 'line',
                stroke: '#ccc',
                selectable: false
            }));
            canvas.add(new fabric.Line([0, i * grid, canvasWidth, i * grid], {
                type: 'line',
                stroke: '#ccc',
                selectable: false
            }))
        }
        setCanvasBox(canvas);

        return () => {
            canvas.dispose()
        };

    }, []);

    const addImage = (e, url, canvi, scale) => {
        e.preventDefault();
        new fabric.Image.fromURL(url, img => {
            img.scale(scale||0.25);
            canvi.add(img);
            canvi.renderAll();
        });
    };

    console.log("canvasBox", canvasBox);
    console.log("levelOneHoverIndex", levelOneHoverIndex, levelTwoHoverIndex);

    return (
        <>
            <Main
                levelOneHoverIndex={levelOneHoverIndex}
                setLevelOneHoverIndex={setLevelOneHoverIndex}
                levelTwoHoverIndex={levelTwoHoverIndex}
                setLevelTwoHoverIndex={setLevelTwoHoverIndex}
                canvasBox={canvasBox}
                setCanvasBox={setCanvasBox}
                levelOneHoverHandler={levelOneHoverHandler}
                levelTwoHoverHandler={levelTwoHoverHandler}
                mouseOutHandler={mouseOutHandler}
                addImage={addImage}
            />

        </>
    )
}

export default Plotter
