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
