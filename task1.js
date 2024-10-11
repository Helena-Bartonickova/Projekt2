//1. část
const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

function checkCountry(country, countries){
    if (typeof country !== "string" || country.length === 0) {
      console.log(`Zadali jste neplatný dotaz ${country}`);
    return country;
    }
  const i = countries.indexOf(country);
    if (i !== -1) {
        console.log(`Zadaná krajina ${country} se nachází v seznamu krajin na indexu ${i}`)
  } else {
        console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin`)
    }
  }

function addCountry(country, countries){
    if (typeof country !== "string" || country.length === 0) {
      console.log(`Zadali jste neplatný dotaz ${country}`);
    return country;
    }
      const i = countries.indexOf(country);  
    if (i === -1) {
      countries.push(country);
      const newI = countries.length - 1;
      console.log(`Zadaná krajina ${country} byla úspěšně přidána do seznamu krajin na indexu ${newI}. Celkový počet krajin v seznamu je ${countries.length}.`);
  } else {
      console.log(`Zadaná krajina ${country} se nachází v seznamu krajin na indexu ${i}`);
    }
  }

  addCountry("Finland", countries)