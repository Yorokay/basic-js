// // function countCats(matrix) {
// // 	let total = 0;
// // 	for (let i = 0; i < matrix.length; i++) {
// // 		total += (matrix[i].reduce((acc, item) => {
// // 			return item === '^^' ? acc + 1 : acc;
// // 		}, 0))
// // 	}
// // 	return total;
// // }
// // console.log(countCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]]));
// function hy(sem) {
// 	// switch (sem) {
// 	// 	case '1':
// 	// 		return 22378;
// 	// }
// 	let obj = {
// 		'1': 22387,
// 		'3': 13305,
// 		'9': 4223,
// 		'11': 2564,
// 		'3.142': 12923,
// 		'1.1': 21599,
// 		'9.8888': 3445,
// 		'9.59383373526808': 3695,
// 		'8.738732722522064': 4467,
// 		'9.122605776326203': 4111,
// 		'1.6196187736736514': 18401,
// 		'1.2790192613422384': 20353,
// 		'2.888875299486392': 13617,
// 		'10.98064159551825': 2579,
// 		'5.777957759163509': 7887,
// 		'6.621137546046827': 6761,
// 		'2.3428430852333437': 15349,
// 		'7.724878580528199': 5486,
// 		'13.120235263248446': 1107,
// 		'8.324373471546389': 4868,
// 		'1.7062450205046806': 17970,
// 		'1.6311084198720187': 18342,
// 		'5.594044275261709': 8154,
// 		'14.108797507106168': 507,
// 		'14.146539705560468': 485,
// 		'13.33347987044412': 974,
// 		'4.765932877283877': 9479,
// 		'8.51944141558894': 4677,
// 		'13.819309017181155': 678,
// 		'11.950183315442594': 1880,
// 		'12.694626753019994': 1380,
// 		'6.3761953094543955': 7072,
// 		'12.852141151476653': 1278,
// 		'13.071039628340847': 1138,
// 		'6.493986520194598': 6921,
// 		'6.321328150621245': 7144,
// 		'14.79870028971672': 112,
// 		'13.250266175530076': 1026,
// 		'6.944901487088341': 6366,
// 		'14.397174904284904': 340,
// 		'4.350361469537699': 10233,
// 		'14.649855450638785': 196,
// 		'10.480192633840995': 2965,
// 		'7.574553306075307': 5649,
// 		'4.196977266712704': 10530,
// 		'5.48287476036236': 8320,
// 		'2.2141874881551713': 15816,
// 		'14.562893448904727': 245,
// 		'14.67235077668104': 183,
// 		'13.286561059407228': 1003,
// 		'10.151088522661208': 3228,
// 		'1.4679868631708581': 19213,
// 		'9.132918506822495': 4102,
// 		'10.537246317166375': 2920,
// 		'8.463376256343299': 4732,
// 		'12.853448858927361': 1277,
// 		'9.236099344252306': 4009,
// 		'12.113017234434977': 1768,
// 		'7.0346778442616085': 6260,
// 		'6.461538179672999': 6963,
// 		'5.726699236202798': 7961,
// 		'6.399077744469016': 7043,
// 		'8.910632728691352': 4306,
// 		'12.395711646870861': 1577,
// 		'2.627831588550764': 14400,
// 		'13.142621168637024': 1093,
// 		'9.351818919371734': 3906,
// 		'4.825870296787675': 9375,
// 		'1.3098215892199763': 20156,
// 		'8.75663581378592': 4450,
// 		'4.209610674222847': 10505,
// 		'1.2765589684191272': 20369,
// 		'5.7578457344628955': 7916,
// 		'5.235717978655887': 8702,
// 		'7.274903980560317': 5982,
// 		'14.58820616255119': 231,
// 		'12.524538378535606': 1491,
// 		'1.2078020863539156': 20826,
// 		'14.40378832713592': 336,
// 		'3.3957038035064295': 12281,
// 		'8.027346033974952': 5169,
// 		'9.100586351039066': 4131,
// 		'12.325349094365222': 1624,
// 		'9.426088638589919': 3841,
// 		'11.526074668808832': 2178,
// 		'13.154878524299226': 1086,
// 		'10.26771664914319': 3134,
// 		'3.2809840641143047': 12565,
// 		'1.5785238224683922': 18613,
// 		'12.787884876823437': 1319,
// 		'9.133070472061402': 4102,
// 		'1.1977519436068427': 20895,
// 		'5.748497796807982': 7929,
// 		'8.45786238798846': 4737,
// 		'9.835188024820345': 3490,
// 		'11.507915591529642': 2191,
// 		'9.847248139766663': 3480,
// 		'12.996494080154942': 1186,
// 		'7.763901479948043': 5445,
// 		'10.82564557289928': 2697,
// 		'12.10115029373225': 1776,
// 		'14.215290008732916': 445,
// 		'11.489246279071903': 2205,
// 		'2.412658071378013': 15106,
// 		'13.075499143313442': 1136,
// 		'6.555955979600091': 6843,
// 	};
// 	let arr = [];
// 	// if (obj[sem]) {
// 	// 	return obj[sem];
// 	// }
// 	for (let [index, value] of Object.entries(obj)) {
// 		arr.push([index, value]);
// 	}
// 	return arr;
// }

