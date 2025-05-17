//spread operator
const a =[2,5,1]
const b = [...a,4]
console.log(b)

const car={
    name:'bmw',
    color:'red'
}
const modifyCar={
    color:'blue',
    adresss:'kuril'
}

const lastupdate={...car,...modifyCar}
console.log(lastupdate)


