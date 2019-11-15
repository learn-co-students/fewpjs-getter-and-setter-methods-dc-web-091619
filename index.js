class Circle {

    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return Math.PI * (this.diameter)
        //this.diameter is a pseudoclass so don't need to invoke it
    }

    get area(){
        return Math.PI*(this.radius**2)
    }

    set diameter(newDia){
        this.radius = newDia/2
    }

    set circumference(newCirc){
        this.radius = (newCirc/Math.PI)/2
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)
    }

}