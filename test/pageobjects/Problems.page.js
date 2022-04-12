const Page = require('./Page');

class ProblemsPage extends Page {

    get problemsTitle () {
        return $ ("//h6[normalize-space()='problems']");
    }

    get newProblemButton () {
        return $ ("//button[normalize-space()='New Problem']");
    }
    get container () {
        return $ ("//body/div[@id='root']/div/div[2]");
    }

    get headerArr () {
        return $$ ("MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root  css-1rtnrqa");
    }


    get columns () {
        return $ ("//button[normalize-space()='Columns']");
    }

    get filters () {
        return $ ("//button[@aria-label='Show filters']");
    }

    get density () {
        return $ ("//button[@aria-label='Density']");
    }

    get export () {
        return $ ("//button[@aria-label='Export']");
    }

    get headerArrColumnNames () {
        return $$ ("//div[@class='MuiDataGrid-columnHeaderTitle css-cc8tf1']");
    }

    get problemNameColumn () {
        return $ ("//div[contains(text(),'Problem name')]");
    }

    get positionColumn () {
        return $ ("//div[contains(text(),'Position')]");
    }

    get companyColumn () {
        return $ ("//div[contains(text(),'Company')]");
    }

    get solutionsColumn () {
        return $ ("//div[contains(text(),'Solutions')]");
    }

    get creatorColumn () {
        return $ ("//div[contains(text(),'Creator')]");
    }

    get pagination () {
        return $ ("//p[contains(text(),'1–10')]");
    }

    get pagePrev () {
        return $ ("//button[@title='Go to previous page']");
    }

    get pageNext () {
        return $ ("//button[@title='Go to next page']");
    }

    get columnsTooltip () {
        return $ ("//div[@class='MuiDataGrid-panelWrapper css-1bvqkfl']");
    }

    //".MuiDataGrid-panel"

    get toggleColumnButtons() {
        return $$ ("MuiSwitch-input PrivateSwitchBase-input css-1m9pwf3");
    }

    get columnNamesArr() {
        return $$ ("//span[@class='MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-9l3uo3']");
    }

    get EachToggledColumn () {
        return $$ ("//span[@class='MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked PrivateSwitchBase-root Mui-checked css-1nr2wod']");
    }

    get EachUntoggledColumn () {
        return $$ ("//span[@class='MuiSwitch-switchBase MuiSwitch-colorPrimary MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root css-1nr2wod']");
    }

    get columnsTooltipEachElem () {
        return $ ("//span[@class='MuiSwitch-thumb css-19gndve']");
    }

    get inputFindColumn() {
        return $ ("//input[@placeholder='Column title']");
    }

    get footer() {
        return $ ("/html/body/div[2]/div/div[2]/div[3]");
    }

    get problemNameToggle () {
        return $ ("//input[@name='Problem name']");
    }

    get positionToggle () {
        return $ ("//input[@name='Position']");
    }

    get companyToggle () {
        return $ ("//input[@name='Company']");
    }

    get solutionsToggle () {
        return $ ("//input[@name='Solutions']");
    }

    get creatorToggle () {
        return $ ("//input[@name='Creator']");
    }

    get showAllBtn () {
        return $ ("//button[normalize-space()='Show all']");
    }

    get hideAllBtn () {
        return $ ("//button[normalize-space()='Hide all']");
    }

    async getColumnNames (list) {
        const names = [];
        // list.map(async (elem) => names.push(await elem.getText()));
        // return names;

        for (let i = 0; i < list.length; i++) {
            const elem = await list[i].getText();
            names.push(elem)
        }
        return names;
    }

    // async toggleColumnNames (list) {
    //     return list.forEach(async (elem, index) => (await elem.click(index)));
    // }

    // async toggleColumnNames (list) {
    //     for (const elem of list) {
    //         const index = list.indexOf(elem);
    //         await elem.click(index);
    //     }
    // }

    async toggleColumnNames (list) {
        for (let i = 0; i < list.length; i++) {
            await list[i].click();
        }
    }

    open (){
        return super.open ("/problems");
    }
}
module.exports = new ProblemsPage();