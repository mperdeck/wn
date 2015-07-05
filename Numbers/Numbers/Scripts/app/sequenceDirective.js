// Creates the wnSequence directive. Takes an array of primitive elements and shows it in a "standard" way.
// Abstracting the showing of sequences into this admittedly very simple directive allows you to standardise their appearance on the site
// and makes changing this appearance much easier (DRY).
//
// Parameters:
// * sequence takes an array of primitive elements
//
// Example:
// <wn-sequence sequence="allNumbers" />

numbersApp.directive('wnSequence', function () {
    'use strict';

    return {
        restrict: 'E', // only matches element name
        scope: {
            sequence: '='
        },
        template: '<span class="sequence">{{sequence.join(", ")}}</span>'
    };
});

