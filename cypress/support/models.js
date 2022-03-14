
import { modelSURL } from '../../cypress/support/authentication.constant'

export class modelS {


    urlVerification() {
        cy.wait(500)
        cy.contains('Model S').click()
        cy.url().should('eq', modelSURL)
    }

}


export const onModelSPage = new modelS