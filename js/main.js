// ===== Mobile menu script ===== \\
const burgerBtn = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-popup');
burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// // ===== Accordion ===== \\
// document.querySelectorAll('.accordion-item__title').forEach(button => {
//     button.addEventListener('click', () => {
//       const accordionItem = button.parentElement;
//       const isActive = accordionItem.classList.contains('active');
  
//       document.querySelectorAll('.accordion-item').forEach(item => {
//         item.classList.remove('active');
//         item.querySelector('.accordion-content').style.maxHeight = null;
//       });
  
//       if (!isActive) {
//         accordionItem.classList.add('active');
//         const content = accordionItem.querySelector('.accordion-content');
//         content.style.maxHeight = content.scrollHeight + 'px';
//       }
//     });
//   });