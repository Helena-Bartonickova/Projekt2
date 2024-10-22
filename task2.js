
const countriesPopulation = [
    { country: "China", population: 1439323776 },
    { country: "India", population: 1379302771 },
    { country: "USA", population: 331002651 },
    { country: "Indonesia", population: 269603400 },
    { country: "Pakistan", population: 220892340 },
    { country: "Bangladesh", population: 164970459 },
    { country: "Japan", population: 126451398 },
    { country: "Philippines", population: 109581078 },
    { country: "Vietnam", population: 97338579 },
    { country: "Turkey", population: 84339642 },
];

const populationTotal = 8000000000;


function populationPercentage (population, populationTotal) {
    const percentage = (population / populationTotal) * 100;
    return percentage.toFixed(2); 
}

console.log(populationPercentage(1439323776, populationTotal));





const copyCountries = [
    { country: "China", population: 1439323776 },
    { country: "India", population: 1379302771 },
    { country: "USA", population: 331002651 },
    { country: "Indonesia", population: 269603400 },
    { country: "Pakistan", population: 220892340 },
    { country: "Bangladesh", population: 164970459 },
    { country: "Japan", population: 126451398 },
    { country: "Philippines", population: 109581078 },
    { country: "Vietnam", population: 97338579 },
    { country: "Turkey", population: 84339642 },
];

const orderCountries = copyCountries.slice().sort((a, b) => a.population - b.population);

console.log(orderCountries)




const addId = copyCountries.map(function())


console.log(addId)

