function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    console.log(Math.min(height[left], height[right]));
    console.log((right - left));
    console.log(currentArea);
    maxArea = Math.max(currentArea, maxArea);
    console.log(maxArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(Math.min(1,7))

const maxArea1 = (height) => {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let currentArea = Math.min(height[left], height[right]) * (right - left);

    maxArea = Math.max(currentArea, maxArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

maxArea1([1,8,6,2,5,4,8,3,7]);
console.log(maxArea1([1,8,6,2,5,4,8,3,7]))