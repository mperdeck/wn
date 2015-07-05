describe('Numbers Page', function () {

    var numbersPage = require('./PageObjects/NumbersPage.js');

    var expectNoErrorMessages = function () {
        expect(numbersPage.errorRequired.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorAtleastone.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorDigitsonly.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorWholenumber.isDisplayed()).not.toBeTruthy();
    };

    var expectNoSequences = function () {
        expect(numbersPage.sequenceAll.getText()).toEqual('');
        expect(numbersPage.sequenceOdd.getText()).toEqual('');
        expect(numbersPage.sequenceEven.getText()).toEqual('');
        expect(numbersPage.sequenceExtendedfizzbuzz.getText()).toEqual('');
        expect(numbersPage.sequenceFibonacci.getText()).toEqual('');
    };

    beforeEach(function () {
        numbersPage.navigate();
    });

    it('should start with correct default', function () {
        expect(numbersPage.userInput.getAttribute('value')).toEqual('5');

        expectNoErrorMessages();

        expect(numbersPage.sequenceAll.getText()).toEqual('0, 1, 2, 3, 4, 5');
        expect(numbersPage.sequenceOdd.getText()).toEqual('1, 3, 5');
        expect(numbersPage.sequenceEven.getText()).toEqual('0, 2, 4');
        expect(numbersPage.sequenceExtendedfizzbuzz.getText()).toEqual('Z, 1, 2, C, 4, E');
        expect(numbersPage.sequenceFibonacci.getText()).toEqual('0, 1, 1, 2, 3, 5');
    });

    it('should show correct values when digit added', function () {
        numbersPage.userInput.sendKeys(1);

        expect(numbersPage.userInput.getAttribute('value')).toEqual('51');

        expectNoErrorMessages();

        expect(numbersPage.sequenceAll.getText()).toEqual('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51');
        expect(numbersPage.sequenceOdd.getText()).toEqual('1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51');
        expect(numbersPage.sequenceEven.getText()).toEqual('0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50');
        expect(numbersPage.sequenceExtendedfizzbuzz.getText()).toEqual('Z, 1, 2, C, 4, E, C, 7, 8, C, E, 11, C, 13, 14, Z, 16, 17, C, 19, E, C, 22, 23, C, E, 26, C, 28, 29, Z, 31, 32, C, 34, E, C, 37, 38, C, E, 41, C, 43, 44, Z, 46, 47, C, 49, E, C');
        expect(numbersPage.sequenceFibonacci.getText()).toEqual('0, 1, 1, 2, 3, 5, 8, 13, 21, 34');
    });

    it('should show required error message when input cleared', function () {
        numbersPage.userInput.clear();

        expect(numbersPage.errorRequired.isDisplayed()).toBeTruthy();
        expect(numbersPage.errorAtleastone.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorDigitsonly.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorWholenumber.isDisplayed()).not.toBeTruthy();

        expectNoSequences();
    });

    it('should show at-least-one error message when input is 0', function () {
        numbersPage.userInput.clear();
        numbersPage.userInput.sendKeys(0);

        expect(numbersPage.errorRequired.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorAtleastone.isDisplayed()).toBeTruthy();
        expect(numbersPage.errorDigitsonly.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorWholenumber.isDisplayed()).not.toBeTruthy();

        expectNoSequences();
    });

    it('should show digits-only error message when input has non-digits', function () {
        numbersPage.userInput.clear();
        numbersPage.userInput.sendKeys('1k');

        expect(numbersPage.errorRequired.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorAtleastone.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorDigitsonly.isDisplayed()).toBeTruthy();
        expect(numbersPage.errorWholenumber.isDisplayed()).not.toBeTruthy();

        expectNoSequences();
    });

    it('should show whole-numbers error message when input has fraction', function () {
        numbersPage.userInput.clear();
        numbersPage.userInput.sendKeys('1.4');

        expect(numbersPage.errorRequired.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorAtleastone.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorDigitsonly.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorWholenumber.isDisplayed()).toBeTruthy();

        expectNoSequences();
    });

    it('should show whole-numbers and at-least-one error message when input is fraction below 1', function () {
        numbersPage.userInput.clear();
        numbersPage.userInput.sendKeys('0.4');

        expect(numbersPage.errorRequired.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorAtleastone.isDisplayed()).toBeTruthy();
        expect(numbersPage.errorDigitsonly.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorWholenumber.isDisplayed()).toBeTruthy();

        expectNoSequences();
    });
});

