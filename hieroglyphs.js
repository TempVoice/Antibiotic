const weirdToNormalMap = {
  '𝟘': '0',
  '𝟙': '1',
  '𝟚': '2',
  '𝟛': '3',
  '𝟜': '4',
  '𝟝': '5',
  '𝟞': '6',
  '𝟟': '7',
  '𝟠': '8',
  '𝟡': '9',
  '0️⃣': '0',
  '1️⃣': '1',
  '2️⃣': '2',
  '3️⃣': '3',
  '4️⃣': '4',
  '5️⃣': '5',
  '6️⃣': '6',
  '7️⃣': '7',
  '8️⃣': '8',
  '9️⃣': '9',
  'ꪖ': 'A',
  '᥇': 'B',
  'ᥴ': 'C',
  'ᦔ': 'D',
  'ꫀ': 'E',
  'ᠻ': 'F',
  'ᧁ': 'G',
  'ꫝ': 'H',
  'ⅈ': 'I',
  '𝕛': 'j',
  '𝕜': 'k',
  'ꪶ': 'L',
  'ꪑ': 'M',
  'ꪀ': 'N',
  'ꪮ': 'O',
  'ρ': 'P',
  '𝕢': 'q',
  '𝕣': 'r',
  'ડ': 'S',
  '𝕥': 't',
  'ꪊ': 'U',
  'ꪜ': 'V',
  '᭙': 'W',
  '᥊': 'X',
  'ꪗ': 'Y',
  '𝕫': 'z',
  'ᗩ': 'A',
  'ᗷ': 'B',
  'ᑢ': 'C',
  'ᕲ': 'D',
  'ᘿ': 'E',
  'ᖴ': 'F',
  'ᘜ': 'G',
  'ᕼ': 'H',
  'ᓰ': 'I',
  'ᒚ': 'J',
  'ᖽᐸ': 'K',
  'ᒪ': 'L',
  'ᘻ': 'M',
  'ᘉ': 'N',
  'ᓍ': 'O',
  'ᕵ': 'P',
  'ᕴ': 'Q',
  'ᖇ': 'R',
  'ᖶ': 'T',
  'ᑘ': 'U',
  'ᐺ': 'V',
  'ᘺ': 'W',
  '᙭': 'X',
  'ᖻ': 'Y',
  'ᗱ': 'Z',
  'ค': 'A',
  '๖': 'B',
  '¢': 'C',
  '໓': 'D',
  'ງ': 'G',
  'ว': 'J',
  '๓': 'M',
  'ຖ': 'N',
  '໐': 'O',
  '๑': 'Q',
  'r': 'r',
  'น': 'U',
  'ง': 'V',
  'ຟ': 'W',
  'x': 'x',
  'ฯ': 'Y',
  'ຊ': 'Z',
  'ც': 'B',
  'ƈ': 'c',
  'ɖ': 'D',
  'ɛ': 'E',
  'ʄ': 'F',
  'ɠ': 'g',
  'ɧ': 'H',
  'ʝ': 'j',
  'ƙ': 'k',
  'Ɩ': 'L',
  'ɱ': 'm',
  'ơ': 'O',
  '℘': 'P',
  'զ': 'q',
  'ཞ': 'R',
  'ʂ': 's',
  'ɬ': 'T',
  '۷': 'V',
  'ῳ': 'W',
  'ҳ': 'X',
  'ყ': 'y',
  'ʑ': 'Z',
  'ﾑ': 'A',
  '乃': 'B',
  'ᄃ': 'C',
  'り': 'D',
  '乇': 'E',
  'ｷ': 'F',
  'ム': 'G',
  'ん': 'H',
  'ﾉ': 'I',
  'ﾌ': 'J',
  'ズ': 'K',
  'ﾚ': 'L',
  'ﾶ': 'M',
  '刀': 'N',
  'の': 'O',
  'ｱ': 'P',
  'ゐ': 'Q',
  '尺': 'R',
  '丂': 'S',
  'ｲ': 'T',
  'ひ': 'U',
  '√': 'V',
  'ﾒ': 'X',
  'ﾘ': 'Y',
  '乙': 'Z',
  '卂': 'A',
  '匚': 'C',
  'ᗪ': 'D',
  '千': 'F',
  'Ꮆ': 'G',
  '卄': 'H',
  '丨': 'I',
  'Ҝ': 'K',
  'ㄥ': 'L',
  '爪': 'M',
  '几': 'N',
  'ㄖ': 'O',
  '卩': 'P',
  'Ɋ': 'Q',
  'ㄒ': 'T',
  'ㄩ': 'U',
  'ᐯ': 'V',
  '山': 'W',
  '乂': 'X',
  'ㄚ': 'Y',
  '🄰': 'A',
  '🄱': 'B',
  '🄲': 'C',
  '🄳': 'D',
  '🄴': 'E',
  '🄵': 'F',
  '🄶': 'G',
  '🄷': 'H',
  '🄸': 'I',
  '🄹': 'J',
  '🄺': 'K',
  '🄻': 'L',
  '🄼': 'M',
  '🄽': 'N',
  '🄾': 'O',
  '🄿': 'P',
  '🅀': 'Q',
  '🅁': 'R',
  '🅂': 'S',
  '🅃': 'T',
  '🅄': 'U',
  '🅅': 'V',
  '🅆': 'W',
  '🅇': 'X',
  '🅈': 'Y',
  '🅉': 'Z',
  'Ꮧ': 'A',
  'Ᏸ': 'B',
  'ፈ': 'C',
  'Ꮄ': 'D',
  'Ꮛ': 'E',
  'Ꭶ': 'F',
  'Ꮒ': 'H',
  'Ꭵ': 'I',
  'Ꮰ': 'J',
  'Ꮶ': 'K',
  'Ꮭ': 'L',
  'Ꮇ': 'M',
  'Ꮑ': 'N',
  'Ꭷ': 'O',
  'Ꭾ': 'P',
  'Ꭴ': 'Q',
  'Ꮢ': 'R',
  'Ꮥ': 'S',
  'Ꮦ': 'T',
  'Ꮼ': 'U',
  'Ꮙ': 'V',
  'Ꮗ': 'W',
  'ጀ': 'X',
  'Ꭹ': 'Y',
  'ፚ': 'Z',
  'ᑕ': 'C',
  'ᒍ': 'J',
  'ᗰ': 'M',
  'ᑎ': 'N',
  'ᑭ': 'P',
  'ᑫ': 'Q',
  'ᔕ': 'S',
  'ᑌ': 'U',
  'ᗯ': 'W',
  'ᘔ': 'Z',
  'ǟ': 'A',
  'ɮ': 'B',
  'ɢ': 'G',
  'ɦ': 'H',
  'ɨ': 'I',
  'ӄ': 'K',
  'ʟ': 'L',
  'ʍ': 'm',
  'ռ': 'N',
  'օ': 'o',
  'ք': 'p',
  'ʀ': 'R',
  'ֆ': 'S',
  'ȶ': 'T',
  'ʊ': 'U',
  'ʋ': 'v',
  'ա': 'w',
  'Ӽ': 'X',
  'ʏ': 'Y',
  'ʐ': 'Z',
  '𝟶': '0',
  '𝟷': '1',
  '𝟸': '2',
  '𝟹': '3',
  '𝟺': '4',
  '𝟻': '5',
  '𝟼': '6',
  '𝟽': '7',
  '𝟾': '8',
  '𝟿': '9',
  '𝚊': 'a',
  '𝚋': 'b',
  '𝚌': 'c',
  '𝚍': 'd',
  '𝚎': 'e',
  '𝚏': 'f',
  '𝚐': 'g',
  '𝚑': 'h',
  '𝚒': 'i',
  '𝚓': 'j',
  '𝚔': 'k',
  '𝚕': 'l',
  '𝚖': 'm',
  '𝚗': 'n',
  '𝚘': 'o',
  '𝚙': 'p',
  '𝚚': 'q',
  '𝚛': 'r',
  '𝚜': 's',
  '𝚝': 't',
  '𝚞': 'u',
  '𝚟': 'v',
  '𝚠': 'w',
  '𝚡': 'x',
  '𝚢': 'y',
  '𝚣': 'z',
  '𝙰': 'A',
  '𝙱': 'B',
  '𝙲': 'C',
  '𝙳': 'D',
  '𝙴': 'E',
  '𝙵': 'F',
  '𝙶': 'G',
  '𝙷': 'H',
  '𝙸': 'I',
  '𝙹': 'J',
  '𝙺': 'K',
  '𝙻': 'L',
  '𝙼': 'M',
  '𝙽': 'N',
  '𝙾': 'O',
  '𝙿': 'P',
  '𝚀': 'Q',
  '𝚁': 'R',
  '𝚂': 'S',
  '𝚃': 'T',
  '𝚄': 'U',
  '𝚅': 'V',
  '𝚆': 'W',
  '𝚇': 'X',
  '𝚈': 'Y',
  '𝚉': 'Z',
  '𝙖': 'a',
  '𝙗': 'b',
  '𝙘': 'c',
  '𝙙': 'd',
  '𝙚': 'e',
  '𝙛': 'f',
  '𝙜': 'g',
  '𝙝': 'h',
  '𝙞': 'i',
  '𝙟': 'j',
  '𝙠': 'k',
  '𝙡': 'l',
  '𝙢': 'm',
  '𝙣': 'n',
  '𝙤': 'o',
  '𝙥': 'p',
  '𝙦': 'q',
  '𝙧': 'r',
  '𝙨': 's',
  '𝙩': 't',
  '𝙪': 'u',
  '𝙫': 'v',
  '𝙬': 'w',
  '𝙭': 'x',
  '𝙮': 'y',
  '𝙯': 'z',
  '𝘼': 'A',
  '𝘽': 'B',
  '𝘾': 'C',
  '𝘿': 'D',
  '𝙀': 'E',
  '𝙁': 'F',
  '𝙂': 'G',
  '𝙃': 'H',
  '𝙄': 'I',
  '𝙅': 'J',
  '𝙆': 'K',
  '𝙇': 'L',
  '𝙈': 'M',
  '𝙉': 'N',
  '𝙊': 'O',
  '𝙋': 'P',
  '𝙌': 'Q',
  '𝙍': 'R',
  '𝙎': 'S',
  '𝙏': 'T',
  '𝙐': 'U',
  '𝙑': 'V',
  '𝙒': 'W',
  '𝙓': 'X',
  '𝙔': 'Y',
  '𝙕': 'Z',
  '𝒂': 'a',
  '𝒃': 'b',
  '𝒄': 'c',
  '𝒅': 'd',
  '𝒆': 'e',
  '𝒇': 'f',
  '𝒈': 'g',
  '𝒉': 'h',
  '𝒊': 'i',
  '𝒋': 'j',
  '𝒌': 'k',
  '𝒍': 'l',
  '𝒎': 'm',
  '𝒏': 'n',
  '𝒐': 'o',
  '𝒑': 'p',
  '𝒒': 'q',
  '𝒓': 'r',
  '𝒔': 's',
  '𝒕': 't',
  '𝒖': 'u',
  '𝒗': 'v',
  '𝒘': 'w',
  '𝒙': 'x',
  '𝒚': 'y',
  '𝒛': 'z',
  '𝑨': 'A',
  '𝑩': 'B',
  '𝑪': 'C',
  '𝑫': 'D',
  '𝑬': 'E',
  '𝑭': 'F',
  '𝑮': 'G',
  '𝑯': 'H',
  '𝑰': 'I',
  '𝑱': 'J',
  '𝑲': 'K',
  '𝑳': 'L',
  '𝑴': 'M',
  '𝑵': 'N',
  '𝑶': 'O',
  '𝑷': 'P',
  '𝑸': 'Q',
  '𝑹': 'R',
  '𝑺': 'S',
  '𝑻': 'T',
  '𝑼': 'U',
  '𝑽': 'V',
  '𝑾': 'W',
  '𝑿': 'X',
  '𝒀': 'Y',
  '𝒁': 'Z',
  '𝟎': '0',
  '𝟏': '1',
  '𝟐': '2',
  '𝟑': '3',
  '𝟒': '4',
  '𝟓': '5',
  '𝟔': '6',
  '𝟕': '7',
  '𝟖': '8',
  '𝟗': '9',
  '𝐚': 'a',
  '𝐛': 'b',
  '𝐜': 'c',
  '𝐝': 'd',
  '𝐞': 'e',
  '𝐟': 'f',
  '𝐠': 'g',
  '𝐡': 'h',
  '𝐢': 'i',
  '𝐣': 'j',
  '𝐤': 'k',
  '𝐥': 'l',
  '𝐦': 'm',
  '𝐧': 'n',
  '𝐨': 'o',
  '𝐩': 'p',
  '𝐪': 'q',
  '𝐫': 'r',
  '𝐬': 's',
  '𝐭': 't',
  '𝐮': 'u',
  '𝐯': 'v',
  '𝐰': 'w',
  '𝐱': 'x',
  '𝐲': 'y',
  '𝐳': 'z',
  '𝐀': 'A',
  '𝐁': 'B',
  '𝐂': 'C',
  '𝐃': 'D',
  '𝐄': 'E',
  '𝐅': 'F',
  '𝐆': 'G',
  '𝐇': 'H',
  '𝐈': 'I',
  '𝐉': 'J',
  '𝐊': 'K',
  '𝐋': 'L',
  '𝐌': 'M',
  '𝐍': 'N',
  '𝐎': 'O',
  '𝐏': 'P',
  '𝐐': 'Q',
  '𝐑': 'R',
  '𝐒': 'S',
  '𝐓': 'T',
  '𝐔': 'U',
  '𝐕': 'V',
  '𝐖': 'W',
  '𝐗': 'X',
  '𝐘': 'Y',
  '𝐙': 'Z',
  '𝟬': '0',
  '𝟭': '1',
  '𝟮': '2',
  '𝟯': '3',
  '𝟰': '4',
  '𝟱': '5',
  '𝟲': '6',
  '𝟳': '7',
  '𝟴': '8',
  '𝟵': '9',
  '𝗮': 'a',
  '𝗯': 'b',
  '𝗰': 'c',
  '𝗱': 'd',
  '𝗲': 'e',
  '𝗳': 'f',
  '𝗴': 'g',
  '𝗵': 'h',
  '𝗶': 'i',
  '𝗷': 'j',
  '𝗸': 'k',
  '𝗹': 'l',
  '𝗺': 'm',
  '𝗻': 'n',
  '𝗼': 'o',
  '𝗽': 'p',
  '𝗾': 'q',
  '𝗿': 'r',
  '𝘀': 's',
  '𝘁': 't',
  '𝘂': 'u',
  '𝘃': 'v',
  '𝘄': 'w',
  '𝘅': 'x',
  '𝘆': 'y',
  '𝘇': 'z',
  '𝗔': 'A',
  '𝗕': 'B',
  '𝗖': 'C',
  '𝗗': 'D',
  '𝗘': 'E',
  '𝗙': 'F',
  '𝗚': 'G',
  '𝗛': 'H',
  '𝗜': 'I',
  '𝗝': 'J',
  '𝗞': 'K',
  '𝗟': 'L',
  '𝗠': 'M',
  '𝗡': 'N',
  '𝗢': 'O',
  '𝗣': 'P',
  '𝗤': 'Q',
  '𝗥': 'R',
  '𝗦': 'S',
  '𝗧': 'T',
  '𝗨': 'U',
  '𝗩': 'V',
  '𝗪': 'W',
  '𝗫': 'X',
  '𝗬': 'Y',
  '𝗭': 'Z',
  '𝘢': 'a',
  '𝘣': 'b',
  '𝘤': 'c',
  '𝘥': 'd',
  '𝘦': 'e',
  '𝘧': 'f',
  '𝘨': 'g',
  '𝘩': 'h',
  '𝘪': 'i',
  '𝘫': 'j',
  '𝘬': 'k',
  '𝘭': 'l',
  '𝘮': 'm',
  '𝘯': 'n',
  '𝘰': 'o',
  '𝘱': 'p',
  '𝘲': 'q',
  '𝘳': 'r',
  '𝘴': 's',
  '𝘵': 't',
  '𝘶': 'u',
  '𝘷': 'v',
  '𝘸': 'w',
  '𝘹': 'x',
  '𝘺': 'y',
  '𝘻': 'z',
  '𝘈': 'A',
  '𝘉': 'B',
  '𝘊': 'C',
  '𝘋': 'D',
  '𝘌': 'E',
  '𝘍': 'F',
  '𝘎': 'G',
  '𝘏': 'H',
  '𝘐': 'I',
  '𝘑': 'J',
  '𝘒': 'K',
  '𝘓': 'L',
  '𝘔': 'M',
  '𝘕': 'N',
  '𝘖': 'O',
  '𝘗': 'P',
  '𝘘': 'Q',
  '𝘙': 'R',
  '𝘚': 'S',
  '𝘛': 'T',
  '𝘜': 'U',
  '𝘝': 'V',
  '𝘞': 'W',
  '𝘟': 'X',
  '𝘠': 'Y',
  '𝘡': 'Z',
  'α': 'A',
  'Ⴆ': 'b',
  'ԃ': 'd',
  'ҽ': 'e',
  'ϝ': 'f',
  'ԋ': 'h',
  'ι': 'I',
  'ʅ': 'l',
  'ɳ': 'n',
  'σ': 'O',
  'ϙ': 'q',
  'ɾ': 'r',
  'ƚ': 'l',
  'υ': 'U',
  'ɯ': 'w',
  'ȥ': 'z',
  'Α': 'A',
  'Ԃ': 'D',
  'Ҽ': 'E',
  'Σ': 'E',
  'Ϝ': 'F',
  'Ԋ': 'H',
  'Ι': 'I',
  'Ϙ': 'Q',
  'Ƚ': 'L',
  'Υ': 'Y',
  'Ɯ': 'W',
  'Ȥ': 'Z',
  '₳': 'A',
  '฿': 'B',
  '₵': 'C',
  'Ɇ': 'E',
  '₣': 'F',
  '₲': 'G',
  'Ⱨ': 'H',
  '₭': 'K',
  'Ⱡ': 'L',
  '₥': 'M',
  '₦': 'N',
  'Ø': 'O',
  '₱': 'P',
  'Ɽ': 'R',
  '₴': 'S',
  '₮': 'T',
  'Ʉ': 'U',
  '₩': 'W',
  'Ӿ': 'X',
  'Ɏ': 'Y',
  'Ⱬ': 'Z',
  'å': 'a',
  'ß': 'B',
  'Ð': 'D',
  'ê': 'e',
  '£': 'F',
  'g': 'g',
  'ï': 'i',
  'j': 'j',
  'm': 'm',
  'ñ': 'N',
  'ð': 'o',
  'þ': 'P',
  'q': 'q',
  '§': 'S',
  '†': 'T',
  'µ': 'u',
  'v': 'v',
  'w': 'w',
  '¥': 'Y',
  'z': 'z',
  'Ä': 'A',
  'Ç': 'C',
  'È': 'E',
  'Ì': 'I',
  'Ö': 'O',
  'Ú': 'U',
  '×': 'x',
  'в': 'B',
  '∂': 'D',
  'є': 'E',
  'ƒ': 'f',
  'н': 'H',
  'נ': 'J',
  'к': 'K',
  'ℓ': 'L',
  'м': 'M',
  'η': 'N',
  'я': 'R',
  'ѕ': 'S',
  'т': 'T',
  'ν': 'V',
  'ω': 'W',
  'χ': 'X',
  'у': 'Y',
  '⊘': '0',
  'ϩ': '2',
  'Ӡ': '3',
  '५': '4',
  'Ƽ': '5',
  'Ϭ': '6',
  '९': '9',
  'ҍ': 'b',
  'ç': 'c',
  'ժ': 'd',
  'ց': 'g',
  'հ': 'h',
  'ì': 'i',
  'ҟ': 'k',
  'Ӏ': 'l',
  'ղ': 'n',
  'է': 't',
  'մ': 'u',
  'ѵ': 'v',
  'վ': 'y',
  'Հ': 'z',
  'Ⱥ': 'A',
  'β': 'B',
  '↻': 'C',
  'Ꭰ': 'D',
  'Ɛ': 'E',
  'Ƒ': 'F',
  'Ɠ': 'G',
  'Ƕ': 'H',
  'ل': 'J',
  'Ҡ': 'K',
  'Ꝉ': 'L',
  'Ɱ': 'M',
  'ហ': 'N',
  'ට': 'O',
  'φ': 'P',
  'Ҩ': 'Q',
  'འ': 'R',
  'Ϛ': 'S',
  'Ͳ': 'T',
  'Ա': 'U',
  'Ỽ': 'V',
  'చ': 'W',
  'ჯ': 'X',
  'Ӌ': 'Y',
  'ɀ': 'Z',
  'Λ': 'A',
  'Ή': 'H',
  'ᄂ': 'L',
  'П': 'N',
  'Ө': 'O',
  'Я': 'R',
  'Ƨ': 'S',
  'Ƭ': 'T',
  'Ц': 'U',
  'Щ': 'W',
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9',
  'ₐ': 'A',
  'ₑ': 'E',
  'ₕ': 'H',
  'ᵢ': 'I',
  'ⱼ': 'J',
  'ₖ': 'K',
  'ₗ': 'L',
  'ₘ': 'M',
  'ₙ': 'N',
  'ₒ': 'O',
  'ₚ': 'P',
  'ᵣ': 'R',
  'ₛ': 'S',
  'ₜ': 'T',
  'ᵤ': 'U',
  'ᵥ': 'V',
  'ₓ': 'X',
  'y': 'y',
  '₊': '+',
  '₋': '-',
  '₌': '=',
  '₍': '(',
  '₎': ')',
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
  'ᵃ': 'a',
  'ᵇ': 'b',
  'ᶜ': 'C',
  'ᵈ': 'd',
  'ᵉ': 'e',
  'ᶠ': 'F',
  'ᵍ': 'g',
  'ʰ': 'h',
  'ⁱ': 'i',
  'ʲ': 'j',
  'ᵏ': 'k',
  'ˡ': 'l',
  'ᵐ': 'm',
  'ⁿ': 'n',
  'ᵒ': 'o',
  'ᵖ': 'p',
  'ʳ': 'r',
  'ˢ': 'S',
  'ᵗ': 't',
  'ᵘ': 'u',
  'ᵛ': 'v',
  'ʷ': 'w',
  'ˣ': 'X',
  'ʸ': 'Y',
  'ᵧ': 'y',
  'ᶻ': 'Z',
  'ᴬ': 'A',
  'ᴮ': 'B',
  'ᴰ': 'D',
  'ᴱ': 'E',
  'ᴳ': 'G',
  'ᴴ': 'H',
  'ᴵ': 'I',
  'ᴶ': 'J',
  'ᴷ': 'K',
  'ᴸ': 'L',
  'ᴹ': 'M',
  'ᴺ': 'N',
  'ᶫ': 'L',
  'ᴼ': 'O',
  'ᴾ': 'P',
  'ᴿ': 'R',
  'ᵀ': 'T',
  'ᵁ': 'U',
  'ⱽ': 'V',
  'ᵂ': 'W',
  '⁺': '+',
  '⁻': '-',
  '⁼': '=',
  '⁽': '(',
  '⁾': ')',
  '๒': 'B',
  'ς': 'C',
  '๔': 'D',
  'ﻮ': 'G',
  'ђ': 'H',
  'เ': 'I',
  'ן': 'J',
  'ɭ': 'L',
  'ภ': 'N',
  '๏': 'O',
  'ק': 'P',
  'ợ': 'Q',
  'г': 'R',
  'ร': 'S',
  'Շ': 'T',
  'ย': 'U',
  'ש': 'V',
  'ฬ': 'W',
  'א': 'X',
  'ץ': 'Y',
  'չ': 'Z',
  '𝕒': 'a',
  '𝕓': 'b',
  '𝕔': 'c',
  '𝕕': 'd',
  '𝕖': 'e',
  '𝕗': 'f',
  '𝕘': 'g',
  '𝕙': 'h',
  '𝕚': 'i',
  '𝕝': 'l',
  '𝕞': 'm',
  '𝕟': 'n',
  '𝕠': 'o',
  '𝕡': 'p',
  '𝕤': 's',
  '𝕦': 'u',
  '𝕧': 'v',
  '𝕨': 'w',
  '𝕩': 'x',
  '𝕪': 'y',
  '𝔸': 'A',
  '𝔹': 'B',
  'ℂ': 'C',
  '𝔻': 'D',
  '𝔼': 'E',
  '𝔽': 'F',
  '𝔾': 'G',
  'ℍ': 'H',
  '𝕀': 'I',
  '𝕁': 'J',
  '𝕂': 'K',
  '𝕃': 'L',
  '𝕄': 'M',
  'ℕ': 'N',
  '𝕆': 'O',
  'ℙ': 'P',
  'ℚ': 'Q',
  'ℝ': 'R',
  '𝕊': 'S',
  '𝕋': 'T',
  '𝕌': 'U',
  '𝕍': 'V',
  '𝕎': 'W',
  '𝕏': 'X',
  '𝕐': 'Y',
  'ℤ': 'Z',
  '𝖆': 'a',
  '𝖇': 'b',
  '𝖈': 'c',
  '𝖉': 'd',
  '𝖊': 'e',
  '𝖋': 'f',
  '𝖌': 'g',
  '𝖍': 'h',
  '𝖎': 'i',
  '𝖏': 'j',
  '𝖐': 'k',
  '𝖑': 'l',
  '𝖒': 'm',
  '𝖓': 'n',
  '𝖔': 'o',
  '𝖕': 'p',
  '𝖖': 'q',
  '𝖗': 'r',
  '𝖘': 's',
  '𝖙': 't',
  '𝖚': 'u',
  '𝖛': 'v',
  '𝖜': 'w',
  '𝖝': 'x',
  '𝖞': 'y',
  '𝖟': 'z',
  '𝕬': 'A',
  '𝕭': 'B',
  '𝕮': 'C',
  '𝕯': 'D',
  '𝕰': 'E',
  '𝕱': 'F',
  '𝕲': 'G',
  '𝕳': 'H',
  '𝕴': 'I',
  '𝕵': 'J',
  '𝕶': 'K',
  '𝕷': 'L',
  '𝕸': 'M',
  '𝕹': 'N',
  '𝕺': 'O',
  '𝕻': 'P',
  '𝕼': 'Q',
  '𝕽': 'R',
  '𝕾': 'S',
  '𝕿': 'T',
  '𝖀': 'U',
  '𝖁': 'V',
  '𝖂': 'W',
  '𝖃': 'X',
  '𝖄': 'Y',
  '𝖅': 'Z',
  '🆀': 'q',
  '🆆': 'w',
  '🅴': 'e',
  '🆁': 'r',
  '🆃': 't',
  '🆈': 'y',
  '🆄': 'u',
  '🅸': 'i',
  '🅾': 'o',
  '🅿': 'p',
  '🅰': 'a',
  '🆂': 's',
  '🅳': 'd',
  '🅵': 'f',
  '🅶': 'g',
  '🅷': 'h',
  '🅹': 'j',
  '🅺': 'k',
  '🅻': 'l',
  '🆉': 'z',
  '🆇': 'x',
  '🅲': 'c',
  '🆅': 'v',
  '🅱': 'b',
  '🅽': 'n',
  '🅼': 'm',
  '🆎': 'AB',
  '🆑': 'CL',
  '🆘': 'SOS',
  'ℹ': 'i',
  'i️': 'i',
  'ℹ️': 'i',
  '🔤': 'abc',
  '🆖': 'NG',
  '🆗': 'OK',
  '🆙': 'UP!',
  '🆒': 'COOL',
  '🆕': 'NEW',
  '🆓': 'FREE',
  '#️': '#',
  '#️⃣': '#',
  '*️': '*',
  '*️⃣': '*',
  '🚾': 'WC',
  '!️': '!',
  '❗': '!',
  '❕': '!',
  '❓': '?',
  '❔': '?',
  '‼️': '!!',
  '‼': '!!',
  '⁉️': '!?',
  '⁉': '!?',
  '𝓪': 'a',
  '𝓫': 'b',
  '𝓬': 'c',
  '𝓭': 'd',
  '𝓮': 'e',
  '𝓯': 'f',
  '𝓰': 'g',
  '𝓱': 'h',
  '𝓲': 'i',
  '𝓳': 'j',
  '𝓴': 'k',
  '𝓵': 'l',
  '𝓶': 'm',
  '𝓷': 'n',
  '𝓸': 'o',
  '𝓹': 'p',
  '𝓺': 'q',
  '𝓻': 'r',
  '𝓼': 's',
  '𝓽': 't',
  '𝓾': 'u',
  '𝓿': 'v',
  '𝔀': 'w',
  '𝔁': 'x',
  '𝔂': 'y',
  '𝔃': 'z',
  '𝓐': 'A',
  '𝓑': 'B',
  '𝓒': 'C',
  '𝓓': 'D',
  '𝓔': 'E',
  '𝓕': 'F',
  '𝓖': 'G',
  '𝓗': 'H',
  '𝓘': 'I',
  '𝓙': 'J',
  '𝓚': 'K',
  '𝓛': 'L',
  '𝓜': 'M',
  '𝓝': 'N',
  '𝓞': 'O',
  '𝓟': 'P',
  '𝓠': 'Q',
  '𝓡': 'R',
  '𝓢': 'S',
  '𝓣': 'T',
  '𝓤': 'U',
  '𝓥': 'V',
  '𝓦': 'W',
  '𝓧': 'X',
  '𝓨': 'Y',
  '𝓩': 'Z',
  '𝔞': 'a',
  '𝔟': 'b',
  '𝔠': 'c',
  '𝔡': 'd',
  '𝔢': 'e',
  '𝔣': 'f',
  '𝔤': 'g',
  '𝔥': 'h',
  '𝔦': 'i',
  '𝔧': 'j',
  '𝔨': 'k',
  '𝔩': 'l',
  '𝔪': 'm',
  '𝔫': 'n',
  '𝔬': 'o',
  '𝔭': 'p',
  '𝔮': 'q',
  '𝔯': 'r',
  '𝔰': 's',
  '𝔱': 't',
  '𝔲': 'u',
  '𝔳': 'v',
  '𝔴': 'w',
  '𝔵': 'x',
  '𝔶': 'y',
  '𝔷': 'z',
  '𝔄': 'A',
  '𝔅': 'B',
  'ℭ': 'C',
  '𝔇': 'D',
  '𝔈': 'E',
  '𝔉': 'F',
  '𝔊': 'G',
  'ℌ': 'H',
  'ℑ': 'I',
  '𝔍': 'J',
  '𝔎': 'K',
  '𝔏': 'L',
  '𝔐': 'M',
  '𝔑': 'N',
  '𝔒': 'O',
  '𝔓': 'P',
  '𝔔': 'Q',
  'ℜ': 'R',
  '𝔖': 'S',
  '𝔗': 'T',
  '𝔘': 'U',
  '𝔙': 'V',
  '𝔚': 'W',
  '𝔛': 'X',
  '𝔜': 'Y',
  'ℨ': 'Z',
  '０': '0',
  '１': '1',
  '２': '2',
  '３': '3',
  '４': '4',
  '５': '5',
  '６': '6',
  '７': '7',
  '８': '8',
  '９': '9',
  'ｑ': 'q',
  'ｗ': 'w',
  'ｅ': 'e',
  'ｒ': 'r',
  'ｔ': 't',
  'ｙ': 'y',
  'ｕ': 'u',
  'ｉ': 'i',
  'ｏ': 'o',
  'ｐ': 'p',
  'Ｑ': 'Q',
  'Ｗ': 'W',
  'Ｅ': 'E',
  'Ｒ': 'R',
  'Ｔ': 'T',
  'Ｙ': 'Y',
  'Ｕ': 'U',
  'Ｉ': 'I',
  'Ｏ': 'O',
  'Ｐ': 'P',
  '{': '{',
  '}': '}',
  '|': '|',
  'ａ': 'a',
  'ｓ': 's',
  'ｄ': 'd',
  'ｆ': 'f',
  'ｇ': 'g',
  'ｈ': 'h',
  'ｊ': 'j',
  'ｋ': 'k',
  'ｌ': 'l',
  '；': ';',
  '＇': '\'',
  'Ａ': 'A',
  'Ｓ': 'S',
  'Ｄ': 'D',
  'Ｆ': 'F',
  'Ｇ': 'G',
  'Ｈ': 'H',
  'Ｊ': 'J',
  'Ｋ': 'K',
  'Ｌ': 'L',
  '：': ':',
  'ｚ': 'z',
  'ｘ': 'x',
  'ｃ': 'c',
  'ｖ': 'v',
  'ｂ': 'b',
  'ｎ': 'n',
  'ｍ': 'm',
  '，': ',',
  '．': '.',
  '／': '/',
  'Ｚ': 'Z',
  'Ｘ': 'X',
  'Ｃ': 'C',
  'Ｖ': 'V',
  'Ｂ': 'B',
  'Ｎ': 'N',
  'Ｍ': 'M',
  '𝒬': 'Q',
  '𝒲': 'W',
  '𝐸': 'E',
  '𝑅': 'R',
  '𝒯': 'T',
  '𝒴': 'Y',
  '𝒰': 'U',
  '𝐼': 'I',
  '𝒪': 'O',
  '𝒫': 'P',
  '𝒜': 'A',
  '𝒮': 'S',
  '𝒟': 'D',
  '𝐹': 'F',
  '𝒢': 'G',
  '𝐻': 'H',
  '𝒥': 'J',
  '𝒦': 'K',
  '𝐿': 'L',
  '𝒵': 'Z',
  '𝒳': 'X',
  '𝒞': 'C',
  '𝒱': 'V',
  '𝐵': 'B',
  '𝒩': 'N',
  '𝑀': 'M',
  '𝓆': 'q',
  '𝓌': 'w',
  '𝑒': 'e',
  '𝓇': 'r',
  '𝓉': 't',
  '𝓎': 'y',
  '𝓊': 'u',
  '𝒾': 'i',
  '𝑜': 'o',
  '𝓅': 'p',
  '𝒶': 'a',
  '𝓈': 's',
  '𝒹': 'd',
  '𝒻': 'f',
  '𝑔': 'g',
  '𝒽': 'h',
  '𝒿': 'j',
  '𝓀': 'k',
  '𝓁': 'l',
  '𝓏': 'z',
  '𝓍': 'x',
  '𝒸': 'c',
  '𝓋': 'v',
  '𝒷': 'b',
  '𝓃': 'n',
  '𝓂': 'm',
  'Q': 'Q',
  'ᴡ': 'W',
  'ᴇ': 'E',
  'ᴛ': 'T',
  'ᴜ': 'U',
  'ɪ': 'I',
  'ᴏ': 'O',
  'ᴘ': 'P',
  'ᴀ': 'A',
  'ꜱ': 'S',
  'ᴅ': 'D',
  'ꜰ': 'F',
  'ʜ': 'H',
  'ᴊ': 'J',
  'ᴋ': 'K',
  'ᴢ': 'Z',
  'ᴄ': 'C',
  'ᴠ': 'V',
  'ʙ': 'B',
  'ɴ': 'N',
  'ᴍ': 'M',
  'Ⓠ': 'Q',
  'Ⓦ': 'W',
  'Ⓔ': 'E',
  'Ⓡ': 'R',
  'Ⓣ': 'T',
  'Ⓨ': 'Y',
  'Ⓤ': 'U',
  'Ⓘ': 'I',
  'Ⓞ': 'O',
  'Ⓟ': 'P',
  'Ⓐ': 'A',
  'Ⓢ': 'S',
  'Ⓓ': 'D',
  'Ⓕ': 'F',
  'Ⓖ': 'G',
  'Ⓗ': 'H',
  'Ⓙ': 'J',
  'Ⓚ': 'K',
  'Ⓛ': 'L',
  'Ⓩ': 'Z',
  'Ⓧ': 'X',
  'Ⓒ': 'C',
  'Ⓥ': 'V',
  'Ⓑ': 'B',
  'Ⓝ': 'N',
  'Ⓜ': 'M',
  'ⓠ': 'q',
  'ⓦ': 'w',
  'ⓔ': 'e',
  'ⓡ': 'r',
  'ⓣ': 't',
  'ⓨ': 'y',
  'ⓤ': 'u',
  'ⓘ': 'i',
  'ⓞ': 'o',
  'ⓟ': 'p',
  'ⓐ': 'a',
  'ⓢ': 's',
  'ⓓ': 'd',
  'ⓕ': 'f',
  'ⓖ': 'g',
  'ⓗ': 'h',
  'ⓙ': 'j',
  'ⓚ': 'k',
  'ⓛ': 'l',
  'ⓩ': 'z',
  'ⓧ': 'x',
  'ⓒ': 'c',
  'ⓥ': 'v',
  'ⓑ': 'b',
  'ⓝ': 'n',
  'ⓜ': 'm',
  '🅐': 'A',
  '🅑': 'B',
  '🅒': 'C',
  '🅓': 'D',
  '🅔': 'E',
  '🅕': 'F',
  '🅖': 'G',
  '🅗': 'H',
  '🅘': 'I',
  '🅙': 'J',
  '🅚': 'K',
  '🅛': 'L',
  '🅜': 'M',
  '🅝': 'N',
  '🅞': 'O',
  '🅟': 'P',
  '🅠': 'Q',
  '🅡': 'R',
  '🅢': 'S',
  '🅣': 'T',
  '🅤': 'U',
  '🅥': 'V',
  '🅦': 'W',
  '🅧': 'X',
  '🅨': 'Y',
  '🅩': 'Z',
  'Ѧ': 'A',
  'ℬ': 'B',
  '℃': 'C',
  '€': 'E',
  'ℰ': 'E',
  'ℱ': 'F',
  'Ḡ': 'G',
  'ℋ': 'H',
  'ℐ': 'I',
  'Ḱ': 'K',
  'Ḻ': 'L',
  'И': 'N',
  'Ѻ': 'O',
  '◎': 'O',
  'ϟ': 'S',
  'Ü': 'U',
  'Ⅴ': 'V',
  'Ш': 'W',
  '✕': 'x',
  'Ẏ': 'Y',
  'ℯ': 'e',
  'ḟ': 'f',
  'ℊ': 'g',
  'ї': 'i',
  'ᾔ': 'n',
  'ґ': 'r',
  'ṧ': 's',
  'ü': 'u',
  'ṽ': 'v',
  'ƴ': 'y',
  'ẕ': 'z',
  'ᕱ': 'a',
  'ᑾ': 'b',
  'ᓧ': 'c',
  'ᖱ': 'd',
  'ᕧ': 'e',
  'ᖺ': 'h',
  'ᓮ': 'i',
  'ᒷ': 'L',
  'ᙜ': 'M',
  'ᘗ': 'n',
  'ᕾ': 'p',
  'ᖳ': 'q',
  'ᘢ': 'u',
  'ᙡ': 'W',
  'ᗲ': 'E',
  'ᕓ': 'v',
  'ᘮ': 'u',
  'ᑸ': 'p',
  'ᒙ': 'J',
  'ᕮ': 'E',
  'ᑣ': 'C',
  'ᗽ': 'B',
  'ᕢ': 'n',
  'ƺ': 'z',
  // Upside down chars
  'Ɐ': 'A',
  'Ɔ': 'C',
  'Ǝ': 'E',
  'Ʌ': 'V',
  'ɐ': 'a',
  'ɔ': 'c',
  'ǝ': 'e',
  'ɟ': 'f',
  'ɥ': 'h',
  'ı': 'i',
  'ʞ': 'k',
  'ɹ': 'r',
  'ʇ': 't',
  'ʌ': 'v',
  'ʎ': 'y',
  // Latin Extended A
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ả": "A",
	"Ạ": "A",
	"Ẩ": "A",
	"Ẫ": "A",
	"Ậ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ẻ": "E",
	"Ẽ": "E",
	"Ẹ": "E",
	"Ể": "E",
	"Ễ": "E",
	"Ệ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ỉ": "I",
	"Ị": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ỏ": "O",
	"Ọ": "O",
	"Ổ": "O",
	"Ỗ": "O",
	"Ộ": "O",
	"Ờ": "O",
	"Ở": "O",
	"Ỡ": "O",
	"Ớ": "O",
	"Ợ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ủ": "U",
	"Ụ": "U",
	"Ử": "U",
	"Ữ": "U",
	"Ự": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ả": "a",
	"ạ": "a",
	"ẩ": "a",
	"ẫ": "a",
	"ậ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ẻ": "e",
	"ẽ": "e",
	"ẹ": "e",
	"ể": "e",
	"ễ": "e",
	"ệ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ỉ": "i",
	"ị": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ỏ": "o",
	"ọ": "o",
	"ổ": "o",
	"ỗ": "o",
	"ộ": "o",
	"ờ": "o",
	"ở": "o",
	"ỡ": "o",
	"ớ": "o",
	"ợ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ủ": "u",
	"ụ": "u",
	"ử": "u",
	"ữ": "u",
	"ự": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
	"й":"и",
	"Й":"И",
	"ё":"е",
	"Ё":"Е",
  "ᶆ":"m",
  "ᶆ":"m",
  "ᶍ":"x",
  "$":"s",
  '　': ' ',
};

module.exports = weirdToNormalMap;