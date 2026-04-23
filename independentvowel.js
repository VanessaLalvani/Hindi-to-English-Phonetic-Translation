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
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
});

const vowelImages = [
    // Column 1 - 4 boxes
    { column: 1, box: 1, image: 'BoxImage/A.jpg'    },  // अ  [a]
    { column: 1, box: 2, image: 'BoxImage/U.jpg'    },  // उ  [u]
    { column: 1, box: 3, image: 'BoxImage/O.jpg'    },  // ओ  [o]
    { column: 1, box: 4, image: 'BoxImage/AM.jpg'   },  // अं [am]

    // Column 2 - 5 boxes
    { column: 2, box: 1, image: 'BoxImage/AA.jpg'   },  // आ  [aa]
    { column: 2, box: 2, image: 'BoxImage/OO.jpg'   },  // ऊ  [oo]
    { column: 2, box: 3, image: 'BoxImage/AO.jpg'   },  // औ  [ao]
    { column: 2, box: 4, image: 'BoxImage/A_.jpg'   },  // अः [a:]
    { column: 2, box: 5, image: 'BoxImage/RI.jpg'   },  // ऋ  [ri]

    // Column 3 - 5 boxes
    { column: 3, box: 1, image: 'BoxImage/E.jpg'    },  // इ  [e]
    { column: 3, box: 2, image: 'BoxImage/A(2).jpg' },  // ए  [a]
    { column: 3, box: 3, image: 'BoxImage/I.jpg'    },  // ई  [i]
    { column: 3, box: 4, image: 'BoxImage/AE.jpg'   },  // ऐ  [ae]
    { column: 3, box: 5, image: 'BoxImage/RR.jpg'   },  // ॠ  [rr]
];

