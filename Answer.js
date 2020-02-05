// Add up the Numbers from a Single Number
function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
}

// Matchstick Houses
function matchHouses(step) {
	let matchSticks = (6 * step) - (step - 1);
	
	if(step == 0) {
		return 0;
	}
	
	return matchSticks;
}

// Bitwise Operations
function bitwiseAND(n1, n2) {
    return n1&n2;
}
  
function bitwiseOR(n1, n2) {
    return n1|n2;
}
  
function bitwiseXOR(n1, n2) {
    return n1^n2;
}

// Check if One Array can be Nested in Another
function canNest(arr1, arr2) {
	return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
}

// Which Function Returns the Larger Number?
function whichIsLarger(f, g) {
	return f()>g()?'f':g()>f()?'g':'neither'
}

// Convert a Number to Base 2
function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}

// Recursion: Factorials
function factorial(n) {
	let sum = 1;
	
	for(let i = 2; i <= n; i++)
		{
			sum *= i;
		}
	return sum;
}

// Factorial of a Positive Integer
function factorial(z) {
	if(z == 0)
		{
			return 1;
		}
	else
		{
			let sum = 1;
			
			for(let i = 2; i <= z; i++)
				{
					sum *= i;
				}
			return sum;
		}
}

// Less Than 100?
function lessThan100(a, b) {
	if( a + b < 100)
		{
			return true;
		}
	else
		{
			return false;
		}
}

// Is it Time for Milk and Cookies?
function timeForMilkAndCookies(date) {
	let getMonth = date.getMonth();
	let getDate = date.getDate();
	
	if(getMonth == 11 && getDate == 24)
		{
			return true;
		}
	else
		{
			return false;
		}
}

// Absolute Sum
function getAbsSum(arr) {
	let reducer = (accumulator, currentValue) => Math.abs(accumulator) + Math.abs(currentValue);
	return Math.abs(arr.reduce(reducer));
}

// Return the Factorial
function factorial(int) {
	let sum = 1;
	
	for(let i = 2; i <= int; i++)
		{
			sum *= i; 
		}
	return sum;
}

// Say "Hello" Say "Bye"
function sayHelloBye(name, num) {
	let sentence = '';
	let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

	if(num == 1)
		{
			sentence = 'Hello ' + nameCapitalized;
			return sentence;
		}
	else
		{
			sentence = 'Bye ' + nameCapitalized;
			return sentence;
		}
}

// A Redundant Function
function redundant(str) {
	return () => str;
}

// Array of Multiples
function arrayOfMultiples (num, length) {
	let arr = [];
	
	for(let i = 0; i < length; i++)
		{
			arr[i] = num * (i + 1); 
		}
	return arr;
}

// Convert Key, Values in an Object to Array
function objectToArray(obj) {
	return Object.keys(obj).map(key => [key, obj[key]])
}

// Area of a Triangle
function triArea(base, height) {
	return (base * height) / 2;
}

// Concatenate Variable Number of Input Arrays
function concat(...args) {
	return [].concat(...args)
}

// Convenience Store
function changeEnough(change, amountDue) {
	let quarter = change[0] * 0.25;
	let dime = change[1] * 0.10;
	let nickel = change[2] * 0.05;
	let penny = change[3] * 0.01;
	let sum = quarter + dime + nickel + penny;
	
	if(sum >= amountDue)
		{
			return true;
		}
	else
		{
			return false;
		}
}

// Date Format
function formatDate(date) {
	let splitDate = date.split('/');
	let month = splitDate[0];
	let day = splitDate[1];
	let year = splitDate[2];
	
	return year + day + month;
}

// Converting Objects to Arrays
function toArray(obj) {
	let arr = [];
	let Arr = [];
	
	for(let [key, value] of Object.entries(obj))
		{
			arr.push([key, value]);
			Arr.push(arr);
		}
	return arr;
}

// Return the Objects Keys and Values
function keysAndValues(obj) {
	let keyArr = [];
	let valueArr = [];
	let Arr = [];
	
	for(let [key, value] of Object.entries(obj))
		{
			keyArr.push(key);
			valueArr.push(value);
		}
	return Arr = [keyArr, valueArr];
}

// Basic Calculator
function calculator(num1, operator, num2) {
	if(operator == '+')
		{
			return num1 + num2;
		}
	else if(operator == '-')
		{
			return num1 - num2;
		}
	else if(operator == '*')
		{
			return num1 * num2;
		}
	else if(operator == '/')
		{
			if(num2 == 0)
				{
					return "Can't divide by 0!";
				}
			else
				{
					return num1 / num2;
				}
		}
}

// Index Multiplier
function indexMultiplier(arr) {
	let sum = 0;
	let newArr = [];
	
	for(let i = 0; i < arr.length; i++)
		{
			newArr[i] = arr[i] * i;
			sum += newArr[i];
		}
	return sum;
}

// Fix the Error: Value vs. Reference Types
function checkEquals(arr1, arr2) {
	if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
  	return true;
  } 
  	else {
  	return false;
  }
}

// Match the Last Item
function matchLastItem(arr) {
	return arr.pop() === arr.join('');
}

