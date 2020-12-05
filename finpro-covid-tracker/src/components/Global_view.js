import React from "react";

const Global_view = ({confirmed, recovered, deaths}) => {
    return (
        <div>
            <p>positif: {confirmed}</p>
            <p>sembuh: {recovered}</p>
            <p>mati: {deaths}</p>
        </div>
    );
};

export default Global_view;