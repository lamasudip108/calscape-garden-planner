import React, {useState, useEffect, useRef} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPrint} from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {
    return (
        <div className="row" style={{
            marginTop: "2px",
            zIndex: "1",
            width: "100%",
            height: "50px"
        }}>
            <div className="navbar-headline position-relative" style={{marginTop: "2.5px"}}>
                <ul className="nav navbar-controls pull-left navbar-controls-toolbar top-0"
                    style={{position: "absolute", right: "505px "}}>
                    <li id="save-button" className="control control-save" data-bs-placement="top">
                        <a href="#" className="btn btn-xs like-btn-gardena">
                            <FontAwesomeIcon icon={faPrint} size={150}/>
                        </a>
                    </li>
                    <li id="save-as-button" className="control control-save-as" data-bs-placement="top"
                        data-bs-toggle="tooltip" data-bs-html="true" data-bs-original-title="Save as...">
                        <a href="#" className="btn btn-xs like-btn-gardena"
                           style={{paddingRight: "11px", paddingLeft: "7px"}}>
                            <i className="fa fa-save"/>
                            <i className="fa fa-plus"
                               style={{position: "absolute", right: "0px", paddingRight: "2px", fontSize: "10px"}}/>
                        </a>
                    </li>
                    <li id="delete-button" className="control control-delete" data-bs-placement="top"
                        data-bs-toggle="tooltip" data-bs-html="true" data-bs-original-title="Delete">
                        <a href="#" className="btn btn-xs like-btn-gardena"><i className="fa fa-trash-o"/></a>
                    </li>
                    <li id="undo-button" className="control control-backward" data-bs-placement="top"
                        data-bs-toggle="tooltip" data-bs-html="true" data-bs-original-title="Undo">
                        <a href="#" className="like-btn-gardena btn-xs btn"><i className="fa fa-undo"/></a>
                    </li>
                    <li id="redo-button" className="control control-forward" data-bs-placement="top"
                        data-bs-toggle="tooltip" data-bs-html="true" data-bs-original-title="Restore">
                        <a href="#" className="like-btn-gardena btn-xs btn"><i className="fa fa-repeat"/></a>
                    </li>
                    <li id="print-button" className="control control-print" data-bs-placement="top"
                        data-bs-toggle="tooltip"
                        data-bs-html="true" data-bs-original-title="Print" aria-describedby="tooltip779682">
                        <a href="#" className="like-btn-gardena btn-xs btn"><i className="fa fa-print"/></a>
                    </li>

                </ul>
                <ul className="nav navbar-controls pull-left navbar-controls-share-garden top-0"
                    style={{position: "absolute", right: "427px"}}>
                    <li className="control control-share-garden" data-bs-placement="top" data-bs-toggle="tooltip"
                        data-bs-html="true" data-bs-original-title="Share garden">
                        <a href="#" className="like-btn-gardena btn-xs btn d-block mx-auto text-uppercase">
                            <i className="fa copyicon fa-share-alt"/>
                        </a>
                    </li>
                </ul>
                <ul className="nav navbar-controls pull-left navbar-controls-new-garden top-0"
                    style={{position: "absolute", right: "286px"}}>
                    <li className="control control-new-garden">
                        <a href="#" className="like-btn-gardena btn-xs btn d-block mx-auto text-uppercase"
                           style={{padding: "4px 12px 0", fontSize: "14px"}}>
                            New drawing </a>
                    </li>
                </ul>

                <ul className="pull-left nav navbar-nav navbar-load-templates navbar-load-garden-collapse top-0"
                    style={{position: "absolute", right: "170px"}}>
                    <li id="templates-toggle-open" className="control btn-group">
                        <a className="like-btn-gardena btn-xs btn dropdown-toggle d-block mx-auto text-uppercase"
                           href="#"
                           data-bs-toggle="dropdown" data-hover="dropdown" role="button" aria-expanded="false"
                           style={{padding: "4px 12px 0", fontSize: "14px"}}>
                            Templates <i className="fa fa-caret-down"/>
                        </a>
                        <ul className="dropdown-menu" role="menu" id="garden-templates"
                            style={{
                                position: "absolute",
                                width: "200px",
                                left: "50%",
                                marginLeft: "-100px",
                                maxHeight: "106px"
                            }}>
                            <li className="garden-elements" data-bs-original-title="To garden"
                                data-bs-placement="bottom"
                                data-bs-toggle="tooltip" data-bs-html="true">
                                <a href="#"
                                   className="like-btn-default load-garden"
                                   data-load-template="0"> <span
                                    className="text-turquoise center-block version-title">Modern terrace</span>
                                    <div className="img-wrapper">
                                        <img className="img-fluid"
                                             src="https://my-garden.gardena.com/data/templates/template_0.jpg"/>
                                    </div>
                                </a></li>
                            <li className="garden-elements" data-bs-original-title="To garden"
                                data-bs-placement="bottom"
                                data-bs-toggle="tooltip" data-bs-html="true">
                                <a href="#"
                                   className="like-btn-default load-garden"
                                   data-load-template="1"> <span
                                    className="text-turquoise center-block version-title">Cosy suburban house</span>
                                    <div className="img-wrapper">
                                        <img className="img-fluid"
                                             src="https://my-garden.gardena.com/data/templates/template_1.jpg"/>
                                    </div>
                                </a></li>
                            <li className="garden-elements" data-bs-original-title="To garden"
                                data-bs-placement="bottom"
                                data-bs-toggle="tooltip" data-bs-html="true">
                                <a href="#"
                                   className="like-btn-default load-garden"
                                   data-load-template="2"> <span
                                    className="text-turquoise center-block version-title">Country property</span>
                                    <div className="img-wrapper">
                                        <img className="img-fluid"
                                             src="https://my-garden.gardena.com/data/templates/template_2.jpg"/>
                                    </div>
                                </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
