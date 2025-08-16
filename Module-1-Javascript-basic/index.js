// DAY 1 LEARNING JAVASCRIPT

// ============================================================================== //
//
// 1. Variable -> var, let, const
// 2. Data types -> string, number, boolean, null, undefined, bigInt, symbol
// 3. Typeof operator: use 'typeof' for check type of value variable
//
// =============================================================================== //

// 1. Variable declaration :
var name = "John"; // var
let age = 30; // let
const isHuman = true; // const

// so, what difference between var, let and const?
// simply, we start with const -> const is immutable variable, example : if your change a value of isHuman, is doesnt work
isHuman = false; // this will error, becaus isHuman use const variable

// next, if we are use var, we can change the value, and same if we use let
name = "Doe"; // will work
age = 32; // same
// and this difference between var and let :
// ====================================================================================================== //
// 1.  Scope
// -> Var : is function scoped and global scoped, if we declare in function, it only accessible in function,
// but if we decalare in global, it accessible in global function
//
// -> Let : is block scoped, meaning if we declare in block, it onlu accessible in that block we declare
// ====================================================================================================== //

if (true) {
  var a = "just learning javascript";
  console.log(a); // this a scoped function
  let b = "just learning javascript with let";
  console.log(b); // only work in block
}

console.log(a); // this will work, because change from scoped to global
console.log(b); // is error, because let is block scoped

// ====================================================================================================== //
// 2. Hoisting
// -> Var : is directly hoisted, and immediately initialized we can get "undefined" value;
// -> Let : is directlu hoisted, but not initialized
// ====================================================================================================== //

console.log(c);
var c = "hoisted"; // undefined

console.log(d);
let d = "hoisted"; // ReferenceError: Cannot access 'd' before initialization

// ====================================================================================================== //
// 3. Redeclaration
// -> Var : we can redaclare variable with var
// -< Let : dont redaclare variable

var name = "John Doe"; // is work, but is dangerous
// let age = 44; // is error, because we already "age" variale

//
//
//
//

// 2. Data types :
// In javascript, we have 2 2 type of data -> first we have primitive data types and second we have referance data types
// now we will learn primitive data types :

// ==================================================================================== //
// -> Primitive data types : string, number, boolean, bigInt, null, undefined, symbol
// -> Referance data types : object, array, function
// ==================================================================================== //

// -> Primitive :
// 1. String :
let greetingDou = "Hello sir, im backend developer"; // with double quote
let greetingSing = "Hello sir, im frontend developer"; // with single quote
let greetingBa = `Hello sir, im fullstack developer`; // with backtick (template literal)

// 2. Number :
let numInt = 12; // integer
let numFloat = 12.5; // float

// 3. Boolean :
let ifTrue = true; // true
let ifFalse = false; // false

// 4. bigInt :
let bigIntNum = 12414124n;

// 5. null :
let emptyValue = null;

// 6. undefined :
let notDefine = undefined;

// 7. Symbol :
let uniqueSym = Symbol("unique-fantastic");

// -> Referance :
// 1. Object :
let person = {
  name: "Marine Jishie",
  age: 23,
  isActive: true,
  addrees: {
    city: "England",
    phone: null,
    email: undefined,
  },
};

// 2. Array :
let fruits = ["Pineapple", "Banana", "Manggo", "Durian"];

// 3. Function :
function greetingMorning(name) {
  console.log(`Good Morning, ${name}`);
}
greetingMorning("Marine Jishia");

//
//
//
//
//

// 3. Typeof operator:
function userTesting()

console.log()