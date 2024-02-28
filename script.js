
/*
let firstName = "genie";
let lastName = "Zeus"

console.log(firstName, lastName, age)

var age = 24
*/

//DATA TYPES
//primitive type-stored directly in the stack, where it is accessed from
//String,Number, Boolean, Null, undefined, Symbol,BigInt

//Reference Types  ====arrays, objects, function -stored in heap and accessed by refference
/*
const firstName ="genie";
const age= 24
const hasKids = true;
const apartmentNo = null

const output = apartmentNo
console.log(output, typeof output);
*/
/*
const person = {
    name:"genie",
    age:23
}
let newPerson = person;
newPerson.name = "zeues"

let newAge = person;
newPerson.age = 24

//console.log(person.name, newName)
console.log(person.name, person.age);
*/

//TYPE CASTING & TYPE COERSION
/*

let amount = "heko"
//changing strings to number 
amount = parseInt(amount)
//amount = +amount
//amount = Number(amount)

//Changing string to decimal
//amount = parseFloat(amount)

//changing number to strings
//amount = amount.toString()
//amount =String(amount)

//changing to boolean
//amount =Boolean(amount)

console.log(amount, typeof amount); */


//OPERATORS
/*
let x;
x = 5 + 5
x = 5-5
x = 5 * 4
x = 8 / 4
x = 5 ** 2
x = 100 % 30

//CONCATNATION
//x = "hello " + "world"

//increment
x = 5
x = x -1
//ASSIGNMENT OPERATOR
x = 20;

x += 5

//COMPARISON
x = 2 == "2"




//x = 2 === "2"
//x = 2 != 2
x = 2 !== "2"

x = 5 > 7
*/

//TYPE COERSION
/*
let x;
x = 4 + "5"
x = 4 + Number("5")
x = 4 * "5"

x = 5 + true
console.log(x, typeof x);
*/

//TEMPLATE LITERALS
// const age = 24
// const name = 'Genie'
// x = `hello , my name is ${name} and i am ${age}`

//STRING PROPERTIES AND METHOD  //access value by key
/*
const s = new String('hello world')
x = typeof s;
x = s.length
x=s[1]
x =s.__proto__
x = s.toUpperCase()
x = s.charAt(0)
x = s.indexOf('l')
x = s.substring(0, 4)
x = s.substring(4)
x = s.slice(-11, -7)
x = '       hello world'
x = x.trim()
x = s.replace('world', 'Genie')
x = s.includes('hel')
x = s.valueOf()
x=s.split(' ')
*/
//CAPITALIZE CHALLENGE
// const s = 'ithinker'
//x = s.charAt(0).toUpperCase()
//y = s.substring(1)
// a = `${x}${y}`
// x = `${s.charAt(0).toUpperCase()}${s.substring(1)}`

// WORKING WITH NUMBERS
/*
let x;
const num = new Number(5)

x = num.toString().length
x = num.toFixed(2)
x = num.toPrecision(4)
x = num.toExponential(2)
x = num.toLocaleString('en-US')


*/
// MATH OBJ
/*
let x;
x= Math.sqrt(25)
x= Math.abs(-25)
x= Math.round(25.534)
x= Math.ceil(25.122)
x= Math.floor(25.944)
x= Math.pow(2, 3)
x= Math.min(2, 6, 5)
x= Math.max(2, 6, 5)
x= Math.random()
x= Math.floor(Math.random() * 10 + 1) 

console.log(x);

x = Math.floor(Math.random() * 100 + 1)
y = Math.floor(Math.random() * 50 + 1)


const dif = x - y
const sum = x + y
const prod =x  * y
const div = x / y
const rem = x % y

dis = `${x} + ${y} = ${sum}`
console.log(dis);
//
dis = `${x} - ${y} = ${dif}`
console.log(dis);
//
dis = `${x} * ${y} = ${prod}`
console.log(dis);
//
dis = `${x} / ${y} = ${div}`
console.log(dis);
//
dis = `${x} % ${y} = ${rem}`

*/

