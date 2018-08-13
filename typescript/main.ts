function log1(message) {
    console.log(message);
}
var message = "Hello world";
log1(message);

var number= 1;
let count = 2;
/* Javascript has few versions 
   ES5 i.e ECMA script 5 which is supported by all the browsers 
   ES6 (2015) - ES2016 - ES2017

*/

// declearing the variable using the var keyword
function doSomething(){
    for(var i=0;i<5;i++){
        console.log(i);
    }

    // In JS variable decleared using the var keyword is available within
    // the nearest function i.e. doSomething()
    // Note in ideal situtation (In java lang.)'i' value should not be available
    // out side the for loop
    console.log("Finally: "+i);
}

doSomething();

// declearing the variable using the let keyword
function doAnotherSomething(){
    for(let i=0;i<5;i++){
        console.log(i);
    }

    // We can cath the below error during compilation
    //Note eventhough we have got the compilation error
    // The typescript compiler generates the JS file- > tsc main.ts
    // -> code main.js to see what was the JS code which got generated
    // By default the typescript gets converted in to Ecma5 JS where
    // we don't have the let keyword
    // We can used the genrerated JS file and run it via node main.js cmd

    console.log("Finally: "+ i);
}

doAnotherSomething();


doSomething();



