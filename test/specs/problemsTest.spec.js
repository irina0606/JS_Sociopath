const { expect: chaiExpect, assert} = require("chai");
const should = require('chai').should();
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

    })

    it ('Should open Problems Page ', async () => {
        const getProblemsTitle = await ProblemsPage.problemsTitle.getText();
        await expect(getProblemsTitle).toEqual("problems");
        await should.exist(ProblemsPage.container);
    });

    it ("Should show tooltip with column names and hide it ", async () => {
        await ProblemsPage.columns.click();
        const tooltip = await ProblemsPage.columnsTooltip;
        await tooltip.waitForDisplayed({timeout: 500})
        //await expect(tooltip).toBePresent();
        await expect(tooltip).toExist();
        await ProblemsPage.columns.click();
        //await expect(tooltip).not.toBePresent();
        await expect(tooltip).not.toExist();
    });

    it.only ("Should return number of columns and return the name of the first column ", async () => {
        await ProblemsPage.columns.click();
        const arr = await ProblemsPage.columnNamesArr[`${firstColumnIndex}`];
        console.log(await arr.getText() + "+++++++++++++++++++++++++++++++++++++++");
        await expect(await arr.getText()).toEqual(`${firstColumnName}`);
        await expect(arr).toHaveText(`${firstColumnName}`);
        await expect(arr).not.toHaveText("");
        const arrLength = await (ProblemsPage.columnNamesArr.length);
        console.log(arrLength + "+++++++++++++++++++++++++++++++++++++++");
        await expect(arrLength === 5).toEqual(true);
    });

        it.only ("Should untoggle and toggle any column", async () => {
            await ProblemsPage.toggleColumnNames(await ProblemsPage.toggleColumnButtons);
            const untoggle = await ProblemsPage.getColumnNames(await ProblemsPage.headerArrColumnNames);
            console.log(untoggle + "++++++++++++++++++++++++++++++++++++++++++++++++++")
            await (expect(untoggle).toBeDisplayedInViewport());
            await ProblemsPage.toggleColumnNames(await ProblemsPage.toggleColumnButtons);
            const toggle = await ProblemsPage.getColumnNames(await ProblemsPage.headerArrColumnNames);
            console.log(toggle + "++++++++++++++++++++++++++++++++++++++++++++++++++")
            await (expect(toggle).toBeDisplayedInViewport());          //ask
        })

    it ("Should verify the number of columns visible in header", async () => {
        //await ProblemsPage.columns.click();
        expect (ProblemsPage.columnsTooltip).toBeDisplayedInViewport();
        const columns = await (ProblemsPage.toggleColumnButtons.length);         // ask
        console.log(columns + "+++++++++++++++++++++++++++++++++++++++");
        expect(columns).toEqual(5);
    });
    });