//DATE
/*
let d;

d= new Date
d= new Date(2024, 5, 4)
d= new Date(2024, 5, 4, 7, 5, 9)
d= new Date('2024-05-04T09:05:09')//throws an invalid date
d= new Date('2024/05/04 09:05:09')
//TIMESTAMP
d= Date.now()
// d=d.getTime
// d=d.valueOf()
d = new Date(344556666)
d=Math.floor(Date.now(98899944)) / 1000


let x;
let d = new Date()

x = d.toString()
x=d.getTime()
x = d.getDate()
// x=d.valueOf()
// x = d.getFullYear()
x = d.getMonth()
x = d.getHours()
x = `${d.getFullYear()}-${d.getMonth()}`


x = Intl.DateTimeFormat('en-US').format(d)
x = Intl.DateTimeFormat('en-GB').format(d)
x = Intl.DateTimeFormat('default').format(d)

x = Intl.DateTimeFormat('default',{month: 'long'}).format(d)

x = d.toLocaleString('default', {month:'short'})

console.log(x);
*/ 

// ARRAYS AND OBJECTS  
/*
const num = [122, 344, 445, 55, 556]

//ARRAY CONSTRUCTOR
const fruit = new Array('apple', 'grape', 'orange', 'banana')

const mix = [233, 'blue', true, null]

x = fruit[2]
x =num[2]+num[4]
x = `my favourite fruit is ${fruit[0]}`
x = mix.length
fruit[2] = 'pear'
x = fruit
fruit.length = 2
fruit[fruit.length] = 'banana'

fruit.push('lemon')
// fruit.pop()
// fruit.shift()
fruit.unshift('paw paw')
// fruit.reverse()
// x = fruit.includes('mango')
x = fruit.indexOf('paw paw')

//x = fruit.slice(1, 4)
 x = fruit.splice(1, 3)
console.log( x, fruit)
*/

//Array Nesting, concat & spread
// const fruit = ['orange', 'mango', 'banana','paw paw']
// const berries = ['strawberry', 'blueberry', 'rasberry']

// fruit.push(berries)
// x = fruit[4][1]
//const allFruit = [fruit, berries]
// x = allFruit[0][2]
//x = fruit.concat(berries)

//SPREAD OPERATOR (...)
// x = [...fruit, ...berries]
//FLATEN ARRAYS
// const num = [2,3,4,[4, 5,2], 3, 5,7,[9,8,7],2,4]
// x = num.flat()

//static method on array object
// x = Array.isArray(fruit)
// x = Array.from('9489405')
// const a = 1
// const b = 4
// const c = 5

// x = Array.of(a,b,c)/
/*

const arr = [1, 2, 3, 4, 5]
arr.push(6)
arr.unshift(0)
arr.reverse()

const arr1= [1, 2, 3, 4, 5]
arr1.pop()
const arr2 = [5, 6, 7, 8, 9, 10]
arr3 =arr1.concat(arr2)

arr3 = [...arr1, ...arr2]
arr3.splice(4, 1)

console.log(arr3);
*/

//OBJECT LITERAL
/*
let x;

const person = {
    name:'Genie',
    age:23,
    isAdmin:true,
    address: {
        street:'Nyali',
        city:'Mombasa',
        country:'Kenya'
    },
    hobbies:['music','sport', 'comp nerd']

}

x = person.name
x = person['age']
x = person.address.city
x = person.hobbies[1]

person.name = 'zeus'
person.address.city = 'Nairobi'
delete person.age
person.hasChildren = false
person.greet = function () {
    console.log(`Hello my name is ${this.name}`);
}

person.greet()
console.log(person);
console.log(x);

const person2 = {
    'first name': 'zeus',
    'last name': 'Astra'
}
x = person2['first name']
console.log(x);

const todo = {};

todo.id = 1

console.log(todo);

//object literal
const vic = new Object()
vic.id = 155

console.log(vic);


//OBJECTS SPREAD METHOD

const obj1 = {a:1, b:2}
const obj2 = {e:1, f:2}
const obj3 = {...obj1,... obj2}
const obj4 = {...obj1,obj2}

const obj5 = Object.assign({}, obj1 ,obj2)

console.log(obj5);
*/
/*
const todo = [
    {id:1, name:'wake up early'},
    {id:2, name:'Go to school'},
    {id:3, name:'Go to the gym'}
]

let x;

const todo = {
    name:'Genie',
    age:24,
    isAdmin:true
}

// x = todo[1].name
x = Object.keys(todo).length
 x = Object.values(todo)
 x = Object.entries(todo)
 x = todo.hasOwnProperty('name')
console.log(x);
*/

