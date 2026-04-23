const matchImage = document.getElementById('matchImage');
const matchVideo = document.getElementById('matchVideo');
const matchGif = document.getElementById('matchGif');
const matchContainer = document.getElementById('matchContainer');
const instruction = document.querySelector('.instruction');
const blackOverlay = document.getElementById('blackOverlay');
const matchboxCover = document.getElementById('matchboxCover');
const textBoxesContainer = document.getElementById('textBoxesContainer');
const openboxAudio = document.getElementById('openboxAudio');
const takematchoutAudio = document.getElementById('takematchoutAudio');
const matchstickAudio = document.getElementById('matchstickAudio');
const closeboxAudio = document.getElementById('closeboxAudio');
const strikematchAudio = document.getElementById('strikematchAudio');
const matchspinAudio = document.getElementById('matchspinAudio');
const skipBtn = document.getElementById('skipBtn');
const skipToEndBtn = document.getElementById('skipToEndBtn');

let currentPhase = 1;

// Drag state
let isDragging = false;
let startY = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationComplete = false;

// Cursor lock state
let cursorLocked = false;
let customCursor = null;

// Responsive box height tracking
let currentBoxHeight = 500;

// Total boxes minus 1 (for scroll limit) — update if boxes are added/removed
const LAST_BOX_INDEX = 8; // 9 boxes total, last is index 8

function getBoxHeight() {
    const width = window.innerWidth;
    if (width <= 374) return 280;
    else if (width <= 480) return 320;
    else if (width <= 768) return 380;
    else if (width <= 1024) return 450;
    else return 500;
}

function updateBoxHeight() {
    const newHeight = getBoxHeight();
    if (newHeight !== currentBoxHeight) {
        const ratio = currentTranslate / currentBoxHeight;
        currentBoxHeight = newHeight;
        if (animationComplete) {
            currentTranslate = ratio * currentBoxHeight;
            previousTranslate = currentTranslate;
            textBoxesContainer.style.transform = `translateX(-50%) translateY(${currentTranslate}px)`;
        }
    }
}

// Check if we're on the last box and toggle the class to hide skipToEndBtn
function updateSkipToEndVisibility() {
    const lastBoxPosition = -(currentBoxHeight * LAST_BOX_INDEX);
    if (currentTranslate <= lastBoxPosition) {
        document.body.classList.add('on-last-box');
    } else {
        document.body.classList.remove('on-last-box');
    }
}

// ============================================
// SKIP INTRO BUTTON
// ============================================
function activateSkip() {
    currentPhase = 14;
    animationComplete = true;

    [openboxAudio, takematchoutAudio, matchstickAudio, closeboxAudio, strikematchAudio, matchspinAudio].forEach(a => {
        a.pause();
        a.currentTime = 0;
    });

    matchContainer.style.display = 'none';
    if (instruction) instruction.style.display = 'none';
    matchVideo.style.display = 'none';
    matchGif.style.display = 'none';
    matchImage.style.display = 'none';
    blackOverlay.style.display = 'none';

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    document.body.style.setProperty('--mouse-x', '50%');
    document.body.style.setProperty('--mouse-y', '50%');

    if (!customCursor) {
        customCursor = document.createElement('div');
        customCursor.id = 'customCursor';
        customCursor.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(customCursor);
    }
    customCursor.style.left = centerX + 'px';
    customCursor.style.top = centerY + 'px';

    document.body.classList.add('spotlight-visible');
    document.body.classList.add('spotlight-active');

    cursorLocked = true;
    setTimeout(() => { cursorLocked = false; }, 500);

    matchboxCover.style.display = 'block';
    matchboxCover.style.opacity = '1';
    matchboxCover.style.transition = 'none';

    currentBoxHeight = getBoxHeight();
    currentTranslate = 0;
    previousTranslate = 0;

    textBoxesContainer.style.display = 'block';
    textBoxesContainer.style.opacity = '1';
    textBoxesContainer.style.animation = 'none';
    textBoxesContainer.style.transition = 'none';
    textBoxesContainer.style.transform = 'translateX(-50%) translateY(0px)';

    updateSkipToEndVisibility();

    textBoxesContainer.addEventListener('mousedown', touchStart);
    textBoxesContainer.addEventListener('touchstart', touchStart, { passive: false });
    document.addEventListener('mousemove', touchMove);
    document.addEventListener('touchmove', touchMove, { passive: false });
    document.addEventListener('mouseup', touchEnd);
    document.addEventListener('touchend', touchEnd);
}

