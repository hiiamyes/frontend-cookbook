import React, { forwardRef } from "react";
import Leaflet from "leaflet";

type Props = {
  map: Leaflet.Map;
  children?: React.ReactNode;
};

const Map = forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { map, children } = props;
    const mapChildren = [];
    map &&
      React.Children.forEach(children, (child) => {
        console.log(child.type);
        // if (child.type === React.Fragment) {
        React.Children.forEach(child.props.children, (child) => {
          // mapChildren.push(React.cloneElement(child, { map }));
        });
        // } else {
        mapChildren.push(React.cloneElement(child, { map }));
        // }
      });
    return (
      <div className="test" style={{ width: "100%", height: "100%" }} ref={ref}>
        {map && mapChildren}
      </div>
    );
  },
);

export default Map;
