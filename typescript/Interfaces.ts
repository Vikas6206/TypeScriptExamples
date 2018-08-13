interface Point{
    x:number,
    y:number
}


// here we have viloted the cohesion princle which states that
// the object of simillar type shoud be binded togedthre in single file
// not the drawPoint actually draws the point and not of type Point
// moreover intefaces are purly for declearation and they can't include 
// implementation

let drawPoint = (point:Point) => {
    //do draw
}

// not sure what below code does .. It's like constructor

drawPoint({
    x:1,
    y:2
})








/*
// ====================================================
// We can pass custm type (inline)
let drawPoint = (point: {x: number, y: number}) => {
    //do draw
}

// Passing the parameter to the drawCircle

drawPoint({
    x:1,
    y:2
})


// ================================================
*/