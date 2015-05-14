// Two solutions for determining if one string is a rotation of the other
// Usage: 'node string-rotation.js'

// isRotation is the 'hacker' solution (not labelled by me)
// - an expanded string is created by appending the source string to itself
// - any rotations of this string should be a substring within the expansion
var isRotation = function (a, b) {
	var expanded = a.concat(a);
	if (a.length != b.length) {
		return false;
	}
	return (expanded.indexOf(b) != -1);
}

// isRotationLoops is the 'mathematical' solution which uses the modulus
//   operator to create a circular index of the string
var isRotationLoops = function (a, b) {
	var offset = a.length;
	if (a.length != b.length) {
		return false;
	}

	for (i=0; i<offset; i++) {
		var isRotation = true;
		for (j=0; j<b.length; j++) {
			var index = (i+j) % offset;
			if (a.charAt(index) != b.charAt(j)) {
				isRotation = false;
				break;
			}
		}

		if (isRotation) {
			return true;
		}
	}

	return false;
}

function assertRotation(fcn, expected, a, b) {
	var result = fcn(a,b);

	if (expected != result) {
		console.log('error! {a: ' + a + ' b: ' + b + ' rotation: ' + result + '}');
		return;
	}
	console.log('Test Succeeded');
}

// test standard rotations
assertRotation(isRotation, true, "abcd", "abcd");
assertRotation(isRotation, true, "abcd", "bcda");
assertRotation(isRotation, true, "abcd", "cdab");
assertRotation(isRotation, true, "abcd", "dabc");

assertRotation(isRotationLoops, true, "abcd", "abcd");
assertRotation(isRotationLoops, true, "abcd", "bcda");
assertRotation(isRotationLoops, true, "abcd", "cdab");
assertRotation(isRotationLoops, true, "abcd", "dabc");


// test repeated characters
assertRotation(isRotation, true, "aaab", "aaba");
assertRotation(isRotation, true, "aaab", "baaa");

assertRotation(isRotationLoops, true, "aaab", "aaba");
assertRotation(isRotationLoops, true, "aaab", "baaa");


// test unequal lengths
assertRotation(isRotation, false, "abcd", "abc");
assertRotation(isRotation, false, "abcd", "food");

assertRotation(isRotationLoops, false, "abcd", "abc");
assertRotation(isRotationLoops, false, "abcd", "food");