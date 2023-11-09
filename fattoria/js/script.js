class Animal {
  type;
  name;
  voice;

  constructor(_type, _name, _voice) {
    this.type = _type;
    this.name = _name;
    this.voice = _voice;
  }

  speak() {
    return `${this.type} ${this.name} fa: ${this.voice} ${this.voice} ${this.voice}`;
  }
}

const horse = new Animal("cavallo", "Spirit", "hiiii");
console.log(horse.speak());

const farm = [
  horse,
  new Animal("gatta", "Bianca", "mew"),
  new Animal("mucca", "Carolina", "muuu"),
];

const listGroup = document.querySelector(".list-group");

document.getElementById("start").addEventListener("click", function () {
  listGroup.innerHTML = "";
  farm.forEach((animal) => {
    const newItem = createAnimalItem(animal);
    listGroup.append(newItem);
  });
});

document.getElementById("add-btn").addEventListener("click", addAnimal);

/**
 * Description
 * @param {Animal} animal
 * @returns {object} HTML element
 */
function createAnimalItem(animal) {
  const item = document.createElement("li");
  item.classList.add("list-group-item");
  item.innerHTML = animal.speak();
  return item;
}

function addAnimal(event) {
  event.preventDefault();
  const newAnimal = getAnimalFromForm();
  farm.push(newAnimal);
  const newItem = createAnimalItem(newAnimal);
  document.querySelector(".list-group").append(newItem);
  clearForm()
}

/**
 * Prende dei valori dal form e restituisce un nuovo animale
 * @returns {Animal}
 */
function getAnimalFromForm() {
    const type = document.getElementById("type").value;
    const name = document.getElementById("name").value;
    const voice = document.getElementById("voice").value;

    return new Animal(type, name, voice);
}

function clearForm() {
    // document.getElementById("type").value = "";
    // document.getElementById("name").value = "";
    // document.getElementById("voice").value = "";
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    })
}