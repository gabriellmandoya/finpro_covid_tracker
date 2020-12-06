import React, {useEffect, useState} from 'react';
import axios from "axios";
import Indo_view from '../../components/Indo_view';

const Indonesia = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
      axios
        .get("https://indonesia-covid-19.mathdro.id/api")
        .then((response) => setDatas(response.data));
    }, []);  

    return (
        <>
            {/* eslint-disable-next-line */}
            <Indo_view 
                positive={datas.perawatan}
                negative={datas.sembuh}
                death={datas.meninggal}
            />
        </>
    )
}

export default Indonesia
