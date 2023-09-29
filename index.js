const hieroglyphs = require('./hieroglyphs');

class TextHelper {
    replacement(length, symbol) {
        if (length <= 0) {
            return "";
        }
        
        if (symbol) {
            return symbol.repeat(length)
        } else {
            const characters = "@*#";
            let result = "";
            
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            
            return result;
        }
    }

    latinize(str) {
        if (!str) {
          return '';
        }

        return [...str]
            .map((char) => hieroglyphs[char] || char)
            .join('');
    }

    censor(originalString, toCensorArray, replacement) {
        const pattern = toCensorArray
        const replacements = { '0': 'o', '9': 'g', '7': 't', '5': 's', '4': 'a', '3': 'e', '1': 'i' };
        const regex = /[,:;_+\-*'`!?]/g;
        
        const preparedCensorArray = []
        for (const word of toCensorArray) {
            preparedCensorArray.push(this.latinize(word).toLowerCase().replace(regex, ''))
        }

        const preparedArray = originalString.split(" ").map((originalWord) => {
            const latinizedWord = this.latinize(originalWord);
            const lowercasedWord = latinizedWord.replace(regex, '').toLowerCase().replace(/[0793451]/g, char => replacements[char]);
        
            let position = 0
            const censoredWord = preparedCensorArray.find(toReplace =>
                { position += 1; return lowercasedWord.includes(toReplace.toLowerCase().replace(regex, '')) }
            );
        
            return {
                original: originalWord,
                latinized: lowercasedWord,
                illegal: censoredWord ? censoredWord.replace(regex, '') : undefined,
                pattern: pattern[position - 1]
            };
        });
        

        const censoredArray = []
        for (const word of preparedArray) {
            if (word.illegal) {
                const start = word.latinized.indexOf(word.illegal)
                const end = start + word.illegal.length

                const before = word.pattern.startsWith("*")
                const after = word.pattern.endsWith("*")
    
                if (before && after) {
                    censoredArray.push(this.replacement(word.latinized.length, replacement));
                } else if (before) {
                    censoredArray.push(
                        this.replacement(end, replacement) + word.latinized.slice(end)
                    );
                } else if (after) {
                    censoredArray.push(
                        word.latinized.slice(0, start) + this.replacement(word.latinized.length - start, replacement)
                    );
                } else {
                    censoredArray.push(
                        word.latinized.slice(0, start) + this.replacement(end - start, replacement) + word.latinized.slice(end)
                    );
                }
            } else {
                censoredArray.push(word.original)
            }
        }

        const doubleCheck = censoredArray.some(word => preparedCensorArray.some(toReplace => word.toLowerCase().includes(toReplace.toLowerCase().replace(/\*/g,""))));
        return doubleCheck ? this.censor(censoredArray.join(" "), preparedCensorArray, replacement) : censoredArray.join(" ")
    }
}

module.exports = {
    TextHelper
}