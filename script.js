
//Ajout d'éléments dans la liste

    const form = document.getElementById('todo-form');
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

     form.addEventListener('submit', function(event) {
      event.preventDefault();
      const task = input.value.trim();

      if (task !== '') {
        const li = document.createElement('li');
        li.textContent = task;

// Suppression d'éléments dans la liste
        
    const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.addEventListener('click', function() {
          li.remove();
        });
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        input.value = '';
      }
           
    });

    // Ajout d'autres listes
    const addColumn = document.getElementById("add-column")

        var item = document.getElementById("todo-column");
        let i;
        addColumn.addEventListener('click', function(event) {
            event.preventDefault();
            
            var clone = item.cloneNode(true);
            clone.id = `todo-column ${i++}`;
            console.log(clone)
            document.querySelector("body").appendChild(clone); 
});

// var elem = document.querySelector('#some-element');
//             elem.parentNode.removeChild(elem);