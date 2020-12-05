import React from "react";

const Indo_view = ({positive, negative, death}) => {
    return (
        <div>
            <p>Positive: {positive}</p>
            <p>Cured: {negative}</p>
            <p>Death: {death}</p>
        </div>
    );
};

export default Indo_view;