//DESTRUCTURING & NAMING
//const firstName = 'John'
// const lastName = 'Doe'
// const age = 30
/*
const person = {
    firstName:'Genie',
    lastName:'zeus',
    age:90
}

x = person.firstName

const {lastName, age} = person
console.log(lastName, age);

const numbers = [23, 45, 56,9993,949, 334]

const [first, second, ...rest] = numbers
console.log(first, second, rest);
*/

//JSON
/*
const post = [
    {
        id: 1,
    title: 'this is the body'
    
    },
    {
        id: 2,
        title: 'json lecture'
    }
]
//TO CONVERT TO A JSON STRING
const str = JSON.stringify(post)

//parse JSON
const obj = JSON.parse(str)

console.log(obj);
console.log(obj[1].title);
*/
 
//OBJECT CHALLENGE
/*
const library = [
    {
        title:'Atomic Habbit',
        author:'James Clare',
        status: {
            own: false,
            reading: false,
            read: false
        }
    },
    {
        title:'Fearless Mind',
        author:'David Gogins',
        status:{
            own:false,
            reading: true,
            read:false
        }
    },
    {
        title:'The 48 Laws of Power',
        author:'Robert Geen',
        status:{
            own:true,
            reading:true,
            read:false
        }
    }
]

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

library[0].title = 'first book'
const {title: firstbook} = library[0]

const jn = JSON.stringify(library)
console.log(library);
console.log(jn);
*/


//FUNCTION
/*
function sayhelo () {
    console.log('hello GENIE you doing great');
}
sayhelo() 
function add(num1, num2) {
    console.log(num1 + num2);
}
add(3, 4)
function subtract(num1, num2) {
    return num1 - num2
}
const rslt = subtract(7, 2)
console.log(rslt, subtract(5,3));

//params & arguments
function regUser(user = 'Zeus') {
    return user + ' is Admin'
}
console.log(regUser());

//rest param
function sum(...numbers) {
    let total = 0

    for(const num of numbers) {
        total += num

    }

    return total
}
console.log(sum(1,3,5,6,89,4,3,5));

//OBJECT AS PARAMS
function loginUser(user) {
    return `User with username ${user.name} and id ${user.id} is logged in`
}
// const user = {
    // id: "yue76378",
    // name: 'Genie'
// }
// console.log(loginUser(user));
console.log(loginUser({
    id: "yue76378",
    name: 'Genie'
}));

//ARRAY AS PARAMS
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)

    const item = arr[randomIndex]
    console.log(item);
}
getRandom([1,2,3,4,5,6,7,8,9,10])
*/

//GLOBAL & FUNCTION SCOPE
/*
const x = 100

console.log(x);

if(true) {
    console.log(100 +' in global');
}else{
    console.log('in function scope');
}

function demo() {
    const y = 'it is in global scope bt can be accessed in function scope ='
    const x = 'it can also be override'
    console.log(y ,x);
}
demo()
*/


//block scope
/*
const x = 100;

if(true) {
    const y =200
    console.log(x + y);
}
//console.log(x + y);
for(let i = 0; i <= 10; ++i) {
    console.log(i)
}
//console.log(i);
if(true) {
    const a = 10;
    let b = 40;
    var c = 59;   //var is not block scope
}
console.log(c);

function run() {
    var d = 1080        //var is function scoped
    console.log(d);
}
run()
// console.log(d); 
*/

//Nested Scope
/*
function first() {
    const x = 100
    console.log(x);

    function second() {
        const y = 404
        console.log(x + y);
    }
   // console.log(y);  parent cant accesschild variable
    second()
}
first()

if(true) {
    const x = 1000

    if(x === 1000) {
        const y = 200
        console.log(x + y);
    }
   // console.log(x + y);
}
*/

