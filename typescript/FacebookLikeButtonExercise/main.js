"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(25, true);
component.onClick();
//print the value on the console
console.log("LikeCount is : " + component.likeCount + ", isSelected : " + component.isSelected);
