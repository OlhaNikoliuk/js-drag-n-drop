const refs = {
  item: document.querySelector('.item'),
  placeholders: document.querySelectorAll('.placeholder'),
};

refs.item.addEventListener('dragstart', dragStart);
refs.item.addEventListener('dragend', dragEnd);

refs.placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragover); // вызыв. когда эл, кот. мы перемещаем находится непосредственно над placeholder
  placeholder.addEventListener('dragenter', dragenter); // когда заходим на територрию этого placeholder
  placeholder.addEventListener('dragleave', dragleave); // когда перетащили и выщли оттуда
  placeholder.addEventListener('drop', dragdrop); // когда отпустили
});

function dragStart(e) {
  e.target.classList.add('hold');
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}

function dragEnd(e) {
  e.target.classList.remove('hold', 'hide');
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  e.target.classList.add('hovered');
}
function dragleave(e) {
  e.target.classList.remove('hovered');
}
function dragdrop(e) {
  e.target.classList.remove('hovered');
  e.target.append(refs.item); // e.target здесь конкретный placrholder
}
