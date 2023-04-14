import React, { useEffect } from 'react'
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';
import "./Model.css"

const Model = () => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);
    const navigate = useNavigate()
    const closeModal = () => {
        navigate("/")
    }
    return ReactDOM.createPortal(
        <>
            <div className="model-wrapper" ></div>
            <div className="model-container">
                <h2>Sign in</h2>
                <p>
                    Subscribe to our newsletter and never miss our designs ,latest news.etc.
                    Our newsletter is sent once a week, every Monday
                </p>
                <button className="model-btn" onClick={closeModal}>
                    Accept It
                </button>
            </div>
        </>,
        document.querySelector(".myPortalModelDiv")
    );
}

export default Model