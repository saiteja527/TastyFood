import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";

const requestConfig = {};
const Meals = () => {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return (
      <p
        style={{
          display: "grid",
          placeItems: "center",
          fontSize: "30px",
        }}
      >
        Fetching Meals...
      </p>
    );
  }
  if (error) {
    return <Error title="Failed to fetch the meals" message={error} />;
  }
  return (
    <ul id="meals">
      {meals.map((item) => (
        <MealItem key={item.id} meal={item} />
      ))}
    </ul>
  );
};

export default Meals;