if (skipBtn) {
    skipBtn.addEventListener('click', activateSkip);
}

// ============================================
// SKIP TO END BUTTON
// ============================================
function activateSkipToEnd() {
    if (!animationComplete) return;

    currentTranslate = -(currentBoxHeight * LAST_BOX_INDEX);
    previousTranslate = currentTranslate;

    textBoxesContainer.style.transition = 'transform 0.5s ease-out';
    textBoxesContainer.style.transform = `translateX(-50%) translateY(${currentTranslate}px)`;

    setTimeout(() => {
        textBoxesContainer.style.transition = 'none';
    }, 500);

    updateSkipToEndVisibility();
}

if (skipToEndBtn) {
    skipToEndBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        activateSkipToEnd();
    });
}

// ============================================
// MOUSE TRACKING FOR SPOTLIGHT EFFECT
// ============================================
document.addEventListener('mousemove', (e) => {
    if (cursorLocked) return;
    
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;
    
    document.body.style.setProperty('--mouse-x', xPercent + '%');
    document.body.style.setProperty('--mouse-y', yPercent + '%');
    
    if (customCursor) {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    }
});

document.addEventListener('touchmove', (e) => {
    if (cursorLocked || !document.body.classList.contains('spotlight-active')) return;
    
    const touch = e.touches[0];
    const xPercent = (touch.clientX / window.innerWidth) * 100;
    const yPercent = (touch.clientY / window.innerHeight) * 100;
    
    document.body.style.setProperty('--mouse-x', xPercent + '%');
    document.body.style.setProperty('--mouse-y', yPercent + '%');
    
    if (customCursor) {
        customCursor.style.left = touch.clientX + 'px';
        customCursor.style.top = touch.clientY + 'px';
    }
}, { passive: true });

function preloadVideo(videoSrc) {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.preload = 'auto';
    video.load();
    return video;
}

function playVideo(videoSrc, audioElement = null, audioSpeed = 1.5, secondaryAudioElement = null, secondaryAudioSpeed = 1.5) {
    return new Promise((resolve) => {
        matchImage.classList.remove('clickable');
        matchVideo.src = videoSrc;
        matchVideo.load();
        
        matchVideo.oncanplaythrough = () => {
            matchVideo.play().then(() => {
                matchImage.style.display = 'none';
                matchVideo.style.display = 'block';
                matchGif.style.display = 'none';
                
                if (audioElement) {
                    audioElement.currentTime = 0;
                    audioElement.playbackRate = audioSpeed;
                    audioElement.play().catch(err => console.log('Audio play failed:', err));
                }
                if (secondaryAudioElement) {
                    secondaryAudioElement.currentTime = 0;
                    secondaryAudioElement.playbackRate = secondaryAudioSpeed;
                    secondaryAudioElement.play().catch(err => console.log('Secondary audio play failed:', err));
                }
            });
        };
        
        matchVideo.ontimeupdate = () => {
            if (matchVideo.currentTime >= matchVideo.duration - 0.1) {
                const canvas = document.createElement('canvas');
                canvas.width = matchVideo.videoWidth;
                canvas.height = matchVideo.videoHeight;
                canvas.getContext('2d').drawImage(matchVideo, 0, 0);
                matchImage.src = canvas.toDataURL();
                matchVideo.ontimeupdate = null;
            }
        };
        
        matchVideo.onended = () => {
            matchVideo.style.display = 'none';
            matchImage.style.display = 'block';
            matchGif.style.display = 'none';
            if (audioElement) audioElement.playbackRate = 1.0;
            if (secondaryAudioElement) secondaryAudioElement.playbackRate = 1.0;
            resolve();
        };
    });
}

