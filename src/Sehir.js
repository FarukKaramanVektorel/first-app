import React, { useState } from 'react'
import data from './data/iller.json';
function Sehir() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
  
    const handleCityChange = (event) => {
      const city = data.find(city => city.il_adi === event.target.value);
      setSelectedCity(city);
      setSelectedDistrict(null); // İl değiştiğinde ilçe bilgisini sıfırla
    };
  
    const handleDistrictChange = (event) => {
      const district = selectedCity.ilceler.find(district => district.ilce_adi === event.target.value);
      setSelectedDistrict(district);
    };
  
    return (
      <div>
        <label htmlFor="cities">İl Seçin:</label>
        <select id="cities" onChange={handleCityChange}>
          <option value="">İl Seçin</option>
          {data.map(city => (
            <option key={city.il_adi} value={city.il_adi}>{city.il_adi}</option>
          ))}
        </select>
  
        {selectedCity && (
          <div>
            <h2>Kısa Bilgi</h2>
            <p>{selectedCity.kisa_bilgi}</p>
          </div>
        )}
  
        {selectedCity && (
          <div>
            <label htmlFor="districts">İlçe Seçin:</label>
            <select id="districts" onChange={handleDistrictChange}>
              <option value="">İlçe Seçin</option>
              {selectedCity.ilceler.map(district => (
                <option key={district.ilce_adi} value={district.ilce_adi}>{district.ilce_adi}</option>
              ))}
            </select>
          </div>
        )}
  
        {selectedDistrict && (
          <div>
            <h2>İlçe Bilgileri</h2>
            <p>Nüfus: {selectedDistrict.nufus}</p>
            {/* İlçe ile ilgili diğer bilgileri burada gösterebilirsiniz */}
          </div>
        )}
      </div>
    );
  }
  

export default Sehir