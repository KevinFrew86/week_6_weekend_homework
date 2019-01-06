document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');

  const deleteButton = document.querySelector('#delete-all-button');

  const handleDeleteButton = (event) => {
    const dreamTeam = document.querySelector('#dream-team');
    dreamTeam.innerHTML = '';
  }

  deleteButton.addEventListener('click', handleDeleteButton);



  const addElement = function(type){
    return document.createElement(type);
  }


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const player = event.target.player.value;
    const team = event.target.team.value;
    const position = event.target.position.value;

    const dreamTeam = document.querySelector('#dream-team');

    const teamDetails = addElement('div');
    const playerPara = addElement('p');
    const teamPara = addElement('p');
    const positionPara = addElement('p');
    const deleteButton = addElement('button');
    deleteButton.textContent = 'Remove player';
    const handleDelete = () => {
      teamDetails.deletePlayer(player)
    }

    playerPara.textContent = player;
    teamPara.textContent = team;
    positionPara.textContent = position;

    teamDetails.appendChild(playerPara);
    teamDetails.appendChild(teamPara);
    teamDetails.appendChild(positionPara);
    deleteButton.addEventListener('click', handleDelete)
    teamDetails.appendChild(deleteButton);


    dreamTeam.appendChild(teamDetails);


    form.reset();
  }

  form.addEventListener('submit', handleFormSubmit);
})
