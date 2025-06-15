const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
      logAction(`${this.name} was attacked!`);
    } else {
      this.health = 0;
      alert('Character Died');
      logAction(`${this.name} has fallen.`);
    }
    updateCard();
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
    logAction(`${this.name} leveled up!`);
    updateCard();
  }
};

// === Helper function to update HTML content ===
function updateCard() {
  document.getElementById('name').textContent = character.name;
  document.getElementById('class').textContent = character.class;
  document.getElementById('level').textContent = character.level;
  document.getElementById('health').textContent = character.health;
  document.querySelector('.image').src = character.image;
}

// === Function to log messages ===
function logAction(message) {
  document.getElementById('log').textContent = message;
}

// === Add button event listeners ===
document.getElementById('attacked').addEventListener('click', () => character.attacked());
document.getElementById('levelup').addEventListener('click', () => character.levelUp());

// === Initialize card on page load ===
updateCard();