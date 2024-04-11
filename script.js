//ex1

function printMyName() {
  const myName = 'Alona';
  console.log('EX1: ' + myName);
}
printMyName();
//ex2
function printAge() {
  const age = 25;
  console.log('EX2: ' + age);
}
printAge();
//ex3
function printDiff(juliaAge, myAge) {
  return Math.abs(myAge - juliaAge);
}
console.log('EX3: ' + printDiff(32, 25));

//ex4 num=21
function compareWithAge(num, age) {
  /*
  if (age >  num) {
    console.log('You are older than 21');
  } else {
    console.log('You are younger than 21');
  }*/

  return age > num
    ? console.log('You are older than 21')
    : console.log('You are younger than 21');
}
compareWithAge(21, 25);

//ex5
function compareAgeWithJulia(yourAge, juliaAge) {
  /* if (yourAge > juliaAge) {
    console.log('Julia is younger than you');
  } else if (juliaAge > yourAge) {
    console.log('Julia is older than you');
  } else {
    console.log('You have the same age as Julia');
  }*/
  return yourAge > juliaAge
    ? 'Julia is younger than you'
    : juliaAge > yourAge
    ? console.log('Julia is older than you')
    : console.log('You have the same age as Julia');
}
compareAgeWithJulia(25, 32);
//ex6
function showGroupMembers() {
  const group = [
    'Raul',
    'Alona',
    'Andrei',
    'Emily',
    'Heron',
    'Jost',
    'Su',
    'Oscar',
    'Vaclav',
    'Baseer',
    'Lucas',
    'Valeria',
  ];
  console.log('First group member ' + group[0]);
  console.log('Last group member ' + group[group.length - 1]);
  for (let i = 0; i < group.length; i++) {
    console.log('Group member: ' + group[i]);
  }
}
showGroupMembers();

//ex7.1
function showGroupMembersAge() {
  const group = [1, 2, 3, 4, 25, 36, 40];
  let i = 0;
  /*while (i < group.length) {
    console.log(i + 1 + '. ' + 'Group member age: ' + group[i]);
    i++;
  }*/
  for (i = 0; i < group.length; i++) {
    console.log(i + 1 + '. ' + 'Group member age: ' + group[i]);
  }
}
showGroupMembersAge();
//ex7.2
function showGroupMembersAgeEven() {
  const group = [1, 2, 3, 4, 25, 36, 40];

  let i = 0;
  /*  while (i < group.length) {
    if (group[i] % 2 === 0) {
      console.log(i + 1 + '. ' + 'Group member with even age: ' + group[i]);
    }
    i++;
  }*/

  for (i = 0; i < group.length; i++) {
    if (group[i] % 2 === 0) {
      console.log(i + 1 + '. ' + 'Group member with even age: ' + group[i]);
    }
  }
}
showGroupMembersAgeEven();

