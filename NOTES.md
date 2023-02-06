  import { Component } from '@angular/core';
  import { MovieService } from './services/movie.service';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ MovieService ]
  })
  export class AppComponent {
    title = 'app works!';
  }

## 1. Compile TS to JS: 
```
tsc ts-file.js
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
a = "hello";
a = true;
```

### unknown: safer alternative to any
```
let a: unknown = 1;
a = "hello";
a = true;
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
cat.age = 1;
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
let x = 'hello';
console.log(((x as unknown) as number));
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