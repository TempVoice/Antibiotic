const { TextHelper } = require("./index")

const textHelper = new TextHelper();

const string = "https://discord.gg/tempvoice https://tempvoice.xyz/ cat c4t C--4T, 𝕔𝕒𝕥 𝐜𝐚𝐭 𝓬𝓪𝓽"
const array = ["*discord.gg", "cat"]
const replacement = "*"

const censoredText = textHelper.censor(string, array, replacement)
console.log(censoredText) // *****************/tempvoice https://tempvoice.xyz/ *** *** *** *** *** *** *****

// Key features:

// Detects other fonts
// Detects most common bypass method 
// Use *word to censor the word and everything before
// Use word* to censor the word and everything after