//ex8
function findSumArr(arr) {
  let sum = 0;
  //v1
  /*for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }*/
  //v2
  /*for (let arrElem of arr) {
    sum += arrElem;
  }*/
  //v3
  /* arr.forEach((arrElem) => {
    sum += arrElem;
  });*/
  //v4
  /* arr.map((arrElem) => {
    sum += arrElem;
  });*/
  //v5
  /*let i = 0;
  while (i !== arr.length) {
    sum += arr[i];
    i++;
  }*/
  //v6
  /* let i = 0;
  do {
    sum += arr[i];
    i++;
  } while (i !== arr.length);*/
  //v7
  console.log(
    'Sum of ages ' +
      arr.reduce((sum, current) => {
        return (sum += current);
      }, 0)
  );

  //console.log('Sum of ages ' + sum);
}
findSumArr([25, 10, 32]);
//ex9
function findSumArrEven(arr) {
  let sum = 0;
  //v1
  /*for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }*/

  //v2
  /*for (let arrElem of arr) {
    if (arrElem % 2 === 0) {
      sum += arrElem;
    }
  }*/
  //v3
  /*arr.forEach((arrElem) => {
    if (arrElem % 2 === 0) {
      sum += arrElem;
    }
  });*/
  //v4
  /*arr.map((arrElem) => {
    if (arrElem % 2 === 0) {
      sum += arrElem;
    }
  });*/
  //v5
  /*let i = 0;
  while (i !== arr.length) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
    i++;
  }*/
  //v6
  /*let i = 0;
  do {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
    i++;
  } while (i !== arr.length);*/
  //v7
  console.log(
    'Sum of even numbers: ' +
      arr.reduce((sum, current) => {
        if (current % 2 === 0) {
          return (sum += current);
        } else return sum;
      }, 0)
  );
  //console.log('Sum of even numbers: ' + sum);
}
findSumArrEven([1, 2, 8, 3, 2]);
//ex10
function findSumArrEvenPosition(arr) {
  let sum = 0;
  //v1
  /*for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sum += arr[i];
    }
  }*/
  //v2
  /*let i = 0;
  while (i !== arr.length) {
    if (i % 2 === 0) {
      sum += arr[i];
    }
    i++;
  }*/
  //v3
  /*let i = 0;
  do {
    if (i % 2 === 0) {
      sum += arr[i];
    }
    i++;
  } while (i !== arr.length);*/
  //v7
  console.log(
    'Sum of numbers of even position: ' +
      arr.reduce((sum, current, currentIndex) => {
        if (currentIndex % 2 === 0) {
          return (sum += current);
        } else return sum;
      }, 0)
  );
  //console.log('Sum of numbers of even position: ' + sum);
}
findSumArrEvenPosition([1, 2, 8, 3, 2, 3, 4]);
//ex11
function returnNothing(num1, num2) {
  console.log('Result of multiplication: ' + num1 * num2);
}
returnNothing(2, 3);
//ex12, ex13
function returnMultip(num1, num2) {
  return num1 * num2;
}
console.log('Result of multiplication: ' + returnMultip(4, 3));
//ex14
function determineTriangle(a, b, c) {
  /*if (a === b && a === c) {
    console.log('Equilateral');
  } else if (a === b || b === c || a === c) {
    console.log('Isosceles');
  } else {
    console.log('Scalene');
  }*/
  a === b && a === c
    ? console.log('Equilateral')
    : a === b || b === c || a === c
    ? console.log('Isosceles')
    : console.log('Scalene');
}
determineTriangle(10, 4, 5);
//ex15
function findMinArr(arr) {
  //v1
  //console.log(Math.min.apply(null, arr));
  let min = arr[0];
  //v2
  /*for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= min) {
      min = arr[i];
    }
  }*/
  //v3
  /*for (let arrElem of arr) {
    if (arrElem <= min) {
      min = arrElem;
    }
  }*/
  //v4
  /*arr.forEach((arrElem) => {
    if (arrElem <= min) {
      min = arrElem;
    }
  });*/
  //v5
  /*arr.map((arrElem) => {
    if (arrElem <= min) {
      min = arrElem;
    }
  });*/
  //v6
  /*let i = 0;
  while (i !== arr.length) {
    if (arr[i] <= min) {
      min = arr[i];
    }
    i++;
  }*/
  //v7
  /*let i = 0;
  do {
    if (arr[i] <= min) {
      min = arr[i];
    }
    i++;
  } while (i !== arr.length);*/
  //v8
  console.log(
    'Min number: ' +
      arr.reduce((min, current) => {
        if (current <= min) {
          return (min = current);
        } else return min;
      }, 0)
  );

  // console.log('Min number: ' + min);
}
findMinArr([2, 25, -1, 0, 7]);
//ex16
function findMaxArr(arr) {
  //v1
  //console.log(Math.max.apply(null, arr));
  let max = 0;
  //v2
  /*for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }*/
  //v3
  /*for (let arrElem of arr) {
    if (arrElem >= max) {
      max = arrElem;
    }
  }*/
  //v4
  /*arr.forEach((arrElem) => {
    if (arrElem >= max) {
      max = arrElem;
    }
  });*/
  //v5
  /* arr.map((arrElem) => {
    if (arrElem >= max) {
      max = arrElem;
    }
  });*/
  //v6
  /*let i = 0;
  while (i !== arr.length) {
    if (arr[i] >= max) {
      max = arr[i];
    }
    i++;
  }*/
  //v7
  /*let i = 0;
  do {
    if (arr[i] >= max) {
      max = arr[i];
    }
    i++;
  } while (i !== arr.length);*/
  //v8
  console.log(
    'Max number: ' +
      arr.reduce((max, current) => {
        if (current >= max) {
          return (max = current);
        } else return max;
      }, 0)
  );

  //console.log('Max number: ' + max);
}
findMaxArr([2, 25, 45, 1, 7]);
//ex17/
function printValueByIndex(arr, index) {
  console.log(`Elem on position ${index}: ` + arr[index]);
}
printValueByIndex(
  [
    3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12,
    99, 100,
  ],
  1
);
//ex18
function joinArr(arr) {
  //v1
  return console.log('Joined arr ex18: ' + arr.join(' '));
  //v2
  /*let joinedArr = '';
  for (let i = 0; i < arr.length; i++) {
    joinedArr = joinedArr + ' ' + arr[i];
  }
  return console.log('Joined arr ex18: ' + joinedArr);*/
}
joinArr(['Red', 'Green', 'White', 'Black']);
//ex19
function reverseNumb(num) {
  return parseInt(num.toString().split('').reverse().join(''));
  /*let numArr = num + '';
  let reversedArr = '';
  numArr = numArr.split('');
  for (let i = numArr.length - 1; i >= 0; i--) {
    reversedArr += numArr[i];
  }
  return parseInt(reversedArr);*/
}
console.log('Reverse ex19: ' + reverseNumb(32443));
//ex20
function returnAlphabetical(str) {
  return str
    .split('')
    .filter((symb) => /[a-zA-Z]/.test(symb))
    .sort()
    .join('');
  /*const symbArr = str.split('').filter((symb) => /[a-zA-Z]/.test(symb));
  const symbLength = symbArr.length;
  for (let i = 0; i < symbLength; i++) {
    for (let j = 0; j < symbLength - 1; j++) {
      if (symbArr[j] > symbArr[j + 1]) {
        const temp = symbArr[j];
        symbArr[j] = symbArr[j + 1];
        symbArr[j + 1] = temp;
      }
    }
  }
  return symbArr.join('');*/
}
console.log('Ex20: ' + returnAlphabetical('webmaster'));
//ex21
function findTheLongestWord(phrase) {
  const phraseArr = phrase.split(' ');
  let temp = '';
  //v1
  /*for (let i = 0; i < phraseArr.length - 1; i++) {
    if (phraseArr[i].length < phraseArr[i + 1].length) {
      temp = phraseArr[i + 1];
    }
  }*/
  //v2
  /*for (let word of phraseArr) {
    if (word.length > temp.length) {
      temp = word;
    }
  }*/
  //v3
  /*phraseArr.forEach((word) => {
    if (word.length > temp.length) {
      temp = word;
    }
  });

  return temp;*/
  return phraseArr.reduce((temp, current) => {
    return current.length > temp.length ? current : temp;
  }, '');
}
console.log('Ex21: ' + findTheLongestWord('Web Development Tutorial'));

