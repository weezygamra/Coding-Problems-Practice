// Implement an algorithm to determine if a string has all unique characters. 

var uniqueChars = (str) => {
  var charList = {};
  for (var i = 0; i < str.length; i++) {
  	// if (charList.hasOwnProperty(str[i].toLowerCase())) {
  	if (!charList[str[i].toLowerCase()]) {	
  	  return false;
  	}
  	charList[str[i].toLowerCase()] = "Javi";
  }
  return true;
}

// What if you can not use additional data structures?

var uniqueCharsPlus = (str) => {
  var restOfStr = str.slice(1, str.length).toLowerCase();
  for (var i = 0; i < str.length; i++) {
  	if (restOfStr.indexOf(str[i].toLowerCase()) !== -1) {
  	  return false;
  	}
  	restOfStr = restOfStr.slice(1, str.length);
  }
  return true;
}