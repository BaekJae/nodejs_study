const obj = {
    a:1,
    b:2,
    c:3
}

for (key in obj){
    console.log(key);
}

for ([key,value] of Object.entries(obj)){ //for - of문 -> 필요한 내용을 뽑아서 쓸 수 있음
    console.log(`${key} : ${value}`);
}