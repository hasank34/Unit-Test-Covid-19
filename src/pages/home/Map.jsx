import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import Container from "./../../components/container/index";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();
  const geoUrl = "https://ismailarilik.com/react-covid-maps/geo.json";

  return (
    <Container design="max-md:!p-0 my-10 ">
      <h1 className="p-5 text-2xl font-semibold">Ülke Seçin</h1>
      <div className="border shadow-lg   md:rounded-xl  bg-gray-200">
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    onClick={() => navigate(`/detail/${geo.id}`)}
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "white",
                        stroke: "gray",
                      },
                      hover: {
                        fill: "#DB2777",
                      },
                      pressed: {
                        fill: "orange",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </Container>
  );
};

export default Map;
