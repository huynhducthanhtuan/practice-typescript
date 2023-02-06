function func<S extends string | number, T extends string | number>(
    a: S,
    b: T
): [S, T] {
    return [a, b];
}

console.log(func("Score", 100));
