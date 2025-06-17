// 출처 : https://codesandbox.io/p/sandbox/nm8kqv?file=%2Fpackage.json%3A6%2C2
// 출처 : https://codesandbox.io/p/sandbox/z6c4nk?file=%2Findex.html
// 출처 : https://www.ag-grid.com/charts/javascript/axes-labels/

const { AgCharts } = agCharts;

const options = {
  container: document.getElementById("myChart"),
  data: getData(800),
  // series: [
  //   {
  //     type: "line",
  //     xKey: "date",
  //     yKey: "price",
  //     marker: {
  //       enabled: false,
  //     },
  //   },
  // ],
  series: [
    {
      type: "line",
      xKey: "date",
      yKey: "price",
      marker: {
        enabled: true,
      },
    },
    {
      type: "scatter",
      //title: "Male",
      xKey: "date",
      xName: "date",
      yKey: "price",
      yName: "price",
    },
  ],
  axes: [
    {
      type: "time",
      position: "bottom",
      unit: "day",
      parentLevel: {
        enabled: true,
      },
    },
    {
      type: "number",
      position: "left",
    },
  ],
  zoom: {
    enabled: true,
    autoScaling: {
      enabled: true,
    },
  },
  navigator: {
    enabled: true,
  },
  initialState: {
    zoom: {
      ratioX: { start: 0.95, end: 1 },
    },
  },
};

const chart = AgCharts.create(options);

function zoomOut() {
  chart.setState({
    version: "11.0.0",
    zoom: {
      ratioX: { start: 0, end: 1 },
    },
  });
}

function zoomMonth() {
  chart.setState({
    version: "11.0.0",
    zoom: {
      ratioX: { start: 0.95, end: 1 },
    },
  });
}
