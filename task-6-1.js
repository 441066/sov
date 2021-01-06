class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(x, y) {
        let vecPlus = new Vec();
        vecPlus.x = this.x + x;
        vecPlus.y = this.y + y;
        return vecPlus;
    }
    minus(x, y) {
        let vecMinus = new Vec();
        vecMinus.x = this.x - x;
        vecMinus.y = this.y - y;
        return vecMinus;
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

const Vector1 = new Vec(1, 1);
const Vector2 = Vector1.plus(2, 3);
const Vector3 = Vector1.minus(1, 1);

console.log(Vector2);
console.log(Vector3);
console.log(Vector2.length); //expect 5 - (3;4)-(0;0)=scrt((3-0)^2+(4-0)^2))=sqrt(9+16)=sqrt(25)=5
