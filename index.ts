import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
 function getMaxPrice(price: PriceBracket){
   let maxPrice: number = 0;
   switch(price){
     case PriceBracket.Low:
      maxPrice = 10.0;
      break;
     case PriceBracket.Medium:
      maxPrice = 20.0;
      break;
     case PriceBracket.High:
      maxPrice = 30.0;
      break;
   }
   return maxPrice;
 }
/// Add your getOrders() function below:

function getOrders(price: PriceBracket, orders: Order[][]){
  let filteredOrders: Order[][] = [];
  orders[0].filter((order: Order) => order.price <= getMaxPrice(price));
  orders.forEach((restaurant: Order[]) => {
    const result = restaurant.filter((order: Order) => order.price <= getMaxPrice(price));
    filteredOrders.push(result)
  })
  return filteredOrders
}
/// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], orders: Order[][]){
  restaurants.forEach((restaurant: Restaurant, index: number) => {
    if(orders[index].length > 0){
      console.log(restaurant.name);
      orders[index].forEach((order) => {
        console.log(`- ${order.name}: ${order.price}`);
      })
   }
  });
}

/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);
