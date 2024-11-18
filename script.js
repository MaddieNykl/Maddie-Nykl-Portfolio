document.addEventListener('DOMContentLoaded', function() {
    // Welcome Page Logic
    var welcomeNavIcon = document.getElementById('welcome-nav-icon');
    if (welcomeNavIcon) {
        welcomeNavIcon.addEventListener('click', function() {
            var overlayText = document.querySelector('.overlay-text-welcome');
            overlayText.style.display = 'none';

            welcomeNavIcon.classList.add('move-to-top-left');

            setTimeout(function() {
                window.location.href = 'about.html';
            }, 1000);
        });
    }

    // Navigation Menu Logic
    var navIconImg = document.getElementById('nav-icon');
    var navMenu = document.getElementById('nav-menu');

    if (navIconImg) {
        navIconImg.addEventListener('mouseover', function() {
            navIconImg.classList.add('spinning');
        });

        navIconImg.addEventListener('mouseout', function() {
            navIconImg.classList.remove('spinning');
        });
    }
});

