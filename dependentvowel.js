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

// ============================================
// MOUSE TRACKING FOR SPOTLIGHT
// ============================================
document.addEventListener('mousemove', (e) => {
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;
    document.body.style.setProperty('--mouse-x', xPercent + '%');
    document.body.style.setProperty('--mouse-y', yPercent + '%');
});

// ============================================
// DEPENDENT VOWELS - Box Images
// ============================================
const dependentVowelImages = [
    { column: 1, box: 1, image: 'BoxImage/AA(DV).jpg'   },
    { column: 1, box: 2, image: 'BoxImage/DV(UU).jpg'   },
    { column: 1, box: 3, image: 'BoxImage/DV(E)(2).jpg' },
    { column: 1, box: 4, image: 'BoxImage/DV(O).jpg'    },
    { column: 1, box: 5, image: 'BoxImage/DV(AU).jpg'   },
    { column: 2, box: 1, image: 'BoxImage/I(DV).jpg'    },
    { column: 2, box: 2, image: 'BoxImage/DV(R).jpg'    },
    { column: 2, box: 3, image: 'BoxImage/DV(E)(3).jpg' },
    { column: 2, box: 4, image: 'BoxImage/DV(O)(2).jpg' },
    { column: 2, box: 5, image: 'BoxImage/U(DV).jpg'    },
    { column: 3, box: 1, image: 'BoxImage/II(DV).jpg'   },
    { column: 3, box: 2, image: 'BoxImage/DV(RR).jpg'   },
    { column: 3, box: 3, image: 'BoxImage/DV(AI).jpg'   },
    { column: 3, box: 4, image: 'BoxImage/DV(E).jpg'    },
    { column: 3, box: 5, image: 'BoxImage/DV(O)(3).jpg' },
];

