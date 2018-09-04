var Users = [{name : "오현택", age : 28},
             {name : "서지수", age : 29},
             {name : "홍길동", age : 23}];

console.log('원본 Users');
console.dir(Users);

/*
//* splice 예제
Users.splice(0,2); 
console.log("splice()로 0번째 index부터 2개의 요소를 삭제한 후 : \n");
console.dir(Users);

Users.splice(1,0,{name : "이민정", age : 30});
console.log("splice()로 1번째 index에 요소를 추가 한 후 : \n");
console.dir(Users);
*/


//* slice 예제
var Users2 = Users.slice(1,5); // arr.slice(begin, end) : [begin,end)
console.log("slice() 직후 ");
console.dir(Users2);

var Users3 = Users2.slice(1); // arr.slice(begin) 
console.log("slice() 직후 :");
console.dir(Users3);