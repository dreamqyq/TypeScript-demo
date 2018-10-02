function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Enoch', lastName: 'Qin' };
console.log(greeter(user));
