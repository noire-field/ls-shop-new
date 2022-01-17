import React from 'react';

const messages = [
    'I hope you have a good day.',
    'Please be safe.',
    'Thank you for being patient.',
    'You’re a game changer.'
]

function GetRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function Loading() {
    return (
        <div className="loading-screen">
            <div className="h-100 wrapper">
                <div className="info-zone d-flex text-white justify-content-center align-items-center">
                    <div className="loading-icon-wrapper">
                        <i className="far fa-circle icon-front"></i>
                        <i className="far fa-circle icon-back"></i>   
                    </div>
                    <p className="m-0 loading-text">{GetRandomMessage()}</p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Loading);