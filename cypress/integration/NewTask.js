const addTask = (task) => {
  cy.get('[data-testid="my-input"]')
    .type(task)
    .get('[data-testid="my-button"]')
    .click();
};

it('deve adicionar uma nova tarefa na lista', () => {
  cy.visit('http://localhost:3000');

  addTask('yasmin');
  addTask('dalliany');
  addTask('kraken');

  const list = cy.get('[data-testid="my-list"]');
  cy.get('[data-testid="my-list"] > li').then(($list) => {
    list.should('exist');
    expect($list).to.have.length(3);
    expect($list).to.contain('yasmin');
    expect($list).to.contain('dalliany');
    expect($list).to.contain('kraken');
  });
})