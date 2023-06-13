import Color from "@arcgis/core/Color.js";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";

export const simpleMarkerSymbol = new SimpleMarkerSymbol({
  color: new Color([50, 50, 50, 1]),
  outline: new SimpleLineSymbol({
    color: new Color([68, 214, 44, 1]),
    style: "solid",
    width: 1
  }),
  size: 12
});

export const renderer = new SimpleRenderer({
  symbol: simpleMarkerSymbol
})
