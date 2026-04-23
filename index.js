const lookalike = require('./lookalike');

class Antibiotic {
    replacement(length, symbol) {
        if (length <= 0) return '';
        if (symbol) return symbol.repeat(length);
        const chars = '@#';
        let r = '';
        for (let i = 0; i < length; i++) r += chars[Math.floor(Math.random() * chars.length)];
        return r;
    }

    _applyLookalike(word) {
        const origChars = [...word];
        const convChars = [];
        const origMap = []; // convChars[i] came from origChars[origMap[i]]
        for (let i = 0; i < origChars.length; i++) {
            const mapped = lookalike[origChars[i]] || origChars[i];
            for (const c of mapped) {
                convChars.push(c);
                origMap.push(i);
            }
        }
        return { convChars, origMap };
    }

    _preparePattern(pattern, strict) {
        const before = pattern.startsWith('*');
        const after = pattern.endsWith('*');
        let core = pattern.replace(/^\*|\*$/g, '');
        if (strict) core = [...core].map(c => lookalike[c] || c).join('');
        core = core.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (core.length > 3) core = core.replace(/([a-z0-9])\1+/g, '$1');
        return { before, after, core };
    }

    _censorWord(word, patterns, repl, strict) {
        const origChars = [...word];
        if (origChars.length === 0) return '';

        // Step 1: apply lookalike conversion to get ASCII-comparable chars
        const { convChars, origMap } = strict
            ? this._applyLookalike(word)
            : { convChars: [...origChars], origMap: origChars.map((_, i) => i) };

        // Step 2: extract lowercase alphanumeric chars and track positions
        const alphaChars = [];
        const alphaToConv = [];
        for (let i = 0; i < convChars.length; i++) {
            const c = convChars[i].toLowerCase();
            if (/[a-z0-9]/.test(c)) {
                alphaChars.push(c);
                alphaToConv.push(i);
            }
        }
        const alpha = alphaChars.join('');

        // Step 3: deduplicate consecutive identical chars (only when length > 3)
        let deduped = alpha;
        let dedupGroups = alphaChars.map((_, i) => [i, i + 1]);
        if (alpha.length > 3) {
            const dChars = [];
            const dGroups = [];
            let i = 0;
            while (i < alpha.length) {
                let j = i + 1;
                while (j < alpha.length && alpha[j] === alpha[i]) j++;
                dChars.push(alpha[i]);
                dGroups.push([i, j]);
                i = j;
            }
            deduped = dChars.join('');
            dedupGroups = dGroups;
        }

        const censorOrig = new Array(origChars.length).fill(false);

        const markAlpha = (aStart, aEnd) => {
            for (let i = aStart; i < Math.min(aEnd, alpha.length); i++) {
                const oIdx = origMap[alphaToConv[i]];
                if (oIdx !== undefined) censorOrig[oIdx] = true;
            }
        };

        let anyMatch = false;

        for (const { before, after, core } of patterns) {
            if (!core) continue;

            if (before && after) {
                if (deduped.includes(core) || alpha.includes(core)) {
                    anyMatch = true;
                    censorOrig.fill(true);
                }
                continue;
            }

            // Search in deduped string (handles repeated chars like "heeello" → "helo")
            let pos = 0;
            while ((pos = deduped.indexOf(core, pos)) !== -1) {
                anyMatch = true;
                const end = pos + core.length;
                const aStart = dedupGroups[pos][0];
                const aEnd = dedupGroups[end - 1][1];
                if (before) markAlpha(0, aEnd);
                else if (after) markAlpha(aStart, alpha.length);
                else markAlpha(aStart, aEnd);
                pos = end;
            }

            // Also search in raw alpha string (catches patterns with consecutive chars
            // that dedup would collapse, e.g. pattern "aa" in word "aaaa")
            pos = 0;
            while ((pos = alpha.indexOf(core, pos)) !== -1) {
                anyMatch = true;
                const end = pos + core.length;
                if (before) markAlpha(0, end);
                else if (after) markAlpha(pos, alpha.length);
                else markAlpha(pos, end);
                pos = end;
            }
        }

        if (!anyMatch) return word;

        // Censor non-alphanumeric chars within the word (e.g. "f-uck" → "####")
        for (let i = 0; i < origChars.length; i++) {
            if (!censorOrig[i] && !/[\p{L}\p{N}]/u.test(origChars[i])) {
                censorOrig[i] = true;
            }
        }

        if (censorOrig.every(v => v)) {
            return this.replacement(origChars.length, repl);
        }

        return origChars.map((c, i) => censorOrig[i] ? this.replacement(1, repl) : c).join('');
    }

    replace({ originalString, toCensorArray, replacement, strict }) {
        if (!originalString) return '';

        const patterns = toCensorArray.map(p => this._preparePattern(p, strict));

        return originalString
            .split(' ')
            .map(word => this._censorWord(word, patterns, replacement, strict))
            .join(' ');
    }
}

module.exports = { Antibiotic };
