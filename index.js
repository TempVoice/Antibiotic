const lookalike = require('./lookalike');

class Antibiotic {
    transform(input, strict) {
        let out = input
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, '')

        if (input.length > 3) {
            out = out.replace(/([a-z])\1+/g, '$1');
        }

        return out;
    }

    replacement(length, symbol) {
        if (length <= 0) return '';
        if (symbol) return symbol.repeat(length);

        const characters = '@#';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters[Math.floor(Math.random() * characters.length)];
        }
        return result;
    }

    convert(str, strict) {
        if (!str) return '';
        if (!strict) return str;
        let result = '';
        for (const char of str) {
            result += lookalike[char] || char;
        }
        return result;
    }

    replace({ originalString, toCensorArray, replacement, strict }) {
        const preparedCensorArray = toCensorArray.map(word => this.transform(this.convert(word, strict), strict));
        const strippedCensorArray = preparedCensorArray.map(w => w.replace(/\*/g, ''));

        const censoredArray = originalString.split(' ').map(originalWord => {
            const latinizedWord = this.transform(this.convert(originalWord, strict), strict);

            const matches = [];
            for (let i = 0; i < preparedCensorArray.length; i++) {
                const toReplace = preparedCensorArray[i];
                if (toReplace !== '' && latinizedWord.includes(toReplace)) {
                    matches.push({ illegal: toReplace, pattern: toCensorArray[i] });
                }
            }

            if (matches.length === 0) return originalWord;

            const shouldCensor = new Array(latinizedWord.length).fill(false);

            for (const { illegal, pattern } of matches) {
                const start = latinizedWord.indexOf(illegal);
                const end = start + illegal.length;
                const before = pattern.startsWith('*');
                const after = pattern.endsWith('*');

                if (before && after) {
                    shouldCensor.fill(true);
                } else if (before) {
                    for (let i = 0; i < end; i++) shouldCensor[i] = true;
                } else if (after) {
                    for (let i = start; i < latinizedWord.length; i++) shouldCensor[i] = true;
                } else {
                    for (let i = start; i < end; i++) shouldCensor[i] = true;
                }
            }

            if (originalWord.length === latinizedWord.length) {
                for (let i = 0; i < originalWord.length; i++) {
                    if (!shouldCensor[i] && !/[a-zA-Z0-9]/.test(originalWord[i])) {
                        shouldCensor[i] = true;
                    }
                }
            }

            let result = '';
            for (let i = 0; i < latinizedWord.length; i++) {
                result += shouldCensor[i] ? this.replacement(1, replacement) : latinizedWord[i];
            }
            return result;
        });

        const doubleCheck = censoredArray.some(word => {
            const lower = word.toLowerCase();
            return strippedCensorArray.some(stripped => lower.includes(stripped));
        });

        return doubleCheck ? this.convert(censoredArray.join(' '), strict) : censoredArray.join(' ');
    }
}

module.exports = {
    Antibiotic
}
