function render(beers) {
  const container = document.querySelector('#container');
  container.innerHTML = '<br>'; //removes the previous elements
  const list = document.createElement('div');

  list.style = 'display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 10%;';

  list.className = `text-center`;

  beers.forEach(({ price, name, image }) => {
    const item = document.createElement('div');
    item.className = 'card text-white bg-primary mb-3';
    item.style = 'max-width: 18rem; margin: 10px; width: 18rem;';
    item.innerHTML = `<div class="card-header">BEER</div>
                            <div class="card-body">
                                <h5 class="card-title">${price}</h5>
                                <p class="card-text">
                                    <p>${name}</p>
                                    <img src="${image}" alt="no image" style="width: 100%;">
                                </p>
                        </div>`;
    list.appendChild(item);
  });

  container.appendChild(list);
};

export default { render };
