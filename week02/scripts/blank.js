const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_________')

const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
<input type="text" id="favchap" placeholder="Alma 5"> </input>
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);

button.addEventListener('click', function () {
    //code to execute when the button is clicked
});

