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
        console.log(`Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${i}`)
  } else {
        console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin`)
    }
  }


//2. část
const arrayLength = countries.length

function addCountry(country, countries){
    if (typeof country !== "string" || country.length === 0) {
      console.log(`Zadali jste neplatný dotaz ${country}`);
    return country;
    }
  const i = countries.indexOf(country);
    if (i !== -1) {
      console.log(`Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${i}`);
  } else {(countries.push (country)) 
      console.log(`Zadaná krajina ${country} byla úspěšně přidána do seznamu krajin na indexu ${i}. Celkový počet krajin v seznamu je ${arrayLength}.`);
    }
  }

  addCountry("Czech", countries)