// ============================================
// MODAL DATA
// ============================================
const dependentVowelModalData = {
    'dv-1-1': {
        image: 'BoxImage/AA(DV).jpg', title: 'Matra AA (ा)',
        hindi: 'ा', phonetic: '"aa"', exampleWord: 'father',
        sentence: 'फ़ादर इज़ द हेड ऑफ़ द फ़ैमिली। (faa-ther iz thuh hed ov thuh fam-i-lee - Father is the head of the family.)',
        strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: The AA matra (ा) extends a consonant\'s vowel from short "a" to long "aa." क + ा = का ("kaa"). The sound is identical to the long "aa" in "father." The only challenge is reading the mark, not hearing the sound.'
    },
    'dv-1-2': {
        image: 'BoxImage/DV(UU).jpg', title: 'Matra UU (ू)',
        hindi: 'ू', phonetic: '"oo"', exampleWord: 'moon',
        sentence: 'मून इज़ ब्राइट टुनाइट। (moon iz brait too-nait - Moon is bright tonight.)',
        strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: The long UU matra (ू) gives a consonant the "oo" sound, like "moon" or "food." क + ू = कू ("koo"). ू is the extended version of ु, same rounded lips, held longer.'
    },
    'dv-1-3': {
        image: 'BoxImage/DV(E)(2).jpg', title: 'Matra E Short (ॆ)',
        hindi: 'ॆ', phonetic: '"e"', exampleWord: 'pet',
        sentence: 'पेट इज़ अ लविंग कम्पेनियन। (pet iz uh luv-ing kum-pan-yun - Pet is a loving companion.)',
        strategy: 'APPROXIMATION',
        teachingNote: 'APPROXIMATION: A short E matra used in some regional and Sanskrit-based scripts, shorter and crisper than the standard े. Rarely seen in everyday modern Hindi. Treat it like a quick "e" as in "pet" and you will be understood.'
    },
    'dv-1-4': {
        image: 'BoxImage/DV(O).jpg', title: 'Matra O (ो)',
        hindi: 'ो', phonetic: '"o"', exampleWord: 'gold',
        sentence: 'गोल्ड इज़ शाइनी एंड वैल्युएबल। (gold iz shiy-nee and val-yoo-uh-bul - Gold is shiny and valuable.)',
        strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: The O matra (ो) gives a consonant the pure "o" sound, like "go" or "gold." क + ो = को ("ko"). Hindi ो stays on one note, do not let it drift into "ow."'
    },
    'dv-1-5': {
        image: 'BoxImage/DV(AU).jpg', title: 'Matra AU (ौ)',
        hindi: 'ौ', phonetic: '"au"', exampleWord: 'cow',
        sentence: 'काउ इज़ अ फ़ार्म एनिमल। (kow iz uh farm en-i-mul - Cow is a farm animal.)',
        strategy: 'APPROXIMATION',
        teachingNote: 'APPROXIMATION: The AU matra (ौ) gives a consonant the "au" sound, like "cow" or "how." क + ौ = कौ ("kau"). Hindi ौ is slightly more stable than the English diphthong glide.'
    },
    'dv-2-1': {
        image: 'BoxImage/I(DV).jpg', title: 'Matra I (ि)',
        hindi: 'ि', phonetic: '"i"', exampleWord: 'sit',
        sentence: 'सिट डाउन एंड रिलैक्स। (sit down and ri-laks - Sit down and relax.)',
        strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: The short I matra (ि) gives a consonant the short "i" sound, like "bit" or "sit." One quirk: this matra is written BEFORE the consonant it belongs to, even though it\'s pronounced after. ि always appears to the left of its consonant.'
    },
    'dv-2-2': {
        image: 'BoxImage/DV(R).jpg', title: 'Matra RI (ृ)',
        hindi: 'ृ', phonetic: '"ri"', exampleWord: 'rhythm',
        sentence: 'रिदम इज़ द हार्ट ऑफ़ म्यूज़िक। (rith-um iz thuh hart ov myoo-zik - Rhythm is the heart of music.)',
        strategy: 'LIMINAL',
        teachingNote: 'LIMINAL: The RI matra (ृ) gives a consonant a rolled "ri" sound. क + ृ = कृ. It appears mainly in Sanskrit-origin words. Even native Hindi speakers often replace it with a plain "ri."'
    },
    'dv-2-3': {
        image: 'BoxImage/DV(E)(3).jpg', title: 'Matra E Alternate (ऺ)',
        hindi: 'ऺ', phonetic: '"e"', exampleWord: 'egg',
        sentence: 'एग इज़ अ न्यूट्रिशस फूड। (eg iz uh nyoo-tri-shus food - Egg is a nutritious food.)',
        strategy: 'APPROXIMATION',
        teachingNote: 'APPROXIMATION: An alternate E matra found in specialised or archaic texts. Functionally identical to the standard े in modern Hindi. Pronounce it the same way — "ay" as in "say."'
    },
    'dv-2-4': {
        image: 'BoxImage/DV(O)(2).jpg', title: 'Matra O Short (ॊ)',
        hindi: 'ॊ', phonetic: '"o"', exampleWord: 'pot',
        sentence: 'पॉट इज़ यूज़्ड फॉर कुकिंग। (pot iz yoozd for kook-ing - Pot is used for cooking.)',
        strategy: 'APPROXIMATION',
        teachingNote: 'APPROXIMATION: A short O matra used in some regional scripts and Sanskrit contexts, shorter and crisper than the standard ो. Pronounce it like a quick "o" as in "pot."'
    },
    'dv-2-5': {
        image: 'BoxImage/U(DV).jpg', title: 'Matra U (ु)',
        hindi: 'ु', phonetic: '"u"', exampleWord: 'book',
        sentence: 'बुक इज़ ऑन द शेल्फ। (book iz on thuh shelf - Book is on the shelf.)',
        strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: The short U matra (ु) gives a consonant the "u" sound, like "put" or "book." क + ु = कु ("ku"). The mark hangs below the consonant. Do not stretch it into a full "oo."'
    },
    'dv-3-1': {
        image: 'BoxImage/II(DV).jpg', title: 'Matra II (ी)',
        hindi: 'ी', phonetic: '"ee"', exampleWord: 'tree',
        sentence: 'ट्री इज़ टॉल एंड ग्रीन। (tree iz tawl and green - Tree is tall and green.)',
        strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: The long II matra (ी) gives a consonant the "ee" sound, like "see" or "tree." क + ी = की ("kee"). This appears constantly in Hindi — feminine verb endings, possessives, and common nouns all use ी.'
    },
    'dv-3-2': {
        image: 'BoxImage/DV(RR).jpg', title: 'Matra RR (ॄ)',
        hindi: 'ॄ', phonetic: '"rr"', exampleWord: 'rural',
        sentence: 'रूरल लाइफ़ इज़ पीसफुल। (roo-rul liyf iz pees-ful - Rural life is peaceful.)',
        strategy: 'LIMINAL',
        teachingNote: 'LIMINAL: The long RR matra (ॄ) is the extended version of ृ, extremely rare and found almost exclusively in ancient Sanskrit texts. Learn it to recognise it, not to use it.'
    },
    'dv-3-3': {
        image: 'BoxImage/DV(AI).jpg', title: 'Matra AI (ै)',
        hindi: 'ै', phonetic: '"ai"', exampleWord: 'bed',
        sentence: 'बेड इज़ सॉफ्ट एंड कम्फर्टेबल। (bed iz sawft and kum-fur-tuh-bul - Bed is soft and comfortable.)',
        strategy: 'APPROXIMATION',
        teachingNote: 'APPROXIMATION: The AI matra (ै) gives a consonant the "ai" sound, like "bed" or "said." क + ै = कै ("kai"). Not quite "ay" and not quite "a" — it sits open and flat between them.'
    },
    'dv-3-4': {
        image: 'BoxImage/DV(E).jpg', title: 'Matra E (े)',
        hindi: 'े', phonetic: '"e"', exampleWord: 'cake',
        sentence: 'केक इज़ स्वीट एंड सॉफ्ट। (kayk iz sweet and sawft - Cake is sweet and soft.)',
        strategy: 'DIRECT MATCH',
        teachingNote: 'DIRECT MATCH: The E matra (े) gives a consonant the "ay" sound, like "say" or "cake." क + े = के ("kay"). It sits above the consonant like a small hook. Do not glide into "ey-ee."'
    },
    'dv-3-5': {
        image: 'BoxImage/DV(O)(3).jpg', title: 'Matra OE (ऻ)',
        hindi: 'ऻ', phonetic: '"oe"', exampleWord: 'toe',
        sentence: 'टो इज़ पार्ट ऑफ़ योर फूट। (toe iz part ov yor foot - Toe is part of your foot.)',
        strategy: 'APPROXIMATION',
        teachingNote: 'APPROXIMATION: An alternate O matra found in specialised or archaic texts, sometimes used for loanword sounds. In everyday speech, pronounce it the same as ो.'
    },
};

const modalData = dependentVowelModalData;

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
// CREATE BOXES
// ============================================
function createDependentVowelBoxes() {
    const container = document.getElementById('dependent-vowel-container');
    const columns = [];
    for (let i = 0; i < 3; i++) {
        const col = document.createElement('div');
        col.className = 'consonant-column';
        columns.push(col);
        container.appendChild(col);
    }
    dependentVowelImages.forEach((vowel) => {
        const key = `dv-${vowel.column}-${vowel.box}`;
        const box = document.createElement('div');
        box.className = 'box full-image';
        box.style.backgroundImage = `url('${vowel.image}')`;
        setBoxHeightToImageAspectRatio(box, vowel.image);
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
    const strategyBadge = document.getElementById('strategyBadge');
    const teachingNote  = document.getElementById('teachingNote');

    const data = modalData[boxKey] || {
        image: '', title: `Matra ${boxKey}`, hindi: 'ा', phonetic: '"aa"',
        exampleWord: 'example', sentence: 'Example sentence.',
        strategy: 'DIRECT MATCH', teachingNote: 'No teaching note available.'
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

createDependentVowelBoxes();

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
// ============================================
const columnSpeeds     = [0.310, 0, 0.452];
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