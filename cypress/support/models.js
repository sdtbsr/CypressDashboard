
import { modelSURL } from '../../cypress/support/authentication.constant'
var data = require('../fixtures/modelsPage.json')
export class modelS {


    urlVerification() {
        cy.wait(500)
        cy.contains('Model S').click()
        cy.url().should('eq', modelSURL)
    }

    privacyPage_Verification() {
        cy.scrollTo('bottomLeft')
        cy.get('[class="tds-link tcl-link"]').each(($el, index) => {

            const text = $el.text()
            expect(text).to.contain(data.ModelS[index])
        })
    }

}


export const onModelSPage = new modelS