function playVideoFast(videoSrc, speed = 1.5, audioElement = null, audioSpeed = 1.5) {
    return new Promise((resolve) => {
        matchImage.classList.remove('clickable');
        matchVideo.src = videoSrc;
        matchVideo.load();
        
        matchVideo.oncanplaythrough = () => {
            matchVideo.playbackRate = speed;
            matchVideo.play().then(() => {
                matchImage.style.display = 'none';
                matchVideo.style.display = 'block';
                matchGif.style.display = 'none';
                if (audioElement) {
                    audioElement.currentTime = 0;
                    audioElement.playbackRate = audioSpeed;
                    audioElement.play().catch(err => console.log('Audio play failed:', err));
                }
            });
        };
        
        matchVideo.ontimeupdate = () => {
            if (matchVideo.currentTime >= matchVideo.duration - 0.1) {
                const canvas = document.createElement('canvas');
                canvas.width = matchVideo.videoWidth;
                canvas.height = matchVideo.videoHeight;
                canvas.getContext('2d').drawImage(matchVideo, 0, 0);
                matchImage.src = canvas.toDataURL();
                matchVideo.ontimeupdate = null;
            }
        };
        
        matchVideo.onended = () => {
            matchVideo.playbackRate = 1.0;
            matchVideo.style.display = 'none';
            matchImage.style.display = 'block';
            matchGif.style.display = 'none';
            if (audioElement) audioElement.playbackRate = 1.0;
            resolve();
        };
    });
}

function playGifFinal(gifSrc) {
    return new Promise((resolve) => {
        matchImage.classList.remove('clickable');
        matchVideo.style.display = 'none';
        
        const preloadGif = new Image();
        
        preloadGif.onload = () => {
            matchGif.src = preloadGif.src;
            matchImage.style.display = 'none';
            matchGif.style.display = 'block';
            
            document.body.classList.add('spotlight-visible');
            
            setTimeout(() => {
                blackOverlay.style.display = 'none';
            }, 1500);
            
            matchboxCover.style.display = 'block';
            matchboxCover.style.opacity = '0';
            matchboxCover.style.transition = 'opacity 0.8s ease-in';
            
            textBoxesContainer.style.display = 'block';
            
            setTimeout(() => {
                matchboxCover.style.opacity = '1';
                
                setTimeout(() => {
                    textBoxesContainer.classList.add('visible');
                    
                    setTimeout(() => {
                        animationComplete = true;
                        textBoxesContainer.classList.remove('visible');
                        textBoxesContainer.style.animation = 'none';
                        textBoxesContainer.style.transition = 'none';
                        textBoxesContainer.style.opacity = '1';
                        textBoxesContainer.style.transform = 'translateX(-50%) translateY(0px)';
                        
                        currentBoxHeight = getBoxHeight();
                        currentTranslate = 0;
                        previousTranslate = 0;

                        updateSkipToEndVisibility();
                    }, 1200);
                }, 800);
                
            }, 100);
            
            setTimeout(() => {
                const gifRect = matchGif.getBoundingClientRect();
                const gifCenterX = gifRect.left + (gifRect.width / 2);
                const gifCenterY = gifRect.top + (gifRect.height / 2);
                const flameX = gifCenterX;
                const flameY = gifCenterY;
                
                matchGif.style.display = 'none';
                matchImage.style.display = 'none';
                matchVideo.style.display = 'none';
                
                const xPercent = (flameX / window.innerWidth) * 100;
                const yPercent = (flameY / window.innerHeight) * 100;
                
                document.body.style.setProperty('--mouse-x', xPercent + '%');
                document.body.style.setProperty('--mouse-y', yPercent + '%');
                
                if (!customCursor) {
                    customCursor = document.createElement('div');
                    customCursor.id = 'customCursor';
                    customCursor.style.transform = 'translate(-50%, -50%)';
                    document.body.appendChild(customCursor);
                }
                
                customCursor.style.left = flameX + 'px';
                customCursor.style.top = flameY + 'px';
                
                document.body.classList.add('spotlight-active');
                
                cursorLocked = true;
                setTimeout(() => { cursorLocked = false; }, 1500);
                
                resolve();
            }, 1800);
        };
        
        preloadGif.onerror = () => {
            matchGif.src = gifSrc + '?t=' + new Date().getTime();
            matchImage.style.display = 'none';
            matchGif.style.display = 'block';
        };
        
        preloadGif.src = gifSrc + '?t=' + new Date().getTime();
    });
}

function showImage(imageSrc, duration = 0, isClickable = false) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            matchImage.src = imageSrc;
            matchImage.style.display = 'block';
            matchVideo.style.display = 'none';
            matchGif.style.display = 'none';
            
            if (isClickable) matchImage.classList.add('clickable');
            else matchImage.classList.remove('clickable');
            
            if (duration > 0) setTimeout(resolve, duration);
            else resolve();
        };
        img.src = imageSrc;
    });
}

