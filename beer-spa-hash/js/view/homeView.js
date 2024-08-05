function render(beers) {
  const container = document.querySelector('#container');
  const button = document.createElement('button');
  const div = document.createElement('div');

  div.className = `text-center`;
  button.className = `btn btn-primary`;
  button.type = `button`;
  button.style = `margin-top: 10%; margin-bottom: 10%`;

  div.appendChild(button);

  container.innerHTML = ''; //removes the previous elements
  button.innerText = `CLICK ME FOR RANDOM BEER`;

  button.addEventListener('click', async e => {
    e.preventDefault();
    console.log("IM HERE" + beers)

    const {
      name,
      price,
      image

    } = beers[Math.floor(Math.random() * beers.length)];
    const elem = document.createElement('div');
    elem.className = `text-center`;

    elem.innerHTML = `<h1>${name}</h1>
        <h3>${price}</h3>
        <img src="${image}" alt="No Image" style="width: 25%;">`;


    if (container.childElementCount > 1) {
      container.removeChild(container.lastChild);
    }

    container.appendChild(elem);
  });

  container.appendChild(div);
};

export default { render };
