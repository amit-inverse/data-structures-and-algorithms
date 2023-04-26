// reference type
// console.log([] == []);
// console.log([1] == [1]);

// var object1 = { value: 10 };
// var object2 = object1;
// var object3 = { value: 10 };
// console.log(object1 == object2);
// console.log(object1 == object3);
// object1.value = 15;
// console.log(object2.value);
// console.log(object3.value);

// context
// function b() {
//     let a = 0;
// }
// console.log(a);

// console.log(this);
// console.log(this === window);
// this.alert('Hello!');

// function a() {
//     console.log(this);
// }
// window.a();

// const object4 = {
//     a: function () {
//         console.log(this);
//     }
// }
// object4.a();

// instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    
}
