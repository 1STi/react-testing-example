const addTask = (task) => {
  cy.get('[data-testid="my-input"]')
    .type(task)
    .get('[data-testid="my-button"]')
    .click();
};

it('deve adicionar uma nova tarefa na lista', () => {
  cy.visit('http://localhost:3000');

  addTask('learn js');
  addTask('learn cypress');
  addTask('learn redux')
  addTask('learn english');

  const list = cy.get('[data-testid="my-list"]');
  list.should('exist');

  cy.get('[data-testid="my-list"] > li').then(($list) => {
    expect($list).to.have.length(4);
    expect($list).to.contain('learn js');
    expect($list).to.contain('learn cypress');
    expect($list).to.contain('learn redux');
    expect($list).to.contain('learn english');
  });
})