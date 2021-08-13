import _ from "lodash"

console.log(_.VERSION);

//array
var users = [
    { 'user': 'barney', 'active':false },
    { 'user': 'fred', 'active':false },
    { 'user': 'pebbles', 'active':true }
];
let _findIndex = _.findIndex(users, (o)=>{
    return o.user == 'fredx'
}); //해당 인덱스 찾기, 있다면 해당되는 인덱스 return, 아니라면 -1 return

console.log(_findIndex);

