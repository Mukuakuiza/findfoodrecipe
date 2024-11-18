import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import RecipeItem from "../../components/recipeList/RecipeItem";
const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);
  if (loading) {
    return (
      <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
        Loading Please wait!...
      </div>
    );
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            No recipe to show. Please search another recipe.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
