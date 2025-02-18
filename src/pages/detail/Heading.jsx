import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import HeaderLoader from "./../../components/loaders/HeaderLoader";
const Heading = () => {
  const { data, isLoading } = useSelector((store) => store.covidSlice);

  return (
    <div className="flex justify-between items-center">
      <Link
        to="/"
        className="bg-gray-400 py-2 px-2 pe-3 rounded-md shadow-md hover:bg-gray-500 flex gap-1 items-center"
      >
        <MdKeyboardArrowLeft className="text-2xl" />
        Geri
      </Link>
      {isLoading ? (
        <HeaderLoader />
      ) : (
        data && (
          <div className="flex items-center gap-2">
            <h1 className="text-gray-900 text-xl lg:text-2xl font-bold font-serif">
              {data.country}
            </h1>
            <div className="w-[64px] h-[40px] rounded-lg   overflow-hidden flex items-center p-0 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <img
                src={`https://flagsapi.com/${data.code}/flat/64.png`}
                alt="flag"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Heading;
