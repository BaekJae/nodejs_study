import _ from 'lodash'
//take는 deep Copy -> drop의 반대
console.log(_.take([1,2,3,4,5,6])) //아무것도 없으면 1개(기본값)
console.log(_.take([1,2,3,4,5,6],2)) // n만큼 복사
console.log('takeWhile');
console.log(_.takeWhile([1,2,3,4,5,6],o=>o<=3)); //3보다 같거나 작으면 해당 원소 추출
