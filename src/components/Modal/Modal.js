import React from 'react'
import "./Modal.css"

import Popup from 'reactjs-popup';


const Modal = (props) => (
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
                    task1
                </div>
                <div className="content">
                    <div>
                        {props.roadmapCardInfo.description}
                        some description
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
                    52%
                </div>
                <div>
                    {props.roadmapCardInfo.colorTag}
                    customer1
                </div>
                <div>
                    {props.roadmapCardInfo.tags}
                    styled array of tags
                </div>
                <div>
                    {props.roadmapCardInfo.people}
                    styled array of people
                </div>
                <div>
                    {props.roadmapCardInfo.blocks}
                    styled array of blocks
                </div>
                <div>
                    {props.roadmapCardInfo.blockedBy}
                    styled array of blockedBy
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
    </Popup>
);

export default Modal;