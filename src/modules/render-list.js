const container = document.querySelector('.container');

export function renderList(arr) {
  const oldUl = document.querySelector('.list');
  oldUl !== null && oldUl.remove();
  const ul = document.createElement('ul');
  ul.classList.add('list');
  arr.map((el) => {
    return (ul.innerHTML += `<li class='item'>
        <a href='${el.html_url}' class='link' target="_blank">
          <h2 class='subtitle'>${el.name}</h2>
        </a>
        <p class='text'>
         Краткое описание: ${el.description}
        </p>
        <p class='language'>Язык: ${el.language}</p>
      </li>`);
  });
  container.append(ul);
}
