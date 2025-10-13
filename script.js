// Highlight active nav-link based on scroll position
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#mainNav .nav-link');
  const sections = Array.from(navLinks).map(link => {
    const id = link.getAttribute('href').replace('#', '');
    return document.getElementById(id);
  });

  function highlightNav() {
    let index = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] && window.scrollY + 80 >= sections[i].offsetTop) {
        index = i;
      }
    }
    navLinks.forEach((link, i) => {
      if (i === index) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();
});

 document.addEventListener('DOMContentLoaded', function () {
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsDropdown = document.getElementById('settingsDropdown');
    const settingsIcon = document.getElementById('settingsIcon');
    const toggleDarkDropdown = document.getElementById('toggleDarkDropdown');
    const body = document.getElementById('body');
    // Hide old toggle if it exists
    const oldToggle = document.getElementById('toggleDark');
    if (oldToggle) oldToggle.style.display = 'none';

    let dropdownOpen = false;
    settingsBtn.addEventListener('click', () => {
      if (!dropdownOpen) {
        settingsIcon.classList.remove('rotate-gear-reverse');
        settingsIcon.classList.add('rotate-gear');
        setTimeout(() => {
          settingsDropdown.classList.add('open');
          settingsDropdown.classList.remove('hidden');
        }, 250);
        dropdownOpen = true;
      } else {
        settingsIcon.classList.remove('rotate-gear');
        settingsIcon.classList.add('rotate-gear-reverse');
        settingsDropdown.classList.remove('open');
        setTimeout(() => {
          settingsDropdown.classList.add('hidden');
        }, 350);
        dropdownOpen = false;
      }
    });

    toggleDarkDropdown.addEventListener('click', () => {
      body.classList.toggle('dark');
      toggleDarkDropdown.textContent = body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
  });

   const toggle = document.getElementById('toggleDark');
    const body = document.getElementById('body');

    toggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      toggle.textContent = body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
    });

    // Welcome Modal Logic
    const welcomeModal = document.getElementById('welcomeModal');
    const closeWelcome = document.getElementById('closeWelcome');
    closeWelcome.addEventListener('click', () => {
      welcomeModal.classList.add('fade-out');
      setTimeout(() => {
        welcomeModal.style.display = 'none';
        welcomeModal.classList.remove('fade-out');
      }, 500);
    });
    // Optional: Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        welcomeModal.classList.add('fade-out');
        setTimeout(() => {
          welcomeModal.style.display = 'none';
          welcomeModal.classList.remove('fade-out');
        }, 500);
      }
    });

// Manu bar scroll effect
  const mainNav = document.getElementById('mainNav');
  function updateNavBar() {
    if (window.scrollY < 20) {
      mainNav.classList.add('compact');
      mainNav.style.top = "10px";
      mainNav.style.position = "relative";
    } else {
      mainNav.classList.remove('compact');
      mainNav.style.top = "10px";
      mainNav.style.position = "sticky";
    }
  }
  // Initial state
  updateNavBar();
  window.addEventListener('scroll', updateNavBar);

      // Enable dark mode support via class strategy
    tailwind.config = {
      darkMode: 'class'
    };
        document.addEventListener('DOMContentLoaded', () => {
            const modal = document.querySelector('.modal-overlay');
            const closeButtons = document.querySelectorAll('.close-modal-btn');
            const learnMoreButton = document.querySelector('.btn-learn');
            const closeModal = () => {
                modal.classList.add('hidden');
            };
            const openModal = () => {
                modal.classList.remove('hidden');
            };
            closeButtons.forEach(button => {
                button.addEventListener('click', closeModal);
            });
            learnMoreButton.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
            const toggleDarkButton = document.querySelector('.toggle-dark-mode');
            if (toggleDarkButton) {
                toggleDarkButton.addEventListener('click', () => {
                    document.body.classList.toggle('dark');
                });
            }
        });

// Add scroll event listener for blur effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}