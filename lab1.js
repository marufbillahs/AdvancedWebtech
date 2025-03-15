//template literals
const a="maruf";
console.log(`hello ${a}`);

//Arrow function
const b = (name = "maruf") => `hello ${name}`;
console.log(b("maruf"));

//Constructor

class c{
    constructor(name){
        this.name = name;
    } 
    //method
    sayHello(){

        setTimeout(() => {
    
            console.log(this.name);
            
        }, 1000);
    }
    
}

const d = new c("maruf");
console.log(d.name);

d.sayHello();

//array

let e=[2,3,2];

for(let n in e){ //here n is index
    console.log(e[n]);
}
//
const person = {
    name: "maruf",
    age: 23
};

for(let n in person){
    console.log(person[n]);
    console.log(n+" : "+person[n]);
}

//
const f=[3,5,2];
for(let n of f){
    console.log(n);
}

//
const g = [2,3,4];
//n=element, i=index, a=array
g.forEach((n, i, a) => {
    console.log(`Index: ${i}, Value: ${n}, Array: [${a}]`);
});