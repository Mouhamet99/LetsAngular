let a: number
let b: boolean
let c: string
let d: any
let e: Function
let f: number[] = [1, 2]
let g: any[] = [1, "2", true]

const ColorGreen = 0
const ColorRed = 1
const ColorBlue = 2

enum Color{Gray = 0, Green = 1, Blue = 2}
let backgroundColor = Color.Blue

// Types assertions
let message: any;
message = 'abc';
// let endsWithC = message.endsWith('c') // no autocompletion
let endsWithC = (message as string).endsWith('c')
let AlternativeWay = (<string>message).endsWith('c')
console.log({endsWithC, AlternativeWay});
