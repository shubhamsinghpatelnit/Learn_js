//  class Rectangle {
//     constructor(width,height,color)
//     {
//         this.width=width;
//         this.height=height;
//         this.color=color;
//     }
//     area()
//     {
//         const area=this.width*this.height;
//         return area;

//     }
//     paint()
//     {
//        console.log(`painting with color ${this.color}`);
      
//     }
//  }

//  const rect=new Rectangle(2,4,"blue");
//  const area=rect.area();

//  console.log(area);
//  rect.paint();
//  // js have not any distractor


// predefine class
// const map=new Map();
// map.set('name','SHUBHAM');
// map.set('age',30);
// const firstName=map.get('name');
// console.log(firstName);
 

  
// function random(resolve)  // resolve is also a function
// {
//   //resolve(); // when resolve fn callsed then callback fn call
//   setTimeout(resolve,3000);
// }
// let p=new Promise(random);  // suppose to return u something eventually.

// //console.log(p);

// function callback()
// {
//     console.log("promise succeded");
// }
// p.then(callback);  


function step3Done()
{
  console.log("Hello there");
}

function step2Done()
{
  console.log("Hello");
  setTimeout(step3Done,5000);
}
function step1Done()
{
  console.log("hi");
  setTimeout(step2Done,3000);
}
setTimeout(step1Done,1000);
console.log("SHUBHAM"); 