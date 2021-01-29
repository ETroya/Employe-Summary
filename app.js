const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputpath = path.join(OUTPUT_DIR, "team.html");
console.log (outputpath)
const render = require("./lib/htmlRenderer");
var employees=[]
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const selectEmployee =[
    {
        message: `What position was hired on`,
        type: `list`,
        name: `type`,
        choices: [`Engineer`,`Intern`, `Manager` ]
    },
]
const addAnother = [
    {
        message: `Would you like to add another employee?`,
        type: `confirm`,
        name : `add`
    },  

]

function ask() {
    inquirer.prompt(selectEmployee).then((answers)=>{
     switch(answers.type){
         case `Manager`:
             getManager();
             break;
         case `Engineer`:
            getEngineer();
            break;
            default:
                getIntern();    
     }    
    })
};
function asktoAdd(){
    inquirer.prompt(addAnother).then((answers)=>{
        if(answers.add){
            ask();
        }
        else{
        fs.writeFileSync(outputpath, render(employees)) 

        }
    })
}

function getManager() {
    inquirer
    .prompt([
        {
            message: `Enter First Name`,
            type: "input",
            name: "name"
        },
        {
            message: `Enter ID number`,
            type: "input",
            name:"id"            
        },
        {
            message:`Enter E-mail Address`,
            type: "input",
            name: `email`
        },
        {
            message:`Enter Office Number`,
            type: `input`,
            name: `officeNumber`
        }
    ])
        .then((answers)=>{
            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber,
            )
        
       
        employees.push(newManager)
        asktoAdd();
        })
    }

function getEngineer() {
    inquirer
    .prompt([
        {
            message: `Enter First Name`,
            type: "input",
            name: "name"
        },
        {
            message: `Enter ID number`,
            type: "input",
            name:"id"            
        },
        {
            message:`Enter E-mail Address`,
            type: "input",
            name: `email`
        },
        {
            message:`Enter GitHub`,
            type: "input",
            name: `github`
        }
    ])
        .then((answers)=>{
            const newEngineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github,
            )
        
            employees.push(newEngineer)
            asktoAdd();
        })
}
function getIntern() {
    inquirer
    .prompt([
        {
            message: `Enter First Name`,
            type: "input",
            name: "name"
        },
        {
            message: `Enter ID number`,
            type: "input",
            name:"id"            
        },
        {
            message:`Enter E-mail Address`,
            type: "input",
            name: `email`
        },
        {
            message:`Enter School Name`,
            type: "input",
            name: `school`
        }
    ])
        .then((answers)=>{
            const newIntern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school,
            )
       
        
        employees.push(newIntern)
        asktoAdd();
        })
}
ask();
