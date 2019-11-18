// Add your Circle class here
const pi = Math.PI
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get circumference() {
        return pi * 2 * this.radius
    }

    get diameter() {
        return this.radius * 2
    }

    get area() {
        return pi * this.radius * this.radius;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }

    set circumference(newCirc) {
        this.radius = newCirc / (2*pi)
    }
}