import React, {useEffect, useState} from 'react';
import Global_view from '../../components/Global_view';
import axios from "axios";

const Global = () => {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);

    useEffect(() => {
      axios
        .get("https://covid19.mathdro.id/api")
        .then((response) => {
            setData1(response.data.confirmed);
            setData2(response.data.recovered);
            setData3(response.data.deaths);
        });
    }, []);  

    return ( 
    <>          
        <Global_view
            confirmed ={data1.value} 
            recovered ={data2.value}
            deaths ={data3.value} 
        /> 
    </>
    )
}

export default Global
