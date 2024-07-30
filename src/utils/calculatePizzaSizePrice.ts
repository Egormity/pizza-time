import { pizzaSizes } from '../data/dataToMap';
import { pizzaSizesTypes } from './types';

export function calculatePizzaSizePrice(pizzaPrice: number, pizzaSize: pizzaSizesTypes) {
  if (pizzaSize === pizzaSizes[0]) return 0;

  if (pizzaSize === pizzaSizes[1]) return Math.ceil(pizzaPrice * 0.1);

  if (pizzaSize === pizzaSizes[2] && Math.ceil(pizzaPrice * 0.1) === Math.ceil(pizzaPrice * 0.2))
    return Math.ceil(pizzaPrice * 0.1) + 1;
  if (pizzaSize === pizzaSizes[2]) return Math.ceil(pizzaPrice * 0.2);

  if (pizzaSize === pizzaSizes[3] && Math.ceil(pizzaPrice * 0.2) === Math.ceil(pizzaPrice * 0.3))
    return Math.ceil(pizzaPrice * 0.3) + 1;
  if (pizzaSize === pizzaSizes[3]) return Math.ceil(pizzaPrice * 0.3);
  return 999;
}
