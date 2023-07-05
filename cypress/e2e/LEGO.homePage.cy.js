import { default as homePageLocators } from "../locators/homePageLocators";

context('Global => Home page Lego', () => {
	beforeEach(() => {
		cy.clearHomePageCookies();
		cy.visitLegoPage();
	});

	it('Validate Go to HomePage', () => {
		cy.get(homePageLocators.mainConsent).should('be.visible');
		cy.get(homePageLocators.mainNavigationHomePage).should('be.visible')
		cy.get(homePageLocators.startPlayingLink).should('be.visible');
		cy.get(homePageLocators.continueEnterToLegoPage).click();
	});

});