
exports.min = function min (numbers) {
  let result = 0;
  if (!Array.isArray(numbers) || numbers.length==0) {return result = 0
  } else for (let i=0; i<numbers.length; i++){
    if(numbers[i]<result){
      result = numbers[i]
    }
  }
  return result;
}

exports.max = function max (numbers) {
  let result = 0;
  if (!Array.isArray(numbers) || numbers.length==0) {return result = 0
  } else for (let i=0; i<numbers.length; i++){
    if(numbers[i]>result){
      result = numbers[i]
    }
  }
  return result;
}

exports.avg = function avg (numbers){
  let result = 0;
  if (!Array.isArray(numbers) || numbers.length==0) {return result = 0
  } else for (let i=0; i<numbers.length; i++){
    result+=numbers[i]
  }
  return result/numbers.length;
}
