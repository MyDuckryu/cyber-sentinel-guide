// ================================
// 🔹 Highlight active nav-link based on scroll position
// ================================
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
      if (i === index) link.classList.add('active');
      else link.classList.remove('active');
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();
});


// ================================
// 🌐 Language Toggle + 🌙 Dark Mode Control + ⚙️ Settings Dropdown + 👋 Welcome Modal
// ================================
document.addEventListener('DOMContentLoaded', function () {
  // --- Elements ---
  const toggleLanguage = document.getElementById('toggleLanguage');
  const toggleDarkMode = document.getElementById('toggleDarkMode');
  const toggleDarkDropdown = document.getElementById('toggleDarkDropdown');
  const body = document.getElementById('body');
  let currentLang = 'en';

  // --- Translation Table ---
  const translations = {
    en: {
      title: 'Cyber Sentinel',
      subtitle: 'An educational website offering cybersecurity resources and tutorials for beginners',
      darkMode: '🌙 Dark Mode',
      lightMode: '☀️ Light Mode',
      language: '🌐 English (incomplete)',
      nav_ssh: 'SSH',
      nav_sql: 'SQL',
      nav_picoctf: 'PicoCTF',
      nav_virus: 'VirusTotal',
    },
    th: {
      title: 'ไซเบอร์ เซนทิเนล',
      subtitle: 'เว็บไซต์การศึกษาที่นำเสนอทรัพยากรและบทเรียนด้านความปลอดภัยทางไซเบอร์สำหรับผู้เริ่มต้น',
      darkMode: '🌙 โหมดมืด',
      lightMode: '☀️ โหมดสว่าง',
      language: '🌐 ไทย (ไม่สมบูรณ์)',
      nav_ssh: 'ระบบ SSH',
      nav_sql: 'ฐานข้อมูล SQL',
      nav_picoctf: 'แบบฝึกหัด PicoCTF',
      nav_virus: 'การตรวจสอบไฟล์ไวรัส',
    }
  };

  // --- Update Dark Mode Text ---
  function updateDarkModeText(lang) {
    const isDark = body.classList.contains('dark');
    const textKey = isDark ? 'lightMode' : 'darkMode';
    if (toggleDarkMode) toggleDarkMode.textContent = translations[lang][textKey];
    if (toggleDarkDropdown) toggleDarkDropdown.textContent = translations[lang][textKey];
  }

  // --- Update Language ---
  function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    if (toggleLanguage) toggleLanguage.textContent = translations[lang].language;
    updateDarkModeText(lang);
  }

  // --- Toggle Dark Mode Handler ---
  function toggleDarkModeHandler() {
    body.classList.toggle('dark');
    updateDarkModeText(currentLang);
  }

  // --- Event Listeners ---
  if (toggleDarkMode) toggleDarkMode.addEventListener('click', toggleDarkModeHandler);
  if (toggleDarkDropdown) toggleDarkDropdown.addEventListener('click', toggleDarkModeHandler);
  if (toggleLanguage) {
    toggleLanguage.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'th' : 'en';
      updateLanguage(currentLang);
    });
  }

  // --- Initial Language Load ---
  updateLanguage(currentLang);

  // --- Settings Dropdown ---
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsDropdown = document.getElementById('settingsDropdown');
  const settingsIcon = document.getElementById('settingsIcon');
  let dropdownOpen = false;

  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      if (!dropdownOpen) {
        if (settingsIcon) {
          settingsIcon.classList.remove('rotate-gear-reverse');
          settingsIcon.classList.add('rotate-gear');
        }
        setTimeout(() => {
          if (settingsDropdown) {
            settingsDropdown.classList.add('open');
            settingsDropdown.classList.remove('hidden');
          }
        }, 250);
        dropdownOpen = true;
      } else {
        if (settingsIcon) {
          settingsIcon.classList.remove('rotate-gear');
          settingsIcon.classList.add('rotate-gear-reverse');
        }
        if (settingsDropdown) settingsDropdown.classList.remove('open');
        setTimeout(() => {
          if (settingsDropdown) settingsDropdown.classList.add('hidden');
        }, 350);
        dropdownOpen = false;
      }
    });
  }

  // --- Welcome Modal ---
  const welcomeModal = document.getElementById('welcomeModal');
  const closeWelcome = document.getElementById('closeWelcome');
  if (closeWelcome && welcomeModal) {
    closeWelcome.addEventListener('click', () => {
      welcomeModal.classList.add('fade-out');
      setTimeout(() => {
        welcomeModal.style.display = 'none';
        welcomeModal.classList.remove('fade-out');
      }, 500);
    });
  }

  // --- Close Modal with ESC Key ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && welcomeModal) {
      welcomeModal.classList.add('fade-out');
      setTimeout(() => {
        welcomeModal.style.display = 'none';
        welcomeModal.classList.remove('fade-out');
      }, 500);
    }
  });
});


// ================================
// 🧭 Navigation Bar Scroll Effect (Compact Mode + Sticky)
// ================================
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
updateNavBar();
window.addEventListener('scroll', updateNavBar);


// ================================
// 🌑 Tailwind Dark Mode Config
// ================================
tailwind.config = { darkMode: 'class' };


// ================================
// 💡 Modal Control for “Learn More” Button
// ================================
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal-overlay');
  const closeButtons = document.querySelectorAll('.close-modal-btn');
  const learnMoreButton = document.querySelector('.btn-learn');

  const closeModal = () => modal.classList.add('hidden');
  const openModal = () => modal.classList.remove('hidden');

  closeButtons.forEach(button => button.addEventListener('click', closeModal));
  if (learnMoreButton) {
    learnMoreButton.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  // Optional: toggle dark mode in modal area
  const toggleDarkButton = document.querySelector('.toggle-dark-mode');
  if (toggleDarkButton) {
    toggleDarkButton.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  }
});


// ================================
// 🌀 Blur Effect on Scroll (for Navbar)
// ================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});


// ================================
// 🎯 Smooth Scroll to Section
// ================================
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


// ================================
// 📱 Mobile Navigation Toggle (Hamburger Menu)
// ================================
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const menuOpen = mobileMenuBtn.querySelector('.menu-open');
  const menuClose = mobileMenuBtn.querySelector('.menu-close');

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
  });

  // Close menu when clicking a link on mobile
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        navLinks.classList.add('hidden');
        menuOpen.classList.remove('hidden');
        menuClose.classList.add('hidden');
      }
    });
  });
});

// Scroll Animation
   const sections = document.querySelectorAll('.content-section');
   const navLinks = document.querySelectorAll('.nav-link');

   const observerOptions = {
     threshold: 0.01,
     rootMargin: '0px 0px -100px 0px'
   };

   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       
       if (entry.isIntersecting) {
         
         entry.target.classList.add('visible'); 
         
         const sectionId = entry.target.id;
         navLinks.forEach(link => {
           if (link.getAttribute('data-section') === sectionId) {
             navLinks.forEach(l => l.classList.remove('active'));
             link.classList.add('active');
           }
         });
       }
     });
   }, observerOptions);

   sections.forEach(section => observer.observe(section));
