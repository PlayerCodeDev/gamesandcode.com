const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');
const mobileLinks = document.querySelectorAll('.mobile-link');
const scrollIndicator = document.getElementById('scroll-indicator');

function closeMobileMenu() {
  mobileMenu.classList.add('opacity-0', 'scale-95');

  setTimeout(() => {
    mobileMenu.classList.add('hidden');
  }, 150);

  iconClose.classList.add('rotate-90', 'scale-75');

  setTimeout(() => {
    iconClose.classList.add('hidden');

    iconMenu.classList.remove('hidden');
    requestAnimationFrame(() => {
      iconMenu.classList.remove('rotate-90', 'scale-75');
      iconMenu.classList.add('rotate-180', 'scale-100');
    });
  }, 150);

  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');

  if(!isOpen) {
    mobileMenu.classList.remove('hidden');

    requestAnimationFrame(() => {
      mobileMenu.classList.remove('opacity-0', 'scale-95');
    });

    iconMenu.classList.add('hidden');
    iconMenu.classList.add('rotate-180', 'scale-75');

    iconClose.classList.remove('hidden');
    requestAnimationFrame(() => {
      iconClose.classList.remove('rotate-90', 'scale-75');
      iconClose.classList.add('rotate-0', 'scale-100');
    })

    menuButton.setAttribute('aria-expanded', 'true');
  } else {
    closeMobileMenu();
  }
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if(!mobileMenu.classList.contains('hidden')) {
      closeMobileMenu();
    }
  });
});

if (scrollIndicator) {
  const SCROLL_TRESHOLD = 50;

  function handleScrollIndicator() {
    if (window.scrollY < SCROLL_TRESHOLD) {
      scrollIndicator.classList.remove('opacity-0');
      scrollIndicator.classList.add('opacity-70');
    } else {
      scrollIndicator.classList.remove('opacity-70');
      scrollIndicator.classList.add('opacity-0');
    }
  }

  handleScrollIndicator();

  window.addEventListener('scroll', handleScrollIndicator, { passive: true })
}