//ex22
function replaceA(string) {
  string = string.split('');

  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      string[i] = 1;
    }
  }
  console.log(string.join(''));
}
replaceA('JavaScript');
//ex23
function convertToUppercase(str) {
  const string = str.split(' ');
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  return string.join(' ');
}
console.log(convertToUppercase('prince of persia'));
//ex24
function tellEvenBefore(num) {
  let arr = [];
  for (i = num; i >= 0; i--) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}
tellEvenBefore(9);

//ex25
function tellOddBetween(num1, num2) {
  let arr = [];
  for (i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log('EX25: ' + tellOddBetween(9, 22));
//ex26
function printRepeatNum(arr) {
  let uniqueArr = [];
  let repeatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    } else if (uniqueArr.includes(arr[i])) {
      repeatArr.push(arr[i]);
    }
  }
  return repeatArr;
}
console.log(
  'EX26: ' +
    printRepeatNum([
      3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12,
      99, 100,
    ])
);

//ex27
function myBandList(arr) {
  let bandList = document.getElementById('band-list');
  for (let i = 0; i < arr.length; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = arr[i];
    bandList.appendChild(newItem);
  }
}
myBandList(['Dire Straits', 'Kansas', 'Steely Dan']);
//ex28
function addMultTable(rows, cols) {
  let table = document.createElement('table');
  table.className = 'table';
  table.style.border = '1px solid black';
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');
      td.style.width = '70px';
      td.style.height = '30px';
      td.style.border = '1px solid black';
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}
addMultTable(4, 10);
