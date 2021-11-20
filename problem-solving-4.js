// #1 Problem: Solution
// ===========================
function seerToMon(seer) {
// Checking if the parameter is positive number.
if (seer < 0 || typeof seer != "number") {
return "Please enter a positive integer.";
}
// Converting seer into Mon and returning the result.
const totalMon = seer / 40;
return totalMon;
}
const seerToMonResult = seerToMon(23);
console.log(seerToMonResult);
// #2 Problem: Solution
// ===========================
function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
// Checking if the parameters are number or not
if (
typeof shirtQuantity != "number" ||
typeof pantQuantity != "number" ||
typeof shoesQuantity != "number"
) {
return "Please enter the positive integer.";
// Checking if the parameters are positive number or not
} else if (shirtQuantity < 0 || pantQuantity < 0 || shoesQuantity < 0) {
return "Please enter the positive integer.";
}
// Calculating the price of products and returning the result.
const perShirtPrice = 100;
const perPantPrice = 200;
const pairShoesPrice = 500;
let totalSalesAmount = 0;
totalSalesAmount =
shirtQuantity * perShirtPrice +
pantQuantity * perPantPrice +
shoesQuantity * pairShoesPrice;
return totalSalesAmount;
}
const totalAmount = totalSales(0, 4, 3);
console.log(totalAmount);
// #3 Problem: Solution
// ===========================
function deliveryCost(itemQuantity) {
// Checking if the parameter is positive number.
if (itemQuantity < 0 || typeof itemQuantity != "number") {
return "Please enter a positive integer.";
}
// Calculating the delevery cost depending on the quantity and returning the result.
let totalCost = 0;
let restItems;
if (itemQuantity <= 100) {
totalCost = itemQuantity * 100;
return totalCost;
} else if (itemQuantity <= 200) {
restItems = itemQuantity - 100;
totalCost = 100 * 100 + restItems * 80;
return totalCost;
} else {
restItems = itemQuantity - 200;
totalCost = 100 * 100 + 100 * 80 + restItems * 50;
return totalCost;
}
}
const totalDeliveryCost = deliveryCost(99);
console.log(totalDeliveryCost);
// #4 Problem: Solution
// ===========================
const friends = [
"Asraful Islam",
"Aminul",
"Abu Bakar",
"Naime",
"Sayed Younus Nahid",
];
function perfectFriend(frineds) {
// Checking if the parameter is an Array.
if (typeof frineds != "object") {
return "Please enter an ARRAY having your friends names.";
}
// Checking the desired friends name using length and returning the result.
for (const friend of friends) {
if (friend.length == 5) {
return friend;
}
}
}
const bestFriend = perfectFriend(friends);
console.log(bestFriend);