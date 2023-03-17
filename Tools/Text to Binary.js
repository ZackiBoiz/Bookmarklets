(async () => {
	let text = prompt("Enter a string.", "");
	let chars = text.split('').map(function(char) {
		let binary = char.charCodeAt(0).toString(2);
		let pad = Math.max(8 - binary.length, 0);
		return '0'.repeat(pad) + binary + " ";
	}).join('');
	
	alert(chars);
})();