// ============================================
// DRAG FUNCTIONALITY
// ============================================
function touchStart(e) {
    if (currentPhase !== 14 || !animationComplete) return;
    if (e.target.classList.contains('nav-button')) return;
    
    isDragging = true;
    startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    textBoxesContainer.classList.add('dragging');
    
    if (customCursor) customCursor.style.backgroundImage = "url('Match/cursormatch2.png')";
    textBoxesContainer.style.transition = 'none';
}

function touchMove(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    const currentY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    const deltaY = currentY - startY;
    
    currentTranslate = previousTranslate + deltaY;
    
    const maxScroll = 0;
    const minScroll = -(currentBoxHeight * LAST_BOX_INDEX);
    currentTranslate = Math.max(minScroll, Math.min(maxScroll, currentTranslate));
    
    textBoxesContainer.style.transform = `translateX(-50%) translateY(${currentTranslate}px)`;
}

function touchEnd() {
    if (!isDragging) return;
    
    isDragging = false;
    previousTranslate = currentTranslate;
    textBoxesContainer.classList.remove('dragging');
    
    if (customCursor) customCursor.style.backgroundImage = "url('Match/cursormatch.png')";
    
    const nearestBox = Math.round(currentTranslate / currentBoxHeight);
    currentTranslate = nearestBox * currentBoxHeight;
    previousTranslate = currentTranslate;
    
    textBoxesContainer.style.transition = 'transform 0.3s ease-out';
    textBoxesContainer.style.transform = `translateX(-50%) translateY(${currentTranslate}px)`;
    
    setTimeout(() => {
        textBoxesContainer.style.transition = 'none';
        updateSkipToEndVisibility();
    }, 300);
}

// ============================================
// PHASE CLICK HANDLERS
// ============================================
matchImage.addEventListener('click', async () => {
    if (currentPhase === 1) {
        currentPhase = 2;
        instruction.style.opacity = '0';
        
        const match3Preload = new Image();
        match3Preload.src = 'Match/match3.PNG';
        
        await playVideo('Match/match2.mp4', openboxAudio, 1.5);
        
        currentPhase = 3;
        await showImage('Match/match3.PNG', 0, true);
        
        preloadVideo('Match/match4.mp4');
        
        instruction.textContent = 'take out the match';
        instruction.style.opacity = '0.8';
        instruction.style.position = 'absolute';
        instruction.style.left = '50%';
        instruction.style.transform = 'translateX(-50%)';
    }
    
    else if (currentPhase === 3) {
        currentPhase = 4;
        instruction.style.opacity = '0';
        
        const match5Preload = new Image();
        match5Preload.src = 'Match/match5.PNG';
        
        await playVideo('Match/match4.mp4', takematchoutAudio, 2.0);
        
        currentPhase = 5;
        await showImage('Match/match5.PNG', 250, false);
        
        currentPhase = 6;
        const match7Preload = new Image();
        match7Preload.src = 'Match/match7.PNG';
        
        await playVideo('Match/match6.mp4', closeboxAudio, 2);
        
        currentPhase = 7;
        await showImage('Match/match7.PNG', 0, true);
        
        preloadVideo('Match/match8.mp4');
        
        instruction.textContent = 'strike the match';
        instruction.style.opacity = '0.8';
        instruction.style.position = 'absolute';
        instruction.style.transform = 'translateX(-50%)';
        instruction.style.transform = 'translateX(-50%)';

    }
    
    else if (currentPhase === 7) {
        currentPhase = 8;
        instruction.style.opacity = '0';
        
        const match9Preload = new Image();
        match9Preload.src = 'Match/match9.PNG';
        
        await playVideo('Match/match8.mp4', strikematchAudio, 1.5);
        
        currentPhase = 9;
        await showImage('Match/match9.PNG', 150, false);
        
        currentPhase = 10;
        const match11Preload = new Image();
        match11Preload.src = 'Match/match11.PNG';
        
        await playVideoFast('Match/match10.mp4', 1.5, matchspinAudio, 1.5);
        
        currentPhase = 11;
        await showImage('Match/match11.PNG', 50, false);
        
        currentPhase = 12;
        matchstickAudio.volume = 1.0;
        
        const match12Preload = new Image();
        match12Preload.src = 'Match/match12.PNG';
        
        await playVideoFast('Match/match12.mp4', 2.0, matchstickAudio, 1.5);
        
        await new Promise((resolve) => {
            if (match12Preload.complete) resolve();
            else match12Preload.onload = resolve;
        });
        
        matchVideo.style.display = 'none';
        matchImage.src = match12Preload.src;
        matchImage.style.display = 'block';
        matchGif.style.display = 'none';
        
        await new Promise(resolve => setTimeout(resolve, 100));
        
        await playGifFinal('Match/match14.gif');
        
        currentPhase = 14;
        
        textBoxesContainer.addEventListener('mousedown', touchStart);
        textBoxesContainer.addEventListener('touchstart', touchStart, { passive: false });
        document.addEventListener('mousemove', touchMove);
        document.addEventListener('touchmove', touchMove, { passive: false });
        document.addEventListener('mouseup', touchEnd);
        document.addEventListener('touchend', touchEnd);
    }
});

