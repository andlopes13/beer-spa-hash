function render(onClick) {

  const container = document.querySelector('#container');
  const button = document.createElement('button');
  const div = document.createElement('div');

  div.className = `text-center`;
  button.className = `btn btn-primary`;
  button.type = `button`;
  button.style = `margin-top: 10%; margin-bottom: 10%`;

  div.appendChild(button);

  container.innerHTML = '';
  button.innerText = `Click me`;

  button.addEventListener('click', async e => {
    e.preventDefault();

    const {
      types,
      brands,
      nationalities,
    } = await onClick(parseInt(Math.random() * 10));
    const elem = document.createElement('div');
    elem.className = `text-center`;

    elem.innerHTML = `<h1>${types}</h1>
        <h3>${brands}</h3>
        <h3>${nationalities}</h3>`;

    if (container.childElementCount > 1) {
      container.removeChild(container.lastChild);
    }

    container.appendChild(elem);
  });

  container.appendChild(div);
};

export default { render };

/*export default function homeView() {
  return `
      <div class="text-center">
          <h1>Welcome to the Beer SPA</h1>
          <p>Explore different types of beers, their nationalities, and brands.</p>
            <div class="welcome-btn">
          <button id="welcome-btn" class="btn btn-primary">Click Me!</button>
      </div>
    </div>
  `;
}*/
