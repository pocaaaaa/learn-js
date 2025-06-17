// 출처 : https://codesandbox.io/p/sandbox/mskcff?file=%2Fdata.js%3A1%2C1-20%2C1
// 출처 : https://charts.ag-grid.com/archive/9.3.2/javascript/zoom/

const options = {
  container: document.getElementById("myChart"),
  zoom: {
    enabled: true,
  },
  tooltip: {
    enabled: false,
  },
  axes: [
    {
      type: "number",
      position: "left",
    },
    {
      type: "time",
      position: "bottom",
      unit: "day",
      nice: false,
      label: {
        autoRotate: false,
      },
      tick: {
        minSpacing: 80,
        maxSpacing: 120,
      },
    },
  ],
  data: getData(800),
  series: [
    // {
    //   type: "line",
    //   xKey: "date",
    //   yKey: "price",
    // },
    {
      type: "scatter",
      //title: "Male",
      //data: maleHeightWeight,
      xKey: "date",
      xName: "date",
      yKey: "price",
      yName: "price",
    },
    // {
    //   type: "bar",
    //   xKey: "date",
    //   yKey: "price",
    //   yName: "price",
    // },
  ],
};

const options2 = {
  container: document.getElementById("myChart2"),
  zoom: {
    enabled: true,
  },
  tooltip: {
    enabled: false,
  },
  axes: [
    {
      type: "number",
      position: "left",
    },
    {
      type: "time",
      position: "bottom",
      unit: "day",
      nice: false,
      label: {
        autoRotate: false,
      },
      tick: {
        minSpacing: 80,
        maxSpacing: 120,
      },
    },
  ],
  data: getData(800),
  series: [
    // {
    //   type: "line",
    //   xKey: "date",
    //   yKey: "price",
    // },
    // {
    //   type: "scatter",
    //   //title: "Male",
    //   //data: maleHeightWeight,
    //   xKey: "year",
    //   xName: "year",
    //   yKey: "spending",
    //   yName: "spending",
    // },
    {
      type: "bar",
      xKey: "date",
      yKey: "price",
      yName: "price",
    },
  ],
};

agCharts.AgCharts.create(options);
agCharts.AgCharts.create(options2);
