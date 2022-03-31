const { expect: chaiExpect, assert, should } = require("chai");
//const should = require('chai').should();
const { userCredentials } = require("../data/login.data");

const ProblemsPage = require("../pageobjects/Problems.page");
const LoginPage = require("../pageobjects/Login.page");
const PublicationsPage = require("../pageobjects/Publications.page");
const GlobalNavigation = require("../pageobjects/GlobalNavigation.page");

const columnArray = ["Problem name", "Position", "Company", "Solutions", "creator"];
const firstColumnIndex = 0;
const firstColumnName = "Problem name";

describe('Problems Page', async() => {
    before(async () => {
        await LoginPage.login(userCredentials.email, userCredentials.pw);
        await GlobalNavigation.btnMenu.click();
        await GlobalNavigation.problemsOption.click();
        await ProblemsPage.columns.click();
    })

    it.only ('Should open Problems Page ', async () => {
        const getProblemsTitle = await ProblemsPage.problemsTitle.getText();
        expect(getProblemsTitle).toEqual("problems");
        should().exist(ProblemsPage.container);
    });

    it.only ("Should show tooltip with column names and hide it ", async () => {
        const tooltip = await ProblemsPage.columnsTooltip;
        await tooltip.waitForDisplayed({timeout: 500})
        should.exist(tooltip, 'tooltip exist');


        // await ProblemsPage.columns.click();
        // await browser.pause(2000);
        // should.not.exist(tooltip, 'tooltip does not exist');

    });

    it("Should return number of columns and return the name of the first column ", async () => {
        const tooltip = await ProblemsPage.columnsTooltip;
        expect(tooltip).toBeDisplayed();
        const arr = await ProblemsPage.columnNamesArr[`${firstColumnIndex}`];
        console.log(await arr.getText() + "+++++++++++++++++++++++++++++++++++++++");
        expect(await arr.getText()).toEqual(`${firstColumnName}`);
        expect(arr).toHaveText(`${firstColumnName}`);
        expect(arr).toHaveText("");                                            // doesn`t work
        const arrLength = await (ProblemsPage.columnNamesArr.length);
        console.log(arrLength + "+++++++++++++++++++++++++++++++++++++++");
        expect(arrLength === 5).toEqual(true);
    });


    //
    //     // it ("Should verify the number of columns", async () => {
    //     //     //await ProblemsPage.columns.click();
    //     //     expect (ProblemsPage.columnsTooltip).toBeDisplayedInViewport();
    //     //     const columns = await (ProblemsPage.toggleColumnButtons.length);         // ask
    //     //     console.log(columns + "+++++++++++++++++++++++++++++++++++++++");
    //     //     expect(columns).toEqual(5);
    //     // });
    //     //
    //     // it ("Should untoggle and toggle any column", async () => {
    //     //     await ProblemsPage.toggleColumnNames(await ProblemsPage.toggleColumnButtons);
    //     //     const untoggle = await ProblemsPage.getColumnNames(await ProblemsPage.headerArrColumnNames);
    //     //     console.log(untoggle + "++++++++++++++++++++++++++++++++++++++++++++++++++")
    //     //     expect(untoggle).toBeDisplayedInViewport();
    //     //     await ProblemsPage.toggleColumnNames(await ProblemsPage.toggleColumnButtons);
    //     //     const toggle = await ProblemsPage.getColumnNames(await ProblemsPage.headerArrColumnNames);
    //     //     console.log(toggle + "++++++++++++++++++++++++++++++++++++++++++++++++++")
    //     //     expect(toggle).toBeDisplayedInViewport();          //ask
    //     // })
    });
