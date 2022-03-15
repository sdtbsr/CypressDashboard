
import { github } from '../../support/authentication.constant'
import { ongithubPage } from '../../support/github'
describe('Udemy test cases', () => {

    beforeEach('Navigate to page udemy.com', () => {

        cy.visit(github)

    })

    it('Login to the udemy', () => {

        ongithubPage.verifySignInUrl()

    })

    it('Navigate to page back', () => {
        ongithubPage.navigatetoMainPage()
    })
})