
import { teslaURL } from '../../support/authentication.constant'
import { onModelSPage } from '../../support/models'

describe('Tesla web page testing', () => {

    beforeEach('Navigate to page to the tesla.com', () => {
        cy.visit(teslaURL)
    })

    it('ModelS page Testing', () => {
        onModelSPage.urlVerification()
        onModelSPage.privacyPage_Verification()
        onModelSPage.modelScomparePage()

    })
})

