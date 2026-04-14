// VARIABLES
let devName = "Shekhar";
const devAge = 21;

// FUNCTION
const addNumbers = (a, b) => {
  console.log("Custom Logic ");
  return a + b;
};

// CONDITIONAL
const checkOddEven = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};

// LOOP
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// ARRAY
const Skills = ["Express", "JS", "Angular"];
Skills.map(skill => console.log(skill));

// OBJECT
const studentProfile = {
  name: "SHEKHAR ",
  age: 21
};

// FILTER
const users = [
  { name: "A", active: true },
  { name: "B", active: false }
];

const activeUsers = users.filter(u => u.active);

console.log(activeUsers);