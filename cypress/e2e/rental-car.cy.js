import { HomePage } from './pages/HomePage';
import { CarRentalPage } from './pages/CarRentalPage';
import { SelectCarPage } from './pages/SelectCarPage';
import { SelectRentalProviderPage } from './pages/SelectRentalProvider';
import { CarDetailPage } from './pages/CarDetailPage';

const homePage = new HomePage()
const carRentalPage = new CarRentalPage()
const selectCarPage = new SelectCarPage()
const selectRentalProviderPage = new SelectRentalProviderPage()
const carDetailPage = new CarDetailPage()

describe('template spec', () => {
  it('Verify User e2e car rental', () => {
    cy.visit('')
    cy.get(homePage.btnCarRentalNav).click()
    cy.wait(200)
    cy.get(carRentalPage.radWithoutDriver).eq(0).click({force: true})
    cy.get(carRentalPage.etxCityLocation).click({force: true})
    cy.get(carRentalPage.etxCityLocation).type('Jakarta')
    cy.wait(200)
    cy.get(carRentalPage.drpCityLocation).click({force: true})
    cy.get(carRentalPage.etxRentalStartDate).click({force: true})
    cy.get(carRentalPage.btnStartDate).click({force: true})
    cy.get(carRentalPage.etxRentalEndDate).click({force: true})
    cy.get(carRentalPage.btnEndDate).click({force: true})
    cy.get(carRentalPage.etxRentalStartTime).click({force: true})
    cy.get(carRentalPage.btnStartTime).click({force: true})
    cy.get(carRentalPage.btnDone).click({force: true})
    cy.get(carRentalPage.etxRentalEndTime).click({force: true})
    cy.get(carRentalPage.btnEndTime).click({force: true})
    cy.get(carRentalPage.btnEndTimeMinutes).click({force: true})
    cy.get(carRentalPage.btnDone).click({force: true})
    cy.get(carRentalPage.btnSearchBar).click({force: true})
    cy.wait(5000)
    cy.get(selectCarPage.btnContinue).eq(0).click({force: true})
    cy.get(selectRentalProviderPage.btnContinue).eq(0).click({force: true})
    cy.wait(5000)
    cy.get(carDetailPage.radLocation).eq(0).scrollIntoView().click({force: true})
    cy.get(carDetailPage.btnPickupLocationRentalOffice).click({force: true})
    cy.get(carDetailPage.radRentalOfficePickupLocation).click({force: true})
    cy.get(carDetailPage.radLocation).eq(3).click({force: true})
    cy.get(carDetailPage.etxLocationAdress).eq(1).click({force: true})
    cy.get(carDetailPage.etxLocationAdress).eq(1).type('Jakarta')
    cy.get(carDetailPage.btnLocationSelect).click({force: true})
    cy.get(carDetailPage.etxNotes).type('Test Notes')
    cy.get(carDetailPage.btnContinue).click({force: true})
  })
})