"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onCilck = function () {
        // if (this.isSelected) {
        //     this.likesCount--;
        // } else {
        //   this.likesCount++;
        // }
        this.likesCount += (this.isSelected) ? -1 : +1;
        this.isSelected = !this.isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
