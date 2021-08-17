class Car {
    constructor(name,speed) {
        this.name = name
        this.speed = speed

        this.printSpeed = ()=>{
            console.log(this.speed)
        }
    }
    printName() {
        console.log(this.name)
    }
}

var car1 = new Car('K5',100)
var car2 = new Car('K7',200)
var car3 = new Car('veloster',300)

car1.printName()
car2.printName()
car3.printName()
console.log(car1)