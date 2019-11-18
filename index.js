// Add your Circle class here
let pi = Math.PI

class Circle {
    
    constructor(radius) {
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2;
    }

    get circumference(){
        return (this.radius * 2) * pi;
    }

    get area(){
        return pi * (this.radius ** 2)
    }

    set diameter(diameter){
        this.radius = diameter / 2
    }

    set circumference(circumference){
        this.radius = circumference / (pi * 2)
    }

    set area(value){
        this.radius = value
    }

    

}

