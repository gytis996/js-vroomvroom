export const getCarById = async (id) => {
  const response = await fetch(
    `https://695e18b52556fd22f6774ce4.mockapi.io/api/v1/cars/${id}`
  );
  const car = await response.json();
  return car;
};

export const deleteCarById = async (id) => {
  const response = await fetch(
    `https://695e18b52556fd22f6774ce4.mockapi.io/api/v1/cars/${id}`,
    {
      method: "DELETE",
    }
  );

  const car = await response.json();
  return car;
};

export const addNewCar = async (car) => {
  const response = await fetch(
    "https://695e18b52556fd22f6774ce4.mockapi.io/api/v1/cars",
    {
      method: "POST",
      body: JSON.stringify(car),
      headers: { "Content-Type": "application/json" },
    }
  );
  const carRes = await response.json();
  return carRes;
};

export const fetchAllCars = async () => {
  const response = await fetch(
    "https://695e18b52556fd22f6774ce4.mockapi.io/api/v1/cars"
  );
  const cars = await response.json();
  cars.sort((a, b) => Number(a.price) - Number(b.price));
  return cars;
};
