const { Antibiotic } = require('./index')
const antibiotic = new Antibiotic();

const string = 'Here is a sentence that tries to share a fishy link https://example.com/login, but dont worry it will get censored even when you try to bypass it like t-h.1~$, thhhhiiiisss, 𝔱𝔥𝔦𝔰, 𝕥𝕙𝕚𝕤 or ᴛʜɪꜱ.'
const array = ['https://*', 'censor', 'this']

const censoredText = antibiotic.replace(string, array)
console.log(censoredText)