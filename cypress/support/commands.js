// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/**
 * @function visitLegoPage  - Visit home page LEGO
 */
 Cypress.Commands.add('visitLegoPage', () => {
	cy.visit("/");
});

/**
 * @function clearHomePageCookies  - Function to clear unwanted cookies on the home page.
     * @param {String} cookie.name - The name of the cookie to be cleared.
	 * @return {cy} - Return cy to keep chaining commands.
 */
Cypress.Commands.add('clearHomePageCookies', () => {
	//List of cookies to delete on the home page
	const cookies = [
	  { name: 'en-US', domain: '.lego.com', path: '/' },
	  { name: 'search_session', domain: '.lego.com', path: '/' },
	  { name: 'AGE_GATE', domain: '.lego.com', path: '/' },
	  { name: 'country', domain: '.lego.com', path: '/' },
	  { name: 'session_cookie_id', domain: '.lego.com', path: '/' },
	  { name: 'USER_GUID', domain: '.lego.com', path: '/' },
	  { name: 'gqauth', domain: 'www.lego.com', path: '/' },
	  { name: 'UAID', domain: 'www.lego.com', path: '/' },
	  { name: 'JSESSIONID', domain: '.nr-data.net', path: '/' },
	  { name: 'BrowserId_sec', domain: '.salesforce.com', path: '/' }
	];

	cookies.forEach(cookie => {
	  cy.clearCookie(cookie.name, { domain: cookie.domain, path: cookie.path });
	});
  });