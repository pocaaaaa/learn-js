// 출처 : https://www.ag-grid.com/charts/archive/10.3.5/javascript/sync/
// 출처 : https://codesandbox.io/p/sandbox/lqr6rx?file=%2Fmain.js%3A15%2C27

const { AgCharts } = agCharts;

const commonOptions = {
  //minWidth: 0,
  //minHeight: 0,
  sync: {
    enabled: true,
    //axes: "x",
    //nodeInteraction: true,
  },
  zoom: {
    enabled: true,
    enableSelecting: true,
  },
};

const chartOptions1 = {
  ...commonOptions,
  container: document.getElementById("myChart1"),
  data: AAPL,
  title: {
    text: "Apple (AAPL)",
    textAlign: "left",
  },
  series: [
    {
      type: "line",
      xKey: "date",
      yKey: "value",
      tooltip: {
        renderer: ({ datum, xKey, yKey }) => {
          const { [xKey]: xValue, [yKey]: yValue } = datum;
          const dateFormatted = xValue.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
          return { content: `${dateFormatted}: \$${yValue}` };
        },
      },
    },
  ],
  axes: [
    {
      type: "time",
      position: "bottom",
      nice: false,
      interval: {
        maxSpacing: 180,
      },
      crosshair: {
        label: {
          format: "%d %b %Y",
        },
      },
    },
    {
      type: "number",
      position: "left",
      label: {
        format: "$~s",
      },
    },
  ],
};

AgCharts.create(chartOptions1);

const chartOptions2 = {
  ...commonOptions,
  container: document.getElementById("myChart2"),
  data: MSFT,
  title: {
    text: "Microsoft (MSFT)",
    textAlign: "left",
  },
  navigator: {
    min: 0.8,
    max: 1,
  },
  series: [
    {
      type: "bar",
      xKey: "date",
      yKey: "value",
      yName: "value",
      tooltip: {
        renderer: ({ datum, xKey, yKey }) => {
          const { [xKey]: xValue, [yKey]: yValue } = datum;
          const dateFormatted = xValue.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
          return { content: `${dateFormatted}: \$${yValue}` };
        },
      },
    },
  ],
  axes: [
    {
      type: "time",
      position: "bottom",
      nice: false,
      interval: {
        maxSpacing: 180,
      },
      crosshair: {
        label: {
          format: "%d %b %Y",
        },
      },
    },
    {
      type: "number",
      position: "left",
      label: {
        format: "$~s",
      },
    },
  ],
};

AgCharts.create(chartOptions2);

const chartOptions3 = {
  ...commonOptions,
  container: document.getElementById("myChart3"),
  data: MSFT,
  // title: {
  //   text: "Microsoft (MSFT)",
  //   textAlign: "left",
  // },
  // navigator: {
  //   min: 0.8,
  //   max: 1,
  // },
  series: [
    {
      type: "scatter",
      //title: "Male",
      //data: maleHeightWeight,
      xKey: "date",
      xName: "date",
      yKey: "value",
      yName: "value",
      tooltip: {
        renderer: ({ datum, xKey, yKey }) => {
          const { [xKey]: xValue, [yKey]: yValue } = datum;
          const dateFormatted = xValue.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
          return { content: `${dateFormatted}: \$${yValue}` };
        },
      },
    },
  ],
  // axes: [
  //   {
  //     type: "category",
  //     position: "bottom",
  //     nice: false,
  //     interval: {
  //       maxSpacing: 180,
  //     },
  //     crosshair: {
  //       label: {
  //         format: "%d %b %Y",
  //       },
  //     },
  //   },
  //   {
  //     type: "number",
  //     position: "left",
  //     label: {
  //       format: "$~s",
  //     },
  //   },
  // ],
  axes: [
    {
      type: "time",
      position: "bottom",
      nice: false,
      interval: {
        maxSpacing: 180,
      },
      crosshair: {
        label: {
          format: "%d %b %Y",
        },
      },
    },
    {
      type: "number",
      position: "left",
      label: {
        format: "$~s",
      },
    },
  ],
};

AgCharts.create(chartOptions3);
