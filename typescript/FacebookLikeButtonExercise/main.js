"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(25, true);
//we can change the likeCOunt to 2 ex: component.likesCount=2;
//ideall the like count should change only when the button is clicked and 
//under no other cercumstance it should be allowed to change
//simillary the value of isSelected
//The solution is implemented as in component .ts
component.onClick();
//print the value on the console
console.log("LikeCount is : " + component.likesCount + ", isSelected : " + component.isSeleted);
//tsc *.ts --target ES5 
//node main.js
