function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const randomIndex = random(list.length);
  return list[randomIndex];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
  const roundedRating = Math.round(rating);
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += `<span aria-hidden="true" class="${i <= roundedRating ? 'icon-star' : 'icon-star-empty'}">${i <= roundedRating ? '⭐' : '☆'}</span>`;
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <figure class="recipe">
      <img src="${recipe.image}" alt="${recipe.name}" />
      <figcaption>
        <ul class="recipe__tags">
          ${tagsTemplate(recipe.tags)}
        </ul>
        <h2><a href="#">${recipe.name}</a></h2>
        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe__description">
          ${recipe.description}
        </p>
      </figcaption>
    </figure>
  `;
}

function renderRecipes(recipeList) {
  const output = document.querySelector('main');
  output.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

function filterRecipes(query) {
  const q = query.toLowerCase();

  return recipes
    .filter(recipe => {
      const inName = recipe.name.toLowerCase().includes(q);
      const inDescription = recipe.description.toLowerCase().includes(q);
      const inTags = recipe.tags.find(tag => tag.toLowerCase().includes(q));
      const inIngredients = recipe.recipeIngredient.find(ingredient =>
        ingredient.toLowerCase().includes(q)
      );
      return inName || inDescription || inTags || inIngredients;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
  event.preventDefault();
  const input = document.getElementById('search-input');
  const query = input.value.trim().toLowerCase();

  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

// Run everything after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  init(); // render random recipe

  const input = document.getElementById('search-input');
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      searchHandler(event);
    }
  });
});