//FUNCTION DECLARATION AND EXPRESSION
//function declaration
/*
function addDollar(value) {
    return '$'+value
}
console.log(addDollar(400));

//function expression
const addpcnt = function pcntadd(plus) {
    return '+'+plus
};
console.log(addpcnt(200));

//HOISTING
console.log(addDollar(400)); //FUNCTION can be called before being declared

function addDollar(value) {
    return '$'+value
}

//ARROW FUNCTION
const add = (a, b) => {
    return a + b
}
console.log(add(3, 5));

const sub = (a, b) => a - b   //implicit return
console.log(sub(9, 3));

//with a single param
const  prod = a => a * 4
console.log(prod(3));

//RETURN AN OBJECT
const createObj = () => ({
    name: 'Genie'
});
console.log(createObj());

const number = [1, 3, 5, 6]

number.forEach(function(n) {
    console.log(n);
})
number.forEach((n) =>console.log(n))
*/

//IIFE  //Immediately invoked function expression
/*
(function (){
    const user = 'Zeus'
    console.log(user);
    const hello = () => {console.log('hello from iife');}
    hello()
})()

(function (name) {
    console.log('hello '+ name);
})('Genie')
*/

//FUNCTION CHALLENGES
/*
 const getCelcius = fh => (fh - 32) * 5 / 9

 console.log(getCelcius(32));

 const minMax = (arr) => {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    console.log(`the minimum number is ${min}`);
    console.log(`the maximum number is ${max}`);
 }
 minMax([3,4,5,6,8,92,])

 (function (l, w){
    const area = console.log(`The area of a rectangle with length ${l} and width ${w} is ${l * w}`);
    console.log(area);
 })(3, 4)

 ((l, w) => {
    const area = l * w
    const output = console.log(`The area of a rectangle with length ${l} and width ${w} is ${area}`);
    console.log(output);
 })(3, 4)
 */


//CONTROL STATEMENTS
//IF STATEMENTS
/*
if(true){
    console.log('this is will run');
}
if(false){
    console.log('this will not run');
}
const x = 45
const y = '45'

if(x >= y) {
    console.log(`${x} is greater or equal to  ${y}`);
}

if(x <= y) {
    console.log(`${x} is not  less or equal to  ${y}`);
}

if(x !== y) {
    console.log(`${x} not equal ${y}`);
}
if(x === y) {
    console.log(`${x} is greater than ${y}`);
}else{
    console.log('x is not typed equal to y');
}

if(x > y) {
    const s = 30944
    console.log(`${s} is greater than ${y}`);
}else{
    var z = 600
    console.log(z);
}
console.log(`var is not block scoped bt function scoped ${z}`);
*/
//else-if & NESTING
/*
const d = new Date(10, 30, 2023, 14, 0, 0)
const hour = d.getHours()

if (hour < 12) {
    console.log('Good morning');
    if(hour <= 7 && hour < 8) {
        console.log('wake up and brush your teeth');
    } else {
        console.log('just code');
    }
} else if (hour < 14) {
    console.log('Good after Noon');
    if (hour <= 12 || hour == 9) {
        console.log('it is noon time for lunch');
    }
} else if (hour < 18) {
    console.log('Good evening');
    if (hour == 17) {
        console.log(' time for Evening stroll ');
    }
} else {
    console.log('Good Night');
    if (hour == 9) {
        console.log('zzzzzzzzzz');
    }
}
*/

//SWITCH STATEMENTS
/*

const d = new Date(2023, 3, 23, 8, 0, 0)
const month = d.getMonth()

switch (true) {
    case  month == 1:
    console.log('January  we pretend to set our resolution');
    break;

    case 2:
        console.log('February the valentime month everybody loves you');
        break;

    case month == 3:
        console.log('March we are disoriented');
        break;

    case month == 12:
        console.log('December the gift giving month you wana rekindle...why');
        break;
    case month == 6:
    console.log('Everybody wana walk away');
    break;

    default:
        console.log('BOOOM');

}
*/
//CALCULATOR CHALLENGE
/*
let para

function calculator (num1, num2, para) {

    if( '+') {
        result = num1 + num2;
    }else if ( '-') {
        result = num1 - num2;
    } else if( '*') {
        result = num1 * num2;
    } else if ('/') {
        result = num1 / num2;
    } else {
        result ='wrong operator';
    }
    console.log(result);
    return result
}
calculator(10, 2, '*')
*/

/*
function calculator (num1, num2, para) {

    let res
    switch ( para) {
        case  '+':
            res = num1 + num2;
            break
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        default:
                res = 'wrong operator';
    }
    console.log(res);
    return res

}
calculator(10, 4, '*')
*/

