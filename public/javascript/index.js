const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getFullList()
    .then(response => {
      console.log(response.data)
      let characters = response.data;
      document.querySelector('.characters-container').innerHTML = '';
      characters.forEach(character => {
        document.querySelector('.characters-container').innerHTML +=
        `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`
      })
    })
  });


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const characterId = document.getElementById('getOne').value;
    charactersAPI.getOneRegister(characterId)
    .then(response => {
      console.log(response.data);
      const character = response.data;
      let oneCharacter =
        `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`
      document.getElementById('john').innerHTML = oneCharacter;
    });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    let id = document.getElementById('delete-id').value;
    charactersAPI.deleteOneRegister(id)
    .then(response => {
      console.log(response.data)
    });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
   let id = document.getElementById('edit-id').value;
   let name = document.getElementById('edit-name').value;
   let occupation = document.getElementById('edit-occupation').value;
   let weapon = document.getElementById('edit-weapon').value;
   let cartoon = document.getElementById('edit-cartoon').checked;

   const editCharacter = {
    id,
    name,
    occupation,
    weapon,
    cartoon
} 

   charactersAPI.updateOneRegister(id, editCharacter)
   .then(response => {
     console.log(response.data)
   });

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
   let name = document.getElementById('new-name').value;
   let occupation = document.getElementById('new-occupation').value;
   let weapon = document.getElementById('new-weapon').value;
   let cartoon = document.getElementById('new-cartoon').checked;

   const newCharacter = {
    name,
    occupation,
    weapon,
    cartoon
} 
    charactersAPI.createOneRegister(newCharacter)
    .then(response => {
      console.log(response.data)
    })
  });
});


