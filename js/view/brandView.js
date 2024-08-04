function render(types){

  const container = document.querySelector('#container');

  container.innerHTML = '<br>';

  const list = document.createElement('div');
  list.style = `display: flex; margin-top: 10%`;
  list.className = `text-center`;

  brands.forEach(({brand, nationalities }) => {

    const item = document.createElement('div');
    item.className = `col card texte-white bg-primary mb-3" style="max-width: 18rem;`;
    item.innerHTML = `<div class="card-header">${types}</div>
                            <div class="card-body">
                                <p class="card-text">
                                    <p>year: ${brand}</p>
                                    <p>director: ${nationalities}</p>
                                </p>
                        </div>`;
    list.appendChild(item);
  });

  container.appendChild(list);
}

export default { render }

/*export default function brandView(data) {
  return `
      <div>
          <h1>Brands of Beers</h1>
          <ul>
              ${data.map(brand => `<li>${brand.name}</li>`).join('')}
          </ul>
      </div>
  `;
}*/
