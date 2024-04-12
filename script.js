const contador = document.querySelector('.numero');
const markAllAsRead = document.querySelector('.mark_all');
const tarjetas = document.querySelectorAll('.cards');

const arr = [...tarjetas];
contador.textContent = arr.length;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener('click', () => {

    if (!arr[i].classList.contains('read')) {
      arr[i].classList.add('read');
      if (count < Number(arr.length)){
        count += 1;
        contador.textContent = Number(arr.length) - count;
      }
    }
  
  })
};

markAllAsRead.addEventListener('click', () => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add('read');
  }
  contador.textContent = '0';
});
