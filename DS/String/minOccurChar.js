let str = 'sssssdddddkkkkahhdbhbjdndkdskvhkudfb';

function minOcc(str) {
  let map = new Map();
  for (let el of str) {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
  }
  // console.log(map);
  let minOccur = Math.min();
  let leastOccChar = '';
  for (let i of map) {
    if (minOccur > i[1]) {
      minOccur = i[1];
      leastOccChar = i[0];
    }
  }
  return minOccur + ' ' + leastOccChar;
}

console.log(minOcc(str));
