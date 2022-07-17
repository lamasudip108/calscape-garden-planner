import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
// import LeafLetMap from "../leafletmap/LeafLetMap";


function MapLayout({ onMarkerDragEnd }) {
  const mapWrapperRef = useRef();

  const mapMinHeight = 300;
  const mapMaxHeight = 600;
  const [mapState, setMapState] = useState({
    width: "100%",
    height: mapMinHeight,
  });
  const { width, height } = mapState;

  const LeafLetMap = dynamic(
    () => import("../leafletmap/LeafLetMap"), // replace '@components/map' with your component's location
    {
      loading: () => <p>A map is loading</p>,
      ssr: false, // This line is important. It's what prevents server-side render
    }
  );

  return (
    <div>
      <div
        ref={mapWrapperRef}
        style={{
          height: height,
          position: "relative",
          marginBottom: "20px",
        }}
      >
        <LeafLetMap mapState={mapState} onMarkerDragEnd={onMarkerDragEnd} />
      </div>
    </div>
  );
}
export default MapLayout;
