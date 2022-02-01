function addingEventListener() {
    const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);

const main = document.getElementById('main');

main.addEventListener('click', clickAlert);
}

console.log(addEventListener());
