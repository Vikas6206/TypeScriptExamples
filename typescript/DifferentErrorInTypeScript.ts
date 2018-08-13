/*The below code will compile & generate teh JS file
however it will give error during runtime of JS

    Compile: tsc FileName.ts
    To Run : code FileName.js
*/
let count =5;
count ='a'

/* If we don't know the type of the varibale then we can use the follwing*/
let a;
a=1;
a='d';

// NOTE: In the above case it is not giving compile time error

/*If we define the type then in that case we will get the compile
 time error 
 In type script we have got few types i.e.
 number - for integer/floating point number
 boolean - true/false
 string
 any
 */

 let b: number;
 let c: boolean;
 let d: string;
 let e:any;
//  array example
 let f:number[] =[1,2,3];
 let g:any[]=[1, true,'a',false];
// Example of the enum & enum values are defined by default
// However it best practice to assign the value so the final value won't
// change if someone inserts a new color in between & our logic
// will remain intact
 enum Color{Red,Green,Blue};
 let backGroungValue=Color.Red;
