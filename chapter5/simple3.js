// このように指定することでnewしていなくてもインスタンス生成する
var Member = function(firstName, lastName) {
    if(!(this instanceof Member)) {
        return new Member(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
        return this.lastName + ' ' + this.firstName;
    }
}

var mem = Member('太郎', '田中');
console.log(mem.getName());