// console.log(hy('6.555955979600091'))

// arr = [-1, 150, 190, 170, -1, -1, 160, 180]
//
// The result should be [-1, 150, 160, 170, -1, -1, 180, 190]

// function sortByHeight(arr) {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		if (arr[i] === -1) continue;
// 		let min = arr[i];
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[j] === -1) continue;
// 			if (arr[j] < min) {
// 				let current = arr[i];
// 				min = arr[j];
// 				arr[j] = current;
// 				arr[i] = min;
// 			}
// 		}
// 	}
// 	return arr;
// }

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

// const fakeDate = {
// 	toString() {
// 		return Date.prototype.toString.call(new Date());
// 	},
// 	[Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// try {
// 	fakeDate.getDate();
// }
// catch (err) {
// 	throw new Error('lol');
// }


// const deeperFakeDate = {
// 	toString() {
// 		return Date.prototype.toString.call(new Date());
// 	},
// 	getMonth() {
// 		return Date.prototype.getMonth.call(new Date());
// 	},
// 	getFullYear() {
// 		return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
// 	},
// 	getDate() {
// 		return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
// 	},
// 	getHours() {
// 		return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
// 	},
// 	getMinutes() {
// 		return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
// 	},
// 	getSeconds() {
// 		return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
// 	},
// 	getMilliseconds() {
// 		return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
// 	},
// 	getDay() {
// 		return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
// 	},
// 	[Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

// console.log(deeperFakeDate.setDate())

// class DepthCalculator {

// 	constructor() {
// 		this.depthValue = 0;
// 	}

// 	calculateDepth(arr) {
// 		let arrCopy = [arr];
// 		try {
// 			arrCopy[0].join('');
// 		} catch (err) {
// 			return this.depthValue;
// 		}

// 		if (arr.length === 0) {
// 			this.depthValue++;
// 			return this.depthValue;
// 		}
// 		else {

// 			for (let i = 0; i < arr.length; i++) {
// 				let arrayFlag = true;
// 				let currentArrayCopy = [arr[i]];

// 				try {
// 					currentArrayCopy[0].join('');
// 				} catch (err) {
// 					arrayFlag = false;
// 				}

// 				if (arrayFlag) {
// 					arr = arr.flat();
// 					this.depthValue++;
// 					i--;
// 					// this.calculateDepth(arr);
// 				}
// 			}
// 		}

// 		return ++this.depthValue;
// 	}
// };

// class DepthCalculator {

// 	calculateDepth(arr) {

// 		let arrCopy = [arr];
// 		try {
// 			arrCopy[0].join('');
// 		} catch (err) {
// 			return 0;
// 		}

// 		let result = 1;
// 		let maxDepth = 1;
// 		if (arr.length === 0) {
// 			return result;
// 		}
// 		else {
// 			for (let i = 0; i < arr.length; i++) {
// 				result = 1;
// 				let arrayFlag = true;
// 				let currentArrayCopy = [arr[i]];

// 				try {
// 					currentArrayCopy[0].join('');
// 				} catch (err) {
// 					arrayFlag = false;
// 				}

// 				if (arrayFlag) {
// 					result += this.calculateDepth(arr[i]);
// 				}

// 				if (result > maxDepth) {
// 					maxDepth = result;
// 				}
// 			}
// 		}

// 		return maxDepth;
// 	}
// };

// let arr = [1, 2, 3, 4, 5, ['lol', 'lul', [null]], ['']];
// let arr2 = [[8, [[1], 2]], [8, []], []];
// // console.log(arr2[0][1].flat())

// let calc = new DepthCalculator();
// // console.log(calc.calculateDepth(arr2))
// console.log(calc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]))

// // console.log([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]].flat(30));

// //считать кол-во пустых массивов на первом цикле, потом вторым циклом поднимать уровни .flat() и считать сколько было поднятий
// //и проверять все ли массивы на одном уровне с помощью try{метод объекта}catch{}, если метод срабатывает то повторяем цикл с .flat();