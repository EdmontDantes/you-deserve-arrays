/******************
 * YOUR CODE HERE *
 ******************/
function getFirstItemFrom (array) {
  return array[0];
}

function getLastItemFrom (array) {
  return array.pop();
}

function getIndex3 (array) {
  if (array.length >= 4) {
  return array[3];
  } else if (array.length < 4) {
    return array.pop();
  }
}

function isLongList (array) {
  if (array.length >= 10) {
    return true;
  } else if (array.length < 10) {
    return false;
  }
}

function firstItemIsNumber (array) {
  if (typeof array[0] == 'number') {
    return true;
  } else if (isNaN(array[0])) {
    return false;
  } else if (typeof array[0] == 'string') {
    return false;
  } else if (typeof array[0] == 'boolean') {
    return false;
  } else if (typeof array[0] == 'function') {
    return false;
  } else if (typeof array[0] == 'object') {
    return false;
  }
}

function secondCharOfThirdString (array) {
  return array[2][1];
}


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
