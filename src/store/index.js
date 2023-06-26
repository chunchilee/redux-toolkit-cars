import { configureStore } from "@reduxjs/toolkit";
import {
  addCar,
  carsReducer,
  changeSearchTerm,
  removeCar,
} from "./ slices/carsSlice";
import { changeCost, changeName, formReducer } from "./ slices/formSlice";

const store = configureStore({
  // RTK Store combineReducers 可以用來組織每個reducer來管理它們自己的slices of state
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

// import {store} from './store'
// React 透過 Provider 可以向 Redux Store 拿取需要的 action creators
export { store, addCar, changeCost, changeSearchTerm, changeName, removeCar };
