const inquirer = require('inquirer')
const SVG = require('./svg')
const {Circle, Triangle, Square} = require("./shapes")
const {writeFile} = require('fs/promises')
const validateLength = async (input)=>{
    if(input.length>3){
        return "longer than three"
    }else{
        return true
    }
}

 class CLI {
    run(){
        inquirer 
        .prompt([
        {
            type: 'input',
            name:'text',
            message:'Enter up to three characters:',
            validate: validateLength
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
        return writeFile("logo.svg", svg.render(``))
    })
.then (() => console.log('Generated your SVG file!'))
.catch((error) => {
    console.log(error)
    console.log('Error occured')
})
}}


module.exports = CLI