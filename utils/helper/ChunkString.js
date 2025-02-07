export const ChunkString = (string, n) => {
  var result = [];
  var i;
  var len;

  for (i = 0, len = string.length; i < len; i += n) {
    result.push(string.substr(i, n));
  }

  return result;
};
