/*class Car{
    String m_strName;
    Car(String name){
        this.m_strName = name;
    }
}*/

function Car(name,speed){
    this.name = name
    this.speed = speed
    //var _name = name
    this.printName = () => {
        console.log(this.name)
    }
}

/*Car.prototype.printName2 = () => {
    console.log(this.name)
}*/ //->undefined
Car.prototype.printName2 = function(){
    console.log(this.name)
}

var car1 = new Car("bmw", 220)
var car2 = new Car("avante", 225)
var car3 = new Car("prius", 125)

car1.printName()
car1.printName2()
car2.printName2()
/*console.log(car1.printName())//function을 쓰면 this가 reset, arrowfunction을 쓰면 예방 가능
//console.log(car2)
//console.log(car3)*/