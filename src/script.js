const panels = document.querySelectorAll('.panel');

const removeActiveClassFromAll = () => {
  panels.forEach((element) => {
    element.classList.remove('active');
  });
};

panels.forEach((element) => {
  element.addEventListener('click', () => {
    removeActiveClassFromAll();
    element.classList.add('active');
  });
});
