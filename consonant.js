// ============================================
// FORCE CUSTOM CURSORS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.cursor = "url('Match/cursormatch.png') 16 16, auto";
    document.documentElement.style.cursor = "url('Match/cursormatch.png') 16 16, auto";

    const observer = new MutationObserver(() => {
        if (!document.body.style.cursor.includes('cursormatch')) {
            document.body.style.cursor = "url('Match/cursormatch.png') 16 16, auto";
        }
    });

    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['style']
    });
});

// ============================================
// CONSONANTS - Box Images
// ============================================
const consonantImages = [
    // Column 1 - 8 boxes
    { column: 1, box: 1,  image: 'BoxImage/KA.jpg'  },
    { column: 1, box: 2,  image: 'BoxImage/NGA.jpg' },
    { column: 1, box: 3,  image: 'BoxImage/JHA.jpg' },
    { column: 1, box: 4,  image: 'BoxImage/DA.jpg'  },
    { column: 1, box: 5,  image: 'BoxImage/THA.jpg' },
    { column: 1, box: 6,  image: 'BoxImage/P.jpg'   },
    { column: 1, box: 7,  image: 'BoxImage/MA.jpg'  },
    { column: 1, box: 8,  image: 'BoxImage/V.jpg'   },

    // Column 2 - 9 boxes
    { column: 2, box: 1,  image: 'BoxImage/KHA.jpg' },
    { column: 2, box: 2,  image: 'BoxImage/CA.jpg'  },
    { column: 2, box: 3,  image: 'BoxImage/NYA.jpg' },
    { column: 2, box: 4,  image: 'BoxImage/DH.jpg'  },
    { column: 2, box: 5,  image: 'BoxImage/D.jpg'   },
    { column: 2, box: 6,  image: 'BoxImage/FA.jpg'  },
    { column: 2, box: 7,  image: 'BoxImage/Y.jpg'   },
    { column: 2, box: 8,  image: 'BoxImage/SHA.jpg' },
    { column: 2, box: 9,  image: 'BoxImage/HA.jpg'  },

    // Column 3 - 9 boxes
    { column: 3, box: 1,  image: 'BoxImage/G.jpg'    },
    { column: 3, box: 2,  image: 'BoxImage/CHHA.jpg' },
    { column: 3, box: 3,  image: 'BoxImage/TA.jpg'   },
    { column: 3, box: 4,  image: 'BoxImage/N.jpg'    },
    { column: 3, box: 5,  image: 'BoxImage/DHA.jpg'  },
    { column: 3, box: 6,  image: 'BoxImage/B.jpg'    },
    { column: 3, box: 7,  image: 'BoxImage/R.jpg'    },
    { column: 3, box: 8,  image: 'BoxImage/SHHA.jpg' },
    { column: 3, box: 9,  image: 'BoxImage/KSH.jpg'  },

    // Column 4 - 10 boxes
    { column: 4, box: 1,  image: 'BoxImage/GHA.jpg' },
    { column: 4, box: 2,  image: 'BoxImage/JA.jpg'  },
    { column: 4, box: 3,  image: 'BoxImage/THH.jpg' },
    { column: 4, box: 4,  image: 'BoxImage/T.jpg'   },
    { column: 4, box: 5,  image: 'BoxImage/NA.jpg'  },
    { column: 4, box: 6,  image: 'BoxImage/BHA.jpg' },
    { column: 4, box: 7,  image: 'BoxImage/LA.jpg'  },
    { column: 4, box: 8,  image: 'BoxImage/SA.jpg'  },
    { column: 4, box: 9,  image: 'BoxImage/TRA.jpg' },
    { column: 4, box: 10, image: 'BoxImage/GYA.jpg' },
];

