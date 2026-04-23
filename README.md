## About Antibiotic 💊
The right medication to care your sentences from unwanted words by censoring or cleaning them. Strong against common bypass methods like using different fonts or symbols between words. 0 dependencies!

## Installation
```
npm i antibiotic
```

## Replace
```js
const { Antibiotic } = require('antibiotic')
const antibiotic = new Antibiotic();

const originalString = 'Here is a sentence that tries to share a fishy link https://example.com/login, but dont worry it will get censored even when you try to bypass it like t-h.1.$, thhhhiiiisss, 𝔱𝔥𝔦𝔰, 𝕥𝕙𝕚𝕤 or ᴛʜɪꜱ.'
const toCensorArray = ['https://*', 'censor', 'this']
const replacement = undefined
const strict = true

const censoredText = antibiotic.replace({ originalString, toCensorArray, replacement, strict })
console.log(censoredText)
// > Here is a sentence that tries to share a fishy link ##@@@##@#@#@#@####@ but dont worry it will get @@#@#@ed even when you try to bypass it like @#@# @@## ##@@ #@@@ or @#@@
```
### Custom Replacement Symbol
```js
const originalString = 'Here is a sentence that tries to share a fishy link https://example.com/login, but dont worry it will get censored even when you try to bypass it like t-h.1.$, thhhhiiiisss, 𝔱𝔥𝔦𝔰, 𝕥𝕙𝕚𝕤 or ᴛʜɪꜱ.'
const toCensorArray = ['https://*', 'censor', 'this']
const replacement = '*'
const strict = true

const censoredText = antibiotic.replace({ originalString, toCensorArray, replacement, strict })
console.log(censoredText)
// > Here is a sentence that tries to share a fishy link *********************** but dont worry it will get ******ed even when you try to bypass it like **** **** **** or ****
```

## No Strict Censoring
```js
const string = 'Here is a sentence that tries to share a fishy link https://example.com/login, but dont worry it will get censored even when you try to bypass it like t-h.1.$, thhhhiiiisss, 𝔱𝔥𝔦𝔰, 𝕥𝕙𝕚𝕤 or ᴛʜɪꜱ.'
const array = ['https://*', 'censor', 'this']
const replacement = '#'
const strict = false

const censoredText = antibiotic.replace({ originalString, toCensorArray, replacement, strict })
console.log(censoredText)
// > Here is a sentence that tries to share a fishy link ################### but dont worry it will get ######ed even when you try to bypass it like t-h.1~$, #### 𝔱𝔥𝔦𝔰, 𝕥𝕙𝕚𝕤 or ᴛʜɪꜱ.
```

### Partial Matching
Use * at the beginning or end of a word for partial replacement
```js
const originalString = 'Carpet | JavaScript | Wholegrain | Together'
const toCensorArray = ['*pet', 'java*', '*leg*', 'get']
const replacement = '*'
const strict = true

const censoredText = antibiotic.replace({ originalString, toCensorArray, replacement, strict })
console.log(censoredText)
// > ****** | ********** | ********** | to***her
```

## Convert
```js
const { Antibiotic } = require('antibiotic')
const antibiotic = new Antibiotic();

const string = 'ỆᶍǍᶆṔƚÉ ℭ𝔩𝔢𝔞𝔫 𝓾𝓹 𝕥𝕙𝕚𝕤 🆃🅴🆇🆃'

const cleanedText = antibiotic.convert(string, true)

console.log(cleanedText)
// > ExAmPlE Clean up this text
```
