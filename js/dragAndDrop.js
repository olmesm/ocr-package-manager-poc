function drop(e) {
  e.preventDefault();
  e.target.value = e.dataTransfer.getData('text');
}

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData('text', e.target.innerHTML);
}
