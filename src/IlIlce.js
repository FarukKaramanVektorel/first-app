import React, { useEffect, useState } from "react";
import Il from "./data/il.json";
import Ilce from "./data/ilce.json";
import Koy from './data/koy.json'
function IlIlce() {
  const [selectedIlId, setSelectedIlId] = useState(null);
  const [selectedIlceId, setSelectedIlceId] = useState(null);
  const [iller, setIller] = useState(Il);
  const [ilceler, setIlceler] = useState([]);
  const [koyler,setKoyler]=useState([]);

  useEffect(() => {
    if(selectedIlId!=null){
       const selectedIlData=Ilce.filter(ilce=>ilce.il_id===selectedIlId);      
    setIlceler(selectedIlData) 
    }    
  }, [selectedIlId])

  useEffect(() => {
    if(selectedIlceId!=null){
        const selectedIlceData=Koy.filter(koy=>koy.ilce_id===selectedIlceId);       
        setKoyler(selectedIlceData)
    }
   
  }, [selectedIlceId])
  
  

  const handleIlChange = e => {
    setSelectedIlId(e.target.value);   
  };

  const handleIlceChange = e => {
    setSelectedIlceId(e.target.value);
  };

  const handleKoyChange=(e)=>{
    console.log(e.target.value)
  }

  return (
    <div>
      <div>
        <label>İller: </label>
        <select id="il" onChange={handleIlChange}>
          <option value="">İl Seçiniz</option>

          {iller.map((il, index) => {
            return (
              <option value={il.id} key={index}>
                {il.name}
              </option>
            );
          })}
        </select>
       
      </div>

      <div>
        <label>İlce: </label>        
          <select id="ilce" onChange={handleIlceChange}>
            <option value="">İlçe Seçiniz</option>
            {ilceler.map((ilce, index) => {
                return (
                  <option value={ilce.id} key={index}>
                    {ilce.name}
                  </option>
                );
              })}
          </select>        
      </div>
      <div>
        <label>Köy: </label>        
          <select id="koy" onChange={handleKoyChange}>
            <option value="">Köy Seçiniz</option>
            {koyler.map((koy, index) => {
                return (
                  <option value={koy.id} key={index}>
                    {koy.name}
                  </option>
                );
              })}
          </select>        
      </div>



    </div>
  );
}

export default IlIlce;
