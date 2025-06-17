// 출처 : https://codesandbox.io/p/sandbox/8cm4q4?file=%2Fdata.js%3A1%2C1-506%2C1
// 출처 : https://charts.ag-grid.com/archive/9.3.2/javascript/sync/

const commonOptions = {
  sync: {
    enabled: true,
    axes: "x",
    nodeInteraction: true,
  },
  zoom: {
    enabled: true,
    enableSelecting: true,
  },
  axes: [
    {
      type: "time",
      position: "bottom",
      nice: false,
      tick: {
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
      type: "scatter",
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
    // {
    //   type: "line",
    //   xKey: "date",
    //   yKey: "value",
    //   tooltip: {
    //     renderer: ({ datum, xKey, yKey }) => {
    //       const { [xKey]: xValue, [yKey]: yValue } = datum;
    //       const dateFormatted = xValue.toLocaleDateString("en-GB", {
    //         day: "2-digit",
    //         month: "short",
    //         year: "numeric",
    //       });
    //       return { content: `${dateFormatted}: \$${yValue}` };
    //     },
    //   },
    // },
  ],
};

agCharts.AgCharts.create(chartOptions1);

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
};

agCharts.AgCharts.create(chartOptions2);