const vowelModalData = {
    'vowel-1-1': {
        image: 'BoxImage/A.jpg',
        title: 'Letter A (अ)', hindi: 'अ', phonetic: '"a"', exampleWord: 'apple',
        sentence: 'अैपल इज़ अ रेड फ्रूट। (ap-ul iz uh red froot - Apple is a red fruit.)',
        audio: 'audio/a.mp4', strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: The short "a" like in "apple" or "ago." This is the default vowel hidden inside almost every Hindi syllable. When you see a consonant alone like क, it already carries this "a" sound — "ka" not "k."'
    },
    'vowel-1-2': {
        image: 'BoxImage/U.jpg',
        title: 'Letter U (उ)', hindi: 'उ', phonetic: '"u"', exampleWord: 'umbrella',
        sentence: 'अम्ब्रेला इज़ यूज़्ड इन द रेन। (um-brel-uh iz yoozd in thuh rayn - Umbrella is used in the rain.)',
        audio: 'audio/u.mp4', strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: Short "u" like in "put" or "book." Lips slightly rounded, sound kept brief. उ and ऊ are a pair: उ is short, ऊ is long. Do not stretch उ into a full "oo."'
    },
    'vowel-1-3': {
        image: 'BoxImage/O.jpg',
        title: 'Letter O (ओ)', hindi: 'ओ', phonetic: '"o"', exampleWord: 'ocean',
        sentence: 'ओशन इज़ फुल ऑफ़ लाइफ़। (oh-shun iz fool ov lief - Ocean is full of life.)',
        audio: 'audio/o.mp4', strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: The pure "o" like in "go" or "so." Hindi ओ stays on one note — English speakers glide into "ow" but stop before your lips fully close. Hold the round "oh" and do not let it drift.'
    },
    'vowel-1-4': {
        image: 'BoxImage/AM.jpg',
        title: 'Letter AM (अं)', hindi: 'अं', phonetic: '"am"', exampleWord: 'ankh (eye - loanword)',
        sentence: 'आँख इज़ यूज़्ड टु सी। (aankh iz yoozd too see - Ankh is used to see.)',
        audio: 'audio/am.mp4', strategy: 'APPROXIMATION',
        teachingNote: 'APPROXIMATION: The anusvara (ं) — a nasal resonance added after a vowel. Think of the "ng" in "hum" or "song." It is not a full "m" or "n" — it is a nasal color that echoes through the vowel before it.'
    },
    'vowel-2-1': {
        image: 'BoxImage/AA.jpg',
        title: 'Letter AA (आ)', hindi: 'आ', phonetic: '"aa"', exampleWord: 'aardvark',
        sentence: 'आर्डवार्क इज़ अ स्ट्रेंज एनिमल। (aard-vaark iz uh straynj en-i-mul - Aardvark is a strange animal.)',
        audio: 'audio/aa.mp4', strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: The long "aa" like in "father" or "spa." आ is simply अ held twice as long — same mouth position, more duration. When you see आ, open your mouth fully and hold the sound.'
    },
    'vowel-2-2': {
        image: 'BoxImage/OO.jpg',
        title: 'Letter OO (ऊ)', hindi: 'ऊ', phonetic: '"oo"', exampleWord: 'moon',
        sentence: 'मून इज़ ब्राइट टुनाइट। (moon iz brait too-nait - Moon is bright tonight.)',
        audio: 'audio/oo.mp4', strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: Long "oo" like in "moon" or "food." ऊ is the extended version of उ — same rounded lips, held longer. Your English mouth already knows this sound perfectly.'
    },
    'vowel-2-3': {
        image: 'BoxImage/AO.jpg',
        title: 'Letter AO (औ)', hindi: 'औ', phonetic: '"ao"', exampleWord: 'cow',
        sentence: 'काउ इज़ अ फ़ार्म एनिमल। (kow iz uh farm en-i-mul - Cow is a farm animal.)',
        audio: 'audio/ao.mp4', strategy: 'APPROXIMATION',
        teachingNote: 'APPROXIMATION: Like "ow" in "cow" or "how." English makes this as a diphthong — your mouth moves through two positions. Hindi औ is slightly more stable with less of a glide, but close enough that your ear catches it immediately.'
    },
    'vowel-2-4': {
        image: 'BoxImage/A_.jpg',
        title: 'Letter A: (अः)', hindi: 'अः', phonetic: '"a:"', exampleWord: 'namaste (greeting - loanword)',
        sentence: 'नमस्ते इज़ अ ग्रीटिंग ऑफ़ रिस्पेक्ट। (na-mas-tay iz uh greet-ing ov ri-spekt - Namaste is a greeting of respect.)',
        audio: 'audio/a_.mp4', strategy: 'LIMINAL',
        teachingNote: 'LIMINAL: The visarga (ः) — a soft breathy "h" exhaled after a vowel. It does not exist in English at all. Rare in modern Hindi but present in Sanskrit and formal texts. Think of it as the sound your breath makes leaving a vowel — a whispered echo after the main sound.'
    },
    'vowel-2-5': {
        image: 'BoxImage/RI.jpg',
        title: 'Letter RI (ऋ)', hindi: 'ऋ', phonetic: '"ri"', exampleWord: 'rhythm',
        sentence: 'रिदम इज़ द हार्ट ऑफ़ म्यूज़िक। (rith-um iz thuh hart ov myoo-zik - Rhythm is the heart of music.)',
        audio: 'audio/ri.mp4', strategy: 'LIMINAL',
        teachingNote: 'LIMINAL: A vowel that sounds like "ri" — your tongue briefly rolls while making a vowel sound. English does not have this as a standalone vowel. It appears mainly in Sanskrit-origin words and even native Hindi speakers often replace it with a plain "ri."'
    },
    'vowel-3-1': {
        image: 'BoxImage/E.jpg',
        title: 'Letter E (इ)', hindi: 'इ', phonetic: '"e"', exampleWord: 'igloo',
        sentence: 'इग्लू इज़ मेड ऑफ़ आइस। (ig-loo iz mayd ov ais - Igloo is made of ice.)',
        audio: 'audio/e.mp4', strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: Short "e" like in "bit" or "sit." Crisp and quick — do not stretch it. इ and ई are a pair: इ is short, ई is long. Same mouth position, different duration.'
    },
    'vowel-3-2': {
        image: 'BoxImage/A(2).jpg',
        title: 'Letter A (ए)', hindi: 'ए', phonetic: '"a"', exampleWord: 'elephant',
        sentence: 'एलिफ़ेंट इज़ द बिगेस्ट लैंड एनिमल। (el-i-funt iz thuh big-est land en-i-mul - Elephant is the biggest land animal.)',
        audio: 'audio/a(2).mp4', strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: The "ay" sound like in "say" or "they." Hindi ए stays pure on one sound — English speakers tend to glide into "ey-ee" but hold ए steady without letting your lips close.'
    },
    'vowel-3-3': {
        image: 'BoxImage/I.jpg',
        title: 'Letter I (ई)', hindi: 'ई', phonetic: '"i"', exampleWord: 'tree',
        sentence: 'ट्री इज़ टॉल एंड ग्रीन। (tree iz tawl and green - Tree is tall and green.)',
        audio: 'audio/i.mp4', strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: Long "i" like in "tree" or "see." ई is the extended version of इ — same position, held longer. This appears constantly in Hindi — feminine verb endings, possessives, and common nouns all use ई.'
    },
    'vowel-3-4': {
        image: 'BoxImage/AE.jpg',
        title: 'Letter AE (ऐ)', hindi: 'ऐ', phonetic: '"ae"', exampleWord: 'coffee',
        sentence: 'कॉफ़ी इज़ हॉट एंड स्ट्रॉंग। (kof-ee iz hot and strong - Coffee is hot and strong.)',
        audio: 'audio/ae.mp4', strategy: 'APPROXIMATION',
        teachingNote: 'APPROXIMATION: The "o" in "coffee" or "hot." ऐ was added to Devanagari specifically to write English loanwords — so you already say it perfectly. It appears almost exclusively in borrowed words like ऑफ़िस (office) and ऑरेंज (orange).'
    },
    'vowel-3-5': {
        image: 'BoxImage/RR.jpg',
        title: 'Letter RR (ॠ)', hindi: 'ॠ', phonetic: '"rr"', exampleWord: 'rishta (relationship - loanword)',
        sentence: 'रिश्ता इज़ बिल्ट ऑन ट्रस्ट। (rish-taa iz bilt on trust - Rishta is built on trust.)',
        audio: 'audio/rr.mp4', strategy: 'LIMINAL',
        teachingNote: 'LIMINAL: The long version of ऋ — extended and extremely rare. This vowel exists almost exclusively in ancient Sanskrit texts and is essentially never used in modern spoken Hindi. Even most native speakers have never produced this sound in daily life.'
    },
};

