//In programming languages we often say "An object is instance of a class"
//Classes are a template for creating objects
//This means that using a class, i can create many objects and they all share methods and properties 
//Since objects can be enhanced ,there are many ways to create objects sharing methods and properties.
//but we want the simplest one

// <script>
// class Car {
//   constructor(brand) {
//     this.carName = brand;
//   }
// }

// myCar = new Car("Ford");
// document.getElementById("demo").innerHTML = "My car is a " + myCar.carName;
// </script>

//result will be My car ia a Ford.


//class
class Cookie {
    constructor(color){
        this.color = color
    }
    getColor() {
    return this.color
    }
    setColor(color) {
        this.color = color
    }
}

let CookieOne = new Cookie('green')


//pointer
//--------------------
num1 = 5
num2 = num1

//-----------------
let obj1 = {
  value :11
}

let obj2 = obj1


let obj3 = {
  value:57
}
obj2 = obj3
obj2 = obj1
