import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Heading from "./Heading";
import Content from "./Content";

const Detail = () => {
  const dispatch = useDispatch();
  const { code } = useParams();

  useEffect(() => {
    dispatch(getDetails(code));
  }, []);
  return (
    <div className="flex-1 text-white grid place-items-center p-6 ">
      <div className="bg-white border shadow-2xl min-h-[80%] py-6 px-8 rounded-lg max-w-3xl max-md:w-full md:min-w-[600px]">
        <Heading />
        <Content />
      </div>
    </div>
  );
};

export default Detail;