// ============================================
// MODAL DATA
// ============================================
const consonantModalData = {
    'consonant-1-1': {
        image: 'BoxImage/KA.jpg',
        title: 'Letter KA (क)', hindi: 'क', phonetic: '"ka"', exampleWord: 'kabob',
        sentence: 'कबाब फॉर संडे डिनर (kuh-bob for sun-day din-er - Kabob for Sunday dinner.)',
        audio: 'audio/k.mp4',
        teachingNote: 'Perfect English match. This sound exists naturally in English.',
        strategy: 'DIRECT MATCH'
    },
    'consonant-2-1': {
        image: 'BoxImage/KHA.jpg',
        title: 'Letter KHA (ख)', hindi: 'ख', phonetic: '"kha"', exampleWord: 'khaki',
        sentence: 'खाकीज़ आर द ओनली पैंट्स आई वेयर (kah-keez ar thuh ohn-lee pants eye wair - Khaki are the only pants I wear)',
        audio: 'audio/kha.mp4',
        teachingNote: 'LIMINAL: English doesn\'t have this aspirated sound naturally. The closest bridge is the loanword "khaki." Feel the extra breath after the k.',
        strategy: 'LIMINAL'
    },
    'consonant-3-1': {
        image: 'BoxImage/G.jpg',
        title: 'Letter GA (ग)', hindi: 'ग', phonetic: '"ga"', exampleWord: 'gold',
        sentence: 'गोल्ड इज़ माई फ़ेवरिट मेटल (gold iz my fay-vuh-rit met-ul - Gold is my favourite metal)',
        audio: 'audio/g.mp4',
        teachingNote: 'Perfect English match. Use hard "g" like in "gate," never soft "g" like in "giraffe."',
        strategy: 'DIRECT MATCH'
    },
    'consonant-4-1': {
        image: 'BoxImage/GHA.jpg',
        title: 'Letter GHA (घ)', hindi: 'घ', phonetic: '"gha"', exampleWord: 'ghee',
        sentence: 'घी इज़ यूज़्ड इन इंडियन हाउसहोल्ड्स (gee iz yoozd in in-dee-un hous-holdz - Ghee is used in Indian households.)',
        audio: 'audio/gha.mp4',
        teachingNote: 'LIMINAL: ग (ga) = voiced, unaspirated (closer to English "g") घ (gha) = voiced, aspirated (g + strong breath)',
        strategy: 'LIMINAL'
    },
    'consonant-1-2': {
        image: 'BoxImage/NGA.jpg',
        title: 'Letter ṄA (ङ)', hindi: 'ङ', phonetic: '"nga"', exampleWord: 'ring',
        sentence: 'रिंग्स आर माई फ़ेवरिट ज्वेलरी (rings ar my fay-vuh-rit joo-ul-ree - Rings are my favourite jewelry)',
        audio: 'audio/nga.mp4',
        teachingNote: 'POSITIONAL: This sound CANNOT start words in Hindi or English. It only appears in the middle or at the end of words, like the "ng" in "ring," "sing," or "bang."',
        strategy: 'POSITIONAL'
    },
    'consonant-2-2': {
        image: 'BoxImage/CA.jpg',
        title: 'Letter CA (च)', hindi: 'च', phonetic: '"cha"', exampleWord: 'chalk',
        sentence: 'चॉक इज़ यूज़्ड इन द क्लासरूम। (chawk iz yoozd in thuh klas-room - Chalk is used in the classroom.)',
        audio: 'audio/ca.mp4',
        teachingNote: 'Perfect match between Hindi and English. Your tongue naturally forms च when saying "ch."',
        strategy: 'DIRECT MATCH'
    },
    'consonant-3-2': {
        image: 'BoxImage/CHHA.jpg',
        title: 'Letter CHA (छ)', hindi: 'छ', phonetic: '"chha"', exampleWord: 'cheese',
        sentence: 'छीज़ इज़ मेड फ़्रॉम मिल्क। (chheez iz mayd from milk - Cheese is made from milk.)',
        audio: 'audio/chha.mp4',
        teachingNote: 'LIMINAL because English doesn\'t distinguish aspiration. च (cha) and छ (chha) sound identical to English ears.',
        strategy: 'LIMINAL'
    },
    'consonant-4-2': {
        image: 'BoxImage/JA.jpg',
        title: 'Letter JA (ज)', hindi: 'ज', phonetic: '"ja"', exampleWord: 'jewel',
        sentence: 'ज्वेल्स आर वैल्युएबल। (joo-elz ar val-yoo-uh-bul - Jewels are valuable.)',
        audio: 'audio/ja.mp4',
        teachingNote: 'Perfect English match. Same "j" sound as in "jump."',
        strategy: 'DIRECT MATCH'
    },
    'consonant-1-3': {
        image: 'BoxImage/JHA.jpg',
        title: 'Letter JHA (झ)', hindi: 'झ', phonetic: '"jha"', exampleWord: 'judge',
        sentence: 'झज मेड अ फ़ेयर डिसीज़न। (jhuj mayd uh fair di-si-zhun - The judge made a fair decision)',
        audio: 'audio/jha.mp4',
        teachingNote: 'LIMINAL: ज and झ both sound like "j" to you. The only difference is breath - झ has more air pushed through.',
        strategy: 'LIMINAL'
    },
    'consonant-2-3': {
        image: 'BoxImage/NYA.jpg',
        title: 'Letter ÑA (ञ)', hindi: 'ञ', phonetic: '"nya"', exampleWord: 'canyon',
        sentence: 'द कैनयन इज़ वेरी डीप। (thuh kan-yun iz veh-ree deep - The canyon is very deep)',
        audio: 'audio/nya.mp4',
        teachingNote: 'POSITIONAL: ञ never starts words in Hindi - it only appears in the middle. You already make this sound in "canyon" or "onion."',
        strategy: 'POSITIONAL'
    },
    'consonant-3-3': {
        image: 'BoxImage/TA.jpg',
        title: 'Letter ṬA (ट)', hindi: 'ट', phonetic: '"ṭa"', exampleWord: 'tomato',
        sentence: 'द टमेटो इज़ राइप। (thuh tuh-may-toh iz raip - The tomato is ripe.)',
        audio: 'audio/ta.mp4',
        teachingNote: 'APPROXIMATION: ट needs your tongue curled BACK to the roof of your mouth - deeper and heavier than English "t."',
        strategy: 'APPROXIMATION'
    },
    'consonant-4-3': {
        image: 'BoxImage/THH.jpg',
        title: 'Letter ṬHA (ठ)', hindi: 'ठ', phonetic: '"ṭha"', exampleWord: 'thanda (cold)',
        sentence: 'ठंडा वॉटर इज़ रिफ्रेशिंग। (than-daa waw-ter iz ruh-fresh-ing - Cold water is refreshing.)',
        audio: 'audio/thh.mp4',
        teachingNote: 'LIMINAL: ठ combines a retroflex tongue position AND aspiration. Neither exists together in English.',
        strategy: 'LIMINAL'
    },
    'consonant-1-4': {
        image: 'BoxImage/DA.jpg',
        title: 'Letter ḌA (ड)', hindi: 'ड', phonetic: '"ḍa"', exampleWord: 'door',
        sentence: 'द डोर इज़ ओपन। (thuh dor iz oh-pun - The door is open.)',
        audio: 'audio/da.mp4',
        teachingNote: 'APPROXIMATION: ड needs your tongue curled back to the roof of your mouth. English "d" touches behind your teeth.',
        strategy: 'APPROXIMATION'
    },
    'consonant-2-4': {
        image: 'BoxImage/DH.jpg',
        title: 'Letter ḌHA (ढ)', hindi: 'ढ', phonetic: '"ḍha"', exampleWord: 'duck',
        sentence: 'द ढक इज़ स्विमिंग। (thuh dhuk iz swim-ing - The duck is swimming.)',
        audio: 'audio/dh.mp4',
        teachingNote: 'LIMINAL: ढ combines a retroflex tongue position AND aspiration. Neither exists together in English.',
        strategy: 'LIMINAL'
    },
    'consonant-3-4': {
        image: 'BoxImage/N.jpg',
        title: 'Letter ṆA (ण)', hindi: 'ण', phonetic: '"ṇa"', exampleWord: 'Ganesha (Hindu God)',
        sentence: 'गणेश इज़ अ हिंदू गॉड। (guh-nay-shuh iz uh hin-doo god - Ganesha is a Hindu god.)',
        audio: 'audio/n.mp4',
        teachingNote: 'POSITIONAL: ण never starts words in Hindi. It only appears in Sanskrit loanwords and is rare in modern everyday Hindi.',
        strategy: 'POSITIONAL'
    },
    'consonant-4-4': {
        image: 'BoxImage/T.jpg',
        title: 'Letter TA (त)', hindi: 'त', phonetic: '"ta"', exampleWord: 'tea',
        sentence: 'द टी इज़ हॉट। (thuh tee iz hot - The tea is hot.)',
        audio: 'audio/t.mp4',
        teachingNote: 'APPROXIMATION: त touches your teeth directly - softer and more forward than English "t."',
        strategy: 'APPROXIMATION'
    },
    'consonant-1-5': {
        image: 'BoxImage/THA.jpg',
        title: 'Letter THA (थ)', hindi: 'थ', phonetic: '"tha"', exampleWord: 'thorn',
        sentence: 'द थॉर्न इज़ शार्प। (thuh thorn iz sharp - The thorn is sharp.)',
        audio: 'audio/tha.mp4',
        teachingNote: 'DIRECT MATCH: थ matches the "th" sound in "think" or "thorn." Your mouth already knows this one.',
        strategy: 'DIRECT MATCH'
    },
    'consonant-2-5': {
        image: 'BoxImage/D.jpg',
        title: 'Letter DA (द)', hindi: 'द', phonetic: '"da"', exampleWord: 'day',
        sentence: 'द डे इज़ ब्राइट। (thuh day iz brait - The day is bright.)',
        audio: 'audio/d.mp4',
        teachingNote: 'APPROXIMATION: द touches your teeth directly - softer and more forward than English "d."',
        strategy: 'APPROXIMATION'
    },
    'consonant-3-5': {
        image: 'BoxImage/DHA.jpg',
        title: 'Letter DHA (ध)', hindi: 'ध', phonetic: '"dha"', exampleWord: 'dhol (drum)',
        sentence: 'द धोल इज़ अ ड्रम। (thuh dhol iz uh drum - The dhol is a drum.)',
        audio: 'audio/dha.mp4',
        teachingNote: 'LIMINAL: ध doesn\'t exist in English. It\'s द with heavy aspiration - add a strong breath after the "d."',
        strategy: 'LIMINAL'
    },
    'consonant-4-5': {
        image: 'BoxImage/NA.jpg',
        title: 'Letter NA (न)', hindi: 'न', phonetic: '"na"', exampleWord: 'nail',
        sentence: 'द नेल इज़ शार्प। (thuh nayl iz sharp - The nail is sharp.)',
        audio: 'audio/na.mp4',
        teachingNote: 'APPROXIMATION: न is very close to English "n." The only difference is न touches your teeth directly, while English "n" touches the ridge just behind.',
        strategy: 'APPROXIMATION'
    },
    'consonant-1-6': {
        image: 'BoxImage/P.jpg',
        title: 'Letter PA (प)', hindi: 'प', phonetic: '"pa"', exampleWord: 'pen',
        sentence: 'द पेन इज़ ब्लू। (thuh pen iz bloo - The pen is blue.)',
        audio: 'audio/p.mp4',
        teachingNote: 'APPROXIMATION: प is very close to English "p." English "p" has a slight puff of air; प has less. One of the easier sounds to pick up.',
        strategy: 'APPROXIMATION'
    },
    'consonant-2-6': {
        image: 'BoxImage/FA.jpg',
        title: 'Letter PHA (फ)', hindi: 'फ', phonetic: '"pha"', exampleWord: 'phone',
        sentence: 'द फ़ोन इज़ रिंगिंग। (thuh fohn iz ring-ing - The phone is ringing.)',
        audio: 'audio/fa.mp4',
        teachingNote: 'APPROXIMATION: Traditional फ is "p" with heavy aspiration. Modern Hindi uses it for the English "f" sound, so "phone" is a natural bridge.',
        strategy: 'APPROXIMATION'
    },
    'consonant-3-6': {
        image: 'BoxImage/B.jpg',
        title: 'Letter BA (ब)', hindi: 'ब', phonetic: '"ba"', exampleWord: 'ball',
        sentence: 'द बॉल इज़ राउंड। (thuh bawl iz raund - The ball is round.)',
        audio: 'audio/b.mp4',
        teachingNote: 'DIRECT MATCH: English "b" and ब are essentially the same sound. No adjustment needed.',
        strategy: 'DIRECT MATCH'
    },
    'consonant-4-6': {
        image: 'BoxImage/BHA.jpg',
        title: 'Letter BHA (भ)', hindi: 'भ', phonetic: '"bha"', exampleWord: 'bhangra (Indian dance)',
        sentence: 'भांगड़ा इज़ अ डांस। (bhang-raa iz uh daants - Bhangra is a dance.)',
        audio: 'audio/bha.mp4',
        teachingNote: 'LIMINAL: भ doesn\'t exist in English. It\'s ब with heavy aspiration - add a strong breath after the "b."',
        strategy: 'LIMINAL'
    },
    'consonant-1-7': {
        image: 'BoxImage/MA.jpg',
        title: 'Letter MA (म)', hindi: 'म', phonetic: '"ma"', exampleWord: 'map',
        sentence: 'द मैप शोज़ द वे। (thuh map shohz thuh way - The map shows the way.)',
        audio: 'audio/ma.mp4',
        teachingNote: 'DIRECT MATCH: English "m" and म are identical. No adjustment needed.',
        strategy: 'DIRECT MATCH'
    },
    'consonant-2-7': {
        image: 'BoxImage/Y.jpg',
        title: 'Letter YA (य)', hindi: 'य', phonetic: '"ya"', exampleWord: 'yarn',
        sentence: 'द यार्न इज़ सॉफ़्ट। (thuh yarn iz sawft - The yarn is soft.)',
        audio: 'audio/y.mp4',
        teachingNote: 'DIRECT MATCH: English "y" and य are identical. No adjustment needed.',
        strategy: 'DIRECT MATCH'
    },
    'consonant-3-7': {
        image: 'BoxImage/R.jpg',
        title: 'Letter RA (र)', hindi: 'र', phonetic: '"ra"', exampleWord: 'rose',
        sentence: 'रोज़ेज़ आर ब्यूटीफुल। (roh-zez ar byoo-tee-ful - Roses are beautiful.)',
        audio: 'audio/r.mp4',
        teachingNote: 'APPROXIMATION: Hindi र is a quick tap of the tongue. English "r" keeps the tongue curled back without ever touching the roof.',
        strategy: 'APPROXIMATION'
    },
    'consonant-4-7': {
        image: 'BoxImage/LA.jpg',
        title: 'Letter LA (ल)', hindi: 'ल', phonetic: '"la"', exampleWord: 'lamp',
        sentence: 'द लैम्प गिव्ज़ लाइट। (thuh lamp givz lait - The lamp gives light.)',
        audio: 'audio/la.mp4',
        teachingNote: 'DIRECT MATCH: English "l" and ल are essentially the same sound. No adjustment needed.',
        strategy: 'DIRECT MATCH'
    },
    'consonant-1-8': {
        image: 'BoxImage/V.jpg',
        title: 'Letter VA (व)', hindi: 'व', phonetic: '"va" or "wa"', exampleWord: 'vase',
        sentence: 'द वेज़ होल्ड्ज़ फ्लावर्स। (thuh vayz hohldz flow-urz - The vase holds flowers.)',
        audio: 'audio/v.mp4',
        teachingNote: 'DIRECT MATCH with variation: व can sound like "v" or "w" depending on context. Both are natural in English.',
        strategy: 'DIRECT MATCH'
    },
    'consonant-2-8': {
        image: 'BoxImage/SHA.jpg',
        title: 'Letter ŚA (श)', hindi: 'श', phonetic: '"sha"', exampleWord: 'shell',
        sentence: 'द शेल इज़ फाउंड ऑन द बीच। (thuh shel iz faund on thuh beech - The shell is found on the beach.)',
        audio: 'audio/sha.mp4',
        teachingNote: 'DIRECT MATCH: English "sh" and श are identical. No adjustment needed.',
        strategy: 'DIRECT MATCH'
    },
    'consonant-3-8': {
        image: 'BoxImage/SHHA.jpg',
        title: 'Letter ṢA (ष)', hindi: 'ष', phonetic: '"ṣha"', exampleWord: 'shore',
        sentence: 'विष इज़ डेंजरस। (vish iz dayn-jer-us - Poison is dangerous.)',
        audio: 'audio/shha.mp4',
        teachingNote: 'APPROXIMATION: Technically a retroflex "sh," but most modern Hindi speakers pronounce it identically to श. Treat it as "sh" and you\'ll be understood.',
        strategy: 'APPROXIMATION'
    },
    'consonant-4-8': {
        image: 'BoxImage/SA.jpg',
        title: 'Letter SA (स)', hindi: 'स', phonetic: '"sa"', exampleWord: 'soap',
        sentence: 'द सोप इज़ क्लीन। (thuh sohp iz kleen - The soap is clean.)',
        audio: 'audio/sa.mp4',
        teachingNote: 'DIRECT MATCH: English "s" and स are essentially the same sound. No adjustment needed.',
        strategy: 'DIRECT MATCH'
    },
    'consonant-2-9': {
        image: 'BoxImage/HA.jpg',
        title: 'Letter HA (ह)', hindi: 'ह', phonetic: '"ha"', exampleWord: 'hat',
        sentence: 'द हैट इज़ ऑन माई हेड। (thuh hat iz on my hed - The hat is on my head.)',
        audio: 'audio/ha.mp4',
        teachingNote: 'DIRECT MATCH: English "h" and ह are essentially the same sound. No adjustment needed.',
        strategy: 'DIRECT MATCH'
    },
    'consonant-3-9': {
        image: 'BoxImage/KSH.jpg',
        title: 'Letter KṢA (क्ष)', hindi: 'क्ष', phonetic: '"ksha"', exampleWord: 'lakshmi (loanword)',
        sentence: 'शिक्षा इज़ इम्पॉर्टेंट। (shik-shaa iz im-por-tent - Education is important.)',
        audio: 'audio/ksh.mp4',
        teachingNote: 'COMPOUND: क्ष is क + ष combined. Say "k" and "sh" together quickly - like the "ksh" in "bookshelf" said fast.',
        strategy: 'COMPOUND'
    },
    'consonant-4-9': {
        image: 'BoxImage/TRA.jpg',
        title: 'Letter TRA (त्र)', hindi: 'त्र', phonetic: '"tra"', exampleWord: 'mantra (loanword)',
        sentence: 'मित्र इज़ अ ट्रू फ्रेंड। (mit-ruh iz uh troo frend - A friend is true.)',
        audio: 'audio/tra.mp4',
        teachingNote: 'COMPOUND: त्र is त + र combined. Say "t" and "r" together - identical to the "tr" in "tree" or "train."',
        strategy: 'COMPOUND'
    },
    'consonant-4-10': {
        image: 'BoxImage/GYA.jpg',
        title: 'Letter GYA (ज्ञ)', hindi: 'ज्ञ', phonetic: '"gya"', exampleWord: 'gyan (knowledge)',
        sentence: 'विज्ञान इज़ मॉडर्न। (vig-yaan iz mod-urn - Science is modern.)',
        audio: 'audio/gya.mp4',
        teachingNote: 'COMPOUND: Technically ज + ञ combined, but universally pronounced "gya" in modern Hindi. Think of it as one fused sound.',
        strategy: 'COMPOUND'
    },
};

