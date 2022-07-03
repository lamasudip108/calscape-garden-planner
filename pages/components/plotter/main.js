import React from "react";

import Navigation from './navigation'
import Zoom from './zoom'
import ReactModal from 'react-modal';

function Main({
                  levelOneHoverIndex,
                  setLevelOneHoverIndex,
                  levelTwoHoverIndex,
                  setLevelTwoHoverIndex,
                  canvasBox,
                  setCanvasBox,
                  levelOneHoverHandler,
                  levelTwoHoverHandler,
                  mouseOutHandler,
                  addImage,
                  showModal,
                  setRectWidth,
                  setRectHeight,
                  createRectangle,
                  setShowModal,
                  onClose,
                  onDownload
              }) {

    const customStyles = {
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1100,
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
      content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        width: '500px',
        position: "absolute"
      }
    }

    return (
        <>
            <Navigation
                addImage={addImage}
                canvasBox={canvasBox}
                setShowModal={setShowModal}
                onDownload={onDownload}
            />
            
            <div className="row">
                <ReactModal 
                   isOpen={showModal}
                   contentLabel="Select Plot size (m)"
                   style={customStyles}
                >
                  <form className="form-inline row">
                    <h3>Select plot size (in meters)</h3>
                    <hr></hr>
                    <div class="col-sm-6">
                        <div class="input-group-prepend">
                          <input className="form-control" name="width" placeholder="enter width" onChange={(e) => setRectWidth(e.target.value)}/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="input-group-prepend">
                          <input className="form-control" name="height" placeholder="enter height" onChange={(e) => setRectHeight(e.target.value)}/>
                          </div>
                    </div>
                    <div class="col-sm-2">
                          <button className="btn btn-primary mx-1 mt-3" onClick={(e) => createRectangle(e)}>Create</button>
                    </div>
                     <div class="col-sm-2">
                          <button className="btn btn-danger mx-1 mt-3" onClick={(e) => onClose()}>Close</button>
                    </div>
                    </form>
                </ReactModal>

                <div className="column left" style={{backgroundColor: "#fff"}}>
                    <div id="toolbar-gardenplanner">
                        <div id="object-menu-full" className="toolbar-gardenplanner-menu" onMouseLeave={e => {
                            mouseOutHandler(e)
                        }}>
                            <ul id="object-menu-garden"
                                className="has-subgroup object-menu visible-state scrollable-menu"
                                style={{width: "160px"}}>
                                <li className="level-1 gardenplanner-element menu-headline">
                                    <span
                                        className="text-turquoise d-block mx-auto menu-headline-text">Garden plan</span>
                                </li>
                                <li className="has-subgroup only-objects level-1 gardenplanner-element scrollable-menu"
                                    data-original-name="Plot">
                        <span className="gui-toolbar-group"
                              onMouseOver={e => {
                                  levelOneHoverHandler(e, 'Plot')
                              }}
                        >
                            <img
                                src="https://my-garden.gardena.com/assets/icons/svg/171107_GAR_Gartenplaner_Icons_2_Flaechen-Grundstuecke-Landschaften.svg?v=20220628-2ec948a"
                                alt="Plot" className="icons"/>
                                <span className="text-turquoise d-block mx-auto small">Plot</span>
                        </span>
                                    <div
                                        className={`subgroup-wrapper only-objects level-1 ${levelOneHoverIndex.includes('Plot') ? "visible" : ""}`}>
                                        <ul className="subgroup level-1">
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Lawns"
                                                className="item-linebreak level-1 gardenplanner-element">
                                                <button className="button-item-gras item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_gras.png?v=20220628-2ec948a"
                                                        data-item-name="Lawns"
                                                        data-item-slug="gras"
                                                        data-item-scale=""
                                                        data-item-priority="green"
                                                        data-canvas-type="polygon"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="landscape"
                                                        data-canvas-layerdepth="101"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-fixedscaling=""
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/kachel_gras.png?v=20220628-2ec948a"
                                                        className="icons"/>
                                                    <span className="text-turquoise d-block mx-auto small">Lawns</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Earth / bed"
                                                className="level-1 gardenplanner-element">
                                                <button className="button-item-erde item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_erde.png?v=20220628-2ec948a"
                                                        data-item-name="Earth / bed"
                                                        data-item-slug="erde"
                                                        data-item-scale=""
                                                        data-item-priority="red"
                                                        data-canvas-type="polygon"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="landscape"
                                                        data-canvas-layerdepth="109"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/kachel_erde.png?v=20220628-2ec948a"
                                                        className="icons"/>
                                                    <span
                                                        className="text-turquoise d-block mx-auto small">Earth / bed</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Paving"
                                                className="level-1 gardenplanner-element">
                                                <button className="button-item-pflaster item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_pflaster.png?v=20220628-2ec948a"
                                                        data-item-name="Paving"
                                                        data-item-slug="pflaster"
                                                        data-item-scale=""
                                                        data-item-priority="red"
                                                        data-canvas-type="polygon"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="landscape"
                                                        data-canvas-layerdepth="103"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/kachel_pflaster.png?v=20220628-2ec948a"
                                                        className="icons"/>
                                                    <span className="text-turquoise d-block mx-auto small">Paving</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Wood"
                                                className="level-1 gardenplanner-element">
                                                <button className="button-item-holz item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_holz.png?v=20220628-2ec948a"
                                                        data-item-name="Wood"
                                                        data-item-slug="holz"
                                                        data-item-scale=""
                                                        data-item-priority="red"
                                                        data-canvas-type="polygon"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="landscape"
                                                        data-canvas-layerdepth="107"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/kachel_holz.png?v=20220628-2ec948a"
                                                        className="icons"/>
                                                    <span className="text-turquoise d-block mx-auto small">Wood</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Cobble&shy;stones"
                                                className="item-linebreak level-1 lastRow gardenplanner-element">
                                                <button className="button-item-kopfsteinpflaster item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_kopfstein.png?v=20220628-2ec948a"
                                                        data-item-name="Cobble&shy;stones"
                                                        data-item-slug="kopfsteinpflaster"
                                                        data-item-scale=""
                                                        data-item-priority="red"
                                                        data-canvas-type="polygon"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="landscape"
                                                        data-canvas-layerdepth="103"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/kachel_kopfstein.png?v=20220628-2ec948a"
                                                        className="icons"/><span
                                                    className="text-turquoise d-block mx-auto small">Cobble&shy;stones</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Wall"
                                                className="level-1 lastRow gardenplanner-element">
                                                <button className="button-item-mauer item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_mauer.png?v=20220628-2ec948a"
                                                        data-item-name="Wall"
                                                        data-item-slug="mauer"
                                                        data-item-scale=""
                                                        data-item-priority="yellow"
                                                        data-canvas-type="polygon"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="landscape"
                                                        data-canvas-layerdepth="280"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/kachel_mauer.png?v=20220628-2ec948a"
                                                        className="icons"/><span
                                                    className="text-turquoise d-block mx-auto small">Wall</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Gravel"
                                                className="level-1 lastRow gardenplanner-element">
                                                <button className="button-item-kies item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_kies.png?v=20220628-2ec948a"
                                                        data-item-name="Gravel"
                                                        data-item-slug="kies"
                                                        data-item-scale=""
                                                        data-item-priority="red"
                                                        data-canvas-type="polygon"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="landscape"
                                                        data-canvas-layerdepth="105"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/kachel_kies.png?v=20220628-2ec948a"
                                                        className="icons"/><span
                                                    className="text-turquoise d-block mx-auto small">Gravel</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Water"
                                                className="level-1 lastRow gardenplanner-element">
                                                <button className="button-item-wasser item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_wasser.png?v=20220628-2ec948a"
                                                        data-item-name="Water"
                                                        data-item-slug="wasser"
                                                        data-item-scale=""
                                                        data-item-priority="yellow"
                                                        data-canvas-type="polygon"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="landscape"
                                                        data-canvas-layerdepth="122"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/kachel_wasser.png?v=20220628-2ec948a"
                                                        className="icons"/><span
                                                    className="text-turquoise d-block mx-auto small">Water</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-subgroup level-1 gardenplanner-element scrollable-menu"
                                    data-original-name="Houses and extensions">
                                <span className="gui-toolbar-group" onMouseOver={e => {
                                    levelOneHoverHandler(e, 'Houses and extensions')
                                }}
                                >
                        <img
                            src="https://my-garden.gardena.com/assets/icons/svg/171107_GAR_Gartenplaner_Icons_3_Haeuser-Begrenzungen.svg?v=20220628-2ec948a"
                            alt="Houses and extensions" className="icons"/>
                                <span className="text-turquoise d-block mx-auto small">Houses and extensions</span>
                                </span>
                                    <div
                                        className={`subgroup-wrapper level-1 scrollable-checked ${levelOneHoverIndex.includes('Houses and extensions') ? "visible" : ""}`}
                                        style={{height: "261px"}}>
                                        <ul className="subgroup level-1" style={{height: "261px"}}>
                                            <li className="has-subgroup only-objects level-2 first gardenplanner-element scrollable-menu"
                                                data-original-name="Houses and boundaries">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Houses and boundaries')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/haus_grau.png?v=20220628-2ec948a"
                                                    alt="Houses and boundaries" className="icons"/>
                                                <span className="text-turquoise d-block mx-auto small">Houses and boundaries</span>
                                            </span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 first ${levelTwoHoverIndex.includes('Houses and boundaries') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2 first">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Grey-roof house"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-haus_grau item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/haus_grau.png?v=20220628-2ec948a"
                                                                    data-item-name="Grey-roof house"
                                                                    data-item-slug="haus_grau"
                                                                    data-item-scale="{&quot;x&quot;:8,&quot;y&quot;:10}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="490"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/haus_grau.png?v=20220628-2ec948a', canvasBox)}>
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/haus_grau.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Grey-roof house</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Green-roof house"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-haus_gruen item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/haus_gruen.png?v=20220628-2ec948a"
                                                                    data-item-name="Green-roof house"
                                                                    data-item-slug="haus_gruen"
                                                                    data-item-scale="{&quot;x&quot;:9,&quot;y&quot;:10}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="490"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/haus_gruen.png?v=20220628-2ec948a', canvasBox)}>
                                                                >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/haus_gruen.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Green-roof house</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Flat-roof house"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-haus_flachdach item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/haus_flachdach.png?v=20220628-2ec948a"
                                                                    data-item-name="Flat-roof house"
                                                                    data-item-slug="haus_flachdach"
                                                                    data-item-scale="{&quot;x&quot;:10,&quot;y&quot;:10}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="490"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/haus_flachdach.png?v=20220628-2ec948a', canvasBox)}>
                                                                >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/haus_flachdach.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Flat-roof house</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Red-roof house"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-haus_rot item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/haus_rot.png?v=20220628-2ec948a"
                                                                    data-item-name="Red-roof house"
                                                                    data-item-slug="haus_rot"
                                                                    data-item-scale="{&quot;x&quot;:8,&quot;y&quot;:9}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="490"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/haus_rot.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/haus_rot.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Red-roof house</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="House"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-doppelgarage item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/doppelgarage.png?v=20220628-2ec948a"
                                                                    data-item-name="House"
                                                                    data-item-slug="doppelgarage"
                                                                    data-item-scale="{&quot;x&quot;:6,&quot;y&quot;:6}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="470"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/doppelgarage.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/doppelgarage.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">House</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Carport"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-carport item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/carport.png?v=20220628-2ec948a"
                                                                    data-item-name="Carport"
                                                                    data-item-slug="carport"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:6}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="470"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/carport.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/carport.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Carport</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Bay"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-erker_halbrund item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/erker_halbrund.png?v=20220628-2ec948a"
                                                                    data-item-name="Bay"
                                                                    data-item-slug="erker_halbrund"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:2}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="485"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/erker_halbrund.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/erker_halbrund.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Bay</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Bay"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-erker_trapezoid item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/erker_trapezoid.png?v=20220628-2ec948a"
                                                                    data-item-name="Bay"
                                                                    data-item-slug="erker_trapezoid"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:2.5}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="485"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/erker_trapezoid.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/erker_trapezoid.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Bay</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Bay"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-erker_eckig item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/erker_eckig.png?v=20220628-2ec948a"
                                                                    data-item-name="Bay"
                                                                    data-item-slug="erker_eckig"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:2.5}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="485"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/erker_eckig.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/erker_eckig.png?v=20220628-2ec948a"
                                                                    className="icons"/>
                                                                <span
                                                                    className="text-turquoise d-block mx-auto small">Bay</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Stairs"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-aussentreppe_rund item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/aussentreppe_rund.png?v=20220628-2ec948a"
                                                                data-item-name="Stairs"
                                                                data-item-slug="aussentreppe_rund"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:1}"
                                                                data-item-priority="red"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="190"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden"
                                                                onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/aussentreppe_rund.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/aussentreppe_rund.png?v=20220628-2ec948a"
                                                                    className="icons"/>
                                                                <span
                                                                    className="text-turquoise d-block mx-auto small">Stairs</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Stairs"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-aussentreppe_eckig_1 item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/aussentreppe_eckig_1.png?v=20220628-2ec948a"
                                                                data-item-name="Stairs"
                                                                data-item-slug="aussentreppe_eckig_1"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:1}"
                                                                data-item-priority="red"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="190"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling=""
                                                                data-mode="garden"
                                                                onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/aussentreppe_eckig_1.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/aussentreppe_eckig_1.png?v=20220628-2ec948a"
                                                                    className="icons"/>
                                                                <span
                                                                    className="text-turquoise d-block mx-auto small">Stairs</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Stairs"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-aussentreppe_eckig_2 item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/aussentreppe_eckig_2.png?v=20220628-2ec948a"
                                                                data-item-name="Stairs"
                                                                data-item-slug="aussentreppe_eckig_2"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:1}"
                                                                data-item-priority="red"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="190"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling=""
                                                                data-mode="garden"
                                                                onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/aussentreppe_eckig_2.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/aussentreppe_eckig_2.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Stairs</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Stairs"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-aussentreppe_eckig_3 item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/aussentreppe_eckig_3.png?v=20220628-2ec948a"
                                                                data-item-name="Stairs"
                                                                data-item-slug="aussentreppe_eckig_3"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:1}"
                                                                data-item-priority="red"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="190"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling=""
                                                                data-mode="garden"
                                                                onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/aussentreppe_eckig_3.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/aussentreppe_eckig_3.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Stairs</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Stairs"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-aussentreppe_trapez item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/aussentreppe_trapez.png?v=20220628-2ec948a"
                                                                data-item-name="Stairs"
                                                                data-item-slug="aussentreppe_trapez"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:1}"
                                                                data-item-priority="red"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="190"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling=""
                                                                data-mode="garden"
                                                                onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/aussentreppe_trapez.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/aussentreppe_trapez.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Stairs</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Balcony"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-aussenbalkon item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/aussenbalkon.png?v=20220628-2ec948a"
                                                                    data-item-name="Balcony"
                                                                    data-item-slug="aussenbalkon"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:2}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="480"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/aussenbalkon.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/aussenbalkon.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Balcony</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Canopy"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-vordach_grau item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/vordach_grau.png?v=20220628-2ec948a"
                                                                    data-item-name="Canopy"
                                                                    data-item-slug="vordach_grau"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:2.5}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="485"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/vordach_grau.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/vordach_grau.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Canopy</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Canopy"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-vordach_rot item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/vordach_rot.png?v=20220628-2ec948a"
                                                                    data-item-name="Canopy"
                                                                    data-item-slug="vordach_rot"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:2.5}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="485"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/vordach_rot.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/vordach_rot.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Canopy</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Canopy"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-vordach_gruen item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/vordach_gruen.png?v=20220628-2ec948a"
                                                                    data-item-name="Canopy"
                                                                    data-item-slug="vordach_gruen"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:2.5}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="485"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden"
                                                                    onClick={e => addImage(e, 'https://my-garden.gardena.com/assets/elements/png/vordach_gruen.png?v=20220628-2ec948a', canvasBox)}
                                                            >
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/vordach_gruen.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Canopy</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-subgroup only-objects level-2 gardenplanner-element scrollable-menu"
                                                data-original-name="Terraces and surfaces">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Terraces and surfaces')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/holzflaeche_eckig.png?v=20220628-2ec948a"
                                                    alt="Terraces and surfaces" className="icons"/>
                                            <span
                                                className="text-turquoise d-block mx-auto small">Terraces and surfaces</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 ${levelTwoHoverIndex.includes('Terraces and surfaces') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Bed, rect."
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-beet_eckig item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_erde.png"
                                                                    data-item-name="Bed, rect."
                                                                    data-item-slug="beet_eckig"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:1}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern="true"
                                                                    data-canvas-geometry="rect"
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="130"
                                                                    data-stroke-img=""
                                                                    data-stroke-width="7"
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/beet_eckig.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Bed, rect.</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Bed, round"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-beet_rund item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_erde.png"
                                                                    data-item-name="Bed, round"
                                                                    data-item-slug="beet_rund"
                                                                    data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:2}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern="true"
                                                                    data-canvas-geometry="circle"
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="130"
                                                                    data-stroke-img=""
                                                                    data-stroke-width="7"
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/beet_rund.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Bed, round</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Wood area, rect."
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-holzflaeche_eckig item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_holz.png"
                                                                data-item-name="Wood area, rect."
                                                                data-item-slug="holzflaeche_eckig"
                                                                data-item-scale="{&quot;x&quot;:4,&quot;y&quot;:2}"
                                                                data-item-priority="red"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern="true"
                                                                data-canvas-geometry="rect"
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="160"
                                                                data-stroke-img=""
                                                                data-stroke-width="7"
                                                                data-fixedscaling=""
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/holzflaeche_eckig.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Wood area, rect.</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Wood area, round"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-holzflaeche_rund item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_holz.png"
                                                                data-item-name="Wood area, round"
                                                                data-item-slug="holzflaeche_rund"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:2}"
                                                                data-item-priority="red"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern="true"
                                                                data-canvas-geometry="circle"
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="160"
                                                                data-stroke-img=""
                                                                data-stroke-width="7"
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/holzflaeche_rund.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Wood area, round</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Rect. gravel area"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-kiesflaeche_eckig item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_kies.png"
                                                                data-item-name="Rect. gravel area"
                                                                data-item-slug="kiesflaeche_eckig"
                                                                data-item-scale="{&quot;x&quot;:6,&quot;y&quot;:3}"
                                                                data-item-priority="red"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern="true"
                                                                data-canvas-geometry="rect"
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="145"
                                                                data-stroke-img=""
                                                                data-stroke-width="7"
                                                                data-fixedscaling=""
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/kieselflaeche_eckig.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Rect. gravel area</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Round gravel area"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-kiesflaeche_rund item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_kies.png"
                                                                data-item-name="Round gravel area"
                                                                data-item-slug="kiesflaeche_rund"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:2}"
                                                                data-item-priority="red"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern="true"
                                                                data-canvas-geometry="circle"
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="145"
                                                                data-stroke-img=""
                                                                data-stroke-width="7"
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/kieselflaeche_rund.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Round gravel area</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Paved area, rect."
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-pflasterflaeche_eckig item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_pflaster.png"
                                                                data-item-name="Paved area, rect."
                                                                data-item-slug="pflasterflaeche_eckig"
                                                                data-item-scale="{&quot;x&quot;:6,&quot;y&quot;:6}"
                                                                data-item-priority="red"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern="true"
                                                                data-canvas-geometry="rect"
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="135"
                                                                data-stroke-img=""
                                                                data-stroke-width="7"
                                                                data-fixedscaling=""
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/pflasterflaeche_eckig.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Paved area, rect.</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Paved area, round"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-pflasterflaeche_rund item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_pflaster.png"
                                                                data-item-name="Paved area, round"
                                                                data-item-slug="pflasterflaeche_rund"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:2}"
                                                                data-item-priority="red"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern="true"
                                                                data-canvas-geometry="circle"
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="135"
                                                                data-stroke-img=""
                                                                data-stroke-width="7"
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/pflasterflaeche_rund.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Paved area, round</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Cobbled path"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-kopfstein_eckig item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_kopfstein.png"
                                                                    data-item-name="Cobbled path"
                                                                    data-item-slug="kopfstein_eckig"
                                                                    data-item-scale="{&quot;x&quot;:0.8,&quot;y&quot;:1}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern="true"
                                                                    data-canvas-geometry="rect"
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="135"
                                                                    data-stroke-img=""
                                                                    data-stroke-width="7"
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/pfad_kopfstein.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Cobbled path</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-subgroup only-objects level-2 gardenplanner-element scrollable-menu"
                                                data-original-name="Fences and boundaries">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Fences and boundaries')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/steinmauer_gerade.png?v=20220628-2ec948a"
                                                    alt="Fences and boundaries" className="icons"/><span
                                                className="text-turquoise d-block mx-auto small">Fences and boundaries</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 ${levelTwoHoverIndex.includes('Fences and boundaries') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Stone wall"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-steinmauer_gerade item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/steinmauer_gerade.png?v=20220628-2ec948a"
                                                                data-item-name="Stone wall"
                                                                data-item-slug="steinmauer_gerade"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:0.75}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="280"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/steinmauer_gerade.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Stone wall</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Trellis"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-rankgitter item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/rankgitter.png?v=20220628-2ec948a"
                                                                    data-item-name="Trellis"
                                                                    data-item-slug="rankgitter"
                                                                    data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="280"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/rankgitter.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Trellis</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Brown partition wall"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-sichtschutzwand_braun item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/sichtschutz_braun.png?v=20220628-2ec948a"
                                                                data-item-name="Brown partition wall"
                                                                data-item-slug="sichtschutzwand_braun"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:0.4}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="280"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/sichtschutz_braun.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Brown partition wall</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="White partition wall"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-sichtschutzwand_weiss item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/sichtschutz_weiss.png?v=20220628-2ec948a"
                                                                data-item-name="White partition wall"
                                                                data-item-slug="sichtschutzwand_weiss"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:0.4}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="280"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/sichtschutz_weiss.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">White partition wall</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Brown fence"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-zaun_braun item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/zaun_braun.png?v=20220628-2ec948a"
                                                                    data-item-name="Brown fence"
                                                                    data-item-slug="zaun_braun"
                                                                    data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:0.4}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="282"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/zaun_braun.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Brown fence</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="White fence"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-zaun_weiss item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/zaun_weiss.png?v=20220628-2ec948a"
                                                                    data-item-name="White fence"
                                                                    data-item-slug="zaun_weiss"
                                                                    data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:0.4}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="282"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/zaun_weiss.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">White fence</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-subgroup only-objects level-2 gardenplanner-element scrollable-menu"
                                                data-original-name="Other items">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Other items')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/gewaechshaus.png?v=20220628-2ec948a"
                                                    alt="Other items"
                                                    className="icons"/>
                                                <span
                                                    className="text-turquoise d-block mx-auto small">Other items</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 ${levelTwoHoverIndex.includes('Other items') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Greenhouse"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-gewaechshaus item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/gewaechshaus.png?v=20220628-2ec948a"
                                                                    data-item-name="Greenhouse"
                                                                    data-item-slug="gewaechshaus"
                                                                    data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:3}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="460"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/gewaechshaus.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Greenhouse</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Playhouse"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-spielhaus item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/spielhaus.png?v=20220628-2ec948a"
                                                                    data-item-name="Playhouse"
                                                                    data-item-slug="spielhaus"
                                                                    data-item-scale="{&quot;x&quot;:1.25,&quot;y&quot;:1.25}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="460"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/spielhaus.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Playhouse</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Pergola"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-pergola item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/pergola.png?v=20220628-2ec948a"
                                                                    data-item-name="Pergola"
                                                                    data-item-slug="pergola"
                                                                    data-item-scale="{&quot;x&quot;:3.5,&quot;y&quot;:3.5}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="460"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/pergola.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Pergola</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Raised bed"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-hochbeet item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/hochbeet.png?v=20220628-2ec948a"
                                                                    data-item-name="Raised bed"
                                                                    data-item-slug="hochbeet"
                                                                    data-item-scale="{&quot;x&quot;:1.5,&quot;y&quot;:0.8}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="201"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/hochbeet.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Raised bed</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-subgroup level-1 gardenplanner-element scrollable-menu"
                                    data-original-name="Plants">
                                <span className="gui-toolbar-group"
                                      onMouseOver={e => {
                                          levelOneHoverHandler(e, 'Plants')
                                      }}>
                                    <img
                                        src="https://my-garden.gardena.com/assets/icons/svg/171107_GAR_Gartenplaner_Icons_5_Pflanzen.svg?v=20220628-2ec948a"
                                        alt="Plants" className="icons"/><span
                                    className="text-turquoise d-block mx-auto small">Plants</span></span>
                                    <div
                                        className={`subgroup-wrapper level-1 ${levelOneHoverIndex.includes('Plants') ? "visible" : ""}`}>
                                        <ul className="subgroup level-1">
                                            <li className="has-subgroup only-objects level-2 first gardenplanner-element scrollable-menu"
                                                data-original-name="Trees">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Trees')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/eiche.png?v=20220628-2ec948a"
                                                    alt="Trees"
                                                    className="icons"/>
                                                <span
                                                    className="text-turquoise d-block mx-auto small">Trees</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 first ${levelTwoHoverIndex.includes('Trees') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2 first">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Deciduous"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-laubbaum item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/laubbaum.png?v=20220628-2ec948a"
                                                                    data-item-name="Deciduous"
                                                                    data-item-slug="laubbaum"
                                                                    data-item-scale="{&quot;x&quot;:4,&quot;y&quot;:4}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="580"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/laubbaum.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Deciduous</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Maple"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-ahorn item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/ahorn.png?v=20220628-2ec948a"
                                                                    data-item-name="Maple"
                                                                    data-item-slug="ahorn"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="580"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/ahorn.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Maple</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Fir"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-nadelbaum item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/tanne.png?v=20220628-2ec948a"
                                                                    data-item-name="Fir"
                                                                    data-item-slug="nadelbaum"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="580"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/tanne.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Fir</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Pear"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-birnenbaum item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/birnenbaum.png?v=20220628-2ec948a"
                                                                    data-item-name="Pear"
                                                                    data-item-slug="birnenbaum"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="560"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/birnenbaum.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Pear</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Apple"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-apfelbaum item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/apfelbaum.png?v=20220628-2ec948a"
                                                                    data-item-name="Apple"
                                                                    data-item-slug="apfelbaum"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="560"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/apfelbaum.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Apple</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Cherry"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-kirschbaum item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kirschbaum.png?v=20220628-2ec948a"
                                                                    data-item-name="Cherry"
                                                                    data-item-slug="kirschbaum"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="580"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/kirschbaum.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Cherry</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Palm"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-palme item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/palme.png?v=20220628-2ec948a"
                                                                    data-item-name="Palm"
                                                                    data-item-slug="palme"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="580"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/palme.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Palm</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Magnolia"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-magnolie item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/magnolie.png?v=20220628-2ec948a"
                                                                    data-item-name="Magnolia"
                                                                    data-item-slug="magnolie"
                                                                    data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:2}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="560"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/magnolie.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Magnolia</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Oak"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-eiche item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/eiche.png?v=20220628-2ec948a"
                                                                    data-item-name="Oak"
                                                                    data-item-slug="eiche"
                                                                    data-item-scale="{&quot;x&quot;:4,&quot;y&quot;:4}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="590"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/eiche.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Oak</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Pine"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-pinie item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/pinie.png?v=20220628-2ec948a"
                                                                    data-item-name="Pine"
                                                                    data-item-slug="pinie"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="580"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/pinie.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Pine</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Birch"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-birke item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/birke.png?v=20220628-2ec948a"
                                                                    data-item-name="Birch"
                                                                    data-item-slug="birke"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="580"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/birke.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Birch</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Cypress"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-zypresse item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/zypresse.png?v=20220628-2ec948a"
                                                                    data-item-name="Cypress"
                                                                    data-item-slug="zypresse"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="570"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/zypresse.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Cypress</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Guava"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-guave item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/guave.png?v=20220628-2ec948a"
                                                                    data-item-name="Guava"
                                                                    data-item-slug="guave"
                                                                    data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:2}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="560"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/guave.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Guava</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Tree stump"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-baumstumpf item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/baumstumpf.png?v=20220628-2ec948a"
                                                                    data-item-name="Tree stump"
                                                                    data-item-slug="baumstumpf"
                                                                    data-item-scale="{&quot;x&quot;:0.8,&quot;y&quot;:0.8}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="180"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/baumstumpf.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Tree stump</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-subgroup only-objects level-2 gardenplanner-element scrollable-menu"
                                                data-original-name="Shrubs">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Shrubs')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/strauch_gelb.png?v=20220628-2ec948a"
                                                    alt="Shrubs"
                                                    className="icons"/><span
                                                className="text-turquoise d-block mx-auto small">Shrubs</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 ${levelTwoHoverIndex.includes('Shrubs') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Hedges"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-hecke item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kachel_hecke.png"
                                                                    data-item-name="Hedges"
                                                                    data-item-slug="hecke"
                                                                    data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:0.5}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern="true"
                                                                    data-canvas-geometry="rect"
                                                                    data-canvas-layer="landscape"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/hecke_mitte.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Hedges</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Golden bell"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-strauch_gelb item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/strauch_gelb.png?v=20220628-2ec948a"
                                                                    data-item-name="Golden bell"
                                                                    data-item-slug="strauch_gelb"
                                                                    data-item-scale="{&quot;x&quot;:1.2,&quot;y&quot;:1.2}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/strauch_gelb.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Golden bell</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Lilac"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-strauch_lila item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/strauch_flieder.png?v=20220628-2ec948a"
                                                                    data-item-name="Lilac"
                                                                    data-item-slug="strauch_lila"
                                                                    data-item-scale="{&quot;x&quot;:1.2,&quot;y&quot;:1.2}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/strauch_flieder.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Lilac</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Elder"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-strauch_weiss item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/strauch_holunder.png?v=20220628-2ec948a"
                                                                    data-item-name="Elder"
                                                                    data-item-slug="strauch_weiss"
                                                                    data-item-scale="{&quot;x&quot;:1.2,&quot;y&quot;:1.2}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/strauch_holunder.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Elder</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Shrub roses, pink"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-strauch_rosen item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/strauch_rosen.png?v=20220628-2ec948a"
                                                                    data-item-name="Shrub roses, pink"
                                                                    data-item-slug="strauch_rosen"
                                                                    data-item-scale="{&quot;x&quot;:1.2,&quot;y&quot;:1.2}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/strauch_rosen.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Shrub roses, pink</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Box, round"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-strauch_gruen item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/strauch_buchs.png?v=20220628-2ec948a"
                                                                    data-item-name="Box, round"
                                                                    data-item-slug="strauch_gruen"
                                                                    data-item-scale="{&quot;x&quot;:1.2,&quot;y&quot;:1.2}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/strauch_buchs.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Box, round</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Box, rect."
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-buchs item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/buchs.png?v=20220628-2ec948a"
                                                                    data-item-name="Box, rect."
                                                                    data-item-slug="buchs"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:0.4}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/buchs.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Box, rect.</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Wild shrub"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-wilder_strauch item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/wilder_strauch.png?v=20220628-2ec948a"
                                                                    data-item-name="Wild shrub"
                                                                    data-item-slug="wilder_strauch"
                                                                    data-item-scale="{&quot;x&quot;:0.6,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/wilder_strauch.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Wild shrub</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Dry shrub"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button
                                                                className="button-item-trockener_strauch item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/trockener_strauch.png?v=20220628-2ec948a"
                                                                data-item-name="Dry shrub"
                                                                data-item-slug="trockener_strauch"
                                                                data-item-scale="{&quot;x&quot;:0.6,&quot;y&quot;:0.6}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="plants"
                                                                data-canvas-layerdepth="225"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/trockener_strauch.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Dry shrub</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Cactus"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-kaktus item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kaktus.png?v=20220628-2ec948a"
                                                                    data-item-name="Cactus"
                                                                    data-item-slug="kaktus"
                                                                    data-item-scale="{&quot;x&quot;:0.6,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/kaktus.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Cactus</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Round cactus"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-kaktus_rund item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kaktus_rund.png?v=20220628-2ec948a"
                                                                    data-item-name="Round cactus"
                                                                    data-item-slug="kaktus_rund"
                                                                    data-item-scale="{&quot;x&quot;:0.6,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/kaktus_rund.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Round cactus</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-subgroup only-objects level-2 gardenplanner-element scrollable-menu"
                                                data-original-name="Flowers and grass">
                                            <span
                                                className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Flowers and grass')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/sonnenblumen.png?v=20220628-2ec948a"
                                                    alt="Flowers and grass" className="icons"/><span
                                                className="text-turquoise d-block mx-auto small">Flowers and grass</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 ${levelTwoHoverIndex.includes('Flowers and grass') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Sunflower"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-blume_gelb item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/sonnenblumen.png?v=20220628-2ec948a"
                                                                    data-item-name="Sunflower"
                                                                    data-item-slug="blume_gelb"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:1}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="228"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/sonnenblumen.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Sunflower</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Rose"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-blume_rot item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/rosenstrauch.png?v=20220628-2ec948a"
                                                                    data-item-name="Rose"
                                                                    data-item-slug="blume_rot"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:1}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="228"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden"><img
                                                                src="https://my-garden.gardena.com/assets/elements/png/rosenstrauch.png?v=20220628-2ec948a"
                                                                className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Rose</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Hydrangea"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-blume_weiss item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/hortensie_weiss.png?v=20220628-2ec948a"
                                                                    data-item-name="Hydrangea"
                                                                    data-item-slug="blume_weiss"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:1}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="205"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/hortensie_weiss.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Hydrangea</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Lavender"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-blume_flieder item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/lavendel.png?v=20220628-2ec948a"
                                                                    data-item-name="Lavender"
                                                                    data-item-slug="blume_flieder"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:1}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="205"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/lavendel.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Lavender</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Tulip"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-blume_pink item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/tulpe.png?v=20220628-2ec948a"
                                                                    data-item-name="Tulip"
                                                                    data-item-slug="blume_pink"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:1}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="205"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/tulpe.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Tulip</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Violet"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-blume_blau item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/veilchen.png?v=20220628-2ec948a"
                                                                    data-item-name="Violet"
                                                                    data-item-slug="blume_blau"
                                                                    data-item-scale="{&quot;x&quot;:1,&quot;y&quot;:1}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="205"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/veilchen.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Violet</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Fern"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-farn item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/farn.png?v=20220628-2ec948a"
                                                                    data-item-name="Fern"
                                                                    data-item-slug="farn"
                                                                    data-item-scale="{&quot;x&quot;:0.6,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/farn.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Fern</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Reeds"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-schilf item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/schilf.png?v=20220628-2ec948a"
                                                                    data-item-name="Reeds"
                                                                    data-item-slug="schilf"
                                                                    data-item-scale="{&quot;x&quot;:0.6,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="225"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/schilf.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Reeds</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Bamboo"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-bambus item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/bambus.png?v=20220628-2ec948a"
                                                                    data-item-name="Bamboo"
                                                                    data-item-slug="bambus"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="555"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/bambus.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Bamboo</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-subgroup only-objects level-2 gardenplanner-element scrollable-menu"
                                                data-original-name="Fruit and veg">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Fruit and veg')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/erdbeere.png?v=20220628-2ec948a"
                                                    alt="Fruit and veg"
                                                    className="icons"/><span
                                                className="text-turquoise d-block mx-auto small">Fruit and veg</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 ${levelTwoHoverIndex.includes('Fruit and veg') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Strawberries"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-erdbeere item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/erdbeere.png?v=20220628-2ec948a"
                                                                    data-item-name="Strawberries"
                                                                    data-item-slug="erdbeere"
                                                                    data-item-scale="{&quot;x&quot;:0.6,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="230"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/erdbeere.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Strawberries</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Raspberries"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-himbeere item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/himbeere.png?v=20220628-2ec948a"
                                                                    data-item-name="Raspberries"
                                                                    data-item-slug="himbeere"
                                                                    data-item-scale="{&quot;x&quot;:0.8,&quot;y&quot;:0.7}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="230"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/himbeere.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Raspberries</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Currants"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-johannisbeere item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/johannisbeere.png?v=20220628-2ec948a"
                                                                    data-item-name="Currants"
                                                                    data-item-slug="johannisbeere"
                                                                    data-item-scale="{&quot;x&quot;:0.8,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="230"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/johannisbeere.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Currants</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Tomatoes"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-tomate item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/tomate.png?v=20220628-2ec948a"
                                                                    data-item-name="Tomatoes"
                                                                    data-item-slug="tomate"
                                                                    data-item-scale="{&quot;x&quot;:0.5,&quot;y&quot;:0.8}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="230"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/tomate.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Tomatoes</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Cucumber"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-gurke item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/gurke.png?v=20220628-2ec948a"
                                                                    data-item-name="Cucumber"
                                                                    data-item-slug="gurke"
                                                                    data-item-scale="{&quot;x&quot;:0.8,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="230"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/gurke.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Cucumber</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Cabbage"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-rotkohl item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/rotkohl.png?v=20220628-2ec948a"
                                                                    data-item-name="Cabbage"
                                                                    data-item-slug="rotkohl"
                                                                    data-item-scale="{&quot;x&quot;:0.6,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="230"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/rotkohl.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Cabbage</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Carrot"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-karotte item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/karotte.png?v=20220628-2ec948a"
                                                                    data-item-name="Carrot"
                                                                    data-item-slug="karotte"
                                                                    data-item-scale="{&quot;x&quot;:0.8,&quot;y&quot;:0.7}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="230"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/karotte.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Carrot</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Potato"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-kartoffel item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kartoffel.png?v=20220628-2ec948a"
                                                                    data-item-name="Potato"
                                                                    data-item-slug="kartoffel"
                                                                    data-item-scale="{&quot;x&quot;:0.8,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="230"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/kartoffel.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Potato</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Cauliflower"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-blumenkohl item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/blumenkohl.png?v=20220628-2ec948a"
                                                                    data-item-name="Cauliflower"
                                                                    data-item-slug="blumenkohl"
                                                                    data-item-scale="{&quot;x&quot;:0.6,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="plants"
                                                                    data-canvas-layerdepth="230"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/blumenkohl.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Cauliflower</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-subgroup only-objects level-2 gardenplanner-element scrollable-menu"
                                                data-original-name="Pots">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Pots')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/gr_topf_m_strauch_rund.png?v=20220628-2ec948a"
                                                    alt="Pots"
                                                    className="icons"/><span
                                                className="text-turquoise d-block mx-auto small">Pots</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 ${levelTwoHoverIndex.includes('Pots') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Planted round pot"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button
                                                                className="button-item-gr_topf_m_strauch_rund item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/gr_topf_m_strauch_rund.png?v=20220628-2ec948a"
                                                                data-item-name="Planted round pot"
                                                                data-item-slug="gr_topf_m_strauch_rund"
                                                                data-item-scale="{&quot;x&quot;:0.5,&quot;y&quot;:0.5}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="plants"
                                                                data-canvas-layerdepth="202"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/gr_topf_m_strauch_rund.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Planted round pot</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Round pot"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button
                                                                className="button-item-gr_topf_ohne_strauch_rund item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/gr_topf_ohne_strauch_rund.png?v=20220628-2ec948a"
                                                                data-item-name="Round pot"
                                                                data-item-slug="gr_topf_ohne_strauch_rund"
                                                                data-item-scale="{&quot;x&quot;:0.5,&quot;y&quot;:0.5}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="plants"
                                                                data-canvas-layerdepth="202"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/gr_topf_ohne_strauch_rund.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Round pot</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Planted rect. pot"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button
                                                                className="button-item-gr_topf_m_strauch_eckig item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/gr_topf_m_strauch_eckig.png?v=20220628-2ec948a"
                                                                data-item-name="Planted rect. pot"
                                                                data-item-slug="gr_topf_m_strauch_eckig"
                                                                data-item-scale="{&quot;x&quot;:0.5,&quot;y&quot;:0.5}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="plants"
                                                                data-canvas-layerdepth="202"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/gr_topf_m_strauch_eckig.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Planted rect. pot</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Rect. pot"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button
                                                                className="button-item-gr_topf_ohne_strauch_eckig item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/gr_topf_ohne_strauch_eckig.png?v=20220628-2ec948a"
                                                                data-item-name="Rect. pot"
                                                                data-item-slug="gr_topf_ohne_strauch_eckig"
                                                                data-item-scale="{&quot;x&quot;:0.3,&quot;y&quot;:0.3}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="plants"
                                                                data-canvas-layerdepth="202"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/gr_topf_ohne_strauch_eckig.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Rect. pot</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-subgroup level-1 gardenplanner-element scrollable-menu"
                                    data-original-name="Furniture + Leisure">
                                <span className="gui-toolbar-group"
                                      onMouseOver={e => {
                                          levelOneHoverHandler(e, 'Furniture  Leisure')
                                      }}>
                                    <img
                                        src="https://my-garden.gardena.com/assets/icons/svg/171107_GAR_Gartenplaner_Icons_4_Ausstattung.svg?v=20220628-2ec948a"
                                        alt="Furniture + Leisure" className="icons"/><span
                                    className="text-turquoise d-block mx-auto small">Furniture + Leisure</span></span>
                                    <div
                                        className={`subgroup-wrapper level-1 ${levelOneHoverIndex.includes('Furniture  Leisure') ? "visible" : ""}`}>
                                        <ul className="subgroup level-1">
                                            <li className="has-subgroup only-objects level-2 first gardenplanner-element scrollable-menu"
                                                data-original-name="Leisure">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Leisure')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/kohlegrill_rund.png?v=20220628-2ec948a"
                                                    alt="Leisure"
                                                    className="icons"/><span
                                                className="text-turquoise d-block mx-auto small">Leisure</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 first ${levelTwoHoverIndex.includes('Leisure') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2 first">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Grill"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-kohlegrill_rund item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/kohlegrill_rund.png?v=20220628-2ec948a"
                                                                    data-item-name="Grill"
                                                                    data-item-slug="kohlegrill_rund"
                                                                    data-item-scale="{&quot;x&quot;:0.7,&quot;y&quot;:0.54}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="305"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/kohlegrill_rund.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Grill</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Smoker"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-smoker item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/smoker.png?v=20220628-2ec948a"
                                                                    data-item-name="Smoker"
                                                                    data-item-slug="smoker"
                                                                    data-item-scale="{&quot;x&quot;:1.5,&quot;y&quot;:0.75}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="305"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/smoker.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Smoker</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Fireplace"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-feuerstaette item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/feuerstaette.png?v=20220628-2ec948a"
                                                                    data-item-name="Fireplace"
                                                                    data-item-slug="feuerstaette"
                                                                    data-item-scale="{&quot;x&quot;:0.7,&quot;y&quot;:0.7}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="305"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/feuerstaette.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Fireplace</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Play tower"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-klettergeruest item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/klettergeruest.png?v=20220628-2ec948a"
                                                                    data-item-name="Play tower"
                                                                    data-item-slug="klettergeruest"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:1.5}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="370"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/klettergeruest.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Play tower</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Slide"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-rutsche item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/rutsche.png?v=20220628-2ec948a"
                                                                    data-item-name="Slide"
                                                                    data-item-slug="rutsche"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:0.5}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="350"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/rutsche.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Slide</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Dog kennel"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-hundehuette item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/hundehuette.png?v=20220628-2ec948a"
                                                                    data-item-name="Dog kennel"
                                                                    data-item-slug="hundehuette"
                                                                    data-item-scale="{&quot;x&quot;:0.5,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="310"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/hundehuette.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Dog kennel</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Pen"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-freilaufgehege item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/freilaufgehege.png?v=20220628-2ec948a"
                                                                    data-item-name="Pen"
                                                                    data-item-slug="freilaufgehege"
                                                                    data-item-scale="{&quot;x&quot;:1.8,&quot;y&quot;:1}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="310"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/freilaufgehege.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Pen</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Sand box"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-sandkasten item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/sandkiste.png?v=20220628-2ec948a"
                                                                    data-item-name="Sand box"
                                                                    data-item-slug="sandkasten"
                                                                    data-item-scale="{&quot;x&quot;:1.5,&quot;y&quot;:1.5}"
                                                                    data-item-priority="red"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="170"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/sandkiste.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Sand box</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Child's swing"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-kinderschaukel item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/schaukel.png?v=20220628-2ec948a"
                                                                    data-item-name="Child's swing"
                                                                    data-item-slug="kinderschaukel"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:2.5}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="370"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/schaukel.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Child's swing</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Hammock"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-haengematte item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/haengematte.png?v=20220628-2ec948a"
                                                                    data-item-name="Hammock"
                                                                    data-item-slug="haengematte"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:1}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="308"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/haengematte.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Hammock</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Kids' football goal"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-fussballtor item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/fussballtor.png?v=20220628-2ec948a"
                                                                    data-item-name="Kids' football goal"
                                                                    data-item-slug="fussballtor"
                                                                    data-item-scale="{&quot;x&quot;:1.8,&quot;y&quot;:1.2}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="320"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/fussballtor.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Kids' football goal</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Trampoline"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-trampolin item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/trampolin.png?v=20220628-2ec948a"
                                                                    data-item-name="Trampoline"
                                                                    data-item-slug="trampolin"
                                                                    data-item-scale="{&quot;x&quot;:3.28,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="320"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/trampolin.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Trampoline</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Bouncy castle"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-huepfburg item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/huepfburg.png?v=20220628-2ec948a"
                                                                    data-item-name="Bouncy castle"
                                                                    data-item-slug="huepfburg"
                                                                    data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:2}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="330"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/huepfburg.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Bouncy castle</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Party tent, L"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-partyzelt_gross item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/partyzelt_gross.png?v=20220628-2ec948a"
                                                                    data-item-name="Party tent, L"
                                                                    data-item-slug="partyzelt_gross"
                                                                    data-item-scale="{&quot;x&quot;:6,&quot;y&quot;:6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="330"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/partyzelt_gross.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Party tent, L</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Party tent, S"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-partyzelt_klein item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/partyzelt_klein.png?v=20220628-2ec948a"
                                                                    data-item-name="Party tent, S"
                                                                    data-item-slug="partyzelt_klein"
                                                                    data-item-scale="{&quot;x&quot;:4,&quot;y&quot;:4}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="200"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/partyzelt_klein.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Party tent, S</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Pavilion"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-pavillon item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/pavillion.png?v=20220628-2ec948a"
                                                                    data-item-name="Pavilion"
                                                                    data-item-slug="pavillon"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="340"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling=""
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/pavillion.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Pavilion</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-subgroup only-objects level-2 gardenplanner-element scrollable-menu"
                                                data-original-name="Vehicles">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Vehicles')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/auto_suv_grau.png?v=20220628-2ec948a"
                                                    alt="Vehicles"
                                                    className="icons"/><span
                                                className="text-turquoise d-block mx-auto small">Vehicles</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 ${levelTwoHoverIndex.includes('Vehicles') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Limo"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-auto_limousine_weiss item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/auto_limousine_weiss.png?v=20220628-2ec948a"
                                                                data-item-name="Limo"
                                                                data-item-slug="auto_limousine_weiss"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:5}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="306"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/auto_limousine_weiss.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Limo</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="SUV"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-auto_suv_grau item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/auto_suv_grau.png?v=20220628-2ec948a"
                                                                    data-item-name="SUV"
                                                                    data-item-slug="auto_suv_grau"
                                                                    data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:4.5}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="306"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/auto_suv_grau.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">SUV</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Small car"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-auto_kleinwagen_gelb item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/auto_kleinwagen_gelb.png?v=20220628-2ec948a"
                                                                data-item-name="Small car"
                                                                data-item-slug="auto_kleinwagen_gelb"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:4}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="306"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/auto_kleinwagen_gelb.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Small car</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Bicycle"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-fahrrad item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/fahrrad.png?v=20220628-2ec948a"
                                                                    data-item-name="Bicycle"
                                                                    data-item-slug="fahrrad"
                                                                    data-item-scale="{&quot;x&quot;:0.5,&quot;y&quot;:1.8}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="306"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/fahrrad.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Bicycle</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Trailer"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-auto_anhaenger item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/auto_anhaenger.png?v=20220628-2ec948a"
                                                                    data-item-name="Trailer"
                                                                    data-item-slug="auto_anhaenger"
                                                                    data-item-scale="{&quot;x&quot;:1.5,&quot;y&quot;:2.5}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="306"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/auto_anhaenger.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Trailer</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-subgroup only-objects level-2 gardenplanner-element scrollable-menu"
                                                data-original-name="Furniture">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Furniture')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/esstischgruppe_rund_holz.png?v=20220628-2ec948a"
                                                    alt="Furniture" className="icons"/><span
                                                className="text-turquoise d-block mx-auto small">Furniture</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 ${levelTwoHoverIndex.includes('Furniture') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2">
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Bench"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button className="button-item-gartenbank item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/gartenbank.png?v=20220628-2ec948a"
                                                                    data-item-name="Bench"
                                                                    data-item-slug="gartenbank"
                                                                    data-item-scale="{&quot;x&quot;:1.5,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="360"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/gartenbank.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Bench</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Bench"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-gartenbank_holz item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/gartenbank_holz.png?v=20220628-2ec948a"
                                                                    data-item-name="Bench"
                                                                    data-item-slug="gartenbank_holz"
                                                                    data-item-scale="{&quot;x&quot;:1.5,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="360"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/gartenbank_holz.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Bench</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Lounge seat group"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-lounge_gruppe item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/lounge_gruppe.png?v=20220628-2ec948a"
                                                                    data-item-name="Lounge seat group"
                                                                    data-item-slug="lounge_gruppe"
                                                                    data-item-scale="{&quot;x&quot;:2.5,&quot;y&quot;:2.5}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="360"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/lounge_gruppe.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Lounge seat group</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Lounge corner bench"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-lounge_eckbank item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/lounge_eckbank_m_tisch.png?v=20220628-2ec948a"
                                                                    data-item-name="Lounge corner bench"
                                                                    data-item-slug="lounge_eckbank"
                                                                    data-item-scale="{&quot;x&quot;:2.5,&quot;y&quot;:1.5}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="360"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/lounge_eckbank_m_tisch.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Lounge corner bench</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Corner bench"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-gartenmoebel_eckbank item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/eckbank_m_tisch_weiss.png?v=20220628-2ec948a"
                                                                data-item-name="Corner bench"
                                                                data-item-slug="gartenmoebel_eckbank"
                                                                data-item-scale="{&quot;x&quot;:2.5,&quot;y&quot;:1.5}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="360"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/eckbank_m_tisch_weiss.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Corner bench</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Corner bench"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-gartenmoebel_eckbank_holz item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/eckbank_m_tisch_holz.png?v=20220628-2ec948a"
                                                                data-item-name="Corner bench"
                                                                data-item-slug="gartenmoebel_eckbank_holz"
                                                                data-item-scale="{&quot;x&quot;:2.5,&quot;y&quot;:1.5}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="360"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/eckbank_m_tisch_holz.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Corner bench</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Rect. table with chairs"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-gartenmoebel_tisch_eckig item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/esstisch_eckig_weiss.png?v=20220628-2ec948a"
                                                                data-item-name="Rect. table with chairs"
                                                                data-item-slug="gartenmoebel_tisch_eckig"
                                                                data-item-scale="{&quot;x&quot;:1.7,&quot;y&quot;:1}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="362"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/esstisch_eckig_weiss.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Rect. table with chairs</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Rect. table with chairs"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-esstischgruppe_eckig_holz item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/esstischgruppe_eckig_holz.png?v=20220628-2ec948a"
                                                                data-item-name="Rect. table with chairs"
                                                                data-item-slug="esstischgruppe_eckig_holz"
                                                                data-item-scale="{&quot;x&quot;:1.7,&quot;y&quot;:1}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="362"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/esstischgruppe_eckig_holz.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Rect. table with chairs</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Round table with chairs"
                                                            className="item-linebreak level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-gartenmoebel_tisch_rund item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/esstischgruppe_rund.png?v=20220628-2ec948a"
                                                                data-item-name="Round table with chairs"
                                                                data-item-slug="gartenmoebel_tisch_rund"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:2}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="362"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/esstischgruppe_rund.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Round table with chairs</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Round table with chairs"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-esstischgruppe_rund_holz item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/esstischgruppe_rund_holz.png?v=20220628-2ec948a"
                                                                data-item-name="Round table with chairs"
                                                                data-item-slug="esstischgruppe_rund_holz"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:2}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="362"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/esstischgruppe_rund_holz.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Round table with chairs</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Hollywood swing"
                                                            className="level-2 gardenplanner-element">
                                                            <button
                                                                className="button-item-hollywoodschaukel item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/hollywoodschaukel.png?v=20220628-2ec948a"
                                                                data-item-name="Hollywood swing"
                                                                data-item-slug="hollywoodschaukel"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:1.4}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="360"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/hollywoodschaukel.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Hollywood swing</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Beanbag"
                                                            className="level-2 gardenplanner-element">
                                                            <button className="button-item-sitzsack item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/sitzsack.png?v=20220628-2ec948a"
                                                                    data-item-name="Beanbag"
                                                                    data-item-slug="sitzsack"
                                                                    data-item-scale="{&quot;x&quot;:1.7,&quot;y&quot;:1.3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="360"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/sitzsack.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Beanbag</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Sun lounger"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button
                                                                className="button-item-gartenliege_lounge item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/gartenliege_lounge.png?v=20220628-2ec948a"
                                                                data-item-name="Sun lounger"
                                                                data-item-slug="gartenliege_lounge"
                                                                data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:0.8}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="360"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/gartenliege_lounge.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Sun lounger</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Sunbed"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-sonnenliege item-buttons"
                                                                    data-item-graphic="/assets/elements/png/sonnenliege.png?v=20220628-2ec948a"
                                                                    data-item-name="Sunbed"
                                                                    data-item-slug="sonnenliege"
                                                                    data-item-scale="{&quot;x&quot;:2,&quot;y&quot;:0.8}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="360"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/sonnenliege.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Sunbed</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Round parasol"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button
                                                                className="button-item-sonnenschirm_rund_creme item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/sonnenschirm_rund_creme.png?v=20220628-2ec948a"
                                                                data-item-name="Round parasol"
                                                                data-item-slug="sonnenschirm_rund_creme"
                                                                data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="460"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/sonnenschirm_rund_creme.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Round parasol</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Rectangular parasol"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button
                                                                className="button-item-sonnenschirm_eckig_grau item-buttons"
                                                                data-item-graphic="https://my-garden.gardena.com/assets/elements/png/sonnenschirm_eckig_grau.png?v=20220628-2ec948a"
                                                                data-item-name="Rectangular parasol"
                                                                data-item-slug="sonnenschirm_eckig_grau"
                                                                data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:1.5}"
                                                                data-item-priority="yellow"
                                                                data-canvas-type="image"
                                                                data-canvas-pattern=""
                                                                data-canvas-geometry=""
                                                                data-canvas-layer="structure"
                                                                data-canvas-layerdepth="460"
                                                                data-stroke-img=""
                                                                data-stroke-width=""
                                                                data-fixedscaling="true"
                                                                data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/sonnenschirm_eckig_grau.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Rectangular parasol</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-subgroup only-objects level-2 gardenplanner-element scrollable-menu"
                                                data-original-name="Lighting">
                                            <span className="gui-toolbar-group" onMouseOver={e => {
                                                levelTwoHoverHandler(e, 'Lighting')
                                            }}>
                                                <img
                                                    src="https://my-garden.gardena.com/assets/elements/png/laterne.png?v=20220628-2ec948a"
                                                    alt="Lighting"
                                                    className="icons"/><span
                                                className="text-turquoise d-block mx-auto small">Lighting</span></span>
                                                <div
                                                    className={`subgroup-wrapper only-objects level-2 ${levelTwoHoverIndex.includes('Lighting') ? "visible" : ""}`}>
                                                    <ul className="subgroup level-2" style={{maxWidth: "280px"}}>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Floor lamp"
                                                            className="item-linebreak level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-bodenleuchte item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/bodenleuchte.png?v=20220628-2ec948a"
                                                                    data-item-name="Floor lamp"
                                                                    data-item-slug="bodenleuchte"
                                                                    data-item-scale="{&quot;x&quot;:0.8,&quot;y&quot;:0.8}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="201"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/bodenleuchte.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Floor lamp</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Spotlight"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-scheinwerfer item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/scheinwerfer.png?v=20220628-2ec948a"
                                                                    data-item-name="Spotlight"
                                                                    data-item-slug="scheinwerfer"
                                                                    data-item-scale="{&quot;x&quot;:0.6,&quot;y&quot;:0.6}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="270"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/scheinwerfer.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Spotlight</span>
                                                            </button>
                                                        </li>
                                                        <li data-bs-placement="top" data-bs-html="true"
                                                            data-bs-original-title="Lantern"
                                                            className="level-2 lastRow gardenplanner-element">
                                                            <button className="button-item-laterne item-buttons"
                                                                    data-item-graphic="https://my-garden.gardena.com/assets/elements/png/laterne.png?v=20220628-2ec948a"
                                                                    data-item-name="Lantern"
                                                                    data-item-slug="laterne"
                                                                    data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                                    data-item-priority="yellow"
                                                                    data-canvas-type="image"
                                                                    data-canvas-pattern=""
                                                                    data-canvas-geometry=""
                                                                    data-canvas-layer="structure"
                                                                    data-canvas-layerdepth="270"
                                                                    data-stroke-img=""
                                                                    data-stroke-width=""
                                                                    data-fixedscaling="true"
                                                                    data-mode="garden">
                                                                <img
                                                                    src="https://my-garden.gardena.com/assets/elements/png/laterne.png?v=20220628-2ec948a"
                                                                    className="icons"/><span
                                                                className="text-turquoise d-block mx-auto small">Lantern</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-subgroup only-objects level-1 gardenplanner-element scrollable-menu"
                                    data-original-name="Ponds and pools">
                                <span className="gui-toolbar-group"
                                      onMouseOver={e => {
                                          levelOneHoverHandler(e, 'Ponds and pools')
                                      }}>
                                    <img
                                        src="https://my-garden.gardena.com/assets/icons/svg/171107_GAR_Gartenplaner_Icons_6_Wasser-Pools-Teiche.svg?v=20220628-2ec948a"
                                        alt="Ponds and pools" className="icons"/><span
                                    className="text-turquoise d-block mx-auto small">Ponds and pools</span></span>
                                    <div
                                        className={`subgroup-wrapper only-objects level-1 ${levelOneHoverIndex.includes('Ponds and pools') ? "visible" : ""}`}>
                                        <ul className="subgroup level-1">
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Fountain"
                                                className="item-linebreak level-1 gardenplanner-element">
                                                <button className="button-item-brunnen item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/brunnen.png?v=20220628-2ec948a"
                                                        data-item-name="Fountain"
                                                        data-item-slug="brunnen"
                                                        data-item-scale="{&quot;x&quot;:0.8,&quot;y&quot;:0.8}"
                                                        data-item-priority="red"
                                                        data-canvas-type="image"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="structure"
                                                        data-canvas-layerdepth="120"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/brunnen.png?v=20220628-2ec948a"
                                                        className="icons"/><span
                                                    className="text-turquoise d-block mx-auto small">Fountain</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Rect. pool"
                                                className="level-1 gardenplanner-element">
                                                <button className="button-item-pool_eckig item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/pool_eckig.png?v=20220628-2ec948a"
                                                        data-item-name="Rect. pool"
                                                        data-item-slug="pool_eckig"
                                                        data-item-scale="{&quot;x&quot;:4,&quot;y&quot;:2}"
                                                        data-item-priority="red"
                                                        data-canvas-type="image"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="structure"
                                                        data-canvas-layerdepth="122"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-fixedscaling="true"
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/pool_eckig.png?v=20220628-2ec948a"
                                                        className="icons"/><span
                                                    className="text-turquoise d-block mx-auto small">Rect. pool</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Round pool"
                                                className="level-1 gardenplanner-element">
                                                <button className="button-item-pool_rund item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/pool_rund.png?v=20220628-2ec948a"
                                                        data-item-name="Round pool"
                                                        data-item-slug="pool_rund"
                                                        data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:3}"
                                                        data-item-priority="red"
                                                        data-canvas-type="image"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="structure"
                                                        data-canvas-layerdepth="122"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-fixedscaling="true"
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/pool_rund.png?v=20220628-2ec948a"
                                                        className="icons"/><span
                                                    className="text-turquoise d-block mx-auto small">Round pool</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Pond, large"
                                                className="level-1 gardenplanner-element">
                                                <button className="button-item-teich_gross item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/teich_gross.png?v=20220628-2ec948a"
                                                        data-item-name="Pond, large"
                                                        data-item-slug="teich_gross"
                                                        data-item-scale="{&quot;x&quot;:4,&quot;y&quot;:3.38}"
                                                        data-item-priority="red"
                                                        data-canvas-type="image"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="structure"
                                                        data-canvas-layerdepth="122"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-fixedscaling="true"
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/teich_gross.png?v=20220628-2ec948a"
                                                        className="icons"/><span
                                                    className="text-turquoise d-block mx-auto small">Pond, large</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Pond, small"
                                                className="item-linebreak level-1 lastRow gardenplanner-element">
                                                <button className="button-item-teich_klein item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/teich_klein.png?v=20220628-2ec948a"
                                                        data-item-name="Pond, small"
                                                        data-item-slug="teich_klein"
                                                        data-item-scale="{&quot;x&quot;:1.5,&quot;y&quot;:1.24}"
                                                        data-item-priority="red"
                                                        data-canvas-type="image"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="structure"
                                                        data-canvas-layerdepth="122"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-fixedscaling="true"
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/teich_klein.png?v=20220628-2ec948a"
                                                        className="icons"/><span
                                                    className="text-turquoise d-block mx-auto small">Pond, small</span>
                                                </button>
                                            </li>
                                            <li data-bs-placement="right" data-bs-html="true"
                                                data-bs-original-title="Pond, oval"
                                                className="level-1 lastRow gardenplanner-element">
                                                <button className="button-item-teich_oval item-buttons"
                                                        data-item-graphic="https://my-garden.gardena.com/assets/elements/png/teich_oval.png?v=20220628-2ec948a"
                                                        data-item-name="Pond, oval"
                                                        data-item-slug="teich_oval"
                                                        data-item-scale="{&quot;x&quot;:3,&quot;y&quot;:2.175}"
                                                        data-item-priority="red"
                                                        data-canvas-type="image"
                                                        data-canvas-pattern=""
                                                        data-canvas-geometry=""
                                                        data-canvas-layer="structure"
                                                        data-canvas-layerdepth="122"
                                                        data-stroke-img=""
                                                        data-stroke-width=""
                                                        data-fixedscaling="true"
                                                        data-mode="garden">
                                                    <img
                                                        src="https://my-garden.gardena.com/assets/elements/png/teich_oval.png?v=20220628-2ec948a"
                                                        className="icons"/><span
                                                    className="text-turquoise d-block mx-auto small">Pond, oval</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Zoom/>

            </div>
        </>
    )
}

export default Main
