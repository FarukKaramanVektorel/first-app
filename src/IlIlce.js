import React, { useState } from "react";
import Il from "./data/il.json";
import Ilce from "./data/ilce.json";
function IlIlce() {
  const [selectedIlId, setSelectedIlId] = useState(null);
  const [selectedIlceId, setSelectedIlceId] = useState(null);
  const [iller, setIller] = useState(Il);
  const [ilceler, setIlceler] = useState(Ilce);

  const handleIlChange = e => {
    setSelectedIlId(e.target.value);
  };

  const handleIlceChange = e => {
    setSelectedIlceId(e.target.value);
  };

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

            {ilceler
              .filter(ilce => ilce.il_id == selectedIlId)
              .map((ilce, index) => {
                return (
                  <option value={ilce.id} key={index}>
                    {ilce.name}
                  </option>
                );
              })}
          </select>
        
      </div>
    </div>
  );
}

export default IlIlce;
