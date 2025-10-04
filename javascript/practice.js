console.log(this);
const object = {
  name: "mahesh",
  hobbies: ["a", "b", "c"],
  printName: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this);
  },
  showHobbies: function () {
    console.log(`${this.name}'s hobbies`);

    // this.hobbies.forEach((hobby) => {
    //   console.log(`${hobby} is ${this.name}'s hobby`);
    // });

    this.hobbies.forEach(function (hobby) {
      console.log(`${hobby} is ${this.name}'s hobby`);
    });
  },
};

// for call back function we can use arrow function to access using this
const name = "mahesh";
console.log(name.split("").reverse().join(""));

