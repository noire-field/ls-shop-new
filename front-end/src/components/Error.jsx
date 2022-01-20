import React from "react";

function Error(props) {
    let errors = props.errors || [];

    if(errors.length <= 0) return null;

    return (
        <div className={`badge badge-danger d-block text-left p-2 ${props.className}`}>
            <ul className="mb-0 px-4">
                { errors.map((message, index) => <li key={index} className="text-bigger-125">{message}</li>)}
            </ul>
        </div>
    )
}

export default React.memo(Error);