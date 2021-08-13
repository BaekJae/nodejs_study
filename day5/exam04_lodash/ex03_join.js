import _ from 'lodash'

let ip = (_.join([127,0,0,1],'.')); //배열 요소를 separator로 연결

console.log(ip);

let _ip_data = _.split(ip,'.');//string을 split

console.log(_ip_data);