const modalData = consonantModalData;

// ============================================
// BOX HEIGHT - match image aspect ratio
// ============================================
function setBoxHeightToImageAspectRatio(box, imageUrl) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = function () {
            const boxWidth = box.offsetWidth;
            if (boxWidth > 0) {
                const aspectRatio = img.height / img.width;
                box.style.height = (boxWidth * aspectRatio) + 'px';
            }
            resolve();
        };
        img.onerror = resolve;
        img.src = imageUrl;
    });
}

// ============================================
// CREATE CONSONANT BOXES
// ============================================
function createConsonantBoxes() {
    return new Promise((resolve) => {
        const container = document.getElementById('consonant-container');

        const columns = [];
        for (let i = 0; i < 4; i++) {
            const col = document.createElement('div');
            col.className = 'consonant-column';
            col.style.opacity = '0';
            col.style.transform = 'translateY(40px)';
            columns.push(col);
            container.appendChild(col);
        }

        const total = consonantImages.length;
        let loaded = 0;

        function onImageReady() {
            loaded++;
            if (loaded === total) resolve();
        }

        consonantImages.forEach((consonant) => {
            const box = document.createElement('div');
            box.className = 'box full-image';
            box.style.backgroundImage = `url('${consonant.image}')`;
            box.onclick = () => openModal(`consonant-${consonant.column}-${consonant.box}`);
            columns[consonant.column - 1].appendChild(box);
            setBoxHeightToImageAspectRatio(box, consonant.image).then(onImageReady);
        });
    });
}

