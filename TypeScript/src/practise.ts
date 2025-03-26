//array object
let arr:number[]=[1,2,3,4,5];
console.log(arr);

//object
let person1:
{
    name:string;
    age:number;
  
}={
    name:"ss",
    age:12,
    
} 

console.log(person1.age);

//function
function add(a:number,b:number):number{
    return a+b;
}
console.log(add(2,3));

// 
let a:any=10;
let b:any="hello";
let c:any=true;
console.log(a,b,c);


//enum
enum color{
    red=1,
    green=2,
    blue=3
}
let col:color=color.blue;
console.log(col);


//tuple
let x:[string,number];
x=["hello",10];
console.log(x);

//type Alias
type id =number | string;
let userId:id = "sss";
//type union
type id2 = number | string;
let value:string | number;
value="hello";
value=123;
//literal type
let ss:"success" | "error";
ss="success";
//interface
interface person{
    name:string;
    age:number;
}

let user:person={name:"ss",age:12};

//generics
function identity<T>(arg:T):T{
    return arg;
}

let num = identity<number>(12);
let str = identity<string>("hello");
console.log(num,str);

//class
class storage<T>{
    private data:T;

    constructor(value:T){
        this.data=value;
    }

    getData():T{
        return this.data;
    }
}

let mys= new storage<number>(123);
console.log(mys.getData());