//TRUTHY AND FALSY VALUE
//FALSY VALUES
//false, 0, ''or ""(empty string without a space), null, undefined, NaN

//TRUTHY VALUES
//true, '0'(zero in a string),' '" "(an empty string with a space),'false'(false in a string), [], {}(empty array and also an empty object)
//function () {} (empty function)
/*
const x = () => {}

if (x) {
    console.log('it is truthy');
}else {
    console.log('it is falsy');
}

console.log(Boolean(x) );
*/

//TRUTHY AND FALSY CAVEATS
/*
const children = 0

if(children !== undefined) {
    console.log(`you have ${children} children` );
} else {
    console.log('Enter number of children');
}

if(!isNaN(children)) {
    console.log(`you have ${children} children` );
} else {
    console.log('Enter number of children');
}
//checking for empty objects
const post = []

if (post.length > 0) {
    console.log('list of post');
} else {
    console.log('no post');
}

//checking for empty objects
const users = {
    name: 'Genie'
}

if (Object.keys(users).length > 0) {
    console.log('user logged in');
} else {
    console.log('no user logged in');
}

//loose EQUALITY
console.log(false == 0);    //true
console.log('' == 0);   //true    //comparing two falsy value will evaluate to true
console.log(null == undefined); //true
//using STRIC EQUALITY '===' eliminates this problem as it checks the type

*/

//LOGICAL OPERATORS
/*
console.log(10 > 20 && 30 > 15);

console.log(10 > 20 || 30 > 24);

//&& will return first falsy value or the last value
let a;

a = 10 && 20  //20
a = 0 && 10 //0

console.log(a);

const post = ['posted']

post.length > 0 && console.log(post);


//|| will return fast truthy value or the last vallue
let b
b = 10 || 20  //10
b = 0 || 10  //10
b = 0 || null || '' || undefined   //undefined

console.log(b);

//?? return the right side operand when the left is null or undefined
let c
c = 10 ?? 20    //10
c = null ?? 20    // 20
c = undefined ?? 30 // 30
c = 0 ?? 50    // 0
c = '' ?? 46   //''

console.log(c);
*/

//LOGICAL ASSIGNMENT
/*
// ||= assign the right side value only if the left is a falsy value

let a = null;

if (!a) {
   // a = 10
}
// a = a || 10
a ||= 10


console.log(a);

// &&= assign the right side value ony if the left is  a truthy value
let b = 10

if (b) {
    b = 20
}
b = b && 20
console.log(b);

//??= assign thhe right side value only if the left is null or undefined
let c 

if (!c === null) {
    c = 23
}
// c = c ??= 20
c 

console.log(c);


// Ternary Operator
const age = 19

if(age >= 23) {
    console.log('you can do it');
} else {
    console.log('you cannot drive');
}



age >= 20  ? console.log('you still young') : console.log('the world is yours');;

//assigning a conditional value
const canVote = age >= 18 ? true : false
console.log(canVote);

const auth = false
let redirect

if (auth) {
    alert('welcome to login')
    redirect = '/welcome to dashboard'
} else {
    alert('accesed denied')
    redirect = '/welcome to login'
}
console.log(redirect);


const hacked = false

const disply = hacked
    ?(alert('welcome to dashbozrd'), '/dashboard')
    :(alert('login fast'), '/logi page')


console.log(disply);


const auth = false;

 auth ? console.log('welcome to Pegasus') : console.log('login fast');;

auth && console.log('welcome to login');

*/
//LOOPS
//FOR LOOP
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//  statement
/*

for(let i = 5; i <= 15; i++) {
    if(i == 11) {
        console.log('11 is a master number');
    } else {
        console.log('Number ' + i);
    }
    
}
*/

//nested loops
/*
for (let i = 1; i<= 10; i++) {
    console.log('Number '+ i);
    for (let j =1; j<= 5; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
*/

//loop through an array
/*
const name = ['Facebook', 'Google', 'Tiktok', 'Meta']

for(let i = 0; i < name.length; i++) {
    console.log(name[1]+ 'is the best');

}

for(let i = 0; i < name.length; i++) {
    if(name[i]== 'Facebook') {
        console.log(name[i] + ' is the best');
    }else {
        // console.log(name[i]);
    }

}
*/

