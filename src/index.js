/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var result = 0;
  for(i = 0; i<preferences.length; i++) {
    var a = preferences[i], b = preferences[a-1], c = preferences[b-1];
    if(a < (i+1) || b < (i+1) || c < (i+1) || b == c) {
      continue; 
    }else if(c == i+1) {
      result++;
    }       
  }
  return result;
};
