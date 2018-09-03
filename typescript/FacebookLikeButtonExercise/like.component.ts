
export class LikeComponent{

    // likeCount: number;
    // isSelected: boolean;

    constructor(private _likesCount:number,private _isSelected:boolean){

    }

    //check if button is selected
    onClick(){
        this._likesCount += (this._isSelected) ? -1 : 1;
        //toggel the isSelected value
        this._isSelected =! this._isSelected;
    }

    get likesCount(){
        return this._likesCount;
    }

    get isSeleted(){
        return this._isSelected;
    }
}
