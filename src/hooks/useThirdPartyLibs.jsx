// import { useEffect } from 'react';

// export const useThirdPartyLibs = () => {
//   useEffect(() => {
//     // Initialize AOS
//     if (typeof AOS !== 'undefined') {
//       AOS.init({
//         duration: 600,
//         easing: 'ease-in-out',
//         once: true,
//         mirror: false
//       });
//     }

//     // Initialize GLightbox
//     if (typeof GLightbox !== 'undefined') {
//       const glightbox = GLightbox({
//         selector: '.glightbox'
//       });
//     }

//     // Initialize Isotope
//     const initIsotope = () => {
//       document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
//         let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
//         let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
//         let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

//         let isotopeInstance;
//         if (typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
//           imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
//             isotopeInstance = new Isotope(isotopeItem.querySelector('.isotope-container'), {
//               itemSelector: '.isotope-item',
//               layoutMode: layout,
//               filter: filter,
//               sortBy: sort
//             });
//           });
//         }

//         // Add click handlers for filters
//         const filterButtons = isotopeItem.querySelectorAll('.isotope-filters li');
//         filterButtons.forEach(function(filterButton) {
//           filterButton.addEventListener('click', function() {
//             isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
//             this.classList.add('filter-active');
//             if (isotopeInstance) {
//               isotopeInstance.arrange({
//                 filter: this.getAttribute('data-filter')
//               });
//             }
//             if (typeof AOS !== 'undefined') {
//               AOS.init();
//             }
//           });
//         });
//       });
//     };

//     // Initialize when window loads
//     const handleLoad = () => {
//       initIsotope();
      
//       // Hash link scrolling
//       if (window.location.hash) {
//         const section = document.querySelector(window.location.hash);
//         if (section) {
//           setTimeout(() => {
//             const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
//             window.scrollTo({
//               top: section.offsetTop - parseInt(scrollMarginTop),
//               behavior: 'smooth'
//             });
//           }, 100);
//         }
//       }
//     };

//     window.addEventListener('load', handleLoad);
//     return () => window.removeEventListener('load', handleLoad);
//   }, []);
// };