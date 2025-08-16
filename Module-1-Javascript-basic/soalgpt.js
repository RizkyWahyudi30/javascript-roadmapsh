// 📌 Soal Latihan JavaScript – Day 1

// 1. Apa yang akan terjadi kalau kamu mencoba mengubah nilai dari sebuah const?
const pi = 3.14;
pi = 22 / 7;
console.log(pi); // Will throw an Error: Assignment to constant variable.

// 2. Perhatikan kode berikut: Manakah yang error? Kenapa?
if (true) {
  var x = 10;
  let y = 20;
}
console.log(x);
console.log(y); // in this section have an error, because y is block scoped

// 3. Apa output dari kode ini?
console.log(a);
var a = 5; // Output: Undefined, because 'a is hosited and initialized

console.log(b);
let b = 10; // Output: ReferenceError, because 'b is hoisted but not initialized

// 4. Sebutkan 7 tipe data primitif di JavaScript, dan berikan contoh kodenya masing-masing.
let strEx = "Hello, Marine Jishia"; // type string
let numEx = 23; // type number;
let boolEx = false; // type boolean
let bigIntEx = 1241n; // type bigInt
let nullEx = null; // type null
let undefinedEx; // type undefined
let symEx = Symbol("unique"); // type symbol

// 5. Buat sebuah variabel id yang menggunakan Symbol dan jelaskan kenapa Symbol berbeda dengan string biasa.
let id = Symbol("user_id");
// Why symbol different string? because Symbol is unique and immutable, and string is mutable and have many ways of use

// 6. Apa tipe data num1 dan num2? Apakah num1 === num2? Jelaskan.
let num1 = 10;
let num2 = "10";
// Data type of num1 and num2 are different, because num1 is number and num2 is string. If we test with ===, its throw an false

// 7. ❓ Apa outputnya? Kenapa bisa begitu?
let car = {
  brand: "Toyota",
  year: 2020,
};

let newCar = car;
newCar.year = 2023;

console.log(car.year);
console.log(newCar.year);
// Output : 2023, how come that? newCar is reference to car, so when we change year in newCar, it also change value year in car object

// 8. Buatlah sebuah array berisi nama 5 teman kamu. Lalu tampilkan elemen pertama dan terakhir array tersebut dengan console.log.
let friends = ["Marine", "Kirana", "Nesya", "Fiarla", "Komuchi"];
console.log(friends[0]); // Output: Marine, because i access first element of array
console.log(friends[4]); // Output: Komuchi, because i access last element of array

// 9. Buat function bernama sayHello yang menerima parameter name lalu menampilkan "Hello, <name>". Coba panggil dengan namamu sendiri.
function sayHello(name) {
  console.log(`Hello, ${name}`);
}

sayHello("Marine Jishia"); // Output: Hello, Marine Jishia

// Apa perbedaan paling utama antara primitive types dan reference types kalau kita meng-copy variabel?
// There are several key differences :
// ======================================================================================= //
// 1. Storage: Primitive types are stored directly in the variable
// 2. Changeability: when we assign primitive types to another variable, a copy of that value is assigned, not a reference
// Example:
// -> Primitive type:
let aq = 10;
let bq = aq;
bq = 12;
console.log(aq); // 10
console.log(bq); // 12

// -> reference type:
let obj1 = { name: "Jishia" };
let obj2 = obj1;
obj2.name = "Marine";
console.log(obj1.name); // Marine
console.log(obj2.name); // Marine
