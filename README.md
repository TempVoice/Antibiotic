## About Antibiotic 💊
The right medication to care your sentences from unwanted words by censoring or cleaning them. Strong against common bypass methods like using different fonts symbols between words. 0 dependencies!

## Installation
```
npm i antibiotic
```

## Replace
```js
const { Antibiotic } = require('antibiotic')
const antibiotic = new Antibiotic();

const string = 'Here is a sentence that tries to share a fishy link https://example.com/login, but dont worry it will get censored even when you try to bypass it like t-h.1.$, thhhhiiiisss, 𝔱𝔥𝔦𝔰, 𝕥𝕙𝕚𝕤 or ᴛʜɪꜱ.'
const array = ['https://*', 'censor', 'this']

const censoredText = antibiotic.replace(string, array)
console.log(censoredText)
// > Here is a sentence that tries to share a fishy link #@****@##@*#*#***##@*@# but dont worry it will get ***@@#ed even when you try to bypass it like @#*@ #@@# *@@* or #@**
```
### Custom Replacement Symbol
```js
const replacement = '*'

const censoredText = antibiotic.replace(string, array, replacement)
console.log(censoredText)
// > Here is a sentence that tries to share a fishy link *********************** but dont worry it will get ******ed even when you try to bypass it like **** **** **** or ****
```

### Partial Matching
Use * at the beginning or end of a word for partial replacement
```js
const string = 'Carpet | JavaScript | Wholegrain | Together'
const array = ['*pet', 'java*', '*leg*', 'get']
const replacement = '*'

const censoredText = antibiotic.replace(string, array, replacement)
console.log(censoredText)
// > ****** ********** ********** to***her
```

## Convert
```js
const { Antibiotic } = require('antibiotic')
const antibiotic = new Antibiotic();

const string = 'ỆᶍǍᶆṔƚÉ ℭ𝔩𝔢𝔞𝔫 𝓾𝓹 𝕥𝕙𝕚𝕤 🆃🅴🆇🆃'

const cleanedText = antibiotic.convert(string)

console.log(censoredText)
// > ExAmPlE Clean up this text
```
