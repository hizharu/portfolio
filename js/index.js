const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIcon = document.getElementById('menuIcon');
        const closeIcon = document.getElementById('closeIcon');
        const mobileLinks = mobileMenu.querySelectorAll('a');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            });
        });

        // Active link highlight on scroll
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('nav a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-red-600');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('text-red-600');
                }
            });
        });

        (function() {
    emailjs.init("X07lIC_DEQhhOQSDo"); // ganti dengan public key lu
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // jangan lupa diganti
        emailjs.sendForm('service_z6zpulm', 'template_5btod1r', this)
        .then(() => {
            alert('✅ Message sent successfully!');
            this.reset();
        }, (error) => {
            console.error('❌ Error:', error);
            alert('Failed to send message. Please try again later.');
        });
    });