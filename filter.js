/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough); // [ { name: 'Michael', age: 23} ]

const justPaul = people.filter(person => person.name == "Paul");
console.log(justPaul); // This will output an array with an object inside.
console.log(justPaul[0]); // This will output just the object without the array.

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

const strongSkills = student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
}

const candidates = students.filter(strongSkills)

console.log(candidates);

// To reduce the code even more we can use:
const has5YrsExp = skill => skill.yrsExperience >= 5;
const strongSkills1 = student => student.skills.filter(has5YrsExp).length > 0;
const candidates1 = students.filter(strongSkills1);
const skilled = candidates1.map(candidate => candidate.name); // Using map to only select candidate's names.
console.log(skilled);