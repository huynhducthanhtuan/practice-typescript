const world = "world";

export function hello(who: string = world): string {
    return `Hello ${who}! `;
}

console.log(hello());

let x = 1;
console.log(typeof (x as unknown as string)); // string
