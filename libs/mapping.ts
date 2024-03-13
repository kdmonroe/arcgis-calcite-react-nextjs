import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";

interface MapApp {
  view?: MapView;
}

const app: MapApp = {};

export async function init(container: HTMLDivElement) {
  if (app.view) {
    app.view.destroy();
  }

  const webMap = new WebMap({
    portalItem: {
      id: "e0227819c366467b95001a6ba0c9fbd1", 
    }
  });

  // Create the MapView, linking it to the WebMap instance
  const view = new MapView({
    map: webMap,
    container: container,
  });

  // Add the Search widget to the top right corner of the view
  const searchWidget = new Search({
    view: view,
  });
  view.ui.add(searchWidget, "top-right");

  app.view = view;

  return function cleanup() {
    app.view?.destroy();
  };
}


