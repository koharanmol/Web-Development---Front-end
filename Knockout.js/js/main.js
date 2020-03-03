let viewModel = {
  teams: ko.observableArray(),
  employees: ko.observableArray(),
  projects: ko.observableArray()
}

/**
 * Invokes the initialize methods and applies the knockout bindings
 */
$(document).ready(() => {
  initializeTeams()
    .then(() => initializeEmployees())
    .then(() => initializeProjects())
    .then(() => {
      ko.applyBindings(viewModel);
      $('.multiple').multipleSelect({ filter: true })
      $('.single').multipleSelect({ single: true, filter: true });
    })
    .catch(err => showGenericModal('Error', err))
})

/**
 * Displays the genericModal with the proper contents updated.
 * 
 * This function does the following:
 * - Sets the contents of *modal-title* to the passed *title* value
 * - Sets the contents of *modal-body* to the passed *message* value
 * - Show the genericModal using the id (genericModal)
 * 
 * @param {string} title    The title that will be set to the <h4></h4> within the modal
 * @param {string} message  The message that will appear within the modal
 */
let showGenericModal = (title, message) => {
  $('.modal-title').html(`<b>${title}</b>`);
  $('.modal-body').html(message);
  $('#genericModal').modal('show');
}

/**
 * Responsible for populating the observable *teams* property with data
 * 
 * @returns a promise relative to **https://teams-api-lean.herokuapp.com/teams-raw**
 */
let initializeTeams = () => {
  return new Promise((resolve, reject) => {
    $.ajax(`https://teams-api-lean.herokuapp.com/teams-raw`)
      .done(data => {
        console.log(data);
        viewModel.teams = ko.mapping.fromJS(data);
        resolve(data);
      })
      .fail(err => reject(`Error loading the team data`))
  });
}

/**
 * Responsible for populating the observable *employees* property with data
 * 
 * @returns a promise relative to **https://teams-api-lean.herokuapp.com/employees**
 */
let initializeEmployees = () => {
  return new Promise((resolve, reject) => {
    $.ajax(`https://teams-api-lean.herokuapp.com/employees`)
      .done(data => {
        console.log(data);
        viewModel.employees = ko.mapping.fromJS(data);
        resolve(data)
      })
      .fail(err => reject(`Error loading the employee data`))
  });
}

/**
 * Responsible for populating the observable *projects* property with data
 * 
 * @returns a promise relative to **https://teams-api-lean.herokuapp.com/projects**
 */
let initializeProjects = () => {
  return new Promise((resolve, reject) => {
    $.ajax(`https://teams-api-lean.herokuapp.com/projects`)
      .done(data => {
        console.log(data);
        viewModel.projects = ko.mapping.fromJS(data);
        resolve(data)
      })
      .fail(err => reject(`Error loading the project data`))
  });
}

/**
 * NOTE: Using the => does not point to the correct scope
 */
function saveTeam() {
  var self = this;
  console.log(self)
  $.ajax({
    url: `https://teams-api-lean.herokuapp.com/team/${self._id}`,
    type: 'PUT',
    data: JSON.stringify({
      Projects: self.Projects(),
      Employees: self.Employees(),
      TeamLead: self.TeamLead()
    })
  })
  .done(() => showGenericModal(`Success`, `${self.TeamName()} Updated Succesfully`))
  .fail(() => showGenericModal(`Error`, `Error updating the team information.`))
}