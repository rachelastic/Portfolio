// Original hamburger menu code
let hamburger = document.querySelector('.menu-holder');
let nav = document.getElementById('link-list');
hamburger.addEventListener('click', ()=> {
    if (!nav.style.display) {
        nav.style.display = "block";
    } else {
        nav.style.display = null;
    }
});

// ===== NEW FEATURES =====

// Light/Dark Mode Toggle
const themeToggle = document.createElement('button');
themeToggle.id = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.setAttribute('aria-label', 'Toggle dark mode');
document.body.appendChild(themeToggle);

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update icon and save preference
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Background Music Player
const musicPlayer = document.createElement('div');
musicPlayer.id = 'music-player';
musicPlayer.innerHTML = `
    <button id="music-toggle" aria-label="Toggle music">
        <i class="fas fa-music"></i>
    </button>
    <audio id="bg-music" loop>
        <source src="images/hello.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
`;
document.body.appendChild(musicPlayer);

const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        musicToggle.classList.remove('playing');
    } else {
        bgMusic.play();
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        musicToggle.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// Handle audio errors gracefully
bgMusic.addEventListener('error', () => {
    console.log('Audio file not found. Please add a music file at images/hello.mp3');
    musicToggle.style.display = 'none';
});