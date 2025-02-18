const Card = ({ item }) => {
  return (
    <div className="p-5 bg-gray-300 text-black rounded-md">
      <p className="text-sm font-semibold mb-2 capitalize">{item[0]}</p>
      <p className="text-lg font-bold ">{!item[1] ? "Bilinmiyor" : item[1]}</p>
    </div>
  );
};

export default Card;
