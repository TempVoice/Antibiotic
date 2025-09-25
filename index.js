const hieroglyphs = require('./hieroglyphs');
const chars = {
    '0': 'o',
    '1': 'i',
    '2': 'z',
    '3': 'e',
    '4': 'a',
    '5': 's',
    '6': 'b',
    '7': 't',
    '8': 'b',
    '9': 'g',
    '$': 's',
    '@': 'a',
    '!': 'i',
    '+': 't'
};

class Antibiotic {
    transform(input, strict) {
        let out = input
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, '')
            .replace(/[0793451]/g, char => chars[char]);

        if (input.length > 3) {
            out = out.replace(/([a-z])\1+/g, '$1');
        }

        return out;
    }

    replacement(length, symbol) {
        if (length <= 0) {
            return '';
        }
        
        if (symbol) {
            return symbol.repeat(length)
        } else {
            const characters = '@*#';
            let result = '';
            
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            
            return result;
        }
    }

    convert(str, strict) {
        if (!str) {
            return '';
        }

        if (!strict) {
            return str;
        }

        return [...str].map((char) => hieroglyphs[char] || char).join('');
    }

    replace({ originalString, toCensorArray, replacement, strict }) {
        const pattern = toCensorArray;
        
        const preparedCensorArray = toCensorArray.map(word => this.transform(this.convert(word, strict), strict));
        
        const preparedArray = originalString.split(' ').map(originalWord => {
          const latinizedWord = this.convert(originalWord, strict);
          const lowercasedWord = this.transform(latinizedWord, strict);
        
          let position = 0;
          const censoredWord = preparedCensorArray.find(toReplace => {
            position += 1;
            return lowercasedWord.includes(this.transform(toReplace, strict));
          });
        
          return {
            original: originalWord,
            latinized: lowercasedWord,
            illegal: censoredWord ? this.transform(censoredWord, strict) : undefined,
            pattern: pattern[position - 1]
          };
        });
        
        const censoredArray = []
        for (const word of preparedArray) {
            if (word.illegal) {
                const start = word.latinized.indexOf(word.illegal)
                const end = start + word.illegal.length

                const before = word.pattern.startsWith('*')
                const after = word.pattern.endsWith('*')
    
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

        const doubleCheck = censoredArray.some(word => preparedCensorArray.some(toReplace => word.toLowerCase().includes(toReplace.toLowerCase().replace(/\*/g,''))));
        return doubleCheck ? this.convert(censoredArray.join(' '), strict) : censoredArray.join(' ')
    }
}

module.exports = {
    Antibiotic
}