const modalData = vowelModalData;

// ============================================
// BOX HEIGHT FROM ASPECT RATIO
// ============================================
function setBoxHeightToImageAspectRatio(box, imageUrl) {
    const img = new Image();
    img.onload = function() {
        const boxWidth = box.offsetWidth;
        const aspectRatio = img.height / img.width;
        box.style.height = (boxWidth * aspectRatio) + 'px';
    };
    img.src = imageUrl;
}

// ============================================
// CREATE VOWEL BOXES
// ============================================
function createVowelBoxes() {
    const container = document.getElementById('vowel-container');
    const columns = [];
    for (let i = 0; i < 3; i++) {
        const col = document.createElement('div');
        col.className = 'consonant-column';
        columns.push(col);
        container.appendChild(col);
    }

    vowelImages.forEach((vowel) => {
        const key = `vowel-${vowel.column}-${vowel.box}`;
        const data = vowelModalData[key];

        if (!data) return; // skip if no matching modal entry

        const box = document.createElement('div');
        box.className = 'box full-image';
        box.style.backgroundImage = `url('${data.image}')`; // ← pulls from modal data, not array
        setBoxHeightToImageAspectRatio(box, data.image);
        box.onclick = () => openModal(key);
        columns[vowel.column - 1].appendChild(box);
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
        image: '', title: `Letter ${boxKey}`, hindi: 'अ', phonetic: '"a"',
        exampleWord: 'apple', sentence: 'Example sentence.',
        audio: '', strategy: 'DIRECT MATCH', teachingNote: 'No teaching note available.'
    };

    modalImage.className = 'modal-image';
    if (boxKey === 'vowel-1-2') modalImage.classList.add('bg-size-large');

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
// RESIZE
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

createVowelBoxes();

// ============================================
// NAVBAR — hide when scrolled away from top
// ============================================
const navbar         = document.querySelector('.navbar');
const SHOW_THRESHOLD = 50;

window.addEventListener('scroll', () => {
    navbar.classList.toggle('hidden', window.pageYOffset > SHOW_THRESHOLD);
}, { passive: true });

// ============================================
// PARALLAX COLUMN SCROLL
// — scroll-driven, not rAF loop
// ============================================
const columnSpeeds     = [0.05, 0.1, 0.45];
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