//BREAK & CONTINUE
//BREAK
/*

for (let i = 0; i <=20; i++) {
    if (i == 10) {
        console.log(i);
        break;
    } 

    console.log(i);
    
}
//continue
for (i = 0; i <= 20; i++) {
    if(i ==3) {
        console.log('skipping three');
        continue
    }
    console.log(i);
}
*/
//while & do while loop
/*
let i = 4

while (i <= 10) {
    console.log('number ' + i);
    i++;
}
*/

//looping over array with while loop
/*
let i = 0
const arr = [12, 34, 56, 78]

while(i <= arr.length) {
    console.log(arr[i]);
    i++
}
*/

// let i = 0

// while (i <= 5) {
//     console.log(i);
//     let j = 0
//     while (j <= 5) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         j++
//     }
//     i++
// }

//do while loop
// let i = 15
// do {
//     console.log('Number ' + i);
//     i++
// } while (i <= 10)

//FizzBuzz Challenge
// for(i = 1;i<= 100; i++) {
//     if(i % 3 == 0 && i % 5 == 0) {
//         console.log('fizzBuzz');
//     } else if (i % 5 == 0) {
//         console.log('Buzz');
//     } else if (i % 3 == 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i)
//     }
// }



// let i = 0

// while (i <= 100)  {
//         if(i % 3 == 0 && i % 5 == 0) {
//             console.log('fizzBuzz');
//          } else if (i % 5 == 0) {
//             console.log('Buzz');
//          } else if (i % 3 == 0) {
//                console.log('Fizz');
//          } else {
//                console.log(i)
//         }
//     i++
// }

//for of loop
// const items = ['table', 'books', 'pens', 'hen']

// for (const item of items) {
//     console.log(item);
// }

//loop o
// const users = [{name:'Genie'},
//                 {name: 'zeues'},
//                  {name:'Astro'},
//                  {name: 'ithink3R'}]

//     for (const user of users) {
//         console.log(user.name);
//     }

// const str = 'pegasus'
// for(const s of str) {
//     console.log(s);
// }

// //loop over Maps
// const map = new Map()
// map.set('name', 'John')
// map.set( 'age', 30)

// for (const [key, value] of map) {
//     console.log(key, value);
// }


//for in loop
// const colorObj = {
//     color1: 'red',
//     color2: 'blue',
//     color3: 'orange',
//     color4: 'pink'
// }
// for (const key in colorObj) {
//     console.log(key, colorObj[key]);
// }

// //for in in array
// const arr = ['blue','black', 'white', 'orange']

// for (const key in arr) {
//     console.log(arr[key]);
// }


//HIGH ORDER ARRAY METHODS
/*
//.forEach
const socials = ['twitter','linkedin','facebook','instagram']

// socials.forEach(function (item) {
//     console.log(item);
// })

socials.forEach((item) => console.log(item))

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`,arr))

function logsocials (socials) {
    console.log(socials);
}
socials.forEach(logsocials)

const socialObj = [
    {name: 'Twitter', url:'http://twitter.com'},
    {name: 'facebook', url:'http://facebook.com'},
    {name: 'linkedin', url:'http://linkedin.com'},
    {name: 'instagram', url:'http://nstagram.com'}
]

socialObj.forEach((item) => console.log(item.url))


//filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const even = numbers.filter(function (num) {
//     return num % 2 == 0
// })

const even = numbers.filter(num => num % 2 == 0)
console.log(even);

//forEach
const evens = []
numbers.forEach((num) => {
    if (num % 2 == 0) {
        evens.push(num)
    }
} )
console.log(evens);


const companies = [
    {name: 'Twitter', url:'http://twitter.com', category: 'finance', started:1987, end:2010},
    {name: 'facebook', url:'http://facebook.com', category: 'retail',started:1989, end:2003},
    {name: 'linkedin', url:'http://linkedin.com', category: 'auto',started:1970, end:2005},
    {name: 'instagram', url:'http://nstagram.com', category: 'tech',started:1990, end:2002},
    {name: 'tik tok', url:'http://facebook.com', category: 'retail',started:1995, end:2000},
]
//create an array of company names
const coNames = companies.map(
    (co) => co.name
)
console.log(coNames);

//create an array of objects with just company name and category


 const namecat = companies.map((co) => {
    return {
        name:co.name,
        category: co.category
    }
})
console.log(namecat);

//forEach
let catname = []
companies.forEach((co) => {
    catname.push(co.name, co.category)
})
console.log(catname);
/*
//get only retail companies
const retailCo = companies.filter(
    (co) => co.category == 'retail'
)
console.log(retailCo);
//get companies that started in or after 1980 and in or before 2005
const earlyCo = companies.filter(
    (co) => co.started >= 1980 && co.end <= 2005
)
console.log(earlyCo);
//companies that lasted 10years or more
const coLatedTen = companies.filter(
    (co) => co.end - co.started >= 10
)
console.log(coLatedTen);
*/

