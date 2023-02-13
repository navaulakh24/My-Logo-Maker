const SVG = require('./svg')
const {Square} = require('./shapes')

//test that it render 300x200 svg element
test("should render a 300x200 svg element", () => {
    const sample = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>'
    const newSvg = new SVG()
    expect(newSvg.render()).toEqual(sample)
})
//test that appends text element and sets message and color
test("should append text element", () => {
    const sample = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text></svg>'
    const newSvg = new SVG()
    newSvg.setText("abc", "white")
    expect(newSvg.render()).toEqual(sample)
})

//test throw an error if text is more than 3 characters

test("should throw an error if text is more than 3 characters", () => {
    const error = new Error ("must not be longer than three characters")
    const newSvg = new SVG()
    expect(() => newSvg.setText("Provide more than 3 characters", "white")).toThrow(error)
})
//test that includes shape setShape method

test("Includes a shape", () => {
    const sample = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text></svg>'
    const newSvg= new SVG()
    newSvg.setText("abc", "white")
    const newSquare = new Square()
    newSquare.setColor("green")
    newSvg.setShape(newSquare)
    expect(newSvg.render()).toEqual(sample)
})

