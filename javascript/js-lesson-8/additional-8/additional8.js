// ----------------- additional-8 --------------------

// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

console.log(' ----- варіант-1 (рекурсія) ------');

// Це варіант з рекурсією, але тут рекурсія не потрібна
//- без рекурсії значно  простіше( варіант без рекурсії нижче)

const parentEl = document.body;
let classArr = [];

function findClasses(arr) {
  for (const el of arr) {
    if (el.classList.length) {
      console.log(Array.from(el.classList));
      classArr.push(...Array.from(el.classList));
    }
    if (el.children.length) {
      findClasses(el.children);
    }
  }

}

findClasses([parentEl]);
console.log(classArr);


console.log(' ----- варіант-2 (без рекурсії) ------');

const allEl2 = Array.from(document.querySelectorAll('*'));
let classArr2 = [];

function findClasses2(arr) {
  for (const el of arr) {
    if (el.classList.length) {
      console.log(Array.from(el.classList));
      classArr2.push(...el.classList);
    }
  }

}

findClasses2(allEl2);
console.log(classArr2);

console.log(' ----- END ------');