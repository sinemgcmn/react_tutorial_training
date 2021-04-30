-   Tradionally websites can be less reactive because of the request response cycle/flow namely you have to wait for loading a page or you click a button and then you wait for some action to complete.
-   Generally speaking JS can break this cycle as it runs on our browser and JS is able to manipulate UI with using DOM manipulation so we can easily change what users see.

REACT LIBRARY

-   React is a client side JS library for building user interfaces.
-   It aims building more and more reactive UI for the webs.
-   Why we use react if we can still do the same things with js?
    The thing is with js, you have to handle every single details on your UI by usiong DOM munipulation. You have to select the element, add the event i.e, add class etc etc BUT React library handle the most of the base part of your code and you as a developer can work on higher level. You will onbly create your custom HTML elements and React will do the rest of it.
-   You can create SINGLE PAGE APPLICATION that we never request a second page for a change and every single change/request happens on the current page. Better user experience.

ANGULAR - VUE- REACT

-   REACT: It does not have so many built-in features. You need 3th party libraries/packages to add pieces of functionality to your app as it mainly focused on components.

-   ANGULAR: it also focuse on components. It has more built-in features and uses type-script but can be overkill for smaller project.

-   VUE: Kind a mix of React and Angular.

REFRESHER

-   var/let/const - let and const were introduced by ES6.

-   arrow functions - you will solve your many problem with this by using arrow function.

-   default imports/exports - (you can call it wht you want: i.e person.js - export default person => import prs from person.js) || named -using {}- imports/exports

-   Classes are a feature which basically replace constructor functions and prototypes.
    Classes are the blueprints for objects.
    Classes are more convenient way of creating cosntructor functions so you create JS obj by using classes as blueprints.
    They also support inheritance.
    This part is important to understand the class components.

    If you want to inherit from parent, you have to extend your class constructor by using the parent
    If you use a constructor function in your class constructor - you do not have to but if you use - you have to super() constructor before accessing to this.

```
class Human {
     constructor(){
     this.gender = "male"
     }
     printGender(){
     console.log(this.gender)
     }
 }


 class Person **extends** Human {
     constructor(){
         **super();**
         this.name = "Max";
         this.gender = "female"
     }

     printMyName(){
         console.log(this.name)
     }
 }

const person = new Person()
person.printMyName()
person.printGender()
```

-   Next generation JS (ES7) (while using bin, select ES6-Babel)

```
class Human {
    gender = "male"

    printGender = () => {
    console.log(this.gender)
    }
}


class Person **extends** Human {
    name = "Max";
    gender = "female"

    printMyName = () => {
    console.log(this.name)
    }
}

const person = new Person()
person.printMyName()
person.printGender()
```

-   Spread and Rest Operator ...

It does not change the old array or object while adding a new element or property.

```
-spread-arrays-

const numbers = [1,2,3]
const newNumbers = [...numbers, 4];

console.log(newNumbers);
console.log(numbers)

-spread-objects-

const person = {
  name: "max"
}

const newPerson = {
  ...person,
  age:28
}

console.log(newPerson)

-rest operator-

const filter = (...args) => {return args.filter(el=> el === 1)};

console.log(filter(1,2,3))
```

-Destructuring - extract array elements or object properties and store them in variables

```
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2)

const numbers = [1, 2, 3];
[num1, ,num3] = numbers;
console.log(num1, num3)

```

-   Dont forget that objects and arrays are reference types if you reassign them you are copying the pointer not the value, if you want to do this in a real copy way you have to make a real copy.

```
const person = {
  name:"Max"
};

const secondPerson = person;
person.name = "Manu";

console.log(secondPerson)

const secondPerson = {
  ...person
}

console.log(secondPerson)

```

-
