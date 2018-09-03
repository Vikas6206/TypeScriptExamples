
export class LikeComponent{

    // likeCount: number;
    // isSelected: boolean;

    constructor(public likeCount:number,public isSelected:boolean){

    }

    //check if button is selected
    onClick(){
        this.likeCount += (this.isSelected) ? -1 : 1;
        //toggel the isSelected value
        this.isSelected =! this.isSelected;
    }
}