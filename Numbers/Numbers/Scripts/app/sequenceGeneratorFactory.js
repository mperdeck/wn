numbersApp.factory('sequenceGenerator', function sequenceGeneratorFactory() {
    'use strict';

    // Puts number range in an array and returns that array.
	// If upperBound is undefined, returns empty array.
    //
    // Parameter converter is a function. It receives the next number 
    // and returns a value to be placed in the array. This allows others to extend this function's functionality
    // without modifying it (open closed principle).
    // To not have a converter, leave undefined.
    var _createSequence = function (start, increment, upperBound, converter) {
        // Declare variables here, to make JavaScript's variable hoisting explicit.
        var number,
            numbersArray;

		// If upperBound is undefined, number <= upperBound is always false and nothing is added to the array.
        for (number = start, numbersArray = []; number <= upperBound; number += increment) {
            numbersArray.push(converter ? converter(number, numbersArray) : number);
        }

        return numbersArray;
    };

	// Returns array with Fibonacci sequence
	// If upperBound is undefined, returns empty array.
    var _createFibonacciSequence = function (upperBound) {
	
        // Declare variables here, to make JavaScript's variable hoisting explicit.
		var number, 
		    lastNumber = 1, 
			numberBeforeLast = 1,
			numbersArray = [ 0, numberBeforeLast, lastNumber ],
			
			// See http://stackoverflow.com/questions/6429225/javascript-null-or-undefined
			upperBoundIsNullOrUndefined = (upperBound == null);
	
		
		if (upperBoundIsNullOrUndefined || (upperBound < 0)) { return []; }
		if (upperBound == 0) { return [ 0 ]; }
		if (upperBound == 1) { return [ 0, 1, 1 ]; }

		while(true) {
			number = lastNumber + numberBeforeLast;

			if (number > upperBound) { return numbersArray; }

			numbersArray.push(number);
			numberBeforeLast = lastNumber;
			lastNumber = number;
		}
	}		


    // Returns:
    // C if the number is a multiple of 3 but not of 5
    // E if the number is a multiple of 5 but not of 3
    // Z if the number is a multiple of both 3 and 5
    // number itself in all other cases.
    var _extendedFizzBuzzConverter = function (number) {
        var isMultipleOf3 = ((number % 3) == 0); 
        var isMultipleOf5 = ((number % 5) == 0);

        if (isMultipleOf3 && isMultipleOf5) { return "Z"; }
        if (isMultipleOf3) { return "C"; }
        if (isMultipleOf5) { return "E"; }

        return number;
    }


    // All functions exposed by this object return an array with numbers.
    // Seeing that this is a singleton, no need to construct this object by adding functions to its prototype.
    var sequenceGenerator = {
        allNumbers: function (upperBound) {
            return _createSequence(0, 1, upperBound);
        },

        oddNumbers: function (upperBound) {
            return _createSequence(1, 2, upperBound);
        },

        evenNumbers: function (upperBound) {
            // 0 is an even number: https://en.wikipedia.org/wiki/Parity_of_zero
            return _createSequence(0, 2, upperBound);
        },

        extendedFizzBuzz: function (upperBound) {
            return _createSequence(0, 1, upperBound, _extendedFizzBuzzConverter);
        },

        fibonacci: function (upperBound) {
            return _createFibonacciSequence(upperBound);
        }
    };

    return sequenceGenerator;
});


