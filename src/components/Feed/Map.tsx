import React, { useMemo, useRef, useCallback } from "react"
import { GoogleMap, useLoadScript, Marker, MarkerF } from "@react-google-maps/api"

import { env } from "src/env/server.mjs";
import MapItemList from "./MapItemList";

import MdIcecream from "react-icons/md";


type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAu1kwJUwj3pJMJqDyX1ZZO91Si8_Drr0w",
    libraries: ["places"],
  })

  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(() => ({ lat: 33.769671, lng: -118.1987413 }), []);
  const options = useMemo<MapOptions>(() => ({
    mapId: "621b84ba8cf959d4",
    disableDefaultUI: true,
    zoomControl: true,
    clickableIcons: false,
  }), []);

  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  if (loadError) return <p>"Error loading maps"</p>
  if (!isLoaded) return <p>"Loading Maps"</p>

  return (
    <div
    className="relative"
    style={{ maxHeight: "calc(100vh - 119px)", overflow: "hidden"}}
    >
      <MapItemList />
      <GoogleMap
        mapContainerStyle={{
          height: "calc(100vh - 119px)",
          width: "100%",
        }}
        zoom={13}
        center={center}
        options={options}
        onLoad={onLoad}
      >
        <MarkerF position={center} icon={"/mapicon2.png"} />
        <MarkerF position={{ lat:33.729671, lng: -118.287413  }}  />
        <MarkerF position={{ lat:33.779651, lng: -118.1997413  }} icon={"/mapicon.png"} />
        <MarkerF position={{ lat:33.775651, lng: -118.1897413  }} icon={"/mapicon3.png"} />
      </GoogleMap>
    </div>
  )
}