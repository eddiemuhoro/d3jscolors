import React, { useState } from 'react';

const RomaniaLocationForm = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const countries = ['Romania'];

  const countiesData = {
    Romania: {
      counties: [
        'Select County',
        'Alba',
        'Arad',
        'Arges',
        'Bacau',
        'Bihor',
        'Bistrita-Nasaud',
        'Botosani',
        'Braila',
        'Brasov',
        'Bucuresti',
        'Buzau',
        'Calarasi',
        'Caras-Severin',
        'Cluj',
        'Constanta',
        'Covasna',
        'Dambovita',
        'Dolj',
        'Galati',
        'Giurgiu',
        'Gorj',
        'Harghita',
        'Hunedoara',
        'Ialomita',
        'Iasi',
        'Ilfov',
        'Maramures',
        'Mehedinti',
        'Mures',
        'Neamt',
        'Olt',
        'Prahova',
        'Salaj',
        'Satu Mare',
        'Sibiu',
        'Suceava',
        'Teleorman',
        'Timis',
        'Tulcea',
        'Vaslui',
        'Vrancea',
      ],
      cities: {
        'Select County': ['Select City'],
        Alba: ['Select City', 'Alba Iulia', 'Sebes', 'Aiud'],
        Arad: ['Select City', 'Arad', 'Ineu', 'Lipova'],
        Arges: ['Select City', 'Pitesti', 'Curtea de Arges', 'Mioveni'],
        Bacau: ['Select City', 'Bacau', 'Onesti', 'Moinesti'],
        Bihor: ['Select City', 'Oradea', 'Salonta', 'Beius'],
        Bihor: ['Select City', 'Oradea', 'Salonta', 'Beius', 'Marghita', 'Stei'],
        BistritaNasaud: ['Select City', 'Bistrita', 'Nasaud'],
        Botosani: ['Select City', 'Botosani', 'Dorohoi', 'Bucecea'],
        Braila: ['Select City', 'Braila', 'Ianca', 'Insuratei'],
        Brasov: ['Select City', 'Brasov', 'Rasnov', 'Sacele', 'Codlea'],
        Bucuresti: ['Select City', 'Bucuresti'],
        Buzau: ['Select City', 'Buzau', 'Ramnicu Sarat', 'Nehoiu'],
        Calarasi: ['Select City', 'Calarasi', 'Oltenita', 'Fundulea'],
        CarasSeverin: ['Select City', 'Resita', 'Oravita', 'Caransebes'],
        Cluj: ['Select City', 'Cluj-Napoca', 'Turda', 'Dej'],
        Constanta: ['Select City', 'Constanta', 'Mangalia', 'Medgidia'],
        Covasna: ['Select City', 'Sfantu Gheorghe', 'Targu Secuiesc', 'Covasna'],
        Dambovita: ['Select City', 'Targoviste', 'Moreni', 'Gaesti'],
        Dolj: ['Select City', 'Craiova', 'Bailesti', 'Calafat'],
        Galati: ['Select City', 'Galati', 'Braila', 'Tecuci'],
        Giurgiu: ['Select City', 'Giurgiu', 'Bolintin-Vale', 'Mihai Viteazu'],
        Gorj: ['Select City', 'Targu Jiu', 'Motru', 'Rovinari'],
        Harghita: ['Select City', 'Miercurea Ciuc', 'Odorheiu Secuiesc', 'Cristuru Secuiesc'],
        Hunedoara: ['Select City', 'Deva', 'Orastie', 'Hateg'],
        Ialomita: ['Select City', 'Slobozia', 'Fetesti', 'Urziceni'],
        Iasi: ['Select City', 'Iasi', 'Pascani', 'Harlau'],
        Ilfov: ['Select City', 'Buftea', 'Popesti-Leordeni', 'Voluntari'],
        Maramures: ['Select City', 'Baia Mare', 'Sighetu Marmatiei', 'Viseu de Sus'],
        Mehedinti: ['Select City', 'Drobeta-Turnu Severin', 'Orsova', 'Strehaia'],
        Mures: ['Select City', 'Targu Mures', 'Sighisoara', 'Reghin'],
        Neamt: ['Select City', 'Piatra Neamt', 'Roman', 'Targu Neamt'],
        Olt: ['Select City', 'Slatina', 'Caracal', 'Corabia'],
        Prahova: ['Select City', 'Ploiesti', 'Baicoi', 'Breaza'],
        Salaj: ['Select City', 'Zalau', 'Simleu Silvaniei', 'Jibou'],
        SatuMare: ['Select City', 'Satu Mare', 'Carei', 'Negresti-Oas'],
        Sibiu: ['Select City', 'Sibiu', 'Medias', 'Cisnadie'],
        Suceava: ['Select City', 'Suceava', 'Falticeni', 'Radauti'],
        Teleorman: ['Select City', 'Alexandria', 'Rosiorii de Vede', 'Turnu Magurele'],
        Timis: ['Select City', 'Timisoara', 'Lugoj', 'Jimbolia'],
        Tulcea: ['Select City', 'Tulcea', 'Macin', 'Babadag'],
        Vaslui: ['Select City', 'Vaslui', 'Barlad', 'Husi'],
        Vrancea: ['Select City', 'Focsani', 'Adjud', 'Marasesti'],
      },
    },
  };

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setSelectedCounty('');
    setSelectedCity('');
  };

  const handleCountyChange = (event) => {
    const county = event.target.value;
    setSelectedCounty(county);
    setSelectedCity('');
    console.log(countiesData[selectedCountry]?.cities[county]); // Log the cities for the selected county
};

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
  };

  return (
    <div>
      <h1>Location Selector</h1>
      <form>
        <label htmlFor="countrySelect">Country:</label>
        <select id="countrySelect" value={selectedCountry} onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
<br />
        <label htmlFor="countySelect">County/State:</label>
        <select id="countySelect" value={selectedCounty} onChange={handleCountyChange}>
          {countiesData['Romania']?.counties.map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </select>
<br />
        <label htmlFor="citySelect">City:</label>
        <select id="citySelect" value={selectedCity} onChange={handleCityChange}>
          {countiesData['Romania']?.cities[selectedCounty]?.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default RomaniaLocationForm;
