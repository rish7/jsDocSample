/** @constructor 
 * @param {string} name - person name
 * @param {int} age - person age
*/
var Person = function(name, age) {
    this.name = name;
    this.age = age;
/**
 * Person.getDetails
 * will print details in console
 */
this.getDetails = function () {
    var kind = "";
    if (this.age <= 0) {
        kind = "is not yet born";
    } else if (this.age <= 12) {
        kind = " is kid";
    } else if (this.age > 12 && this.age <= 19) {
        kind = " is teenage";
    } else if (this.age > 19 && this.age <= 25) {
        kind = " is youth";
    } else if (this.age > 25 && this.age <= 60) {
        kind = " is family (wo)man";
    } else {
        kind = " is back to second childhood";
    }
    console.log("Name : " + this.name);
    console.log("Age : " + this.age);
    console.log(this.name + kind);
};
}

// export the class
module.exports = Person;