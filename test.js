const { Antibiotic } = require('./index')
const antibiotic = new Antibiotic();

const originalString = 'Here is a sentence that tries to share a fishy link https://example.com/login, but dont worry it will get censored even when you try to bypass it like t-h.1.$, thhhhiiiisss, 𝔱𝔥𝔦𝔰, 𝕥𝕙𝕚𝕤 or ᴛʜɪꜱ.'
const toCensorArray = ['https://*', 'censor', 'this']
const replacement = undefined
const strict = true

const censoredText = antibiotic.replace({ originalString, toCensorArray, replacement, strict })
console.log(censoredText)