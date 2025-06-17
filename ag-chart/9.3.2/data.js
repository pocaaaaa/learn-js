// 출처 : https://codesandbox.io/p/sandbox/mskcff?file=%2Fdata.js%3A1%2C1-20%2C1
// 출처 : https://charts.ag-grid.com/archive/9.3.2/javascript/zoom/

// const NUM_DATA_POINTS = 400;

// function getData() {
//   const data = [];
//   for (let i = 0; i < NUM_DATA_POINTS; i++) {
//     data.push({
//       year: new Date(2024, 0, -i),
//       //year: new Date().getFullYear() - NUM_DATA_POINTS + i,
//       spending:
//         i === 0 ? random() * 100 : data[i - 1].spending + random() * 10 - 5,
//     });
//   }
//   return data;
// }

// let seed = 1234;
// function random() {
//   seed = (seed * 16807) % 2147483647;
//   return (seed - 1) / 2147483646;
// }

const startPrice = 100;
const maxDailyPriceChange = 1;

function seedRandom(seed = 1337) {
  return function random() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function getData(days) {
  let currentPrice = startPrice;
  const random = seedRandom();
  return Array.from({ length: days }, (_, i) => {
    const price = currentPrice;
    currentPrice += (random() * 2 - 1) * maxDailyPriceChange;

    const date = new Date(2024, 0, -i);

    return { date, price };
  }).reverse();
}
