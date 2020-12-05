import React from "react";

const Province_view = ({provinsi, kasusPosi, kasusSemb, kasusMeni}) => {
    return (
        <div>
            <p>provinsi: {provinsi}</p>
            <p>positif: {kasusPosi}</p>
            <p>sembuh: {kasusSemb}</p>
            <p>mati: {kasusMeni}</p>
        </div>
    );
};

export default Province_view;