import { Item } from "./types";

var itemNames:string[] = ["Fish","Tomato","Taiwan2001"];
console.log(itemNames);

var item1:Item = {
    id:1,
    name:"Fish",
    price:200,
    isSale: true,
}

var item2:Item = {
    id:2,
    name:"Tomato",
    price:80,
    isSale: true,
}

var item3:Item = {
    id:3,
    name:"Taiwan2001",
    price:200100,
    isSale: false,
}

var items = [item1,item2,item3];
console.log(items,typeof items);



var borderPrice = 300;
var filterItems = items.filter((item) => item.price <= borderPrice);
console.log(filterItems);

//function calculateTotalPrice(price:number,amount:number): number {
//    var totalPrice = price * amount;
//    return totalPrice;
//}

const calculateTotalPrice=(price:number,amount:number): number =>{
    var totalPrice = price * amount;
    return totalPrice;
}

function findItem(id:number){
    return items.find((item) => item.id == id);

    // if (result) {
    //     return result;
    // } else {
    //     return { id: 0, name: "", price: 0 };
    // }
}

var amount =5;

var totalPrice = calculateTotalPrice(item1.price,amount);
console.log(totalPrice);

var itemId = 2;
var selectItem = findItem(itemId);
console.log(selectItem);