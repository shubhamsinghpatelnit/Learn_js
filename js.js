// // // console.log("Shubham")
// // // x=5.5
// // // console.log(x)

// // // // DATA TYPES
// // // "use strict" // treat all JS code as newer version 
// // // //alert(3+3) // show error becouse we use node js ,not brower

// // // let name="SHUBHAM" // string data types
// // // let age =18   // number
// // // let isLog=true // bole

// // // // null => standalone value 
// // // // undefined => value not assign 
// // // // symbol => unique
// // // // object 
 

// // // // DATA TYPES
// // // console.log(typeof"shubham") // string 
// // // console.log(typeof(null)) // object

// // // let score ="100" // string 
// // // let valuseInNumber=Number(score) // number 
// // // console.log(typeof(valuseInNumber)) // number 
// // //  let n="12abc"  /// string 
// // //  let m=Number(n) // number
// // //  console.log(typeof(m)) // number
// // //  console.log(m)  // NaN(not a number)
 
// // //  let a=null // null 
// // //  let b=Number(a) // number
// // //  console.log(typeof(b)) // number 
// // //  console.log(b) // 0
// // //   //"33"=>33
// // //   // "33abc"=>NaN
// // //   // True =>1 false=>0

// // // let istrue=1
// // // let check=Boolean(istrue)
// // // console.log(check) // true

// // // // ""=>false;
// // // //"shubham"=>true
 

// // // // ********************Operations************************

// // // console.log(2+2)
// // // console.log(3*3)// 9
// // // console.log(3**3)//power 27
// // // console.log(3%2) // 1
// // // console.log(1/2) // 0.5
// // // console.log("shubham" + "singh")
// // // console.log("1"+2) // 12
// // // console.log(1+"2") // 12 
// // // console.log("1"+2+3) // 123
// // // console.log(2+3+"1") // 51


// // // let num1 ,num2,num3
// // // num1=num2=num3=2+4
// // // console.log(num2) // 6
// // // num1++
// // // ++ num1
// // // console.log(num1) //8

// // // console.log(++num3) //7
// // // console.log(num3++) // 7

// // // // *********** comprison *********
// // // console.log(2>1)  //true
// // // console.log(2==1) // false

// // // console.log("2">1)  // true
// // // console.log("02">1)  // true

// // // // but thsi is wrong way so alwase compair same data type

// // // console.log(null>0) // false
// // // console.log(null==0) // false 
// // // console.log(null>=0) // true becouse of diffrent type of data type this is problem of conversion 


// // // console.log(undefined==0)  // false

// // // // === stric check

// // // console.log("2"===2) // false
// // // console.log(2===3)// false



// // // 1) Primitive Data Types=>

// //     // 7 types : string , Number , Boolean , Null ,Undefined ,Symbol ,BigInt 
// //       const s =100
// //       const sv=100.3 // number
// //       let userEmail// undefined 

// //       const id=Symbol('123')
// //       const anotherid=Symbol('123')
// //       console.log(id==anotherid) // FALSE
// //       let c=2321n
// //       console.log(typeof(c)) // bigint
     
// //  // 2) Referenc (Non primitive) => data type ke reference allow hai 

// //     // Array ,Object ,functions 
// //     // arrey
// //     const heros=["shaktiman","naagraj","doga"]
// //     // object
// //     let obj={
// //         name:"shubham" 
// //     }
// //     // object
// //     {
// //       age:12
// //     }
// // // fn
// // const myfn=function()
// // {
// //     console.log("hello")
// // }
    

// // // JavaScript is a dynamically typed language. That means 👉 you don’t have to declare the data type of a variable. The type is decided automatically at runtime (when the program runs).



// // // ***********MEMMORY***************

// // // Stack(Primitive),Heap(Non-Primitive)


// // let myname="shubhampatel"

// // let anothername=myname

// // anothername="pushpraj"
// // console.log(myname)  // shubhampatel
// // console.log(anothername) // pushpraj


// // let userOne={
// //     email:"user@gmail.com",
// //     name:"shubham"
// // }
// // let userTwo=userOne

// // userTwo.email="shubham@gmail.com"
// // console.log(userOne.email); // user@gamil.com
// // console.log(userTwo.email); // shubham@gmail.com


// // ******* String IN JS *********

// const name="shubham"
// const count=50
// console.log(name+count+"value")

// console.log(`Hello my name is ${name} and count is ${count}`)

// const gameName=new String ('shubham singh')

// console.log(gameName)
// console.log(gameName[3])  // b
// console.log(gameName.__proto__)  //{}

// console.log(gameName.length) // 13
// console.log(gameName.toUpperCase())  //SHUBHAM SINGH

// console.log(gameName.charAt(5)) // a
// console.log(gameName.indexOf('i')) // 9
// console.log(gameName.indexOf('h')) //  1
// console.log(gameName.indexOf('k')) // -1


// const newString1 = gameName.substring(0,4) // shub
// console.log(newString1)
// const newString2 = gameName.substring(4,) // ham singh
// console.log(newString2)

// console.log(gameName.substring(-5,4)) // shub
// let anotherName=gameName.slice(-13,6)  
// console.log(anotherName) //shubha

// const newString ="        SHUBHAM      "
// console.log(newString)
// console.log(newString.trim()) // remove starting and end space

// const url="shubham_singh%20patel"

// console.log(url.replace('%20','_')) // shubham_sing_patel
// console.log(url.includes('sundar')) // false

// console.log(url.split('_')); // shubham , singh%20patel


//************** number and math ********* */


const score=300
const balance=new Number(100)
console.log(score)  // 300
console.log(balance)  // Number :100
console.log(typeof(balance))   // object
console.log(balance.toString().length) // 3
console.log(typeof(balance)) // object

console.log(balance.toFixed(1)); // 100.0

const num=1231.7083
console.log(num.toPrecision(4))  // 1232

const hundreds=10000000000000
console.log(hundreds.toLocaleString()); //10,000,000,000,000
console.log(hundreds.toLocaleString('en-IN')) // 1,00,00,00,00,00,000

/// ***************Maths****************


console.log(Math)

console.log(Math.abs(-2)) // 2
console.log(Math.round(4.3)) //4

console.log(Math.ceil(4.1)) // 5

console.log(Math.random())  // >0 && <1

console.log(Math.floor(Math.random()*10)+1); // >=1 <=10

const min=10
const max=20

console.log(Math.random()*(max-min+1)+min)