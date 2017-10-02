var Person = require('./person.js');
console.log("This is just demo app to show. How jsdoc will generate automatically");

/**
 * ask is helper function to get input from user using stdin
 * @param {string} question - To display what input needs from user
 * @param {function} callback - After user enter input it will be catched
 */
function ask(question, callback) {
    var stdin = process.stdin, stdout = process.stdout;

    stdin.resume();
    stdout.write(question + ": ");

    stdin.once('data', function(data) {
        data = data.toString().trim();
        callback(data);
    });
}

/**
 * Our app will start from this function `askForDetails`
 */
function askForDetails(){
    var name, age;
    ask('Enter name :', function(_name) {
       name = _name;

       ask('Enter age :', function(_age) {
       age = _age;
       printDetails(name, age);
    });

    });
    
}

/**
 * To print person details
 * @param {string} name - user entered name
 * @param {int} age - user entered age
 */
function printDetails(name, age){
    var p = new Person(name, age);
    p.getDetails();
}

askForDetails();