// ============================================
// MODAL
// ============================================
function openModal(boxKey) {
    const modal         = document.getElementById('modal');
    const modalImage    = document.getElementById('modalImage');
    const title         = document.getElementById('modalTitle');
    const hindiScript   = document.getElementById('hindiScript');
    const phoneticText  = document.getElementById('phoneticText');
    const exampleWord   = document.getElementById('exampleWord');
    const sentence      = document.getElementById('exampleSentence');
    const audioButton   = document.getElementById('audioButton');
    const strategyBadge = document.getElementById('strategyBadge');
    const teachingNote  = document.getElementById('teachingNote');

    const data = modalData[boxKey] || {
        image: '',
        title: `Letter ${boxKey}`, hindi: 'क', phonetic: '"ka"',
        exampleWord: 'kabob',
        sentence: 'This is an example sentence.',
        audio: '', teachingNote: 'No teaching note available.',
        strategy: 'DIRECT MATCH'
    };

    modalImage.className = 'modal-image';
    modalImage.style.backgroundImage = data.image ? `url('${data.image}')` : 'none';
    title.textContent        = data.title;
    hindiScript.textContent  = data.hindi;
    phoneticText.textContent = data.phonetic;
    exampleWord.textContent  = data.exampleWord;
    sentence.textContent     = data.sentence;

    if (strategyBadge && data.strategy) {
        strategyBadge.textContent = data.strategy;
        strategyBadge.setAttribute('data-strategy', data.strategy);
    }
    if (teachingNote && data.teachingNote) {
        teachingNote.textContent = data.teachingNote;
    }

    audioButton.onclick = () => {
        if (data.audio) new Audio(data.audio).play();
    };

    modal.style.display = 'block';
}

