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
