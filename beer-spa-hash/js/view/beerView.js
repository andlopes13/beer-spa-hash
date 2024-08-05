function render(beers) {
  const container = document.querySelector('#container');
  container.innerHTML = '<br>'; // Removes the previous elements
  const list = document.createElement('div');

  list.style = 'display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 10%;';

  list.className = `text-center`;

  beers.forEach(({ price, name, image }) => {
    const item = document.createElement('div');
    item.className = 'card text-black bg-warning mb-3';
    item.style = 'max-width: 10rem; margin: 10px; width: 18rem;';
    item.innerHTML = `<div class="card-header">BEER</div>
                            <div class="card-body">
                                <h5 class="card-title">${price}</h5>
                                <p class="card-text">
                                    <p>${name}</p>
                                    <img src="${image}" alt="No Image" style="width: 70%;">
                                </p>
                        </div>`;
    list.appendChild(item);
  });

  container.appendChild(list);
};

export default { render }; // Allows other modules to import and use this function
