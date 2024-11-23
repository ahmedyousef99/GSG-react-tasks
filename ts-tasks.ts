// To run the TypeScript code follow those steps
// * Install TypeScript by terminal: npm install -g typescript
// * Compile the file: `tsc ts-tasks.ts`
// * to run the code and showing the result in terminal : `node ts-tasks.js`

// Task 4:
interface Product {
  name: string;
  price: number;
}
function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}
const products: Product[] = [
  { name: "Apple", price: 1.5 },
  { name: "Banana", price: 0.8 },
  { name: "Orange", price: 1.2 },
];
console.log(`Total price of all products: $${calculateTotalPrice(products)}`);

//////////////////////////////////
// Task 5:
const checkEmailValidation = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
console.log(checkEmailValidation("ahmed@gmail.com"));
console.log(checkEmailValidation("test-0.com"));
