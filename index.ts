const world = "world";

export function hello(who: string = world): string {
    return `Hello ${who}! `;
}

console.log(hello());

enum Status {
    Todo = "Todo",
    Doing = "Doing",
    Done = "Done"
}
console.log(Status.Todo, Status.Doing, Status.Done); // Todo Doing Done
