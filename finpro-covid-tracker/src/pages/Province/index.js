import React, {useEffect, useState} from 'react';
import axios from "axios";
import Province_view from '../../components/Province_view';

const Province = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
      axios
        .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then((response) => setDatas(response.data.data));
    }, []);   

    return (
    <>
      {datas.map((item) => {
        return ( // eslint-disable-next-line
          <Province_view 
            provinsi={item.provinsi} 
            kasusPosi={item.kasusPosi}
            kasusSemb={item.kasusSemb}
            kasusMeni={item.kasusMeni}
          />
        );
      })}
    </>
    )
}

export default Province
