# Object-Oriented Programming: SVG Logo Maker


## Description
I created a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. This application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.
#

## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
#

## Additional Requirements
This application needed to use Jest for running the unit tests and Inquirer for collecting input from the user. 
#

## Usage
The application will be invoked using the following command: node index.js
The command "npm run test" will make sure all tests have passed.
#

## FAQ
What is the link to the Demo video?
- [Demo](https://drive.google.com/file/d/1LK9JwdHUV07-qckmwBkirHbyUT11LwkJ/view)

What is your repo link?
- [Repo](https://github.com/navaulakh24/My-Logo-Maker)