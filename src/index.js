module.exports = function toReadable (number) {
  
  function getWord(num) {
    let res = '';
    switch(num) {
    case 0:  res = 'zero';  break;
    case 1:  res = 'one';   break;
    case 2:  res = 'two';   break;
    case 3:  res = 'three'; break;
    case 4:  res = 'four';  break;
    case 5:  res = 'five';  break;
    case 6:  res = 'six';   break;
    case 7:  res = 'seven'; break;
    case 8:  res = 'eight'; break;
    case 9:  res = 'nine';  break;
    case 10: res = 'ten';   break;
    case 11: res = 'eleven';   break;
    case 12: res = 'twelve';   break;
    case 13: res = 'thirteen'; break;
    case 14: res = 'fourteen'; break;
    case 15: res = 'fifteen';  break;
    case 16: res = 'sixteen';  break;
    case 17: res = 'seventeen';break;
    case 18: res = 'eighteen'; break;
    case 19: res = 'nineteen'; break;
    case 20: res = 'twenty';   break;
    case 30: res = 'thirty'; break;
    case 40: res = 'forty';  break;
    case 50: res = 'fifty';  break;
    case 60: res = 'sixty';  break;
    case 70: res = 'seventy';break;
    case 80: res = 'eighty'; break;
    case 90: res = 'ninety'; break;
    default: 'incorrect input';
    };
    return res
  }

  let result = '';
  number = ('00' + number.toString()).slice(-3);
  if (number[0] != 0) {
    result += getWord(Number(number[0].toString())) + ' hundred '
  };
  if (Number(number[1] + number[2]) > 0 && Number(number[1] + number[2]) <= 20) {
    result += getWord(Number(number[1] + number[2]))
  } else if (number[2] != 0) {
    result += getWord(Number(number[1] + '0')) + ' ' + getWord(Number(number[2]))
  } else if (number[2] == 0 && number[1] != 0) {
    result += getWord(Number(number[1] + '0'))
  } else if (number == 0) {
    result += getWord(0)
  } else result = result.slice(0, -1);
  return result
}
