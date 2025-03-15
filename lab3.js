//asynchronous

function a(){
    setTimeout(() => {
        let sum=0;
        for(let i=0;i<1000000000;i++){
            sum+=i;
        }
        console.log(sum);
        
    }, 2000);
}
a();
console.log("end");

//promise
console.log("start");

const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let success=true;
        if(success){
            resolve("Done");
    
        }
        else{
            reject("Failed");
        }
    }, 2000);
});

promise
.then((message) => console.log(message))
.catch((error) => console.log(error));
console.log("end");

//async and await  
console.log("start");
async function b(){
    await new Promise((resolve)=>{
        setTimeout(() => {
            let sum=0;
            for(let i=0;i<1000000000;i++){
                sum+=i;
            }
            console.log(sum);
            resolve();
        }, 2000);
    });
}
b();
console.log("end");