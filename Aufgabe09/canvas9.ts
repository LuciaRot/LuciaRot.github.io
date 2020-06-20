

class Vector {
    x: number;
    y: number;

    scale(_factor: number): void {
        this.x *= _factor;
        this.y *= _factor;
    }

    add(_attend: Vector): void {
        this.x += _attend.x;
        this.y += _attend.y;
    }
}

let v1: Vector = new Vector();
v1.scale(2);
console.log(v1);