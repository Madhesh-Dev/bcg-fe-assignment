import Map, { Source, Layer, Popup, useMap } from "react-map-gl";
import React, { useRef, useState, useCallback } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import classes from "./Map.module.css";
import mockData from "@/data/inventoryMockData.json";
import cityIcon from "@/assets/cityIcon.svg";

function MapImage() {
    const { current: map } = useMap();

    if (map) {
        if (!map.hasImage("city")) {
            const img = new Image(24, 24);
            img.onload = () => map.addImage("city", img);
            img.src = cityIcon;
        }
    }

    return null;
}

function MapComponent() {
    const [popupInfo, setPopupInfo] = useState(null);

    const mapRef = useRef(null);

    const cities = mockData.cities;

    const handleMouseEvent = (event) => {
        const { features } = event;

        if (features.length) {
            const feature = features[0];
            const { properties } = feature;

            const { name, lat, long, population } = properties;

            setPopupInfo({
                name,
                lat,
                long,
                population,
            });
        } else {
            setPopupInfo(null);
        }
    };

    const geoJsonFeatures = {
        type: "FeatureCollection",
        features: cities.map((city) => ({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [city.coordinates.lng, city.coordinates.lat],
            },
            properties: {
                name: city.name,
                lat: city.coordinates.lat,
                long: city.coordinates.lng,
                population: city.population,
            },
        })),
    };

    const handleMapLoad = useCallback(() => {
        mapRef.current?.flyTo({
            center: [10, 56],
            zoom: 1.8,
            duration: 3000,
        });
    }, []);

    return (
        <div className={classes["map-container"]}>
            <Map
                ref={mapRef}
                reuseMaps={true}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                renderWorldCopies={false}
                interactiveLayerIds={["city-info-layer"]}
                onClick={handleMouseEvent}
                onMouseEnter={handleMouseEvent}
                onMouseLeave={() => setPopupInfo(null)}
                onLoad={handleMapLoad}
            >
                <MapImage />

                <Source
                    id={"city-info"}
                    type="geojson"
                    key="city-info"
                    data={geoJsonFeatures}
                >
                    <Layer
                        id={"city-info-layer"}
                        source={"city-info"}
                        type="symbol"
                        layout={{
                            "icon-image": "city",
                        }}
                    />
                </Source>

                {popupInfo &&
                !isNaN(popupInfo.lat) &&
                !isNaN(popupInfo.long) ? (
                    <Popup
                        longitude={popupInfo.long}
                        latitude={popupInfo.lat}
                        closeButton={false}
                        onClose={() => setPopupInfo(null)}
                        closeOnClick={false}
                        maxWidth="fit-content"
                        closeOnMove={true}
                    >
                        <div>City Name: {popupInfo.name}</div>

                        <div>Latitude: {popupInfo.lat}</div>

                        <div>Longitude: {popupInfo.long}</div>

                        <div>
                            Population:{" "}
                            {(popupInfo.population / Math.pow(10, 6))?.toFixed(
                                2
                            )}{" "}
                            Million
                        </div>
                    </Popup>
                ) : null}
            </Map>
        </div>
    );
}

export default MapComponent;
