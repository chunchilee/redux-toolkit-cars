import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    // 'abc'.includes('') //true
    return data
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, car) => {
        return acc + car.cost;
      }, 0);

    //方法一
    // let cost = 0;
    // for (let car of filteredCars) {
    //   cost += car.cost;
    // }
    // return cost;
    //方法二
    // return filteredCars.reduce((acc,car)=>{
    //   return acc+car.cost
    // },0)
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
};

export default CarValue;