// ============================================
// BUTTON CLICK HANDLERS FOR LAST BOX
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const consonantsBtn = document.getElementById('consonantsBtn');
    const dependentVowelsBtn = document.getElementById('dependentVowelsBtn');
    const independentVowelsBtn = document.getElementById('independentVowelsBtn');
    
    const changeCursorOnHover = (button) => {
        button.addEventListener('mouseenter', () => {
            if (customCursor && !isDragging) customCursor.style.backgroundImage = "url('Match/cursormatch2.png')";
        });
        button.addEventListener('mouseleave', () => {
            if (customCursor && !isDragging) customCursor.style.backgroundImage = "url('Match/cursormatch.png')";
        });
    };
    
    if (consonantsBtn) {
        consonantsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = 'consonant.html';
        });
        changeCursorOnHover(consonantsBtn);
    }
    
    if (dependentVowelsBtn) {
        dependentVowelsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = 'dependentvowel.html';
        });
        changeCursorOnHover(dependentVowelsBtn);
    }
    
    if (independentVowelsBtn) {
        independentVowelsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = 'independentvowel.html';
        });
        changeCursorOnHover(independentVowelsBtn);
    }
});

// ============================================
// WINDOW RESIZE
// ============================================
window.addEventListener('resize', () => { updateBoxHeight(); });

// ============================================
// INITIALIZE
// ============================================
window.addEventListener('load', () => {
    currentBoxHeight = getBoxHeight();
    
    if (window.location.hash === '#box-11') {
        currentPhase = 14;
        animationComplete = true;
        
        document.body.style.setProperty('--mouse-x', '50%');
        document.body.style.setProperty('--mouse-y', '50%');
        document.body.classList.add('spotlight-visible');
        document.body.classList.add('spotlight-active');
        
        matchContainer.style.display = 'none';
        instruction.style.display = 'none';
        blackOverlay.style.display = 'none';
        
        matchboxCover.style.display = 'block';
        matchboxCover.style.opacity = '1';
        
        textBoxesContainer.style.display = 'block';
        textBoxesContainer.style.opacity = '1';
        textBoxesContainer.style.animation = 'none';
        textBoxesContainer.style.transition = 'none';
        
        const lastBoxPosition = -(currentBoxHeight * LAST_BOX_INDEX);
        currentTranslate = lastBoxPosition;
        previousTranslate = lastBoxPosition;
        textBoxesContainer.style.transform = `translateX(-50%) translateY(${lastBoxPosition}px)`;

        updateSkipToEndVisibility();
        
        if (!customCursor) {
            customCursor = document.createElement('div');
            customCursor.id = 'customCursor';
            document.body.appendChild(customCursor);
        }
        
        textBoxesContainer.addEventListener('mousedown', touchStart);
        textBoxesContainer.addEventListener('touchstart', touchStart, { passive: false });
        document.addEventListener('mousemove', touchMove);
        document.addEventListener('touchmove', touchMove, { passive: false });
        document.addEventListener('mouseup', touchEnd);
        document.addEventListener('touchend', touchEnd);
        
    } else {
        matchContainer.classList.add('active');
        matchImage.classList.add('clickable');
        preloadVideo('Match/match2.mp4');
    }
});