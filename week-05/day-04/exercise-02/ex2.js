'use strict';

// Define a Person class
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}

// Define an Employee class which extends the Person
class Employee extends Person {
  constructor (name, age, salary, department, hiredAt) {
    super(name, age);
    this.salary = salary;
    this.department = department ? department : 'unknown';
    this.hiredAt = hiredAt ? hiredAt : new Date();
    this.leftAt = null;
    this.status = 'active';
    this.maxSalaryMultiplier = 1;
  }
  getInfo () {
    let result = this.name + " (" + this.age + ") works at " + this.department + " for " + this.salary + " usd ";
    if (this.leftAt) {
      return result + "from " + this.hiredAt + " to " + this.leftAt;
    }else {
      return result + "since " + this.hiredAt;
    }
  }
  quit (isFired) {
    if (this.status !== "active") {
      throw new Error("This employee has already left!");
    }
    this.leftAt = new Date();
    this.status = isFired ? "fired" : "quit";
    return true;
  }
  increaseSalaryBy (newSalary) {
    if (newSalary > this.salary * this.maxSalaryMultiplier) {
      throw new Error("Not allowed to increase this amount!");
    }
    this.salary = newSalary;
    return this.salary;
  }
  setDepartment (newDepartment) {
    this.department = newDepartment;
  }
}

// Define a Developer class which extends the Employee
class Developer extends Employee {
  constructor (name, age, salary, department, hiredAt, level) {
    super(name, age, salary, department, hiredAt);
    this.maxSalaryMultiplier = 1.05;
    this.level = level;
  }
  changeLevel (newLevel) {
    this.level = newLevel;
  }
}

// Define a Director class which extends the Employee
class Director extends Employee {
  constructor (name, age, salary, department, hiredAt, level) {
    super(name, age, salary, department, hiredAt, level);
    this.maxSalaryMultiplier = 1.1;
  }
  fireEmployee (employeToFire) {
    if (!(employeToFire instanceof Employee)) {
      throw new Error("You can't fire a non-employee!");
    }
    employeToFire.quit(true);
  }
  promoteDeveloper (developerToPromote, newLevel) {
    if (!(developerToPromote instanceof Developer)) {
      throw new Error("You can't promote a non-developer!");
    }
    if (newLevel === developerToPromote.level) {
      return false;
    }else {
      developerToPromote.changeLevel(newLevel);
      return true;
    }
  }
}

var chris = new Director('chris', 24, 100, 'dev', '2017.7.14', 1);
console.log(chris);
console.log(chris instanceof Person);
console.log(chris.getInfo());