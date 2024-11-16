class Measurment{
    constructor(wid,hig){
        this._width = wid;
        this._height = hig;
    }

    get area(){
        return this._width * this._height;
    }

    set width(value){
        if (value > 0) {
            this._width = value;
        } else {
            console.log("width must be positive.")
        }
    }

    set height(value){
        if (value>0) {
            this._height = value;
        } else {
            console.log("height must be positive.")
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

}

const rec = new Measurment(5,6);
console.log(rec.area);
rec.width = 10;
console.log(rec.area);
rec.height = 100;
console.log(rec.area);
console.log(rec.width);
console.log(rec.height);
