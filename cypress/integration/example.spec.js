// eslint-disable-next-line spaced-comment
/// <reference types="Cypress" />

import { ROOT } from '../../src/routes/paths';
import { METHODS, URLS } from '../../src/services/example/config';
import ids from '../../src/components/Example/identifiers';

const { todos: TODOS_API } = METHODS;
const { todos: TODOS_URL } = URLS;

context('Example', () => {
  describe('Load page', () => {
    it('should load page by route', () => cy.visit(ROOT));
  });

  describe('Fetch text', () => {
    it('should fetch text', () => {
      cy.server()
        .route(TODOS_API.getTodo, `${TODOS_URL.getTodo}*`)
        .as('getTodo');

      cy.findByTestId(ids.BUTTON_FETCH_TEXT)
        .click()
        .wait('@getTodo');
    });
  });
});
