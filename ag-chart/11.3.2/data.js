// 출처 : https://codesandbox.io/p/sandbox/nm8kqv?file=%2Fpackage.json%3A6%2C2
// 출처 : https://codesandbox.io/p/sandbox/z6c4nk?file=%2Findex.html
// 출처 : https://www.ag-grid.com/charts/javascript/axes-labels/

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
