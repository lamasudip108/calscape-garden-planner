import React, {useEffect, useState} from "react";
import {fabric} from "fabric";

import Main from './components/plotter/main';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { jsPDF } from "jspdf";

function Plotter() {

    const [levelOneHoverIndex, setLevelOneHoverIndex] = useState([]);
    const [levelTwoHoverIndex, setLevelTwoHoverIndex] = useState([]);
    const [canvasBox, setCanvasBox] = useState('');
    const [rectWidth, setRectWidth] = useState();
    const [rectHeight, setRectHeight] = useState();
    const [showModal, setShowModal] = useState(false);
    const [unitScale, setunitScale] = useState(10);
    const [clear, setClear] = useState(false);

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

    }, [clear]);

    const addImage = (e, url, canvi, scale) => {
        e.preventDefault();
        new fabric.Image.fromURL(url, img => {
            img.scale(scale||0.25);
            canvi.add(img);
            canvi.renderAll();
        });
    };

    const handleOpenModal = () => {
            setShowModal(true);
          };
  
    const handleCloseModal = () => {
            setShowModal(false);
          };
    const createRectangle = (e) => {
        e.preventDefault();
        var rect = new fabric.Rect({
            left: 100,
            width: rectWidth * unitScale * 10,
            height: rectHeight * unitScale * 10,
            fill: 'green'
          });
          canvasBox.add(rect);
        canvasBox.setActiveObject(rect);
        setShowModal(false);
    }

    const handleDownload = () => {
        let dataUrl = canvasBox.toDataURL({
          format: "png"
        });
        const pdf = new jsPDF();          
        pdf.addImage(dataUrl, 'PNG', 0, 0);
        pdf.save("myPlot.pdf"); 
    }

    const clearCanvas = () => {
        canvasBox.clear();
        setClear(!clear);
    }

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
                showModal={showModal}
                createRectangle={createRectangle}
                setRectWidth={setRectWidth}
                setRectHeight={setRectHeight}
                setShowModal={setShowModal}
                onClose={handleCloseModal}
                onDownload={handleDownload}
                clearCanvas={clearCanvas}
            />

        </>
    )
}

export default Plotter
