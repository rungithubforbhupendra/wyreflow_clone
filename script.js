
function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}


if (isMobile()) {
    document.querySelectorAll('video').forEach((video) => {
        video.setAttribute('playsinline', 'true');
        video.setAttribute('autoplay', 'true'); 
        video.setAttribute('muted', 'true'); 
        video.load(); 
    });
}




if (!isMobile()) {
    const videos = document.querySelectorAll('.video');

    function pauseAllVideos() {
        videos.forEach((video) => {
            video.pause();
        });
    }

    function playVideoOnHover(event) {
        pauseAllVideos();
        event.currentTarget.querySelector('.video').play();
    }

    document.querySelectorAll('.video-wrapper').forEach((wrapper) => {
        wrapper.addEventListener('mouseover', playVideoOnHover);

        wrapper.addEventListener('mouseleave', () => {
            wrapper.querySelector('.video').pause();
        });
    });
}








// for slider

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 101.6}%)`;

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});


setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

showSlide(currentSlide);




const videos = document.querySelectorAll('.video');

function pauseAllVideos() {
    videos.forEach((video) => {
        video.pause();
    });
}//to pause all the video

function playVideoOnHover(event) {
    pauseAllVideos();
    event.currentTarget.querySelector('.video').play();
}

document.querySelectorAll('.video-wrapper').forEach((wrapper) => {
    wrapper.addEventListener('mouseover', playVideoOnHover);

    wrapper.addEventListener('mouseleave', () => {
        wrapper.querySelector('.video').pause();
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdowns = document.querySelectorAll('.dropdown-content');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    // Function to close all dropdowns
    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }

    // Add click event to each toggle
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();

            // Close all dropdowns except the one that was clicked
            const currentDropdown = this.nextElementSibling;
            if (currentDropdown && currentDropdown.classList.contains('dropdown-content')) {
                if (currentDropdown.style.display === 'block') {
                    currentDropdown.style.display = 'none';
                } else {
                    closeAllDropdowns();
                    currentDropdown.style.display = 'block';
                }
            }
        });
    });

    // Toggle navbar on hamburger click
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation(); 
        navbar.classList.toggle('active');
    });

    
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-content') && !e.target.closest('.hamburger') && !e.target.closest('.navbar')) {
            closeAllDropdowns();
            navbar.classList.remove('active');
        }
    });
});