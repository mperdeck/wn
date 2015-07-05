'use strict';
 
describe('sequenceGenerator: ', function(){

	var sequenceGenerator;
	  
	// excuted before each "it" is run.
	beforeEach(function (){

		// load the module.
		module('numbersApp');

		inject(function(_sequenceGenerator_) {
			sequenceGenerator = _sequenceGenerator_;
		});
	});

	describe("allNumbers", function() {
		it(" generates expected numbers", function() {
			var numbersArray = sequenceGenerator.allNumbers(3);

			expect(numbersArray[0]).toEqual(0);
			expect(numbersArray[1]).toEqual(1);
			expect(numbersArray[2]).toEqual(2);
			expect(numbersArray[3]).toEqual(3);
		});

		it(" generates expected number of numbers", function() {
			var numbersArray = sequenceGenerator.allNumbers(12);

			expect(numbersArray.length).toEqual(13);
		});

		it(" handles 0", function() {
			var numbersArray = sequenceGenerator.allNumbers(0);

			expect(numbersArray.length).toEqual(1);
			expect(numbersArray[0]).toEqual(0);
		});

		it(" handles negative input", function() {
			var numbersArray = sequenceGenerator.allNumbers(-1);

			expect(numbersArray.length).toEqual(0);
		});

		it(" handles undefined input", function() {
			var numbersArray = sequenceGenerator.allNumbers();

			expect(numbersArray.length).toEqual(0);
		});
	});

	describe("oddNumbers", function() {
		it(" generates expected numbers", function() {
			var numbersArray = sequenceGenerator.oddNumbers(6);

			expect(numbersArray[0]).toEqual(1);
			expect(numbersArray[1]).toEqual(3);
			expect(numbersArray[2]).toEqual(5);
		});

		it(" generates expected number of numbers", function() {
			var numbersArray = sequenceGenerator.oddNumbers(6);

			expect(numbersArray.length).toEqual(3);
		});

		it(" handles 0", function() {
			var numbersArray = sequenceGenerator.oddNumbers(0);

			expect(numbersArray.length).toEqual(0);
		});

		it(" handles 1", function() {
			var numbersArray = sequenceGenerator.oddNumbers(1);

			expect(numbersArray[0]).toEqual(1);
			expect(numbersArray.length).toEqual(1);
		});

		it(" handles negative input", function() {
			var numbersArray = sequenceGenerator.oddNumbers(-1);

			expect(numbersArray.length).toEqual(0);
		});

		it(" handles undefined input", function() {
			var numbersArray = sequenceGenerator.oddNumbers();

			expect(numbersArray.length).toEqual(0);
		});
	});

	describe("evenNumbers", function() {
		it(" generates expected numbers", function() {
			var numbersArray = sequenceGenerator.evenNumbers(6);

			expect(numbersArray[0]).toEqual(0);
			expect(numbersArray[1]).toEqual(2);
			expect(numbersArray[2]).toEqual(4);
			expect(numbersArray[3]).toEqual(6);
		});

		it(" generates expected number of numbers", function() {
			var numbersArray = sequenceGenerator.evenNumbers(6);

			expect(numbersArray.length).toEqual(4);
		});

		it(" handles 0", function() {
			var numbersArray = sequenceGenerator.evenNumbers(0);

			expect(numbersArray.length).toEqual(1);
			expect(numbersArray[0]).toEqual(0);
		});

		it(" handles negative input", function() {
			var numbersArray = sequenceGenerator.evenNumbers(-1);

			expect(numbersArray.length).toEqual(0);
		});

		it(" handles undefined input", function() {
			var numbersArray = sequenceGenerator.evenNumbers();

			expect(numbersArray.length).toEqual(0);
		});
	});

	describe("extendedFizzBuzz", function() {
		it(" generates expected numbers", function() {
			var numbersArray = sequenceGenerator.extendedFizzBuzz(17);

			expect(numbersArray[0]).toEqual('Z');
			expect(numbersArray[1]).toEqual(1);
			expect(numbersArray[2]).toEqual(2);
			expect(numbersArray[3]).toEqual('C');
			expect(numbersArray[4]).toEqual(4);
			expect(numbersArray[5]).toEqual('E');
			expect(numbersArray[6]).toEqual('C');
			expect(numbersArray[7]).toEqual(7);
			expect(numbersArray[8]).toEqual(8);
			expect(numbersArray[9]).toEqual('C');
			expect(numbersArray[10]).toEqual('E');
			expect(numbersArray[11]).toEqual(11);
			expect(numbersArray[12]).toEqual('C');
			expect(numbersArray[13]).toEqual(13);
			expect(numbersArray[14]).toEqual(14);
			expect(numbersArray[15]).toEqual('Z');
			expect(numbersArray[16]).toEqual(16);
		});

		it(" generates expected number of numbers", function() {
			var numbersArray = sequenceGenerator.extendedFizzBuzz(6);

			expect(numbersArray.length).toEqual(7);
		});

		it(" handles 0", function() {
			var numbersArray = sequenceGenerator.extendedFizzBuzz(0);

			expect(numbersArray.length).toEqual(1);
			expect(numbersArray[0]).toEqual('Z');
		});

		it(" handles negative input", function() {
			var numbersArray = sequenceGenerator.extendedFizzBuzz(-1);

			expect(numbersArray.length).toEqual(0);
		});

		it(" handles undefined input", function() {
			var numbersArray = sequenceGenerator.extendedFizzBuzz();

			expect(numbersArray.length).toEqual(0);
		});
	});

	describe("fibonacci", function() {
		it(" generates expected numbers", function() {
			var numbersArray = sequenceGenerator.fibonacci(89);

			expect(numbersArray[0]).toEqual(0);
			expect(numbersArray[1]).toEqual(1);
			expect(numbersArray[2]).toEqual(1);
			expect(numbersArray[3]).toEqual(2);
			expect(numbersArray[4]).toEqual(3);
			expect(numbersArray[5]).toEqual(5);
			expect(numbersArray[6]).toEqual(8);
			expect(numbersArray[7]).toEqual(13);
			expect(numbersArray[8]).toEqual(21);
			expect(numbersArray[9]).toEqual(34);
			expect(numbersArray[10]).toEqual(55);
			expect(numbersArray[11]).toEqual(89);
		});

		it(" generates expected number of numbers", function() {
			var numbersArray = sequenceGenerator.fibonacci(89);

			expect(numbersArray.length).toEqual(12);
		});

		it(" handles 0", function() {
			var numbersArray = sequenceGenerator.fibonacci(0);

			expect(numbersArray.length).toEqual(1);
			expect(numbersArray[0]).toEqual(0);
		});

		it(" handles 1", function() {
			var numbersArray = sequenceGenerator.fibonacci(1);

			expect(numbersArray.length).toEqual(3);
			expect(numbersArray[0]).toEqual(0);
			expect(numbersArray[1]).toEqual(1);
			expect(numbersArray[2]).toEqual(1);
		});

		it(" handles negative input", function() {
			var numbersArray = sequenceGenerator.fibonacci(-1);

			expect(numbersArray.length).toEqual(0);
		});

		it(" handles undefined input", function() {
			var numbersArray = sequenceGenerator.fibonacci();

			expect(numbersArray.length).toEqual(0);
		});
	});
});


