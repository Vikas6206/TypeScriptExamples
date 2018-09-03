//point is by default not accessible outside this file and hence we add export


export class Point{
    constructor(private x?: number, private y?: number){
        //Note in type script we don't have to initialize the varibles
        // The initilization happens automatically
        //'?' indicate the parameter is optional
    }

    draw(){
            console.log('X: '+ this.x +' Y: '+this.y);
    }
}
