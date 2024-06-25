const countryContainer = document.querySelector(".countries-container");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(country.name.common);
      console.log(country.borders);
      const countryCard = document.createElement("a");
      countryCard.href = `/country.html?name=${country.name.common}`;
      countryCard.classList.add("country-card");

      countryCard.innerHTML = `
                    <img src="${
                      country.flags.svg
                    }" alt="{country.name.common} flag">
                      <div class="card-text">
                          <h3 class="card-title">${country.name.common}</h3>
                          <p><b>Population: </b>${new Intl.NumberFormat(
                            "en-IN",
                            { maximumSignificantDigits: 3 }
                          ).format(country.population)}</p>
                          <p><b>Region: </b>${country.region}</p>
                          <p><b>Capital: </b>${country.capital?.[0]}</p>
                      </div>`;
      countryContainer.appendChild(countryCard);
    });
  });
