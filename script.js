/**
 * Todo: use throttling for better performance
 */
const checkHeader = () => {
  let scrollPosition = Math.round(window.scrollY);
  console.log('inside check header!!!', scrollPosition);

  // if we've scrolled 100px, add "sticky" class to the header
  if (scrollPosition > 100) {
    document.querySelector('header').classList.add('sticky');
  }
  // if not remove "sticky" class from header
  else {
    document.querySelector('header').classList.remove('sticky');
  }
};

// run the checkHeader func() every time you scroll
window.addEventListener('scroll', checkHeader);
