export default function typeView(data) {
  return `
      <div>
          <h1>Types of Beers</h1>
          <ul>
              ${data.map(type => `<li>${type.name}</li>`).join('')}
          </ul>
          <button id="reload-types-btn" class="btn btn-secondary">Reload Types</button>
      </div>
  `;
}
