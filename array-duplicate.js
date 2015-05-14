// Task: write a method that will operate on an array and duplicate it
//   (copy the array and append to itself)
//   ex: [1,2,3,4,5].duplicate() = [1,2,3,4,5,1,2,3,4,5];
// 
// Usage: node array-duplicate.js
Array.prototype.duplicate = function() {
	return this.concat(this);
}

function assertDuplicate(input, expected) {
	var output = input.duplicate();

	if (arraysEquivalent(expected, output)) {
		console.log('Test Succeeded');
		return;
	}

	console.log('error! input: [' + input + '] output: [' + output + '] expected [' + expected + ']');
	return;
}

function arraysEquivalent(a, b) {
	if (a === b) {
		return true;
	}

	if (a == null || b == null) {
		return false;
	}

	if (a.length != b.length) {
		return false;
	}

	for (var i = 0; i < a.length; ++i) {
		if (a[i] !== b[i]) {
			return false;
		}
	}

	return true;
}

assertDuplicate([], []);
assertDuplicate([1], [1,1]);
assertDuplicate([1,2,3,4,5], [1,2,3,4,5,1,2,3,4,5]);