import React from "react";

export const changeOrderByPrice = (products) => {
  return products.sort((a, b) => a.price - b.price);
};

export const getPriceColor = (price) => {
  if (price > 25) {
    return "red";
  } else if (price > 15 && price <= 25) {
    return "orange";
  } else {
    return "green";
  }
};
