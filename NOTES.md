## 1. Compile TS to JS:

```
tsc ts-file-name.ts
```

## 2. Type Assignment: (Gán kiểu)

### Explicit Type (Kiểu tường minh)

```
const name: string = "Tuan";
```

### Implicit Type (Kiểu ngầm định)

```
const name = "Tuan";
```

## 3. Special Types

### any: disable type checking

```
let a: any = 1;

a = "hello";  // OK

a = true;  // OK
```

### unknown: safer alternative to any

```
let a: unknown = 1;

a = "hello";  // OK

a = true;  // OK
```

### never: throw error whenever it is defined

```
let x: never = true;

// Error: Type 'boolean' is not assignable to type 'never'.
```

### undefined & null: same in JS

```
let y: undefined = undefined;

let z: null = null;
```

## 4. readonly: chỉ dùng với array và tupple

```
let aray: readonly number[] = [1, 2, 3];

let tuple: readonly [number, boolean, string] = [5, false, "Coding"];
```

## 5. constant: const, as const

```
const a1: number = 1;

const a2: number = 1 as const;
```

## 6. tupple: typed array

```
const tuple: [number, boolean, string] = [5, true, "A"];

tuple.push("B");

console.log(tuple); // [ 5, true, 'A', 'B' ]
```

## 7. Object types:

```
const cat: { name: string, age?: number } = {
    name: "Doraemon"
}

cat.age = 1;  // OK
```

## 8. enum: (~ class), a group of constants

## Numeric enum:

```
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
```

## String enum:

```
enum Status {
    Todo = "Todo",
    Doing = "Doing",
    Done = "Done"
}

console.log(Status.Todo, Status.Doing, Status.Done); // Todo Doing Done
```

## 9. Type Aliases

```
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
```

## 10. Interfaces

```
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
```

## 11. Union Types: Union | (OR)

```
const a: string | number = 1

function printCode (code: string | number) {
  return code;
}
```

## 12. Function

## Return Type

```
// Optional parameter
function sum1 (a: number, b?: number): number {
    return a + (b || 0);
}

// Default parameter value
function sum2 (a: number, b: number = 0): number {
    return a + b;
}
```

## Void Return Type

```
function print (): void {
  console.log("Hello");
}
```

## Type Alias

```
type Square = (value: number) => number;

const squareFunction: Square = (value) => value ** 2;
```

## 13. Casting: the process of overriding a type

## Casting with as

```
let x: unknown = "hello";

console.log(typeof (x as string)); // string
```

## Casting with <>

```
let y: unknown = "hello";

console.log(typeof (<string>y)); // string
```

## Force Casting: as unknown, as target type

```
let x = '1';

console.log(((x as unknown) as number));  // Expected: 1
console.log(typeof ((x as unknown) as number));  // Expected: number
```

## 14. Generics

## Functions

```
function func<X, Y>(a: X, b: Y): [X, Y] {
    return [a, b];
}

console.log(func<string, number>("hello", 42)); // [ 'hello', 42 ]
console.log(func<number[], boolean>([1, 2], true)); // [ [1, 2], true ]
```

## Classes

```
class NameValue<X, Y> {
    private name: X | undefined;

    constructor(private value: Y) {}

    public setName(name: X) {
        this.name = name;
    }

    public getName(): X | undefined {
        return this.name;
    }

    public setValue(value: Y) {
        this.value = value;
    }

    public getValue(): Y | undefined {
        return this.value;
    }
}

let value = new NameValue<string, number>(100);

console.log(value.getName()); // undefined
console.log(value.getValue()); // 100

value.setName("yourNumber");
value.setValue(200);
console.log(value.getName()); // yourNumber
console.log(value.getValue()); // 200
```

## Type Aliases

```
type Wrapped<T> = { value: T };

const numberWrapped: Wrapped<number> = { value: 10 };
const booleanWrapped: Wrapped<boolean> = { value: true };
```

## Default Value

```
class NameValue<T = number> {
    constructor(private value: T) {}

    public getValue(): T | undefined {
        return this.value;
    }
}

let value1 = new NameValue<number>(100);
console.log(value1.getValue()); // 100

let value2 = new NameValue(200);
console.log(value2.getValue()); // 200
```

## Extends

```
function func<S extends string | number, T extends string | number>(a: S, b: T): [S, T] {
  return [a, b];
}

console.log(func("Score", 100));
```

## 15. keyof

## keyof with explicit keys

```
interface Person {
  name: string;
  age: number;
}

// `keyof Person` creates a union type of "name" and "age"
// property: "name" | "age"
function func (person: Person, property: keyof Person) {}
```

## keyof with index signatures

```
type StringMap = { [key: string]: unknown };

// `keyof StringMap` resolves to `string`
function func (property: keyof StringMap, value: string): StringMap {}
```

## 16. Nullish Coalescence (??): Return right-value if left-value is `null` or `undefined`

```
console.log(0 ?? "hello"); // 0
console.log(false ?? "hello"); // false

console.log(null ?? "hello"); // "hello"
console.log(undefined ?? "hello"); // "hello"
```

## 17. Utility Types

## Partial: All properties in an object to be `optional`.

```
interface Point {
    x: number;
    y: number;
}

// `Partial` allows x and y to be optional
let pointPart1: Partial<Point> = { x: 0, y: 0 };
let pointPart2: Partial<Point> = { y: 0 }; // OK
let pointPart3: Partial<Point> = { y: 0 }; // OK
```