const modal    = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

if (closeBtn) closeBtn.onclick = () => { modal.style.display = 'none'; };
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// ============================================
// RESIZE — recalculate box heights
// ============================================
window.addEventListener('resize', () => {
    document.querySelectorAll('.box.full-image').forEach(box => {
        const bg = box.style.backgroundImage;
        if (bg && bg !== 'none') {
            const url = bg.slice(5, -2);
            setBoxHeightToImageAspectRatio(box, url);
        }
    });
});

// ============================================
// NAVBAR — hide when scrolled away from top
// ============================================
const navbar         = document.querySelector('.navbar');
const SHOW_THRESHOLD = 50;

window.addEventListener('scroll', () => {
    navbar.classList.toggle('hidden', window.pageYOffset > SHOW_THRESHOLD);
}, { passive: true });

// ============================================
// INIT
// ============================================
createConsonantBoxes().then(() => {
    const cols   = document.querySelectorAll('.consonant-column');
    const delays = [0.9, 1.1, 1.3, 1.5];

    cols.forEach((col, i) => {
        col.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        setTimeout(() => {
            col.style.opacity = '1';
            // Don't set translateY here — let parallax own the transform
            col.style.transform = 'translateY(0px)';
            setTimeout(() => {
                col.style.transition = 'none';
            }, 900);
        }, delays[i] * 1000);
    });
});

// ============================================
// PARALLAX COLUMN SCROLL
// — scroll-driven, not rAF loop, so it never
//   blocks normal scrolling
// ============================================
const columnSpeeds     = [0, 0.2, 0.13, 0.2];
const parallaxStrength = 30;

function applyParallax() {
    if (window.innerWidth <= 768) return;
    const scrollY = window.scrollY;
    document.querySelectorAll('.consonant-column').forEach((col, i) => {
        const offset = scrollY * columnSpeeds[i] * (parallaxStrength / 100) * -1;
        col.style.transform = `translateY(${offset}px)`;
    });
}

window.addEventListener('scroll', applyParallax, { passive: true });