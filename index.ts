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
