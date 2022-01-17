import React from "react";

function Header(props) {
    return (
        <div className={props.className}>
            <h5 className="text-white ls-4 text-uppercase mb-0 text-center">Welcome to</h5>
            <h2 className="text-white text-center">LSGamerZ Shop</h2>
        </div>
    )
}

export default React.memo(Header);