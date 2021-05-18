import React, { useState, useEffect} from 'react'
import "./Modal.css"
import Popup from 'reactjs-popup';


const Modal = (props) => {

    return(
    <Popup
        open = {props.visibility === true}
        modal
        nested
    >
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="header">
                    {props.roadmapCardInfo.name}
                </div>
                <div className="content">
                    <div>
                        {props.roadmapCardInfo.description}
                    </div>
                </div>
                <div className="actions">
                    <Popup
                        trigger={<button className="button"> details </button>}
                        position="bottom left"
                        nested
                    >
            <span>
                <div>
                    {props.roadmapCardInfo.progress}
                </div>
                <div>
                    {props.roadmapCardInfo.colorTag}
                </div>
                <div>
                    {props.roadmapCardInfo.tags}
                </div>
                <div>
                    {props.roadmapCardInfo.people}
                </div>
                <div>
                    {props.roadmapCardInfo.blocks}
                </div>
                <div>
                    {props.roadmapCardInfo.blockedBy}
                </div>
            </span>
                    </Popup>
                    <button
                        className="button"
                        onClick={() => {
                            console.log('modal closed ');
                            close();
                        }}
                    >
                        close modal
                    </button>
                </div>
            </div>
        )}
    </Popup>)
};

export default Modal;