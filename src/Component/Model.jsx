import React, { useEffect } from 'react'
import ReactDOM from "react-dom";
import "./Model.css"
const Model = ({ closeModal, children, handleCloseButton }) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);
    return ReactDOM.createPortal(
        <>
            <div className="model-wrapper" onclick={closeModal}></div>
            <div className="model-container">
                {children}
                {handleCloseButton}
            </div>
        </>,
        document.querySelector(".myPortalModelDiv")
    );
}

export default Model