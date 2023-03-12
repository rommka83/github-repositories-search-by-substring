export function modalRender(str) {
  const oldUl = document.querySelector('.list');
  oldUl !== null && oldUl.remove();

  const container = document.querySelector('.container');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = str;
  container.append(modal);
}
