const inquirer = require('inquirer')
const SVG = require('./svg')
const {Circle, Triangle, Square} = require("./shapes")
const {writeFile} = require('fs/promises')

//class called CLI, method called run, will return inquirer.prompt prompt will have questions
//.then after questions in run method, take all answers switch or if else statement take shape selected, run new shape=
//shape.color 
//new svg text and text color
//return writeFile witih file name and data writeFile("logo.svg", svg.render)

 class CLI {
    run(){
        inquirer 
        .prompt([
        {
            type: 'input',
            name:'text',
            message:'Enter up to three characters:',
            validate: (text) => { text.length <= 3 || "Text cannot be more than three charcaters."}
        },
        {
            type:'input',
            name:'textColor',
            message: 'Enter a color name or hexcode for your text:'
        },
        {
            type:'list',
            name: 'shapeType',
            message: 'Choose a shape:',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type:'input',
            name: 'shapeColor',
            message: 'Enter a color name or hexcode for your shape:',
        }
    ])
    .then(({text, textColor, shapeType, shapeColor}) => {
        let shape;
        switch(shapeType){
            case "Circle":
                shape = new Circle();
                break;
            case "Square":
                shape = new Square();
                break;
            default:
                shape = new Triangle();
                break;
        }
        shape.setColor(shapeColor)
        const svg = new SVG()
        svg.setText(text, textColor)
        return writeFile("logo.svg", svg.render())
    })
.then (() => console.log('Generated your SVG file!'))
.catch((error) => {
    console.log(error)
    console.log('Error occured')
})
}}


module.exports = CLI