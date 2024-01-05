function searchCountry() {
    const countryInput = document.getElementById('countryInput');
    const countryName = countryInput.value;

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Country not found');
            }
            return response.json();
        })
        .then(data => {
            const countryInfoDiv = document.getElementById('countryInfo');
            const countryData = data[0];

            const countryInfoHTML = `
                <div class="card-body mt-5">
                <div class="mb-3 d-flex justify-content-center align-items-center">
                <img src="${countryData.flags.svg}" alt="${countryData.name.common} flag" style="max-width: 100px;"></p>
                </div>
                    <h2 class="mb-3 d-flex justify-content-center align-items-center">${countryData.name.common}</h2>
                    <p class="mb-3 card-text d-flex justify-content-center align-items-center">Capital: ${countryData.capital}</p>
                    <p class="mb-3 card-text d-flex justify-content-center align-items-center">Population: ${countryData.population}</p>
                    <p class="mb-3 card-text d-flex justify-content-center align-items-center">Region: ${countryData.region}</p>
                </div>
            `;

            countryInfoDiv.innerHTML = countryInfoHTML;
        })
        .catch(error => {
            const countryInfoDiv = document.getElementById('countryInfo');
            countryInfoDiv.innerHTML = `<div class="card-body"><p class="card-text">${error.message}</p></div>`;
        });
}