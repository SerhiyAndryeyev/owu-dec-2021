// ----------------- additional-5 --------------------

// 1) - Дано натуральное число n.Выведите все числа от 1 до n.

console.log(' ----- Task-1 ------');
document.write('<div class="task"><em> ----- Task-1:</em></div>');

const showNumber = n => {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};

showNumber(7);
document.write(`<div>Натуральні числа  ==> (в консолі)</div>`);

// 2) - Даны два целых числа A и В.Выведите все числа от A до B включительно,
//    в порядке возрастания, если A < B, или в порядке убывания в противном случае.

console.log(' ----- Task-2 ------');
document.write('<div class="task"><em> ----- Task-2:</em></div>');

const showNumber2 = (a, b) => {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      console.log(i);
    }
  } else {
    for (let i = a; i >= b; i--) {
      console.log(i);
    }
  }
};

showNumber2(9, 2);
document.write(`<div>Цілі числа  ==> (в консолі)</div>`);

// 3) -   функція Приймає масив та число "i", та міняє місцями обєкт який знаходиться в індексі "i" на "i+1"
// EXAMPLE:
// foo([9, 8, 0, 4], 0); // ==> [ 8, 9, 0, 4 ]
// foo([9, 8, 0, 4], 1); // ==> [ 9 ,0, 8, 4 ]
// foo([9, 8, 0, 4], 2); // ==> [ 9, 8, 4, 0 ]

console.log(' ----- Task-3 ------');
document.write('<div class="task"><em> ----- Task-3:</em></div>');

const changeEl = (arr, i) => {
  let arr2 = [...arr];
  for (let k = 0; k < arr.length; k++) {
    if (k === i) [arr2[i], arr2[i + 1]] = [arr2[i + 1], arr2[i]];
  }
  return arr2;
};

document.write(`<div>Змінений масив: ${changeEl([9, 8, 0, 4], 2)}</div>`);

// 4) - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100;
// EXAMPLE:
// [1, 0, 6, 0, 3] => [1, 6, 3, 0, 0]
// [0, 1, 2, 3, 4] => [1, 2, 3, 4, 0]
// [0, 0, 1, 0]   => [1, 0, 0, 0]

console.log(' ----- Task-4 ------');
document.write('<div class="task"><em> ----- Task-4:</em></div>');


const changeArr = arr => {
  function countZero(arr) {
    let count0 = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) count0++;
    }
    return count0;
  };

  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;
    arr2.push(arr[i]);
  }

  let num0 = countZero(arr);

  while (num0 > 0) {
    arr2.push(0);
    num0--;
  }
  return arr2;
};

document.write(`<div>Змінений масив: ${changeArr([1, 0, 6, 0, 3])}</div>`);

console.log(' ----- END ------');
document.write('<div class="task"><em> ----- THE END ----- </em></div>');