//Add Task
const addTask = (task) => {
  cy.get('[data-testid="my-input"]')
    .type(task)
    .get('[data-testid="my-button"]')
    .click();
};

it('deve adicionar uma nova tarefa na lista', () => {
  cy.visit('http://localhost:3000');

  addTask('estudar js');
  addTask('fazer o almoço');
  addTask('estudar cypress');

  const list = cy.get('[data-testid="my-list"]');
  list.should('exist');

  cy.get('[data-testid="my-list"] > li').then(($list) => {
    list.should('exist');
    expect($list).to.have.length(3);
    expect($list).to.contain('estudar js');
    expect($list).to.contain('fazer o almoço');
    expect($list).to.contain('estudar cypress');
  });
})

//Remove Task
const removeTask = (task) => {
  cy.get('[data-testeid="remove-button"]')
    .click();
}

it ('deve remover a tarefa da lista', () => {
  cy.visit('http://localhost:3000');

  addTask('estudar cypress');

  cy.get('[data-testid="my-list"] button').each((button) => {
    
    cy.wrap(button[0]).click();
    console.log(button)
  })

  const list = cy.get('[data-testid="my-list"]');
  cy.get('[data-testid="my-list"] button').should('not.exist');

})

