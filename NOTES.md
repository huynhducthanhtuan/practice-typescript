## 1. Compile TS to JS: 
tsc ts-file.js


## 2. Type Assignment: (Ép kiểu)
### Explicit Type (Tường minh)
const name: string = "Tuan";

### Implicit Type (Ngầm định)
const name = "Tuan";


## 3. Special Types
### any: disable type checking
let a: any = 1;
a = "hello";
a = true;

### unknown: safer alternative to any
let a: unknown = 1;
a = "hello";
a = true;

### never: throw error whenever it is defined
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

### undefined & null: same in JS
let y: undefined = undefined;
let z: null = null;


## 4. readonly: chỉ dùng với array và tupple
let aray: readonly number[] = [1, 2, 3];
let tuple: readonly [number, boolean, string] = [5, false, "Coding"];


## 5. constant: const, as const
const a1: number = 1;
const a2: number = 1 as const;


## 6. tupple: typed array
const tuple: [number, boolean, string] = [5, true, "A"];
tuple.push("B");
console.log(tuple); // [ 5, true, 'A', 'B' ]


## 7. Object types:
const cat: { name: string, age?: number } = {
    name: "Doraemon"
}
cat.age = 1;


## 8. enum: (~ class), a group of constants
## Numeric enum:
enum STT1 {
    First,
    Second,
    Third
}
console.log(STT1.First, STT1.Second, STT1.Third); // 0 1 2

enum STT2 {
    First = 1,
    Second,
    Third
}
console.log(STT2.First, STT2.Second, STT2.Third); // 1 2 3

enum STT3 {
    First = 1,
    Second = 3,
    Third
}
console.log(STT3.First, STT3.Second, STT3.Third); // 1 3 4

enum STT4 {
    First = 1,
    Second = 3,
    Third = 5
}
console.log(STT4.First, STT4.Second, STT4.Third); // 1 3 5

## String enum:
enum Status {
    Todo = "Todo",
    Doing = "Doing",
    Done = "Done"
}
console.log(Status.Todo, Status.Doing, Status.Done); // Todo Doing Done


## 9. Type Aliases
type CarYear = number
type CarType = string
type Car = {
  year: CarYear,
  type: CarType,
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const car: Car = {
  year: carYear,
  type: carType
};


## 10. Interfaces
interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

interface ColorRectangle extends Rectangle {
  color: string
}

const colorRectangle: ColorRectangle = {
  height: 20,
  width: 10,
  color: "red"
};


## 11. Union Types: Union | (OR)
const a: string | number = 1

function printCode (code: string | number) {
  return code;
}
