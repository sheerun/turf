/// <reference types="geojson" />

/***
 * http://turfjs.org/docs/#concave
 */
declare function concave(
    points: concave.Points,
    maxEdge: number,
    units: string): concave.Polygon;
declare namespace concave {
    type Points = GeoJSON.FeatureCollection<GeoJSON.Point>;
    type Polygon = GeoJSON.Feature<GeoJSON.Polygon>;
    type Units = "miles" | "nauticalmiles" | "degrees" | "radians" | "inches" | "yards" | "meters" | "metres" | "kilometers" | "kilometres";
}
export = concave;