## Required: All properties in an object to be `required`.

```
interface Car {
    name: string;
    price?: number;
}

let myCar: Required<Car> = {
    name: "Ford",
    price: 12000 // `Required` forces mileage to be defined
};
```

## Record: Define an object type with a specific key type and value type.

```
const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};
```

## Omit: Removes keys from an object type.

```
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob',
  // location: "a", // Error
  // `Omit` has removed age and location from the type and they can't be defined here
};
```

## Pick: Removes all but the specified keys from an object type.

```
interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob: Pick<Person, "name"> = {
    name: "Bob",
    // location: "a", // Error
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
```

## Exclude: Removes types from a union.

```
type Types = string | number;

const value1: Exclude<Types, string> = 1; // OK
const value2: Exclude<Types, string> = "hello"; // a string cannot be used here since Exclude removed it from the type.
```

## ReturnType: Extracts the return type of a function type.

```
type Point = () => { x: number; y: number };

const point: ReturnType<Point> = {
    x: 10,
    y: 20
};

// Same effect
const point1: ReturnType<() => { x: number; y: number }> = {
    x: 10,
    y: 20
};

// Same effect
const point2: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Same effect
const point3 = {
    x: 10,
    y: 20
};
```

## 18. Classes

## Class Definition

```
// Default visibility for properties/methods in Typescript class is `PUBLIC`
class Shape {
    id: number | undefined = 1;
    private getArea(): number {
        return 0;
    }
    protected getPerimeter(): number {
        return 0;
    }
}

const s = new Shape();
console.log(s.id); // 1
console.log(s.getArea()); // Error
console.log(s.getPerimeter()); // Error
```

```
class Person {
    // Declare member - Way 1
    // private name: string;

    // Readonly member - Must initialize
    private readonly age: number = 1;

    // Declare member - Way 2
    public constructor(private name: string) {
        this.name = name;
    }

    // public getter/setter methods
    public getAge(): number {
        return this.age;
    }
}

// Create an instance of Object Person
const person = new Person("Jane");
console.log(person.getAge());
```

```
class Person {
    private name: string | undefined;

    public getAge(): string | undefined {
        return this.name;
    }
}

console.log(new Person().getAge()); // undefined
```

```
class Person<T> {
    private name: T | undefined;

    constructor(name: T | undefined) {
        this.name = name;
    }

    public getName(): T | undefined {
        return this.name;
    }
}

const person = new Person<string>("Tuan");
console.log(person.getName()); // Tuan
```

## Inheritance: implements

## Phải khai báo và sử dụng lại tất cả các thuộc tính, phương thức theo đúng modifier access của interface/class mà lớp kế thừa

## Class implements interface (common using)

```
interface Shape {
    id: number;
    getArea: () => number;
}

class Square implements Shape {
    // Reuse Shape property
    public id: number = 10;

    public constructor(protected edge: number) {}

    // Reuse Shape method
    public getArea(): number {
        return this.edge ** 2;
    }

    // This method belongs to Square
    public getPerimeter(): number {
        return this.edge * 4;
    }
}

const s = new Square(2);
console.log(s.id); // 10
console.log(s.getArea()); // 4
console.log(s.getPerimeter()); // 8
```

## Class implements class

```
class Shape {
    id: number = 1;
    getArea(): number {
        return 0;
    }
}

// Square (base class) inherited from Shape (derived class)
class Square implements Shape {
    // Reuse Shape property - id
    public constructor(public id: number, private edge: number) {}

    // Reuse Shape method
    public getArea(): number {
        return this.edge ** 2;
    }

    // This method belongs to Square
    public getPerimeter(): number {
        return this.edge * 4;
    }
}

const s = new Square(10, 2);
console.log(s.id); // 10
console.log(s.getArea()); // 4
console.log(s.getPerimeter()); // 8
```

## Inheritance: extends

## A class can only extends one other class.

```
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}
```

```
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    // protected allow access from classes extend from this class, ex: Square
    constructor(
        protected readonly width: number,
        protected readonly height: number
    ) {}

    getArea(): number {
        return this.width * this.height;
    }

    toString(): string {
        return `Rectangle[${this.width}, ${this.height}]`;
    }
}

class Square extends Rectangle {
    // Must contains super calls
    constructor(width: number) {
        super(width, width);

        // Access base class properties through `super`
        console.log(super.height); // undefined
        console.log(super.width); // undefined
    }

    // override Rectangle's toString()
    toString(): string {
        return `Square[${this.width}]`;
    }
}

const s = new Square(4);
console.log(s.toString()); // Square[4]
console.log(s.height); // Error
console.log(s.width); // Error
```

## Abstract Class

```
abstract class Shape {
    // abstract property
    public abstract id: number;

    // abstract method
    public abstract getArea(): number;

    public toString(): string {
        return `Shape[area=${this.getArea()}]`;
    }
}

class Square extends Shape {
    public constructor(public id: number, public edge: number) {
        super();
    }

    // override base class's abstract method
    public getArea(): number {
        return this.edge ** 2;
    }
}

const rec = new Square(1, 4);
console.log(rec.id); // 1
console.log(rec.getArea()); // 16
console.log(rec.toString()); // Shape[area=16]
```
