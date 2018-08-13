/*The below code will compile & generate teh JS file
however it will give error during runtime of JS

    Compile: tsc FileName.ts
    To Run : code/node FileName.js
*/
var count = 5;
count = 'a';
/* If we don't know the type of the varibale then we can use the follwing*/
var a;
a = 1;
a = 'd';
// NOTE: In the above case it is not giving compile time error
/*If we define the type then in that case we will get the compile
 time error
 In type script we have got few types i.e.
 number - for integer/floating point number
 boolean - true/false
 string
 any
 */
var b;
var c;
var d;
var e;
//  array example
var f = [1, 2, 3];
var g = [1, true, 'a', false];
// Example of the enum & enum values are defined by default
// However it best practice to assign the value so the final value won't
// change if someone inserts a new color in between & our logic
// will remain intact
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backGroungValue = Color.Red;
