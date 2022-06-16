// fetch("https://restcountries.com/v3.1/all")
// .then(function(res){
//     // console.log(res.json());
//     return res.json
// })
// .then(function(data){
//     console.log(data);
//     initialize(data);
// })
// .catch(function(err){
//     console.log("Errorr:  " + err);
// })
// function initialize(countriesData){
//     console.log(countriesData);
// }
const countriesList = document.getElementById('countries')
let countries;

countriesList.addEventListener('change', function(event){
    console.log(event.target.value);
})

fetch("https://restcountries.eu/rest/v2/all")
.then(res=>res.json())
.then(data=>initialize(data))
.catch(err=>console.log("Error: "+err));
 

function initialize(countriesData){
    countries = countriesData;
    let options = "";
//     for(let i=0; i<countries.length; i++){
//         options +=`<option value="${countries[i].alpha3Code}>${countries[i].name}</option>`;
//     }
// document.querySelector('#countries').innerHTML=options;
// };
countries.forEach(country => {
    options +=`<option value="${country.common}>${country.name}</option>`;
});
// countriesList.innerHTML = options;
// displayCountryInfo('AFG');

function displayCountryInfo(countriesAlpha3Code){
    const countryData = countries.find(country => country.alpha3Code===countryByAlpha3Code);
    console.log(countryData);
    document.getElementById('capital').innerHTML = countryData.capital;
    document.getElementById('currency').innerHTML = country.curriencies.map(c=>`${c.name}(${c.code})`.join(", ")),
    document.querySelector('flag-container img').src = countryData.flag;
    document.querySelector('flag-container img').alt = `flag of ${country.name}`;

}
