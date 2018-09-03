import {LikeComponent } from './like.component';

let component = new LikeComponent(25,true);
component.onClick();

//print the value on the console
console.log(`LikeCount is : ${component.likeCount}, isSelected : ${component.isSelected}`);