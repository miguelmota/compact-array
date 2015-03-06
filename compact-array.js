(function(root) {

  function isTruthy(o) {
    return o;
  }

  function isFalsy(o) {
    return !isTruthy(o);
  }

  function isObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }

  function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
  }

  function isExisty(o) {
    return !(o === null || o === undefined);
  }

  function isString(o) {
    return typeof o === 'string' || o instanceof String;
  }

  function isEmpty(o) {
    if (!isExisty(o)) return true;
    if (isArray(o)) return o.length === 0;
    if (isObject(o)) return Object.keys(o).length === 0;
    if (isString(o)) return o.length === 0;
    return false;
  }

  function filter(col, fn) {
    return col.filter(fn);
  }

  function compactArray(o) {
    var ret = [];

    if (isArray(o)) {
      for (var i = 0; i < o.length; i++) {
        if (!isEmpty(o[i])) {
          if (isArray(o[i])) {
            ret.push(compactArray(o[i]));
          } else {
            ret.push(o[i]);
          }
        }
      }
    }
    return ret;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = compactArray;
    }
    exports.compactArray = compactArray;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return compactArray;
    });
  } else {
    root.compactArray = compactArray;
  }

})(this);
