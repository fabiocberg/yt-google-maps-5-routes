import React, { useState } from "react";
import {
    GoogleMap,
    Marker,
    LoadScript,
    DirectionsService,
    DirectionsRenderer,
} from "@react-google-maps/api";
import "./MapView.css";
import AddressBox, { LocationItem } from "../components/AddressBox";

const libraries: any[] = ["places"];

const position = {
    lat: -27.590824,
    lng: -48.551262,
};

export interface MapPageProps {}

const MapPage = () => {
    const [map, setMap] = React.useState<google.maps.Map>();
    const [points, setPoints] = useState<LocationItem[]>([])
    const [locations, setLocations] = useState<LocationItem[]>([])

    const [response, setResponse] =
        React.useState<google.maps.DistanceMatrixResponse | null>(null);

    const onMapLoad = React.useCallback(function callback(
        map: google.maps.Map
    ) {
        // const bounds = new window.google.maps.LatLngBounds(position);
        // map.fitBounds(bounds);
        setMap(map);
    },
    []);

    const directionsServiceOptions =
        // @ts-ignore
        React.useMemo<google.maps.DirectionsRequest>(() => {
            if (points.length === 0 || points[0].location === undefined) {
                return;
            }
            return {
                origin: points[0].location,
                waypoints: points.length > 2 ? points.slice(1, points.length - 1).map((p) => ({location: p.location})) : [],
                destination: points[points.length - 1].location,
                travelMode: "DRIVING",
            };
        }, [points]);

    const directionsCallback = React.useCallback((res: any) => {
        if (res !== null && res.status === "OK") {
            setResponse(res);
        } else {
            console.log(res);
        }
    }, []);

    const directionsRendererOptions = React.useMemo<any>(() => {
        return {
            directions: response,
        };
    }, [response]);

    return (
        <div className="map">
            <LoadScript
                googleMapsApiKey={`${import.meta.env.VITE_GOOGLE_API}`}
                libraries={libraries}
                id="my-google-maps-routes"
                version="weekly"
            >
                <GoogleMap
                    onLoad={onMapLoad}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={position}
                    zoom={15}
                >
                    <AddressBox 
                        map={map} 
                        onTraceRoute={(setPoints)} 
                        onSelectedLocation={(location: LocationItem) => {
                            setLocations((prev) => [...prev, location])
                        }}
                        onClear={() => {
                            window.location.reload();
                        }}
                    />

                    {locations.map((p, i) => {
                        return (<Marker key={`marker-item-${i}`} position={p.location} />)
                    })}

                    {points.length > 0 && (
                        <DirectionsService
                            options={directionsServiceOptions}
                            callback={directionsCallback}
                        />
                    )}

                    {points.length > 0 && response && directionsRendererOptions && (
                        <DirectionsRenderer
                            options={directionsRendererOptions}
                        />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default MapPage;
