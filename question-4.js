// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let firstnum = inventory[0];

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].quantity < firstnum.quantity) {
    firstnum = inventory[i];
  }
}

console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${inventory.name} ซึ่งมี ${firstnum.quantity} ชิ้น`
);

// let firstnum = inventory[0];

// function thenquantity(inventory) {
//   for (let i = 0; i < inventory.length; i++) {
//     if (inventory[i].quantity < firstnum.quantity) {
//       firstnum = inventory[i];
//       console.log(firstnum);
//     }
//   }
//   return firstnum;
// }
// console.log(firstnum.quantity);
//console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${firstnum.name} ซึ่งมี ${firstnum.quantity}`)
