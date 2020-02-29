
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for ( let i = 0 ; i<nums.length;i++){
        for ( let j = i+1 ;j<nums.length; j++){
            if( nums[i] + nums[j] === target ){
                return [ i , j]
            }
        }
    }
    
};

function solutionTwo (nums, target) {
   
    for(let i = 0; i < nums.length; i++)  {
        const num = target - nums[i]  ; 
        if (nums.indexOf(num,i+1)!= -1 ) {
                return [i, nums.indexOf(num,i+1)]
        }
    }
    return arr
};

function solutionThree(nums, target) {  
    let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let dif = target-nums[i]
    if (map.has(dif)) {
      return [map.get(dif), i]
    }
    map.set(nums[i], i);
  }
}
