"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    // likeCount: number;
    // isSelected: boolean;
    function LikeComponent(likeCount, isSelected) {
        this.likeCount = likeCount;
        this.isSelected = isSelected;
    }
    //check if button is selected
    LikeComponent.prototype.onClick = function () {
        this.likeCount += (this.isSelected) ? -1 : 1;
        //toggel the isSelected value
        this.isSelected = !this.isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
