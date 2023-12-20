const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

	constructor(flag) {
		if (flag === false) {
			this.isReverse = true;
		} else {
			this.isReverse = false;
		}
	}

	encrypt(message, key) {
		if (message === undefined || key === undefined) {
			throw new Error('Incorrect arguments!');
		}

		let result = '';
		let keyCounter = 0;
		message = message.toUpperCase();
		key = key.toUpperCase();

		for (let i = 0; i < message.length; i++) {
			let messageCharCode = message.charCodeAt(i);
			let keyCharCode = key.charCodeAt(keyCounter);
			let resultCharCode;

			if (messageCharCode >= 65 && messageCharCode <= 90) {
				resultCharCode = messageCharCode + (keyCharCode - 65);
				if (resultCharCode > 90) {
					resultCharCode -= 26;
				}
				keyCounter++;
			}
			else {
				resultCharCode = messageCharCode;
			}

			result += String.fromCharCode(resultCharCode);

			if (keyCounter === key.length) {
				keyCounter = 0;
			}
		}

		if (this.isReverse) {
			result = result
				.split('')
				.reverse()
				.join('');
		}

		return result;
	}

	decrypt(message, key) {
		if (message === undefined || key === undefined) {
			throw new Error('Incorrect arguments!');
		}

		message = message.toUpperCase();
		key = key.toUpperCase();
		let result = '';
		let keyCounter = 0;

		for (let i = 0; i < message.length; i++) {
			let messageCharCode = message.charCodeAt(i);
			let keyCharCode = key.charCodeAt(keyCounter);
			let resultCharCode;

			if (messageCharCode >= 65 && messageCharCode <= 90) {
				resultCharCode = messageCharCode - (keyCharCode - 65);
				if (resultCharCode < 65) {
					resultCharCode += 26;
				}
				keyCounter++;
			}
			else {
				resultCharCode = messageCharCode;
			}

			result += String.fromCharCode(resultCharCode);

			if (keyCounter === key.length) {
				keyCounter = 0;
			}
		}

		if (this.isReverse) {
			result = result
				.split('')
				.reverse()
				.join('');
		}

		return result;
	}
}

module.exports = {
	VigenereCipheringMachine
};


// let str = 'AEIHQX SX DLLU!'.split(' ').reverse();
// str = str.map(item => item.split('').reverse().join(''))
// console.log(str.join(' '))

// let string = 'aTtack at dawn!';
// let key = 'aLphonse';
// let test = 'pfpfp';

// console.log(string.charCodeAt(1))
// console.log(key.charCodeAt(1))
// console.log(test.charCodeAt())

// console.log(String.fromCharCode(65))

//encrypt: 84 + (76 - 65) = 95 > 90 => 95 - 26 = 69 - E || 67 + (79 - 65) = 81 < 90 => 81 - Q
//decrypt: 69 - (76 - 65) = 58 < 65 => 58 + 26 = 84 - T || 81 - (79 - 65) = 67 > 65 => 67 - C

//Большие буквы A - 65 код, Z - 90 код
//Маленькие буква a - 97 код, z - 122 код
// (letter >= 65 && letter <= 90) || (letter >= 97 && letter <= 122)
//У буквы ключа отнимаем код буквы Аа и складываем с неизменённым кодом буквы из сообщения
//Если после сложения сумма больше кода буквы Zz, отнимаем 26, это и будет кодом зашифрованной буквы
//Например mes = 't', key = 'l'; код t = 116, код l = 108 => 116 + (108 - 97) = 127; 127 > 122 => 127 - 26 = 101, это код буквы 'e' - наша закодированная буква

//Если не буква, то отнимаем у счётчика -1, если счётчик равен длине ключа, то делаем счётчик = -1, после выполнения всех действий в цикле

// let vig = new VigenereCipheringMachine();
// let vigReverse = new VigenereCipheringMachine(false);
// console.log(vig.encrypt('attack at dawn!', 'alphonse'))

// console.log(vig.decrypt('AEIHQX SX DLLU!', 'alphonse'))
// console.log(vig.decrypt('!ULLD XS XQHIEA', 'alphonse'))

// const testStr = 'attack at dawn!';
// const reversedTestStr = testStr.split('').reverse().join('');
// const testKey = 'alphonse';
// const encrypted = vigReverse.encrypt(reversedTestStr, testKey);
// const reversedEncrypted = encrypted.split('').reverse().join('');


// console.log(testStr, reversedTestStr);
// console.log()
// console.log(encrypted);
// console.log()
// console.log(reversedEncrypted);
// console.log()
// console.log(vigReverse.decrypt(reversedEncrypted, testKey))