const {Square, Triangle, Circle} = require('./shapes')

describe ("Square", () => {
    test("should render SVG for a blue rect element", () => {
        const svg = `<rect x="90" y="40" width="120" height="120" fill="blue"/>`
        const square = new Square ()
        square.setColor("blue")
        const renderSquare = square.render()
        expect(renderSquare).toEqual(svg)
    })
    test("setColor should accept color", () => {
        const svg = `<rect x="90" y="40" width="120" height="120" fill="green"/>`
        const square = new Square ()
        square.setColor("green")
        const renderSquare = square.render()
        expect(renderSquare).toEqual(svg)
    })
})

describe ("Triangle", () => {
    test("should render SVG for a blue polygon element", () => {
        const svg = `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`
        const triangle = new Triangle ()
        triangle.setColor("blue")
        const renderTriangle = triangle.render()
        expect(renderTriangle).toEqual(svg)
    })
    test("setColor should accept color", () => {
        const svg = `<polygon points="150, 18 244, 182 56, 182" fill="green"/>`
        const triangle = new Triangle ()
        triangle.setColor("green")
        const renderTriangle = triangle.render()
        expect(renderTriangle).toEqual(svg)
    })
})

describe ("Circle", () => {
    test("should render SVG for a blue circle element", () => {
        const svg = `<circle cx="150" cy="100" r="80" fill="blue"/>`
        const circle = new Circle ()
        circle.setColor("blue")
        const renderCircle = circle.render()
        expect(renderCircle).toEqual(svg)
    })
    test("setColor should accept color", () => {
        const svg = `<circle cx="150" cy="100" r="80" fill="green"/>`
        const circle = new Circle ()
        circle.setColor("green")
        const renderCircle = circle.render()
        expect(renderCircle).toEqual(svg)
    })
})