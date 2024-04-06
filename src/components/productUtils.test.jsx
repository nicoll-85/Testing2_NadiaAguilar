import { expect } from "vitest";
import { changeOrderByPrice, getPriceColor } from "./ProductUtils";
import { describe, it } from "vitest";

describe("Testing functions", () => {
  it("changeOrderByPrice", () => {
    const unorderderPrices = [{ price: 50 }, { price: 50.1 }, { price: 34.0 }];
    const orderPrices = [{ price: 34 }, { price: 50 }, { price: 50.1 }];

    const result = changeOrderByPrice(unorderderPrices);

    expect(result).toStrictEqual(orderPrices);
  });

  it("getPriceColor red", () => {
    const price = 30;

    const result = getPriceColor(price);

    expect(result).toBe("red");
  });

  it("getPriceColor orange", () => {
    const price = 20;

    const result = getPriceColor(price);

    expect(result).toBe("orange");
  });

  it("getPriceColor green", () => {
    const price = 10;

    const result = getPriceColor(price);

    expect(result).toBe("green");
  });
});
