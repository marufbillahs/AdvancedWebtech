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



//rest parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let total = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(total);

//destructuring
const car1=['bmw','red','2020']
const[suv,,sed]=car1
console.log(suv,sed)

//map
const c=[3,4,6]
const d=c.map(d=>d*2)
console.log(d)

//filter
const e=[3,4,6]
const f=e.filter(f=>f%2==0)
console.log(f)

//reduce
const g=[3,4,6]
const h=g.reduce((previous,current)=>previous+current)
console.log(h)

//string

const i='HELLO'
const j='world'
console.log(i+j)
console.log(i.concat(j))
console.log(i.toLowerCase());

//replace
const k='hello world'
console.log(k.replace('world','bangladesh'))

//round
const l=5.6
console.log(Math.round(l))

//ceil
console.log(Math.ceil(l))

//floor
console.log(Math.floor(l))

//random
console.log(Math.random())

//max
console.log(Math.max(1,2,3,4,5))

//min
console.log(Math.min(1,2,3,4,5))

//round usnig array
const m=[1.2,3.4,5.6]
const n=m.map(n=>Math.round(n))
console.log(n)

//ceil usnig array
const o=[1.2,3.4,5.6]
const p=o.map(p=>Math.ceil(p))
console.log(p)

//floor usnig array
const q=[1.2,3.4,5.6]
const r=q.map(r=>Math.floor(r))
console.log(r)

//random usnig array 
const s=[1.2,3.4,5.6]
const t=s.map(t=>Math.random(t))
console.log(t)

//max usnig array
const u=[1,2,3,4,5]
const v=Math.max(...u)
console.log(v)

//min usnig array
const w=[1,2,3,4,5]
const x=Math.min(...w)
console.log(x)


