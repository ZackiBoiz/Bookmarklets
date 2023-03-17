(async () => {
	function splitNChars(txt, num) {
		var result = [];
		for (var i = 0; i < txt.length; i += num) {
			result.push(txt.substr(i, num));
		}
		return result;
	}

	let binary = prompt("Enter binary to convert to text", "");
	let bytesLeft = binary.replace(/\s/g, "");;
	let result = "";

	while (bytesLeft.length) {
		const byte = bytesLeft.substr(0, 8);
		bytesLeft = bytesLeft.substr(8);

		result += String.fromCharCode(parseInt(byte, 2));
	}

	let outputStr = result;

	alert(outputStr);
})();
