//Cau 1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

//Cau 2
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 10, "Phones", true),
  new Product(2, "Samsung Galaxy S24", 28000000, 5, "Phones", true),
  new Product(3, "MacBook Air M2", 32000000, 0, "Laptops", false),
  new Product(4, "AirPods Pro", 6500000, 20, "Accessories", true),
  new Product(5, "Apple Watch Ultra", 21000000, 3, "Accessories", true),
  new Product(6, "Dell XPS 13", 30000000, 7, "Laptops", true),
];
console.log(products);

// Câu 3
const nameAndPriceList = products.map((p) => ({
  name: p.name,
  price: p.price,
}));
console.log("Câu 3:", nameAndPriceList);

// Câu 4
const inStockProducts = products.filter((p) => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// Câu 5
const hasExpensiveProduct = products.some((p) => p.price > 30000000);
if (hasExpensiveProduct.length > 0) {
  const names = hasExpensiveProduct.map((p) => p.name).join(", ");
  console.log("Câu 5: Có");
  console.log("Tên sản phẩm:", names);
} else {
  console.log("Câu 5: Không có");
}

// Câu 6
const allAccessoriesAvailable = products
  .filter((p) => p.category === "Accessories")
  .every((p) => p.isAvailable);
console.log("Câu 6:", allAccessoriesAvailable);

// Câu 7
const totalInventoryValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0,
);
console.log("Câu 7:", totalInventoryValue);

// Câu 8
for (const p of products) {
  console.log(
    `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`,
  );
}

// Câu 9
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// Câu 10
const availableAndInStockNames = products
  .filter((p) => p.isAvailable && p.quantity > 0)
  .map((p) => p.name);

console.log("Câu 10:", availableAndInStockNames);
