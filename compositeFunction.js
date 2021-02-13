// Problem : build a composite function
// Solution :

const compose = (f,g) => data => f(g(data))

const multipleBy3 = num => num * 3

const makePositive = num => Math.abs(num) 

const multiplyAndMakePositive = compose(multipleBy3 , makePositive)

multiplyAndMakePositive(-5)