//Array.map()
/*
const number = [1, 2, 3, 4, 5]
// const doubleNum = number.map((num) => 'Doubled Number ' + num * 2)
// console.log(doubleNum);


const dn = []
 number.forEach((num) => {
    dn.push(num * 2)
 })
console.log(dn);

//chain mapmethod
const squareDouble = number
 .map((num) => Math.sqrt(num))
 .map((sqr) => sqr * 2)

 console.log(squareDouble);

// chaining different methods
const mixmeth = number.filter((num) => num % 2 == 0)
                    .map((no) => no * 2)

console.log(mixmeth);
*/

//reduce()
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const sum = numbers.reduce(function(accumulator, currentValue) {
     return accumulator + currentValue
 }, 0)
 console.log(sum);

const sum2 = numbers.reduce((acc, cv) => acc + cv, 10)
console.log(sum2);

//for loop
const sum3 = () => {
    let acr = 0;
    for(const crv of numbers) {
        acr += crv
    }
    return acr
}
console.log(sum3());

const prod = [
    {id: 1, name: 'poduct1', price: 1300},
    {id: 2, name: 'poduct2', price: 2000},
    {id: 1, name: 'poduct1', price: 1400}
]
const pricesum = prod.reduce((accm, cupr) => {
    return accm + cupr.price
}, 0)
console.log(pricesum);

//challenge 1
const people =[
    {
        firstName: 'John',
        lastName: 'Doe',
        email:'johndoe@ac.com',
        phone: '111-1111-1111',
        age: 38
    },
    {
        firstName: 'James',
        lastName: 'Bourne',
        email:'jamesbourne@ac.com',
        phone: '111-2222-2222',
        age: 20
    },
    {
        firstName: 'will',
        lastName: 'wsmith',
        email:'willsmith@ac.com',
        phone: '111-3333-3333',
        age: 28
    },
    {
        firstName: 'captain',
        lastName: 'America',
        email:'captainamerica@ac.com',
        phone: '444-4441-4444',
        age: 23
    }
]


// const users = people.filter((user) => user.age <= 25)
//                     .map((usr) => {
//                         return {
//                             firstName: usr.firstName,
//                             lastName: usr.lastName,
//                             email: usr.email
//                                 }   
//                             })

// console.log(users);

const users = people
            .filter((user) => user.age <= 25)
            .map((usr) => ( {
                            name:usr.firstName +''+ usr.lastName,
                            email: usr.email
                                }) )

console.log(users);
*/
//CHALLENGE 2
/*
const numbers = [2, -30, 50, 20, -12, -9, 7]
const post = numbers
            .filter((num) => num >= 0)
            .reduce((acc, crv) => acc += crv, 0)
console.log(post);

//CHALLENGE 3
const word = ['coder', 'programmer', 'developer']

const cap =  word.map((wod) => wod[0].toUpperCase() + wod.slice(1))
console.log(cap);
*/


//#####################################################################################
//        DOM
//console.log(window);
//console.log(window.document);
//console.dir(window.document);

// console.log(document.links[0]);
// document.body.innerHTML = '<h1>zeues</h1>'
//console.log(document.body.innerText);
// document.write('Hello from JS')
// console.log(document.getElementById('main'));

// const main = document.getElementById('main')
// // main.innerHTML = '<h1>replace item in main</h1>'

// document.querySelector('#main h1').innerText = 'hello from query selector'
// let output;
// output = document.URL
// console.log(output);
//DOCUMENT ELEMENT PROPERTY































