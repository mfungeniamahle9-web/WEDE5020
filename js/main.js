(function(){
    'use strict';

    function setActiveNav(){
        const links = document.querySelectorAll('header nav a');
        if(!links.length) return;
        const path = location.pathname.split('/').pop() || 'index.html';
        links.forEach(a => {
            const href = a.getAttribute('href');
            if(!href) return;
            const hrefBase = href.split('/').pop();
            if(hrefBase === path || (path === '' && hrefBase === 'index.html')){
                a.classList.add('active');
                a.setAttribute('aria-current','page');
            }
        });
    }

    function enhanceForm(){
        const form = document.querySelector('form');
        if(!form) return;
        form.addEventListener('submit', function(e){
            const email = form.querySelector('input[type="email"]');
            const msg = form.querySelector('textarea');
            let valid = true;
            if(email && !email.value.trim()){ valid = false; email.focus(); }
            if(msg && !msg.value.trim()){ valid = false; msg.focus(); }
            if(!valid){
                e.preventDefault();
                alert('Please complete the required fields before sending.');
            }
        });
    }

    function smoothAnchors(){
        // Provide a simple smooth-scroll fallback for browsers without CSS scroll-behavior
        if('scrollBehavior' in document.documentElement.style) return;
        document.querySelectorAll('a[href^="#"]').forEach(a=>{
            a.addEventListener('click', function(e){
                const id = this.getAttribute('href').slice(1);
                const target = document.getElementById(id);
                if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
            });
        });
    }

    // Reduce focus outline noise: adds a class if keyboard is used
    function setupFocusMode(){
        function handleFirstTab(e){
            if(e.key === 'Tab'){
                document.documentElement.classList.add('using-keyboard');
                window.removeEventListener('keydown', handleFirstTab);
            }
        }
        window.addEventListener('keydown', handleFirstTab);
    }

    document.addEventListener('DOMContentLoaded', function(){
        setActiveNav();
        enhanceForm();
        smoothAnchors();
        setupFocusMode();
    });
})();
