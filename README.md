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

COMPONENTS

-   Reusable building blocks in your user interface. They are the combination of html/css/js.
-   You compose these components and finally tell React that how to combine all these components into a final user interface.
-   **Reusability** (Do not repeat yourself) & **Seperation of Concerns** (Dont do too many things in one and the same place. split big chunks of code into multiple smaller functions)
-   React allows you to create re-usable and reactive components consisting of HTML and JS.
-   Npm start process is not only wathching our code and deliver to the browser, it also transforms our code before delivering to the browser.
-   **Index.js** file is the first file to execute.
-   We have only one HTML file because of the Single Page App. Only one html file is delvered to browser BUT on this single file we have our react code that changes what we see on the browser.
-   JSX - special term for React. (JS - XML)
-   Component is just a JS function which returns HTML codes.
-   Err: Objects are not valid as a React child - (new Date()=> .toISOString()
-   **Props** has the same logic with function parameters. You can use different parameters and get different outputs and in React you can do the same thing with props. - Reusability
-   Props are custom HTML attributes.
-   React will ensure that we get one parameter in every compoentn which we use as a component.
-   toLocaleString () - basic JS method
-   Between the curly braces you can add your 'normal'JS code.
-   Even if you do not set in every openning and closing tag will have children props, it is something default. The value of the special children will be always the CONTENT OF THE OPENING AND CLOSING TAG.

------ EVENT HANDLERS AND USESTATE ------

-All event handlers in React has special props such as onClick/onChange etc. and all these event handler props want a function as a value and these functions are executed when that event occurs.

-Just because you change some variables React will not re-evaluate the component, we have to use USESTATE.

-React Hooks are functions that let us hook into the React state and lifecycle features from function components.

-USESTATE is a REACT hook. All hooks should be called inside the function component .
If you have data which might change and where changes to change data should be reflected on UI then we need STATE because regular variable will not do the trick with STATE however you can set and change the values and when you use STATE REACT will re-evaluate the component function and jsx codes AGAIN.

-It returns an ARRAY. The first element is current variable itself and the second element is the updating function.
When we use the useState and call the updating function coming from the useState, the component function will be executed AGAIN and evaluate JSX code AGAIN!!! This is what we need.

-UseState: Per component instance basis.

-We can use const because we are not assigning a value with an equal operator. instead we are assignin function to the const which returns the variable itself.

-If you read a value of an input element, it will always be a STRING. EVEN IF IT STORES A NUMBER.

-You can have multiple and different useStates in one component function.

-Whenever you update a state and also depend on the previous states, you should use the function way!!!

-Child => Parent: by utilizing the props to receive the function from the parent and call in child.

-As there is no transfer beween the siblings in REACT, we use the closest parent component.

**Control Component** The value in a component is passed on a parent component and is received from the parent component.

**Stateless/Dumb Component** The component which does not have any state.

**Statefull/Smart Component** The opposite.

-   You can assign JSX code to a variable.

------ React.fragment and <> ------

-To prevent to create a div soup, we can use React.fragment or <>.

-They basically create an empty wrapper. ( instead of the helpers)

-React.fragment always works but <> this one should be supported by the setup of your project.

------ Portal - ReactDOM.createPortal() ------

------ REFS ------

-With refs we create a connection between our HMTL which is rendered in the end (return) code and JS code.

-useRef is only usable inside of a functional component like the other hooks.

-   You can connect to every html element by using ref prop -use like key prop-, mostly you will do it for inputs.

-   Object output will have always be there with a current props and that current prop and this will holds the actual value that ref is connected with.

-   WHAT BEING STORE IS IS AN ACTUAL DOM NODE, NOT A VALUE, WHICH YOU CAN MANIPULATE.

-For the current project, you can get rid of your useState and value structure because you are using the ref now which gives you the current value inside of an object that is an actual DOM NODE.

-   When you want to only read a value and not plan to change it, you can use REF otherwise you can use useState and value structure.
    If you use ref in a case that using useState is more reasonable then you have to manipulate DOM without REACT which is an edge case.

------ CONTROLLED AND UNCONTROLLED COMPONENTS ------

-   if we access to a value by using ref then we have an unctolled component because their internal state is not controlled by react because we are using regular DOM API not a react. When you use useState then the components are controlled becuase their internal state is controlled by React.

------ useEffect Hook ------ (remember the how react works/ re-runs the function whenever the state is changed)

-   Another fucntion you can run insedie of your component function that is called with 2 argunments.

-   First ARGUMENT: A function that should be executed after every component evaluation if the specified dependency changed.

-   Second ARGUMENT: the specified dependency - an array full of dependencies.
