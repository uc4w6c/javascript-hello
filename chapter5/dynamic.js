var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var mem = new Member('太郎', '田中');
mem.getName = function() {
    return this.lastName + ' ' + this.firstName;
}

console.log(mem.getName());


var mem2 = new Member('花子', ' 佐藤');
console.log(mem2.getName()); // これはエラーになる。
