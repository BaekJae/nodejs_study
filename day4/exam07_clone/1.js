let obja ={
    a: 1,
    b: 2,
    k: [12,3,4,5]
}
let objb = obja; //별명

let objc = JSON.parse(JSON.stringify(obja)); //새로운 오브젝트 만들어짐

console.log(obja === objb);

console.log(objb.a)

obja.a = 3;

console.log(objb.a);
console.log(objc.a); //복사본