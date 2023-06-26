import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
const CarList = () => {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(({ form, cars: { searchTerm, data } }) => {
    // return state.cars.data
    // 從state內取出需要的data
    // Derived State，利用 data 和  searchTerm，來衍生出新的 value 。
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // 已經再form表單輸入過的data，用粗體顯示
    // 需要透過useSelector，來取得state.form.name
    // 確認state.form.name是否有輸入，bold === '' || true
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div className={`panel ${bold && "bold"}`} key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => {
            handleDelete(car);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