// Seven Boom!
function sevenBoom(arr) {
	let Arr = arr.join('');
	
	if(Arr.includes(7))
	{
		return "Boom!";
	}
	else
	{
		return "there is no 7 in the array";
	}
}

// Return the End Letters of Numbers
function returnEndOfNumber(num) {
	let str = num.toString();
	
	if(str.endsWith(1))
		{
			return num + "-ST";
		}
	else if(str.endsWith(2))
		{
			return num + "-ND";
		}
	else if(str.endsWith(3))
		{
			return num + "-RD";
		}
	else
		{
			return num + "-TH";
		}
}

// Hitting the Jackpot
function testJackpot(result) {
	let jackpot;
	
	for(let i = 0; i < result.length - 1; i++)
		{
			if(result[i] === result[i + 1])
				{
					jackpot = true;
				}
			else
				{
					jackpot = false;
					break;
				}
		}
	return jackpot;
}

// Oddish vs. Evenish
function oddishOrEvenish(num) {
	var sum = 0;
	
	while (num) {
		sum += num % 10;
		num = Math.floor(num / 10);
	}
		if(sum % 2 == 0){ return 'Evenish';}
		else { return 'Oddish';}
	}

// Volume of a Cone
function coneVolume(h, r) {
	let R = Math.pow(r, 2);
	let P = Math.PI; 
	let V = ((P * R * h) / 3).toFixed(2);
	return parseFloat(V);
}

// Fix the Error: Flattening an Array
// Fix this incorrect code so that all tests pass!
function flatten(arr) {
	arr2 = arr[0];
	arr3 = arr[1];
	
return arr2.concat(arr3); 
}

// The Empty Square Sequence
function emptySq(step) {
	return Math.pow(step * 2, 2) - step * 4;
}

// Reverse the Number
function rev(n) {
	let abs = String(Math.abs(n));
	let revs = abs.split('');
	let arr = [];
	
	for(let i = revs.length; i >= 0; i--)
		{
			arr.push(revs[i]);
		}
	
	return arr.join('');
}

// Solving Exponential Equations With Logarithms
function solveForExp(a, b) {
	let log = Math.log(b) / Math.log(a);
	return Math.round(log);
}

// Longest Daily Streak
function dailyStreak(arr) {
	let count = 0;
	let long = 0;
	
	for(let i = 0; i < arr.length; i++)
		{
			if(arr[i] === true)
				{
					count++;
				}
			else if(arr[i] === false)
				{
					long = count;
					count = 0;
				}
		}
	if(count > long)
		{
			return count;
		}
	else
		{
			return long;
		}
}

// Reverse Coding Challenge #6
function mysteryFunc(num) {
	let str = String(num);
	let spl = str.split('');
	let result = 1;
	
	for(let i = 0; i < spl.length; i++)
		{
			result *= Number(spl[i]);
		}
	return result; 
}

// LCM of Two Numbers
function lcm(n1, n2) {
	if(n1 < n2)
		if(n2 % n1 === 0)
			{
				return n2;
			}
		else
			{
				return n1 * n2;
			}
	if(n1 > n2)
		if(n1 % n2 === 0)
			{
				return n1;
			}
		else
			{
				return n1 * n2;
			}
	if(n1 == n2)
		{
			return n1;
		}		
}

// Same Parity?
function parityAnalysis(num) {
	let str = String(num);
	let spl = str.split('');
	let result = 0;
	
	for(let i = 0; i < spl.length; i++)
		{
			result += Number(spl[i]);
		}
	
	if((result % 2) === (num % 2))
		{
			return true;
		}
	else
		{
			return false;
		}
}

// Double Letters
function doubleLetters(word) {	
	for (let i = 0; i < word.length - 1; i++){
		if (word[i] === word[i+1]){
			return true
		}
	}
	return false	
}

// Calculate the Total Price of Groceries
function getTotalPrice (groceries) {
	let x = groceries.map(item => item.quantity * item.price)
	  .reduce((total, curr) => total + curr)
	x = x.toString().split('.')
	if(x[1]) {
	  x = x[0] + '.' + x[1].slice(0, 1)
	}
	else {
	  x = x[0]
	}
	return parseFloat(x)
  }

// Numbers in Strings
function numInStr(arr){
	let newArr= []
	
	for(let i=0;i<arr.length;i++)
	{
		for(let j=0;j<arr[i].length;j++)
		{
			if(arr[i][j] === ' ')
			{
				j++
			}
			if(Number(arr[i][j]) == arr[i][j])
			{
				j=arr[i].length;
				newArr.push(arr[i])
			}
		}
	}
	return newArr
}

// Calculate an Earned Run Average
function era(er, ip) {
	let Era = parseFloat(er / (ip / 9));
	let e = Math.floor(Era * 100) / 100;
	return e.toFixed(2);
}

// Frequency Distribution
function getFrequencies(arr) {
	let result = {};
	
	arr.forEach((element) => {
		if (result[element]){
			result[element]++;
		}
		else
		{
			result[element] = 1;
		}
	});
	return result;
}