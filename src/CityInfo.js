import React, { useEffect, useState } from "react";
import IlIlce from "./data/ililce.json";
import ListGroup from 'react-bootstrap/ListGroup';
import { Form } from "react-bootstrap";


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
    <div className="container-fluid">
      <div>
      <Form.Select size="lg" id="il" onChange={handleIl}>
        
          <option>İl Seçiniz</option>
          {il.map(i => {
            return (
              <option key={i.plaka_kodu} value={i.plaka_kodu}>
                {i.plaka_kodu}-{i.il_adi}
              </option>
            );
          })}
       </Form.Select>
      </div>

      <div>
        <Form.Select size="lg" id="il" onChange={handleIlce}>
          <option>İl Seçiniz</option>
          {ilceler.map(i => {
            return (
              <option key={i.ilce_kodu} value={i.ilce_kodu}>
                {i.ilce_kodu}-{i.ilce_adi}
              </option>
            );
          })}
        </Form.Select>
      </div>
      {selectedIl != null &&
        <div>
             <ListGroup>
             <ListGroup.Item as="li" active>
             {selectedIl.il_adi} Hakkında
      </ListGroup.Item>
      <ListGroup.Item >İl Adı : {selectedIl.il_adi}</ListGroup.Item>
      <ListGroup.Item> Plaka Kodu : {selectedIl.plaka_kodu}</ListGroup.Item>
      <ListGroup.Item>Alan Kodu : {selectedIl.alan_kodu}</ListGroup.Item>
      <ListGroup.Item> Nüfus : {selectedIl.nufus}</ListGroup.Item>
    </ListGroup>
       
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
