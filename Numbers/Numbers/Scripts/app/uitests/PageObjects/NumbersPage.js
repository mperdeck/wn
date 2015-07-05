var NumbersPage = function () {
    this.sequenceAll = element(by.id('sequence-all'));
    this.sequenceOdd = element(by.id('sequence-odd'));
    this.sequenceEven = element(by.id('sequence-even'));
    this.sequenceExtendedfizzbuzz = element(by.id('sequence-extendedfizzbuzz'));
    this.sequenceFibonacci = element(by.id('sequence-fibonacci'));

    this.userInput = element(by.id('user-input'));

    this.errorRequired = element(by.id('error-required'));
    this.errorAtleastone = element(by.id('error-atleastone'));
    this.errorDigitsonly = element(by.id('error-digitsonly'));
    this.errorWholenumber = element(by.id('error-wholenumber'));

    this.navigate = function () {
        browser.get('http://localhost:5066/');
    };
};

module.exports = new NumbersPage();
