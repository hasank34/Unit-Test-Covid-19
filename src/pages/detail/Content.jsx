import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/error";
import ContentLoader from "../../components/loaders/ContentLoader";
import Card from "./Card";
import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Content = () => {
  const { data, isLoading, error } = useSelector((store) => store.covidSlice);
  const dispacth = useDispatch();
  const { code } = useParams();
  // data nesnesini diziye çevir
  const arr = Object.entries(data || {});

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} retry={() => dispacth(getDetails(code))} />
      ) : (
        arr.map((item, key) => <Card item={item} key={key} />)
      )}
    </div>
  );
};

export default Content;
