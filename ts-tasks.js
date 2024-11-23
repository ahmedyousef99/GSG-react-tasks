function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.2 },
];
console.log("Total price of all products: $".concat(calculateTotalPrice(products)));
//////////////////////////////////
// Task 5:
var checkEmailValidation = function (email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
console.log(checkEmailValidation("ahmed@gmail.com"));
console.log(checkEmailValidation("test-0.com"));
