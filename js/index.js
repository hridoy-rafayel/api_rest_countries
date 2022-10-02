const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displyCountries(data));
}

const displyCountries = (countries) => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = country => {
    return `
        <div class="country"> 
        <img src="${country.flags.png}" />
        <h2>${country.name.common}</h2>
        </div>
    `;
}

loadCountries();