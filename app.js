const modal = document.querySelector('.modal');
const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');

const modal1 = document.querySelector('.modal1');
const openButtonyes = document.querySelector('.open-buttonyes');
const closeButtonyes = document.querySelector('.close-buttonyes');

openButton.addEventListener('click', () => {
  modal.showModal();
});

closeButton.addEventListener('click', () => {
  modal.close();
});

openButtonyes.addEventListener('click', () => {
    modal1.showModal();
});
  
closeButtonyes.addEventListener('click', () => {
    modal1.close();
});

