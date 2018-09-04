var result = 0;

console.time('duration_sum');

var cv = {name : 'CV', grade : 3, difficulty : 8.0};
var ml = {name : 'ML', grade : 3, difficulty : 9.0};
var Security = {name : 'Security',grade : 3, difficulty : 10.0};

var csSubject = [cv,ml,Security];

//console.log(csSubject);
console.dir(csSubject);

console.timeEnd('duration_sum');
