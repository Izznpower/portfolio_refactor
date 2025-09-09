import { useEffect } from 'react';

export const useScrollEffects = () => {
  useEffect(() => {
    // Scrolled class on body
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && 
          !selectHeader.classList.contains('sticky-top') && 
          !selectHeader.classList.contains('fixed-top')) return;
      
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    };

    // Scroll to top button
    const toggleScrollTop = () => {
      const scrollTop = document.querySelector('.scroll-top');
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    };

    // Scrollspy for navigation
    const navmenuScrollspy = () => {
      const navmenulinks = document.querySelectorAll('.navmenu a');
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        const section = document.querySelector(navmenulink.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', toggleScrolled);
    window.addEventListener('scroll', toggleScrollTop);
    window.addEventListener('scroll', navmenuScrollspy);
    
    // Initial call
    toggleScrolled();
    toggleScrollTop();
    navmenuScrollspy();

    return () => {
      window.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('scroll', toggleScrollTop);
      window.removeEventListener('scroll', navmenuScrollspy);
    };
  }, []);
};