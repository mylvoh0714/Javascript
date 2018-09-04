function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed) {
    console.log(speed + 'km 속도로 걸어갑니다.');
}

var p1 = new Person('오현택',28);
var p2 = new Person('서지수',29);

console.log(p1.name + ' 객체의 walk(80)을 호출하겠습니다.');
p1.walk(80);