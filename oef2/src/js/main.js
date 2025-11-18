// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return `${this.name} (${this.age} jaar)`;
    }
}

class Employee extends Person {
    constructor(name, age, department) {
        super(name, age, department);
        this.role = "Employee";
        this.department = department;
    }

    info() {
        return `${this.name} (${this.age} jaar),${this.role} in ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(name, age, department) {
        super(name, age, department);
        this.role = "Employee";
        this.department = department;
    }

    info() {
        return `${this.name} (${this.age} jaar),${this.role} in ${this.department}`;
    }
}

const clsUsers = [];

function addClassUser() {
    const role = document.getElementById("ex2_type").value;
    const name = document.getElementById("ex2_name").value.trim();
    const age = Number(document.getElementById("ex2_age").value);
    const department = document.getElementById("ex2_dep").value.trim();
    const teamSize = Number(document.getElementById("ex2_team").value);
    const list = document.getElementById("ex2_list");

    if (!name || !age) return;

    const Person = role === "admin"
        ? new Admin(name, age)
        : new User(name, age);

    clsUsers.push(user);

    list.innerHTML = clsUsers
        .map(u => `<li class="list-group-item">${u.info()}</li>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ex2_btn")
        ?.addEventListener("click", addClassUser);
});
