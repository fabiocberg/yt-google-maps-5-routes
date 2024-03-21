import { LocationItem } from "./AddressBox"

import arrowDown from "../assets/arrow_down.png";

type AddressRouteProps = {
    points: LocationItem[]
    onClear: () => void
}

export default function AddressRoute({
    points,
    onClear
}: AddressRouteProps) {
    console.log("points: ", points);
    return (
        <div className="address">
            {points.map((point, index) => (
                <div key={`rounte-point-${index}`} className="address-box-route-list">
                    {index === 0 ? null : (
                        <div>
                            <div>
                                <strong>Distância: </strong>{(point.distance / 1000).toFixed(2)} km
                            </div>
                            <div className="address-box-route-list-img">
                                <img src={arrowDown} alt="Arrow down" />
                            </div>
                        </div>
                    )}
                    <div>{point.formattedAddress}</div>
                    <div className="address-box-route-list-img">
                        {index === points.length - 1 ? null : (
                            <img src={arrowDown} alt="Arrow down" />
                        )}
                    </div>
                </div>
            ))}
            <button className="address-box-route-button-clear" onClick={onClear}>Limpar</button>
        </div>
    )
}
