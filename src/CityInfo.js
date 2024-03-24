import React, { useEffect, useState } from "react";
import IlIlce from "./data/ililce.json";

function CityInfo() {
  const [il, setIl] = useState(IlIlce);
  const [selectedIlId, setselectedIlId] = useState(null);
  const [selectedIl, setSelectedIl] = useState(null);
  const [ilceler, setIlceler] = useState([]);
  const [seciliIlce, setseciliIlce] = useState(null)
  const [seciliIlceId, setseciliIlceId] = useState(null)

 
useEffect(() => {
    console.log(seciliIlceId)
   const selectIlce=ilceler.find(ilce=>ilce.ilce_kodu===seciliIlceId);
   setseciliIlce(selectIlce)
}, [seciliIlceId])

  useEffect(
    () => {
      if (selectedIlId != null) {
        const seciliIl = il.find(il => il.plaka_kodu === selectedIlId);
        setSelectedIl(seciliIl);
        setIlceler(seciliIl.ilceler);
        console.log(ilceler);
      }
    },
    [selectedIlId]
  );

  const handleIl = e => {
    setselectedIlId(e.target.value);
    setIlceler([]);
  };

  const handleIlce = e => {
    setseciliIlceId(e.target.value)
    
  };
  return (
    <div className="urun">
      <div>
        <select id="il" onChange={handleIl}>
          <option>İl Seçiniz</option>
          {il.map(i => {
            return (
              <option key={i.plaka_kodu} value={i.plaka_kodu}>
                {i.plaka_kodu}-{i.il_adi}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <select id="il" onChange={handleIlce}>
          <option>İl Seçiniz</option>
          {ilceler.map(i => {
            return (
              <option key={i.ilce_kodu} value={i.ilce_kodu}>
                {i.ilce_kodu}-{i.ilce_adi}
              </option>
            );
          })}
        </select>
      </div>
      {selectedIl != null &&
        <div>
          <p>
            İl Adı : {selectedIl.il_adi}
          </p>
          <p>
            Plaka Kodu : {selectedIl.plaka_kodu}
          </p>
          <p>
            Alan Kodu : {selectedIl.alan_kodu}
          </p>
          <p>
            Nüfus : {selectedIl.nufus}
          </p>
          <p>
            Bölge : {selectedIl.bolge}
          </p>
          <p>
            Yüzölçümü : {selectedIl.yuzolcumu}
          </p>
          <p>
            Nüfus Artışı : {selectedIl.nufus_artisi}
          </p>
          <p>
            Erkek Nüfus Yüzde : {selectedIl.erkek_nufus_yuzde}
          </p>
          <p>
            Erkek Nüfus : {selectedIl.erkek_nufus}
          </p>
          <p>
            Kadın Nüfus Yüzde : {selectedIl.kadin_nufus_yuzde}
          </p>
          <p>
            Kadın Nüfus : {selectedIl.kadin_nufus}
          </p>
          <p>
            Nüfus Yüzdesi Genel : {selectedIl.nufus_yuzdesi_genel}
          </p>
          <p>
            Kısa Bilgi: {selectedIl.kisa_bilgi}
          </p>
        </div>}

        {seciliIlce!=null&&
        <div>
            
            
            <p>İlçe Adı: {seciliIlce.ilce_adi}</p>
            <p>Nüfus: {seciliIlce.nufus}</p>
            <p>Erkek Nüfus: {seciliIlce.erkek_nufus}</p>
            <p>Kadın Nüfus: {seciliIlce.kadin_nufus}</p>
        </div>}
    </div>
  );
}

export default CityInfo;
