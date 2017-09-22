

class MyNode{
    val:number;
    private _priv:number;

    constructor(valP:number){
        this.val = valP;
    }

    doSomething():void{
        this._priv = 10;
    }

     priv():number{
        return this._priv;
    }


}

let ts1 = new MyNode(2);
console.log(ts1.val, "this is ts1.val");
ts1.doSomething();
console.log(ts1.priv(), "this is ts1.priv");


//------------------------------------------------------------------------------------------------



function myFunction(val:string): void{
    console.log(val);
    return;

}

function sendingErrors(message:string): never{
    throw new Error(message);
}


console.log(myFunction("typescript, much better than javascript and es6"));
//console.log(sendingErrors("error method is being checked"));
//----------------------------------------------------------------------------------------------


var myNum:number = 5;
var myString:string = "Hello Universe";
var myArr:Array<number> = [1,2,3,4];
var myObj:Object = {name:'Bill'};
var anythingVariable:any = "Hey";
anythingVariable = 25;
var arrayOne:Array<boolean> = [true, false, true, true];
var arrayTwo:Array<any> = [1, 'abc', true, 2];
var myObj:Object = {x:5, y:10};


console.log(anythingVariable, "printing anythingVariable-- type :any");
