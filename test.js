const { Antibiotic } = require('./index')
const antibiotic = new Antibiotic();

const string = 'du hure ❝𝐡𝐮𝐫𝐞❞'
const array = ['hure']

const censoredText = antibiotic.replace({ originalString: string, toCensorArray: array, replacement: "#", strict: false })
console.log(censoredText)