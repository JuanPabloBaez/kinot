import React from 'react';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <button className="popup-close" onClick={() => props.setTrigger((false))}>
                <svg id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                <path d="M2 30 L30 2 M30 30 L2 2" />
                </svg>
            </button>
            {props.children}
            </div>
        </div>
    ) : "" ;
}

export default Popup;