import { Link } from "react-router-dom";
const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-2 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe item" className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-black font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-xl truncate text-black">{item?.title}</h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="px-8  p-3 text-sm rounded-lg mt-5 uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:bg-black/75"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
