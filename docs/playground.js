(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.temporal = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var BigInteger = createCommonjsModule(function (module) {
  var bigInt = (function (undefined$1) {

      var BASE = 1e7,
          LOG_BASE = 7,
          MAX_INT = 9007199254740992,
          MAX_INT_ARR = smallToArray(MAX_INT),
          DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";

      var supportsNativeBigInt = typeof BigInt === "function";

      function Integer(v, radix, alphabet, caseSensitive) {
          if (typeof v === "undefined") return Integer[0];
          if (typeof radix !== "undefined") return +radix === 10 && !alphabet ? parseValue(v) : parseBase(v, radix, alphabet, caseSensitive);
          return parseValue(v);
      }

      function BigInteger(value, sign) {
          this.value = value;
          this.sign = sign;
          this.isSmall = false;
      }
      BigInteger.prototype = Object.create(Integer.prototype);

      function SmallInteger(value) {
          this.value = value;
          this.sign = value < 0;
          this.isSmall = true;
      }
      SmallInteger.prototype = Object.create(Integer.prototype);

      function NativeBigInt(value) {
          this.value = value;
      }
      NativeBigInt.prototype = Object.create(Integer.prototype);

      function isPrecise(n) {
          return -MAX_INT < n && n < MAX_INT;
      }

      function smallToArray(n) { // For performance reasons doesn't reference BASE, need to change this function if BASE changes
          if (n < 1e7)
              return [n];
          if (n < 1e14)
              return [n % 1e7, Math.floor(n / 1e7)];
          return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
      }

      function arrayToSmall(arr) { // If BASE changes this function may need to change
          trim(arr);
          var length = arr.length;
          if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
              switch (length) {
                  case 0: return 0;
                  case 1: return arr[0];
                  case 2: return arr[0] + arr[1] * BASE;
                  default: return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
              }
          }
          return arr;
      }

      function trim(v) {
          var i = v.length;
          while (v[--i] === 0);
          v.length = i + 1;
      }

      function createArray(length) { // function shamelessly stolen from Yaffle's library https://github.com/Yaffle/BigInteger
          var x = new Array(length);
          var i = -1;
          while (++i < length) {
              x[i] = 0;
          }
          return x;
      }

      function truncate(n) {
          if (n > 0) return Math.floor(n);
          return Math.ceil(n);
      }

      function add(a, b) { // assumes a and b are arrays with a.length >= b.length
          var l_a = a.length,
              l_b = b.length,
              r = new Array(l_a),
              carry = 0,
              base = BASE,
              sum, i;
          for (i = 0; i < l_b; i++) {
              sum = a[i] + b[i] + carry;
              carry = sum >= base ? 1 : 0;
              r[i] = sum - carry * base;
          }
          while (i < l_a) {
              sum = a[i] + carry;
              carry = sum === base ? 1 : 0;
              r[i++] = sum - carry * base;
          }
          if (carry > 0) r.push(carry);
          return r;
      }

      function addAny(a, b) {
          if (a.length >= b.length) return add(a, b);
          return add(b, a);
      }

      function addSmall(a, carry) { // assumes a is array, carry is number with 0 <= carry < MAX_INT
          var l = a.length,
              r = new Array(l),
              base = BASE,
              sum, i;
          for (i = 0; i < l; i++) {
              sum = a[i] - base + carry;
              carry = Math.floor(sum / base);
              r[i] = sum - carry * base;
              carry += 1;
          }
          while (carry > 0) {
              r[i++] = carry % base;
              carry = Math.floor(carry / base);
          }
          return r;
      }

      BigInteger.prototype.add = function (v) {
          var n = parseValue(v);
          if (this.sign !== n.sign) {
              return this.subtract(n.negate());
          }
          var a = this.value, b = n.value;
          if (n.isSmall) {
              return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
          }
          return new BigInteger(addAny(a, b), this.sign);
      };
      BigInteger.prototype.plus = BigInteger.prototype.add;

      SmallInteger.prototype.add = function (v) {
          var n = parseValue(v);
          var a = this.value;
          if (a < 0 !== n.sign) {
              return this.subtract(n.negate());
          }
          var b = n.value;
          if (n.isSmall) {
              if (isPrecise(a + b)) return new SmallInteger(a + b);
              b = smallToArray(Math.abs(b));
          }
          return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
      };
      SmallInteger.prototype.plus = SmallInteger.prototype.add;

      NativeBigInt.prototype.add = function (v) {
          return new NativeBigInt(this.value + parseValue(v).value);
      };
      NativeBigInt.prototype.plus = NativeBigInt.prototype.add;

      function subtract(a, b) { // assumes a and b are arrays with a >= b
          var a_l = a.length,
              b_l = b.length,
              r = new Array(a_l),
              borrow = 0,
              base = BASE,
              i, difference;
          for (i = 0; i < b_l; i++) {
              difference = a[i] - borrow - b[i];
              if (difference < 0) {
                  difference += base;
                  borrow = 1;
              } else borrow = 0;
              r[i] = difference;
          }
          for (i = b_l; i < a_l; i++) {
              difference = a[i] - borrow;
              if (difference < 0) difference += base;
              else {
                  r[i++] = difference;
                  break;
              }
              r[i] = difference;
          }
          for (; i < a_l; i++) {
              r[i] = a[i];
          }
          trim(r);
          return r;
      }

      function subtractAny(a, b, sign) {
          var value;
          if (compareAbs(a, b) >= 0) {
              value = subtract(a, b);
          } else {
              value = subtract(b, a);
              sign = !sign;
          }
          value = arrayToSmall(value);
          if (typeof value === "number") {
              if (sign) value = -value;
              return new SmallInteger(value);
          }
          return new BigInteger(value, sign);
      }

      function subtractSmall(a, b, sign) { // assumes a is array, b is number with 0 <= b < MAX_INT
          var l = a.length,
              r = new Array(l),
              carry = -b,
              base = BASE,
              i, difference;
          for (i = 0; i < l; i++) {
              difference = a[i] + carry;
              carry = Math.floor(difference / base);
              difference %= base;
              r[i] = difference < 0 ? difference + base : difference;
          }
          r = arrayToSmall(r);
          if (typeof r === "number") {
              if (sign) r = -r;
              return new SmallInteger(r);
          } return new BigInteger(r, sign);
      }

      BigInteger.prototype.subtract = function (v) {
          var n = parseValue(v);
          if (this.sign !== n.sign) {
              return this.add(n.negate());
          }
          var a = this.value, b = n.value;
          if (n.isSmall)
              return subtractSmall(a, Math.abs(b), this.sign);
          return subtractAny(a, b, this.sign);
      };
      BigInteger.prototype.minus = BigInteger.prototype.subtract;

      SmallInteger.prototype.subtract = function (v) {
          var n = parseValue(v);
          var a = this.value;
          if (a < 0 !== n.sign) {
              return this.add(n.negate());
          }
          var b = n.value;
          if (n.isSmall) {
              return new SmallInteger(a - b);
          }
          return subtractSmall(b, Math.abs(a), a >= 0);
      };
      SmallInteger.prototype.minus = SmallInteger.prototype.subtract;

      NativeBigInt.prototype.subtract = function (v) {
          return new NativeBigInt(this.value - parseValue(v).value);
      };
      NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;

      BigInteger.prototype.negate = function () {
          return new BigInteger(this.value, !this.sign);
      };
      SmallInteger.prototype.negate = function () {
          var sign = this.sign;
          var small = new SmallInteger(-this.value);
          small.sign = !sign;
          return small;
      };
      NativeBigInt.prototype.negate = function () {
          return new NativeBigInt(-this.value);
      };

      BigInteger.prototype.abs = function () {
          return new BigInteger(this.value, false);
      };
      SmallInteger.prototype.abs = function () {
          return new SmallInteger(Math.abs(this.value));
      };
      NativeBigInt.prototype.abs = function () {
          return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
      };


      function multiplyLong(a, b) {
          var a_l = a.length,
              b_l = b.length,
              l = a_l + b_l,
              r = createArray(l),
              base = BASE,
              product, carry, i, a_i, b_j;
          for (i = 0; i < a_l; ++i) {
              a_i = a[i];
              for (var j = 0; j < b_l; ++j) {
                  b_j = b[j];
                  product = a_i * b_j + r[i + j];
                  carry = Math.floor(product / base);
                  r[i + j] = product - carry * base;
                  r[i + j + 1] += carry;
              }
          }
          trim(r);
          return r;
      }

      function multiplySmall(a, b) { // assumes a is array, b is number with |b| < BASE
          var l = a.length,
              r = new Array(l),
              base = BASE,
              carry = 0,
              product, i;
          for (i = 0; i < l; i++) {
              product = a[i] * b + carry;
              carry = Math.floor(product / base);
              r[i] = product - carry * base;
          }
          while (carry > 0) {
              r[i++] = carry % base;
              carry = Math.floor(carry / base);
          }
          return r;
      }

      function shiftLeft(x, n) {
          var r = [];
          while (n-- > 0) r.push(0);
          return r.concat(x);
      }

      function multiplyKaratsuba(x, y) {
          var n = Math.max(x.length, y.length);

          if (n <= 30) return multiplyLong(x, y);
          n = Math.ceil(n / 2);

          var b = x.slice(n),
              a = x.slice(0, n),
              d = y.slice(n),
              c = y.slice(0, n);

          var ac = multiplyKaratsuba(a, c),
              bd = multiplyKaratsuba(b, d),
              abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));

          var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
          trim(product);
          return product;
      }

      // The following function is derived from a surface fit of a graph plotting the performance difference
      // between long multiplication and karatsuba multiplication versus the lengths of the two arrays.
      function useKaratsuba(l1, l2) {
          return -0.012 * l1 - 0.012 * l2 + 0.000015 * l1 * l2 > 0;
      }

      BigInteger.prototype.multiply = function (v) {
          var n = parseValue(v),
              a = this.value, b = n.value,
              sign = this.sign !== n.sign,
              abs;
          if (n.isSmall) {
              if (b === 0) return Integer[0];
              if (b === 1) return this;
              if (b === -1) return this.negate();
              abs = Math.abs(b);
              if (abs < BASE) {
                  return new BigInteger(multiplySmall(a, abs), sign);
              }
              b = smallToArray(abs);
          }
          if (useKaratsuba(a.length, b.length)) // Karatsuba is only faster for certain array sizes
              return new BigInteger(multiplyKaratsuba(a, b), sign);
          return new BigInteger(multiplyLong(a, b), sign);
      };

      BigInteger.prototype.times = BigInteger.prototype.multiply;

      function multiplySmallAndArray(a, b, sign) { // a >= 0
          if (a < BASE) {
              return new BigInteger(multiplySmall(b, a), sign);
          }
          return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
      }
      SmallInteger.prototype._multiplyBySmall = function (a) {
          if (isPrecise(a.value * this.value)) {
              return new SmallInteger(a.value * this.value);
          }
          return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
      };
      BigInteger.prototype._multiplyBySmall = function (a) {
          if (a.value === 0) return Integer[0];
          if (a.value === 1) return this;
          if (a.value === -1) return this.negate();
          return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
      };
      SmallInteger.prototype.multiply = function (v) {
          return parseValue(v)._multiplyBySmall(this);
      };
      SmallInteger.prototype.times = SmallInteger.prototype.multiply;

      NativeBigInt.prototype.multiply = function (v) {
          return new NativeBigInt(this.value * parseValue(v).value);
      };
      NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;

      function square(a) {
          //console.assert(2 * BASE * BASE < MAX_INT);
          var l = a.length,
              r = createArray(l + l),
              base = BASE,
              product, carry, i, a_i, a_j;
          for (i = 0; i < l; i++) {
              a_i = a[i];
              carry = 0 - a_i * a_i;
              for (var j = i; j < l; j++) {
                  a_j = a[j];
                  product = 2 * (a_i * a_j) + r[i + j] + carry;
                  carry = Math.floor(product / base);
                  r[i + j] = product - carry * base;
              }
              r[i + l] = carry;
          }
          trim(r);
          return r;
      }

      BigInteger.prototype.square = function () {
          return new BigInteger(square(this.value), false);
      };

      SmallInteger.prototype.square = function () {
          var value = this.value * this.value;
          if (isPrecise(value)) return new SmallInteger(value);
          return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
      };

      NativeBigInt.prototype.square = function (v) {
          return new NativeBigInt(this.value * this.value);
      };

      function divMod1(a, b) { // Left over from previous version. Performs faster than divMod2 on smaller input sizes.
          var a_l = a.length,
              b_l = b.length,
              base = BASE,
              result = createArray(b.length),
              divisorMostSignificantDigit = b[b_l - 1],
              // normalization
              lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)),
              remainder = multiplySmall(a, lambda),
              divisor = multiplySmall(b, lambda),
              quotientDigit, shift, carry, borrow, i, l, q;
          if (remainder.length <= a_l) remainder.push(0);
          divisor.push(0);
          divisorMostSignificantDigit = divisor[b_l - 1];
          for (shift = a_l - b_l; shift >= 0; shift--) {
              quotientDigit = base - 1;
              if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
                  quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
              }
              // quotientDigit <= base - 1
              carry = 0;
              borrow = 0;
              l = divisor.length;
              for (i = 0; i < l; i++) {
                  carry += quotientDigit * divisor[i];
                  q = Math.floor(carry / base);
                  borrow += remainder[shift + i] - (carry - q * base);
                  carry = q;
                  if (borrow < 0) {
                      remainder[shift + i] = borrow + base;
                      borrow = -1;
                  } else {
                      remainder[shift + i] = borrow;
                      borrow = 0;
                  }
              }
              while (borrow !== 0) {
                  quotientDigit -= 1;
                  carry = 0;
                  for (i = 0; i < l; i++) {
                      carry += remainder[shift + i] - base + divisor[i];
                      if (carry < 0) {
                          remainder[shift + i] = carry + base;
                          carry = 0;
                      } else {
                          remainder[shift + i] = carry;
                          carry = 1;
                      }
                  }
                  borrow += carry;
              }
              result[shift] = quotientDigit;
          }
          // denormalization
          remainder = divModSmall(remainder, lambda)[0];
          return [arrayToSmall(result), arrayToSmall(remainder)];
      }

      function divMod2(a, b) { // Implementation idea shamelessly stolen from Silent Matt's library http://silentmatt.com/biginteger/
          // Performs faster than divMod1 on larger input sizes.
          var a_l = a.length,
              b_l = b.length,
              result = [],
              part = [],
              base = BASE,
              guess, xlen, highx, highy, check;
          while (a_l) {
              part.unshift(a[--a_l]);
              trim(part);
              if (compareAbs(part, b) < 0) {
                  result.push(0);
                  continue;
              }
              xlen = part.length;
              highx = part[xlen - 1] * base + part[xlen - 2];
              highy = b[b_l - 1] * base + b[b_l - 2];
              if (xlen > b_l) {
                  highx = (highx + 1) * base;
              }
              guess = Math.ceil(highx / highy);
              do {
                  check = multiplySmall(b, guess);
                  if (compareAbs(check, part) <= 0) break;
                  guess--;
              } while (guess);
              result.push(guess);
              part = subtract(part, check);
          }
          result.reverse();
          return [arrayToSmall(result), arrayToSmall(part)];
      }

      function divModSmall(value, lambda) {
          var length = value.length,
              quotient = createArray(length),
              base = BASE,
              i, q, remainder, divisor;
          remainder = 0;
          for (i = length - 1; i >= 0; --i) {
              divisor = remainder * base + value[i];
              q = truncate(divisor / lambda);
              remainder = divisor - q * lambda;
              quotient[i] = q | 0;
          }
          return [quotient, remainder | 0];
      }

      function divModAny(self, v) {
          var value, n = parseValue(v);
          if (supportsNativeBigInt) {
              return [new NativeBigInt(self.value / n.value), new NativeBigInt(self.value % n.value)];
          }
          var a = self.value, b = n.value;
          var quotient;
          if (b === 0) throw new Error("Cannot divide by zero");
          if (self.isSmall) {
              if (n.isSmall) {
                  return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
              }
              return [Integer[0], self];
          }
          if (n.isSmall) {
              if (b === 1) return [self, Integer[0]];
              if (b == -1) return [self.negate(), Integer[0]];
              var abs = Math.abs(b);
              if (abs < BASE) {
                  value = divModSmall(a, abs);
                  quotient = arrayToSmall(value[0]);
                  var remainder = value[1];
                  if (self.sign) remainder = -remainder;
                  if (typeof quotient === "number") {
                      if (self.sign !== n.sign) quotient = -quotient;
                      return [new SmallInteger(quotient), new SmallInteger(remainder)];
                  }
                  return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
              }
              b = smallToArray(abs);
          }
          var comparison = compareAbs(a, b);
          if (comparison === -1) return [Integer[0], self];
          if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];

          // divMod1 is faster on smaller input sizes
          if (a.length + b.length <= 200)
              value = divMod1(a, b);
          else value = divMod2(a, b);

          quotient = value[0];
          var qSign = self.sign !== n.sign,
              mod = value[1],
              mSign = self.sign;
          if (typeof quotient === "number") {
              if (qSign) quotient = -quotient;
              quotient = new SmallInteger(quotient);
          } else quotient = new BigInteger(quotient, qSign);
          if (typeof mod === "number") {
              if (mSign) mod = -mod;
              mod = new SmallInteger(mod);
          } else mod = new BigInteger(mod, mSign);
          return [quotient, mod];
      }

      BigInteger.prototype.divmod = function (v) {
          var result = divModAny(this, v);
          return {
              quotient: result[0],
              remainder: result[1]
          };
      };
      NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;


      BigInteger.prototype.divide = function (v) {
          return divModAny(this, v)[0];
      };
      NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function (v) {
          return new NativeBigInt(this.value / parseValue(v).value);
      };
      SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;

      BigInteger.prototype.mod = function (v) {
          return divModAny(this, v)[1];
      };
      NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function (v) {
          return new NativeBigInt(this.value % parseValue(v).value);
      };
      SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;

      BigInteger.prototype.pow = function (v) {
          var n = parseValue(v),
              a = this.value,
              b = n.value,
              value, x, y;
          if (b === 0) return Integer[1];
          if (a === 0) return Integer[0];
          if (a === 1) return Integer[1];
          if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
          if (n.sign) {
              return Integer[0];
          }
          if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
          if (this.isSmall) {
              if (isPrecise(value = Math.pow(a, b)))
                  return new SmallInteger(truncate(value));
          }
          x = this;
          y = Integer[1];
          while (true) {
              if (b & 1 === 1) {
                  y = y.times(x);
                  --b;
              }
              if (b === 0) break;
              b /= 2;
              x = x.square();
          }
          return y;
      };
      SmallInteger.prototype.pow = BigInteger.prototype.pow;

      NativeBigInt.prototype.pow = function (v) {
          var n = parseValue(v);
          var a = this.value, b = n.value;
          var _0 = BigInt(0), _1 = BigInt(1), _2 = BigInt(2);
          if (b === _0) return Integer[1];
          if (a === _0) return Integer[0];
          if (a === _1) return Integer[1];
          if (a === BigInt(-1)) return n.isEven() ? Integer[1] : Integer[-1];
          if (n.isNegative()) return new NativeBigInt(_0);
          var x = this;
          var y = Integer[1];
          while (true) {
              if ((b & _1) === _1) {
                  y = y.times(x);
                  --b;
              }
              if (b === _0) break;
              b /= _2;
              x = x.square();
          }
          return y;
      };

      BigInteger.prototype.modPow = function (exp, mod) {
          exp = parseValue(exp);
          mod = parseValue(mod);
          if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
          var r = Integer[1],
              base = this.mod(mod);
          if (exp.isNegative()) {
              exp = exp.multiply(Integer[-1]);
              base = base.modInv(mod);
          }
          while (exp.isPositive()) {
              if (base.isZero()) return Integer[0];
              if (exp.isOdd()) r = r.multiply(base).mod(mod);
              exp = exp.divide(2);
              base = base.square().mod(mod);
          }
          return r;
      };
      NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;

      function compareAbs(a, b) {
          if (a.length !== b.length) {
              return a.length > b.length ? 1 : -1;
          }
          for (var i = a.length - 1; i >= 0; i--) {
              if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
          }
          return 0;
      }

      BigInteger.prototype.compareAbs = function (v) {
          var n = parseValue(v),
              a = this.value,
              b = n.value;
          if (n.isSmall) return 1;
          return compareAbs(a, b);
      };
      SmallInteger.prototype.compareAbs = function (v) {
          var n = parseValue(v),
              a = Math.abs(this.value),
              b = n.value;
          if (n.isSmall) {
              b = Math.abs(b);
              return a === b ? 0 : a > b ? 1 : -1;
          }
          return -1;
      };
      NativeBigInt.prototype.compareAbs = function (v) {
          var a = this.value;
          var b = parseValue(v).value;
          a = a >= 0 ? a : -a;
          b = b >= 0 ? b : -b;
          return a === b ? 0 : a > b ? 1 : -1;
      };

      BigInteger.prototype.compare = function (v) {
          // See discussion about comparison with Infinity:
          // https://github.com/peterolson/BigInteger.js/issues/61
          if (v === Infinity) {
              return -1;
          }
          if (v === -Infinity) {
              return 1;
          }

          var n = parseValue(v),
              a = this.value,
              b = n.value;
          if (this.sign !== n.sign) {
              return n.sign ? 1 : -1;
          }
          if (n.isSmall) {
              return this.sign ? -1 : 1;
          }
          return compareAbs(a, b) * (this.sign ? -1 : 1);
      };
      BigInteger.prototype.compareTo = BigInteger.prototype.compare;

      SmallInteger.prototype.compare = function (v) {
          if (v === Infinity) {
              return -1;
          }
          if (v === -Infinity) {
              return 1;
          }

          var n = parseValue(v),
              a = this.value,
              b = n.value;
          if (n.isSmall) {
              return a == b ? 0 : a > b ? 1 : -1;
          }
          if (a < 0 !== n.sign) {
              return a < 0 ? -1 : 1;
          }
          return a < 0 ? 1 : -1;
      };
      SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;

      NativeBigInt.prototype.compare = function (v) {
          if (v === Infinity) {
              return -1;
          }
          if (v === -Infinity) {
              return 1;
          }
          var a = this.value;
          var b = parseValue(v).value;
          return a === b ? 0 : a > b ? 1 : -1;
      };
      NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;

      BigInteger.prototype.equals = function (v) {
          return this.compare(v) === 0;
      };
      NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;

      BigInteger.prototype.notEquals = function (v) {
          return this.compare(v) !== 0;
      };
      NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;

      BigInteger.prototype.greater = function (v) {
          return this.compare(v) > 0;
      };
      NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;

      BigInteger.prototype.lesser = function (v) {
          return this.compare(v) < 0;
      };
      NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;

      BigInteger.prototype.greaterOrEquals = function (v) {
          return this.compare(v) >= 0;
      };
      NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;

      BigInteger.prototype.lesserOrEquals = function (v) {
          return this.compare(v) <= 0;
      };
      NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;

      BigInteger.prototype.isEven = function () {
          return (this.value[0] & 1) === 0;
      };
      SmallInteger.prototype.isEven = function () {
          return (this.value & 1) === 0;
      };
      NativeBigInt.prototype.isEven = function () {
          return (this.value & BigInt(1)) === BigInt(0);
      };

      BigInteger.prototype.isOdd = function () {
          return (this.value[0] & 1) === 1;
      };
      SmallInteger.prototype.isOdd = function () {
          return (this.value & 1) === 1;
      };
      NativeBigInt.prototype.isOdd = function () {
          return (this.value & BigInt(1)) === BigInt(1);
      };

      BigInteger.prototype.isPositive = function () {
          return !this.sign;
      };
      SmallInteger.prototype.isPositive = function () {
          return this.value > 0;
      };
      NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;

      BigInteger.prototype.isNegative = function () {
          return this.sign;
      };
      SmallInteger.prototype.isNegative = function () {
          return this.value < 0;
      };
      NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;

      BigInteger.prototype.isUnit = function () {
          return false;
      };
      SmallInteger.prototype.isUnit = function () {
          return Math.abs(this.value) === 1;
      };
      NativeBigInt.prototype.isUnit = function () {
          return this.abs().value === BigInt(1);
      };

      BigInteger.prototype.isZero = function () {
          return false;
      };
      SmallInteger.prototype.isZero = function () {
          return this.value === 0;
      };
      NativeBigInt.prototype.isZero = function () {
          return this.value === BigInt(0);
      };

      BigInteger.prototype.isDivisibleBy = function (v) {
          var n = parseValue(v);
          if (n.isZero()) return false;
          if (n.isUnit()) return true;
          if (n.compareAbs(2) === 0) return this.isEven();
          return this.mod(n).isZero();
      };
      NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;

      function isBasicPrime(v) {
          var n = v.abs();
          if (n.isUnit()) return false;
          if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
          if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
          if (n.lesser(49)) return true;
          // we don't know if it's prime: let the other functions figure it out
      }

      function millerRabinTest(n, a) {
          var nPrev = n.prev(),
              b = nPrev,
              r = 0,
              d, i, x;
          while (b.isEven()) b = b.divide(2), r++;
          next: for (i = 0; i < a.length; i++) {
              if (n.lesser(a[i])) continue;
              x = bigInt(a[i]).modPow(b, n);
              if (x.isUnit() || x.equals(nPrev)) continue;
              for (d = r - 1; d != 0; d--) {
                  x = x.square().mod(n);
                  if (x.isUnit()) return false;
                  if (x.equals(nPrev)) continue next;
              }
              return false;
          }
          return true;
      }

      // Set "strict" to true to force GRH-supported lower bound of 2*log(N)^2
      BigInteger.prototype.isPrime = function (strict) {
          var isPrime = isBasicPrime(this);
          if (isPrime !== undefined$1) return isPrime;
          var n = this.abs();
          var bits = n.bitLength();
          if (bits <= 64)
              return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          var logN = Math.log(2) * bits.toJSNumber();
          var t = Math.ceil((strict === true) ? (2 * Math.pow(logN, 2)) : logN);
          for (var a = [], i = 0; i < t; i++) {
              a.push(bigInt(i + 2));
          }
          return millerRabinTest(n, a);
      };
      NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;

      BigInteger.prototype.isProbablePrime = function (iterations, rng) {
          var isPrime = isBasicPrime(this);
          if (isPrime !== undefined$1) return isPrime;
          var n = this.abs();
          var t = iterations === undefined$1 ? 5 : iterations;
          for (var a = [], i = 0; i < t; i++) {
              a.push(bigInt.randBetween(2, n.minus(2), rng));
          }
          return millerRabinTest(n, a);
      };
      NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;

      BigInteger.prototype.modInv = function (n) {
          var t = bigInt.zero, newT = bigInt.one, r = parseValue(n), newR = this.abs(), q, lastT, lastR;
          while (!newR.isZero()) {
              q = r.divide(newR);
              lastT = t;
              lastR = r;
              t = newT;
              r = newR;
              newT = lastT.subtract(q.multiply(newT));
              newR = lastR.subtract(q.multiply(newR));
          }
          if (!r.isUnit()) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
          if (t.compare(0) === -1) {
              t = t.add(n);
          }
          if (this.isNegative()) {
              return t.negate();
          }
          return t;
      };

      NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger.prototype.modInv;

      BigInteger.prototype.next = function () {
          var value = this.value;
          if (this.sign) {
              return subtractSmall(value, 1, this.sign);
          }
          return new BigInteger(addSmall(value, 1), this.sign);
      };
      SmallInteger.prototype.next = function () {
          var value = this.value;
          if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
          return new BigInteger(MAX_INT_ARR, false);
      };
      NativeBigInt.prototype.next = function () {
          return new NativeBigInt(this.value + BigInt(1));
      };

      BigInteger.prototype.prev = function () {
          var value = this.value;
          if (this.sign) {
              return new BigInteger(addSmall(value, 1), true);
          }
          return subtractSmall(value, 1, this.sign);
      };
      SmallInteger.prototype.prev = function () {
          var value = this.value;
          if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
          return new BigInteger(MAX_INT_ARR, true);
      };
      NativeBigInt.prototype.prev = function () {
          return new NativeBigInt(this.value - BigInt(1));
      };

      var powersOfTwo = [1];
      while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
      var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];

      function shift_isSmall(n) {
          return Math.abs(n) <= BASE;
      }

      BigInteger.prototype.shiftLeft = function (v) {
          var n = parseValue(v).toJSNumber();
          if (!shift_isSmall(n)) {
              throw new Error(String(n) + " is too large for shifting.");
          }
          if (n < 0) return this.shiftRight(-n);
          var result = this;
          if (result.isZero()) return result;
          while (n >= powers2Length) {
              result = result.multiply(highestPower2);
              n -= powers2Length - 1;
          }
          return result.multiply(powersOfTwo[n]);
      };
      NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;

      BigInteger.prototype.shiftRight = function (v) {
          var remQuo;
          var n = parseValue(v).toJSNumber();
          if (!shift_isSmall(n)) {
              throw new Error(String(n) + " is too large for shifting.");
          }
          if (n < 0) return this.shiftLeft(-n);
          var result = this;
          while (n >= powers2Length) {
              if (result.isZero() || (result.isNegative() && result.isUnit())) return result;
              remQuo = divModAny(result, highestPower2);
              result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
              n -= powers2Length - 1;
          }
          remQuo = divModAny(result, powersOfTwo[n]);
          return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
      };
      NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;

      function bitwise(x, y, fn) {
          y = parseValue(y);
          var xSign = x.isNegative(), ySign = y.isNegative();
          var xRem = xSign ? x.not() : x,
              yRem = ySign ? y.not() : y;
          var xDigit = 0, yDigit = 0;
          var xDivMod = null, yDivMod = null;
          var result = [];
          while (!xRem.isZero() || !yRem.isZero()) {
              xDivMod = divModAny(xRem, highestPower2);
              xDigit = xDivMod[1].toJSNumber();
              if (xSign) {
                  xDigit = highestPower2 - 1 - xDigit; // two's complement for negative numbers
              }

              yDivMod = divModAny(yRem, highestPower2);
              yDigit = yDivMod[1].toJSNumber();
              if (ySign) {
                  yDigit = highestPower2 - 1 - yDigit; // two's complement for negative numbers
              }

              xRem = xDivMod[0];
              yRem = yDivMod[0];
              result.push(fn(xDigit, yDigit));
          }
          var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
          for (var i = result.length - 1; i >= 0; i -= 1) {
              sum = sum.multiply(highestPower2).add(bigInt(result[i]));
          }
          return sum;
      }

      BigInteger.prototype.not = function () {
          return this.negate().prev();
      };
      NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;

      BigInteger.prototype.and = function (n) {
          return bitwise(this, n, function (a, b) { return a & b; });
      };
      NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;

      BigInteger.prototype.or = function (n) {
          return bitwise(this, n, function (a, b) { return a | b; });
      };
      NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;

      BigInteger.prototype.xor = function (n) {
          return bitwise(this, n, function (a, b) { return a ^ b; });
      };
      NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;

      var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
      function roughLOB(n) { // get lowestOneBit (rough)
          // SmallInteger: return Min(lowestOneBit(n), 1 << 30)
          // BigInteger: return Min(lowestOneBit(n), 1 << 14) [BASE=1e7]
          var v = n.value,
              x = typeof v === "number" ? v | LOBMASK_I :
                  typeof v === "bigint" ? v | BigInt(LOBMASK_I) :
                      v[0] + v[1] * BASE | LOBMASK_BI;
          return x & -x;
      }

      function integerLogarithm(value, base) {
          if (base.compareTo(value) <= 0) {
              var tmp = integerLogarithm(value, base.square(base));
              var p = tmp.p;
              var e = tmp.e;
              var t = p.multiply(base);
              return t.compareTo(value) <= 0 ? { p: t, e: e * 2 + 1 } : { p: p, e: e * 2 };
          }
          return { p: bigInt(1), e: 0 };
      }

      BigInteger.prototype.bitLength = function () {
          var n = this;
          if (n.compareTo(bigInt(0)) < 0) {
              n = n.negate().subtract(bigInt(1));
          }
          if (n.compareTo(bigInt(0)) === 0) {
              return bigInt(0);
          }
          return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
      };
      NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;

      function max(a, b) {
          a = parseValue(a);
          b = parseValue(b);
          return a.greater(b) ? a : b;
      }
      function min(a, b) {
          a = parseValue(a);
          b = parseValue(b);
          return a.lesser(b) ? a : b;
      }
      function gcd(a, b) {
          a = parseValue(a).abs();
          b = parseValue(b).abs();
          if (a.equals(b)) return a;
          if (a.isZero()) return b;
          if (b.isZero()) return a;
          var c = Integer[1], d, t;
          while (a.isEven() && b.isEven()) {
              d = min(roughLOB(a), roughLOB(b));
              a = a.divide(d);
              b = b.divide(d);
              c = c.multiply(d);
          }
          while (a.isEven()) {
              a = a.divide(roughLOB(a));
          }
          do {
              while (b.isEven()) {
                  b = b.divide(roughLOB(b));
              }
              if (a.greater(b)) {
                  t = b; b = a; a = t;
              }
              b = b.subtract(a);
          } while (!b.isZero());
          return c.isUnit() ? a : a.multiply(c);
      }
      function lcm(a, b) {
          a = parseValue(a).abs();
          b = parseValue(b).abs();
          return a.divide(gcd(a, b)).multiply(b);
      }
      function randBetween(a, b, rng) {
          a = parseValue(a);
          b = parseValue(b);
          var usedRNG = rng || Math.random;
          var low = min(a, b), high = max(a, b);
          var range = high.subtract(low).add(1);
          if (range.isSmall) return low.add(Math.floor(usedRNG() * range));
          var digits = toBase(range, BASE).value;
          var result = [], restricted = true;
          for (var i = 0; i < digits.length; i++) {
              var top = restricted ? digits[i] : BASE;
              var digit = truncate(usedRNG() * top);
              result.push(digit);
              if (digit < top) restricted = false;
          }
          return low.add(Integer.fromArray(result, BASE, false));
      }

      var parseBase = function (text, base, alphabet, caseSensitive) {
          alphabet = alphabet || DEFAULT_ALPHABET;
          text = String(text);
          if (!caseSensitive) {
              text = text.toLowerCase();
              alphabet = alphabet.toLowerCase();
          }
          var length = text.length;
          var i;
          var absBase = Math.abs(base);
          var alphabetValues = {};
          for (i = 0; i < alphabet.length; i++) {
              alphabetValues[alphabet[i]] = i;
          }
          for (i = 0; i < length; i++) {
              var c = text[i];
              if (c === "-") continue;
              if (c in alphabetValues) {
                  if (alphabetValues[c] >= absBase) {
                      if (c === "1" && absBase === 1) continue;
                      throw new Error(c + " is not a valid digit in base " + base + ".");
                  }
              }
          }
          base = parseValue(base);
          var digits = [];
          var isNegative = text[0] === "-";
          for (i = isNegative ? 1 : 0; i < text.length; i++) {
              var c = text[i];
              if (c in alphabetValues) digits.push(parseValue(alphabetValues[c]));
              else if (c === "<") {
                  var start = i;
                  do { i++; } while (text[i] !== ">" && i < text.length);
                  digits.push(parseValue(text.slice(start + 1, i)));
              }
              else throw new Error(c + " is not a valid character");
          }
          return parseBaseFromArray(digits, base, isNegative);
      };

      function parseBaseFromArray(digits, base, isNegative) {
          var val = Integer[0], pow = Integer[1], i;
          for (i = digits.length - 1; i >= 0; i--) {
              val = val.add(digits[i].times(pow));
              pow = pow.times(base);
          }
          return isNegative ? val.negate() : val;
      }

      function stringify(digit, alphabet) {
          alphabet = alphabet || DEFAULT_ALPHABET;
          if (digit < alphabet.length) {
              return alphabet[digit];
          }
          return "<" + digit + ">";
      }

      function toBase(n, base) {
          base = bigInt(base);
          if (base.isZero()) {
              if (n.isZero()) return { value: [0], isNegative: false };
              throw new Error("Cannot convert nonzero numbers to base 0.");
          }
          if (base.equals(-1)) {
              if (n.isZero()) return { value: [0], isNegative: false };
              if (n.isNegative())
                  return {
                      value: [].concat.apply([], Array.apply(null, Array(-n.toJSNumber()))
                          .map(Array.prototype.valueOf, [1, 0])
                      ),
                      isNegative: false
                  };

              var arr = Array.apply(null, Array(n.toJSNumber() - 1))
                  .map(Array.prototype.valueOf, [0, 1]);
              arr.unshift([1]);
              return {
                  value: [].concat.apply([], arr),
                  isNegative: false
              };
          }

          var neg = false;
          if (n.isNegative() && base.isPositive()) {
              neg = true;
              n = n.abs();
          }
          if (base.isUnit()) {
              if (n.isZero()) return { value: [0], isNegative: false };

              return {
                  value: Array.apply(null, Array(n.toJSNumber()))
                      .map(Number.prototype.valueOf, 1),
                  isNegative: neg
              };
          }
          var out = [];
          var left = n, divmod;
          while (left.isNegative() || left.compareAbs(base) >= 0) {
              divmod = left.divmod(base);
              left = divmod.quotient;
              var digit = divmod.remainder;
              if (digit.isNegative()) {
                  digit = base.minus(digit).abs();
                  left = left.next();
              }
              out.push(digit.toJSNumber());
          }
          out.push(left.toJSNumber());
          return { value: out.reverse(), isNegative: neg };
      }

      function toBaseString(n, base, alphabet) {
          var arr = toBase(n, base);
          return (arr.isNegative ? "-" : "") + arr.value.map(function (x) {
              return stringify(x, alphabet);
          }).join('');
      }

      BigInteger.prototype.toArray = function (radix) {
          return toBase(this, radix);
      };

      SmallInteger.prototype.toArray = function (radix) {
          return toBase(this, radix);
      };

      NativeBigInt.prototype.toArray = function (radix) {
          return toBase(this, radix);
      };

      BigInteger.prototype.toString = function (radix, alphabet) {
          if (radix === undefined$1) radix = 10;
          if (radix !== 10) return toBaseString(this, radix, alphabet);
          var v = this.value, l = v.length, str = String(v[--l]), zeros = "0000000", digit;
          while (--l >= 0) {
              digit = String(v[l]);
              str += zeros.slice(digit.length) + digit;
          }
          var sign = this.sign ? "-" : "";
          return sign + str;
      };

      SmallInteger.prototype.toString = function (radix, alphabet) {
          if (radix === undefined$1) radix = 10;
          if (radix != 10) return toBaseString(this, radix, alphabet);
          return String(this.value);
      };

      NativeBigInt.prototype.toString = SmallInteger.prototype.toString;

      NativeBigInt.prototype.toJSON = BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function () { return this.toString(); };

      BigInteger.prototype.valueOf = function () {
          return parseInt(this.toString(), 10);
      };
      BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;

      SmallInteger.prototype.valueOf = function () {
          return this.value;
      };
      SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
      NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function () {
          return parseInt(this.toString(), 10);
      };

      function parseStringValue(v) {
          if (isPrecise(+v)) {
              var x = +v;
              if (x === truncate(x))
                  return supportsNativeBigInt ? new NativeBigInt(BigInt(x)) : new SmallInteger(x);
              throw new Error("Invalid integer: " + v);
          }
          var sign = v[0] === "-";
          if (sign) v = v.slice(1);
          var split = v.split(/e/i);
          if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
          if (split.length === 2) {
              var exp = split[1];
              if (exp[0] === "+") exp = exp.slice(1);
              exp = +exp;
              if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
              var text = split[0];
              var decimalPlace = text.indexOf(".");
              if (decimalPlace >= 0) {
                  exp -= text.length - decimalPlace - 1;
                  text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
              }
              if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
              text += (new Array(exp + 1)).join("0");
              v = text;
          }
          var isValid = /^([0-9][0-9]*)$/.test(v);
          if (!isValid) throw new Error("Invalid integer: " + v);
          if (supportsNativeBigInt) {
              return new NativeBigInt(BigInt(sign ? "-" + v : v));
          }
          var r = [], max = v.length, l = LOG_BASE, min = max - l;
          while (max > 0) {
              r.push(+v.slice(min, max));
              min -= l;
              if (min < 0) min = 0;
              max -= l;
          }
          trim(r);
          return new BigInteger(r, sign);
      }

      function parseNumberValue(v) {
          if (supportsNativeBigInt) {
              return new NativeBigInt(BigInt(v));
          }
          if (isPrecise(v)) {
              if (v !== truncate(v)) throw new Error(v + " is not an integer.");
              return new SmallInteger(v);
          }
          return parseStringValue(v.toString());
      }

      function parseValue(v) {
          if (typeof v === "number") {
              return parseNumberValue(v);
          }
          if (typeof v === "string") {
              return parseStringValue(v);
          }
          if (typeof v === "bigint") {
              return new NativeBigInt(v);
          }
          return v;
      }
      // Pre-define numbers in range [-999,999]
      for (var i = 0; i < 1000; i++) {
          Integer[i] = parseValue(i);
          if (i > 0) Integer[-i] = parseValue(-i);
      }
      // Backwards compatibility
      Integer.one = Integer[1];
      Integer.zero = Integer[0];
      Integer.minusOne = Integer[-1];
      Integer.max = max;
      Integer.min = min;
      Integer.gcd = gcd;
      Integer.lcm = lcm;
      Integer.isInstance = function (x) { return x instanceof BigInteger || x instanceof SmallInteger || x instanceof NativeBigInt; };
      Integer.randBetween = randBetween;

      Integer.fromArray = function (digits, base, isNegative) {
          return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
      };

      return Integer;
  })();

  // Node.js check
  if ( module.hasOwnProperty("exports")) {
      module.exports = bigInt;
  }
  });

  /* eslint complexity: [2, 18], max-statements: [2, 33] */
  var shams = function hasSymbols() {
  	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
  	if (typeof Symbol.iterator === 'symbol') { return true; }

  	var obj = {};
  	var sym = Symbol('test');
  	var symObj = Object(sym);
  	if (typeof sym === 'string') { return false; }

  	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
  	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

  	// temp disabled per https://github.com/ljharb/object.assign/issues/17
  	// if (sym instanceof Symbol) { return false; }
  	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
  	// if (!(symObj instanceof Symbol)) { return false; }

  	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
  	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

  	var symVal = 42;
  	obj[sym] = symVal;
  	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
  	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

  	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

  	var syms = Object.getOwnPropertySymbols(obj);
  	if (syms.length !== 1 || syms[0] !== sym) { return false; }

  	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

  	if (typeof Object.getOwnPropertyDescriptor === 'function') {
  		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
  		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
  	}

  	return true;
  };

  var origSymbol = commonjsGlobal.Symbol;


  var hasSymbols = function hasNativeSymbols() {
  	if (typeof origSymbol !== 'function') { return false; }
  	if (typeof Symbol !== 'function') { return false; }
  	if (typeof origSymbol('foo') !== 'symbol') { return false; }
  	if (typeof Symbol('bar') !== 'symbol') { return false; }

  	return shams();
  };

  /* eslint no-invalid-this: 1 */

  var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
  var slice = Array.prototype.slice;
  var toStr = Object.prototype.toString;
  var funcType = '[object Function]';

  var implementation = function bind(that) {
      var target = this;
      if (typeof target !== 'function' || toStr.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);

      var bound;
      var binder = function () {
          if (this instanceof bound) {
              var result = target.apply(
                  this,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return this;
          } else {
              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );
          }
      };

      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
          boundArgs.push('$' + i);
      }

      bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

      if (target.prototype) {
          var Empty = function Empty() {};
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
      }

      return bound;
  };

  var functionBind = Function.prototype.bind || implementation;

  var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);

  /* globals
  	AggregateError,
  	Atomics,
  	FinalizationRegistry,
  	SharedArrayBuffer,
  	WeakRef,
  */

  var undefined$1;

  var $SyntaxError = SyntaxError;
  var $Function = Function;
  var $TypeError = TypeError;

  // eslint-disable-next-line consistent-return
  var getEvalledConstructor = function (expressionSyntax) {
  	try {
  		// eslint-disable-next-line no-new-func
  		return Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
  	} catch (e) {}
  };

  var $gOPD = Object.getOwnPropertyDescriptor;
  if ($gOPD) {
  	try {
  		$gOPD({}, '');
  	} catch (e) {
  		$gOPD = null; // this is IE 8, which has a broken gOPD
  	}
  }

  var throwTypeError = function () { throw new $TypeError(); };
  var ThrowTypeError = $gOPD
  	? (function () {
  		try {
  			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
  			arguments.callee; // IE 8 does not throw here
  			return throwTypeError;
  		} catch (calleeThrows) {
  			try {
  				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
  				return $gOPD(arguments, 'callee').get;
  			} catch (gOPDthrows) {
  				return throwTypeError;
  			}
  		}
  	}())
  	: throwTypeError;

  var hasSymbols$1 = hasSymbols();

  var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

  var asyncGenFunction = getEvalledConstructor('async function* () {}');
  var asyncGenFunctionPrototype = asyncGenFunction ? asyncGenFunction.prototype : undefined$1;
  var asyncGenPrototype = asyncGenFunctionPrototype ? asyncGenFunctionPrototype.prototype : undefined$1;

  var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);

  var INTRINSICS = {
  	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
  	'%Array%': Array,
  	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
  	'%ArrayIteratorPrototype%': hasSymbols$1 ? getProto([][Symbol.iterator]()) : undefined$1,
  	'%AsyncFromSyncIteratorPrototype%': undefined$1,
  	'%AsyncFunction%': getEvalledConstructor('async function () {}'),
  	'%AsyncGenerator%': asyncGenFunctionPrototype,
  	'%AsyncGeneratorFunction%': asyncGenFunction,
  	'%AsyncIteratorPrototype%': asyncGenPrototype ? getProto(asyncGenPrototype) : undefined$1,
  	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
  	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
  	'%Boolean%': Boolean,
  	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
  	'%Date%': Date,
  	'%decodeURI%': decodeURI,
  	'%decodeURIComponent%': decodeURIComponent,
  	'%encodeURI%': encodeURI,
  	'%encodeURIComponent%': encodeURIComponent,
  	'%Error%': Error,
  	'%eval%': eval, // eslint-disable-line no-eval
  	'%EvalError%': EvalError,
  	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
  	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
  	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
  	'%Function%': $Function,
  	'%GeneratorFunction%': getEvalledConstructor('function* () {}'),
  	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
  	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
  	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
  	'%isFinite%': isFinite,
  	'%isNaN%': isNaN,
  	'%IteratorPrototype%': hasSymbols$1 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
  	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
  	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
  	'%Math%': Math,
  	'%Number%': Number,
  	'%Object%': Object,
  	'%parseFloat%': parseFloat,
  	'%parseInt%': parseInt,
  	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
  	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
  	'%RangeError%': RangeError,
  	'%ReferenceError%': ReferenceError,
  	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
  	'%RegExp%': RegExp,
  	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
  	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
  	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
  	'%String%': String,
  	'%StringIteratorPrototype%': hasSymbols$1 ? getProto(''[Symbol.iterator]()) : undefined$1,
  	'%Symbol%': hasSymbols$1 ? Symbol : undefined$1,
  	'%SyntaxError%': $SyntaxError,
  	'%ThrowTypeError%': ThrowTypeError,
  	'%TypedArray%': TypedArray,
  	'%TypeError%': $TypeError,
  	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
  	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
  	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
  	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
  	'%URIError%': URIError,
  	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
  	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
  	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
  };

  var LEGACY_ALIASES = {
  	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
  	'%ArrayPrototype%': ['Array', 'prototype'],
  	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
  	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
  	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
  	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
  	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
  	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
  	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
  	'%BooleanPrototype%': ['Boolean', 'prototype'],
  	'%DataViewPrototype%': ['DataView', 'prototype'],
  	'%DatePrototype%': ['Date', 'prototype'],
  	'%ErrorPrototype%': ['Error', 'prototype'],
  	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
  	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
  	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
  	'%FunctionPrototype%': ['Function', 'prototype'],
  	'%Generator%': ['GeneratorFunction', 'prototype'],
  	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
  	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
  	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
  	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
  	'%JSONParse%': ['JSON', 'parse'],
  	'%JSONStringify%': ['JSON', 'stringify'],
  	'%MapPrototype%': ['Map', 'prototype'],
  	'%NumberPrototype%': ['Number', 'prototype'],
  	'%ObjectPrototype%': ['Object', 'prototype'],
  	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
  	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
  	'%PromisePrototype%': ['Promise', 'prototype'],
  	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
  	'%Promise_all%': ['Promise', 'all'],
  	'%Promise_reject%': ['Promise', 'reject'],
  	'%Promise_resolve%': ['Promise', 'resolve'],
  	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
  	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
  	'%RegExpPrototype%': ['RegExp', 'prototype'],
  	'%SetPrototype%': ['Set', 'prototype'],
  	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
  	'%StringPrototype%': ['String', 'prototype'],
  	'%SymbolPrototype%': ['Symbol', 'prototype'],
  	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
  	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
  	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
  	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
  	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
  	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
  	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
  	'%URIErrorPrototype%': ['URIError', 'prototype'],
  	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
  	'%WeakSetPrototype%': ['WeakSet', 'prototype']
  };



  var $concat = functionBind.call(Function.call, Array.prototype.concat);
  var $spliceApply = functionBind.call(Function.apply, Array.prototype.splice);
  var $replace = functionBind.call(Function.call, String.prototype.replace);

  /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
  var stringToPath = function stringToPath(string) {
  	var result = [];
  	$replace(string, rePropName, function (match, number, quote, subString) {
  		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
  	});
  	return result;
  };
  /* end adaptation */

  var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
  	var intrinsicName = name;
  	var alias;
  	if (src(LEGACY_ALIASES, intrinsicName)) {
  		alias = LEGACY_ALIASES[intrinsicName];
  		intrinsicName = '%' + alias[0] + '%';
  	}

  	if (src(INTRINSICS, intrinsicName)) {
  		var value = INTRINSICS[intrinsicName];
  		if (typeof value === 'undefined' && !allowMissing) {
  			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
  		}

  		return {
  			alias: alias,
  			name: intrinsicName,
  			value: value
  		};
  	}

  	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
  };

  var GetIntrinsic = function GetIntrinsic(name, allowMissing) {
  	if (typeof name !== 'string' || name.length === 0) {
  		throw new $TypeError('intrinsic name must be a non-empty string');
  	}
  	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
  		throw new $TypeError('"allowMissing" argument must be a boolean');
  	}

  	var parts = stringToPath(name);
  	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

  	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
  	var intrinsicRealName = intrinsic.name;
  	var value = intrinsic.value;
  	var skipFurtherCaching = false;

  	var alias = intrinsic.alias;
  	if (alias) {
  		intrinsicBaseName = alias[0];
  		$spliceApply(parts, $concat([0, 1], alias));
  	}

  	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
  		var part = parts[i];
  		if (part === 'constructor' || !isOwn) {
  			skipFurtherCaching = true;
  		}

  		intrinsicBaseName += '.' + part;
  		intrinsicRealName = '%' + intrinsicBaseName + '%';

  		if (src(INTRINSICS, intrinsicRealName)) {
  			value = INTRINSICS[intrinsicRealName];
  		} else if (value != null) {
  			if ($gOPD && (i + 1) >= parts.length) {
  				var desc = $gOPD(value, part);
  				isOwn = !!desc;

  				if (!allowMissing && !(part in value)) {
  					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
  				}
  				// By convention, when a data property is converted to an accessor
  				// property to emulate a data property that does not suffer from
  				// the override mistake, that accessor's getter is marked with
  				// an `originalValue` property. Here, when we detect this, we
  				// uphold the illusion by pretending to see that original data
  				// property, i.e., returning the value rather than the getter
  				// itself.
  				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
  					value = desc.get;
  				} else {
  					value = value[part];
  				}
  			} else {
  				isOwn = src(value, part);
  				value = value[part];
  			}

  			if (isOwn && !skipFurtherCaching) {
  				INTRINSICS[intrinsicRealName] = value;
  			}
  		}
  	}
  	return value;
  };

  var callBind = createCommonjsModule(function (module) {





  var $apply = GetIntrinsic('%Function.prototype.apply%');
  var $call = GetIntrinsic('%Function.prototype.call%');
  var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || functionBind.call($call, $apply);

  var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

  if ($defineProperty) {
  	try {
  		$defineProperty({}, 'a', { value: 1 });
  	} catch (e) {
  		// IE 8 has a broken defineProperty
  		$defineProperty = null;
  	}
  }

  module.exports = function callBind() {
  	return $reflectApply(functionBind, $call, arguments);
  };

  var applyBind = function applyBind() {
  	return $reflectApply(functionBind, $apply, arguments);
  };

  if ($defineProperty) {
  	$defineProperty(module.exports, 'apply', { value: applyBind });
  } else {
  	module.exports.apply = applyBind;
  }
  });

  var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

  var callBound = function callBoundIntrinsic(name, allowMissing) {
  	var intrinsic = GetIntrinsic(name, !!allowMissing);
  	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
  		return callBind(intrinsic);
  	}
  	return intrinsic;
  };

  var $apply = GetIntrinsic('%Reflect.apply%', true) || callBound('%Function.prototype.apply%');

  // https://www.ecma-international.org/ecma-262/6.0/#sec-call

  var Call = function Call(F, V) {
  	var args = arguments.length > 2 ? arguments[2] : [];
  	return $apply(F, V, args);
  };

  var $TypeError$1 = GetIntrinsic('%TypeError%');

  var isPropertyDescriptor = function IsPropertyDescriptor(ES, Desc) {
  	if (ES.Type(Desc) !== 'Object') {
  		return false;
  	}
  	var allowed = {
  		'[[Configurable]]': true,
  		'[[Enumerable]]': true,
  		'[[Get]]': true,
  		'[[Set]]': true,
  		'[[Value]]': true,
  		'[[Writable]]': true
  	};

  	for (var key in Desc) { // eslint-disable-line no-restricted-syntax
  		if (src(Desc, key) && !allowed[key]) {
  			return false;
  		}
  	}

  	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
  		throw new $TypeError$1('Property Descriptors may not be both accessor and data descriptors');
  	}
  	return true;
  };

  var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

  if ($defineProperty) {
  	try {
  		$defineProperty({}, 'a', { value: 1 });
  	} catch (e) {
  		// IE 8 has a broken defineProperty
  		$defineProperty = null;
  	}
  }



  var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

  // eslint-disable-next-line max-params
  var DefineOwnProperty = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
  	if (!$defineProperty) {
  		if (!IsDataDescriptor(desc)) {
  			// ES3 does not support getters/setters
  			return false;
  		}
  		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
  			return false;
  		}

  		// fallback for ES3
  		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
  			// a non-enumerable existing property
  			return false;
  		}

  		// property does not exist at all, or exists but is enumerable
  		var V = desc['[[Value]]'];
  		// eslint-disable-next-line no-param-reassign
  		O[P] = V; // will use [[Define]]
  		return SameValue(O[P], V);
  	}
  	$defineProperty(O, P, FromPropertyDescriptor(desc));
  	return true;
  };

  var $TypeError$2 = GetIntrinsic('%TypeError%');
  var $SyntaxError$1 = GetIntrinsic('%SyntaxError%');



  var predicates = {
  	// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
  	'Property Descriptor': function isPropertyDescriptor(Type, Desc) {
  		if (Type(Desc) !== 'Object') {
  			return false;
  		}
  		var allowed = {
  			'[[Configurable]]': true,
  			'[[Enumerable]]': true,
  			'[[Get]]': true,
  			'[[Set]]': true,
  			'[[Value]]': true,
  			'[[Writable]]': true
  		};

  		for (var key in Desc) { // eslint-disable-line
  			if (src(Desc, key) && !allowed[key]) {
  				return false;
  			}
  		}

  		var isData = src(Desc, '[[Value]]');
  		var IsAccessor = src(Desc, '[[Get]]') || src(Desc, '[[Set]]');
  		if (isData && IsAccessor) {
  			throw new $TypeError$2('Property Descriptors may not be both accessor and data descriptors');
  		}
  		return true;
  	}
  };

  var assertRecord = function assertRecord(Type, recordType, argumentName, value) {
  	var predicate = predicates[recordType];
  	if (typeof predicate !== 'function') {
  		throw new $SyntaxError$1('unknown record type: ' + recordType);
  	}
  	if (!predicate(Type, value)) {
  		throw new $TypeError$2(argumentName + ' must be a ' + recordType);
  	}
  };

  // https://www.ecma-international.org/ecma-262/5.1/#sec-8

  var Type = function Type(x) {
  	if (x === null) {
  		return 'Null';
  	}
  	if (typeof x === 'undefined') {
  		return 'Undefined';
  	}
  	if (typeof x === 'function' || typeof x === 'object') {
  		return 'Object';
  	}
  	if (typeof x === 'number') {
  		return 'Number';
  	}
  	if (typeof x === 'boolean') {
  		return 'Boolean';
  	}
  	if (typeof x === 'string') {
  		return 'String';
  	}
  };

  // https://tc39.es/ecma262/2020/#sec-ecmascript-data-types-and-values

  var Type$1 = function Type$1(x) {
  	if (typeof x === 'symbol') {
  		return 'Symbol';
  	}
  	if (typeof x === 'bigint') {
  		return 'BigInt';
  	}
  	return Type(x);
  };

  // https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

  var FromPropertyDescriptor = function FromPropertyDescriptor(Desc) {
  	if (typeof Desc === 'undefined') {
  		return Desc;
  	}

  	assertRecord(Type$1, 'Property Descriptor', 'Desc', Desc);

  	var obj = {};
  	if ('[[Value]]' in Desc) {
  		obj.value = Desc['[[Value]]'];
  	}
  	if ('[[Writable]]' in Desc) {
  		obj.writable = Desc['[[Writable]]'];
  	}
  	if ('[[Get]]' in Desc) {
  		obj.get = Desc['[[Get]]'];
  	}
  	if ('[[Set]]' in Desc) {
  		obj.set = Desc['[[Set]]'];
  	}
  	if ('[[Enumerable]]' in Desc) {
  		obj.enumerable = Desc['[[Enumerable]]'];
  	}
  	if ('[[Configurable]]' in Desc) {
  		obj.configurable = Desc['[[Configurable]]'];
  	}
  	return obj;
  };

  // https://www.ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

  var IsAccessorDescriptor = function IsAccessorDescriptor(Desc) {
  	if (typeof Desc === 'undefined') {
  		return false;
  	}

  	assertRecord(Type$1, 'Property Descriptor', 'Desc', Desc);

  	if (!src(Desc, '[[Get]]') && !src(Desc, '[[Set]]')) {
  		return false;
  	}

  	return true;
  };

  // https://www.ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

  var IsDataDescriptor = function IsDataDescriptor(Desc) {
  	if (typeof Desc === 'undefined') {
  		return false;
  	}

  	assertRecord(Type$1, 'Property Descriptor', 'Desc', Desc);

  	if (!src(Desc, '[[Value]]') && !src(Desc, '[[Writable]]')) {
  		return false;
  	}

  	return true;
  };

  // https://www.ecma-international.org/ecma-262/6.0/#sec-ispropertykey

  var IsPropertyKey = function IsPropertyKey(argument) {
  	return typeof argument === 'string' || typeof argument === 'symbol';
  };

  var _isNaN = Number.isNaN || function isNaN(a) {
  	return a !== a;
  };

  // http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

  var SameValue = function SameValue(x, y) {
  	if (x === y) { // 0 === -0, but they are not identical.
  		if (x === 0) { return 1 / x === 1 / y; }
  		return true;
  	}
  	return _isNaN(x) && _isNaN(y);
  };

  // http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

  var ToBoolean = function ToBoolean(value) { return !!value; };

  var fnToStr = Function.prototype.toString;
  var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
  var badArrayLike;
  var isCallableMarker;
  if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
  	try {
  		badArrayLike = Object.defineProperty({}, 'length', {
  			get: function () {
  				throw isCallableMarker;
  			}
  		});
  		isCallableMarker = {};
  		// eslint-disable-next-line no-throw-literal
  		reflectApply(function () { throw 42; }, null, badArrayLike);
  	} catch (_) {
  		if (_ !== isCallableMarker) {
  			reflectApply = null;
  		}
  	}
  } else {
  	reflectApply = null;
  }

  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value) {
  	try {
  		var fnStr = fnToStr.call(value);
  		return constructorRegex.test(fnStr);
  	} catch (e) {
  		return false; // not a function
  	}
  };

  var tryFunctionObject = function tryFunctionToStr(value) {
  	try {
  		if (isES6ClassFn(value)) { return false; }
  		fnToStr.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };
  var toStr$1 = Object.prototype.toString;
  var fnClass = '[object Function]';
  var genClass = '[object GeneratorFunction]';
  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  var isCallable = reflectApply
  	? function isCallable(value) {
  		if (!value) { return false; }
  		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
  		if (typeof value === 'function' && !value.prototype) { return true; }
  		try {
  			reflectApply(value, null, badArrayLike);
  		} catch (e) {
  			if (e !== isCallableMarker) { return false; }
  		}
  		return !isES6ClassFn(value);
  	}
  	: function isCallable(value) {
  		if (!value) { return false; }
  		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
  		if (typeof value === 'function' && !value.prototype) { return true; }
  		if (hasToStringTag) { return tryFunctionObject(value); }
  		if (isES6ClassFn(value)) { return false; }
  		var strClass = toStr$1.call(value);
  		return strClass === fnClass || strClass === genClass;
  	};

  // http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

  var IsCallable = isCallable;

  var $TypeError$3 = GetIntrinsic('%TypeError%');





  // https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

  var ToPropertyDescriptor = function ToPropertyDescriptor(Obj) {
  	if (Type$1(Obj) !== 'Object') {
  		throw new $TypeError$3('ToPropertyDescriptor requires an object');
  	}

  	var desc = {};
  	if (src(Obj, 'enumerable')) {
  		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
  	}
  	if (src(Obj, 'configurable')) {
  		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
  	}
  	if (src(Obj, 'value')) {
  		desc['[[Value]]'] = Obj.value;
  	}
  	if (src(Obj, 'writable')) {
  		desc['[[Writable]]'] = ToBoolean(Obj.writable);
  	}
  	if (src(Obj, 'get')) {
  		var getter = Obj.get;
  		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
  			throw new $TypeError$3('getter must be a function');
  		}
  		desc['[[Get]]'] = getter;
  	}
  	if (src(Obj, 'set')) {
  		var setter = Obj.set;
  		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
  			throw new $TypeError$3('setter must be a function');
  		}
  		desc['[[Set]]'] = setter;
  	}

  	if ((src(desc, '[[Get]]') || src(desc, '[[Set]]')) && (src(desc, '[[Value]]') || src(desc, '[[Writable]]'))) {
  		throw new $TypeError$3('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  	}
  	return desc;
  };

  var $TypeError$4 = GetIntrinsic('%TypeError%');












  // https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

  var DefinePropertyOrThrow = function DefinePropertyOrThrow(O, P, desc) {
  	if (Type$1(O) !== 'Object') {
  		throw new $TypeError$4('Assertion failed: Type(O) is not Object');
  	}

  	if (!IsPropertyKey(P)) {
  		throw new $TypeError$4('Assertion failed: IsPropertyKey(P) is not true');
  	}

  	var Desc = isPropertyDescriptor({
  		Type: Type$1,
  		IsDataDescriptor: IsDataDescriptor,
  		IsAccessorDescriptor: IsAccessorDescriptor
  	}, desc) ? desc : ToPropertyDescriptor(desc);
  	if (!isPropertyDescriptor({
  		Type: Type$1,
  		IsDataDescriptor: IsDataDescriptor,
  		IsAccessorDescriptor: IsAccessorDescriptor
  	}, Desc)) {
  		throw new $TypeError$4('Assertion failed: Desc is not a valid Property Descriptor');
  	}

  	return DefineOwnProperty(
  		IsDataDescriptor,
  		SameValue,
  		FromPropertyDescriptor,
  		O,
  		P,
  		Desc
  	);
  };

  var IsConstructor = createCommonjsModule(function (module) {



  var $construct = GetIntrinsic('%Reflect.construct%', true);

  var DefinePropertyOrThrow$1 = DefinePropertyOrThrow;
  try {
  	DefinePropertyOrThrow$1({}, '', { '[[Get]]': function () {} });
  } catch (e) {
  	// Accessor properties aren't supported
  	DefinePropertyOrThrow$1 = null;
  }

  // https://www.ecma-international.org/ecma-262/6.0/#sec-isconstructor

  if (DefinePropertyOrThrow$1 && $construct) {
  	var isConstructorMarker = {};
  	var badArrayLike = {};
  	DefinePropertyOrThrow$1(badArrayLike, 'length', {
  		'[[Get]]': function () {
  			throw isConstructorMarker;
  		},
  		'[[Enumerable]]': true
  	});

  	module.exports = function IsConstructor(argument) {
  		try {
  			// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
  			$construct(argument, badArrayLike);
  		} catch (err) {
  			return err === isConstructorMarker;
  		}
  	};
  } else {
  	module.exports = function IsConstructor(argument) {
  		// unfortunately there's no way to truly check this without try/catch `new argument` in old environments
  		return typeof argument === 'function' && !!argument.prototype;
  	};
  }
  });

  var $species = GetIntrinsic('%Symbol.species%', true);
  var $TypeError$5 = GetIntrinsic('%TypeError%');




  // https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor

  var SpeciesConstructor = function SpeciesConstructor(O, defaultConstructor) {
  	if (Type$1(O) !== 'Object') {
  		throw new $TypeError$5('Assertion failed: Type(O) is not Object');
  	}
  	var C = O.constructor;
  	if (typeof C === 'undefined') {
  		return defaultConstructor;
  	}
  	if (Type$1(C) !== 'Object') {
  		throw new $TypeError$5('O.constructor is not an Object');
  	}
  	var S = $species ? C[$species] : void 0;
  	if (S == null) {
  		return defaultConstructor;
  	}
  	if (IsConstructor(S)) {
  		return S;
  	}
  	throw new $TypeError$5('no constructor found');
  };

  var $abs = GetIntrinsic('%Math.abs%');

  // http://www.ecma-international.org/ecma-262/5.1/#sec-5.2

  var abs = function abs(x) {
  	return $abs(x);
  };

  // var modulo = require('./modulo');
  var $floor = Math.floor;

  // http://www.ecma-international.org/ecma-262/5.1/#sec-5.2

  var floor = function floor(x) {
  	// return x - modulo(x, 1);
  	return $floor(x);
  };

  // http://www.ecma-international.org/ecma-262/5.1/#sec-9.3

  var ToNumber = function ToNumber(value) {
  	return +value; // eslint-disable-line no-implicit-coercion
  };

  var $isNaN = Number.isNaN || function (a) { return a !== a; };

  var _isFinite = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };

  var sign = function sign(number) {
  	return number >= 0 ? 1 : -1;
  };

  // http://www.ecma-international.org/ecma-262/5.1/#sec-9.4

  var ToInteger = function ToInteger(value) {
  	var number = ToNumber(value);
  	if (_isNaN(number)) { return 0; }
  	if (number === 0 || !_isFinite(number)) { return number; }
  	return sign(number) * floor(abs(number));
  };

  var $test = GetIntrinsic('RegExp.prototype.test');



  var regexTester = function regexTester(regex) {
  	return callBind($test, regex);
  };

  var isPrimitive = function isPrimitive(value) {
  	return value === null || (typeof value !== 'function' && typeof value !== 'object');
  };

  var isPrimitive$1 = function isPrimitive(value) {
  	return value === null || (typeof value !== 'function' && typeof value !== 'object');
  };

  var getDay = Date.prototype.getDay;
  var tryDateObject = function tryDateGetDayCall(value) {
  	try {
  		getDay.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };

  var toStr$2 = Object.prototype.toString;
  var dateClass = '[object Date]';
  var hasToStringTag$1 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  var isDateObject = function isDateObject(value) {
  	if (typeof value !== 'object' || value === null) {
  		return false;
  	}
  	return hasToStringTag$1 ? tryDateObject(value) : toStr$2.call(value) === dateClass;
  };

  var isSymbol = createCommonjsModule(function (module) {

  var toStr = Object.prototype.toString;
  var hasSymbols$1 = hasSymbols();

  if (hasSymbols$1) {
  	var symToStr = Symbol.prototype.toString;
  	var symStringRegex = /^Symbol\(.*\)$/;
  	var isSymbolObject = function isRealSymbolObject(value) {
  		if (typeof value.valueOf() !== 'symbol') {
  			return false;
  		}
  		return symStringRegex.test(symToStr.call(value));
  	};

  	module.exports = function isSymbol(value) {
  		if (typeof value === 'symbol') {
  			return true;
  		}
  		if (toStr.call(value) !== '[object Symbol]') {
  			return false;
  		}
  		try {
  			return isSymbolObject(value);
  		} catch (e) {
  			return false;
  		}
  	};
  } else {

  	module.exports = function isSymbol(value) {
  		// this environment does not support Symbols.
  		return false ;
  	};
  }
  });

  var hasSymbols$2 = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';






  var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
  	if (typeof O === 'undefined' || O === null) {
  		throw new TypeError('Cannot call method on ' + O);
  	}
  	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
  		throw new TypeError('hint must be "string" or "number"');
  	}
  	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
  	var method, result, i;
  	for (i = 0; i < methodNames.length; ++i) {
  		method = O[methodNames[i]];
  		if (isCallable(method)) {
  			result = method.call(O);
  			if (isPrimitive$1(result)) {
  				return result;
  			}
  		}
  	}
  	throw new TypeError('No default value');
  };

  var GetMethod = function GetMethod(O, P) {
  	var func = O[P];
  	if (func !== null && typeof func !== 'undefined') {
  		if (!isCallable(func)) {
  			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
  		}
  		return func;
  	}
  	return void 0;
  };

  // http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
  var es2015 = function ToPrimitive(input) {
  	if (isPrimitive$1(input)) {
  		return input;
  	}
  	var hint = 'default';
  	if (arguments.length > 1) {
  		if (arguments[1] === String) {
  			hint = 'string';
  		} else if (arguments[1] === Number) {
  			hint = 'number';
  		}
  	}

  	var exoticToPrim;
  	if (hasSymbols$2) {
  		if (Symbol.toPrimitive) {
  			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
  		} else if (isSymbol(input)) {
  			exoticToPrim = Symbol.prototype.valueOf;
  		}
  	}
  	if (typeof exoticToPrim !== 'undefined') {
  		var result = exoticToPrim.call(input, hint);
  		if (isPrimitive$1(result)) {
  			return result;
  		}
  		throw new TypeError('unable to convert exotic object to primitive');
  	}
  	if (hint === 'default' && (isDateObject(input) || isSymbol(input))) {
  		hint = 'string';
  	}
  	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
  };

  // https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

  var ToPrimitive = function ToPrimitive(input) {
  	if (arguments.length > 1) {
  		return es2015(input, arguments[1]);
  	}
  	return es2015(input);
  };

  var $TypeError$6 = GetIntrinsic('%TypeError%');
  var $Number = GetIntrinsic('%Number%');
  var $RegExp = GetIntrinsic('%RegExp%');
  var $parseInteger = GetIntrinsic('%parseInt%');





  var $strSlice = callBound('String.prototype.slice');
  var isBinary = regexTester(/^0b[01]+$/i);
  var isOctal = regexTester(/^0o[0-7]+$/i);
  var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
  var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
  var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
  var hasNonWS = regexTester(nonWSregex);

  // whitespace from: https://es5.github.io/#x15.5.4.20
  // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
  var ws = [
  	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
  	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
  	'\u2029\uFEFF'
  ].join('');
  var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
  var $replace$1 = callBound('String.prototype.replace');
  var $trim = function (value) {
  	return $replace$1(value, trimRegex, '');
  };



  // https://www.ecma-international.org/ecma-262/6.0/#sec-tonumber

  var ToNumber$1 = function ToNumber(argument) {
  	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
  	if (typeof value === 'symbol') {
  		throw new $TypeError$6('Cannot convert a Symbol value to a number');
  	}
  	if (typeof value === 'string') {
  		if (isBinary(value)) {
  			return ToNumber($parseInteger($strSlice(value, 2), 2));
  		} else if (isOctal(value)) {
  			return ToNumber($parseInteger($strSlice(value, 2), 8));
  		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
  			return NaN;
  		} else {
  			var trimmed = $trim(value);
  			if (trimmed !== value) {
  				return ToNumber(trimmed);
  			}
  		}
  	}
  	return $Number(value);
  };

  // https://www.ecma-international.org/ecma-262/11.0/#sec-tointeger

  var ToInteger$1 = function ToInteger$1(value) {
  	var number = ToNumber$1(value);
  	if (number !== 0) {
  		number = ToInteger(number);
  	}
  	return number === 0 ? 0 : number;
  };

  var $Math = GetIntrinsic('%Math%');
  var $Number$1 = GetIntrinsic('%Number%');

  var maxSafeInteger = $Number$1.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;

  var ToLength = function ToLength(argument) {
  	var len = ToInteger$1(argument);
  	if (len <= 0) { return 0; } // includes converting -0 to +0
  	if (len > maxSafeInteger) { return maxSafeInteger; }
  	return len;
  };

  var $String = GetIntrinsic('%String%');
  var $TypeError$7 = GetIntrinsic('%TypeError%');

  // https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

  var ToString = function ToString(argument) {
  	if (typeof argument === 'symbol') {
  		throw new $TypeError$7('Cannot convert a Symbol value to a string');
  	}
  	return $String(argument);
  };

  var INTRINSICS$1 = {};

  var customUtilInspectFormatters = _defineProperty({}, 'Temporal.Duration', function TemporalDuration(depth, options) {
    var descr = options.stylize("".concat(this[Symbol.toStringTag], " <").concat(this, ">"), 'special');
    if (depth < 1) return descr;
    var entries = [];

    for (var _i = 0, _arr = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds']; _i < _arr.length; _i++) {
      var prop = _arr[_i];
      if (this[prop] !== 0) entries.push("  ".concat(prop, ": ").concat(options.stylize(this[prop], 'number')));
    }

    return descr + ' {\n' + entries.join(',\n') + '\n}';
  });

  function defaultUtilInspectFormatter(depth, options) {
    return options.stylize("".concat(this[Symbol.toStringTag], " <").concat(this, ">"), 'special');
  }

  function MakeIntrinsicClass(Class, name) {
    Object.defineProperty(Class.prototype, Symbol.toStringTag, {
      value: name,
      writable: false,
      enumerable: false,
      configurable: true
    });

    {
      Object.defineProperty(Class.prototype, Symbol.for('nodejs.util.inspect.custom'), {
        value: customUtilInspectFormatters[name] || defaultUtilInspectFormatter,
        writable: false,
        enumerable: false,
        configurable: true
      });
    }

    var species = function species() {
      return this;
    };

    Object.defineProperty(species, 'name', {
      value: 'get [Symbol.species]',
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Class, Symbol.species, {
      get: species,
      enumerable: false,
      configurable: true
    });

    var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(Class)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        var desc = Object.getOwnPropertyDescriptor(Class, prop);
        if (!desc.configurable || !desc.enumerable) continue;
        desc.enumerable = false;
        Object.defineProperty(Class, prop, desc);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Class.prototype)),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _prop = _step2.value;

        var _desc = Object.getOwnPropertyDescriptor(Class.prototype, _prop);

        if (!_desc.configurable || !_desc.enumerable) continue;
        _desc.enumerable = false;
        Object.defineProperty(Class.prototype, _prop, _desc);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    DefineIntrinsic(name, Class);
    DefineIntrinsic("".concat(name, ".prototype"), Class.prototype);
  }
  function DefineIntrinsic(name, value) {
    var key = "%".concat(name, "%");
    if (INTRINSICS$1[key] !== undefined) throw new Error("intrinsic ".concat(name, " already exists"));
    INTRINSICS$1[key] = value;
  }
  function GetIntrinsic$1(intrinsic) {
    return intrinsic in INTRINSICS$1 ? INTRINSICS$1[intrinsic] : GetIntrinsic(intrinsic);
  }

  // Instant
  var EPOCHNANOSECONDS = 'slot-epochNanoSeconds'; // TimeZone

  var TIMEZONE_ID = 'slot-timezone-identifier'; // DateTime, Date, Time, YearMonth, MonthDay

  var ISO_YEAR = 'slot-year';
  var ISO_MONTH = 'slot-month';
  var ISO_DAY = 'slot-day';
  var ISO_HOUR = 'slot-hour';
  var ISO_MINUTE = 'slot-minute';
  var ISO_SECOND = 'slot-second';
  var ISO_MILLISECOND = 'slot-millisecond';
  var ISO_MICROSECOND = 'slot-microsecond';
  var ISO_NANOSECOND = 'slot-nanosecond';
  var CALENDAR = 'slot-calendar'; // Date, YearMonth, and MonthDay all have the same slots, disambiguation needed:

  var DATE_BRAND = 'slot-date-brand';
  var YEAR_MONTH_BRAND = 'slot-year-month-brand';
  var MONTH_DAY_BRAND = 'slot-month-day-brand'; // ZonedDateTime

  var INSTANT = 'slot-cached-instant';
  var TIME_ZONE = 'slot-time-zone'; // Duration

  var YEARS = 'slot-years';
  var MONTHS = 'slot-months';
  var WEEKS = 'slot-weeks';
  var DAYS = 'slot-days';
  var HOURS = 'slot-hours';
  var MINUTES = 'slot-minutes';
  var SECONDS = 'slot-seconds';
  var MILLISECONDS = 'slot-milliseconds';
  var MICROSECONDS = 'slot-microseconds';
  var NANOSECONDS = 'slot-nanoseconds'; // Calendar

  var CALENDAR_ID = 'slot-calendar-identifier';
  var slots = new WeakMap();
  function CreateSlots(container) {
    slots.set(container, Object.create(null));
  }

  function GetSlots(container) {
    return slots.get(container);
  }

  function HasSlot(container) {
    if (!container || 'object' !== _typeof(container)) return false;
    var myslots = GetSlots(container);

    for (var _len = arguments.length, ids = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      ids[_key - 1] = arguments[_key];
    }

    return !!myslots && ids.reduce(function (all, id) {
      return all && id in myslots;
    }, true);
  }
  function GetSlot(container, id) {
    return GetSlots(container)[id];
  }
  function SetSlot(container, id, value) {
    GetSlots(container)[id] = value;
  }

  var tzComponent = /\.[-A-Za-z_]|\.\.[-A-Za-z._]{1,12}|\.[-A-Za-z_][-A-Za-z._]{0,12}|[A-Za-z_][-A-Za-z._]{0,13}/;
  var offsetNoCapture = /(?:[+\u2212-][0-2][0-9](?::?[0-5][0-9](?::?[0-5][0-9](?:[.,]\d{1,9})?)?)?)/;
  var timeZoneID = new RegExp("(?:".concat(tzComponent.source, "(?:\\/(?:").concat(tzComponent.source, "))*|Etc/GMT[-+]\\d{1,2}|").concat(offsetNoCapture.source, ")"));
  var calComponent = /[A-Za-z0-9]{3,8}/;
  var calendarID = new RegExp("(?:".concat(calComponent.source, "(?:-").concat(calComponent.source, ")*)"));
  var yearpart = /(?:[+\u2212-]\d{6}|\d{4})/;
  var datesplit = new RegExp("(".concat(yearpart.source, ")(?:-(\\d{2})-(\\d{2})|(\\d{2})(\\d{2}))"));
  var timesplit = /(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/;
  var offset = /([+\u2212-])([0-2][0-9])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/;
  var zonesplit = new RegExp("(?:([zZ])|(?:".concat(offset.source, ")?)(?:\\[(").concat(timeZoneID.source, ")\\])?"));
  var calendar = new RegExp("\\[c=(".concat(calendarID.source, ")\\]"));
  var instant = new RegExp("^".concat(datesplit.source, "(?:T|\\s+)").concat(timesplit.source).concat(zonesplit.source, "(?:").concat(calendar.source, ")?$"), 'i');
  var datetime = new RegExp("^".concat(datesplit.source, "(?:(?:T|\\s+)").concat(timesplit.source, "(?:").concat(zonesplit.source, ")?)?(?:").concat(calendar.source, ")?$"), 'i');
  var time = new RegExp("^".concat(timesplit.source, "(?:").concat(zonesplit.source, ")?(?:").concat(calendar.source, ")?$"), 'i'); // The short forms of YearMonth and MonthDay are only for the ISO calendar.
  // Non-ISO calendar YearMonth and MonthDay have to parse as a Temporal.Date,
  // with the reference fields.
  // YYYYMM forbidden by ISO 8601, but since it is not ambiguous with anything
  // else we could parse in a YearMonth context, we allow it

  var yearmonth = new RegExp("^(".concat(yearpart.source, ")-?(\\d{2})$"));
  var monthday = /^(?:--)?(\d{2})-?(\d{2})$/;
  var duration = /^([+\u2212-])?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?!$)(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)(?:[.,](\d{1,9}))?S)?)?$/i;

  var ArrayIsArray = Array.isArray;
  var ArrayPrototypeIndexOf = Array.prototype.indexOf;
  var ArrayPrototypePush = Array.prototype.push;
  var IntlDateTimeFormat = globalThis.Intl.DateTimeFormat;
  var MathAbs = Math.abs;
  var MathCeil = Math.ceil;
  var MathFloor = Math.floor;
  var MathSign = Math.sign;
  var MathTrunc = Math.trunc;
  var NumberIsNaN = Number.isNaN;
  var ObjectAssign = Object.assign;
  var ObjectCreate = Object.create;
  var DAYMILLIS = 86400000;
  var NS_MIN = BigInteger(-86400).multiply(1e17);
  var NS_MAX = BigInteger(86400).multiply(1e17);
  var YEAR_MIN = -271821;
  var YEAR_MAX = 275760;
  var BEFORE_FIRST_DST = BigInteger(-388152).multiply(1e13); // 1847-01-01T00:00:00Z

  var BUILTIN_FIELDS = new Set(['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond', 'years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds']);
  var ES2020 = {
    Call: Call,
    SpeciesConstructor: SpeciesConstructor,
    ToInteger: ToInteger$1,
    ToLength: ToLength,
    ToNumber: ToNumber$1,
    ToPrimitive: ToPrimitive,
    ToString: ToString,
    Type: Type$1
  };
  var ES = ObjectAssign({}, ES2020, {
    IsTemporalInstant: function IsTemporalInstant(item) {
      return HasSlot(item, EPOCHNANOSECONDS) && !HasSlot(item, TIME_ZONE, CALENDAR);
    },
    IsTemporalTimeZone: function IsTemporalTimeZone(item) {
      return HasSlot(item, TIMEZONE_ID);
    },
    IsTemporalCalendar: function IsTemporalCalendar(item) {
      return HasSlot(item, CALENDAR_ID);
    },
    IsTemporalDuration: function IsTemporalDuration(item) {
      return HasSlot(item, YEARS, MONTHS, DAYS, HOURS, MINUTES, SECONDS, MILLISECONDS, MICROSECONDS, NANOSECONDS);
    },
    IsTemporalDate: function IsTemporalDate(item) {
      return HasSlot(item, DATE_BRAND);
    },
    IsTemporalTime: function IsTemporalTime(item) {
      return HasSlot(item, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND) && !HasSlot(item, ISO_YEAR, ISO_MONTH, ISO_DAY);
    },
    IsTemporalDateTime: function IsTemporalDateTime(item) {
      return HasSlot(item, ISO_YEAR, ISO_MONTH, ISO_DAY, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND);
    },
    IsTemporalYearMonth: function IsTemporalYearMonth(item) {
      return HasSlot(item, YEAR_MONTH_BRAND);
    },
    IsTemporalMonthDay: function IsTemporalMonthDay(item) {
      return HasSlot(item, MONTH_DAY_BRAND);
    },
    IsTemporalZonedDateTime: function IsTemporalZonedDateTime(item) {
      return HasSlot(item, EPOCHNANOSECONDS, TIME_ZONE, CALENDAR);
    },
    TemporalTimeZoneFromString: function TemporalTimeZoneFromString(stringIdent) {
      var _ES$ParseTemporalTime = ES.ParseTemporalTimeZoneString(stringIdent),
          ianaName = _ES$ParseTemporalTime.ianaName,
          offset = _ES$ParseTemporalTime.offset,
          z = _ES$ParseTemporalTime.z;

      if (z) ianaName = 'UTC';
      var result = ES.GetCanonicalTimeZoneIdentifier(ianaName || offset);

      if (offset && ianaName && ianaName !== offset) {
        var ns = ES.ParseTemporalInstant(stringIdent);
        var offsetNs = ES.GetIANATimeZoneOffsetNanoseconds(ns, result);

        if (ES.FormatTimeZoneOffsetString(offsetNs) !== offset) {
          throw new RangeError("invalid offset ".concat(offset, "[").concat(ianaName, "]"));
        }
      }

      return result;
    },
    FormatCalendarAnnotation: function FormatCalendarAnnotation(calendar, showCalendar) {
      if (showCalendar === 'never') return '';
      var id = ES.CalendarToString(calendar);
      if (showCalendar === 'auto' && id === 'iso8601') return '';
      return "[c=".concat(id, "]");
    },
    ParseISODateTime: function ParseISODateTime(isoString, _ref) {
      var zoneRequired = _ref.zoneRequired;
      var regex = zoneRequired ? instant : datetime;
      var match = regex.exec(isoString);
      if (!match) throw new RangeError("invalid ISO 8601 string: ".concat(isoString));
      var yearString = match[1];
      if (yearString[0] === "\u2212") yearString = "-".concat(yearString.slice(1));
      var year = ES.ToInteger(yearString);
      var month = ES.ToInteger(match[2] || match[4]);
      var day = ES.ToInteger(match[3] || match[5]);
      var hour = ES.ToInteger(match[6]);
      var minute = ES.ToInteger(match[7] || match[10]);
      var second = ES.ToInteger(match[8] || match[11]);
      if (second === 60) second = 59;
      var fraction = (match[9] || match[12]) + '000000000';
      var millisecond = ES.ToInteger(fraction.slice(0, 3));
      var microsecond = ES.ToInteger(fraction.slice(3, 6));
      var nanosecond = ES.ToInteger(fraction.slice(6, 9));
      var offset, z;

      if (match[13]) {
        offset = '+00:00';
        z = 'Z';
      } else if (match[14] && match[15]) {
        var offsetSign = match[14] === '-' || match[14] === "\u2212" ? '-' : '+';
        var offsetHours = match[15] || '00';
        var offsetMinutes = match[16] || '00';
        var offsetSeconds = match[17] || '00';
        var offsetFraction = match[18] || '0';
        offset = "".concat(offsetSign).concat(offsetHours, ":").concat(offsetMinutes);

        if (+offsetFraction) {
          while (offsetFraction.endsWith('0')) {
            offsetFraction = offsetFraction.slice(0, -1);
          }

          offset += ":".concat(offsetSeconds, ".").concat(offsetFraction);
        } else if (+offsetSeconds) {
          offset += ":".concat(offsetSeconds);
        }

        if (offset === '-00:00') offset = '+00:00';
      }

      var ianaName = match[19];

      if (ianaName) {
        try {
          // Canonicalize name if it is an IANA link name or is capitalized wrong
          ianaName = ES.GetCanonicalTimeZoneIdentifier(ianaName).toString();
        } catch (_unused) {// Not an IANA name, may be a custom ID, pass through unchanged
        }
      }

      var calendar = match[20];
      return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond,
        ianaName: ianaName,
        offset: offset,
        z: z,
        calendar: calendar
      };
    },
    ParseTemporalInstantString: function ParseTemporalInstantString(isoString) {
      return ES.ParseISODateTime(isoString, {
        zoneRequired: true
      });
    },
    ParseTemporalZonedDateTimeString: function ParseTemporalZonedDateTimeString(isoString) {
      return ES.ParseISODateTime(isoString, {
        zoneRequired: true
      });
    },
    ParseTemporalDateTimeString: function ParseTemporalDateTimeString(isoString) {
      return ES.ParseISODateTime(isoString, {
        zoneRequired: false
      });
    },
    ParseTemporalDateString: function ParseTemporalDateString(isoString) {
      return ES.ParseISODateTime(isoString, {
        zoneRequired: false
      });
    },
    ParseTemporalTimeString: function ParseTemporalTimeString(isoString) {
      var match = time.exec(isoString);
      var hour, minute, second, millisecond, microsecond, nanosecond, calendar;

      if (match) {
        hour = ES.ToInteger(match[1]);
        minute = ES.ToInteger(match[2] || match[5]);
        second = ES.ToInteger(match[3] || match[6]);
        if (second === 60) second = 59;
        var fraction = (match[4] || match[7]) + '000000000';
        millisecond = ES.ToInteger(fraction.slice(0, 3));
        microsecond = ES.ToInteger(fraction.slice(3, 6));
        nanosecond = ES.ToInteger(fraction.slice(6, 9));
        calendar = match[15];
      } else {
        var _ES$ParseISODateTime = ES.ParseISODateTime(isoString, {
          zoneRequired: false
        });

        hour = _ES$ParseISODateTime.hour;
        minute = _ES$ParseISODateTime.minute;
        second = _ES$ParseISODateTime.second;
        millisecond = _ES$ParseISODateTime.millisecond;
        microsecond = _ES$ParseISODateTime.microsecond;
        nanosecond = _ES$ParseISODateTime.nanosecond;
        calendar = _ES$ParseISODateTime.calendar;
      }

      return {
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond,
        calendar: calendar
      };
    },
    ParseTemporalYearMonthString: function ParseTemporalYearMonthString(isoString) {
      var match = yearmonth.exec(isoString);
      var year, month, calendar, referenceISODay;

      if (match) {
        var yearString = match[1];
        if (yearString[0] === "\u2212") yearString = "-".concat(yearString.slice(1));
        year = ES.ToInteger(yearString);
        month = ES.ToInteger(match[2]);
        calendar = match[3];
      } else {
        var _ES$ParseISODateTime2 = ES.ParseISODateTime(isoString, {
          zoneRequired: false
        });

        year = _ES$ParseISODateTime2.year;
        month = _ES$ParseISODateTime2.month;
        calendar = _ES$ParseISODateTime2.calendar;
        referenceISODay = _ES$ParseISODateTime2.day;
        if (!calendar) referenceISODay = undefined;
      }

      return {
        year: year,
        month: month,
        calendar: calendar,
        referenceISODay: referenceISODay
      };
    },
    ParseTemporalMonthDayString: function ParseTemporalMonthDayString(isoString) {
      var match = monthday.exec(isoString);
      var month, day, calendar, referenceISOYear;

      if (match) {
        month = ES.ToInteger(match[1]);
        day = ES.ToInteger(match[2]);
      } else {
        var _ES$ParseISODateTime3 = ES.ParseISODateTime(isoString, {
          zoneRequired: false
        });

        month = _ES$ParseISODateTime3.month;
        day = _ES$ParseISODateTime3.day;
        calendar = _ES$ParseISODateTime3.calendar;
        referenceISOYear = _ES$ParseISODateTime3.year;
        if (!calendar) referenceISOYear = undefined;
      }

      return {
        month: month,
        day: day,
        calendar: calendar,
        referenceISOYear: referenceISOYear
      };
    },
    ParseTemporalTimeZoneString: function ParseTemporalTimeZoneString(stringIdent) {
      try {
        var canonicalIdent = ES.GetCanonicalTimeZoneIdentifier(stringIdent);

        if (canonicalIdent) {
          canonicalIdent = canonicalIdent.toString();
          if (ES.ParseOffsetString(canonicalIdent) !== null) return {
            offset: canonicalIdent
          };
          return {
            ianaName: canonicalIdent
          };
        }
      } catch (_unused2) {// fall through
      }

      try {
        // Try parsing ISO string instead
        return ES.ParseISODateTime(stringIdent, {
          zoneRequired: true
        });
      } catch (_unused3) {
        throw new RangeError("Invalid time zone: ".concat(stringIdent));
      }
    },
    ParseTemporalDurationString: function ParseTemporalDurationString(isoString) {
      var match = duration.exec(isoString);
      if (!match) throw new RangeError("invalid duration: ".concat(isoString));

      if (match.slice(2).every(function (element) {
        return element === undefined;
      })) {
        throw new RangeError("invalid duration: ".concat(isoString));
      }

      var sign = match[1] === '-' || match[1] === "\u2212" ? -1 : 1;
      var years = ES.ToInteger(match[2]) * sign;
      var months = ES.ToInteger(match[3]) * sign;
      var weeks = ES.ToInteger(match[4]) * sign;
      var days = ES.ToInteger(match[5]) * sign;
      var hours = ES.ToInteger(match[6]) * sign;
      var minutes = ES.ToInteger(match[7]) * sign;
      var seconds = ES.ToInteger(match[8]) * sign;
      var fraction = match[9] + '000000000';
      var milliseconds = ES.ToInteger(fraction.slice(0, 3)) * sign;
      var microseconds = ES.ToInteger(fraction.slice(3, 6)) * sign;
      var nanoseconds = ES.ToInteger(fraction.slice(6, 9)) * sign;
      return {
        years: years,
        months: months,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        microseconds: microseconds,
        nanoseconds: nanoseconds
      };
    },
    ParseTemporalInstant: function ParseTemporalInstant(isoString) {
      var _ES$ParseTemporalInst = ES.ParseTemporalInstantString(isoString),
          year = _ES$ParseTemporalInst.year,
          month = _ES$ParseTemporalInst.month,
          day = _ES$ParseTemporalInst.day,
          hour = _ES$ParseTemporalInst.hour,
          minute = _ES$ParseTemporalInst.minute,
          second = _ES$ParseTemporalInst.second,
          millisecond = _ES$ParseTemporalInst.millisecond,
          microsecond = _ES$ParseTemporalInst.microsecond,
          nanosecond = _ES$ParseTemporalInst.nanosecond,
          offset = _ES$ParseTemporalInst.offset;

      var epochNs = ES.GetEpochFromParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
      if (epochNs === null) throw new RangeError('DateTime outside of supported range');
      if (!offset) throw new RangeError('Temporal.Instant requires a time zone offset');
      var offsetNs = ES.ParseOffsetString(offset);
      return epochNs.subtract(offsetNs);
    },
    RegulateDateTime: function RegulateDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, overflow) {
      switch (overflow) {
        case 'reject':
          ES.RejectDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
          break;

        case 'constrain':
          var _ES$ConstrainDateTime = ES.ConstrainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);

          year = _ES$ConstrainDateTime.year;
          month = _ES$ConstrainDateTime.month;
          day = _ES$ConstrainDateTime.day;
          hour = _ES$ConstrainDateTime.hour;
          minute = _ES$ConstrainDateTime.minute;
          second = _ES$ConstrainDateTime.second;
          millisecond = _ES$ConstrainDateTime.millisecond;
          microsecond = _ES$ConstrainDateTime.microsecond;
          nanosecond = _ES$ConstrainDateTime.nanosecond;
          break;
      }

      return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    RegulateDate: function RegulateDate(year, month, day, overflow) {
      switch (overflow) {
        case 'reject':
          ES.RejectDate(year, month, day);
          break;

        case 'constrain':
          var _ES$ConstrainDate = ES.ConstrainDate(year, month, day);

          year = _ES$ConstrainDate.year;
          month = _ES$ConstrainDate.month;
          day = _ES$ConstrainDate.day;
          break;
      }

      return {
        year: year,
        month: month,
        day: day
      };
    },
    RegulateTime: function RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow) {
      switch (overflow) {
        case 'reject':
          ES.RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
          break;

        case 'constrain':
          var _ES$ConstrainTime = ES.ConstrainTime(hour, minute, second, millisecond, microsecond, nanosecond);

          hour = _ES$ConstrainTime.hour;
          minute = _ES$ConstrainTime.minute;
          second = _ES$ConstrainTime.second;
          millisecond = _ES$ConstrainTime.millisecond;
          microsecond = _ES$ConstrainTime.microsecond;
          nanosecond = _ES$ConstrainTime.nanosecond;
          break;
      }

      return {
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    RegulateYearMonth: function RegulateYearMonth(year, month, overflow) {
      var referenceISODay = 1;

      switch (overflow) {
        case 'reject':
          ES.RejectDate(year, month, referenceISODay);
          break;

        case 'constrain':
          var _ES$ConstrainDate2 = ES.ConstrainDate(year, month);

          year = _ES$ConstrainDate2.year;
          month = _ES$ConstrainDate2.month;
          break;
      }

      return {
        year: year,
        month: month
      };
    },
    RegulateMonthDay: function RegulateMonthDay(month, day, overflow) {
      var referenceISOYear = 1972;

      switch (overflow) {
        case 'reject':
          ES.RejectDate(referenceISOYear, month, day);
          break;

        case 'constrain':
          var _ES$ConstrainDate3 = ES.ConstrainDate(referenceISOYear, month, day);

          month = _ES$ConstrainDate3.month;
          day = _ES$ConstrainDate3.day;
          break;
      }

      return {
        month: month,
        day: day
      };
    },
    ToTemporalDurationRecord: function ToTemporalDurationRecord(item) {
      if (ES.IsTemporalDuration(item)) {
        return {
          years: GetSlot(item, YEARS),
          months: GetSlot(item, MONTHS),
          weeks: GetSlot(item, WEEKS),
          days: GetSlot(item, DAYS),
          hours: GetSlot(item, HOURS),
          minutes: GetSlot(item, MINUTES),
          seconds: GetSlot(item, SECONDS),
          milliseconds: GetSlot(item, MILLISECONDS),
          microseconds: GetSlot(item, MICROSECONDS),
          nanoseconds: GetSlot(item, NANOSECONDS)
        };
      }

      var props = ES.ToPartialRecord(item, ['days', 'hours', 'microseconds', 'milliseconds', 'minutes', 'months', 'nanoseconds', 'seconds', 'weeks', 'years']);
      if (!props) throw new TypeError('invalid duration-like');
      var _props$years = props.years,
          years = _props$years === void 0 ? 0 : _props$years,
          _props$months = props.months,
          months = _props$months === void 0 ? 0 : _props$months,
          _props$weeks = props.weeks,
          weeks = _props$weeks === void 0 ? 0 : _props$weeks,
          _props$days = props.days,
          days = _props$days === void 0 ? 0 : _props$days,
          _props$hours = props.hours,
          hours = _props$hours === void 0 ? 0 : _props$hours,
          _props$minutes = props.minutes,
          minutes = _props$minutes === void 0 ? 0 : _props$minutes,
          _props$seconds = props.seconds,
          seconds = _props$seconds === void 0 ? 0 : _props$seconds,
          _props$milliseconds = props.milliseconds,
          milliseconds = _props$milliseconds === void 0 ? 0 : _props$milliseconds,
          _props$microseconds = props.microseconds,
          microseconds = _props$microseconds === void 0 ? 0 : _props$microseconds,
          _props$nanoseconds = props.nanoseconds,
          nanoseconds = _props$nanoseconds === void 0 ? 0 : _props$nanoseconds;
      return {
        years: years,
        months: months,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        microseconds: microseconds,
        nanoseconds: nanoseconds
      };
    },
    ToLimitedTemporalDuration: function ToLimitedTemporalDuration(item) {
      var disallowedProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var record;

      if (ES.Type(item) === 'Object') {
        record = ES.ToTemporalDurationRecord(item);
      } else {
        var str = ES.ToString(item);
        record = ES.ParseTemporalDurationString(str);
      }

      var _record = record,
          years = _record.years,
          months = _record.months,
          weeks = _record.weeks,
          days = _record.days,
          hours = _record.hours,
          minutes = _record.minutes,
          seconds = _record.seconds,
          milliseconds = _record.milliseconds,
          microseconds = _record.microseconds,
          nanoseconds = _record.nanoseconds;
      ES.RejectDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

      var _iterator = _createForOfIteratorHelper(disallowedProperties),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;

          if (record[property] !== 0) {
            throw new RangeError("invalid duration field ".concat(property));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return record;
    },
    ToTemporalDurationOverflow: function ToTemporalDurationOverflow(options) {
      return ES.GetOption(options, 'overflow', ['constrain', 'balance'], 'constrain');
    },
    ToTemporalOverflow: function ToTemporalOverflow(options) {
      return ES.GetOption(options, 'overflow', ['constrain', 'reject'], 'constrain');
    },
    ToTemporalDisambiguation: function ToTemporalDisambiguation(options) {
      return ES.GetOption(options, 'disambiguation', ['compatible', 'earlier', 'later', 'reject'], 'compatible');
    },
    ToTemporalRoundingMode: function ToTemporalRoundingMode(options, fallback) {
      return ES.GetOption(options, 'roundingMode', ['ceil', 'floor', 'trunc', 'nearest'], fallback);
    },
    NegateTemporalRoundingMode: function NegateTemporalRoundingMode(roundingMode) {
      switch (roundingMode) {
        case 'ceil':
          return 'floor';

        case 'floor':
          return 'ceil';

        default:
          return roundingMode;
      }
    },
    ToTemporalOffset: function ToTemporalOffset(options, fallback) {
      return ES.GetOption(options, 'offset', ['prefer', 'use', 'ignore', 'reject'], fallback);
    },
    ToShowCalendarOption: function ToShowCalendarOption(options) {
      return ES.GetOption(options, 'calendar', ['auto', 'always', 'never'], 'auto');
    },
    ToShowTimeZoneNameOption: function ToShowTimeZoneNameOption(options) {
      return ES.GetOption(options, 'timeZoneName', ['auto', 'never'], 'auto');
    },
    ToShowOffsetOption: function ToShowOffsetOption(options) {
      return ES.GetOption(options, 'offset', ['auto', 'never'], 'auto');
    },
    ToTemporalRoundingIncrement: function ToTemporalRoundingIncrement(options, dividend, inclusive) {
      var maximum = Infinity;
      if (dividend !== undefined) maximum = dividend;
      if (!inclusive && dividend !== undefined) maximum = dividend > 1 ? dividend - 1 : 1;
      var increment = ES.GetNumberOption(options, 'roundingIncrement', 1, maximum, 1);

      if (dividend !== undefined && dividend % increment !== 0) {
        throw new RangeError("Rounding increment must divide evenly into ".concat(dividend));
      }

      return increment;
    },
    ToTemporalDateTimeRoundingIncrement: function ToTemporalDateTimeRoundingIncrement(options, smallestUnit) {
      var maximumIncrements = {
        years: undefined,
        months: undefined,
        weeks: undefined,
        days: undefined,
        hours: 24,
        minutes: 60,
        seconds: 60,
        milliseconds: 1000,
        microseconds: 1000,
        nanoseconds: 1000
      };
      return ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
    },
    ToSecondsStringPrecision: function ToSecondsStringPrecision(options) {
      var singular = new Map([['minutes', 'minute'], ['seconds', 'second'], ['milliseconds', 'millisecond'], ['microseconds', 'microsecond'], ['nanoseconds', 'nanosecond']]);
      var allowed = new Set(['minute', 'second', 'millisecond', 'microsecond', 'nanosecond']);
      var smallestUnit = ES.GetOption(options, 'smallestUnit', [].concat(_toConsumableArray(allowed), _toConsumableArray(singular.keys())), undefined);
      if (singular.has(smallestUnit)) smallestUnit = singular.get(smallestUnit);

      switch (smallestUnit) {
        case 'minute':
          return {
            precision: 'minute',
            unit: 'minute',
            increment: 1
          };

        case 'second':
          return {
            precision: 0,
            unit: 'second',
            increment: 1
          };

        case 'millisecond':
          return {
            precision: 3,
            unit: 'millisecond',
            increment: 1
          };

        case 'microsecond':
          return {
            precision: 6,
            unit: 'microsecond',
            increment: 1
          };

        case 'nanosecond':
          return {
            precision: 9,
            unit: 'nanosecond',
            increment: 1
          };

      }

      var digits = options.fractionalSecondDigits;
      if (digits === undefined || digits === 'auto') return {
        precision: 'auto',
        unit: 'nanosecond',
        increment: 1
      };
      digits = ES.ToNumber(digits);

      if (NumberIsNaN(digits) || digits < 0 || digits > 9) {
        throw new RangeError("fractionalSecondDigits must be 'auto' or 0 through 9, not ".concat(digits));
      }

      var precision = MathFloor(digits);

      switch (precision) {
        case 0:
          return {
            precision: precision,
            unit: 'second',
            increment: 1
          };

        case 1:
        case 2:
        case 3:
          return {
            precision: precision,
            unit: 'millisecond',
            increment: Math.pow(10, 3 - precision)
          };

        case 4:
        case 5:
        case 6:
          return {
            precision: precision,
            unit: 'microsecond',
            increment: Math.pow(10, 6 - precision)
          };

        case 7:
        case 8:
        case 9:
          return {
            precision: precision,
            unit: 'nanosecond',
            increment: Math.pow(10, 9 - precision)
          };
      }
    },
    ToLargestTemporalUnit: function ToLargestTemporalUnit(options, fallback) {
      var disallowedStrings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var plural = new Map([['year', 'years'], ['month', 'months'], ['day', 'days'], ['hour', 'hours'], ['minute', 'minutes'], ['second', 'seconds'], ['millisecond', 'milliseconds'], ['microsecond', 'microseconds'], ['nanosecond', 'nanoseconds']].filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            pl = _ref3[1];

        return !disallowedStrings.includes(pl);
      }));
      var allowed = new Set(['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds']);

      var _iterator2 = _createForOfIteratorHelper(disallowedStrings),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var s = _step2.value;
          allowed.delete(s);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var retval = ES.GetOption(options, 'largestUnit', ['auto'].concat(_toConsumableArray(allowed), _toConsumableArray(plural.keys())), 'auto');
      if (retval === 'auto') return fallback;
      if (plural.has(retval)) return plural.get(retval);
      return retval;
    },
    ToSmallestTemporalUnit: function ToSmallestTemporalUnit(options) {
      var disallowedStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var singular = new Map([['days', 'day'], ['hours', 'hour'], ['minutes', 'minute'], ['seconds', 'second'], ['milliseconds', 'millisecond'], ['microseconds', 'microsecond'], ['nanoseconds', 'nanosecond']].filter(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            sing = _ref5[1];

        return !disallowedStrings.includes(sing);
      }));
      var allowed = new Set(['day', 'hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond']);

      var _iterator3 = _createForOfIteratorHelper(disallowedStrings),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var s = _step3.value;
          allowed.delete(s);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var value = ES.GetOption(options, 'smallestUnit', [].concat(_toConsumableArray(allowed), _toConsumableArray(singular.keys())), undefined);
      if (value === undefined) throw new RangeError('smallestUnit option is required');
      if (singular.has(value)) return singular.get(value);
      return value;
    },
    ToSmallestTemporalDurationUnit: function ToSmallestTemporalDurationUnit(options, fallback) {
      var disallowedStrings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var plural = new Map([['year', 'years'], ['month', 'months'], ['day', 'days'], ['hour', 'hours'], ['minute', 'minutes'], ['second', 'seconds'], ['millisecond', 'milliseconds'], ['microsecond', 'microseconds'], ['nanosecond', 'nanoseconds']].filter(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            pl = _ref7[1];

        return !disallowedStrings.includes(pl);
      }));
      var allowed = new Set(['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds']);

      var _iterator4 = _createForOfIteratorHelper(disallowedStrings),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var s = _step4.value;
          allowed.delete(s);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var value = ES.GetOption(options, 'smallestUnit', [].concat(_toConsumableArray(allowed), _toConsumableArray(plural.keys())), fallback);
      if (plural.has(value)) return plural.get(value);
      return value;
    },
    ToTemporalDurationTotalUnit: function ToTemporalDurationTotalUnit(options) {
      // This AO is identical to ToSmallestTemporalDurationUnit, except:
      // - default is always `undefined` (caller will throw if omitted)
      // - option is named `unit` (not `smallestUnit`)
      // - all units are valid (no `disallowedStrings`)
      var plural = new Map([['year', 'years'], ['month', 'months'], ['day', 'days'], ['hour', 'hours'], ['minute', 'minutes'], ['second', 'seconds'], ['millisecond', 'milliseconds'], ['microsecond', 'microseconds'], ['nanosecond', 'nanoseconds']]); // "week" doesn't exist in Temporal as a non-plural unit, so don't allow it

      var value = ES.GetOption(options, 'unit', [].concat(_toConsumableArray(plural.values()), _toConsumableArray(plural.keys()), ['weeks']), undefined);
      if (plural.has(value)) return plural.get(value);
      return value;
    },
    ToRelativeTemporalObject: function ToRelativeTemporalObject(options) {
      var relativeTo = options.relativeTo;
      if (relativeTo === undefined) return relativeTo;
      var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar;

      if (ES.Type(relativeTo) === 'Object') {
        if (ES.IsTemporalDateTime(relativeTo)) return relativeTo;
        calendar = relativeTo.calendar;
        if (calendar === undefined) calendar = GetISO8601Calendar();
        calendar = ES.ToTemporalCalendar(calendar);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'era', 'month', 'year']);
        var fields = ES.ToTemporalDateTimeFields(relativeTo, fieldNames);
        var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
        var date = calendar.dateFromFields(fields, {}, TemporalDate);
        year = GetSlot(date, ISO_YEAR);
        month = GetSlot(date, ISO_MONTH);
        day = GetSlot(date, ISO_DAY);
        hour = fields.hour;
        minute = fields.minute;
        second = fields.second;
        millisecond = fields.millisecond;
        microsecond = fields.microsecond;
        nanosecond = fields.nanosecond;
      } else {
        var _ES$ParseTemporalDate = ES.ParseTemporalDateTimeString(ES.ToString(relativeTo));

        year = _ES$ParseTemporalDate.year;
        month = _ES$ParseTemporalDate.month;
        day = _ES$ParseTemporalDate.day;
        hour = _ES$ParseTemporalDate.hour;
        minute = _ES$ParseTemporalDate.minute;
        second = _ES$ParseTemporalDate.second;
        millisecond = _ES$ParseTemporalDate.millisecond;
        microsecond = _ES$ParseTemporalDate.microsecond;
        nanosecond = _ES$ParseTemporalDate.nanosecond;
        calendar = _ES$ParseTemporalDate.calendar;
        if (!calendar) calendar = GetISO8601Calendar();
        calendar = ES.ToTemporalCalendar(calendar);
      }

      var TemporalDateTime = GetIntrinsic$1('%Temporal.DateTime%');
      return new TemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    },
    RelevantTemporalObjectFromString: function RelevantTemporalObjectFromString(str) {
      var props;

      try {
        props = ES.ParseISODateTime(str, {
          zoneRequired: false
        });
      } catch (_unused4) {
        try {
          props = ES.ParseTemporalTimeString(str);
        } catch (_unused5) {
          throw new RangeError("invalid value ".concat(str, " for a Temporal object"));
        }

        var _props = props,
            _hour = _props.hour,
            _minute = _props.minute,
            _second = _props.second,
            _millisecond = _props.millisecond,
            _microsecond = _props.microsecond,
            _nanosecond = _props.nanosecond;
        var TemporalTime = GetIntrinsic$1('%Temporal.Time%');
        return new TemporalTime(_hour, _minute, _second, _millisecond, _microsecond, _nanosecond);
      }

      var _props2 = props,
          year = _props2.year,
          month = _props2.month,
          day = _props2.day,
          hour = _props2.hour,
          minute = _props2.minute,
          second = _props2.second,
          millisecond = _props2.millisecond,
          microsecond = _props2.microsecond,
          nanosecond = _props2.nanosecond,
          calendar = _props2.calendar;
      if (!calendar) calendar = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
      var DATE_ONLY = new RegExp("^".concat(datesplit.source, "$"));
      var match = DATE_ONLY.exec(str);

      if (match) {
        var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
        return new TemporalDate(year, month, day, calendar);
      }

      var TemporalDateTime = GetIntrinsic$1('%Temporal.DateTime%');
      return new TemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    },
    ValidateTemporalUnitRange: function ValidateTemporalUnitRange(largestUnit, smallestUnit) {
      var validUnits = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds'];

      if (validUnits.indexOf(largestUnit) > validUnits.indexOf(smallestUnit)) {
        throw new RangeError("largestUnit ".concat(largestUnit, " cannot be smaller than smallestUnit ").concat(smallestUnit));
      }
    },
    DefaultTemporalLargestUnit: function DefaultTemporalLargestUnit(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds) {
      for (var _i = 0, _Object$entries = Object.entries({
        years: years,
        months: months,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        microseconds: microseconds,
        nanoseconds: nanoseconds
      }); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            prop = _Object$entries$_i[0],
            v = _Object$entries$_i[1];

        if (v !== 0) return prop;
      }

      return 'nanoseconds';
    },
    LargerOfTwoTemporalDurationUnits: function LargerOfTwoTemporalDurationUnits(unit1, unit2) {
      var validUnits = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds'];
      if (validUnits.indexOf(unit1) > validUnits.indexOf(unit2)) return unit2;
      return unit1;
    },
    ToPartialRecord: function ToPartialRecord(bag, fields) {
      if (ES.Type(bag) !== 'Object') return false;
      var any;

      var _iterator5 = _createForOfIteratorHelper(fields),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var property = _step5.value;
          var value = bag[property];

          if (value !== undefined) {
            any = any || {};

            if (BUILTIN_FIELDS.has(property)) {
              any[property] = ES.ToInteger(value);
            } else {
              any[property] = value;
            }
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return any ? any : false;
    },
    ToRecord: function ToRecord(bag, fields) {
      if (ES.Type(bag) !== 'Object') return false;
      var result = {};

      var _iterator6 = _createForOfIteratorHelper(fields),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var fieldRecord = _step6.value;

          var _fieldRecord = _slicedToArray(fieldRecord, 2),
              property = _fieldRecord[0],
              defaultValue = _fieldRecord[1];

          var value = bag[property];

          if (value === undefined) {
            if (fieldRecord.length === 1) {
              throw new TypeError("required property '".concat(property, "' missing or undefined"));
            }

            value = defaultValue;
          }

          if (BUILTIN_FIELDS.has(property)) {
            result[property] = ES.ToInteger(value);
          } else {
            result[property] = value;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return result;
    },
    // field access in the following operations is intentionally alphabetical
    ToTemporalDateFields: function ToTemporalDateFields(bag, fieldNames) {
      var entries = [['day'], ['month'], ['year']]; // Add extra fields from the calendar at the end

      fieldNames.forEach(function (fieldName) {
        if (!entries.some(function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 1),
              name = _ref9[0];

          return name === fieldName;
        })) {
          entries.push([fieldName, undefined]);
        }
      });
      return ES.ToRecord(bag, entries);
    },
    ToTemporalDateTimeFields: function ToTemporalDateTimeFields(bag, fieldNames) {
      var entries = [['day'], ['hour', 0], ['microsecond', 0], ['millisecond', 0], ['minute', 0], ['month'], ['nanosecond', 0], ['second', 0], ['year']]; // Add extra fields from the calendar at the end

      fieldNames.forEach(function (fieldName) {
        if (!entries.some(function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 1),
              name = _ref11[0];

          return name === fieldName;
        })) {
          entries.push([fieldName, undefined]);
        }
      });
      return ES.ToRecord(bag, entries);
    },
    ToTemporalMonthDayFields: function ToTemporalMonthDayFields(bag, fieldNames) {
      var entries = [['day'], ['month']]; // Add extra fields from the calendar at the end

      fieldNames.forEach(function (fieldName) {
        if (!entries.some(function (_ref12) {
          var _ref13 = _slicedToArray(_ref12, 1),
              name = _ref13[0];

          return name === fieldName;
        })) {
          entries.push([fieldName, undefined]);
        }
      });
      return ES.ToRecord(bag, entries);
    },
    ToTemporalTimeRecord: function ToTemporalTimeRecord(bag) {
      var props = ES.ToPartialRecord(bag, ['hour', 'microsecond', 'millisecond', 'minute', 'nanosecond', 'second']);
      if (!props) throw new TypeError('invalid time-like');
      var _props$hour = props.hour,
          hour = _props$hour === void 0 ? 0 : _props$hour,
          _props$minute = props.minute,
          minute = _props$minute === void 0 ? 0 : _props$minute,
          _props$second = props.second,
          second = _props$second === void 0 ? 0 : _props$second,
          _props$millisecond = props.millisecond,
          millisecond = _props$millisecond === void 0 ? 0 : _props$millisecond,
          _props$microsecond = props.microsecond,
          microsecond = _props$microsecond === void 0 ? 0 : _props$microsecond,
          _props$nanosecond = props.nanosecond,
          nanosecond = _props$nanosecond === void 0 ? 0 : _props$nanosecond;
      return {
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    ToTemporalYearMonthFields: function ToTemporalYearMonthFields(bag, fieldNames) {
      var entries = [['month'], ['year']]; // Add extra fields from the calendar at the end

      fieldNames.forEach(function (fieldName) {
        if (!entries.some(function (_ref14) {
          var _ref15 = _slicedToArray(_ref14, 1),
              name = _ref15[0];

          return name === fieldName;
        })) {
          entries.push([fieldName, undefined]);
        }
      });
      return ES.ToRecord(bag, entries);
    },
    ToTemporalZonedDateTimeFields: function ToTemporalZonedDateTimeFields(bag, fieldNames) {
      var entries = [['day'], ['hour', 0], ['microsecond', 0], ['millisecond', 0], ['minute', 0], ['month'], ['nanosecond', 0], ['offset', undefined], ['second', 0], ['timeZone'], ['year']]; // Add extra fields from the calendar at the end

      fieldNames.forEach(function (fieldName) {
        if (!entries.some(function (_ref16) {
          var _ref17 = _slicedToArray(_ref16, 1),
              name = _ref17[0];

          return name === fieldName;
        })) {
          entries.push([fieldName, undefined]);
        }
      });
      return ES.ToRecord(bag, entries);
    },
    ToTemporalDate: function ToTemporalDate(item, constructor) {
      var overflow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'constrain';
      var result;

      if (ES.Type(item) === 'Object') {
        if (ES.IsTemporalDate(item)) return item;
        var calendar = item.calendar;
        if (calendar === undefined) calendar = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        calendar = ES.ToTemporalCalendar(calendar);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalDateFields(item, fieldNames);
        result = calendar.dateFromFields(fields, {
          overflow: overflow
        }, constructor);
      } else {
        var _ES$ParseTemporalDate2 = ES.ParseTemporalDateString(ES.ToString(item)),
            year = _ES$ParseTemporalDate2.year,
            month = _ES$ParseTemporalDate2.month,
            day = _ES$ParseTemporalDate2.day,
            _calendar = _ES$ParseTemporalDate2.calendar;

        var _ES$RegulateDate = ES.RegulateDate(year, month, day, overflow);

        year = _ES$RegulateDate.year;
        month = _ES$RegulateDate.month;
        day = _ES$RegulateDate.day;
        if (_calendar === undefined) _calendar = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        _calendar = ES.ToTemporalCalendar(_calendar);
        result = new constructor(year, month, day, _calendar);
      }

      if (!ES.IsTemporalDate(result)) throw new TypeError('invalid result');
      return result;
    },
    InterpretTemporalDateTimeFields: function InterpretTemporalDateTimeFields(calendar, fields, overflow) {
      var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
      var date = calendar.dateFromFields(fields, {
        overflow: overflow
      }, TemporalDate);
      var year = GetSlot(date, ISO_YEAR);
      var month = GetSlot(date, ISO_MONTH);
      var day = GetSlot(date, ISO_DAY);
      var TemporalTime = GetIntrinsic$1('%Temporal.Time%');
      var time = calendar.timeFromFields(fields, {
        overflow: overflow
      }, TemporalTime);
      var hour = GetSlot(time, ISO_HOUR);
      var minute = GetSlot(time, ISO_MINUTE);
      var second = GetSlot(time, ISO_SECOND);
      var millisecond = GetSlot(time, ISO_MILLISECOND);
      var microsecond = GetSlot(time, ISO_MICROSECOND);
      var nanosecond = GetSlot(time, ISO_NANOSECOND);
      return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    ToTemporalDateTime: function ToTemporalDateTime(item, constructor) {
      var overflow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'constrain';
      var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar;

      if (ES.Type(item) === 'Object') {
        if (ES.IsTemporalDateTime(item)) return item;
        calendar = item.calendar;
        if (calendar === undefined) calendar = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        calendar = ES.ToTemporalCalendar(calendar);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalDateTimeFields(item, fieldNames);

        var _ES$InterpretTemporal = ES.InterpretTemporalDateTimeFields(calendar, fields, overflow);

        year = _ES$InterpretTemporal.year;
        month = _ES$InterpretTemporal.month;
        day = _ES$InterpretTemporal.day;
        hour = _ES$InterpretTemporal.hour;
        minute = _ES$InterpretTemporal.minute;
        second = _ES$InterpretTemporal.second;
        millisecond = _ES$InterpretTemporal.millisecond;
        microsecond = _ES$InterpretTemporal.microsecond;
        nanosecond = _ES$InterpretTemporal.nanosecond;
      } else {
        var _ES$ParseTemporalDate3 = ES.ParseTemporalDateTimeString(ES.ToString(item));

        year = _ES$ParseTemporalDate3.year;
        month = _ES$ParseTemporalDate3.month;
        day = _ES$ParseTemporalDate3.day;
        hour = _ES$ParseTemporalDate3.hour;
        minute = _ES$ParseTemporalDate3.minute;
        second = _ES$ParseTemporalDate3.second;
        millisecond = _ES$ParseTemporalDate3.millisecond;
        microsecond = _ES$ParseTemporalDate3.microsecond;
        nanosecond = _ES$ParseTemporalDate3.nanosecond;
        calendar = _ES$ParseTemporalDate3.calendar;
        if (calendar === undefined) calendar = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        calendar = ES.ToTemporalCalendar(calendar);
      }

      var result = new constructor(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      if (!ES.IsTemporalDateTime(result)) throw new TypeError('invalid result');
      return result;
    },
    ToTemporalDuration: function ToTemporalDuration(item, constructor) {
      var years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;

      if (ES.Type(item) === 'Object') {
        if (ES.IsTemporalDuration(item)) return item;

        var _ES$ToTemporalDuratio = ES.ToTemporalDurationRecord(item);

        years = _ES$ToTemporalDuratio.years;
        months = _ES$ToTemporalDuratio.months;
        weeks = _ES$ToTemporalDuratio.weeks;
        days = _ES$ToTemporalDuratio.days;
        hours = _ES$ToTemporalDuratio.hours;
        minutes = _ES$ToTemporalDuratio.minutes;
        seconds = _ES$ToTemporalDuratio.seconds;
        milliseconds = _ES$ToTemporalDuratio.milliseconds;
        microseconds = _ES$ToTemporalDuratio.microseconds;
        nanoseconds = _ES$ToTemporalDuratio.nanoseconds;
      } else {
        var _ES$ParseTemporalDura = ES.ParseTemporalDurationString(ES.ToString(item));

        years = _ES$ParseTemporalDura.years;
        months = _ES$ParseTemporalDura.months;
        weeks = _ES$ParseTemporalDura.weeks;
        days = _ES$ParseTemporalDura.days;
        hours = _ES$ParseTemporalDura.hours;
        minutes = _ES$ParseTemporalDura.minutes;
        seconds = _ES$ParseTemporalDura.seconds;
        milliseconds = _ES$ParseTemporalDura.milliseconds;
        microseconds = _ES$ParseTemporalDura.microseconds;
        nanoseconds = _ES$ParseTemporalDura.nanoseconds;
      }

      var result = new constructor(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      if (!ES.IsTemporalDuration(result)) throw new TypeError('invalid result');
      return result;
    },
    ToTemporalInstant: function ToTemporalInstant(item, constructor) {
      if (ES.IsTemporalInstant(item)) return item;
      var ns = ES.ParseTemporalInstant(ES.ToString(item));
      var result = new constructor(bigIntIfAvailable(ns));
      if (!ES.IsTemporalInstant(result)) throw new TypeError('invalid result');
      return result;
    },
    ToTemporalMonthDay: function ToTemporalMonthDay(item, constructor) {
      var overflow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'constrain';
      var result;

      if (ES.Type(item) === 'Object') {
        if (ES.IsTemporalMonthDay(item)) return item;
        var calendar = item.calendar;
        if (calendar === undefined) calendar = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        calendar = ES.ToTemporalCalendar(calendar);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month']);
        var fields = ES.ToTemporalMonthDayFields(item, fieldNames);
        result = calendar.monthDayFromFields(fields, {
          overflow: overflow
        }, constructor);
      } else {
        var _ES$ParseTemporalMont = ES.ParseTemporalMonthDayString(ES.ToString(item)),
            month = _ES$ParseTemporalMont.month,
            day = _ES$ParseTemporalMont.day,
            referenceISOYear = _ES$ParseTemporalMont.referenceISOYear,
            _calendar2 = _ES$ParseTemporalMont.calendar;

        var _ES$RegulateMonthDay = ES.RegulateMonthDay(month, day, overflow);

        month = _ES$RegulateMonthDay.month;
        day = _ES$RegulateMonthDay.day;
        if (_calendar2 === undefined) _calendar2 = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        _calendar2 = ES.ToTemporalCalendar(_calendar2);
        if (referenceISOYear === undefined) referenceISOYear = 1972;
        result = new constructor(month, day, _calendar2, referenceISOYear);
      }

      if (!ES.IsTemporalMonthDay(result)) throw new TypeError('invalid result');
      return result;
    },
    ToTemporalTime: function ToTemporalTime(item, constructor) {
      var overflow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'constrain';
      var result;

      if (ES.Type(item) === 'Object') {
        if (ES.IsTemporalTime(item)) return item;
        var calendar = item.calendar;
        if (calendar === undefined) calendar = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        calendar = ES.ToTemporalCalendar(calendar);
        var fields = ES.ToTemporalTimeRecord(item);
        result = calendar.timeFromFields(fields, {
          overflow: overflow
        }, constructor);
      } else {
        var _ES$ParseTemporalTime2 = ES.ParseTemporalTimeString(ES.ToString(item)),
            hour = _ES$ParseTemporalTime2.hour,
            minute = _ES$ParseTemporalTime2.minute,
            second = _ES$ParseTemporalTime2.second,
            millisecond = _ES$ParseTemporalTime2.millisecond,
            microsecond = _ES$ParseTemporalTime2.microsecond,
            nanosecond = _ES$ParseTemporalTime2.nanosecond,
            _calendar3 = _ES$ParseTemporalTime2.calendar;

        var _ES$RegulateTime = ES.RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);

        hour = _ES$RegulateTime.hour;
        minute = _ES$RegulateTime.minute;
        second = _ES$RegulateTime.second;
        millisecond = _ES$RegulateTime.millisecond;
        microsecond = _ES$RegulateTime.microsecond;
        nanosecond = _ES$RegulateTime.nanosecond;
        if (_calendar3 === undefined) _calendar3 = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        _calendar3 = ES.ToTemporalCalendar(_calendar3);
        result = new constructor(hour, minute, second, millisecond, microsecond, nanosecond, _calendar3);
      }

      if (!ES.IsTemporalTime(result)) throw new TypeError('invalid result');
      return result;
    },
    ToTemporalYearMonth: function ToTemporalYearMonth(item, constructor) {
      var overflow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'constrain';
      var result;

      if (ES.Type(item) === 'Object') {
        if (ES.IsTemporalYearMonth(item)) return item;
        var calendar = item.calendar;
        if (calendar === undefined) calendar = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        calendar = ES.ToTemporalCalendar(calendar);
        var fieldNames = ES.CalendarFields(calendar, ['month', 'year']);
        var fields = ES.ToTemporalYearMonthFields(item, fieldNames);
        result = calendar.yearMonthFromFields(fields, {
          overflow: overflow
        }, constructor);
      } else {
        var _ES$ParseTemporalYear = ES.ParseTemporalYearMonthString(ES.ToString(item)),
            year = _ES$ParseTemporalYear.year,
            month = _ES$ParseTemporalYear.month,
            referenceISODay = _ES$ParseTemporalYear.referenceISODay,
            _calendar4 = _ES$ParseTemporalYear.calendar;

        var _ES$RegulateYearMonth = ES.RegulateYearMonth(year, month, overflow);

        year = _ES$RegulateYearMonth.year;
        month = _ES$RegulateYearMonth.month;
        if (_calendar4 === undefined) _calendar4 = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        _calendar4 = ES.ToTemporalCalendar(_calendar4);
        if (referenceISODay === undefined) referenceISODay = 1;
        result = new constructor(year, month, _calendar4, referenceISODay);
      }

      if (!ES.IsTemporalYearMonth(result)) throw new TypeError('invalid result');
      return result;
    },
    ToTemporalZonedDateTime: function ToTemporalZonedDateTime(item, constructor) {
      var overflow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'constrain';
      var disambiguation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'compatible';
      var offsetOpt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'reject';
      var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, timeZone, offset, calendar;

      if (ES.Type(item) === 'Object') {
        if (ES.IsTemporalZonedDateTime(item)) return item;
        calendar = item.calendar;
        if (calendar === undefined) calendar = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        calendar = ES.ToTemporalCalendar(calendar);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalZonedDateTimeFields(item, fieldNames);

        var _ES$InterpretTemporal2 = ES.InterpretTemporalDateTimeFields(calendar, fields, overflow);

        year = _ES$InterpretTemporal2.year;
        month = _ES$InterpretTemporal2.month;
        day = _ES$InterpretTemporal2.day;
        hour = _ES$InterpretTemporal2.hour;
        minute = _ES$InterpretTemporal2.minute;
        second = _ES$InterpretTemporal2.second;
        millisecond = _ES$InterpretTemporal2.millisecond;
        microsecond = _ES$InterpretTemporal2.microsecond;
        nanosecond = _ES$InterpretTemporal2.nanosecond;
        timeZone = ES.ToTemporalTimeZone(fields.timeZone);
        offset = fields.offset;
        if (offset !== undefined) offset = ES.ToString(offset);
      } else {
        var ianaName;

        var _ES$ParseTemporalZone = ES.ParseTemporalZonedDateTimeString(ES.ToString(item));

        year = _ES$ParseTemporalZone.year;
        month = _ES$ParseTemporalZone.month;
        day = _ES$ParseTemporalZone.day;
        hour = _ES$ParseTemporalZone.hour;
        minute = _ES$ParseTemporalZone.minute;
        second = _ES$ParseTemporalZone.second;
        millisecond = _ES$ParseTemporalZone.millisecond;
        microsecond = _ES$ParseTemporalZone.microsecond;
        nanosecond = _ES$ParseTemporalZone.nanosecond;
        ianaName = _ES$ParseTemporalZone.ianaName;
        offset = _ES$ParseTemporalZone.offset;
        calendar = _ES$ParseTemporalZone.calendar;
        if (!ianaName) throw new RangeError('time zone ID required in brackets');
        timeZone = ES.TimeZoneFrom(ianaName);
        if (!calendar) calendar = new (GetIntrinsic$1('%Temporal.ISO8601Calendar%'))();
        calendar = ES.ToTemporalCalendar(calendar);
      }

      var DateTime = GetIntrinsic$1('%Temporal.DateTime%');
      var dt = new DateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
      var instant;

      if (!offset || offsetOpt === 'ignore') {
        // Simple case: ISO string without a TZ offset (or caller wants to ignore
        // the offset), so just convert DateTime to Instant in the given time zone
        instant = ES.GetTemporalInstantFor(timeZone, dt, disambiguation);
      } else {
        // The caller wants the offset to always win ('use') OR the caller is OK
        // with the offset winning ('prefer' or 'reject') as long as it's valid
        // for this timezone and date/time.
        var offsetNs = ES.ParseOffsetString(offset);

        if (offsetOpt === 'use') {
          // Calculate the instant for the input's date/time and offset
          var epochNs = ES.GetEpochFromParts(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), GetSlot(dt, ISO_HOUR), GetSlot(dt, ISO_MINUTE), GetSlot(dt, ISO_SECOND), GetSlot(dt, ISO_MILLISECOND), GetSlot(dt, ISO_MICROSECOND), GetSlot(dt, ISO_NANOSECOND));
          if (epochNs === null) throw new RangeError('ZonedDateTime outside of supported range');
          var TemporalInstant = GetIntrinsic$1('%Temporal.Instant%');
          instant = new TemporalInstant(epochNs.minus(offsetNs));
        } else {
          // "prefer" or "reject"
          var possibleInstants = timeZone.getPossibleInstantsFor(dt);

          var _iterator7 = _createForOfIteratorHelper(possibleInstants),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var candidate = _step7.value;
              var candidateOffset = ES.GetOffsetNanosecondsFor(timeZone, candidate);

              if (candidateOffset === offsetNs) {
                instant = candidate;
                break;
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          if (!instant) {
            // the user-provided offset doesn't match any instants for this time
            // zone and date/time.
            if (offsetOpt === 'reject') throw new RangeError("Offset ".concat(offset, " is invalid for ").concat(dt, " in ").concat(timeZone)); // fall through: offsetOpt === 'prefer', but the offset doesn't match
            // so fall back to use the time zone instead.

            instant = ES.GetTemporalInstantFor(timeZone, dt, disambiguation);
          }
        }
      }

      var result = new constructor(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
      if (!ES.IsTemporalZonedDateTime(result)) throw new TypeError('invalid result');
      return result;
    },
    CalendarFrom: function CalendarFrom(calendarLike) {
      var TemporalCalendar = GetIntrinsic$1('%Temporal.Calendar%');
      var from = TemporalCalendar.from;

      if (from === undefined) {
        from = GetIntrinsic$1('%Temporal.Calendar.from%');
      }

      var calendar = ES.Call(from, TemporalCalendar, [calendarLike]);

      if (ES.Type(calendar) !== 'Object') {
        throw new TypeError('Temporal.Calendar.from should return an object');
      }

      return calendar;
    },
    CalendarFields: function CalendarFields(calendar, fieldNames) {
      var fields = calendar.fields;
      if (fields === undefined) fields = GetIntrinsic$1('%Temporal.Calendar.prototype.fields%');
      var array = ES.Call(fields, calendar, [fieldNames]);
      return ES.CreateListFromArrayLike(array, ['String']);
    },
    CalendarToString: function CalendarToString(calendar) {
      var toString = calendar.toString;
      if (toString === undefined) toString = GetIntrinsic$1('%Temporal.Calendar.prototype.toString%');
      return ES.ToString(ES.Call(toString, calendar));
    },
    ToTemporalCalendar: function ToTemporalCalendar(calendarLike) {
      if (ES.Type(calendarLike) === 'Object') {
        return calendarLike;
      }

      var identifier = ES.ToString(calendarLike);
      return ES.CalendarFrom(identifier);
    },
    CalendarCompare: function CalendarCompare(one, two) {
      var cal1 = ES.CalendarToString(one);
      var cal2 = ES.CalendarToString(two);
      return cal1 < cal2 ? -1 : cal1 > cal2 ? 1 : 0;
    },
    CalendarEquals: function CalendarEquals(one, two) {
      var cal1 = ES.CalendarToString(one);
      var cal2 = ES.CalendarToString(two);
      return cal1 === cal2;
    },
    ConsolidateCalendars: function ConsolidateCalendars(one, two) {
      var sOne = ES.CalendarToString(one);
      var sTwo = ES.CalendarToString(two);

      if (sOne === sTwo || sOne === 'iso8601') {
        return two;
      } else if (two === 'iso8601') {
        return one;
      } else {
        throw new RangeError('irreconcilable calendars');
      }
    },
    TimeZoneFrom: function TimeZoneFrom(temporalTimeZoneLike) {
      var TemporalTimeZone = GetIntrinsic$1('%Temporal.TimeZone%');
      var from = TemporalTimeZone.from;

      if (from === undefined) {
        from = GetIntrinsic$1('%Temporal.TimeZone.from%');
      }

      return ES.Call(from, TemporalTimeZone, [temporalTimeZoneLike]);
    },
    ToTemporalTimeZone: function ToTemporalTimeZone(temporalTimeZoneLike) {
      if (ES.Type(temporalTimeZoneLike) === 'Object') {
        return temporalTimeZoneLike;
      }

      var identifier = ES.ToString(temporalTimeZoneLike);
      return ES.TimeZoneFrom(identifier);
    },
    TimeZoneCompare: function TimeZoneCompare(one, two) {
      var tz1 = ES.TimeZoneToString(one);
      var tz2 = ES.TimeZoneToString(two);
      return tz1 < tz2 ? -1 : tz1 > tz2 ? 1 : 0;
    },
    TimeZoneEquals: function TimeZoneEquals(one, two) {
      var tz1 = ES.TimeZoneToString(one);
      var tz2 = ES.TimeZoneToString(two);
      return tz1 === tz2;
    },
    TemporalDateTimeToDate: function TemporalDateTimeToDate(dateTime) {
      var Date = GetIntrinsic$1('%Temporal.Date%');
      return new Date(GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, CALENDAR));
    },
    TemporalDateTimeToTime: function TemporalDateTimeToTime(dateTime) {
      var Time = GetIntrinsic$1('%Temporal.Time%');
      return new Time(GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
    },
    GetOffsetNanosecondsFor: function GetOffsetNanosecondsFor(timeZone, instant) {
      var getOffsetNanosecondsFor = timeZone.getOffsetNanosecondsFor;

      if (getOffsetNanosecondsFor === undefined) {
        getOffsetNanosecondsFor = GetIntrinsic$1('%Temporal.TimeZone.prototype.getOffsetNanosecondsFor%');
      }

      var offsetNs = ES.Call(getOffsetNanosecondsFor, timeZone, [instant]);

      if (typeof offsetNs !== 'number') {
        throw new TypeError('bad return from getOffsetNanosecondsFor');
      }

      if (!Number.isInteger(offsetNs) || Math.abs(offsetNs) > 86400e9) {
        throw new RangeError('out-of-range return from getOffsetNanosecondsFor');
      }

      return offsetNs;
    },
    GetOffsetStringFor: function GetOffsetStringFor(timeZone, instant) {
      var getOffsetStringFor = timeZone.getOffsetStringFor;

      if (getOffsetStringFor === undefined) {
        getOffsetStringFor = GetIntrinsic$1('%Temporal.TimeZone.prototype.getOffsetStringFor%');
      }

      return ES.ToString(ES.Call(getOffsetStringFor, timeZone, [instant]));
    },
    GetTemporalDateTimeFor: function GetTemporalDateTimeFor(timeZone, instant, calendar) {
      var getDateTimeFor = timeZone.getDateTimeFor;

      if (getDateTimeFor === undefined) {
        getDateTimeFor = GetIntrinsic$1('%Temporal.TimeZone.prototype.getDateTimeFor%');
      }

      var dateTime = ES.Call(getDateTimeFor, timeZone, [instant, calendar]);

      if (!ES.IsTemporalDateTime(dateTime)) {
        throw new TypeError('Unexpected result from getDateTimeFor');
      }

      return dateTime;
    },
    GetTemporalInstantFor: function GetTemporalInstantFor(timeZone, dateTime, disambiguation) {
      var getInstantFor = timeZone.getInstantFor;

      if (getInstantFor === undefined) {
        getInstantFor = GetIntrinsic$1('%Temporal.TimeZone.prototype.getInstantFor%');
      }

      return ES.Call(getInstantFor, timeZone, [dateTime, {
        disambiguation: disambiguation
      }]);
    },
    TimeZoneToString: function TimeZoneToString(timeZone) {
      var toString = timeZone.toString;

      if (toString === undefined) {
        toString = GetIntrinsic$1('%Temporal.TimeZone.prototype.toString%');
      }

      return ES.ToString(ES.Call(toString, timeZone));
    },
    ISOTimeZoneString: function ISOTimeZoneString(timeZone, instant) {
      var name = ES.TimeZoneToString(timeZone);
      var offset = ES.GetOffsetStringFor(timeZone, instant);

      if (name === 'UTC') {
        return 'Z';
      }

      if (name === offset) {
        return offset;
      }

      return "".concat(offset, "[").concat(name, "]");
    },
    ISOYearString: function ISOYearString(year) {
      var yearString;

      if (year < 1000 || year > 9999) {
        var sign = year < 0 ? '-' : '+';
        var yearNumber = Math.abs(year);
        yearString = sign + "000000".concat(yearNumber).slice(-6);
      } else {
        yearString = "".concat(year);
      }

      return yearString;
    },
    ISODateTimePartString: function ISODateTimePartString(part) {
      return "00".concat(part).slice(-2);
    },
    FormatSecondsStringPart: function FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision) {
      if (precision === 'minute') return '';
      var secs = ":".concat(ES.ISODateTimePartString(second));
      var fraction = millisecond * 1e6 + microsecond * 1e3 + nanosecond;

      if (precision === 'auto') {
        if (fraction === 0) return secs;
        fraction = "".concat(fraction).padStart(9, '0');

        while (fraction[fraction.length - 1] === '0') {
          fraction = fraction.slice(0, -1);
        }
      } else {
        if (precision === 0) return secs;
        fraction = "".concat(fraction).slice(0, precision).padStart(precision, '0');
      }

      return "".concat(secs, ".").concat(fraction);
    },
    TemporalInstantToString: function TemporalInstantToString(instant, timeZone, precision) {
      var dateTime = ES.GetTemporalDateTimeFor(timeZone, instant);
      var year = ES.ISOYearString(dateTime.year);
      var month = ES.ISODateTimePartString(dateTime.month);
      var day = ES.ISODateTimePartString(dateTime.day);
      var hour = ES.ISODateTimePartString(dateTime.hour);
      var minute = ES.ISODateTimePartString(dateTime.minute);
      var seconds = ES.FormatSecondsStringPart(dateTime.second, dateTime.millisecond, dateTime.microsecond, dateTime.nanosecond, precision);
      var timeZoneString = ES.ISOTimeZoneString(timeZone, instant);
      return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute).concat(seconds).concat(timeZoneString);
    },
    TemporalDurationToString: function TemporalDurationToString(duration) {
      function formatNumber(num) {
        if (num <= Number.MAX_SAFE_INTEGER) return num.toString(10);
        return BigInteger(num).toString();
      }

      var years = GetSlot(duration, YEARS);
      var months = GetSlot(duration, MONTHS);
      var weeks = GetSlot(duration, WEEKS);
      var days = GetSlot(duration, DAYS);
      var hours = GetSlot(duration, HOURS);
      var minutes = GetSlot(duration, MINUTES);
      var seconds = GetSlot(duration, SECONDS);
      var ms = GetSlot(duration, MILLISECONDS);
      var µs = GetSlot(duration, MICROSECONDS);
      var ns = GetSlot(duration, NANOSECONDS);
      var sign = ES.DurationSign(years, months, weeks, days, hours, minutes, seconds, ms, µs, ns);
      var dateParts = [];
      if (years) dateParts.push("".concat(formatNumber(Math.abs(years)), "Y"));
      if (months) dateParts.push("".concat(formatNumber(Math.abs(months)), "M"));
      if (weeks) dateParts.push("".concat(formatNumber(Math.abs(weeks)), "W"));
      if (days) dateParts.push("".concat(formatNumber(Math.abs(days)), "D"));
      var timeParts = [];
      if (hours) timeParts.push("".concat(formatNumber(Math.abs(hours)), "H"));
      if (minutes) timeParts.push("".concat(formatNumber(Math.abs(minutes)), "M"));
      var secondParts = [];
      var total = BigInteger(seconds).times(1000).plus(ms).times(1000).plus(µs).times(1000).plus(ns);

      var _total$divmod = total.divmod(1000);

      total = _total$divmod.quotient;
      ns = _total$divmod.remainder;

      var _total$divmod2 = total.divmod(1000);

      total = _total$divmod2.quotient;
      µs = _total$divmod2.remainder;

      var _total$divmod3 = total.divmod(1000);

      seconds = _total$divmod3.quotient;
      ms = _total$divmod3.remainder;
      ms = ms.toJSNumber();
      µs = µs.toJSNumber();
      ns = ns.toJSNumber();
      if (ns) secondParts.unshift("".concat(Math.abs(ns)).padStart(3, '0'));
      if (µs || secondParts.length) secondParts.unshift("".concat(Math.abs(µs)).padStart(3, '0'));
      if (ms || secondParts.length) secondParts.unshift("".concat(Math.abs(ms)).padStart(3, '0'));
      if (secondParts.length) secondParts.unshift('.');
      if (!seconds.isZero() || secondParts.length) secondParts.unshift(seconds.abs().toString());
      if (secondParts.length) timeParts.push("".concat(secondParts.join(''), "S"));
      if (timeParts.length) timeParts.unshift('T');
      if (!dateParts.length && !timeParts.length) return 'PT0S';
      return "".concat(sign < 0 ? '-' : '', "P").concat(dateParts.join('')).concat(timeParts.join(''));
    },
    ParseOffsetString: function ParseOffsetString(string) {
      var match = OFFSET.exec(String(string));
      if (!match) return null;
      var sign = match[1] === '-' || match[1] === "\u2212" ? -1 : +1;
      var hours = +match[2];
      var minutes = +(match[3] || 0);
      var seconds = +(match[4] || 0);
      var nanoseconds = +((match[5] || 0) + '000000000').slice(0, 9);
      return sign * (((hours * 60 + minutes) * 60 + seconds) * 1e9 + nanoseconds);
    },
    GetCanonicalTimeZoneIdentifier: function GetCanonicalTimeZoneIdentifier(timeZoneIdentifier) {
      var offsetNs = ES.ParseOffsetString(timeZoneIdentifier);
      if (offsetNs !== null) return ES.FormatTimeZoneOffsetString(offsetNs);
      var formatter = new IntlDateTimeFormat('en-us', {
        timeZone: String(timeZoneIdentifier),
        hour12: false,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
      return formatter.resolvedOptions().timeZone;
    },
    GetIANATimeZoneOffsetNanoseconds: function GetIANATimeZoneOffsetNanoseconds(epochNanoseconds, id) {
      var _ES$GetIANATimeZoneDa = ES.GetIANATimeZoneDateTimeParts(epochNanoseconds, id),
          year = _ES$GetIANATimeZoneDa.year,
          month = _ES$GetIANATimeZoneDa.month,
          day = _ES$GetIANATimeZoneDa.day,
          hour = _ES$GetIANATimeZoneDa.hour,
          minute = _ES$GetIANATimeZoneDa.minute,
          second = _ES$GetIANATimeZoneDa.second,
          millisecond = _ES$GetIANATimeZoneDa.millisecond,
          microsecond = _ES$GetIANATimeZoneDa.microsecond,
          nanosecond = _ES$GetIANATimeZoneDa.nanosecond;

      var utc = ES.GetEpochFromParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
      if (utc === null) throw new RangeError('Date outside of supported range');
      return +utc.minus(epochNanoseconds);
    },
    FormatTimeZoneOffsetString: function FormatTimeZoneOffsetString(offsetNanoseconds) {
      var sign = offsetNanoseconds < 0 ? '-' : '+';
      offsetNanoseconds = Math.abs(offsetNanoseconds);
      var nanoseconds = offsetNanoseconds % 1e9;
      var seconds = Math.floor(offsetNanoseconds / 1e9) % 60;
      var minutes = Math.floor(offsetNanoseconds / 60e9) % 60;
      var hours = Math.floor(offsetNanoseconds / 3600e9);
      var hourString = ES.ISODateTimePartString(hours);
      var minuteString = ES.ISODateTimePartString(minutes);
      var secondString = ES.ISODateTimePartString(seconds);
      var post = '';

      if (nanoseconds) {
        var fraction = "".concat(nanoseconds).padStart(9, '0');

        while (fraction[fraction.length - 1] === '0') {
          fraction = fraction.slice(0, -1);
        }

        post = ":".concat(secondString, ".").concat(fraction);
      } else if (seconds) {
        post = ":".concat(secondString);
      }

      return "".concat(sign).concat(hourString, ":").concat(minuteString).concat(post);
    },
    GetEpochFromParts: function GetEpochFromParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
      // Note: Date.UTC() interprets one and two-digit years as being in the
      // 20th century, so don't use it
      var legacyDate = new Date();
      legacyDate.setUTCHours(hour, minute, second, millisecond);
      legacyDate.setUTCFullYear(year, month - 1, day);
      var ms = legacyDate.getTime();
      if (Number.isNaN(ms)) return null;
      var ns = BigInteger(ms).multiply(1e6);
      ns = ns.plus(BigInteger(microsecond).multiply(1e3));
      ns = ns.plus(BigInteger(nanosecond));
      if (ns.lesser(NS_MIN) || ns.greater(NS_MAX)) return null;
      return ns;
    },
    GetPartsFromEpoch: function GetPartsFromEpoch(epochNanoseconds) {
      var _bigInt$divmod = BigInteger(epochNanoseconds).divmod(1e6),
          quotient = _bigInt$divmod.quotient,
          remainder = _bigInt$divmod.remainder;

      var epochMilliseconds = +quotient;
      var nanos = +remainder;

      if (nanos < 0) {
        nanos += 1e6;
        epochMilliseconds -= 1;
      }

      var microsecond = Math.floor(nanos / 1e3) % 1e3;
      var nanosecond = nanos % 1e3;
      var item = new Date(epochMilliseconds);
      var year = item.getUTCFullYear();
      var month = item.getUTCMonth() + 1;
      var day = item.getUTCDate();
      var hour = item.getUTCHours();
      var minute = item.getUTCMinutes();
      var second = item.getUTCSeconds();
      var millisecond = item.getUTCMilliseconds();
      return {
        epochMilliseconds: epochMilliseconds,
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    GetIANATimeZoneDateTimeParts: function GetIANATimeZoneDateTimeParts(epochNanoseconds, id) {
      var _ES$GetPartsFromEpoch = ES.GetPartsFromEpoch(epochNanoseconds),
          epochMilliseconds = _ES$GetPartsFromEpoch.epochMilliseconds,
          millisecond = _ES$GetPartsFromEpoch.millisecond,
          microsecond = _ES$GetPartsFromEpoch.microsecond,
          nanosecond = _ES$GetPartsFromEpoch.nanosecond;

      var _ES$GetFormatterParts = ES.GetFormatterParts(id, epochMilliseconds),
          year = _ES$GetFormatterParts.year,
          month = _ES$GetFormatterParts.month,
          day = _ES$GetFormatterParts.day,
          hour = _ES$GetFormatterParts.hour,
          minute = _ES$GetFormatterParts.minute,
          second = _ES$GetFormatterParts.second;

      return ES.BalanceDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    },
    GetIANATimeZoneNextTransition: function GetIANATimeZoneNextTransition(epochNanoseconds, id) {
      var uppercap = ES.SystemUTCEpochNanoSeconds() + 366 * DAYMILLIS * 1e6;
      var leftNanos = epochNanoseconds;
      var leftOffsetNs = ES.GetIANATimeZoneOffsetNanoseconds(leftNanos, id);
      var rightNanos = leftNanos;
      var rightOffsetNs = leftOffsetNs;

      while (leftOffsetNs === rightOffsetNs && BigInteger(leftNanos).compare(uppercap) === -1) {
        rightNanos = BigInteger(leftNanos).plus(2 * 7 * DAYMILLIS * 1e6);
        rightOffsetNs = ES.GetIANATimeZoneOffsetNanoseconds(rightNanos, id);

        if (leftOffsetNs === rightOffsetNs) {
          leftNanos = rightNanos;
        }
      }

      if (leftOffsetNs === rightOffsetNs) return null;
      var result = bisect(function (epochNs) {
        return ES.GetIANATimeZoneOffsetNanoseconds(epochNs, id);
      }, leftNanos, rightNanos, leftOffsetNs, rightOffsetNs);
      return result;
    },
    GetIANATimeZonePreviousTransition: function GetIANATimeZonePreviousTransition(epochNanoseconds, id) {
      var lowercap = BEFORE_FIRST_DST; // 1847-01-01T00:00:00Z

      var rightNanos = epochNanoseconds;
      var rightOffsetNs = ES.GetIANATimeZoneOffsetNanoseconds(rightNanos, id);
      var leftNanos = rightNanos;
      var leftOffsetNs = rightOffsetNs;

      while (rightOffsetNs === leftOffsetNs && BigInteger(rightNanos).compare(lowercap) === 1) {
        leftNanos = BigInteger(rightNanos).minus(2 * 7 * DAYMILLIS * 1e6);
        leftOffsetNs = ES.GetIANATimeZoneOffsetNanoseconds(leftNanos, id);

        if (rightOffsetNs === leftOffsetNs) {
          rightNanos = leftNanos;
        }
      }

      if (rightOffsetNs === leftOffsetNs) return null;
      var result = bisect(function (epochNs) {
        return ES.GetIANATimeZoneOffsetNanoseconds(epochNs, id);
      }, leftNanos, rightNanos, leftOffsetNs, rightOffsetNs);
      return result;
    },
    GetFormatterParts: function GetFormatterParts(timeZone, epochMilliseconds) {
      var formatter = new IntlDateTimeFormat('en-us', {
        timeZone: timeZone,
        hour12: false,
        era: 'short',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }); // FIXME: can this use formatToParts instead?

      var datetime = formatter.format(new Date(epochMilliseconds));

      var _datetime$split = datetime.split(/,\s+/),
          _datetime$split2 = _slicedToArray(_datetime$split, 3),
          date = _datetime$split2[0],
          fullYear = _datetime$split2[1],
          time = _datetime$split2[2];

      var _date$split = date.split(' '),
          _date$split2 = _slicedToArray(_date$split, 2),
          month = _date$split2[0],
          day = _date$split2[1];

      var _fullYear$split = fullYear.split(' '),
          _fullYear$split2 = _slicedToArray(_fullYear$split, 2),
          year = _fullYear$split2[0],
          era = _fullYear$split2[1];

      var _time$split = time.split(':'),
          _time$split2 = _slicedToArray(_time$split, 3),
          hour = _time$split2[0],
          minute = _time$split2[1],
          second = _time$split2[2];

      return {
        year: era === 'BC' ? -year + 1 : +year,
        month: +month,
        day: +day,
        hour: hour === '24' ? 0 : +hour,
        // bugs.chromium.org/p/chromium/issues/detail?id=1045791
        minute: +minute,
        second: +second
      };
    },
    GetIANATimeZoneEpochValue: function GetIANATimeZoneEpochValue(id, year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
      var ns = ES.GetEpochFromParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
      if (ns === null) throw new RangeError('DateTime outside of supported range');
      var dayNanos = BigInteger(DAYMILLIS).multiply(1e6);
      var nsEarlier = ns.minus(dayNanos);
      if (nsEarlier.lesser(NS_MIN)) nsEarlier = ns;
      var nsLater = ns.plus(dayNanos);
      if (nsLater.greater(NS_MAX)) nsLater = ns;
      var earliest = ES.GetIANATimeZoneOffsetNanoseconds(nsEarlier, id);
      var latest = ES.GetIANATimeZoneOffsetNanoseconds(nsLater, id);
      var found = earliest === latest ? [earliest] : [earliest, latest];
      return found.map(function (offsetNanoseconds) {
        var epochNanoseconds = BigInteger(ns).minus(offsetNanoseconds);
        var parts = ES.GetIANATimeZoneDateTimeParts(epochNanoseconds, id);

        if (year !== parts.year || month !== parts.month || day !== parts.day || hour !== parts.hour || minute !== parts.minute || second !== parts.second || millisecond !== parts.millisecond || microsecond !== parts.microsecond || nanosecond !== parts.nanosecond) {
          return undefined;
        }

        return epochNanoseconds;
      }).filter(function (x) {
        return x !== undefined;
      });
    },
    LeapYear: function LeapYear(year) {
      if (undefined === year) return false;
      var isDiv4 = year % 4 === 0;
      var isDiv100 = year % 100 === 0;
      var isDiv400 = year % 400 === 0;
      return isDiv4 && (!isDiv100 || isDiv400);
    },
    DaysInMonth: function DaysInMonth(year, month) {
      var DoM = {
        standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      };
      return DoM[ES.LeapYear(year) ? 'leapyear' : 'standard'][month - 1];
    },
    DayOfWeek: function DayOfWeek(year, month, day) {
      var m = month + (month < 3 ? 10 : -2);
      var Y = year - (month < 3 ? 1 : 0);
      var c = Math.floor(Y / 100);
      var y = Y - c * 100;
      var d = day;
      var pD = d;
      var pM = Math.floor(2.6 * m - 0.2);
      var pY = y + Math.floor(y / 4);
      var pC = Math.floor(c / 4) - 2 * c;
      var dow = (pD + pM + pY + pC) % 7;
      return dow + (dow <= 0 ? 7 : 0);
    },
    DayOfYear: function DayOfYear(year, month, day) {
      var days = day;

      for (var m = month - 1; m > 0; m--) {
        days += ES.DaysInMonth(year, m);
      }

      return days;
    },
    WeekOfYear: function WeekOfYear(year, month, day) {
      var doy = ES.DayOfYear(year, month, day);
      var dow = ES.DayOfWeek(year, month, day) || 7;
      var doj = ES.DayOfWeek(year, 1, 1);
      var week = Math.floor((doy - dow + 10) / 7);

      if (week < 1) {
        if (doj === (ES.LeapYear(year) ? 5 : 6)) {
          return 53;
        } else {
          return 52;
        }
      }

      if (week === 53) {
        if ((ES.LeapYear(year) ? 366 : 365) - doy < 4 - dow) {
          return 1;
        }
      }

      return week;
    },
    DurationSign: function DurationSign(y, mon, w, d, h, min, s, ms, µs, ns) {
      for (var _i2 = 0, _arr = [y, mon, w, d, h, min, s, ms, µs, ns]; _i2 < _arr.length; _i2++) {
        var prop = _arr[_i2];
        if (prop !== 0) return prop < 0 ? -1 : 1;
      }

      return 0;
    },
    BalanceYearMonth: function BalanceYearMonth(year, month) {
      if (!Number.isFinite(year) || !Number.isFinite(month)) throw new RangeError('infinity is out of range');
      month -= 1;
      year += Math.floor(month / 12);
      month %= 12;
      if (month < 0) month += 12;
      month += 1;
      return {
        year: year,
        month: month
      };
    },
    BalanceDate: function BalanceDate(year, month, day) {
      if (!Number.isFinite(day)) throw new RangeError('infinity is out of range');

      var _ES$BalanceYearMonth = ES.BalanceYearMonth(year, month);

      year = _ES$BalanceYearMonth.year;
      month = _ES$BalanceYearMonth.month;
      var daysInYear = 0;
      var testYear = month > 2 ? year : year - 1;

      while (daysInYear = ES.LeapYear(testYear) ? 366 : 365, day < -daysInYear) {
        year -= 1;
        testYear -= 1;
        day += daysInYear;
      }

      testYear += 1;

      while (daysInYear = ES.LeapYear(testYear) ? 366 : 365, day > daysInYear) {
        year += 1;
        testYear += 1;
        day -= daysInYear;
      }

      while (day < 1) {
        var _ES$BalanceYearMonth2 = ES.BalanceYearMonth(year, month - 1);

        year = _ES$BalanceYearMonth2.year;
        month = _ES$BalanceYearMonth2.month;
        day += ES.DaysInMonth(year, month);
      }

      while (day > ES.DaysInMonth(year, month)) {
        day -= ES.DaysInMonth(year, month);

        var _ES$BalanceYearMonth3 = ES.BalanceYearMonth(year, month + 1);

        year = _ES$BalanceYearMonth3.year;
        month = _ES$BalanceYearMonth3.month;
      }

      return {
        year: year,
        month: month,
        day: day
      };
    },
    BalanceDateTime: function BalanceDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
      var deltaDays;

      var _ES$BalanceTime = ES.BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond);

      deltaDays = _ES$BalanceTime.deltaDays;
      hour = _ES$BalanceTime.hour;
      minute = _ES$BalanceTime.minute;
      second = _ES$BalanceTime.second;
      millisecond = _ES$BalanceTime.millisecond;
      microsecond = _ES$BalanceTime.microsecond;
      nanosecond = _ES$BalanceTime.nanosecond;

      var _ES$BalanceDate = ES.BalanceDate(year, month, day + deltaDays);

      year = _ES$BalanceDate.year;
      month = _ES$BalanceDate.month;
      day = _ES$BalanceDate.day;
      return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    BalanceTime: function BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond) {
      if (!Number.isFinite(hour) || !Number.isFinite(minute) || !Number.isFinite(second) || !Number.isFinite(millisecond) || !Number.isFinite(microsecond) || !Number.isFinite(nanosecond)) {
        throw new RangeError('infinity is out of range');
      }

      microsecond += Math.floor(nanosecond / 1000);
      nanosecond = ES.NonNegativeModulo(nanosecond, 1000);
      millisecond += Math.floor(microsecond / 1000);
      microsecond = ES.NonNegativeModulo(microsecond, 1000);
      second += Math.floor(millisecond / 1000);
      millisecond = ES.NonNegativeModulo(millisecond, 1000);
      minute += Math.floor(second / 60);
      second = ES.NonNegativeModulo(second, 60);
      hour += Math.floor(minute / 60);
      minute = ES.NonNegativeModulo(minute, 60);
      var deltaDays = Math.floor(hour / 24);
      hour = ES.NonNegativeModulo(hour, 24);
      return {
        deltaDays: deltaDays,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    BalanceDurationDate: function BalanceDurationDate(years, months, startYear, startMonth, startDay) {
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      var _ES$BalanceYearMonth4 = ES.BalanceYearMonth(startYear + years, startMonth + months),
          year = _ES$BalanceYearMonth4.year,
          month = _ES$BalanceYearMonth4.month;

      while (startDay > ES.DaysInMonth(year, month)) {
        months -= 1;

        if (months < 0) {
          years -= 1;
          months += 12;
        }

        var _ES$BalanceYearMonth5 = ES.BalanceYearMonth(startYear + years, startMonth + months);

        year = _ES$BalanceYearMonth5.year;
        month = _ES$BalanceYearMonth5.month;
      }

      return {
        year: year,
        month: month,
        years: years,
        months: months
      };
    },
    BalanceDuration: function BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit) {
      hours = BigInteger(hours).add(BigInteger(days).multiply(24));
      minutes = BigInteger(minutes).add(hours.multiply(60));
      seconds = BigInteger(seconds).add(minutes.multiply(60));
      milliseconds = BigInteger(milliseconds).add(seconds.multiply(1000));
      microseconds = BigInteger(microseconds).add(milliseconds.multiply(1000));
      nanoseconds = BigInteger(nanoseconds).add(microseconds.multiply(1000));
      var sign = nanoseconds.lesser(0) ? -1 : 1;
      nanoseconds = nanoseconds.abs();
      microseconds = milliseconds = seconds = minutes = hours = days = BigInteger.zero;

      switch (largestUnit) {
        case 'years':
        case 'months':
        case 'weeks':
        case 'days':
          var _nanoseconds$divmod = nanoseconds.divmod(1000);

          microseconds = _nanoseconds$divmod.quotient;
          nanoseconds = _nanoseconds$divmod.remainder;

          var _microseconds$divmod = microseconds.divmod(1000);

          milliseconds = _microseconds$divmod.quotient;
          microseconds = _microseconds$divmod.remainder;

          var _milliseconds$divmod = milliseconds.divmod(1000);

          seconds = _milliseconds$divmod.quotient;
          milliseconds = _milliseconds$divmod.remainder;

          var _seconds$divmod = seconds.divmod(60);

          minutes = _seconds$divmod.quotient;
          seconds = _seconds$divmod.remainder;

          var _minutes$divmod = minutes.divmod(60);

          hours = _minutes$divmod.quotient;
          minutes = _minutes$divmod.remainder;

          var _hours$divmod = hours.divmod(24);

          days = _hours$divmod.quotient;
          hours = _hours$divmod.remainder;
          break;

        case 'hours':
          var _nanoseconds$divmod2 = nanoseconds.divmod(1000);

          microseconds = _nanoseconds$divmod2.quotient;
          nanoseconds = _nanoseconds$divmod2.remainder;

          var _microseconds$divmod2 = microseconds.divmod(1000);

          milliseconds = _microseconds$divmod2.quotient;
          microseconds = _microseconds$divmod2.remainder;

          var _milliseconds$divmod2 = milliseconds.divmod(1000);

          seconds = _milliseconds$divmod2.quotient;
          milliseconds = _milliseconds$divmod2.remainder;

          var _seconds$divmod2 = seconds.divmod(60);

          minutes = _seconds$divmod2.quotient;
          seconds = _seconds$divmod2.remainder;

          var _minutes$divmod2 = minutes.divmod(60);

          hours = _minutes$divmod2.quotient;
          minutes = _minutes$divmod2.remainder;
          break;

        case 'minutes':
          var _nanoseconds$divmod3 = nanoseconds.divmod(1000);

          microseconds = _nanoseconds$divmod3.quotient;
          nanoseconds = _nanoseconds$divmod3.remainder;

          var _microseconds$divmod3 = microseconds.divmod(1000);

          milliseconds = _microseconds$divmod3.quotient;
          microseconds = _microseconds$divmod3.remainder;

          var _milliseconds$divmod3 = milliseconds.divmod(1000);

          seconds = _milliseconds$divmod3.quotient;
          milliseconds = _milliseconds$divmod3.remainder;

          var _seconds$divmod3 = seconds.divmod(60);

          minutes = _seconds$divmod3.quotient;
          seconds = _seconds$divmod3.remainder;
          break;

        case 'seconds':
          var _nanoseconds$divmod4 = nanoseconds.divmod(1000);

          microseconds = _nanoseconds$divmod4.quotient;
          nanoseconds = _nanoseconds$divmod4.remainder;

          var _microseconds$divmod4 = microseconds.divmod(1000);

          milliseconds = _microseconds$divmod4.quotient;
          microseconds = _microseconds$divmod4.remainder;

          var _milliseconds$divmod4 = milliseconds.divmod(1000);

          seconds = _milliseconds$divmod4.quotient;
          milliseconds = _milliseconds$divmod4.remainder;
          break;

        case 'milliseconds':
          var _nanoseconds$divmod5 = nanoseconds.divmod(1000);

          microseconds = _nanoseconds$divmod5.quotient;
          nanoseconds = _nanoseconds$divmod5.remainder;

          var _microseconds$divmod5 = microseconds.divmod(1000);

          milliseconds = _microseconds$divmod5.quotient;
          microseconds = _microseconds$divmod5.remainder;
          break;

        case 'microseconds':
          var _nanoseconds$divmod6 = nanoseconds.divmod(1000);

          microseconds = _nanoseconds$divmod6.quotient;
          nanoseconds = _nanoseconds$divmod6.remainder;
          break;

        case 'nanoseconds':
          break;

        default:
          throw new Error('assert not reached');
      }

      days = days.toJSNumber() * sign;
      hours = hours.toJSNumber() * sign;
      minutes = minutes.toJSNumber() * sign;
      seconds = seconds.toJSNumber() * sign;
      milliseconds = milliseconds.toJSNumber() * sign;
      microseconds = microseconds.toJSNumber() * sign;
      nanoseconds = nanoseconds.toJSNumber() * sign;
      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        microseconds: microseconds,
        nanoseconds: nanoseconds
      };
    },
    UnbalanceDurationRelative: function UnbalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo) {
      var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
      var TemporalDuration = GetIntrinsic$1('%Temporal.Duration%');
      var sign = ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
      var calendar;

      if (relativeTo) {
        if (!ES.IsTemporalDateTime(relativeTo)) throw new TypeError('starting point must be DateTime');
        calendar = GetSlot(relativeTo, CALENDAR);
      }

      var oneYear = new TemporalDuration(sign);
      var oneMonth = new TemporalDuration(0, sign);
      var oneWeek = new TemporalDuration(0, 0, sign);

      switch (largestUnit) {
        case 'years':
          // no-op
          break;

        case 'months':
          if (!calendar) throw new RangeError('a starting point is required for months balancing'); // balance years down to months

          while (Math.abs(years) > 0) {
            var newRelativeTo = calendar.dateAdd(relativeTo, oneYear, {}, TemporalDate);
            var oneYearMonths = calendar.dateUntil(relativeTo, newRelativeTo, {
              largestUnit: 'months'
            }).months;
            relativeTo = newRelativeTo;
            months += oneYearMonths;
            years -= sign;
          }

          break;

        case 'weeks':
          if (!calendar) throw new RangeError('a starting point is required for weeks balancing'); // balance years down to days

          while (Math.abs(years) > 0) {
            var oneYearDays = void 0;

            var _ES$MoveRelativeDate = ES.MoveRelativeDate(calendar, relativeTo, oneYear);

            relativeTo = _ES$MoveRelativeDate.relativeTo;
            oneYearDays = _ES$MoveRelativeDate.days;
            days += oneYearDays;
            years -= sign;
          } // balance months down to days


          while (Math.abs(months) > 0) {
            var oneMonthDays = void 0;

            var _ES$MoveRelativeDate2 = ES.MoveRelativeDate(calendar, relativeTo, oneMonth);

            relativeTo = _ES$MoveRelativeDate2.relativeTo;
            oneMonthDays = _ES$MoveRelativeDate2.days;
            days += oneMonthDays;
            months -= sign;
          }

          break;

        default:
          // balance years down to days
          while (Math.abs(years) > 0) {
            if (!calendar) throw new RangeError('a starting point is required for balancing calendar units');

            var _oneYearDays = void 0;

            var _ES$MoveRelativeDate3 = ES.MoveRelativeDate(calendar, relativeTo, oneYear);

            relativeTo = _ES$MoveRelativeDate3.relativeTo;
            _oneYearDays = _ES$MoveRelativeDate3.days;
            days += _oneYearDays;
            years -= sign;
          } // balance months down to days


          while (Math.abs(months) > 0) {
            if (!calendar) throw new RangeError('a starting point is required for balancing calendar units');

            var _oneMonthDays = void 0;

            var _ES$MoveRelativeDate4 = ES.MoveRelativeDate(calendar, relativeTo, oneMonth);

            relativeTo = _ES$MoveRelativeDate4.relativeTo;
            _oneMonthDays = _ES$MoveRelativeDate4.days;
            days += _oneMonthDays;
            months -= sign;
          } // balance weeks down to days


          while (Math.abs(weeks) > 0) {
            if (!calendar) throw new RangeError('a starting point is required for balancing calendar units');
            var oneWeekDays = void 0;

            var _ES$MoveRelativeDate5 = ES.MoveRelativeDate(calendar, relativeTo, oneWeek);

            relativeTo = _ES$MoveRelativeDate5.relativeTo;
            oneWeekDays = _ES$MoveRelativeDate5.days;
            days += oneWeekDays;
            weeks -= sign;
          }

          break;
      }

      return {
        years: years,
        months: months,
        weeks: weeks,
        days: days
      };
    },
    BalanceDurationRelative: function BalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo) {
      var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
      var TemporalDuration = GetIntrinsic$1('%Temporal.Duration%');
      var sign = ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
      var calendar;

      if (relativeTo) {
        if (!ES.IsTemporalDateTime(relativeTo)) throw new TypeError('starting point must be DateTime');
        calendar = GetSlot(relativeTo, CALENDAR);
      }

      var oneYear = new TemporalDuration(sign);
      var oneMonth = new TemporalDuration(0, sign);
      var oneWeek = new TemporalDuration(0, 0, sign);

      switch (largestUnit) {
        case 'years':
          {
            if (!calendar) throw new RangeError('a starting point is required for years balancing'); // balance days up to years

            var newRelativeTo, oneYearDays;

            var _ES$MoveRelativeDate6 = ES.MoveRelativeDate(calendar, relativeTo, oneYear);

            newRelativeTo = _ES$MoveRelativeDate6.relativeTo;
            oneYearDays = _ES$MoveRelativeDate6.days;

            while (Math.abs(days) >= Math.abs(oneYearDays)) {
              days -= oneYearDays;
              years += sign;
              relativeTo = newRelativeTo;

              var _ES$MoveRelativeDate7 = ES.MoveRelativeDate(calendar, relativeTo, oneYear);

              newRelativeTo = _ES$MoveRelativeDate7.relativeTo;
              oneYearDays = _ES$MoveRelativeDate7.days;
            } // balance days up to months


            var oneMonthDays;

            var _ES$MoveRelativeDate8 = ES.MoveRelativeDate(calendar, relativeTo, oneMonth);

            newRelativeTo = _ES$MoveRelativeDate8.relativeTo;
            oneMonthDays = _ES$MoveRelativeDate8.days;

            while (Math.abs(days) >= Math.abs(oneMonthDays)) {
              days -= oneMonthDays;
              months += sign;
              relativeTo = newRelativeTo;

              var _ES$MoveRelativeDate9 = ES.MoveRelativeDate(calendar, relativeTo, oneMonth);

              newRelativeTo = _ES$MoveRelativeDate9.relativeTo;
              oneMonthDays = _ES$MoveRelativeDate9.days;
            } // balance months up to years


            newRelativeTo = calendar.dateAdd(relativeTo, oneYear, {}, TemporalDate);
            var oneYearMonths = calendar.dateUntil(relativeTo, newRelativeTo, {
              largestUnit: 'months'
            }).months;

            while (Math.abs(months) >= Math.abs(oneYearMonths)) {
              months -= oneYearMonths;
              years += sign;
              relativeTo = newRelativeTo;
              newRelativeTo = calendar.dateAdd(relativeTo, oneYear, {}, TemporalDate);
              oneYearMonths = calendar.dateUntil(relativeTo, newRelativeTo, {
                largestUnit: 'months'
              }).months;
            }

            break;
          }

        case 'months':
          {
            if (!calendar) throw new RangeError('a starting point is required for months balancing'); // balance days up to months

            var _newRelativeTo, _oneMonthDays2;

            var _ES$MoveRelativeDate10 = ES.MoveRelativeDate(calendar, relativeTo, oneMonth);

            _newRelativeTo = _ES$MoveRelativeDate10.relativeTo;
            _oneMonthDays2 = _ES$MoveRelativeDate10.days;

            while (Math.abs(days) >= Math.abs(_oneMonthDays2)) {
              days -= _oneMonthDays2;
              months += sign;
              relativeTo = _newRelativeTo;

              var _ES$MoveRelativeDate11 = ES.MoveRelativeDate(calendar, relativeTo, oneMonth);

              _newRelativeTo = _ES$MoveRelativeDate11.relativeTo;
              _oneMonthDays2 = _ES$MoveRelativeDate11.days;
            }

            break;
          }

        case 'weeks':
          {
            if (!calendar) throw new RangeError('a starting point is required for weeks balancing'); // balance days up to weeks

            var _newRelativeTo2, oneWeekDays;

            var _ES$MoveRelativeDate12 = ES.MoveRelativeDate(calendar, relativeTo, oneWeek);

            _newRelativeTo2 = _ES$MoveRelativeDate12.relativeTo;
            oneWeekDays = _ES$MoveRelativeDate12.days;

            while (Math.abs(days) >= Math.abs(oneWeekDays)) {
              days -= oneWeekDays;
              weeks += sign;
              relativeTo = _newRelativeTo2;

              var _ES$MoveRelativeDate13 = ES.MoveRelativeDate(calendar, relativeTo, oneWeek);

              _newRelativeTo2 = _ES$MoveRelativeDate13.relativeTo;
              oneWeekDays = _ES$MoveRelativeDate13.days;
            }

            break;
          }
      }

      return {
        years: years,
        months: months,
        weeks: weeks,
        days: days
      };
    },
    ConstrainToRange: function ConstrainToRange(value, min, max) {
      return Math.min(max, Math.max(min, value));
    },
    ConstrainDate: function ConstrainDate(year, month, day) {
      month = ES.ConstrainToRange(month, 1, 12);
      day = ES.ConstrainToRange(day, 1, ES.DaysInMonth(year, month));
      return {
        year: year,
        month: month,
        day: day
      };
    },
    ConstrainTime: function ConstrainTime(hour, minute, second, millisecond, microsecond, nanosecond) {
      hour = ES.ConstrainToRange(hour, 0, 23);
      minute = ES.ConstrainToRange(minute, 0, 59);
      second = ES.ConstrainToRange(second, 0, 59);
      millisecond = ES.ConstrainToRange(millisecond, 0, 999);
      microsecond = ES.ConstrainToRange(microsecond, 0, 999);
      nanosecond = ES.ConstrainToRange(nanosecond, 0, 999);
      return {
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    ConstrainDateTime: function ConstrainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
      var _ES$ConstrainDate4 = ES.ConstrainDate(year, month, day);

      year = _ES$ConstrainDate4.year;
      month = _ES$ConstrainDate4.month;
      day = _ES$ConstrainDate4.day;

      var _ES$ConstrainTime2 = ES.ConstrainTime(hour, minute, second, millisecond, microsecond, nanosecond);

      hour = _ES$ConstrainTime2.hour;
      minute = _ES$ConstrainTime2.minute;
      second = _ES$ConstrainTime2.second;
      millisecond = _ES$ConstrainTime2.millisecond;
      microsecond = _ES$ConstrainTime2.microsecond;
      nanosecond = _ES$ConstrainTime2.nanosecond;
      return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    RejectToRange: function RejectToRange(value, min, max) {
      if (value < min || value > max) throw new RangeError("value out of range: ".concat(min, " <= ").concat(value, " <= ").concat(max));
    },
    RejectDate: function RejectDate(year, month, day) {
      ES.RejectToRange(month, 1, 12);
      ES.RejectToRange(day, 1, ES.DaysInMonth(year, month));
    },
    RejectDateRange: function RejectDateRange(year, month, day) {
      // Noon avoids trouble at edges of DateTime range (excludes midnight)
      ES.RejectDateTimeRange(year, month, day, 12, 0, 0, 0, 0, 0);
    },
    RejectTime: function RejectTime(hour, minute, second, millisecond, microsecond, nanosecond) {
      ES.RejectToRange(hour, 0, 23);
      ES.RejectToRange(minute, 0, 59);
      ES.RejectToRange(second, 0, 59);
      ES.RejectToRange(millisecond, 0, 999);
      ES.RejectToRange(microsecond, 0, 999);
      ES.RejectToRange(nanosecond, 0, 999);
    },
    RejectDateTime: function RejectDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
      ES.RejectDate(year, month, day);
      ES.RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
    },
    RejectDateTimeRange: function RejectDateTimeRange(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
      ES.RejectToRange(year, YEAR_MIN, YEAR_MAX); // Reject any DateTime 24 hours or more outside the Instant range

      if (year === YEAR_MIN && null == ES.GetEpochFromParts(year, month, day + 1, hour, minute, second, millisecond, microsecond, nanosecond - 1) || year === YEAR_MAX && null == ES.GetEpochFromParts(year, month, day - 1, hour, minute, second, millisecond, microsecond, nanosecond + 1)) {
        throw new RangeError('DateTime outside of supported range');
      }
    },
    RejectInstantRange: function RejectInstantRange(epochNanoseconds) {
      if (epochNanoseconds.lesser(NS_MIN) || epochNanoseconds.greater(NS_MAX)) {
        throw new RangeError('Instant outside of supported range');
      }
    },
    RejectYearMonthRange: function RejectYearMonthRange(year, month) {
      ES.RejectToRange(year, YEAR_MIN, YEAR_MAX);

      if (year === YEAR_MIN) {
        ES.RejectToRange(month, 4, 12);
      } else if (year === YEAR_MAX) {
        ES.RejectToRange(month, 1, 9);
      }
    },
    RejectDurationSign: function RejectDurationSign(y, mon, w, d, h, min, s, ms, µs, ns) {
      var sign = ES.DurationSign(y, mon, w, d, h, min, s, ms, µs, ns);

      for (var _i3 = 0, _arr2 = [y, mon, w, d, h, min, s, ms, µs, ns]; _i3 < _arr2.length; _i3++) {
        var prop = _arr2[_i3];
        var propSign = Math.sign(prop);
        if (propSign !== 0 && propSign !== sign) throw new RangeError('mixed-sign values not allowed as duration fields');
      }
    },
    RejectDuration: function RejectDuration(y, mon, w, d, h, min, s, ms, µs, ns) {
      var sign = ES.DurationSign(y, mon, w, d, h, min, s, ms, µs, ns);

      for (var _i4 = 0, _arr3 = [y, mon, w, d, h, min, s, ms, µs, ns]; _i4 < _arr3.length; _i4++) {
        var prop = _arr3[_i4];
        if (!Number.isFinite(prop)) throw new RangeError('infinite values not allowed as duration fields');
        var propSign = Math.sign(prop);
        if (propSign !== 0 && propSign !== sign) throw new RangeError('mixed-sign values not allowed as duration fields');
      }
    },
    DifferenceDate: function DifferenceDate(y1, m1, d1, y2, m2, d2) {
      var largestUnit = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'days';
      var larger, smaller, sign;

      if (ES.CompareTemporalDate(y1, m1, d1, y2, m2, d2) < 0) {
        smaller = {
          year: y1,
          month: m1,
          day: d1
        };
        larger = {
          year: y2,
          month: m2,
          day: d2
        };
        sign = 1;
      } else {
        smaller = {
          year: y2,
          month: m2,
          day: d2
        };
        larger = {
          year: y1,
          month: m1,
          day: d1
        };
        sign = -1;
      }

      var years = larger.year - smaller.year;
      var weeks = 0;
      var months, days;

      switch (largestUnit) {
        case 'years':
        case 'months':
          {
            months = larger.month - smaller.month;
            var year, month;

            var _ES$BalanceDurationDa = ES.BalanceDurationDate(years, months, smaller.year, smaller.month, smaller.day);

            year = _ES$BalanceDurationDa.year;
            month = _ES$BalanceDurationDa.month;
            years = _ES$BalanceDurationDa.years;
            months = _ES$BalanceDurationDa.months;
            days = ES.DayOfYear(larger.year, larger.month, larger.day) - ES.DayOfYear(year, month, smaller.day);

            if (days < 0) {
              months -= 1;

              var _ES$BalanceDurationDa2 = ES.BalanceDurationDate(years, months, smaller.year, smaller.month, smaller.day);

              year = _ES$BalanceDurationDa2.year;
              month = _ES$BalanceDurationDa2.month;
              years = _ES$BalanceDurationDa2.years;
              months = _ES$BalanceDurationDa2.months;
              days = ES.DayOfYear(larger.year, larger.month, larger.day) - ES.DayOfYear(year, month, smaller.day);
              if (larger.year > year) days += ES.LeapYear(year) ? 366 : 365;
            }

            if (largestUnit === 'months') {
              months += years * 12;
              years = 0;
            }

            break;
          }

        case 'weeks':
        case 'days':
          months = 0;
          days = ES.DayOfYear(larger.year, larger.month, larger.day) - ES.DayOfYear(smaller.year, smaller.month, smaller.day);

          while (years > 0) {
            days += ES.LeapYear(smaller.year + years - 1) ? 366 : 365;
            years -= 1;
          }

          if (largestUnit === 'weeks') {
            weeks = Math.floor(days / 7);
            days %= 7;
          }

          break;

        default:
          throw new Error('assert not reached');
      }

      years *= sign;
      months *= sign;
      weeks *= sign;
      days *= sign;
      return {
        years: years,
        months: months,
        weeks: weeks,
        days: days
      };
    },
    DifferenceTime: function DifferenceTime(h1, min1, s1, ms1, µs1, ns1, h2, min2, s2, ms2, µs2, ns2) {
      var hours = h2 - h1;
      var minutes = min2 - min1;
      var seconds = s2 - s1;
      var milliseconds = ms2 - ms1;
      var microseconds = µs2 - µs1;
      var nanoseconds = ns2 - ns1;
      var sign = ES.DurationSign(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      hours *= sign;
      minutes *= sign;
      seconds *= sign;
      milliseconds *= sign;
      microseconds *= sign;
      nanoseconds *= sign;
      var deltaDays = 0;

      var _ES$BalanceTime2 = ES.BalanceTime(hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

      deltaDays = _ES$BalanceTime2.deltaDays;
      hours = _ES$BalanceTime2.hour;
      minutes = _ES$BalanceTime2.minute;
      seconds = _ES$BalanceTime2.second;
      milliseconds = _ES$BalanceTime2.millisecond;
      microseconds = _ES$BalanceTime2.microsecond;
      nanoseconds = _ES$BalanceTime2.nanosecond;
      deltaDays *= sign;
      hours *= sign;
      minutes *= sign;
      seconds *= sign;
      milliseconds *= sign;
      microseconds *= sign;
      nanoseconds *= sign;
      return {
        deltaDays: deltaDays,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        microseconds: microseconds,
        nanoseconds: nanoseconds
      };
    },
    DifferenceInstant: function DifferenceInstant(ns1, ns2, increment, unit, roundingMode) {
      var diff = ns2.minus(ns1);
      var incrementNs = increment;

      switch (unit) {
        case 'hours':
          incrementNs *= 60;
        // fall through

        case 'minutes':
          incrementNs *= 60;
        // fall through

        case 'seconds':
          incrementNs *= 1000;
        // fall through

        case 'milliseconds':
          incrementNs *= 1000;
        // fall through

        case 'microseconds':
          incrementNs *= 1000;
      }

      var remainder = diff.mod(86400e9);
      var wholeDays = diff.minus(remainder);
      var roundedRemainder = ES.RoundNumberToIncrement(remainder.toJSNumber(), incrementNs, roundingMode);
      var roundedDiff = wholeDays.plus(roundedRemainder);
      var nanoseconds = +roundedDiff.mod(1e3);
      var microseconds = +roundedDiff.divide(1e3).mod(1e3);
      var milliseconds = +roundedDiff.divide(1e6).mod(1e3);
      var seconds = +roundedDiff.divide(1e9);
      return {
        seconds: seconds,
        milliseconds: milliseconds,
        microseconds: microseconds,
        nanoseconds: nanoseconds
      };
    },
    AddDate: function AddDate(year, month, day, years, months, weeks, days, overflow) {
      year += years;
      month += months;

      var _ES$BalanceYearMonth6 = ES.BalanceYearMonth(year, month);

      year = _ES$BalanceYearMonth6.year;
      month = _ES$BalanceYearMonth6.month;

      var _ES$RegulateDate2 = ES.RegulateDate(year, month, day, overflow);

      year = _ES$RegulateDate2.year;
      month = _ES$RegulateDate2.month;
      day = _ES$RegulateDate2.day;
      days += 7 * weeks;
      day += days;

      var _ES$BalanceDate2 = ES.BalanceDate(year, month, day);

      year = _ES$BalanceDate2.year;
      month = _ES$BalanceDate2.month;
      day = _ES$BalanceDate2.day;
      return {
        year: year,
        month: month,
        day: day
      };
    },
    AddTime: function AddTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds) {
      hour += hours;
      minute += minutes;
      second += seconds;
      millisecond += milliseconds;
      microsecond += microseconds;
      nanosecond += nanoseconds;
      var deltaDays = 0;

      var _ES$BalanceTime3 = ES.BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond);

      deltaDays = _ES$BalanceTime3.deltaDays;
      hour = _ES$BalanceTime3.hour;
      minute = _ES$BalanceTime3.minute;
      second = _ES$BalanceTime3.second;
      millisecond = _ES$BalanceTime3.millisecond;
      microsecond = _ES$BalanceTime3.microsecond;
      nanosecond = _ES$BalanceTime3.nanosecond;
      return {
        deltaDays: deltaDays,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    SubtractDate: function SubtractDate(year, month, day, years, months, weeks, days, overflow) {
      days += 7 * weeks;
      day -= days;

      var _ES$BalanceDate3 = ES.BalanceDate(year, month, day);

      year = _ES$BalanceDate3.year;
      month = _ES$BalanceDate3.month;
      day = _ES$BalanceDate3.day;
      month -= months;
      year -= years;

      var _ES$BalanceYearMonth7 = ES.BalanceYearMonth(year, month);

      year = _ES$BalanceYearMonth7.year;
      month = _ES$BalanceYearMonth7.month;

      var _ES$RegulateDate3 = ES.RegulateDate(year, month, day, overflow);

      year = _ES$RegulateDate3.year;
      month = _ES$RegulateDate3.month;
      day = _ES$RegulateDate3.day;
      return {
        year: year,
        month: month,
        day: day
      };
    },
    SubtractTime: function SubtractTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds) {
      hour -= hours;
      minute -= minutes;
      second -= seconds;
      millisecond -= milliseconds;
      microsecond -= microseconds;
      nanosecond -= nanoseconds;
      var deltaDays = 0;

      var _ES$BalanceTime4 = ES.BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond);

      deltaDays = _ES$BalanceTime4.deltaDays;
      hour = _ES$BalanceTime4.hour;
      minute = _ES$BalanceTime4.minute;
      second = _ES$BalanceTime4.second;
      millisecond = _ES$BalanceTime4.millisecond;
      microsecond = _ES$BalanceTime4.microsecond;
      nanosecond = _ES$BalanceTime4.nanosecond;
      return {
        deltaDays: deltaDays,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    AddDuration: function AddDuration(y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1, y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2) {
      var years = y1 + y2;
      var months = mon1 + mon2;
      var weeks = w1 + w2;
      var days = d1 + d2;
      var hours = h1 + h2;
      var minutes = min1 + min2;
      var seconds = s1 + s2;
      var milliseconds = ms1 + ms2;
      var microseconds = µs1 + µs2;
      var nanoseconds = ns1 + ns2;
      var largestUnit = ES.DefaultTemporalLargestUnit(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

      var _ES$BalanceDuration = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

      days = _ES$BalanceDuration.days;
      hours = _ES$BalanceDuration.hours;
      minutes = _ES$BalanceDuration.minutes;
      seconds = _ES$BalanceDuration.seconds;
      milliseconds = _ES$BalanceDuration.milliseconds;
      microseconds = _ES$BalanceDuration.microseconds;
      nanoseconds = _ES$BalanceDuration.nanoseconds;
      ES.RejectDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      return {
        years: years,
        months: months,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        microseconds: microseconds,
        nanoseconds: nanoseconds
      };
    },
    AddInstant: function AddInstant(epochNanoseconds, h, min, s, ms, µs, ns) {
      var sum = BigInteger(0);
      sum = sum.plus(BigInteger(ns));
      sum = sum.plus(BigInteger(µs).multiply(1e3));
      sum = sum.plus(BigInteger(ms).multiply(1e6));
      sum = sum.plus(BigInteger(s).multiply(1e9));
      sum = sum.plus(BigInteger(min).multiply(60 * 1e9));
      sum = sum.plus(BigInteger(h).multiply(60 * 60 * 1e9));
      var result = BigInteger(epochNanoseconds).plus(sum);
      ES.RejectInstantRange(result);
      return result;
    },
    AddZonedDateTime: function AddZonedDateTime(instant, timeZone, calendar, years, months, weeks, days, h, min, s, ms, µs, ns, overflow) {
      // If only time is to be added, then use Instant math. It's not OK to fall
      // through to the date/time code below because compatible disambiguation in
      // the PlainDateTime=>Instant conversion will change the offset of any
      // ZonedDateTtime in the repeated clock time after a backwards transition.
      // When adding/subtracting time units and not dates, this disambiguation is
      // not expected and so is avoided below via a fast path for time-only
      // arithmetic.
      // BTW, this behavior is similar in spirit to offset: 'prefer' in `with`.
      if (ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0) === 0) {
        return ES.AddInstant(GetSlot(instant, EPOCHNANOSECONDS), h, min, s, ms, µs, ns);
      } // RFC 5545 requires the date portion to be added in calendar days and the
      // time portion to be added in exact time.
      // FIXME: "op" and the dateAdd/dateSubtract conditional will not be needed
      // after #993 lands, changing the order of operations to be the same for
      // both addition and subtraction.


      var dt = ES.GetTemporalDateTimeFor(timeZone, instant, calendar);
      var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
      var datePart = new TemporalDate(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), calendar);
      var addedDate = calendar.dateAdd(datePart, {
        years: years,
        months: months,
        weeks: weeks,
        days: days
      }, {
        overflow: overflow
      }, TemporalDate);
      var TemporalDateTime = GetIntrinsic$1('%Temporal.DateTime%');
      var dtIntermediate = new TemporalDateTime(GetSlot(addedDate, ISO_YEAR), GetSlot(addedDate, ISO_MONTH), GetSlot(addedDate, ISO_DAY), GetSlot(dt, ISO_HOUR), GetSlot(dt, ISO_MINUTE), GetSlot(dt, ISO_SECOND), GetSlot(dt, ISO_MILLISECOND), GetSlot(dt, ISO_MICROSECOND), GetSlot(dt, ISO_NANOSECOND), calendar); // Note that 'compatible' is used below because this disambiguation behavior
      // is required by RFC 5545.

      var instantIntermediate = ES.GetTemporalInstantFor(timeZone, dtIntermediate, 'compatible');
      return ES.AddInstant(GetSlot(instantIntermediate, EPOCHNANOSECONDS), h, min, s, ms, µs, ns);
    },
    SubtractZonedDateTime: function SubtractZonedDateTime(instant, timeZone, calendar, years, months, weeks, days, h, min, s, ms, µs, ns, overflow) {
      // FIXME: to be consolidated into AddZonedDateTime by #993
      if (ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0) === 0) {
        return ES.AddInstant(GetSlot(instant, EPOCHNANOSECONDS), -h, -min, -s, -ms, -µs, -ns);
      }

      var dt = ES.GetTemporalDateTimeFor(timeZone, instant, calendar);
      var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
      var datePart = new TemporalDate(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), calendar);
      var subtractedDate = calendar.dateSubtract(datePart, {
        years: years,
        months: months,
        weeks: weeks,
        days: days
      }, {
        overflow: overflow
      }, TemporalDate);
      var TemporalDateTime = GetIntrinsic$1('%Temporal.DateTime%');
      var dtIntermediate = new TemporalDateTime(GetSlot(subtractedDate, ISO_YEAR), GetSlot(subtractedDate, ISO_MONTH), GetSlot(subtractedDate, ISO_DAY), GetSlot(dt, ISO_HOUR), GetSlot(dt, ISO_MINUTE), GetSlot(dt, ISO_SECOND), GetSlot(dt, ISO_MILLISECOND), GetSlot(dt, ISO_MICROSECOND), GetSlot(dt, ISO_NANOSECOND), calendar);
      var instantIntermediate = ES.GetTemporalInstantFor(timeZone, dtIntermediate, 'compatible');
      return ES.AddInstant(GetSlot(instantIntermediate, EPOCHNANOSECONDS), -h, -min, -s, -ms, -µs, -ns);
    },
    RoundNumberToIncrement: function RoundNumberToIncrement(quantity, increment, mode) {
      var quotient = quantity / increment;
      var round;

      switch (mode) {
        case 'ceil':
          round = MathCeil(quotient);
          break;

        case 'floor':
          round = MathFloor(quotient);
          break;

        case 'trunc':
          round = MathTrunc(quotient);
          break;

        case 'nearest':
          // "half away from zero"
          round = MathSign(quotient) * MathFloor(MathAbs(quotient) + 0.5);
          break;
      }

      return round * increment;
    },
    RoundInstant: function RoundInstant(epochNs, increment, unit, roundingMode) {
      switch (unit) {
        case 'hour':
          increment *= 60;
        // fall through

        case 'minute':
          increment *= 60;
        // fall through

        case 'second':
          increment *= 1000;
        // fall through

        case 'millisecond':
          increment *= 1000;
        // fall through

        case 'microsecond':
          increment *= 1000;
      } // Note: NonNegativeModulo, but with BigInt


      var remainder = epochNs.mod(86400e9);
      if (remainder.lesser(0)) remainder = remainder.plus(86400e9);
      var wholeDays = epochNs.minus(remainder);
      var roundedRemainder = ES.RoundNumberToIncrement(remainder.toJSNumber(), increment, roundingMode);
      return wholeDays.plus(roundedRemainder);
    },
    RoundDateTime: function RoundDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode) {
      var deltaDays = 0;

      var _ES$RoundTime = ES.RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode);

      deltaDays = _ES$RoundTime.deltaDays;
      hour = _ES$RoundTime.hour;
      minute = _ES$RoundTime.minute;
      second = _ES$RoundTime.second;
      millisecond = _ES$RoundTime.millisecond;
      microsecond = _ES$RoundTime.microsecond;
      nanosecond = _ES$RoundTime.nanosecond;

      var _ES$BalanceDate4 = ES.BalanceDate(year, month, day + deltaDays);

      year = _ES$BalanceDate4.year;
      month = _ES$BalanceDate4.month;
      day = _ES$BalanceDate4.day;
      return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
      };
    },
    RoundTime: function RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode) {
      var quantity = 0;

      switch (unit) {
        case 'day':
          quantity = (((second + millisecond * 1e-3 + microsecond * 1e-6 + nanosecond * 1e-9) / 60 + minute) / 60 + hour) / 24;
          break;

        case 'hour':
          quantity = ((second + millisecond * 1e-3 + microsecond * 1e-6 + nanosecond * 1e-9) / 60 + minute) / 60 + hour;
          break;

        case 'minute':
          quantity = (second + millisecond * 1e-3 + microsecond * 1e-6 + nanosecond * 1e-9) / 60 + minute;
          break;

        case 'second':
          quantity = second + millisecond * 1e-3 + microsecond * 1e-6 + nanosecond * 1e-9;
          break;

        case 'millisecond':
          quantity = millisecond + microsecond * 1e-3 + nanosecond * 1e-9;
          break;

        case 'microsecond':
          quantity = microsecond + nanosecond * 1e-3;
          break;

        case 'nanosecond':
          quantity = nanosecond;
          break;
      }

      var result = ES.RoundNumberToIncrement(quantity, increment, roundingMode);

      switch (unit) {
        case 'day':
          return {
            deltaDays: result,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            microsecond: 0,
            nanosecond: 0
          };

        case 'hour':
          return ES.BalanceTime(result, 0, 0, 0, 0, 0);

        case 'minute':
          return ES.BalanceTime(hour, result, 0, 0, 0, 0);

        case 'second':
          return ES.BalanceTime(hour, minute, result, 0, 0, 0);

        case 'millisecond':
          return ES.BalanceTime(hour, minute, second, result, 0, 0);

        case 'microsecond':
          return ES.BalanceTime(hour, minute, second, millisecond, result, 0);

        case 'nanosecond':
          return ES.BalanceTime(hour, minute, second, millisecond, microsecond, result);
      }
    },
    DaysUntil: function DaysUntil(earlier, later) {
      return ES.DifferenceDate(GetSlot(earlier, ISO_YEAR), GetSlot(earlier, ISO_MONTH), GetSlot(earlier, ISO_DAY), GetSlot(later, ISO_YEAR), GetSlot(later, ISO_MONTH), GetSlot(later, ISO_DAY), 'days').days;
    },
    MoveRelativeDate: function MoveRelativeDate(calendar, relativeTo, duration) {
      var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
      var later = calendar.dateAdd(relativeTo, duration, {}, TemporalDate);
      var days = ES.DaysUntil(relativeTo, later);
      return {
        relativeTo: later,
        days: days
      };
    },
    RoundDuration: function RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, increment, unit, roundingMode, relativeTo) {
      var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
      var TemporalDuration = GetIntrinsic$1('%Temporal.Duration%');
      var calendar;

      if (relativeTo) {
        if (!ES.IsTemporalDateTime(relativeTo)) throw new TypeError('starting point must be DateTime');
        calendar = GetSlot(relativeTo, CALENDAR);
      }

      var remainder;

      switch (unit) {
        case 'years':
          {
            if (!calendar) throw new RangeError('A starting point is required for years rounding'); // convert months and weeks to days by calculating difference(
            // relativeTo + years, relativeTo + { years, months, weeks })

            var yearsLater = calendar.dateAdd(relativeTo, new TemporalDuration(years), {}, TemporalDate);
            var yearsMonthsWeeks = new TemporalDuration(years, months, weeks);
            var yearsMonthsWeeksLater = calendar.dateAdd(relativeTo, yearsMonthsWeeks, {}, TemporalDate);
            var monthsWeeksInDays = ES.DaysUntil(yearsLater, yearsMonthsWeeksLater);
            relativeTo = yearsLater;
            seconds += milliseconds * 1e-3 + microseconds * 1e-6 + nanoseconds * 1e-9;
            days += monthsWeeksInDays;
            days += ((seconds / 60 + minutes) / 60 + hours) / 24; // Years may be different lengths of days depending on the calendar, so
            // we need to convert days to years in a loop. We get the number of days
            // in the one-year period after (or preceding, depending on the sign of
            // the duration) the relativeTo date, and convert that number of days to
            // one year, repeating until the number of days is less than a year.

            var sign = Math.sign(days);
            var oneYear = new TemporalDuration(days < 0 ? -1 : 1);
            var oneYearDays;

            var _ES$MoveRelativeDate14 = ES.MoveRelativeDate(calendar, relativeTo, oneYear);

            relativeTo = _ES$MoveRelativeDate14.relativeTo;
            oneYearDays = _ES$MoveRelativeDate14.days;

            while (Math.abs(days) >= Math.abs(oneYearDays)) {
              years += sign;
              days -= oneYearDays;

              var _ES$MoveRelativeDate15 = ES.MoveRelativeDate(calendar, relativeTo, oneYear);

              relativeTo = _ES$MoveRelativeDate15.relativeTo;
              oneYearDays = _ES$MoveRelativeDate15.days;
            }

            years += days / Math.abs(oneYearDays);
            remainder = years;
            years = ES.RoundNumberToIncrement(years, increment, roundingMode);
            remainder -= years;
            months = weeks = days = hours = minutes = seconds = milliseconds = microseconds = nanoseconds = 0;
            break;
          }

        case 'months':
          {
            if (!calendar) throw new RangeError('A starting point is required for months rounding'); // convert weeks to days by calculating difference(relativeTo +
            //   { years, months }, relativeTo + { years, months, weeks })

            var yearsMonths = new TemporalDuration(years, months);
            var yearsMonthsLater = calendar.dateAdd(relativeTo, yearsMonths, {}, TemporalDate);

            var _yearsMonthsWeeks = new TemporalDuration(years, months, weeks);

            var _yearsMonthsWeeksLater = calendar.dateAdd(relativeTo, _yearsMonthsWeeks, {}, TemporalDate);

            var weeksInDays = ES.DaysUntil(yearsMonthsLater, _yearsMonthsWeeksLater);
            relativeTo = yearsMonthsLater;
            seconds += milliseconds * 1e-3 + microseconds * 1e-6 + nanoseconds * 1e-9;
            days += weeksInDays;
            days += ((seconds / 60 + minutes) / 60 + hours) / 24; // Months may be different lengths of days depending on the calendar,
            // convert days to months in a loop as described above under 'years'.

            var _sign = Math.sign(days);

            var oneMonth = new TemporalDuration(0, days < 0 ? -1 : 1);
            var oneMonthDays;

            var _ES$MoveRelativeDate16 = ES.MoveRelativeDate(calendar, relativeTo, oneMonth);

            relativeTo = _ES$MoveRelativeDate16.relativeTo;
            oneMonthDays = _ES$MoveRelativeDate16.days;

            while (Math.abs(days) >= Math.abs(oneMonthDays)) {
              months += _sign;
              days -= oneMonthDays;

              var _ES$MoveRelativeDate17 = ES.MoveRelativeDate(calendar, relativeTo, oneMonth);

              relativeTo = _ES$MoveRelativeDate17.relativeTo;
              oneMonthDays = _ES$MoveRelativeDate17.days;
            }

            months += days / Math.abs(oneMonthDays);
            remainder = months;
            months = ES.RoundNumberToIncrement(months, increment, roundingMode);
            remainder -= months;
            weeks = days = hours = minutes = seconds = milliseconds = microseconds = nanoseconds = 0;
            break;
          }

        case 'weeks':
          {
            if (!calendar) throw new RangeError('A starting point is required for weeks rounding');
            seconds += milliseconds * 1e-3 + microseconds * 1e-6 + nanoseconds * 1e-9;
            days += ((seconds / 60 + minutes) / 60 + hours) / 24; // Weeks may be different lengths of days depending on the calendar,
            // convert days to weeks in a loop as described above under 'years'.

            var _sign2 = Math.sign(days);

            var oneWeek = new TemporalDuration(0, 0, days < 0 ? -1 : 1);
            var oneWeekDays;

            var _ES$MoveRelativeDate18 = ES.MoveRelativeDate(calendar, relativeTo, oneWeek);

            relativeTo = _ES$MoveRelativeDate18.relativeTo;
            oneWeekDays = _ES$MoveRelativeDate18.days;

            while (Math.abs(days) >= Math.abs(oneWeekDays)) {
              weeks += _sign2;
              days -= oneWeekDays;

              var _ES$MoveRelativeDate19 = ES.MoveRelativeDate(calendar, relativeTo, oneWeek);

              relativeTo = _ES$MoveRelativeDate19.relativeTo;
              oneWeekDays = _ES$MoveRelativeDate19.days;
            }

            weeks += days / Math.abs(oneWeekDays);
            remainder = weeks;
            weeks = ES.RoundNumberToIncrement(weeks, increment, roundingMode);
            remainder -= weeks;
            days = hours = minutes = seconds = milliseconds = microseconds = nanoseconds = 0;
            break;
          }

        case 'days':
          seconds += milliseconds * 1e-3 + microseconds * 1e-6 + nanoseconds * 1e-9;
          days += ((seconds / 60 + minutes) / 60 + hours) / 24;
          remainder = days;
          days = ES.RoundNumberToIncrement(days, increment, roundingMode);
          remainder -= days;
          hours = minutes = seconds = milliseconds = microseconds = nanoseconds = 0;
          break;

        case 'hours':
          seconds += milliseconds * 1e-3 + microseconds * 1e-6 + nanoseconds * 1e-9;
          hours += (minutes + seconds / 60) / 60;
          remainder = hours;
          hours = ES.RoundNumberToIncrement(hours, increment, roundingMode);
          remainder -= hours;
          minutes = seconds = milliseconds = microseconds = nanoseconds = 0;
          break;

        case 'minutes':
          seconds += milliseconds * 1e-3 + microseconds * 1e-6 + nanoseconds * 1e-9;
          minutes += seconds / 60;
          remainder = minutes;
          minutes = ES.RoundNumberToIncrement(minutes, increment, roundingMode);
          remainder -= minutes;
          seconds = milliseconds = microseconds = nanoseconds = 0;
          break;

        case 'seconds':
          seconds += milliseconds * 1e-3 + microseconds * 1e-6 + nanoseconds * 1e-9;
          remainder = seconds;
          seconds = ES.RoundNumberToIncrement(seconds, increment, roundingMode);
          remainder -= seconds;
          milliseconds = microseconds = nanoseconds = 0;
          break;

        case 'milliseconds':
          milliseconds += microseconds * 1e-3 + nanoseconds * 1e-6;
          remainder = milliseconds;
          milliseconds = ES.RoundNumberToIncrement(milliseconds, increment, roundingMode);
          remainder -= milliseconds;
          microseconds = nanoseconds = 0;
          break;

        case 'microseconds':
          microseconds += nanoseconds * 1e-3;
          remainder = microseconds;
          microseconds = ES.RoundNumberToIncrement(microseconds, increment, roundingMode);
          remainder -= microseconds;
          nanoseconds = 0;
          break;

        case 'nanoseconds':
          remainder = 0;
          nanoseconds = ES.RoundNumberToIncrement(nanoseconds, increment, roundingMode);
          break;
      }

      return {
        years: years,
        months: months,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        microseconds: microseconds,
        nanoseconds: nanoseconds,
        remainder: remainder
      };
    },
    CompareTemporalDate: function CompareTemporalDate(y1, m1, d1, y2, m2, d2) {
      for (var _i5 = 0, _arr4 = [[y1, y2], [m1, m2], [d1, d2]]; _i5 < _arr4.length; _i5++) {
        var _arr4$_i = _slicedToArray(_arr4[_i5], 2),
            x = _arr4$_i[0],
            y = _arr4$_i[1];

        if (x !== y) return ES.ComparisonResult(x - y);
      }

      return 0;
    },
    AssertPositiveInteger: function AssertPositiveInteger(num) {
      if (!Number.isFinite(num) || Math.abs(num) !== num) throw new RangeError("invalid positive integer: ".concat(num));
      return num;
    },
    NonNegativeModulo: function NonNegativeModulo(x, y) {
      var result = x % y;
      if (Object.is(result, -0)) return 0;
      if (result < 0) result += y;
      return result;
    },
    ToBigInt: function ToBigInt(arg) {
      if (BigInteger.isInstance(arg)) {
        return arg;
      }

      var prim = ES.ToPrimitive(arg, Number);

      switch (_typeof(prim)) {
        case 'undefined':
        case 'object':
        case 'number':
        case 'symbol':
          throw new TypeError("cannot convert ".concat(_typeof(arg), " to bigint"));

        case 'string':
          if (!prim.match(/^\s*(?:[+-]?\d+\s*)?$/)) {
            throw new SyntaxError('invalid BigInt syntax');
          }

        // eslint: no-fallthrough: false

        case 'bigint':
          try {
            return BigInteger(prim);
          } catch (e) {
            if (e instanceof Error && e.message.startsWith('Invalid integer')) throw new SyntaxError(e.message);
            throw e;
          }

        case 'boolean':
          if (prim) {
            return BigInteger(1);
          } else {
            return BigInteger(0);
          }

      }
    },
    // Note: This method returns values with bogus nanoseconds based on the previous iteration's
    // milliseconds. That way there is a guarantee that the full nanoseconds are always going to be
    // increasing at least and that the microsecond and nanosecond fields are likely to be non-zero.
    SystemUTCEpochNanoSeconds: function () {
      var ns = Date.now() % 1e6;
      return function () {
        var ms = Date.now();
        var result = BigInteger(ms).multiply(1e6).plus(ns);
        ns = ms % 1e6;
        return result;
      };
    }(),
    SystemTimeZone: function SystemTimeZone() {
      var fmt = new IntlDateTimeFormat('en-us');
      var TemporalTimeZone = GetIntrinsic$1('%Temporal.TimeZone%');
      return new TemporalTimeZone(ES.TemporalTimeZoneFromString(fmt.resolvedOptions().timeZone));
    },
    ComparisonResult: function ComparisonResult(value) {
      return value < 0 ? -1 : value > 0 ? 1 : value;
    },
    NormalizeOptionsObject: function NormalizeOptionsObject(options) {
      if (options === undefined) return ObjectCreate(null);
      if (ES.Type(options) === 'Object') return options;
      throw new TypeError("Options parameter must be an object, not ".concat(options === null ? 'null' : "a ".concat(_typeof(options))));
    },
    GetOption: function GetOption(options, property, allowedValues, fallback) {
      var value = options[property];

      if (value !== undefined) {
        value = ES.ToString(value);

        if (!allowedValues.includes(value)) {
          throw new RangeError("".concat(property, " must be one of ").concat(allowedValues.join(', '), ", not ").concat(value));
        }

        return value;
      }

      return fallback;
    },
    GetNumberOption: function GetNumberOption(options, property, minimum, maximum, fallback) {
      var value = options[property];
      if (value === undefined) return fallback;
      value = ES.ToNumber(value);

      if (NumberIsNaN(value) || value < minimum || value > maximum) {
        throw new RangeError("".concat(property, " must be between ").concat(minimum, " and ").concat(maximum, ", not ").concat(value));
      }

      return MathFloor(value);
    },
    // Following two operations are overridden because the es-abstract version of
    // ES.Get() unconditionally uses util.inspect
    LengthOfArrayLike: function LengthOfArrayLike(obj) {
      if (ES.Type(obj) !== 'Object') {
        throw new TypeError('Assertion failed: `obj` must be an Object');
      }

      return ES.ToLength(obj.length);
    },
    CreateListFromArrayLike: function CreateListFromArrayLike(obj, elementTypes) {
      if (ES.Type(obj) !== 'Object') {
        throw new TypeError('Assertion failed: `obj` must be an Object');
      }

      if (!ArrayIsArray(elementTypes)) {
        throw new TypeError('Assertion failed: `elementTypes`, if provided, must be an array');
      }

      var len = ES.LengthOfArrayLike(obj);
      var list = [];
      var index = 0;

      while (index < len) {
        var indexName = ES.ToString(index);
        var next = obj[indexName];
        var nextType = ES.Type(next);

        if (ArrayPrototypeIndexOf.call(elementTypes, nextType) < 0) {
          throw new TypeError("item type ".concat(nextType, " is not a valid elementType"));
        }

        ArrayPrototypePush.call(list, next);
        index += 1;
      }

      return list;
    }
  });
  var OFFSET = new RegExp("^".concat(offset.source, "$"));

  function bisect(getState, left, right) {
    var lstate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getState(left);
    var rstate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : getState(right);
    left = BigInteger(left);
    right = BigInteger(right);

    while (right.minus(left).greater(1)) {
      var middle = left.plus(right).divide(2);
      var mstate = getState(middle);

      if (mstate === lstate) {
        left = middle;
        lstate = mstate;
      } else if (mstate === rstate) {
        right = middle;
        rstate = mstate;
      } else {
        throw new Error("invalid state in bisection ".concat(lstate, " - ").concat(mstate, " - ").concat(rstate));
      }
    }

    return right;
  }

  function bigIntIfAvailable(wrapper) {
    return typeof BigInt === 'undefined' ? wrapper : wrapper.value;
  }

  var ID_REGEX = new RegExp("^".concat(calendarID.source, "$"));
  var Calendar = /*#__PURE__*/function () {
    function Calendar(id) {
      _classCallCheck(this, Calendar);

      if (!ID_REGEX.exec(id)) throw new RangeError("invalid calendar identifier ".concat(id));
      CreateSlots(this);
      id = ES.ToString(id);
      SetSlot(this, CALENDAR_ID, id);

      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(id, ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }

    _createClass(Calendar, [{
      key: "dateFromFields",
      value: function dateFromFields(fields, options, constructor) {
        throw new Error('not implemented');
      }
    }, {
      key: "timeFromFields",
      value: function timeFromFields(fields, options, constructor) {
        throw new Error('not implemented');
      }
    }, {
      key: "yearMonthFromFields",
      value: function yearMonthFromFields(fields, options, constructor) {
        throw new Error('not implemented');
      }
    }, {
      key: "monthDayFromFields",
      value: function monthDayFromFields(fields, options, constructor) {
        throw new Error('not implemented');
      }
    }, {
      key: "fields",
      value: function fields(_fields) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        return ES.CreateListFromArrayLike(_fields, ['String']);
      }
    }, {
      key: "dateAdd",
      value: function dateAdd(date, duration, options, constructor) {
        throw new Error('not implemented');
      }
    }, {
      key: "dateSubtract",
      value: function dateSubtract(date, duration, options, constructor) {
        throw new Error('not implemented');
      }
    }, {
      key: "dateUntil",
      value: function dateUntil(one, two, options) {
        throw new Error('not implemented');
      }
    }, {
      key: "timeAdd",
      value: function timeAdd(time, duration, options, constructor) {
        throw new Error('not implemented');
      }
    }, {
      key: "timeSubtract",
      value: function timeSubtract(time, duration, options, constructor) {
        throw new Error('not implemented');
      }
    }, {
      key: "timeUntil",
      value: function timeUntil(one, two, options) {
        throw new Error('not implemented');
      }
    }, {
      key: "year",
      value: function year(date) {
        throw new Error('not implemented');
      }
    }, {
      key: "month",
      value: function month(date) {
        throw new Error('not implemented');
      }
    }, {
      key: "day",
      value: function day(date) {
        throw new Error('not implemented');
      }
    }, {
      key: "dayOfWeek",
      value: function dayOfWeek(date) {
        throw new Error('not implemented');
      }
    }, {
      key: "dayOfYear",
      value: function dayOfYear(date) {
        throw new Error('not implemented');
      }
    }, {
      key: "weekOfYear",
      value: function weekOfYear(date) {
        throw new Error('not implemented');
      }
    }, {
      key: "daysInWeek",
      value: function daysInWeek(date) {
        throw new Error('not implemented');
      }
    }, {
      key: "daysInMonth",
      value: function daysInMonth(date) {
        throw new Error('not implemented');
      }
    }, {
      key: "daysInYear",
      value: function daysInYear(date) {
        throw new Error('not implemented');
      }
    }, {
      key: "monthsInYear",
      value: function monthsInYear(date) {
        throw new Error('not implemented');
      }
    }, {
      key: "inLeapYear",
      value: function inLeapYear(date) {
        throw new Error('not implemented');
      }
    }, {
      key: "hour",
      value: function hour(time) {
        throw new Error('not implemented');
      }
    }, {
      key: "minute",
      value: function minute(time) {
        throw new Error('not implemented');
      }
    }, {
      key: "second",
      value: function second(time) {
        throw new Error('not implemented');
      }
    }, {
      key: "millisecond",
      value: function millisecond(time) {
        throw new Error('not implemented');
      }
    }, {
      key: "microsecond",
      value: function microsecond(time) {
        throw new Error('not implemented');
      }
    }, {
      key: "nanosecond",
      value: function nanosecond(time) {
        throw new Error('not implemented');
      }
    }, {
      key: "toString",
      value: function toString() {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR_ID);
      }
    }, {
      key: "id",
      get: function get() {
        return ES.CalendarToString(this);
      }
    }], [{
      key: "from",
      value: function from(item) {
        if (ES.Type(item) === 'Object') {
          if (!('calendar' in item)) return item;
          item = item.calendar;
          if (ES.Type(item) === 'Object' && !('calendar' in item)) return item;
        }

        var stringIdent = ES.ToString(item);
        if (IsBuiltinCalendar(stringIdent)) return GetBuiltinCalendar(stringIdent);
        var calendar;

        try {
          var _ES$ParseISODateTime = ES.ParseISODateTime(stringIdent, {
            zoneRequired: false
          });

          calendar = _ES$ParseISODateTime.calendar;
        } catch (_unused) {
          throw new RangeError("Invalid calendar: ".concat(stringIdent));
        }

        if (!calendar) calendar = 'iso8601';
        return GetBuiltinCalendar(calendar);
      }
    }]);

    return Calendar;
  }();
  MakeIntrinsicClass(Calendar, 'Temporal.Calendar');
  DefineIntrinsic('Temporal.Calendar.from', Calendar.from);
  DefineIntrinsic('Temporal.Calendar.prototype.fields', Calendar.prototype.fields);
  DefineIntrinsic('Temporal.Calendar.prototype.toString', Calendar.prototype.toString);

  var ISO8601Calendar = /*#__PURE__*/function (_Calendar) {
    _inherits(ISO8601Calendar, _Calendar);

    var _super = _createSuper(ISO8601Calendar);

    function ISO8601Calendar() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'iso8601';

      _classCallCheck(this, ISO8601Calendar);

      // Needs to be subclassable, that's why the ID is a default argument
      id = ES.ToString(id);
      return _super.call(this, id);
    }

    _createClass(ISO8601Calendar, [{
      key: "dateFromFields",
      value: function dateFromFields(fields, options, constructor) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);

        var _ES$ToRecord = ES.ToRecord(fields, [['day'], ['month'], ['year']]),
            year = _ES$ToRecord.year,
            month = _ES$ToRecord.month,
            day = _ES$ToRecord.day;

        var _ES$RegulateDate = ES.RegulateDate(year, month, day, overflow);

        year = _ES$RegulateDate.year;
        month = _ES$RegulateDate.month;
        day = _ES$RegulateDate.day;
        return new constructor(year, month, day, this);
      }
    }, {
      key: "timeFromFields",
      value: function timeFromFields(fields, options, constructor) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);

        var _ES$ToTemporalTimeRec = ES.ToTemporalTimeRecord(fields),
            hour = _ES$ToTemporalTimeRec.hour,
            minute = _ES$ToTemporalTimeRec.minute,
            second = _ES$ToTemporalTimeRec.second,
            millisecond = _ES$ToTemporalTimeRec.millisecond,
            microsecond = _ES$ToTemporalTimeRec.microsecond,
            nanosecond = _ES$ToTemporalTimeRec.nanosecond;

        var _ES$RegulateTime = ES.RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);

        hour = _ES$RegulateTime.hour;
        minute = _ES$RegulateTime.minute;
        second = _ES$RegulateTime.second;
        millisecond = _ES$RegulateTime.millisecond;
        microsecond = _ES$RegulateTime.microsecond;
        nanosecond = _ES$RegulateTime.nanosecond;
        return new constructor(hour, minute, second, millisecond, microsecond, nanosecond, this);
      }
    }, {
      key: "yearMonthFromFields",
      value: function yearMonthFromFields(fields, options, constructor) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);

        var _ES$ToRecord2 = ES.ToRecord(fields, [['month'], ['year']]),
            year = _ES$ToRecord2.year,
            month = _ES$ToRecord2.month;

        var _ES$RegulateYearMonth = ES.RegulateYearMonth(year, month, overflow);

        year = _ES$RegulateYearMonth.year;
        month = _ES$RegulateYearMonth.month;
        return new constructor(year, month, this,
        /* referenceISODay = */
        1);
      }
    }, {
      key: "monthDayFromFields",
      value: function monthDayFromFields(fields, options, constructor) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);

        var _ES$ToRecord3 = ES.ToRecord(fields, [['day'], ['month']]),
            month = _ES$ToRecord3.month,
            day = _ES$ToRecord3.day;

        var _ES$RegulateMonthDay = ES.RegulateMonthDay(month, day, overflow);

        month = _ES$RegulateMonthDay.month;
        day = _ES$RegulateMonthDay.day;
        return new constructor(month, day, this,
        /* referenceISOYear = */
        1972);
      }
    }, {
      key: "dateAdd",
      value: function dateAdd(date, duration, options, constructor) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        duration = ES.ToTemporalDuration(duration, GetIntrinsic$1('%Temporal.Duration%'));
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);
        var _duration = duration,
            years = _duration.years,
            months = _duration.months,
            weeks = _duration.weeks,
            days = _duration.days;
        ES.RejectDurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        var sign = ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        var year = GetSlot(date, ISO_YEAR);
        var month = GetSlot(date, ISO_MONTH);
        var day = GetSlot(date, ISO_DAY);

        if (sign < 0) {
          var _ES$SubtractDate = ES.SubtractDate(year, month, day, -years, -months, -weeks, -days, overflow);

          year = _ES$SubtractDate.year;
          month = _ES$SubtractDate.month;
          day = _ES$SubtractDate.day;
        } else {
          var _ES$AddDate = ES.AddDate(year, month, day, years, months, weeks, days, overflow);

          year = _ES$AddDate.year;
          month = _ES$AddDate.month;
          day = _ES$AddDate.day;
        }

        return new constructor(year, month, day, this);
      }
    }, {
      key: "dateSubtract",
      value: function dateSubtract(date, duration, options, constructor) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        duration = ES.ToTemporalDuration(duration, GetIntrinsic$1('%Temporal.Duration%'));
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);
        var _duration2 = duration,
            years = _duration2.years,
            months = _duration2.months,
            weeks = _duration2.weeks,
            days = _duration2.days;
        ES.RejectDurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        var sign = ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        var year = GetSlot(date, ISO_YEAR);
        var month = GetSlot(date, ISO_MONTH);
        var day = GetSlot(date, ISO_DAY);

        if (sign < 0) {
          var _ES$AddDate2 = ES.AddDate(year, month, day, -years, -months, -weeks, -days, overflow);

          year = _ES$AddDate2.year;
          month = _ES$AddDate2.month;
          day = _ES$AddDate2.day;
        } else {
          var _ES$SubtractDate2 = ES.SubtractDate(year, month, day, years, months, weeks, days, overflow);

          year = _ES$SubtractDate2.year;
          month = _ES$SubtractDate2.month;
          day = _ES$SubtractDate2.day;
        }

        return new constructor(year, month, day, this);
      }
    }, {
      key: "dateUntil",
      value: function dateUntil(one, two, options) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        one = ES.ToTemporalDate(one, GetIntrinsic$1('%Temporal.Date%'));
        two = ES.ToTemporalDate(two, GetIntrinsic$1('%Temporal.Date%'));
        options = ES.NormalizeOptionsObject(options);
        var largestUnit = ES.ToLargestTemporalUnit(options, 'days', ['hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds']);

        var _ES$DifferenceDate = ES.DifferenceDate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY), largestUnit),
            years = _ES$DifferenceDate.years,
            months = _ES$DifferenceDate.months,
            weeks = _ES$DifferenceDate.weeks,
            days = _ES$DifferenceDate.days;

        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
      }
    }, {
      key: "timeAdd",
      value: function timeAdd(time, duration, options, constructor) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        time = ES.ToTemporalTime(time, GetIntrinsic$1('%Temporal.Time%'));
        duration = ES.ToTemporalDuration(duration, GetIntrinsic$1('%Temporal.Duration%'));
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);
        var _duration3 = duration,
            years = _duration3.years,
            months = _duration3.months,
            weeks = _duration3.weeks,
            days = _duration3.days,
            hours = _duration3.hours,
            minutes = _duration3.minutes,
            seconds = _duration3.seconds,
            milliseconds = _duration3.milliseconds,
            microseconds = _duration3.microseconds,
            nanoseconds = _duration3.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        var sign = ES.DurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        var hour = GetSlot(time, ISO_HOUR);
        var minute = GetSlot(time, ISO_MINUTE);
        var second = GetSlot(time, ISO_SECOND);
        var millisecond = GetSlot(time, ISO_MILLISECOND);
        var microsecond = GetSlot(time, ISO_MICROSECOND);
        var nanosecond = GetSlot(time, ISO_NANOSECOND);

        if (sign < 0) {
          var _ES$SubtractTime = ES.SubtractTime(hour, minute, second, millisecond, microsecond, nanosecond, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);

          hour = _ES$SubtractTime.hour;
          minute = _ES$SubtractTime.minute;
          second = _ES$SubtractTime.second;
          millisecond = _ES$SubtractTime.millisecond;
          microsecond = _ES$SubtractTime.microsecond;
          nanosecond = _ES$SubtractTime.nanosecond;
        } else {
          var _ES$AddTime = ES.AddTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

          hour = _ES$AddTime.hour;
          minute = _ES$AddTime.minute;
          second = _ES$AddTime.second;
          millisecond = _ES$AddTime.millisecond;
          microsecond = _ES$AddTime.microsecond;
          nanosecond = _ES$AddTime.nanosecond;
        }

        var _ES$RegulateTime2 = ES.RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);

        hour = _ES$RegulateTime2.hour;
        minute = _ES$RegulateTime2.minute;
        second = _ES$RegulateTime2.second;
        millisecond = _ES$RegulateTime2.millisecond;
        microsecond = _ES$RegulateTime2.microsecond;
        nanosecond = _ES$RegulateTime2.nanosecond;
        return new constructor(hour, minute, second, millisecond, microsecond, nanosecond, this);
      }
    }, {
      key: "timeSubtract",
      value: function timeSubtract(time, duration, options, constructor) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        time = ES.ToTemporalTime(time, GetIntrinsic$1('%Temporal.Time%'));
        duration = ES.ToTemporalDuration(duration, GetIntrinsic$1('%Temporal.Duration%'));
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);
        var _duration4 = duration,
            years = _duration4.years,
            months = _duration4.months,
            weeks = _duration4.weeks,
            days = _duration4.days,
            hours = _duration4.hours,
            minutes = _duration4.minutes,
            seconds = _duration4.seconds,
            milliseconds = _duration4.milliseconds,
            microseconds = _duration4.microseconds,
            nanoseconds = _duration4.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        var sign = ES.DurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        var hour = GetSlot(time, ISO_HOUR);
        var minute = GetSlot(time, ISO_MINUTE);
        var second = GetSlot(time, ISO_SECOND);
        var millisecond = GetSlot(time, ISO_MILLISECOND);
        var microsecond = GetSlot(time, ISO_MICROSECOND);
        var nanosecond = GetSlot(time, ISO_NANOSECOND);

        if (sign < 0) {
          var _ES$AddTime2 = ES.AddTime(hour, minute, second, millisecond, microsecond, nanosecond, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);

          hour = _ES$AddTime2.hour;
          minute = _ES$AddTime2.minute;
          second = _ES$AddTime2.second;
          millisecond = _ES$AddTime2.millisecond;
          microsecond = _ES$AddTime2.microsecond;
          nanosecond = _ES$AddTime2.nanosecond;
        } else {
          var _ES$SubtractTime2 = ES.SubtractTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

          hour = _ES$SubtractTime2.hour;
          minute = _ES$SubtractTime2.minute;
          second = _ES$SubtractTime2.second;
          millisecond = _ES$SubtractTime2.millisecond;
          microsecond = _ES$SubtractTime2.microsecond;
          nanosecond = _ES$SubtractTime2.nanosecond;
        }

        var _ES$RegulateTime3 = ES.RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);

        hour = _ES$RegulateTime3.hour;
        minute = _ES$RegulateTime3.minute;
        second = _ES$RegulateTime3.second;
        millisecond = _ES$RegulateTime3.millisecond;
        microsecond = _ES$RegulateTime3.microsecond;
        nanosecond = _ES$RegulateTime3.nanosecond;
        return new constructor(hour, minute, second, millisecond, microsecond, nanosecond, this);
      }
    }, {
      key: "timeUntil",
      value: function timeUntil(one, two) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        one = ES.ToTemporalTime(one, GetIntrinsic$1('%Temporal.Time%'));
        two = ES.ToTemporalTime(two, GetIntrinsic$1('%Temporal.Time%'));

        var _ES$DifferenceTime = ES.DifferenceTime(GetSlot(one, ISO_HOUR), GetSlot(one, ISO_MINUTE), GetSlot(one, ISO_SECOND), GetSlot(one, ISO_MILLISECOND), GetSlot(one, ISO_MICROSECOND), GetSlot(one, ISO_NANOSECOND), GetSlot(two, ISO_HOUR), GetSlot(two, ISO_MINUTE), GetSlot(two, ISO_SECOND), GetSlot(two, ISO_MILLISECOND), GetSlot(two, ISO_MICROSECOND), GetSlot(two, ISO_NANOSECOND)),
            deltaDays = _ES$DifferenceTime.deltaDays,
            hours = _ES$DifferenceTime.hours,
            minutes = _ES$DifferenceTime.minutes,
            seconds = _ES$DifferenceTime.seconds,
            milliseconds = _ES$DifferenceTime.milliseconds,
            microseconds = _ES$DifferenceTime.microseconds,
            nanoseconds = _ES$DifferenceTime.nanoseconds;

        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(0, 0, 0, deltaDays, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      }
    }, {
      key: "year",
      value: function year(date) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!HasSlot(date, ISO_YEAR)) date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        return GetSlot(date, ISO_YEAR);
      }
    }, {
      key: "month",
      value: function month(date) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!HasSlot(date, ISO_MONTH)) date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        return GetSlot(date, ISO_MONTH);
      }
    }, {
      key: "day",
      value: function day(date) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!HasSlot(date, ISO_DAY)) date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        return GetSlot(date, ISO_DAY);
      }
    }, {
      key: "hour",
      value: function hour(time) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        return GetSlot(time, ISO_HOUR);
      }
    }, {
      key: "minute",
      value: function minute(time) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        return GetSlot(time, ISO_MINUTE);
      }
    }, {
      key: "second",
      value: function second(time) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        return GetSlot(time, ISO_SECOND);
      }
    }, {
      key: "millisecond",
      value: function millisecond(time) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        return GetSlot(time, ISO_MILLISECOND);
      }
    }, {
      key: "microsecond",
      value: function microsecond(time) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        return GetSlot(time, ISO_MICROSECOND);
      }
    }, {
      key: "nanosecond",
      value: function nanosecond(time) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        return GetSlot(time, ISO_NANOSECOND);
      }
    }, {
      key: "dayOfWeek",
      value: function dayOfWeek(date) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        return ES.DayOfWeek(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
      }
    }, {
      key: "dayOfYear",
      value: function dayOfYear(date) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        return ES.DayOfYear(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
      }
    }, {
      key: "weekOfYear",
      value: function weekOfYear(date) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        return ES.WeekOfYear(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
      }
    }, {
      key: "daysInWeek",
      value: function daysInWeek(date) {
        ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        return 7;
      }
    }, {
      key: "daysInMonth",
      value: function daysInMonth(date) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');

        if (!HasSlot(date, ISO_YEAR) || !HasSlot(date, ISO_MONTH)) {
          date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        }

        return ES.DaysInMonth(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH));
      }
    }, {
      key: "daysInYear",
      value: function daysInYear(date) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!HasSlot(date, ISO_YEAR)) date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        return ES.LeapYear(GetSlot(date, ISO_YEAR)) ? 366 : 365;
      }
    }, {
      key: "monthsInYear",
      value: function monthsInYear(date) {
        if (!HasSlot(date, ISO_YEAR)) ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        return 12;
      }
    }, {
      key: "inLeapYear",
      value: function inLeapYear(date) {
        if (!ES.IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
        if (!HasSlot(date, ISO_YEAR)) date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        return ES.LeapYear(GetSlot(date, ISO_YEAR));
      }
    }]);

    return ISO8601Calendar;
  }(Calendar);

  MakeIntrinsicClass(ISO8601Calendar, 'Temporal.ISO8601Calendar'); // Note: other built-in calendars than iso8601 are not part of the Temporal
  // proposal for ECMA-262. These calendars will be standardized as part of
  // ECMA-402.

  function addCustomPropertyGetter(type, name) {
    Object.defineProperty(GetIntrinsic$1("%Temporal.".concat(type, ".prototype%")), name, {
      get: function get() {
        return GetSlot(this, CALENDAR)[name](this);
      },
      configurable: true
    });
  }

  function addEraProperties() {
    addCustomPropertyGetter('Date', 'era');
    addCustomPropertyGetter('DateTime', 'era');
    addCustomPropertyGetter('YearMonth', 'era');
    Object.defineProperty(GetIntrinsic$1('%Temporal.ZonedDateTime.prototype%'), 'era', {
      get: function get() {
        var calendar = GetSlot(this, CALENDAR);
        var dateTime = ES.GetTemporalDateTimeFor(GetSlot(this, TIME_ZONE), GetSlot(this, INSTANT), calendar);
        return calendar.era(dateTime);
      },
      configurable: true
    });
  } // Implementation details for Gregorian calendar


  var gre = {
    isoYear: function isoYear(year, era) {
      return era === 'bc' ? -(year - 1) : year;
    }
  }; // 'iso8601' calendar is equivalent to 'gregory' except for ISO 8601 week
  // numbering rules, which we do not currently use in Temporal, and the addition
  // of BC/AD eras which means no negative years or year 0.

  var Gregorian = /*#__PURE__*/function (_ISO8601Calendar) {
    _inherits(Gregorian, _ISO8601Calendar);

    var _super2 = _createSuper(Gregorian);

    function Gregorian() {
      var _this;

      _classCallCheck(this, Gregorian);

      _this = _super2.call(this, 'gregory');
      addEraProperties();
      return _this;
    }

    _createClass(Gregorian, [{
      key: "era",
      value: function era(date) {
        if (!HasSlot(date, ISO_YEAR)) date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        return GetSlot(date, ISO_YEAR) < 1 ? 'bc' : 'ad';
      }
    }, {
      key: "year",
      value: function year(date) {
        if (!HasSlot(date, ISO_YEAR)) date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        var isoYear = GetSlot(date, ISO_YEAR);
        return isoYear < 1 ? -isoYear + 1 : isoYear;
      }
    }, {
      key: "fields",
      value: function fields(_fields2) {
        _fields2 = _get(_getPrototypeOf(Gregorian.prototype), "fields", this).call(this, _fields2);
        if (_fields2.includes('year')) _fields2.push('era');
        return _fields2;
      }
    }, {
      key: "dateFromFields",
      value: function dateFromFields(fields, options, constructor) {
        // Intentionally alphabetical
        fields = ES.ToRecord(fields, [['day'], ['era', 'ad'], ['month'], ['year']]);
        var isoYear = gre.isoYear(fields.year, fields.era);
        return _get(_getPrototypeOf(Gregorian.prototype), "dateFromFields", this).call(this, _objectSpread2(_objectSpread2({}, fields), {}, {
          year: isoYear
        }), options, constructor);
      }
    }, {
      key: "yearMonthFromFields",
      value: function yearMonthFromFields(fields, options, constructor) {
        // Intentionally alphabetical
        fields = ES.ToRecord(fields, [['era', 'ad'], ['month'], ['year']]);
        var isoYear = gre.isoYear(fields.year, fields.era);
        return _get(_getPrototypeOf(Gregorian.prototype), "yearMonthFromFields", this).call(this, _objectSpread2(_objectSpread2({}, fields), {}, {
          year: isoYear
        }), options, constructor);
      }
    }]);

    return Gregorian;
  }(ISO8601Calendar); // Implementation details for Japanese calendar
  //
  // NOTE: For convenience, this hacky class only supports the most recent five
  // eras, those of the modern period. For the full list, see:
  // https://github.com/unicode-org/cldr/blob/master/common/supplemental/supplementalData.xml#L4310-L4546
  //
  // NOTE: Japan started using the Gregorian calendar in 6 Meiji, replacing a
  // lunisolar calendar. So the day before January 1 of 6 Meiji (1873) was not
  // December 31, but December 2, of 5 Meiji (1872). The existing Ecma-402
  // Japanese calendar doesn't seem to take this into account, so neither do we:
  // > args = ['en-ca-u-ca-japanese', { era: 'short' }]
  // > new Date('1873-01-01T12:00').toLocaleString(...args)
  // '1 1, 6 Meiji, 12:00:00 PM'
  // > new Date('1872-12-31T12:00').toLocaleString(...args)
  // '12 31, 5 Meiji, 12:00:00 PM'


  var jpn = {
    eraStartDates: ['1868-09-08', '1912-07-30', '1926-12-25', '1989-01-08', '2019-05-01'],
    eraAddends: [1867, 1911, 1925, 1988, 2018],
    // This is what API consumers pass in as the value of the 'era' field. We use
    // string constants consisting of the romanized name
    // Unfortunately these are not unique throughout history, so this should be
    // solved: https://github.com/tc39/proposal-temporal/issues/526
    // Otherwise, we'd have to introduce some era numbering system, which (as far
    // as I can tell from Wikipedia) the calendar doesn't have, so would be
    // non-standard and confusing, requiring API consumers to figure out "now what
    // number is the Reiwa (current) era?" My understanding is also that this
    // starting point for eras (0645-06-19) is not the only possible one, since
    // there are unofficial eras before that.
    // https://en.wikipedia.org/wiki/Japanese_era_name
    eraNames: ['meiji', 'taisho', 'showa', 'heisei', 'reiwa'],
    // Note: C locale era names available at
    // https://github.com/unicode-org/icu/blob/master/icu4c/source/data/locales/root.txt#L1582-L1818
    compareDate: function compareDate(one, two) {
      for (var _i = 0, _arr = [ISO_YEAR, ISO_MONTH, ISO_DAY]; _i < _arr.length; _i++) {
        var slot = _arr[_i];
        var val1 = GetSlot(one, slot);
        var val2 = GetSlot(two, slot);
        if (val1 !== val2) return ES.ComparisonResult(val1 - val2);
      }
    },
    findEra: function findEra(date) {
      var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
      var idx = jpn.eraStartDates.findIndex(function (dateStr) {
        var _ES$ParseTemporalDate = ES.ParseTemporalDateString(dateStr),
            year = _ES$ParseTemporalDate.year,
            month = _ES$ParseTemporalDate.month,
            day = _ES$ParseTemporalDate.day;

        var startDate = new TemporalDate(year, month, day);
        return jpn.compareDate(date, startDate) < 0;
      });
      if (idx === -1) return jpn.eraStartDates.length - 1;
      if (idx === 0) return 0;
      return idx - 1;
    },
    isoYear: function isoYear(year, era) {
      var eraIdx = jpn.eraNames.indexOf(era);
      if (eraIdx === -1) throw new RangeError("invalid era ".concat(era));
      return year + jpn.eraAddends[eraIdx];
    }
  };

  var Japanese = /*#__PURE__*/function (_ISO8601Calendar2) {
    _inherits(Japanese, _ISO8601Calendar2);

    var _super3 = _createSuper(Japanese);

    function Japanese() {
      var _this2;

      _classCallCheck(this, Japanese);

      _this2 = _super3.call(this, 'japanese');
      addEraProperties();
      return _this2;
    }

    _createClass(Japanese, [{
      key: "era",
      value: function era(date) {
        if (!HasSlot(date, ISO_YEAR) || !HasSlot(date, ISO_MONTH) || !HasSlot(date, ISO_DAY)) {
          date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        }

        return jpn.eraNames[jpn.findEra(date)];
      }
    }, {
      key: "year",
      value: function year(date) {
        if (!HasSlot(date, ISO_YEAR) || !HasSlot(date, ISO_MONTH) || !HasSlot(date, ISO_DAY)) {
          date = ES.ToTemporalDate(date, GetIntrinsic$1('%Temporal.Date%'));
        }

        var eraIdx = jpn.findEra(date);
        return GetSlot(date, ISO_YEAR) - jpn.eraAddends[eraIdx];
      }
    }, {
      key: "fields",
      value: function fields(_fields3) {
        _fields3 = _get(_getPrototypeOf(Japanese.prototype), "fields", this).call(this, _fields3);
        if (_fields3.includes('year')) _fields3.push('era');
        return _fields3;
      }
    }, {
      key: "dateFromFields",
      value: function dateFromFields(fields, options, constructor) {
        // Intentionally alphabetical
        fields = ES.ToRecord(fields, [['day'], ['era'], ['month'], ['year']]);
        var isoYear = jpn.isoYear(fields.year, fields.era);
        return _get(_getPrototypeOf(Japanese.prototype), "dateFromFields", this).call(this, _objectSpread2(_objectSpread2({}, fields), {}, {
          year: isoYear
        }), options, constructor);
      }
    }, {
      key: "yearMonthFromFields",
      value: function yearMonthFromFields(fields, options, constructor) {
        // Intentionally alphabetical
        fields = ES.ToRecord(fields, [['era'], ['month'], ['year']]);
        var isoYear = jpn.isoYear(fields.year, fields.era);
        return _get(_getPrototypeOf(Japanese.prototype), "yearMonthFromFields", this).call(this, _objectSpread2(_objectSpread2({}, fields), {}, {
          year: isoYear
        }), options, constructor);
      }
    }]);

    return Japanese;
  }(ISO8601Calendar);

  var BUILTIN_CALENDARS = {
    gregory: Gregorian,
    iso8601: ISO8601Calendar,
    japanese: Japanese // To be filled in as builtin calendars are implemented

  };

  function IsBuiltinCalendar(id) {
    return id in BUILTIN_CALENDARS;
  }

  function GetBuiltinCalendar(id) {
    if (!(id in BUILTIN_CALENDARS)) throw new RangeError("unknown calendar ".concat(id));
    return new BUILTIN_CALENDARS[id]();
  }

  function GetISO8601Calendar() {
    return GetBuiltinCalendar('iso8601');
  }

  var OFFSET$1 = new RegExp("^".concat(offset.source, "$"));
  var IANA_NAME = new RegExp("^".concat(timeZoneID.source, "$"));
  var TimeZone = /*#__PURE__*/function () {
    function TimeZone(timeZoneIdentifier) {
      _classCallCheck(this, TimeZone);

      if ((this instanceof TimeZone ? this.constructor : void 0) === TimeZone) {
        timeZoneIdentifier = ES.GetCanonicalTimeZoneIdentifier(timeZoneIdentifier);
      }

      if (!OFFSET$1.exec(timeZoneIdentifier) && !IANA_NAME.exec(timeZoneIdentifier)) {
        throw new RangeError("invalid time zone identifier ".concat(timeZoneIdentifier));
      }

      CreateSlots(this);
      SetSlot(this, TIMEZONE_ID, timeZoneIdentifier);

      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(timeZoneIdentifier, ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }

    _createClass(TimeZone, [{
      key: "getOffsetNanosecondsFor",
      value: function getOffsetNanosecondsFor(instant) {
        if (!ES.IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        instant = ES.ToTemporalInstant(instant, GetIntrinsic$1('%Temporal.Instant%'));
        var id = GetSlot(this, TIMEZONE_ID);
        var offsetNs = ES.ParseOffsetString(id);
        if (offsetNs !== null) return offsetNs;
        return ES.GetIANATimeZoneOffsetNanoseconds(GetSlot(instant, EPOCHNANOSECONDS), id);
      }
    }, {
      key: "getOffsetStringFor",
      value: function getOffsetStringFor(instant) {
        instant = ES.ToTemporalInstant(instant, GetIntrinsic$1('%Temporal.Instant%'));
        var offsetNs = ES.GetOffsetNanosecondsFor(this, instant);
        return ES.FormatTimeZoneOffsetString(offsetNs);
      }
    }, {
      key: "getDateTimeFor",
      value: function getDateTimeFor(instant) {
        var calendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : GetISO8601Calendar();
        instant = ES.ToTemporalInstant(instant, GetIntrinsic$1('%Temporal.Instant%'));
        calendar = ES.ToTemporalCalendar(calendar);
        var ns = GetSlot(instant, EPOCHNANOSECONDS);
        var offsetNs = ES.GetOffsetNanosecondsFor(this, instant);

        var _ES$GetPartsFromEpoch = ES.GetPartsFromEpoch(ns),
            year = _ES$GetPartsFromEpoch.year,
            month = _ES$GetPartsFromEpoch.month,
            day = _ES$GetPartsFromEpoch.day,
            hour = _ES$GetPartsFromEpoch.hour,
            minute = _ES$GetPartsFromEpoch.minute,
            second = _ES$GetPartsFromEpoch.second,
            millisecond = _ES$GetPartsFromEpoch.millisecond,
            microsecond = _ES$GetPartsFromEpoch.microsecond,
            nanosecond = _ES$GetPartsFromEpoch.nanosecond;

        var _ES$BalanceDateTime = ES.BalanceDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond + offsetNs);

        year = _ES$BalanceDateTime.year;
        month = _ES$BalanceDateTime.month;
        day = _ES$BalanceDateTime.day;
        hour = _ES$BalanceDateTime.hour;
        minute = _ES$BalanceDateTime.minute;
        second = _ES$BalanceDateTime.second;
        millisecond = _ES$BalanceDateTime.millisecond;
        microsecond = _ES$BalanceDateTime.microsecond;
        nanosecond = _ES$BalanceDateTime.nanosecond;
        var DateTime = GetIntrinsic$1('%Temporal.DateTime%');
        return new DateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      }
    }, {
      key: "getInstantFor",
      value: function getInstantFor(dateTime) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        dateTime = ES.ToTemporalDateTime(dateTime, GetIntrinsic$1('%Temporal.DateTime%'));
        options = ES.NormalizeOptionsObject(options);
        var disambiguation = ES.ToTemporalDisambiguation(options);
        var Instant = GetIntrinsic$1('%Temporal.Instant%');
        var possibleInstants = this.getPossibleInstantsFor(dateTime);

        if (!Array.isArray(possibleInstants)) {
          throw new TypeError('bad return from getPossibleInstantsFor');
        }

        var numInstants = possibleInstants.length;

        function validateInstant(instant) {
          if (!ES.IsTemporalInstant(instant)) {
            throw new TypeError('bad return from getPossibleInstantsFor');
          }

          return instant;
        }

        if (numInstants === 1) return validateInstant(possibleInstants[0]);

        if (numInstants) {
          switch (disambiguation) {
            case 'compatible': // fall through because 'compatible' means 'earlier' for "fall back" transitions

            case 'earlier':
              return validateInstant(possibleInstants[0]);

            case 'later':
              return validateInstant(possibleInstants[numInstants - 1]);

            case 'reject':
              {
                throw new RangeError('multiple instants found');
              }
          }
        }

        var utcns = ES.GetEpochFromParts(GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
        if (utcns === null) throw new RangeError('DateTime outside of supported range');
        var dayBefore = new Instant(utcns.minus(86400e9));
        var dayAfter = new Instant(utcns.plus(86400e9));
        var offsetBefore = this.getOffsetNanosecondsFor(dayBefore);
        var offsetAfter = this.getOffsetNanosecondsFor(dayAfter);
        var nanoseconds = offsetAfter - offsetBefore;
        var diff = ES.ToTemporalDurationRecord({
          nanoseconds: nanoseconds
        }, 'reject');

        switch (disambiguation) {
          case 'earlier':
            {
              var earlier = dateTime.subtract(diff);
              return this.getPossibleInstantsFor(earlier)[0];
            }

          case 'compatible': // fall through because 'compatible' means 'later' for "spring forward" transitions

          case 'later':
            {
              var later = dateTime.add(diff);
              var possible = this.getPossibleInstantsFor(later);
              return possible[possible.length - 1];
            }

          case 'reject':
            {
              throw new RangeError('no such instant found');
            }
        }
      }
    }, {
      key: "getPossibleInstantsFor",
      value: function getPossibleInstantsFor(dateTime) {
        if (!ES.IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        dateTime = ES.ToTemporalDateTime(dateTime, GetIntrinsic$1('%Temporal.DateTime%'));
        var Instant = GetIntrinsic$1('%Temporal.Instant%');
        var id = GetSlot(this, TIMEZONE_ID);
        var offsetNs = ES.ParseOffsetString(id);

        if (offsetNs !== null) {
          var epochNs = ES.GetEpochFromParts(GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
          if (epochNs === null) throw new RangeError('DateTime outside of supported range');
          return [new Instant(epochNs.minus(offsetNs))];
        }

        var possibleEpochNs = ES.GetIANATimeZoneEpochValue(id, GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
        return possibleEpochNs.map(function (ns) {
          return new Instant(ns);
        });
      }
    }, {
      key: "getNextTransition",
      value: function getNextTransition(startingPoint) {
        if (!ES.IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        startingPoint = ES.ToTemporalInstant(startingPoint, GetIntrinsic$1('%Temporal.Instant%'));
        var id = GetSlot(this, TIMEZONE_ID); // Offset time zones or UTC have no transitions

        if (ES.ParseOffsetString(id) !== null || id === 'UTC') {
          return null;
        }

        var epochNanoseconds = GetSlot(startingPoint, EPOCHNANOSECONDS);
        var Instant = GetIntrinsic$1('%Temporal.Instant%');
        epochNanoseconds = ES.GetIANATimeZoneNextTransition(epochNanoseconds, id);
        return epochNanoseconds === null ? null : new Instant(epochNanoseconds);
      }
    }, {
      key: "getPreviousTransition",
      value: function getPreviousTransition(startingPoint) {
        if (!ES.IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        startingPoint = ES.ToTemporalInstant(startingPoint, GetIntrinsic$1('%Temporal.Instant%'));
        var id = GetSlot(this, TIMEZONE_ID); // Offset time zones or UTC have no transitions

        if (ES.ParseOffsetString(id) !== null || id === 'UTC') {
          return null;
        }

        var epochNanoseconds = GetSlot(startingPoint, EPOCHNANOSECONDS);
        var Instant = GetIntrinsic$1('%Temporal.Instant%');
        epochNanoseconds = ES.GetIANATimeZonePreviousTransition(epochNanoseconds, id);
        return epochNanoseconds === null ? null : new Instant(epochNanoseconds);
      }
    }, {
      key: "toString",
      value: function toString() {
        if (!ES.IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
        return String(GetSlot(this, TIMEZONE_ID));
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return ES.TimeZoneToString(this);
      }
    }, {
      key: "id",
      get: function get() {
        return ES.TimeZoneToString(this);
      }
    }], [{
      key: "from",
      value: function from(item) {
        if (ES.Type(item) === 'Object') {
          if (!('timeZone' in item)) return item;
          item = item.timeZone;
          if (ES.Type(item) === 'Object' && !('timeZone' in item)) return item;
        }

        var timeZone = ES.TemporalTimeZoneFromString(ES.ToString(item));
        var result = new this(timeZone);
        if (!ES.IsTemporalTimeZone(result)) throw new TypeError('invalid result');
        return result;
      }
    }]);

    return TimeZone;
  }();
  MakeIntrinsicClass(TimeZone, 'Temporal.TimeZone');
  DefineIntrinsic('Temporal.TimeZone.from', TimeZone.from);
  DefineIntrinsic('Temporal.TimeZone.prototype.getDateTimeFor', TimeZone.prototype.getDateTimeFor);
  DefineIntrinsic('Temporal.TimeZone.prototype.getInstantFor', TimeZone.prototype.getInstantFor);
  DefineIntrinsic('Temporal.TimeZone.prototype.getOffsetNanosecondsFor', TimeZone.prototype.getOffsetNanosecondsFor);
  DefineIntrinsic('Temporal.TimeZone.prototype.getOffsetStringFor', TimeZone.prototype.getOffsetStringFor);
  DefineIntrinsic('Temporal.TimeZone.prototype.toString', TimeZone.prototype.toString);

  var DATE = Symbol('date');
  var YM = Symbol('ym');
  var MD = Symbol('md');
  var TIME = Symbol('time');
  var DATETIME = Symbol('datetime');
  var INSTANT$1 = Symbol('instant');
  var ORIGINAL = Symbol('original');
  var TIMEZONE = Symbol('timezone');
  var CAL_ID = Symbol('calendar-id');

  var descriptor = function descriptor(value) {
    return {
      value: value,
      enumerable: true,
      writable: false,
      configurable: true
    };
  };

  var IntlDateTimeFormat$1 = globalThis.Intl.DateTimeFormat;
  var ObjectAssign$1 = Object.assign;
  function DateTimeFormat() {
    var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IntlDateTimeFormat$1().resolvedOptions().locale;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!(this instanceof DateTimeFormat)) return new DateTimeFormat(locale, options);
    this[ORIGINAL] = new IntlDateTimeFormat$1(locale, options);
    this[TIMEZONE] = new TimeZone(this.resolvedOptions().timeZone);
    this[CAL_ID] = this.resolvedOptions().calendar;
    this[DATE] = new IntlDateTimeFormat$1(locale, dateAmend(options));
    this[YM] = new IntlDateTimeFormat$1(locale, yearMonthAmend(options));
    this[MD] = new IntlDateTimeFormat$1(locale, monthDayAmend(options));
    this[TIME] = new IntlDateTimeFormat$1(locale, timeAmend(options));
    this[DATETIME] = new IntlDateTimeFormat$1(locale, datetimeAmend(options));
    this[INSTANT$1] = new IntlDateTimeFormat$1(locale, instantAmend(options));
  }

  DateTimeFormat.supportedLocalesOf = function () {
    return IntlDateTimeFormat$1.supportedLocalesOf.apply(IntlDateTimeFormat$1, arguments);
  };

  var properties = {
    resolvedOptions: descriptor(resolvedOptions),
    format: descriptor(format),
    formatRange: descriptor(formatRange)
  };

  if ('formatToParts' in IntlDateTimeFormat$1.prototype) {
    properties.formatToParts = descriptor(formatToParts);
  }

  if ('formatRangeToParts' in IntlDateTimeFormat$1.prototype) {
    properties.formatRangeToParts = descriptor(formatRangeToParts);
  }

  DateTimeFormat.prototype = Object.create(IntlDateTimeFormat$1.prototype, properties);

  function resolvedOptions() {
    return this[ORIGINAL].resolvedOptions();
  }

  function format(datetime) {
    var _this$ORIGINAL;

    var _extractOverrides = extractOverrides(datetime, this),
        instant = _extractOverrides.instant,
        formatter = _extractOverrides.formatter;

    if (instant && formatter) {
      return formatter.format(instant.epochMilliseconds);
    }

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return (_this$ORIGINAL = this[ORIGINAL]).format.apply(_this$ORIGINAL, [datetime].concat(rest));
  }

  function formatToParts(datetime) {
    var _this$ORIGINAL2;

    var _extractOverrides2 = extractOverrides(datetime, this),
        instant = _extractOverrides2.instant,
        formatter = _extractOverrides2.formatter;

    if (instant && formatter) {
      return formatter.formatToParts(instant.epochMilliseconds);
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    return (_this$ORIGINAL2 = this[ORIGINAL]).formatToParts.apply(_this$ORIGINAL2, [datetime].concat(rest));
  }

  function formatRange(a, b) {
    if (ES.Type(a) === 'Object' && ES.Type(b) === 'Object') {
      if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) {
        throw new TypeError('Intl.DateTimeFormat accepts two values of the same type');
      }

      var _extractOverrides3 = extractOverrides(a, this),
          aa = _extractOverrides3.instant,
          aformatter = _extractOverrides3.formatter;

      var _extractOverrides4 = extractOverrides(b, this),
          bb = _extractOverrides4.instant,
          bformatter = _extractOverrides4.formatter;

      if (aa && bb && aformatter && bformatter && aformatter === bformatter) {
        return aformatter.formatRange(aa.epochMilliseconds, bb.epochMilliseconds);
      }
    }

    return this[ORIGINAL].formatRange(a, b);
  }

  function formatRangeToParts(a, b) {
    if (ES.Type(a) === 'Object' && ES.Type(b) === 'Object') {
      if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) {
        throw new TypeError('Intl.DateTimeFormat accepts two values of the same type');
      }

      var _extractOverrides5 = extractOverrides(a, this),
          aa = _extractOverrides5.instant,
          aformatter = _extractOverrides5.formatter;

      var _extractOverrides6 = extractOverrides(b, this),
          bb = _extractOverrides6.instant,
          bformatter = _extractOverrides6.formatter;

      if (aa && bb && aformatter && bformatter && aformatter === bformatter) {
        return aformatter.formatRangeToParts(aa.epochMilliseconds, bb.epochMilliseconds);
      }
    }

    return this[ORIGINAL].formatRangeToParts(a, b);
  }

  function amend() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var amended = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options = ObjectAssign$1({}, options);

    for (var _i = 0, _arr = ['year', 'month', 'day', 'hour', 'minute', 'second', 'weekday', 'timeZoneName']; _i < _arr.length; _i++) {
      var opt = _arr[_i];
      options[opt] = opt in amended ? amended[opt] : options[opt];
      if (options[opt] === false || options[opt] === undefined) delete options[opt];
    }

    return options;
  }

  function timeAmend(options) {
    options = amend(options, {
      year: false,
      month: false,
      day: false,
      weekday: false,
      timeZoneName: false
    });

    if (!hasTimeOptions(options)) {
      options = ObjectAssign$1(options, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
    }

    return options;
  }

  function yearMonthAmend(options) {
    options = amend(options, {
      day: false,
      hour: false,
      minute: false,
      second: false,
      weekday: false,
      timeZoneName: false
    });

    if (!('year' in options || 'month' in options)) {
      options = ObjectAssign$1(options, {
        year: 'numeric',
        month: 'numeric'
      });
    }

    return options;
  }

  function monthDayAmend(options) {
    options = amend(options, {
      year: false,
      hour: false,
      minute: false,
      second: false,
      weekday: false,
      timeZoneName: false
    });

    if (!('month' in options || 'day' in options)) {
      options = ObjectAssign$1(options, {
        month: 'numeric',
        day: 'numeric'
      });
    }

    return options;
  }

  function dateAmend(options) {
    options = amend(options, {
      hour: false,
      minute: false,
      second: false,
      timeZoneName: false
    });

    if (!hasDateOptions(options)) {
      options = ObjectAssign$1(options, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
    }

    return options;
  }

  function datetimeAmend(options) {
    options = amend(options, {
      timeZoneName: false
    });

    if (!hasTimeOptions(options) && !hasDateOptions(options)) {
      ObjectAssign$1(options, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
    }

    return options;
  }

  function instantAmend(options) {
    if (!hasTimeOptions(options) && !hasDateOptions(options)) {
      ObjectAssign$1(options, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
    }

    return options;
  }

  function hasDateOptions(options) {
    return 'year' in options || 'month' in options || 'day' in options || 'weekday' in options;
  }

  function hasTimeOptions(options) {
    return 'hour' in options || 'minute' in options || 'second' in options;
  }

  function extractOverrides(temporalObj, main) {
    var DateTime = GetIntrinsic$1('%Temporal.DateTime%');

    if (ES.IsTemporalTime(temporalObj)) {
      var hour = GetSlot(temporalObj, ISO_HOUR);
      var minute = GetSlot(temporalObj, ISO_MINUTE);
      var second = GetSlot(temporalObj, ISO_SECOND);
      var millisecond = GetSlot(temporalObj, ISO_MILLISECOND);
      var microsecond = GetSlot(temporalObj, ISO_MICROSECOND);
      var nanosecond = GetSlot(temporalObj, ISO_NANOSECOND);
      var datetime = new DateTime(1970, 1, 1, hour, minute, second, millisecond, microsecond, nanosecond, main[CAL_ID]);
      return {
        instant: main[TIMEZONE].getInstantFor(datetime),
        formatter: main[TIME]
      };
    }

    if (ES.IsTemporalYearMonth(temporalObj)) {
      var isoYear = GetSlot(temporalObj, ISO_YEAR);
      var isoMonth = GetSlot(temporalObj, ISO_MONTH);
      var referenceISODay = GetSlot(temporalObj, ISO_DAY);
      var calendar = GetSlot(temporalObj, CALENDAR);

      if (calendar.id !== main[CAL_ID]) {
        throw new RangeError("cannot format YearMonth with calendar ".concat(calendar.id, " in locale with calendar ").concat(main[CAL_ID]));
      }

      var _datetime = new DateTime(isoYear, isoMonth, referenceISODay, 12, 0, 0, 0, 0, 0, calendar);

      return {
        instant: main[TIMEZONE].getInstantFor(_datetime),
        formatter: main[YM]
      };
    }

    if (ES.IsTemporalMonthDay(temporalObj)) {
      var referenceISOYear = GetSlot(temporalObj, ISO_YEAR);

      var _isoMonth = GetSlot(temporalObj, ISO_MONTH);

      var isoDay = GetSlot(temporalObj, ISO_DAY);

      var _calendar = GetSlot(temporalObj, CALENDAR);

      if (_calendar.id !== main[CAL_ID]) {
        throw new RangeError("cannot format MonthDay with calendar ".concat(_calendar.id, " in locale with calendar ").concat(main[CAL_ID]));
      }

      var _datetime2 = new DateTime(referenceISOYear, _isoMonth, isoDay, 12, 0, 0, 0, 0, 0, _calendar);

      return {
        instant: main[TIMEZONE].getInstantFor(_datetime2),
        formatter: main[MD]
      };
    }

    if (ES.IsTemporalDate(temporalObj)) {
      var _isoYear = GetSlot(temporalObj, ISO_YEAR);

      var _isoMonth2 = GetSlot(temporalObj, ISO_MONTH);

      var _isoDay = GetSlot(temporalObj, ISO_DAY);

      var _calendar2 = GetSlot(temporalObj, CALENDAR);

      if (_calendar2.id !== 'iso8601' && _calendar2.id !== main[CAL_ID]) {
        throw new RangeError("cannot format Date with calendar ".concat(_calendar2.id, " in locale with calendar ").concat(main[CAL_ID]));
      }

      var _datetime3 = new DateTime(_isoYear, _isoMonth2, _isoDay, 12, 0, 0, 0, 0, 0, main[CAL_ID]);

      return {
        instant: main[TIMEZONE].getInstantFor(_datetime3),
        formatter: main[DATE]
      };
    }

    if (ES.IsTemporalDateTime(temporalObj)) {
      var _isoYear2 = GetSlot(temporalObj, ISO_YEAR);

      var _isoMonth3 = GetSlot(temporalObj, ISO_MONTH);

      var _isoDay2 = GetSlot(temporalObj, ISO_DAY);

      var _hour = GetSlot(temporalObj, ISO_HOUR);

      var _minute = GetSlot(temporalObj, ISO_MINUTE);

      var _second = GetSlot(temporalObj, ISO_SECOND);

      var _millisecond = GetSlot(temporalObj, ISO_MILLISECOND);

      var _microsecond = GetSlot(temporalObj, ISO_MICROSECOND);

      var _nanosecond = GetSlot(temporalObj, ISO_NANOSECOND);

      var _calendar3 = GetSlot(temporalObj, CALENDAR);

      if (_calendar3.id !== 'iso8601' && _calendar3.id !== main[CAL_ID]) {
        throw new RangeError("cannot format Date with calendar ".concat(_calendar3.id, " in locale with calendar ").concat(main[CAL_ID]));
      }

      var _datetime4 = temporalObj;

      if (_calendar3.id === 'iso8601') {
        _datetime4 = new DateTime(_isoYear2, _isoMonth3, _isoDay2, _hour, _minute, _second, _millisecond, _microsecond, _nanosecond, main[CAL_ID]);
      }

      return {
        instant: main[TIMEZONE].getInstantFor(_datetime4),
        formatter: main[DATETIME]
      };
    }

    if (ES.IsTemporalInstant(temporalObj)) {
      return {
        instant: temporalObj,
        formatter: main[INSTANT$1]
      };
    }

    return {};
  }

  var Intl$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DateTimeFormat: DateTimeFormat
  });

  var Instant = /*#__PURE__*/function () {
    function Instant(epochNanoseconds) {
      _classCallCheck(this, Instant);

      var ns = ES.ToBigInt(epochNanoseconds);
      ES.RejectInstantRange(ns);
      CreateSlots(this);
      SetSlot(this, EPOCHNANOSECONDS, ns);

      {
        var TemporalTimeZone = GetIntrinsic$1('%Temporal.TimeZone%');
        var repr = ES.TemporalInstantToString(this, new TemporalTimeZone('UTC'), 'auto');
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(repr, ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }

    _createClass(Instant, [{
      key: "add",
      value: function add(temporalDurationLike) {
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');

        var _ES$ToLimitedTemporal = ES.ToLimitedTemporalDuration(temporalDurationLike, ['years', 'months', 'weeks', 'days']),
            hours = _ES$ToLimitedTemporal.hours,
            minutes = _ES$ToLimitedTemporal.minutes,
            seconds = _ES$ToLimitedTemporal.seconds,
            milliseconds = _ES$ToLimitedTemporal.milliseconds,
            microseconds = _ES$ToLimitedTemporal.microseconds,
            nanoseconds = _ES$ToLimitedTemporal.nanoseconds;

        ES.RejectDurationSign(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        var ns = ES.AddInstant(GetSlot(this, EPOCHNANOSECONDS), hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        var Construct = ES.SpeciesConstructor(this, Instant);
        var result = new Construct(bigIntIfAvailable$1(ns));
        if (!ES.IsTemporalInstant(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');

        var _ES$ToLimitedTemporal2 = ES.ToLimitedTemporalDuration(temporalDurationLike, ['years', 'months', 'weeks', 'days']),
            hours = _ES$ToLimitedTemporal2.hours,
            minutes = _ES$ToLimitedTemporal2.minutes,
            seconds = _ES$ToLimitedTemporal2.seconds,
            milliseconds = _ES$ToLimitedTemporal2.milliseconds,
            microseconds = _ES$ToLimitedTemporal2.microseconds,
            nanoseconds = _ES$ToLimitedTemporal2.nanoseconds;

        ES.RejectDurationSign(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        var ns = ES.AddInstant(GetSlot(this, EPOCHNANOSECONDS), -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);
        var Construct = ES.SpeciesConstructor(this, Instant);
        var result = new Construct(bigIntIfAvailable$1(ns));
        if (!ES.IsTemporalInstant(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalInstant(other, Instant);
        var disallowedUnits = ['years', 'months', 'weeks', 'days'];
        options = ES.NormalizeOptionsObject(options);
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'nanoseconds', disallowedUnits);
        var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits('seconds', smallestUnit);
        var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit, disallowedUnits);
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var maximumIncrements = {
          hours: 24,
          minutes: 60,
          seconds: 60,
          milliseconds: 1000,
          microseconds: 1000,
          nanoseconds: 1000
        };
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
        var onens = GetSlot(this, EPOCHNANOSECONDS);
        var twons = GetSlot(other, EPOCHNANOSECONDS);

        var _ES$DifferenceInstant = ES.DifferenceInstant(onens, twons, roundingIncrement, smallestUnit, roundingMode),
            seconds = _ES$DifferenceInstant.seconds,
            milliseconds = _ES$DifferenceInstant.milliseconds,
            microseconds = _ES$DifferenceInstant.microseconds,
            nanoseconds = _ES$DifferenceInstant.nanoseconds;

        var hours, minutes;

        var _ES$BalanceDuration = ES.BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

        hours = _ES$BalanceDuration.hours;
        minutes = _ES$BalanceDuration.minutes;
        seconds = _ES$BalanceDuration.seconds;
        milliseconds = _ES$BalanceDuration.milliseconds;
        microseconds = _ES$BalanceDuration.microseconds;
        nanoseconds = _ES$BalanceDuration.nanoseconds;
        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalInstant(other, Instant);
        var disallowedUnits = ['years', 'months', 'weeks', 'days'];
        options = ES.NormalizeOptionsObject(options);
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'nanoseconds', disallowedUnits);
        var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits('seconds', smallestUnit);
        var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit, disallowedUnits);
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var maximumIncrements = {
          hours: 24,
          minutes: 60,
          seconds: 60,
          milliseconds: 1000,
          microseconds: 1000,
          nanoseconds: 1000
        };
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
        var onens = GetSlot(other, EPOCHNANOSECONDS);
        var twons = GetSlot(this, EPOCHNANOSECONDS);

        var _ES$DifferenceInstant2 = ES.DifferenceInstant(onens, twons, roundingIncrement, smallestUnit, roundingMode),
            seconds = _ES$DifferenceInstant2.seconds,
            milliseconds = _ES$DifferenceInstant2.milliseconds,
            microseconds = _ES$DifferenceInstant2.microseconds,
            nanoseconds = _ES$DifferenceInstant2.nanoseconds;

        var hours, minutes;

        var _ES$BalanceDuration2 = ES.BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

        hours = _ES$BalanceDuration2.hours;
        minutes = _ES$BalanceDuration2.minutes;
        seconds = _ES$BalanceDuration2.seconds;
        milliseconds = _ES$BalanceDuration2.milliseconds;
        microseconds = _ES$BalanceDuration2.microseconds;
        nanoseconds = _ES$BalanceDuration2.nanoseconds;
        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      }
    }, {
      key: "round",
      value: function round(options) {
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        if (options === undefined) throw new TypeError('options parameter is required');
        options = ES.NormalizeOptionsObject(options);
        var smallestUnit = ES.ToSmallestTemporalUnit(options, ['day']);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var maximumIncrements = {
          hour: 24,
          minute: 1440,
          second: 86400,
          millisecond: 86400e3,
          microsecond: 86400e6,
          nanosecond: 86400e9
        };
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], true);
        var ns = GetSlot(this, EPOCHNANOSECONDS);
        var roundedNs = ES.RoundInstant(ns, roundingIncrement, smallestUnit, roundingMode);
        var Construct = ES.SpeciesConstructor(this, Instant);
        var result = new Construct(bigIntIfAvailable$1(roundedNs));
        if (!ES.IsTemporalInstant(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalInstant(other, Instant);
        var one = GetSlot(this, EPOCHNANOSECONDS);
        var two = GetSlot(other, EPOCHNANOSECONDS);
        return BigInteger(one).equals(two);
      }
    }, {
      key: "toString",
      value: function toString() {
        var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'UTC';
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        var timeZone = ES.ToTemporalTimeZone(temporalTimeZoneLike);
        options = ES.NormalizeOptionsObject(options);

        var _ES$ToSecondsStringPr = ES.ToSecondsStringPrecision(options),
            precision = _ES$ToSecondsStringPr.precision,
            unit = _ES$ToSecondsStringPr.unit,
            increment = _ES$ToSecondsStringPr.increment;

        var roundingMode = ES.ToTemporalRoundingMode(options, 'trunc');
        var ns = GetSlot(this, EPOCHNANOSECONDS);
        var roundedNs = ES.RoundInstant(ns, increment, unit, roundingMode);
        var roundedInstant = new Instant(roundedNs);
        return ES.TemporalInstantToString(roundedInstant, timeZone, precision);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        var TemporalTimeZone = GetIntrinsic$1('%Temporal.TimeZone%');
        var timeZone = new TemporalTimeZone('UTC');
        return ES.TemporalInstantToString(this, timeZone, 'auto');
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.Instant');
      }
    }, {
      key: "toZonedDateTime",
      value: function toZonedDateTime(temporalTimeZoneLike, calendarLike) {
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        var timeZone = ES.ToTemporalTimeZone(temporalTimeZoneLike);
        var calendar = ES.ToTemporalCalendar(calendarLike);
        var TemporalZonedDateTime = GetIntrinsic$1('%Temporal.ZonedDateTime%');
        return new TemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone, calendar);
      }
    }, {
      key: "toZonedDateTimeISO",
      value: function toZonedDateTimeISO(temporalTimeZoneLike) {
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        var timeZone = ES.ToTemporalTimeZone(temporalTimeZoneLike);
        var calendar = GetISO8601Calendar();
        var TemporalZonedDateTime = GetIntrinsic$1('%Temporal.ZonedDateTime%');
        return new TemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone, calendar);
      }
    }, {
      key: "epochSeconds",
      get: function get() {
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        var value = GetSlot(this, EPOCHNANOSECONDS);
        return +value.divide(1e9);
      }
    }, {
      key: "epochMilliseconds",
      get: function get() {
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        var value = BigInteger(GetSlot(this, EPOCHNANOSECONDS));
        return +value.divide(1e6);
      }
    }, {
      key: "epochMicroseconds",
      get: function get() {
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        var value = GetSlot(this, EPOCHNANOSECONDS);
        return bigIntIfAvailable$1(value.divide(1e3));
      }
    }, {
      key: "epochNanoseconds",
      get: function get() {
        if (!ES.IsTemporalInstant(this)) throw new TypeError('invalid receiver');
        return bigIntIfAvailable$1(GetSlot(this, EPOCHNANOSECONDS));
      }
    }], [{
      key: "fromEpochSeconds",
      value: function fromEpochSeconds(epochSeconds) {
        epochSeconds = ES.ToNumber(epochSeconds);
        var epochNanoseconds = BigInteger(epochSeconds).multiply(1e9);
        ES.RejectInstantRange(epochNanoseconds);
        var result = new this(bigIntIfAvailable$1(epochNanoseconds));
        if (!ES.IsTemporalInstant(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "fromEpochMilliseconds",
      value: function fromEpochMilliseconds(epochMilliseconds) {
        epochMilliseconds = ES.ToNumber(epochMilliseconds);
        var epochNanoseconds = BigInteger(epochMilliseconds).multiply(1e6);
        ES.RejectInstantRange(epochNanoseconds);
        var result = new this(bigIntIfAvailable$1(epochNanoseconds));
        if (!ES.IsTemporalInstant(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "fromEpochMicroseconds",
      value: function fromEpochMicroseconds(epochMicroseconds) {
        epochMicroseconds = ES.ToBigInt(epochMicroseconds);
        var epochNanoseconds = epochMicroseconds.multiply(1e3);
        ES.RejectInstantRange(epochNanoseconds);
        var result = new this(bigIntIfAvailable$1(epochNanoseconds));
        if (!ES.IsTemporalInstant(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "fromEpochNanoseconds",
      value: function fromEpochNanoseconds(epochNanoseconds) {
        epochNanoseconds = ES.ToBigInt(epochNanoseconds);
        ES.RejectInstantRange(epochNanoseconds);
        var result = new this(bigIntIfAvailable$1(epochNanoseconds));
        if (!ES.IsTemporalInstant(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "from",
      value: function from(item) {
        if (ES.IsTemporalInstant(item)) {
          var result = new this(bigIntIfAvailable$1(GetSlot(item, EPOCHNANOSECONDS)));
          if (!ES.IsTemporalInstant(result)) throw new TypeError('invalid result');
          return result;
        }

        return ES.ToTemporalInstant(item, this);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ES.ToTemporalInstant(one, Instant);
        two = ES.ToTemporalInstant(two, Instant);
        one = GetSlot(one, EPOCHNANOSECONDS);
        two = GetSlot(two, EPOCHNANOSECONDS);
        if (BigInteger(one).lesser(two)) return -1;
        if (BigInteger(one).greater(two)) return 1;
        return 0;
      }
    }]);

    return Instant;
  }();
  MakeIntrinsicClass(Instant, 'Temporal.Instant');

  function bigIntIfAvailable$1(wrapper) {
    return typeof BigInt === 'undefined' ? wrapper : wrapper.value;
  }

  var ObjectAssign$2 = Object.assign;

  function TemporalDateToString(date) {
    var showCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
    var year = ES.ISOYearString(GetSlot(date, ISO_YEAR));
    var month = ES.ISODateTimePartString(GetSlot(date, ISO_MONTH));
    var day = ES.ISODateTimePartString(GetSlot(date, ISO_DAY));
    var calendar = ES.FormatCalendarAnnotation(GetSlot(date, CALENDAR), showCalendar);
    return "".concat(year, "-").concat(month, "-").concat(day).concat(calendar);
  }

  var Date$1 = /*#__PURE__*/function () {
    function Date(isoYear, isoMonth, isoDay) {
      var calendar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : GetISO8601Calendar();

      _classCallCheck(this, Date);

      isoYear = ES.ToInteger(isoYear);
      isoMonth = ES.ToInteger(isoMonth);
      isoDay = ES.ToInteger(isoDay);
      calendar = ES.ToTemporalCalendar(calendar);
      ES.RejectDate(isoYear, isoMonth, isoDay);
      ES.RejectDateRange(isoYear, isoMonth, isoDay);
      CreateSlots(this);
      SetSlot(this, ISO_YEAR, isoYear);
      SetSlot(this, ISO_MONTH, isoMonth);
      SetSlot(this, ISO_DAY, isoDay);
      SetSlot(this, CALENDAR, calendar);
      SetSlot(this, DATE_BRAND, true);

      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(TemporalDateToString(this), ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }

    _createClass(Date, [{
      key: "with",
      value: function _with(temporalDateLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');

        if (ES.Type(temporalDateLike) !== 'Object') {
          var str = ES.ToString(temporalDateLike);
          temporalDateLike = ES.RelevantTemporalObjectFromString(str);
        }

        var source;
        var calendar = temporalDateLike.calendar;

        if (calendar) {
          var TemporalCalendar = GetIntrinsic$1('%Temporal.Calendar%');
          calendar = TemporalCalendar.from(calendar);
          source = new Date(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), calendar);
        } else {
          calendar = GetSlot(this, CALENDAR);
          source = this;
        }

        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var props = ES.ToPartialRecord(temporalDateLike, fieldNames);

        if (!props) {
          throw new TypeError('invalid date-like');
        }

        var fields = ES.ToTemporalDateFields(source, fieldNames);
        ObjectAssign$2(fields, props);
        var Construct = ES.SpeciesConstructor(this, Date);
        var result = calendar.dateFromFields(fields, options, Construct);
        if (!ES.IsTemporalDate(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "withCalendar",
      value: function withCalendar(calendar) {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var TemporalCalendar = GetIntrinsic$1('%Temporal.Calendar%');
        calendar = TemporalCalendar.from(calendar);
        var Construct = ES.SpeciesConstructor(this, Date);
        var result = new Construct(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), calendar);
        if (!ES.IsTemporalDate(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "add",
      value: function add(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var duration = ES.ToLimitedTemporalDuration(temporalDurationLike);
        var _duration = duration,
            years = _duration.years,
            months = _duration.months,
            weeks = _duration.weeks,
            days = _duration.days,
            hours = _duration.hours,
            minutes = _duration.minutes,
            seconds = _duration.seconds,
            milliseconds = _duration.milliseconds,
            microseconds = _duration.microseconds,
            nanoseconds = _duration.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

        var _ES$BalanceDuration = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 'days');

        days = _ES$BalanceDuration.days;
        duration = {
          years: years,
          months: months,
          weeks: weeks,
          days: days
        };
        var Construct = ES.SpeciesConstructor(this, Date);
        var result = GetSlot(this, CALENDAR).dateAdd(this, duration, options, Construct);
        if (!ES.IsTemporalDate(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var duration = ES.ToLimitedTemporalDuration(temporalDurationLike);
        var _duration2 = duration,
            years = _duration2.years,
            months = _duration2.months,
            weeks = _duration2.weeks,
            days = _duration2.days,
            hours = _duration2.hours,
            minutes = _duration2.minutes,
            seconds = _duration2.seconds,
            milliseconds = _duration2.milliseconds,
            microseconds = _duration2.microseconds,
            nanoseconds = _duration2.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

        var _ES$BalanceDuration2 = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 'days');

        days = _ES$BalanceDuration2.days;
        duration = {
          years: years,
          months: months,
          weeks: weeks,
          days: days
        };
        var Construct = ES.SpeciesConstructor(this, Date);
        var result = GetSlot(this, CALENDAR).dateSubtract(this, duration, options, Construct);
        if (!ES.IsTemporalDate(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalDate(other, Date);
        var calendar = GetSlot(this, CALENDAR);
        var otherCalendar = GetSlot(other, CALENDAR);
        var calendarId = ES.CalendarToString(calendar);
        var otherCalendarId = ES.CalendarToString(otherCalendar);

        if (calendarId !== otherCalendarId) {
          throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
        }

        options = ES.NormalizeOptionsObject(options);
        var disallowedUnits = ['hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds'];
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'days', disallowedUnits);
        var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits('days', smallestUnit);
        var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit, disallowedUnits);
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, undefined, false);
        var result = calendar.dateUntil(this, other, {
          largestUnit: largestUnit
        });
        if (smallestUnit === 'days' && roundingIncrement === 1) return result;
        var years = result.years,
            months = result.months,
            weeks = result.weeks,
            days = result.days;
        var TemporalDateTime = GetIntrinsic$1('%Temporal.DateTime%');
        var relativeTo = new TemporalDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), 0, 0, 0, 0, 0, 0, GetSlot(this, CALENDAR));

        var _ES$RoundDuration = ES.RoundDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, roundingMode, relativeTo);

        years = _ES$RoundDuration.years;
        months = _ES$RoundDuration.months;
        weeks = _ES$RoundDuration.weeks;
        days = _ES$RoundDuration.days;
        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalDate(other, Date);
        var calendar = GetSlot(this, CALENDAR);
        var otherCalendar = GetSlot(other, CALENDAR);
        var calendarId = ES.CalendarToString(calendar);
        var otherCalendarId = ES.CalendarToString(otherCalendar);

        if (calendarId !== otherCalendarId) {
          throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
        }

        options = ES.NormalizeOptionsObject(options);
        var disallowedUnits = ['hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds'];
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'days', disallowedUnits);
        var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits('days', smallestUnit);
        var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit, disallowedUnits);
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, undefined, false);
        var result = calendar.dateUntil(other, this, {
          largestUnit: largestUnit
        });
        if (smallestUnit === 'days' && roundingIncrement === 1) return result;
        var years = result.years,
            months = result.months,
            weeks = result.weeks,
            days = result.days;
        var TemporalDateTime = GetIntrinsic$1('%Temporal.DateTime%');
        var relativeTo = new TemporalDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), 0, 0, 0, 0, 0, 0, GetSlot(this, CALENDAR));

        var _ES$RoundDuration2 = ES.RoundDuration(-years, -months, -weeks, -days, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, ES.NegateTemporalRoundingMode(roundingMode), relativeTo);

        years = _ES$RoundDuration2.years;
        months = _ES$RoundDuration2.months;
        weeks = _ES$RoundDuration2.weeks;
        days = _ES$RoundDuration2.days;
        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(-years, -months, -weeks, -days, 0, 0, 0, 0, 0, 0);
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalDate(other, Date);

        for (var _i = 0, _arr = [ISO_YEAR, ISO_MONTH, ISO_DAY]; _i < _arr.length; _i++) {
          var slot = _arr[_i];
          var val1 = GetSlot(this, slot);
          var val2 = GetSlot(other, slot);
          if (val1 !== val2) return false;
        }

        return ES.CalendarEquals(this, other);
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        options = ES.NormalizeOptionsObject(options);
        var showCalendar = ES.ToShowCalendarOption(options);
        return TemporalDateToString(this, showCalendar);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return TemporalDateToString(this);
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.Date');
      }
    }, {
      key: "toDateTime",
      value: function toDateTime() {
        var temporalTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var year = GetSlot(this, ISO_YEAR);
        var month = GetSlot(this, ISO_MONTH);
        var day = GetSlot(this, ISO_DAY);
        var dateCalendar = GetSlot(this, CALENDAR);
        var DateTime = GetIntrinsic$1('%Temporal.DateTime%');
        if (temporalTime === undefined) return new DateTime(year, month, day, 0, 0, 0, 0, 0, 0, dateCalendar);
        temporalTime = ES.ToTemporalTime(temporalTime, GetIntrinsic$1('%Temporal.Time%'));
        var hour = GetSlot(temporalTime, ISO_HOUR);
        var minute = GetSlot(temporalTime, ISO_MINUTE);
        var second = GetSlot(temporalTime, ISO_SECOND);
        var millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
        var microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
        var nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
        var timeCalendar = GetSlot(temporalTime, CALENDAR);
        var calendar = ES.ConsolidateCalendars(dateCalendar, timeCalendar);
        return new DateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      }
    }, {
      key: "toZonedDateTime",
      value: function toZonedDateTime(timeZoneLike) {
        var temporalTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var timeZone = ES.ToTemporalTimeZone(timeZoneLike);
        options = ES.NormalizeOptionsObject(options);
        var disambiguation = ES.ToTemporalDisambiguation(options);
        var year = GetSlot(this, ISO_YEAR);
        var month = GetSlot(this, ISO_MONTH);
        var day = GetSlot(this, ISO_DAY);
        var calendar = GetSlot(this, CALENDAR);
        var DateTime = GetIntrinsic$1('%Temporal.DateTime%');
        var hour = 0,
            minute = 0,
            second = 0,
            millisecond = 0,
            microsecond = 0,
            nanosecond = 0;

        if (temporalTime !== undefined) {
          temporalTime = ES.ToTemporalTime(temporalTime, GetIntrinsic$1('%Temporal.Time%'));
          hour = GetSlot(temporalTime, ISO_HOUR);
          minute = GetSlot(temporalTime, ISO_MINUTE);
          second = GetSlot(temporalTime, ISO_SECOND);
          millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
          microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
          nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
        }

        var dt = new DateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        var instant = ES.GetTemporalInstantFor(timeZone, dt, disambiguation);
        var ZonedDateTime = GetIntrinsic$1('%Temporal.ZonedDateTime%');
        return new ZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
      }
    }, {
      key: "toYearMonth",
      value: function toYearMonth() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var YearMonth = GetIntrinsic$1('%Temporal.YearMonth%');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalDateFields(this, fieldNames);
        return calendar.yearMonthFromFields(fields, {}, YearMonth);
      }
    }, {
      key: "toMonthDay",
      value: function toMonthDay() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var MonthDay = GetIntrinsic$1('%Temporal.MonthDay%');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalDateFields(this, fieldNames);
        return calendar.monthDayFromFields(fields, {}, MonthDay);
      }
    }, {
      key: "getFields",
      value: function getFields() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalDateFields(this, fieldNames);
        fields.calendar = calendar;
        return fields;
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return {
          calendar: GetSlot(this, CALENDAR),
          isoDay: GetSlot(this, ISO_DAY),
          isoMonth: GetSlot(this, ISO_MONTH),
          isoYear: GetSlot(this, ISO_YEAR)
        };
      }
    }, {
      key: "calendar",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR);
      }
    }, {
      key: "year",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).year(this);
      }
    }, {
      key: "month",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).month(this);
      }
    }, {
      key: "day",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).day(this);
      }
    }, {
      key: "dayOfWeek",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).dayOfWeek(this);
      }
    }, {
      key: "dayOfYear",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).dayOfYear(this);
      }
    }, {
      key: "weekOfYear",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).weekOfYear(this);
      }
    }, {
      key: "daysInWeek",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).daysInWeek(this);
      }
    }, {
      key: "daysInMonth",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).daysInMonth(this);
      }
    }, {
      key: "daysInYear",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).daysInYear(this);
      }
    }, {
      key: "monthsInYear",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).monthsInYear(this);
      }
    }, {
      key: "inLeapYear",
      get: function get() {
        if (!ES.IsTemporalDate(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).inLeapYear(this);
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);

        if (ES.IsTemporalDate(item)) {
          var year = GetSlot(item, ISO_YEAR);
          var month = GetSlot(item, ISO_MONTH);
          var day = GetSlot(item, ISO_DAY);
          var calendar = GetSlot(item, CALENDAR);
          var result = new this(year, month, day, calendar);
          if (!ES.IsTemporalDate(result)) throw new TypeError('invalid result');
          return result;
        }

        return ES.ToTemporalDate(item, this, overflow);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ES.ToTemporalDate(one, Date);
        two = ES.ToTemporalDate(two, Date);
        var result = ES.CompareTemporalDate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY));
        if (result !== 0) return result;
        return ES.CalendarCompare(GetSlot(one, CALENDAR), GetSlot(two, CALENDAR));
      }
    }]);

    return Date;
  }();
  MakeIntrinsicClass(Date$1, 'Temporal.Date');

  var ObjectAssign$3 = Object.assign;

  function DateTimeToString(dateTime, precision) {
    var showCalendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'auto';
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    var year = GetSlot(dateTime, ISO_YEAR);
    var month = GetSlot(dateTime, ISO_MONTH);
    var day = GetSlot(dateTime, ISO_DAY);
    var hour = GetSlot(dateTime, ISO_HOUR);
    var minute = GetSlot(dateTime, ISO_MINUTE);
    var second = GetSlot(dateTime, ISO_SECOND);
    var millisecond = GetSlot(dateTime, ISO_MILLISECOND);
    var microsecond = GetSlot(dateTime, ISO_MICROSECOND);
    var nanosecond = GetSlot(dateTime, ISO_NANOSECOND);

    if (options) {
      var unit = options.unit,
          increment = options.increment,
          roundingMode = options.roundingMode;

      var _ES$RoundDateTime = ES.RoundDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode);

      year = _ES$RoundDateTime.year;
      month = _ES$RoundDateTime.month;
      day = _ES$RoundDateTime.day;
      hour = _ES$RoundDateTime.hour;
      minute = _ES$RoundDateTime.minute;
      second = _ES$RoundDateTime.second;
      millisecond = _ES$RoundDateTime.millisecond;
      microsecond = _ES$RoundDateTime.microsecond;
      nanosecond = _ES$RoundDateTime.nanosecond;
    }

    year = ES.ISOYearString(year);
    month = ES.ISODateTimePartString(month);
    day = ES.ISODateTimePartString(day);
    hour = ES.ISODateTimePartString(hour);
    minute = ES.ISODateTimePartString(minute);
    var seconds = ES.FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision);
    var calendar = ES.FormatCalendarAnnotation(GetSlot(dateTime, CALENDAR), showCalendar);
    return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute).concat(seconds).concat(calendar);
  }

  var DateTime = /*#__PURE__*/function () {
    function DateTime(isoYear, isoMonth, isoDay) {
      var hour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var minute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var second = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var millisecond = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var microsecond = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var nanosecond = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var calendar = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : GetISO8601Calendar();

      _classCallCheck(this, DateTime);

      isoYear = ES.ToInteger(isoYear);
      isoMonth = ES.ToInteger(isoMonth);
      isoDay = ES.ToInteger(isoDay);
      hour = ES.ToInteger(hour);
      minute = ES.ToInteger(minute);
      second = ES.ToInteger(second);
      millisecond = ES.ToInteger(millisecond);
      microsecond = ES.ToInteger(microsecond);
      nanosecond = ES.ToInteger(nanosecond);
      calendar = ES.ToTemporalCalendar(calendar);
      ES.RejectDateTime(isoYear, isoMonth, isoDay, hour, minute, second, millisecond, microsecond, nanosecond);
      ES.RejectDateTimeRange(isoYear, isoMonth, isoDay, hour, minute, second, millisecond, microsecond, nanosecond);
      CreateSlots(this);
      SetSlot(this, ISO_YEAR, isoYear);
      SetSlot(this, ISO_MONTH, isoMonth);
      SetSlot(this, ISO_DAY, isoDay);
      SetSlot(this, ISO_HOUR, hour);
      SetSlot(this, ISO_MINUTE, minute);
      SetSlot(this, ISO_SECOND, second);
      SetSlot(this, ISO_MILLISECOND, millisecond);
      SetSlot(this, ISO_MICROSECOND, microsecond);
      SetSlot(this, ISO_NANOSECOND, nanosecond);
      SetSlot(this, CALENDAR, calendar);

      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(DateTimeToString(this, 'auto'), ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }

    _createClass(DateTime, [{
      key: "with",
      value: function _with(temporalDateTimeLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');

        if (ES.Type(temporalDateTimeLike) !== 'Object') {
          var str = ES.ToString(temporalDateTimeLike);
          temporalDateTimeLike = ES.RelevantTemporalObjectFromString(str);
        }

        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);
        var source;
        var calendar = temporalDateTimeLike.calendar;

        if (calendar) {
          var TemporalCalendar = GetIntrinsic$1('%Temporal.Calendar%');
          calendar = TemporalCalendar.from(calendar);
          source = new DateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar);
        } else {
          calendar = GetSlot(this, CALENDAR);
          source = this;
        }

        var fieldNames = ES.CalendarFields(calendar, ['day', 'hour', 'microsecond', 'millisecond', 'minute', 'month', 'nanosecond', 'second', 'year']);
        var props = ES.ToPartialRecord(temporalDateTimeLike, fieldNames);

        if (!props) {
          throw new TypeError('invalid date-time-like');
        }

        var fields = ES.ToTemporalDateTimeFields(source, fieldNames);
        ObjectAssign$3(fields, props);
        var date = calendar.dateFromFields(fields, {
          overflow: overflow
        }, GetIntrinsic$1('%Temporal.Date%'));
        var year = GetSlot(date, ISO_YEAR);
        var month = GetSlot(date, ISO_MONTH);
        var day = GetSlot(date, ISO_DAY);
        var time = calendar.timeFromFields(fields, {
          overflow: overflow
        }, GetIntrinsic$1('%Temporal.Time%'));
        var hour = GetSlot(time, ISO_HOUR);
        var minute = GetSlot(time, ISO_MINUTE);
        var second = GetSlot(time, ISO_SECOND);
        var millisecond = GetSlot(time, ISO_MILLISECOND);
        var microsecond = GetSlot(time, ISO_MICROSECOND);
        var nanosecond = GetSlot(time, ISO_NANOSECOND);
        var Construct = ES.SpeciesConstructor(this, DateTime);
        var result = new Construct(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        if (!ES.IsTemporalDateTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "withCalendar",
      value: function withCalendar(calendar) {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        calendar = ES.ToTemporalCalendar(calendar);
        var Construct = ES.SpeciesConstructor(this, DateTime);
        var result = new Construct(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar);
        if (!ES.IsTemporalDateTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "add",
      value: function add(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        var duration = ES.ToLimitedTemporalDuration(temporalDurationLike);
        var _duration = duration,
            years = _duration.years,
            months = _duration.months,
            weeks = _duration.weeks,
            days = _duration.days,
            hours = _duration.hours,
            minutes = _duration.minutes,
            seconds = _duration.seconds,
            milliseconds = _duration.milliseconds,
            microseconds = _duration.microseconds,
            nanoseconds = _duration.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds); // For a negative duration, BalanceDuration() subtracts from days to make
        // all other units positive, so it's not needed to switch on the sign below

        var _ES$BalanceDuration = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 'days');

        days = _ES$BalanceDuration.days;
        hours = _ES$BalanceDuration.hours;
        minutes = _ES$BalanceDuration.minutes;
        seconds = _ES$BalanceDuration.seconds;
        milliseconds = _ES$BalanceDuration.milliseconds;
        microseconds = _ES$BalanceDuration.microseconds;
        nanoseconds = _ES$BalanceDuration.nanoseconds;
        duration = {
          years: years,
          months: months,
          weeks: weeks,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
          milliseconds: milliseconds,
          microseconds: microseconds,
          nanoseconds: nanoseconds
        }; // Add the time part

        var hour = this.hour,
            minute = this.minute,
            second = this.second,
            millisecond = this.millisecond,
            microsecond = this.microsecond,
            nanosecond = this.nanosecond;
        var deltaDays = 0;

        var _ES$AddTime = ES.AddTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

        deltaDays = _ES$AddTime.deltaDays;
        hour = _ES$AddTime.hour;
        minute = _ES$AddTime.minute;
        second = _ES$AddTime.second;
        millisecond = _ES$AddTime.millisecond;
        microsecond = _ES$AddTime.microsecond;
        nanosecond = _ES$AddTime.nanosecond;
        duration.days += deltaDays; // Delegate the date part addition to the calendar

        var calendar = GetSlot(this, CALENDAR);
        var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
        var datePart = new TemporalDate(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), calendar);
        var addedDate = calendar.dateAdd(datePart, duration, options, TemporalDate);
        var year = GetSlot(addedDate, ISO_YEAR);
        var month = GetSlot(addedDate, ISO_MONTH);
        var day = GetSlot(addedDate, ISO_DAY);
        var Construct = ES.SpeciesConstructor(this, DateTime);
        var result = new Construct(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        if (!ES.IsTemporalDateTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        var duration = ES.ToLimitedTemporalDuration(temporalDurationLike);
        var _duration2 = duration,
            years = _duration2.years,
            months = _duration2.months,
            weeks = _duration2.weeks,
            days = _duration2.days,
            hours = _duration2.hours,
            minutes = _duration2.minutes,
            seconds = _duration2.seconds,
            milliseconds = _duration2.milliseconds,
            microseconds = _duration2.microseconds,
            nanoseconds = _duration2.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds); // For a negative duration, BalanceDuration() subtracts from days to make
        // all other units positive, so it's not needed to switch on the sign below

        var _ES$BalanceDuration2 = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 'days');

        days = _ES$BalanceDuration2.days;
        hours = _ES$BalanceDuration2.hours;
        minutes = _ES$BalanceDuration2.minutes;
        seconds = _ES$BalanceDuration2.seconds;
        milliseconds = _ES$BalanceDuration2.milliseconds;
        microseconds = _ES$BalanceDuration2.microseconds;
        nanoseconds = _ES$BalanceDuration2.nanoseconds;
        duration = {
          years: years,
          months: months,
          weeks: weeks,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
          milliseconds: milliseconds,
          microseconds: microseconds,
          nanoseconds: nanoseconds
        }; // Subtract the time part

        var hour = this.hour,
            minute = this.minute,
            second = this.second,
            millisecond = this.millisecond,
            microsecond = this.microsecond,
            nanosecond = this.nanosecond;
        var deltaDays = 0;

        var _ES$SubtractTime = ES.SubtractTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

        deltaDays = _ES$SubtractTime.deltaDays;
        hour = _ES$SubtractTime.hour;
        minute = _ES$SubtractTime.minute;
        second = _ES$SubtractTime.second;
        millisecond = _ES$SubtractTime.millisecond;
        microsecond = _ES$SubtractTime.microsecond;
        nanosecond = _ES$SubtractTime.nanosecond;
        duration.days -= deltaDays; // Delegate the date part subtraction to the calendar

        var calendar = GetSlot(this, CALENDAR);
        var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
        var datePart = new TemporalDate(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), calendar);
        var subtractedDate = calendar.dateSubtract(datePart, duration, options, TemporalDate);
        var year = GetSlot(subtractedDate, ISO_YEAR);
        var month = GetSlot(subtractedDate, ISO_MONTH);
        var day = GetSlot(subtractedDate, ISO_DAY);
        var Construct = ES.SpeciesConstructor(this, DateTime);
        var result = new Construct(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        if (!ES.IsTemporalDateTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalDateTime(other, DateTime);
        var calendar = GetSlot(this, CALENDAR);
        var otherCalendar = GetSlot(other, CALENDAR);
        var calendarId = ES.CalendarToString(calendar);
        var otherCalendarId = ES.CalendarToString(otherCalendar);

        if (calendarId !== otherCalendarId) {
          throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
        }

        options = ES.NormalizeOptionsObject(options);
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'nanoseconds');
        var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits('days', smallestUnit);
        var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit);
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var roundingIncrement = ES.ToTemporalDateTimeRoundingIncrement(options, smallestUnit);

        var _calendar$timeUntil = calendar.timeUntil(this.toTime(), other.toTime()),
            deltaDays = _calendar$timeUntil.days,
            hours = _calendar$timeUntil.hours,
            minutes = _calendar$timeUntil.minutes,
            seconds = _calendar$timeUntil.seconds,
            milliseconds = _calendar$timeUntil.milliseconds,
            microseconds = _calendar$timeUntil.microseconds,
            nanoseconds = _calendar$timeUntil.nanoseconds;

        var year = GetSlot(this, ISO_YEAR);
        var month = GetSlot(this, ISO_MONTH);
        var day = GetSlot(this, ISO_DAY) + deltaDays;

        var _ES$BalanceDate = ES.BalanceDate(year, month, day);

        year = _ES$BalanceDate.year;
        month = _ES$BalanceDate.month;
        day = _ES$BalanceDate.day;
        var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
        var adjustedDate = new TemporalDate(year, month, day, calendar);
        var otherDate = new TemporalDate(GetSlot(other, ISO_YEAR), GetSlot(other, ISO_MONTH), GetSlot(other, ISO_DAY), calendar);
        var dateLargestUnit = ES.LargerOfTwoTemporalDurationUnits('days', largestUnit);
        var dateOptions = ObjectAssign$3({}, options, {
          largestUnit: dateLargestUnit
        });

        var _calendar$dateUntil = calendar.dateUntil(adjustedDate, otherDate, dateOptions),
            years = _calendar$dateUntil.years,
            months = _calendar$dateUntil.months,
            weeks = _calendar$dateUntil.weeks,
            days = _calendar$dateUntil.days;

        var _ES$RoundDuration = ES.RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this);

        years = _ES$RoundDuration.years;
        months = _ES$RoundDuration.months;
        weeks = _ES$RoundDuration.weeks;
        days = _ES$RoundDuration.days;
        hours = _ES$RoundDuration.hours;
        minutes = _ES$RoundDuration.minutes;
        seconds = _ES$RoundDuration.seconds;
        milliseconds = _ES$RoundDuration.milliseconds;
        microseconds = _ES$RoundDuration.microseconds;
        nanoseconds = _ES$RoundDuration.nanoseconds;

        var _ES$BalanceDuration3 = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

        days = _ES$BalanceDuration3.days;
        hours = _ES$BalanceDuration3.hours;
        minutes = _ES$BalanceDuration3.minutes;
        seconds = _ES$BalanceDuration3.seconds;
        milliseconds = _ES$BalanceDuration3.milliseconds;
        microseconds = _ES$BalanceDuration3.microseconds;
        nanoseconds = _ES$BalanceDuration3.nanoseconds;
        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalDateTime(other, DateTime);
        var calendar = GetSlot(this, CALENDAR);
        var otherCalendar = GetSlot(other, CALENDAR);
        var calendarId = ES.CalendarToString(calendar);
        var otherCalendarId = ES.CalendarToString(otherCalendar);

        if (calendarId !== otherCalendarId) {
          throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
        }

        options = ES.NormalizeOptionsObject(options);
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'nanoseconds');
        var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits('days', smallestUnit);
        var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit);
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var roundingIncrement = ES.ToTemporalDateTimeRoundingIncrement(options, smallestUnit);

        var _calendar$timeUntil2 = calendar.timeUntil(other.toTime(), this.toTime()),
            deltaDays = _calendar$timeUntil2.days,
            hours = _calendar$timeUntil2.hours,
            minutes = _calendar$timeUntil2.minutes,
            seconds = _calendar$timeUntil2.seconds,
            milliseconds = _calendar$timeUntil2.milliseconds,
            microseconds = _calendar$timeUntil2.microseconds,
            nanoseconds = _calendar$timeUntil2.nanoseconds;

        var year = GetSlot(this, ISO_YEAR);
        var month = GetSlot(this, ISO_MONTH);
        var day = GetSlot(this, ISO_DAY) + deltaDays;

        var _ES$BalanceDate2 = ES.BalanceDate(year, month, day);

        year = _ES$BalanceDate2.year;
        month = _ES$BalanceDate2.month;
        day = _ES$BalanceDate2.day;
        var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
        var adjustedDate = new TemporalDate(year, month, day, calendar);
        var otherDate = new TemporalDate(GetSlot(other, ISO_YEAR), GetSlot(other, ISO_MONTH), GetSlot(other, ISO_DAY), calendar);
        var dateLargestUnit = ES.LargerOfTwoTemporalDurationUnits('days', largestUnit);
        var dateOptions = ObjectAssign$3({}, options, {
          largestUnit: dateLargestUnit
        });

        var _calendar$dateUntil2 = calendar.dateUntil(otherDate, adjustedDate, dateOptions),
            years = _calendar$dateUntil2.years,
            months = _calendar$dateUntil2.months,
            weeks = _calendar$dateUntil2.weeks,
            days = _calendar$dateUntil2.days;

        var _ES$RoundDuration2 = ES.RoundDuration(-years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, roundingIncrement, smallestUnit, ES.NegateTemporalRoundingMode(roundingMode), this);

        years = _ES$RoundDuration2.years;
        months = _ES$RoundDuration2.months;
        weeks = _ES$RoundDuration2.weeks;
        days = _ES$RoundDuration2.days;
        hours = _ES$RoundDuration2.hours;
        minutes = _ES$RoundDuration2.minutes;
        seconds = _ES$RoundDuration2.seconds;
        milliseconds = _ES$RoundDuration2.milliseconds;
        microseconds = _ES$RoundDuration2.microseconds;
        nanoseconds = _ES$RoundDuration2.nanoseconds;
        years = -years;
        months = -months;
        weeks = -weeks;
        days = -days;
        hours = -hours;
        minutes = -minutes;
        seconds = -seconds;
        milliseconds = -milliseconds;
        microseconds = -microseconds;
        nanoseconds = -nanoseconds;

        var _ES$BalanceDuration4 = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

        days = _ES$BalanceDuration4.days;
        hours = _ES$BalanceDuration4.hours;
        minutes = _ES$BalanceDuration4.minutes;
        seconds = _ES$BalanceDuration4.seconds;
        milliseconds = _ES$BalanceDuration4.milliseconds;
        microseconds = _ES$BalanceDuration4.microseconds;
        nanoseconds = _ES$BalanceDuration4.nanoseconds;
        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      }
    }, {
      key: "round",
      value: function round(options) {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        if (options === undefined) throw new TypeError('options parameter is required');
        options = ES.NormalizeOptionsObject(options);
        var smallestUnit = ES.ToSmallestTemporalUnit(options);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var maximumIncrements = {
          day: 1,
          hour: 24,
          minute: 60,
          second: 60,
          millisecond: 1000,
          microsecond: 1000,
          nanosecond: 1000
        };
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
        var year = GetSlot(this, ISO_YEAR);
        var month = GetSlot(this, ISO_MONTH);
        var day = GetSlot(this, ISO_DAY);
        var hour = GetSlot(this, ISO_HOUR);
        var minute = GetSlot(this, ISO_MINUTE);
        var second = GetSlot(this, ISO_SECOND);
        var millisecond = GetSlot(this, ISO_MILLISECOND);
        var microsecond = GetSlot(this, ISO_MICROSECOND);
        var nanosecond = GetSlot(this, ISO_NANOSECOND);

        var _ES$RoundDateTime2 = ES.RoundDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode);

        year = _ES$RoundDateTime2.year;
        month = _ES$RoundDateTime2.month;
        day = _ES$RoundDateTime2.day;
        hour = _ES$RoundDateTime2.hour;
        minute = _ES$RoundDateTime2.minute;
        second = _ES$RoundDateTime2.second;
        millisecond = _ES$RoundDateTime2.millisecond;
        microsecond = _ES$RoundDateTime2.microsecond;
        nanosecond = _ES$RoundDateTime2.nanosecond;
        var Construct = ES.SpeciesConstructor(this, DateTime);
        var result = new Construct(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, GetSlot(this, CALENDAR));
        if (!ES.IsTemporalDateTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalDateTime(other, DateTime);

        for (var _i = 0, _arr = [ISO_YEAR, ISO_MONTH, ISO_DAY, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i < _arr.length; _i++) {
          var slot = _arr[_i];
          var val1 = GetSlot(this, slot);
          var val2 = GetSlot(other, slot);
          if (val1 !== val2) return false;
        }

        return ES.CalendarEquals(this, other);
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        options = ES.NormalizeOptionsObject(options);

        var _ES$ToSecondsStringPr = ES.ToSecondsStringPrecision(options),
            precision = _ES$ToSecondsStringPr.precision,
            unit = _ES$ToSecondsStringPr.unit,
            increment = _ES$ToSecondsStringPr.increment;

        var showCalendar = ES.ToShowCalendarOption(options);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'trunc');
        return DateTimeToString(this, precision, showCalendar, {
          unit: unit,
          increment: increment,
          roundingMode: roundingMode
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return DateTimeToString(this, 'auto');
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.DateTime');
      }
    }, {
      key: "toZonedDateTime",
      value: function toZonedDateTime(temporalTimeZoneLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        var timeZone = ES.ToTemporalTimeZone(temporalTimeZoneLike);
        options = ES.NormalizeOptionsObject(options);
        var disambiguation = ES.ToTemporalDisambiguation(options);
        var instant = ES.GetTemporalInstantFor(timeZone, this, disambiguation);
        var ZonedDateTime = GetIntrinsic$1('%Temporal.ZonedDateTime%');
        return new ZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, GetSlot(this, CALENDAR));
      }
    }, {
      key: "toDate",
      value: function toDate() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return ES.TemporalDateTimeToDate(this);
      }
    }, {
      key: "toYearMonth",
      value: function toYearMonth() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        var YearMonth = GetIntrinsic$1('%Temporal.YearMonth%');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalDateFields(this, fieldNames);
        return calendar.yearMonthFromFields(fields, {}, YearMonth);
      }
    }, {
      key: "toMonthDay",
      value: function toMonthDay() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        var MonthDay = GetIntrinsic$1('%Temporal.MonthDay%');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalDateFields(this, fieldNames);
        return calendar.monthDayFromFields(fields, {}, MonthDay);
      }
    }, {
      key: "toTime",
      value: function toTime() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return ES.TemporalDateTimeToTime(this);
      }
    }, {
      key: "getFields",
      value: function getFields() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalDateTimeFields(this, fieldNames);
        fields.calendar = calendar;
        return fields;
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return {
          calendar: GetSlot(this, CALENDAR),
          isoDay: GetSlot(this, ISO_DAY),
          isoHour: GetSlot(this, ISO_HOUR),
          isoMicrosecond: GetSlot(this, ISO_MICROSECOND),
          isoMillisecond: GetSlot(this, ISO_MILLISECOND),
          isoMinute: GetSlot(this, ISO_MINUTE),
          isoMonth: GetSlot(this, ISO_MONTH),
          isoNanosecond: GetSlot(this, ISO_NANOSECOND),
          isoSecond: GetSlot(this, ISO_SECOND),
          isoYear: GetSlot(this, ISO_YEAR)
        };
      }
    }, {
      key: "calendar",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR);
      }
    }, {
      key: "year",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).year(this);
      }
    }, {
      key: "month",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).month(this);
      }
    }, {
      key: "day",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).day(this);
      }
    }, {
      key: "hour",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).hour(this);
      }
    }, {
      key: "minute",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).minute(this);
      }
    }, {
      key: "second",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).second(this);
      }
    }, {
      key: "millisecond",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).millisecond(this);
      }
    }, {
      key: "microsecond",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).microsecond(this);
      }
    }, {
      key: "nanosecond",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).nanosecond(this);
      }
    }, {
      key: "dayOfWeek",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).dayOfWeek(this);
      }
    }, {
      key: "dayOfYear",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).dayOfYear(this);
      }
    }, {
      key: "weekOfYear",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).weekOfYear(this);
      }
    }, {
      key: "daysInWeek",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).daysInWeek(this);
      }
    }, {
      key: "daysInYear",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).daysInYear(this);
      }
    }, {
      key: "daysInMonth",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).daysInMonth(this);
      }
    }, {
      key: "monthsInYear",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).monthsInYear(this);
      }
    }, {
      key: "inLeapYear",
      get: function get() {
        if (!ES.IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).inLeapYear(this);
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);

        if (ES.IsTemporalDateTime(item)) {
          var year = GetSlot(item, ISO_YEAR);
          var month = GetSlot(item, ISO_MONTH);
          var day = GetSlot(item, ISO_DAY);
          var hour = GetSlot(item, ISO_HOUR);
          var minute = GetSlot(item, ISO_MINUTE);
          var second = GetSlot(item, ISO_SECOND);
          var millisecond = GetSlot(item, ISO_MILLISECOND);
          var microsecond = GetSlot(item, ISO_MICROSECOND);
          var nanosecond = GetSlot(item, ISO_NANOSECOND);
          var calendar = GetSlot(item, CALENDAR);
          var result = new this(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
          if (!ES.IsTemporalDateTime(result)) throw new TypeError('invalid result');
          return result;
        }

        return ES.ToTemporalDateTime(item, this, overflow);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ES.ToTemporalDateTime(one, DateTime);
        two = ES.ToTemporalDateTime(two, DateTime);

        for (var _i2 = 0, _arr2 = [ISO_YEAR, ISO_MONTH, ISO_DAY, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i2 < _arr2.length; _i2++) {
          var slot = _arr2[_i2];
          var val1 = GetSlot(one, slot);
          var val2 = GetSlot(two, slot);
          if (val1 !== val2) return ES.ComparisonResult(val1 - val2);
        }

        return ES.CalendarCompare(GetSlot(one, CALENDAR), GetSlot(two, CALENDAR));
      }
    }]);

    return DateTime;
  }();
  MakeIntrinsicClass(DateTime, 'Temporal.DateTime');

  var Duration = /*#__PURE__*/function () {
    function Duration() {
      var years = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var months = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var weeks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var days = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var hours = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var minutes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var seconds = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var milliseconds = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var microseconds = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var nanoseconds = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;

      _classCallCheck(this, Duration);

      years = ES.ToInteger(years);
      months = ES.ToInteger(months);
      weeks = ES.ToInteger(weeks);
      days = ES.ToInteger(days);
      hours = ES.ToInteger(hours);
      minutes = ES.ToInteger(minutes);
      seconds = ES.ToInteger(seconds);
      milliseconds = ES.ToInteger(milliseconds);
      microseconds = ES.ToInteger(microseconds);
      nanoseconds = ES.ToInteger(nanoseconds);
      var sign = ES.DurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

      for (var _i = 0, _arr = [years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds]; _i < _arr.length; _i++) {
        var prop = _arr[_i];
        if (!Number.isFinite(prop)) throw new RangeError('infinite values not allowed as duration fields');
        var propSign = Math.sign(prop);
        if (propSign !== 0 && propSign !== sign) throw new RangeError('mixed-sign values not allowed as duration fields');
      }

      CreateSlots(this);
      SetSlot(this, YEARS, years);
      SetSlot(this, MONTHS, months);
      SetSlot(this, WEEKS, weeks);
      SetSlot(this, DAYS, days);
      SetSlot(this, HOURS, hours);
      SetSlot(this, MINUTES, minutes);
      SetSlot(this, SECONDS, seconds);
      SetSlot(this, MILLISECONDS, milliseconds);
      SetSlot(this, MICROSECONDS, microseconds);
      SetSlot(this, NANOSECONDS, nanoseconds);

      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(ES.TemporalDurationToString(this), ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }

    _createClass(Duration, [{
      key: "with",
      value: function _with(durationLike) {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        var props = ES.ToPartialRecord(durationLike, ['days', 'hours', 'microseconds', 'milliseconds', 'minutes', 'months', 'nanoseconds', 'seconds', 'weeks', 'years']);

        if (!props) {
          throw new TypeError('invalid duration-like');
        }

        var _props$years = props.years,
            years = _props$years === void 0 ? GetSlot(this, YEARS) : _props$years,
            _props$months = props.months,
            months = _props$months === void 0 ? GetSlot(this, MONTHS) : _props$months,
            _props$weeks = props.weeks,
            weeks = _props$weeks === void 0 ? GetSlot(this, WEEKS) : _props$weeks,
            _props$days = props.days,
            days = _props$days === void 0 ? GetSlot(this, DAYS) : _props$days,
            _props$hours = props.hours,
            hours = _props$hours === void 0 ? GetSlot(this, HOURS) : _props$hours,
            _props$minutes = props.minutes,
            minutes = _props$minutes === void 0 ? GetSlot(this, MINUTES) : _props$minutes,
            _props$seconds = props.seconds,
            seconds = _props$seconds === void 0 ? GetSlot(this, SECONDS) : _props$seconds,
            _props$milliseconds = props.milliseconds,
            milliseconds = _props$milliseconds === void 0 ? GetSlot(this, MILLISECONDS) : _props$milliseconds,
            _props$microseconds = props.microseconds,
            microseconds = _props$microseconds === void 0 ? GetSlot(this, MICROSECONDS) : _props$microseconds,
            _props$nanoseconds = props.nanoseconds,
            nanoseconds = _props$nanoseconds === void 0 ? GetSlot(this, NANOSECONDS) : _props$nanoseconds;
        var Construct = ES.SpeciesConstructor(this, Duration);
        var result = new Construct(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        if (!ES.IsTemporalDuration(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "negated",
      value: function negated() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        var Construct = ES.SpeciesConstructor(this, Duration);
        var result = new Construct(-GetSlot(this, YEARS), -GetSlot(this, MONTHS), -GetSlot(this, WEEKS), -GetSlot(this, DAYS), -GetSlot(this, HOURS), -GetSlot(this, MINUTES), -GetSlot(this, SECONDS), -GetSlot(this, MILLISECONDS), -GetSlot(this, MICROSECONDS), -GetSlot(this, NANOSECONDS));
        if (!ES.IsTemporalDuration(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "abs",
      value: function abs() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        var Construct = ES.SpeciesConstructor(this, Duration);
        var result = new Construct(Math.abs(GetSlot(this, YEARS)), Math.abs(GetSlot(this, MONTHS)), Math.abs(GetSlot(this, WEEKS)), Math.abs(GetSlot(this, DAYS)), Math.abs(GetSlot(this, HOURS)), Math.abs(GetSlot(this, MINUTES)), Math.abs(GetSlot(this, SECONDS)), Math.abs(GetSlot(this, MILLISECONDS)), Math.abs(GetSlot(this, MICROSECONDS)), Math.abs(GetSlot(this, NANOSECONDS)));
        if (!ES.IsTemporalDuration(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "add",
      value: function add(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');

        var _ES$ToLimitedTemporal = ES.ToLimitedTemporalDuration(other),
            years = _ES$ToLimitedTemporal.years,
            months = _ES$ToLimitedTemporal.months,
            weeks = _ES$ToLimitedTemporal.weeks,
            days = _ES$ToLimitedTemporal.days,
            hours = _ES$ToLimitedTemporal.hours,
            minutes = _ES$ToLimitedTemporal.minutes,
            seconds = _ES$ToLimitedTemporal.seconds,
            milliseconds = _ES$ToLimitedTemporal.milliseconds,
            microseconds = _ES$ToLimitedTemporal.microseconds,
            nanoseconds = _ES$ToLimitedTemporal.nanoseconds;

        options = ES.NormalizeOptionsObject(options);

        var _ES$AddDuration = ES.AddDuration(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS), years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

        years = _ES$AddDuration.years;
        months = _ES$AddDuration.months;
        weeks = _ES$AddDuration.weeks;
        days = _ES$AddDuration.days;
        hours = _ES$AddDuration.hours;
        minutes = _ES$AddDuration.minutes;
        seconds = _ES$AddDuration.seconds;
        milliseconds = _ES$AddDuration.milliseconds;
        microseconds = _ES$AddDuration.microseconds;
        nanoseconds = _ES$AddDuration.nanoseconds;
        var Construct = ES.SpeciesConstructor(this, Duration);
        var result = new Construct(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        if (!ES.IsTemporalDuration(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "subtract",
      value: function subtract(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');

        var _ES$ToLimitedTemporal2 = ES.ToLimitedTemporalDuration(other),
            years = _ES$ToLimitedTemporal2.years,
            months = _ES$ToLimitedTemporal2.months,
            weeks = _ES$ToLimitedTemporal2.weeks,
            days = _ES$ToLimitedTemporal2.days,
            hours = _ES$ToLimitedTemporal2.hours,
            minutes = _ES$ToLimitedTemporal2.minutes,
            seconds = _ES$ToLimitedTemporal2.seconds,
            milliseconds = _ES$ToLimitedTemporal2.milliseconds,
            microseconds = _ES$ToLimitedTemporal2.microseconds,
            nanoseconds = _ES$ToLimitedTemporal2.nanoseconds;

        options = ES.NormalizeOptionsObject(options);

        var _ES$AddDuration2 = ES.AddDuration(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS), -years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);

        years = _ES$AddDuration2.years;
        months = _ES$AddDuration2.months;
        weeks = _ES$AddDuration2.weeks;
        days = _ES$AddDuration2.days;
        hours = _ES$AddDuration2.hours;
        minutes = _ES$AddDuration2.minutes;
        seconds = _ES$AddDuration2.seconds;
        milliseconds = _ES$AddDuration2.milliseconds;
        microseconds = _ES$AddDuration2.microseconds;
        nanoseconds = _ES$AddDuration2.nanoseconds;
        var Construct = ES.SpeciesConstructor(this, Duration);
        var result = new Construct(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        if (!ES.IsTemporalDuration(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "round",
      value: function round(options) {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        var years = GetSlot(this, YEARS);
        var months = GetSlot(this, MONTHS);
        var weeks = GetSlot(this, WEEKS);
        var days = GetSlot(this, DAYS);
        var hours = GetSlot(this, HOURS);
        var minutes = GetSlot(this, MINUTES);
        var seconds = GetSlot(this, SECONDS);
        var milliseconds = GetSlot(this, MILLISECONDS);
        var microseconds = GetSlot(this, MICROSECONDS);
        var nanoseconds = GetSlot(this, NANOSECONDS);
        var defaultLargestUnit = ES.DefaultTemporalLargestUnit(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        options = ES.NormalizeOptionsObject(options);
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'nanoseconds');
        defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits(defaultLargestUnit, smallestUnit);
        var relativeTo = ES.ToRelativeTemporalObject(options);
        var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit);
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var maximumIncrements = {
          years: undefined,
          months: undefined,
          weeks: undefined,
          days: undefined,
          hours: 24,
          minutes: 60,
          seconds: 60,
          milliseconds: 1000,
          microseconds: 1000,
          nanoseconds: 1000
        };
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);

        var _ES$UnbalanceDuration = ES.UnbalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo);

        years = _ES$UnbalanceDuration.years;
        months = _ES$UnbalanceDuration.months;
        weeks = _ES$UnbalanceDuration.weeks;
        days = _ES$UnbalanceDuration.days;

        var _ES$RoundDuration = ES.RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, relativeTo);

        years = _ES$RoundDuration.years;
        months = _ES$RoundDuration.months;
        weeks = _ES$RoundDuration.weeks;
        days = _ES$RoundDuration.days;
        hours = _ES$RoundDuration.hours;
        minutes = _ES$RoundDuration.minutes;
        seconds = _ES$RoundDuration.seconds;
        milliseconds = _ES$RoundDuration.milliseconds;
        microseconds = _ES$RoundDuration.microseconds;
        nanoseconds = _ES$RoundDuration.nanoseconds;

        var _ES$BalanceDurationRe = ES.BalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo);

        years = _ES$BalanceDurationRe.years;
        months = _ES$BalanceDurationRe.months;
        weeks = _ES$BalanceDurationRe.weeks;
        days = _ES$BalanceDurationRe.days;

        var _ES$BalanceDuration = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

        days = _ES$BalanceDuration.days;
        hours = _ES$BalanceDuration.hours;
        minutes = _ES$BalanceDuration.minutes;
        seconds = _ES$BalanceDuration.seconds;
        milliseconds = _ES$BalanceDuration.milliseconds;
        microseconds = _ES$BalanceDuration.microseconds;
        nanoseconds = _ES$BalanceDuration.nanoseconds;
        var Construct = ES.SpeciesConstructor(this, Duration);
        var result = new Construct(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        if (!ES.IsTemporalDuration(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "total",
      value: function total(options) {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        var years = GetSlot(this, YEARS);
        var months = GetSlot(this, MONTHS);
        var weeks = GetSlot(this, WEEKS);
        var days = GetSlot(this, DAYS);
        var hours = GetSlot(this, HOURS);
        var minutes = GetSlot(this, MINUTES);
        var seconds = GetSlot(this, SECONDS);
        var milliseconds = GetSlot(this, MILLISECONDS);
        var microseconds = GetSlot(this, MICROSECONDS);
        var nanoseconds = GetSlot(this, NANOSECONDS);
        options = ES.NormalizeOptionsObject(options);
        var unit = ES.ToTemporalDurationTotalUnit(options, undefined);
        if (unit === undefined) throw new RangeError('unit option is required');
        var relativeTo = ES.ToRelativeTemporalObject(options); // Convert larger units down to days

        var _ES$UnbalanceDuration2 = ES.UnbalanceDurationRelative(years, months, weeks, days, unit, relativeTo);

        years = _ES$UnbalanceDuration2.years;
        months = _ES$UnbalanceDuration2.months;
        weeks = _ES$UnbalanceDuration2.weeks;
        days = _ES$UnbalanceDuration2.days;

        var _ES$BalanceDuration2 = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, unit);

        days = _ES$BalanceDuration2.days;
        hours = _ES$BalanceDuration2.hours;
        minutes = _ES$BalanceDuration2.minutes;
        seconds = _ES$BalanceDuration2.seconds;
        milliseconds = _ES$BalanceDuration2.milliseconds;
        microseconds = _ES$BalanceDuration2.microseconds;
        nanoseconds = _ES$BalanceDuration2.nanoseconds;
        // Finally, truncate to the correct unit and calculate remainder
        var rounded = ES.RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 1, unit, 'trunc', relativeTo);
        return rounded[unit] + rounded.remainder;
      }
    }, {
      key: "getFields",
      value: function getFields() {
        var fields = ES.ToRecord(this, [['days'], ['hours'], ['microseconds'], ['milliseconds'], ['minutes'], ['months'], ['nanoseconds'], ['seconds'], ['weeks'], ['years']]);
        if (!fields) throw new TypeError('invalid receiver');
        return fields;
      }
    }, {
      key: "toString",
      value: function toString() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return ES.TemporalDurationToString(this);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return ES.TemporalDurationToString(this);
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');

        if (typeof Intl !== 'undefined' && typeof Intl.DurationFormat !== 'undefined') {
          return new Intl.DurationFormat(locales, options).format(this);
        }

        console.warn('Temporal.Duration.prototype.toLocaleString() requires Intl.DurationFormat.');
        return ES.TemporalDurationToString(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('not possible to compare Temporal.Duration');
      }
    }, {
      key: "years",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, YEARS);
      }
    }, {
      key: "months",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, MONTHS);
      }
    }, {
      key: "weeks",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, WEEKS);
      }
    }, {
      key: "days",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, DAYS);
      }
    }, {
      key: "hours",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, HOURS);
      }
    }, {
      key: "minutes",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, MINUTES);
      }
    }, {
      key: "seconds",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, SECONDS);
      }
    }, {
      key: "milliseconds",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, MILLISECONDS);
      }
    }, {
      key: "microseconds",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, MICROSECONDS);
      }
    }, {
      key: "nanoseconds",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, NANOSECONDS);
      }
    }, {
      key: "sign",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return ES.DurationSign(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS));
      }
    }, {
      key: "blank",
      get: function get() {
        if (!ES.IsTemporalDuration(this)) throw new TypeError('invalid receiver');
        return ES.DurationSign(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS)) === 0;
      }
    }], [{
      key: "from",
      value: function from(item) {
        if (ES.IsTemporalDuration(item)) {
          var years = GetSlot(item, YEARS);
          var months = GetSlot(item, MONTHS);
          var weeks = GetSlot(item, WEEKS);
          var days = GetSlot(item, DAYS);
          var hours = GetSlot(item, HOURS);
          var minutes = GetSlot(item, MINUTES);
          var seconds = GetSlot(item, SECONDS);
          var milliseconds = GetSlot(item, MILLISECONDS);
          var microseconds = GetSlot(item, MICROSECONDS);
          var nanoseconds = GetSlot(item, NANOSECONDS);
          var result = new this(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          if (!ES.IsTemporalDuration(result)) throw new TypeError('invalid result');
          return result;
        }

        return ES.ToTemporalDuration(item, this);
      }
    }]);

    return Duration;
  }();
  MakeIntrinsicClass(Duration, 'Temporal.Duration');

  var ObjectAssign$4 = Object.assign;

  function MonthDayToString(monthDay) {
    var showCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
    var month = ES.ISODateTimePartString(GetSlot(monthDay, ISO_MONTH));
    var day = ES.ISODateTimePartString(GetSlot(monthDay, ISO_DAY));
    var resultString = "".concat(month, "-").concat(day);
    var calendar = GetSlot(monthDay, CALENDAR);

    if (!(ES.IsTemporalCalendar(calendar) && GetSlot(calendar, CALENDAR_ID) === 'iso8601')) {
      var year = ES.ISOYearString(GetSlot(monthDay, ISO_YEAR));
      resultString = "".concat(year, "-").concat(resultString);
    }

    var calendarString = ES.FormatCalendarAnnotation(GetSlot(monthDay, CALENDAR), showCalendar);
    if (calendarString) resultString += calendarString;
    return resultString;
  }

  var MonthDay = /*#__PURE__*/function () {
    function MonthDay(isoMonth, isoDay) {
      var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GetISO8601Calendar();
      var referenceISOYear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1972;

      _classCallCheck(this, MonthDay);

      isoMonth = ES.ToInteger(isoMonth);
      isoDay = ES.ToInteger(isoDay);
      calendar = ES.ToTemporalCalendar(calendar);
      referenceISOYear = ES.ToInteger(referenceISOYear);
      ES.RejectDate(referenceISOYear, isoMonth, isoDay);
      ES.RejectDateRange(referenceISOYear, isoMonth, isoDay);
      CreateSlots(this);
      SetSlot(this, ISO_MONTH, isoMonth);
      SetSlot(this, ISO_DAY, isoDay);
      SetSlot(this, ISO_YEAR, referenceISOYear);
      SetSlot(this, CALENDAR, calendar);
      SetSlot(this, MONTH_DAY_BRAND, true);

      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(MonthDayToString(this), ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }

    _createClass(MonthDay, [{
      key: "with",
      value: function _with(temporalMonthDayLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');

        if ('calendar' in temporalMonthDayLike) {
          throw new RangeError('invalid calendar property in month-day-like');
        }

        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month']);
        var props = ES.ToPartialRecord(temporalMonthDayLike, fieldNames);

        if (!props) {
          throw new TypeError('invalid month-day-like');
        }

        var fields = ES.ToTemporalMonthDayFields(this, fieldNames);
        ObjectAssign$4(fields, props);
        var Construct = ES.SpeciesConstructor(this, MonthDay);
        var result = calendar.monthDayFromFields(fields, options, Construct);
        if (!ES.IsTemporalMonthDay(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!ES.IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalMonthDay(other, MonthDay);

        for (var _i = 0, _arr = [ISO_MONTH, ISO_DAY, ISO_YEAR]; _i < _arr.length; _i++) {
          var slot = _arr[_i];
          var val1 = GetSlot(this, slot);
          var val2 = GetSlot(other, slot);
          if (val1 !== val2) return false;
        }

        return ES.CalendarEquals(this, other);
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!ES.IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        options = ES.NormalizeOptionsObject(options);
        var showCalendar = ES.ToShowCalendarOption(options);
        return MonthDayToString(this, showCalendar);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!ES.IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return MonthDayToString(this);
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use equals() to compare Temporal.MonthDay');
      }
    }, {
      key: "toDate",
      value: function toDate(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var receiverFieldNames = ES.CalendarFields(calendar, ['day', 'month']);
        var fields = ES.ToTemporalMonthDayFields(this, receiverFieldNames);
        var inputFieldNames = ES.CalendarFields(calendar, ['year']);
        var entries = [['year']]; // Add extra fields from the calendar at the end

        inputFieldNames.forEach(function (fieldName) {
          if (!entries.some(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
                name = _ref2[0];

            return name === fieldName;
          })) {
            entries.push([fieldName, undefined]);
          }
        });
        ObjectAssign$4(fields, ES.ToRecord(item, entries));
        var Date = GetIntrinsic$1('%Temporal.Date%');
        return calendar.dateFromFields(fields, options, Date);
      }
    }, {
      key: "getFields",
      value: function getFields() {
        if (!ES.IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month']);
        var fields = ES.ToTemporalMonthDayFields(this, fieldNames);
        fields.calendar = calendar;
        return fields;
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!ES.IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return {
          calendar: GetSlot(this, CALENDAR),
          isoDay: GetSlot(this, ISO_DAY),
          isoMonth: GetSlot(this, ISO_MONTH),
          isoYear: GetSlot(this, ISO_YEAR)
        };
      }
    }, {
      key: "month",
      get: function get() {
        if (!ES.IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).month(this);
      }
    }, {
      key: "day",
      get: function get() {
        if (!ES.IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).day(this);
      }
    }, {
      key: "calendar",
      get: function get() {
        if (!ES.IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR);
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);

        if (ES.IsTemporalMonthDay(item)) {
          var month = GetSlot(item, ISO_MONTH);
          var day = GetSlot(item, ISO_DAY);
          var calendar = GetSlot(item, CALENDAR);
          var referenceISOYear = GetSlot(item, ISO_YEAR);
          var result = new this(month, day, calendar, referenceISOYear);
          if (!ES.IsTemporalMonthDay(result)) throw new TypeError('invalid result');
          return result;
        }

        return ES.ToTemporalMonthDay(item, this, overflow);
      }
    }]);

    return MonthDay;
  }();
  MakeIntrinsicClass(MonthDay, 'Temporal.MonthDay');

  var now = {
    instant: instant$1,
    dateTime: dateTime,
    dateTimeISO: dateTimeISO,
    date: date,
    dateISO: dateISO,
    timeISO: timeISO,
    timeZone: timeZone
  };

  function instant$1() {
    var Instant = GetIntrinsic$1('%Temporal.Instant%');
    return new Instant(ES.SystemUTCEpochNanoSeconds());
  }

  function dateTime(calendarLike) {
    var temporalTimeZoneLike = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : timeZone();
    return function () {
      var timeZone = ES.ToTemporalTimeZone(temporalTimeZoneLike);
      var calendar = ES.ToTemporalCalendar(calendarLike);
      var inst = instant$1();
      return ES.GetTemporalDateTimeFor(timeZone, inst, calendar);
    }();
  }

  function dateTimeISO() {
    var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : timeZone();
    return function () {
      var timeZone = ES.ToTemporalTimeZone(temporalTimeZoneLike);
      var calendar = GetISO8601Calendar();
      var inst = instant$1();
      return ES.GetTemporalDateTimeFor(timeZone, inst, calendar);
    }();
  }

  function date(calendarLike) {
    var temporalTimeZoneLike = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : timeZone();
    return ES.TemporalDateTimeToDate(dateTime(calendarLike, temporalTimeZoneLike));
  }

  function dateISO() {
    var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : timeZone();
    return ES.TemporalDateTimeToDate(dateTimeISO(temporalTimeZoneLike));
  }

  function timeISO() {
    var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : timeZone();
    return ES.TemporalDateTimeToTime(dateTimeISO(temporalTimeZoneLike));
  }

  function timeZone() {
    return ES.SystemTimeZone();
  }

  function TemporalTimeToString(time, precision) {
    var showCalendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'auto';
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    var hour = GetSlot(time, ISO_HOUR);
    var minute = GetSlot(time, ISO_MINUTE);
    var second = GetSlot(time, ISO_SECOND);
    var millisecond = GetSlot(time, ISO_MILLISECOND);
    var microsecond = GetSlot(time, ISO_MICROSECOND);
    var nanosecond = GetSlot(time, ISO_NANOSECOND);

    if (options) {
      var unit = options.unit,
          increment = options.increment,
          roundingMode = options.roundingMode;

      var _ES$RoundTime = ES.RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode);

      hour = _ES$RoundTime.hour;
      minute = _ES$RoundTime.minute;
      second = _ES$RoundTime.second;
      millisecond = _ES$RoundTime.millisecond;
      microsecond = _ES$RoundTime.microsecond;
      nanosecond = _ES$RoundTime.nanosecond;
    }

    hour = ES.ISODateTimePartString(hour);
    minute = ES.ISODateTimePartString(minute);
    var seconds = ES.FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision);
    var calendar = ES.FormatCalendarAnnotation(GetSlot(time, CALENDAR), showCalendar);
    return "".concat(hour, ":").concat(minute).concat(seconds).concat(calendar);
  }

  var Time = /*#__PURE__*/function () {
    function Time() {
      var isoHour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var isoMinute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var isoSecond = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var isoMillisecond = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var isoMicrosecond = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var isoNanosecond = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var calendar = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : GetISO8601Calendar();

      _classCallCheck(this, Time);

      isoHour = ES.ToInteger(isoHour);
      isoMinute = ES.ToInteger(isoMinute);
      isoSecond = ES.ToInteger(isoSecond);
      isoMillisecond = ES.ToInteger(isoMillisecond);
      isoMicrosecond = ES.ToInteger(isoMicrosecond);
      isoNanosecond = ES.ToInteger(isoNanosecond);
      calendar = ES.ToTemporalCalendar(calendar);
      ES.RejectTime(isoHour, isoMinute, isoSecond, isoMillisecond, isoMicrosecond, isoNanosecond);
      CreateSlots(this);
      SetSlot(this, ISO_HOUR, isoHour);
      SetSlot(this, ISO_MINUTE, isoMinute);
      SetSlot(this, ISO_SECOND, isoSecond);
      SetSlot(this, ISO_MILLISECOND, isoMillisecond);
      SetSlot(this, ISO_MICROSECOND, isoMicrosecond);
      SetSlot(this, ISO_NANOSECOND, isoNanosecond);
      SetSlot(this, CALENDAR, calendar);

      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(TemporalTimeToString(this, 'auto'), ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }

    _createClass(Time, [{
      key: "with",
      value: function _with(temporalTimeLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');

        if (ES.Type(temporalTimeLike) !== 'Object') {
          var str = ES.ToString(temporalTimeLike);
          temporalTimeLike = ES.RelevantTemporalObjectFromString(str);
        }

        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);
        var props = ES.ToPartialRecord(temporalTimeLike, ['hour', 'microsecond', 'millisecond', 'minute', 'nanosecond', 'second']);

        if (!props) {
          throw new TypeError('invalid time-like');
        }

        var _props$hour = props.hour,
            hour = _props$hour === void 0 ? GetSlot(this, ISO_HOUR) : _props$hour,
            _props$minute = props.minute,
            minute = _props$minute === void 0 ? GetSlot(this, ISO_MINUTE) : _props$minute,
            _props$second = props.second,
            second = _props$second === void 0 ? GetSlot(this, ISO_SECOND) : _props$second,
            _props$millisecond = props.millisecond,
            millisecond = _props$millisecond === void 0 ? GetSlot(this, ISO_MILLISECOND) : _props$millisecond,
            _props$microsecond = props.microsecond,
            microsecond = _props$microsecond === void 0 ? GetSlot(this, ISO_MICROSECOND) : _props$microsecond,
            _props$nanosecond = props.nanosecond,
            nanosecond = _props$nanosecond === void 0 ? GetSlot(this, ISO_NANOSECOND) : _props$nanosecond;

        var _ES$RegulateTime = ES.RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);

        hour = _ES$RegulateTime.hour;
        minute = _ES$RegulateTime.minute;
        second = _ES$RegulateTime.second;
        millisecond = _ES$RegulateTime.millisecond;
        microsecond = _ES$RegulateTime.microsecond;
        nanosecond = _ES$RegulateTime.nanosecond;
        var Construct = ES.SpeciesConstructor(this, Time);
        var result = new Construct(hour, minute, second, millisecond, microsecond, nanosecond);
        if (!ES.IsTemporalTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "add",
      value: function add(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        var duration = ES.ToLimitedTemporalDuration(temporalDurationLike);
        var years = duration.years,
            months = duration.months,
            weeks = duration.weeks,
            days = duration.days,
            hours = duration.hours,
            minutes = duration.minutes,
            seconds = duration.seconds,
            milliseconds = duration.milliseconds,
            microseconds = duration.microseconds,
            nanoseconds = duration.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        var Construct = ES.SpeciesConstructor(this, Time);
        var result = GetSlot(this, CALENDAR).timeAdd(this, duration, options, Construct);
        if (!ES.IsTemporalTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        var duration = ES.ToLimitedTemporalDuration(temporalDurationLike);
        var years = duration.years,
            months = duration.months,
            weeks = duration.weeks,
            days = duration.days,
            hours = duration.hours,
            minutes = duration.minutes,
            seconds = duration.seconds,
            milliseconds = duration.milliseconds,
            microseconds = duration.microseconds,
            nanoseconds = duration.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        var Construct = ES.SpeciesConstructor(this, Time);
        var result = GetSlot(this, CALENDAR).timeSubtract(this, duration, options, Construct);
        if (!ES.IsTemporalTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalTime(other, Time);
        var calendar = GetSlot(this, CALENDAR);
        var otherCalendar = GetSlot(other, CALENDAR);
        var calendarId = ES.CalendarToString(calendar);
        var otherCalendarId = ES.CalendarToString(otherCalendar);

        if (calendarId !== otherCalendarId) {
          throw new RangeError("cannot compute difference between times of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
        }

        options = ES.NormalizeOptionsObject(options);
        var largestUnit = ES.ToLargestTemporalUnit(options, 'hours', ['years', 'months', 'weeks', 'days']);
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'nanoseconds');
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var maximumIncrements = {
          hours: 24,
          minutes: 60,
          seconds: 60,
          milliseconds: 1000,
          microseconds: 1000,
          nanoseconds: 1000
        };
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);

        var _calendar$timeUntil = calendar.timeUntil(this, other),
            hours = _calendar$timeUntil.hours,
            minutes = _calendar$timeUntil.minutes,
            seconds = _calendar$timeUntil.seconds,
            milliseconds = _calendar$timeUntil.milliseconds,
            microseconds = _calendar$timeUntil.microseconds,
            nanoseconds = _calendar$timeUntil.nanoseconds;

        var _ES$RoundDuration = ES.RoundDuration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode);

        hours = _ES$RoundDuration.hours;
        minutes = _ES$RoundDuration.minutes;
        seconds = _ES$RoundDuration.seconds;
        milliseconds = _ES$RoundDuration.milliseconds;
        microseconds = _ES$RoundDuration.microseconds;
        nanoseconds = _ES$RoundDuration.nanoseconds;

        var _ES$BalanceDuration = ES.BalanceDuration(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

        hours = _ES$BalanceDuration.hours;
        minutes = _ES$BalanceDuration.minutes;
        seconds = _ES$BalanceDuration.seconds;
        milliseconds = _ES$BalanceDuration.milliseconds;
        microseconds = _ES$BalanceDuration.microseconds;
        nanoseconds = _ES$BalanceDuration.nanoseconds;
        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalTime(other, Time);
        var calendar = GetSlot(this, CALENDAR);
        var otherCalendar = GetSlot(other, CALENDAR);
        var calendarId = ES.CalendarToString(calendar);
        var otherCalendarId = ES.CalendarToString(otherCalendar);

        if (calendarId !== otherCalendarId) {
          throw new RangeError("cannot compute difference between times of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
        }

        options = ES.NormalizeOptionsObject(options);
        var largestUnit = ES.ToLargestTemporalUnit(options, 'hours', ['years', 'months', 'weeks', 'days']);
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'nanoseconds');
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var maximumIncrements = {
          hours: 24,
          minutes: 60,
          seconds: 60,
          milliseconds: 1000,
          microseconds: 1000,
          nanoseconds: 1000
        };
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);

        var _calendar$timeUntil2 = calendar.timeUntil(other, this),
            hours = _calendar$timeUntil2.hours,
            minutes = _calendar$timeUntil2.minutes,
            seconds = _calendar$timeUntil2.seconds,
            milliseconds = _calendar$timeUntil2.milliseconds,
            microseconds = _calendar$timeUntil2.microseconds,
            nanoseconds = _calendar$timeUntil2.nanoseconds;

        var _ES$RoundDuration2 = ES.RoundDuration(0, 0, 0, 0, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, roundingIncrement, smallestUnit, ES.NegateTemporalRoundingMode(roundingMode));

        hours = _ES$RoundDuration2.hours;
        minutes = _ES$RoundDuration2.minutes;
        seconds = _ES$RoundDuration2.seconds;
        milliseconds = _ES$RoundDuration2.milliseconds;
        microseconds = _ES$RoundDuration2.microseconds;
        nanoseconds = _ES$RoundDuration2.nanoseconds;
        hours = -hours;
        minutes = -minutes;
        seconds = -seconds;
        milliseconds = -milliseconds;
        microseconds = -microseconds;
        nanoseconds = -nanoseconds;

        var _ES$BalanceDuration2 = ES.BalanceDuration(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

        hours = _ES$BalanceDuration2.hours;
        minutes = _ES$BalanceDuration2.minutes;
        seconds = _ES$BalanceDuration2.seconds;
        milliseconds = _ES$BalanceDuration2.milliseconds;
        microseconds = _ES$BalanceDuration2.microseconds;
        nanoseconds = _ES$BalanceDuration2.nanoseconds;
        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      }
    }, {
      key: "round",
      value: function round(options) {
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        if (options === undefined) throw new TypeError('options parameter is required');
        options = ES.NormalizeOptionsObject(options);
        var smallestUnit = ES.ToSmallestTemporalUnit(options, ['day']);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var maximumIncrements = {
          hour: 24,
          minute: 60,
          second: 60,
          millisecond: 1000,
          microsecond: 1000,
          nanosecond: 1000
        };
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
        var hour = GetSlot(this, ISO_HOUR);
        var minute = GetSlot(this, ISO_MINUTE);
        var second = GetSlot(this, ISO_SECOND);
        var millisecond = GetSlot(this, ISO_MILLISECOND);
        var microsecond = GetSlot(this, ISO_MICROSECOND);
        var nanosecond = GetSlot(this, ISO_NANOSECOND);

        var _ES$RoundTime2 = ES.RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode);

        hour = _ES$RoundTime2.hour;
        minute = _ES$RoundTime2.minute;
        second = _ES$RoundTime2.second;
        millisecond = _ES$RoundTime2.millisecond;
        microsecond = _ES$RoundTime2.microsecond;
        nanosecond = _ES$RoundTime2.nanosecond;
        var Construct = ES.SpeciesConstructor(this, Time);
        var result = new Construct(hour, minute, second, millisecond, microsecond, nanosecond);
        if (!ES.IsTemporalTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalTime(other, Time);

        for (var _i = 0, _arr = [ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i < _arr.length; _i++) {
          var slot = _arr[_i];
          var val1 = GetSlot(this, slot);
          var val2 = GetSlot(other, slot);
          if (val1 !== val2) return false;
        }

        return true;
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        options = ES.NormalizeOptionsObject(options);

        var _ES$ToSecondsStringPr = ES.ToSecondsStringPrecision(options),
            precision = _ES$ToSecondsStringPr.precision,
            unit = _ES$ToSecondsStringPr.unit,
            increment = _ES$ToSecondsStringPr.increment;

        var roundingMode = ES.ToTemporalRoundingMode(options, 'trunc');
        var showCalendar = ES.ToShowCalendarOption(options);
        return TemporalTimeToString(this, precision, showCalendar, {
          unit: unit,
          increment: increment,
          roundingMode: roundingMode
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return TemporalTimeToString(this, 'auto');
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.Time');
      }
    }, {
      key: "toDateTime",
      value: function toDateTime(temporalDate) {
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        temporalDate = ES.ToTemporalDate(temporalDate, GetIntrinsic$1('%Temporal.Date%'));
        var year = GetSlot(temporalDate, ISO_YEAR);
        var month = GetSlot(temporalDate, ISO_MONTH);
        var day = GetSlot(temporalDate, ISO_DAY);
        var dateCalendar = GetSlot(temporalDate, CALENDAR);
        var hour = GetSlot(this, ISO_HOUR);
        var minute = GetSlot(this, ISO_MINUTE);
        var second = GetSlot(this, ISO_SECOND);
        var millisecond = GetSlot(this, ISO_MILLISECOND);
        var microsecond = GetSlot(this, ISO_MICROSECOND);
        var nanosecond = GetSlot(this, ISO_NANOSECOND);
        var timeCalendar = GetSlot(this, CALENDAR);
        var calendar = ES.ConsolidateCalendars(dateCalendar, timeCalendar);
        var DateTime = GetIntrinsic$1('%Temporal.DateTime%');
        return new DateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      }
    }, {
      key: "toZonedDateTime",
      value: function toZonedDateTime(timeZoneLike, temporalDate) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        var timeZone = ES.ToTemporalTimeZone(timeZoneLike);
        temporalDate = ES.ToTemporalDate(temporalDate, GetIntrinsic$1('%Temporal.Date%'));
        options = ES.NormalizeOptionsObject(options);
        var disambiguation = ES.ToTemporalDisambiguation(options);
        var year = GetSlot(temporalDate, ISO_YEAR);
        var month = GetSlot(temporalDate, ISO_MONTH);
        var day = GetSlot(temporalDate, ISO_DAY);
        var calendar = GetSlot(temporalDate, CALENDAR);
        var hour = GetSlot(this, ISO_HOUR);
        var minute = GetSlot(this, ISO_MINUTE);
        var second = GetSlot(this, ISO_SECOND);
        var millisecond = GetSlot(this, ISO_MILLISECOND);
        var microsecond = GetSlot(this, ISO_MICROSECOND);
        var nanosecond = GetSlot(this, ISO_NANOSECOND);
        var DateTime = GetIntrinsic$1('%Temporal.DateTime%');
        var dt = new DateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        var instant = ES.GetTemporalInstantFor(timeZone, dt, disambiguation);
        var ZonedDateTime = GetIntrinsic$1('%Temporal.ZonedDateTime%');
        return new ZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
      }
    }, {
      key: "getFields",
      value: function getFields() {
        var fields = ES.ToTemporalTimeRecord(this);
        if (!fields) throw new TypeError('invalid receiver');
        fields.calendar = GetSlot(this, CALENDAR);
        return fields;
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return {
          calendar: GetSlot(this, CALENDAR),
          isoHour: GetSlot(this, ISO_HOUR),
          isoMicrosecond: GetSlot(this, ISO_MICROSECOND),
          isoMillisecond: GetSlot(this, ISO_MILLISECOND),
          isoMinute: GetSlot(this, ISO_MINUTE),
          isoNanosecond: GetSlot(this, ISO_NANOSECOND),
          isoSecond: GetSlot(this, ISO_SECOND)
        };
      }
    }, {
      key: "hour",
      get: function get() {
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).hour(this);
      }
    }, {
      key: "minute",
      get: function get() {
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).minute(this);
      }
    }, {
      key: "second",
      get: function get() {
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).second(this);
      }
    }, {
      key: "millisecond",
      get: function get() {
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).millisecond(this);
      }
    }, {
      key: "microsecond",
      get: function get() {
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).microsecond(this);
      }
    }, {
      key: "nanosecond",
      get: function get() {
        if (!ES.IsTemporalTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).nanosecond(this);
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);

        if (ES.IsTemporalTime(item)) {
          var hour = GetSlot(item, ISO_HOUR);
          var minute = GetSlot(item, ISO_MINUTE);
          var second = GetSlot(item, ISO_SECOND);
          var millisecond = GetSlot(item, ISO_MILLISECOND);
          var microsecond = GetSlot(item, ISO_MICROSECOND);
          var nanosecond = GetSlot(item, ISO_NANOSECOND);
          var calendar = GetSlot(item, CALENDAR);
          var result = new this(hour, minute, second, millisecond, microsecond, nanosecond, calendar);
          if (!ES.IsTemporalTime(result)) throw new TypeError('invalid result');
          return result;
        }

        return ES.ToTemporalTime(item, this, overflow);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ES.ToTemporalTime(one, Time);
        two = ES.ToTemporalTime(two, Time);

        for (var _i2 = 0, _arr2 = [ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i2 < _arr2.length; _i2++) {
          var slot = _arr2[_i2];
          var val1 = GetSlot(one, slot);
          var val2 = GetSlot(two, slot);
          if (val1 !== val2) return ES.ComparisonResult(val1 - val2);
        }

        return ES.CalendarCompare(GetSlot(one, CALENDAR), GetSlot(two, CALENDAR));
      }
    }]);

    return Time;
  }();
  MakeIntrinsicClass(Time, 'Temporal.Time');

  var ObjectAssign$5 = Object.assign;

  function YearMonthToString(yearMonth) {
    var showCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
    var year = ES.ISOYearString(GetSlot(yearMonth, ISO_YEAR));
    var month = ES.ISODateTimePartString(GetSlot(yearMonth, ISO_MONTH));
    var resultString = "".concat(year, "-").concat(month);
    var calendar = GetSlot(yearMonth, CALENDAR);

    if (!(ES.IsTemporalCalendar(calendar) && GetSlot(calendar, CALENDAR_ID) === 'iso8601')) {
      var day = ES.ISODateTimePartString(GetSlot(yearMonth, ISO_DAY));
      resultString += "-".concat(day);
    }

    var calendarString = ES.FormatCalendarAnnotation(calendar, showCalendar);
    if (calendarString) resultString += calendarString;
    return resultString;
  }

  var YearMonth = /*#__PURE__*/function () {
    function YearMonth(isoYear, isoMonth) {
      var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GetISO8601Calendar();
      var referenceISODay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, YearMonth);

      isoYear = ES.ToInteger(isoYear);
      isoMonth = ES.ToInteger(isoMonth);
      calendar = ES.ToTemporalCalendar(calendar);
      referenceISODay = ES.ToInteger(referenceISODay);
      ES.RejectDate(isoYear, isoMonth, referenceISODay);
      ES.RejectYearMonthRange(isoYear, isoMonth);
      CreateSlots(this);
      SetSlot(this, ISO_YEAR, isoYear);
      SetSlot(this, ISO_MONTH, isoMonth);
      SetSlot(this, ISO_DAY, referenceISODay);
      SetSlot(this, CALENDAR, calendar);
      SetSlot(this, YEAR_MONTH_BRAND, true);

      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(YearMonthToString(this), ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }

    _createClass(YearMonth, [{
      key: "with",
      value: function _with(temporalYearMonthLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');

        if ('calendar' in temporalYearMonthLike) {
          throw new RangeError('invalid calendar property in year-month-like');
        }

        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['month', 'year']);
        var props = ES.ToPartialRecord(temporalYearMonthLike, fieldNames);

        if (!props) {
          throw new TypeError('invalid year-month-like');
        }

        var fields = ES.ToTemporalYearMonthFields(this, fieldNames);
        ObjectAssign$5(fields, props);
        var Construct = ES.SpeciesConstructor(this, YearMonth);
        var result = calendar.yearMonthFromFields(fields, options, Construct);
        if (!ES.IsTemporalYearMonth(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "add",
      value: function add(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        var duration = ES.ToLimitedTemporalDuration(temporalDurationLike);
        var years = duration.years,
            months = duration.months,
            weeks = duration.weeks,
            days = duration.days,
            hours = duration.hours,
            minutes = duration.minutes,
            seconds = duration.seconds,
            milliseconds = duration.milliseconds,
            microseconds = duration.microseconds,
            nanoseconds = duration.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

        var _ES$BalanceDuration = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 'days');

        days = _ES$BalanceDuration.days;
        var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['month', 'year']);
        var fields = ES.ToTemporalYearMonthFields(this, fieldNames);
        var sign = ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        var day = sign < 0 ? calendar.daysInMonth(this) : 1;
        var startDate = calendar.dateFromFields(_objectSpread2(_objectSpread2({}, fields), {}, {
          day: day
        }), {}, TemporalDate);
        var addedDate = calendar.dateAdd(startDate, _objectSpread2(_objectSpread2({}, duration), {}, {
          days: days
        }), options, TemporalDate);
        var Construct = ES.SpeciesConstructor(this, YearMonth);
        var result = calendar.yearMonthFromFields(addedDate, options, Construct);
        if (!ES.IsTemporalYearMonth(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        var duration = ES.ToLimitedTemporalDuration(temporalDurationLike);
        var years = duration.years,
            months = duration.months,
            weeks = duration.weeks,
            days = duration.days,
            hours = duration.hours,
            minutes = duration.minutes,
            seconds = duration.seconds,
            milliseconds = duration.milliseconds,
            microseconds = duration.microseconds,
            nanoseconds = duration.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

        var _ES$BalanceDuration2 = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 'days');

        days = _ES$BalanceDuration2.days;
        var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['month', 'year']);
        var fields = ES.ToTemporalYearMonthFields(this, fieldNames);
        var sign = ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        var day = sign < 0 ? 1 : calendar.daysInMonth(this);
        var startDate = calendar.dateFromFields(_objectSpread2(_objectSpread2({}, fields), {}, {
          day: day
        }), {}, TemporalDate);
        var subtractedDate = calendar.dateSubtract(startDate, _objectSpread2(_objectSpread2({}, duration), {}, {
          days: days
        }), options, TemporalDate);
        var Construct = ES.SpeciesConstructor(this, YearMonth);
        var result = calendar.yearMonthFromFields(subtractedDate, options, Construct);
        if (!ES.IsTemporalYearMonth(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalYearMonth(other, YearMonth);
        var calendar = GetSlot(this, CALENDAR);
        var otherCalendar = GetSlot(other, CALENDAR);
        var calendarID = ES.CalendarToString(calendar);
        var otherCalendarID = ES.CalendarToString(otherCalendar);

        if (calendarID !== otherCalendarID) {
          throw new RangeError("cannot compute difference between months of ".concat(calendarID, " and ").concat(otherCalendarID, " calendars"));
        }

        options = ES.NormalizeOptionsObject(options);
        var disallowedUnits = ['weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds'];
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'months', disallowedUnits);
        var largestUnit = ES.ToLargestTemporalUnit(options, 'years', disallowedUnits);
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, undefined, false);
        var fieldNames = ES.CalendarFields(calendar, ['month', 'year']);
        var otherFields = ES.ToTemporalYearMonthFields(other, fieldNames);
        var thisFields = ES.ToTemporalYearMonthFields(this, fieldNames);
        var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
        var otherDate = calendar.dateFromFields(_objectSpread2(_objectSpread2({}, otherFields), {}, {
          day: 1
        }), {}, TemporalDate);
        var thisDate = calendar.dateFromFields(_objectSpread2(_objectSpread2({}, thisFields), {}, {
          day: 1
        }), {}, TemporalDate);
        var result = calendar.dateUntil(thisDate, otherDate, {
          largestUnit: largestUnit
        });
        if (smallestUnit === 'months' && roundingIncrement === 1) return result;
        var years = result.years,
            months = result.months;
        var TemporalDateTime = GetIntrinsic$1('%Temporal.DateTime%');
        var relativeTo = new TemporalDateTime(GetSlot(thisDate, ISO_YEAR), GetSlot(thisDate, ISO_MONTH), GetSlot(thisDate, ISO_DAY), 0, 0, 0, 0, 0, 0, calendar);

        var _ES$RoundDuration = ES.RoundDuration(years, months, 0, 0, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, roundingMode, relativeTo);

        years = _ES$RoundDuration.years;
        months = _ES$RoundDuration.months;
        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(years, months, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalYearMonth(other, YearMonth);
        var calendar = GetSlot(this, CALENDAR);
        var otherCalendar = GetSlot(other, CALENDAR);
        var calendarID = ES.CalendarToString(calendar);
        var otherCalendarID = ES.CalendarToString(otherCalendar);

        if (calendarID !== otherCalendarID) {
          throw new RangeError("cannot compute difference between months of ".concat(calendarID, " and ").concat(otherCalendarID, " calendars"));
        }

        options = ES.NormalizeOptionsObject(options);
        var disallowedUnits = ['weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds'];
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'months', disallowedUnits);
        var largestUnit = ES.ToLargestTemporalUnit(options, 'years', disallowedUnits);
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, undefined, false);
        var fieldNames = ES.CalendarFields(calendar, ['month', 'year']);
        var otherFields = ES.ToTemporalYearMonthFields(other, fieldNames);
        var thisFields = ES.ToTemporalYearMonthFields(this, fieldNames);
        var TemporalDate = GetIntrinsic$1('%Temporal.Date%');
        var otherDate = calendar.dateFromFields(_objectSpread2(_objectSpread2({}, otherFields), {}, {
          day: 1
        }), {}, TemporalDate);
        var thisDate = calendar.dateFromFields(_objectSpread2(_objectSpread2({}, thisFields), {}, {
          day: 1
        }), {}, TemporalDate);
        var result = calendar.dateUntil(otherDate, thisDate, {
          largestUnit: largestUnit
        });
        if (smallestUnit === 'months' && roundingIncrement === 1) return result;
        var years = result.years,
            months = result.months;
        var TemporalDateTime = GetIntrinsic$1('%Temporal.DateTime%');
        var relativeTo = new TemporalDateTime(GetSlot(thisDate, ISO_YEAR), GetSlot(thisDate, ISO_MONTH), GetSlot(thisDate, ISO_DAY), 0, 0, 0, 0, 0, 0, calendar);

        var _ES$RoundDuration2 = ES.RoundDuration(-years, -months, 0, 0, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, ES.NegateTemporalRoundingMode(roundingMode), relativeTo);

        years = _ES$RoundDuration2.years;
        months = _ES$RoundDuration2.months;
        var Duration = GetIntrinsic$1('%Temporal.Duration%');
        return new Duration(-years, -months, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalYearMonth(other, YearMonth);

        for (var _i = 0, _arr = [ISO_YEAR, ISO_MONTH, ISO_DAY]; _i < _arr.length; _i++) {
          var slot = _arr[_i];
          var val1 = GetSlot(this, slot);
          var val2 = GetSlot(other, slot);
          if (val1 !== val2) return false;
        }

        return ES.CalendarEquals(this, other);
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        options = ES.NormalizeOptionsObject(options);
        var showCalendar = ES.ToShowCalendarOption(options);
        return YearMonthToString(this, showCalendar);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return YearMonthToString(this);
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.YearMonth');
      }
    }, {
      key: "toDateOnDay",
      value: function toDateOnDay(day) {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['month', 'year']);
        var fields = ES.ToTemporalYearMonthFields(this, fieldNames);
        var Date = GetIntrinsic$1('%Temporal.Date%');
        return calendar.dateFromFields(_objectSpread2(_objectSpread2({}, fields), {}, {
          day: day
        }), {
          overflow: 'reject'
        }, Date);
      }
    }, {
      key: "getFields",
      value: function getFields() {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['month', 'year']);
        var fields = ES.ToTemporalYearMonthFields(this, fieldNames);
        fields.calendar = calendar;
        return fields;
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return {
          calendar: GetSlot(this, CALENDAR),
          isoDay: GetSlot(this, ISO_DAY),
          isoMonth: GetSlot(this, ISO_MONTH),
          isoYear: GetSlot(this, ISO_YEAR)
        };
      }
    }, {
      key: "year",
      get: function get() {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).year(this);
      }
    }, {
      key: "month",
      get: function get() {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).month(this);
      }
    }, {
      key: "calendar",
      get: function get() {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR);
      }
    }, {
      key: "daysInMonth",
      get: function get() {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).daysInMonth(this);
      }
    }, {
      key: "daysInYear",
      get: function get() {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).daysInYear(this);
      }
    }, {
      key: "monthsInYear",
      get: function get() {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).monthsInYear(this);
      }
    }, {
      key: "inLeapYear",
      get: function get() {
        if (!ES.IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).inLeapYear(this);
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);

        if (ES.IsTemporalYearMonth(item)) {
          var year = GetSlot(item, ISO_YEAR);
          var month = GetSlot(item, ISO_MONTH);
          var calendar = GetSlot(item, CALENDAR);
          var referenceISODay = GetSlot(item, ISO_DAY);
          var result = new this(year, month, calendar, referenceISODay);
          if (!ES.IsTemporalYearMonth(result)) throw new TypeError('invalid result');
          return result;
        }

        return ES.ToTemporalYearMonth(item, this, overflow);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ES.ToTemporalYearMonth(one, YearMonth);
        two = ES.ToTemporalYearMonth(two, YearMonth);

        for (var _i2 = 0, _arr2 = [ISO_YEAR, ISO_MONTH, ISO_DAY]; _i2 < _arr2.length; _i2++) {
          var slot = _arr2[_i2];
          var val1 = GetSlot(one, slot);
          var val2 = GetSlot(two, slot);
          if (val1 !== val2) return ES.ComparisonResult(val1 - val2);
        }

        return ES.CalendarCompare(GetSlot(one, CALENDAR), GetSlot(two, CALENDAR));
      }
    }]);

    return YearMonth;
  }();
  MakeIntrinsicClass(YearMonth, 'Temporal.YearMonth');

  var ZonedDateTime = /*#__PURE__*/function () {
    function ZonedDateTime(epochNanoseconds, timeZone) {
      var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GetISO8601Calendar();

      _classCallCheck(this, ZonedDateTime);

      epochNanoseconds = ES.ToBigInt(epochNanoseconds);
      timeZone = ES.ToTemporalTimeZone(timeZone);
      calendar = ES.ToTemporalCalendar(calendar);
      ES.RejectInstantRange(epochNanoseconds);
      CreateSlots(this);
      SetSlot(this, EPOCHNANOSECONDS, epochNanoseconds);
      SetSlot(this, TIME_ZONE, timeZone);
      SetSlot(this, CALENDAR, calendar);
      var TemporalInstant = GetIntrinsic$1('%Temporal.Instant%');
      var instant = new TemporalInstant(GetSlot(this, EPOCHNANOSECONDS));
      SetSlot(this, INSTANT, instant);

      {
        Object.defineProperty(this, '_repr_', {
          value: "".concat(this[Symbol.toStringTag], " <").concat(zonedDateTimeToString(this, 'auto'), ">"),
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
    }

    _createClass(ZonedDateTime, [{
      key: "with",
      value: function _with(temporalZonedDateTimeLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');

        if (ES.Type(temporalZonedDateTimeLike) !== 'Object') {
          var str = ES.ToString(temporalZonedDateTimeLike);
          temporalZonedDateTimeLike = ES.RelevantTemporalObjectFromString(str);
        }

        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);
        var disambiguation = ES.ToTemporalDisambiguation(options);
        var offset = ES.ToTemporalOffset(options, 'prefer');
        throw new Error('with() not implemented yet');
      }
    }, {
      key: "withTimeZone",
      value: function withTimeZone(timeZone) {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        timeZone = ES.ToTemporalTimeZone(timeZone);
        var Construct = ES.SpeciesConstructor(this, ZonedDateTime);
        var result = new Construct(GetSlot(this, EPOCHNANOSECONDS), timeZone, GetSlot(this, CALENDAR));
        if (!ES.IsTemporalZonedDateTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "withCalendar",
      value: function withCalendar(calendar) {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        calendar = ES.ToTemporalCalendar(calendar);
        var Construct = ES.SpeciesConstructor(this, ZonedDateTime);
        var result = new Construct(GetSlot(this, EPOCHNANOSECONDS), GetSlot(this, TIME_ZONE), calendar);
        if (!ES.IsTemporalZonedDateTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "add",
      value: function add(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var duration = ES.ToLimitedTemporalDuration(temporalDurationLike);
        var years = duration.years,
            months = duration.months,
            weeks = duration.weeks,
            days = duration.days,
            hours = duration.hours,
            minutes = duration.minutes,
            seconds = duration.seconds,
            milliseconds = duration.milliseconds,
            microseconds = duration.microseconds,
            nanoseconds = duration.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);
        var timeZone = GetSlot(this, TIME_ZONE);
        var calendar = GetSlot(this, CALENDAR);
        var epochNanoseconds = ES.AddZonedDateTime(GetSlot(this, INSTANT), timeZone, calendar, years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, overflow);
        var Construct = ES.SpeciesConstructor(this, ZonedDateTime);
        var result = new Construct(epochNanoseconds, timeZone, calendar);
        if (!ES.IsTemporalZonedDateTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "subtract",
      value: function subtract(temporalDurationLike) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var duration = ES.ToLimitedTemporalDuration(temporalDurationLike);
        var years = duration.years,
            months = duration.months,
            weeks = duration.weeks,
            days = duration.days,
            hours = duration.hours,
            minutes = duration.minutes,
            seconds = duration.seconds,
            milliseconds = duration.milliseconds,
            microseconds = duration.microseconds,
            nanoseconds = duration.nanoseconds;
        ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);
        var timeZone = GetSlot(this, TIME_ZONE);
        var calendar = GetSlot(this, CALENDAR);
        var epochNanoseconds = ES.SubtractZonedDateTime(GetSlot(this, INSTANT), timeZone, calendar, years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, overflow);
        var Construct = ES.SpeciesConstructor(this, ZonedDateTime);
        var result = new Construct(epochNanoseconds, timeZone, calendar);
        if (!ES.IsTemporalZonedDateTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "until",
      value: function until(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalZonedDateTime(other, ZonedDateTime);
        var calendar = GetSlot(this, CALENDAR);
        var otherCalendar = GetSlot(other, CALENDAR);
        var calendarId = ES.CalendarToString(calendar);
        var otherCalendarId = ES.CalendarToString(otherCalendar);

        if (calendarId !== otherCalendarId) {
          throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
        }

        options = ES.NormalizeOptionsObject(options);
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'nanoseconds');
        var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits('days', smallestUnit);
        var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit);
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var roundingIncrement = ES.ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
        throw new Error('until() not implemented yet');
      }
    }, {
      key: "since",
      value: function since(other) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalZonedDateTime(other, ZonedDateTime);
        var calendar = GetSlot(this, CALENDAR);
        var otherCalendar = GetSlot(other, CALENDAR);
        var calendarId = ES.CalendarToString(calendar);
        var otherCalendarId = ES.CalendarToString(otherCalendar);

        if (calendarId !== otherCalendarId) {
          throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
        }

        options = ES.NormalizeOptionsObject(options);
        var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, 'nanoseconds');
        var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits('days', smallestUnit);
        var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit);
        ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        roundingMode = ES.NegateTemporalRoundingMode(roundingMode);
        var roundingIncrement = ES.ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
        throw new Error('since() not implemented yet');
      }
    }, {
      key: "round",
      value: function round(options) {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        if (options === undefined) throw new TypeError('options parameter is required');
        options = ES.NormalizeOptionsObject(options);
        var smallestUnit = ES.ToSmallestTemporalUnit(options);
        var roundingMode = ES.ToTemporalRoundingMode(options, 'nearest');
        var maximumIncrements = {
          day: 1,
          hour: 24,
          minute: 60,
          second: 60,
          millisecond: 1000,
          microsecond: 1000,
          nanosecond: 1000
        };
        var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false); // first, round the underlying DateTime fields

        var dt = dateTime$1(this);
        var year = GetSlot(dt, ISO_YEAR);
        var month = GetSlot(dt, ISO_MONTH);
        var day = GetSlot(dt, ISO_DAY);
        var hour = GetSlot(dt, ISO_HOUR);
        var minute = GetSlot(dt, ISO_MINUTE);
        var second = GetSlot(dt, ISO_SECOND);
        var millisecond = GetSlot(dt, ISO_MILLISECOND);
        var microsecond = GetSlot(dt, ISO_MICROSECOND);
        var nanosecond = GetSlot(dt, ISO_NANOSECOND);

        var _ES$RoundDateTime = ES.RoundDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode);

        year = _ES$RoundDateTime.year;
        month = _ES$RoundDateTime.month;
        day = _ES$RoundDateTime.day;
        hour = _ES$RoundDateTime.hour;
        minute = _ES$RoundDateTime.minute;
        second = _ES$RoundDateTime.second;
        millisecond = _ES$RoundDateTime.millisecond;
        microsecond = _ES$RoundDateTime.microsecond;
        nanosecond = _ES$RoundDateTime.nanosecond;
        // TODO: there's a case not yet implemented here: if there's a DST
        // transition during the current day, then it's ignored by rounding. For
        // example, using the `nearest` mode a time of 11:45 would round up in
        // DateTime rounding but should round down if the day is 23 hours long.
        // The since()/until() implementation will show one way to do this rounding.
        // Now reset all DateTime fields but leave the TimeZone. The offset will
        // also be retained if the new date/time values are still OK with the old
        // offset. Otherwise the offset will be changed to be compatible with the
        // new date/time values. If DST disambiguation is required, the `compatible`
        // disambiguation algorithm will be used.
        var DateTime = GetIntrinsic$1('%Temporal.DateTime%');
        var calendar = GetSlot(this, CALENDAR);
        var rounded = new DateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        var timeZone = GetSlot(this, TIME_ZONE);
        var offsetNs = ES.GetOffsetNanosecondsFor(timeZone, GetSlot(this, INSTANT)); // See the 'prefer' algorithm in ToTemporalZonedDateTime

        var instant;
        var possibleInstants = timeZone.getPossibleInstantsFor(rounded);

        var _iterator = _createForOfIteratorHelper(possibleInstants),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var candidate = _step.value;
            var candidateOffset = ES.GetOffsetNanosecondsFor(timeZone, candidate);

            if (candidateOffset === offsetNs) {
              instant = candidate;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (!instant) instant = ES.GetTemporalInstantFor(timeZone, rounded, 'compatible');
        var Construct = ES.SpeciesConstructor(this, ZonedDateTime);
        var result = new Construct(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
        if (!ES.IsTemporalZonedDateTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "equals",
      value: function equals(other) {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        other = ES.ToTemporalZonedDateTime(other, ZonedDateTime);
        var one = GetSlot(this, EPOCHNANOSECONDS);
        var two = GetSlot(other, EPOCHNANOSECONDS);
        if (!BigInteger(one).equals(two)) return false;
        if (!ES.TimeZoneEquals(GetSlot(this, TIME_ZONE), GetSlot(other, TIME_ZONE))) return false;
        return ES.CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
      }
    }, {
      key: "toString",
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        options = ES.NormalizeOptionsObject(options);

        var _ES$ToSecondsStringPr = ES.ToSecondsStringPrecision(options),
            precision = _ES$ToSecondsStringPr.precision,
            unit = _ES$ToSecondsStringPr.unit,
            increment = _ES$ToSecondsStringPr.increment;

        var roundingMode = ES.ToTemporalRoundingMode(options, 'trunc');
        var showCalendar = ES.ToShowCalendarOption(options);
        var showTimeZone = ES.ToShowTimeZoneNameOption(options);
        var showOffset = ES.ToShowOffsetOption(options);
        return zonedDateTimeToString(this, precision, showCalendar, showTimeZone, showOffset, {
          unit: unit,
          increment: increment,
          roundingMode: roundingMode
        });
      }
    }, {
      key: "toLocaleString",
      value: function toLocaleString() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return zonedDateTimeToString(this, 'auto');
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.ZonedDateTime');
      }
    }, {
      key: "startOfDay",
      value: function startOfDay() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var dt = dateTime$1(this);
        var DateTime = GetIntrinsic$1('%Temporal.DateTime%');
        var dtStart = new DateTime(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), 0, 0, 0, 0, 0, 0);
        var timeZone = GetSlot(this, TIME_ZONE);
        var instant = ES.GetTemporalInstantFor(timeZone, dtStart, 'compatible');
        var Construct = ES.SpeciesConstructor(this, ZonedDateTime);
        var result = new Construct(GetSlot(instant, EPOCHNANOSECONDS), timeZone, GetSlot(this, CALENDAR));
        if (!ES.IsTemporalZonedDateTime(result)) throw new TypeError('invalid result');
        return result;
      }
    }, {
      key: "toInstant",
      value: function toInstant() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var TemporalInstant = GetIntrinsic$1('%Temporal.Instant%');
        return new TemporalInstant(GetSlot(this, EPOCHNANOSECONDS));
      }
    }, {
      key: "toDate",
      value: function toDate() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return ES.TemporalDateTimeToDate(dateTime$1(this));
      }
    }, {
      key: "toTime",
      value: function toTime() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return ES.TemporalDateTimeToTime(dateTime$1(this));
      }
    }, {
      key: "toDateTime",
      value: function toDateTime() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return dateTime$1(this);
      }
    }, {
      key: "toYearMonth",
      value: function toYearMonth() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var YearMonth = GetIntrinsic$1('%Temporal.YearMonth%');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalDateFields(this, fieldNames);
        return calendar.yearMonthFromFields(fields, {}, YearMonth);
      }
    }, {
      key: "toMonthDay",
      value: function toMonthDay() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var MonthDay = GetIntrinsic$1('%Temporal.MonthDay%');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalDateFields(this, fieldNames);
        return calendar.monthDayFromFields(fields, {}, MonthDay);
      }
    }, {
      key: "getFields",
      value: function getFields() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var calendar = GetSlot(this, CALENDAR);
        var fieldNames = ES.CalendarFields(calendar, ['day', 'month', 'year']);
        var fields = ES.ToTemporalZonedDateTimeFields(this, fieldNames);
        fields.calendar = calendar;
        return fields;
      }
    }, {
      key: "getISOFields",
      value: function getISOFields() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var dt = dateTime$1(this);
        var tz = GetSlot(this, TIME_ZONE);
        return {
          calendar: GetSlot(this, CALENDAR),
          isoDay: GetSlot(dt, ISO_DAY),
          isoHour: GetSlot(dt, ISO_HOUR),
          isoMicrosecond: GetSlot(dt, ISO_MICROSECOND),
          isoMillisecond: GetSlot(dt, ISO_MILLISECOND),
          isoMinute: GetSlot(dt, ISO_MINUTE),
          isoMonth: GetSlot(dt, ISO_MONTH),
          isoNanosecond: GetSlot(dt, ISO_NANOSECOND),
          isoSecond: GetSlot(dt, ISO_SECOND),
          isoYear: GetSlot(dt, ISO_YEAR),
          offset: ES.GetOffsetStringFor(tz, GetSlot(this, INSTANT)),
          timeZone: tz
        };
      }
    }, {
      key: "calendar",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR);
      }
    }, {
      key: "timeZone",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, TIME_ZONE);
      }
    }, {
      key: "year",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).year(dateTime$1(this));
      }
    }, {
      key: "month",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).month(dateTime$1(this));
      }
    }, {
      key: "day",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).day(dateTime$1(this));
      }
    }, {
      key: "hour",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime$1(this), ISO_HOUR);
      }
    }, {
      key: "minute",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime$1(this), ISO_MINUTE);
      }
    }, {
      key: "second",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime$1(this), ISO_SECOND);
      }
    }, {
      key: "millisecond",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime$1(this), ISO_MILLISECOND);
      }
    }, {
      key: "microsecond",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime$1(this), ISO_MICROSECOND);
      }
    }, {
      key: "nanosecond",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(dateTime$1(this), ISO_NANOSECOND);
      }
    }, {
      key: "epochSeconds",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var value = GetSlot(this, EPOCHNANOSECONDS);
        return +value.divide(1e9);
      }
    }, {
      key: "epochMilliseconds",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var value = GetSlot(this, EPOCHNANOSECONDS);
        return +value.divide(1e6);
      }
    }, {
      key: "epochMicroseconds",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var value = GetSlot(this, EPOCHNANOSECONDS);
        return bigIntIfAvailable$2(value.divide(1e3));
      }
    }, {
      key: "epochNanoseconds",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return bigIntIfAvailable$2(GetSlot(this, EPOCHNANOSECONDS));
      }
    }, {
      key: "dayOfWeek",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).dayOfWeek(dateTime$1(this));
      }
    }, {
      key: "dayOfYear",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).dayOfYear(dateTime$1(this));
      }
    }, {
      key: "weekOfYear",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).weekOfYear(dateTime$1(this));
      }
    }, {
      key: "hoursInDay",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        var dt = dateTime$1(this);
        var DateTime = GetIntrinsic$1('%Temporal.DateTime%');
        var year = GetSlot(dt, ISO_YEAR);
        var month = GetSlot(dt, ISO_MONTH);
        var day = GetSlot(dt, ISO_DAY);
        var today = new DateTime(year, month, day, 0, 0, 0, 0, 0, 0);
        var tomorrowFields = ES.AddDate(year, month, day, 0, 0, 0, 1, 'reject');
        var tomorrow = new DateTime(tomorrowFields.year, tomorrowFields.month, tomorrowFields.day, 0, 0, 0, 0, 0, 0);
        var timeZone = GetSlot(this, TIME_ZONE);
        var todayNs = GetSlot(ES.GetTemporalInstantFor(timeZone, today, 'compatible'), EPOCHNANOSECONDS);
        var tomorrowNs = GetSlot(ES.GetTemporalInstantFor(timeZone, tomorrow, 'compatible'), EPOCHNANOSECONDS);

        var _ES$DifferenceInstant = ES.DifferenceInstant(todayNs, tomorrowNs, 1, 'nanoseconds', 'nearest'),
            seconds = _ES$DifferenceInstant.seconds,
            milliseconds = _ES$DifferenceInstant.milliseconds,
            microseconds = _ES$DifferenceInstant.microseconds,
            nanoseconds = _ES$DifferenceInstant.nanoseconds;

        var hours, minutes, remainder;

        var _ES$BalanceDuration = ES.BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, 'hours');

        hours = _ES$BalanceDuration.hours;
        minutes = _ES$BalanceDuration.minutes;
        seconds = _ES$BalanceDuration.seconds;
        milliseconds = _ES$BalanceDuration.milliseconds;
        microseconds = _ES$BalanceDuration.microseconds;
        nanoseconds = _ES$BalanceDuration.nanoseconds;

        var _ES$RoundDuration = ES.RoundDuration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 1, 'hours', 'trunc');

        hours = _ES$RoundDuration.hours;
        remainder = _ES$RoundDuration.remainder;
        return hours + remainder;
      }
    }, {
      key: "daysInWeek",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).daysInWeek(dateTime$1(this));
      }
    }, {
      key: "daysInMonth",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).daysInMonth(dateTime$1(this));
      }
    }, {
      key: "daysInYear",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).daysInYear(dateTime$1(this));
      }
    }, {
      key: "monthsInYear",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).monthsInYear(dateTime$1(this));
      }
    }, {
      key: "inLeapYear",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR).inLeapYear(dateTime$1(this));
      }
    }, {
      key: "offset",
      get: function get() {
        if (!ES.IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
        return ES.GetOffsetStringFor(GetSlot(this, TIME_ZONE), GetSlot(this, INSTANT));
      }
    }], [{
      key: "from",
      value: function from(item) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        options = ES.NormalizeOptionsObject(options);
        var overflow = ES.ToTemporalOverflow(options);
        var disambiguation = ES.ToTemporalDisambiguation(options);
        var offset = ES.ToTemporalOffset(options, 'reject');

        if (ES.IsTemporalZonedDateTime(item)) {
          return new ZonedDateTime(GetSlot(item, EPOCHNANOSECONDS), GetSlot(item, TIME_ZONE), GetSlot(item, CALENDAR));
        }

        return ES.ToTemporalZonedDateTime(item, this, overflow, disambiguation, offset);
      }
    }, {
      key: "compare",
      value: function compare(one, two) {
        one = ES.ToTemporalZonedDateTime(one, ZonedDateTime);
        two = ES.ToTemporalZonedDateTime(two, ZonedDateTime);
        var ns1 = GetSlot(one, EPOCHNANOSECONDS);
        var ns2 = GetSlot(two, EPOCHNANOSECONDS);
        if (BigInteger(ns1).lesser(ns2)) return -1;
        if (BigInteger(ns1).greater(ns2)) return 1;
        var calendarResult = ES.CalendarCompare(GetSlot(one, CALENDAR), GetSlot(two, CALENDAR));
        if (calendarResult) return calendarResult;
        return ES.TimeZoneCompare(GetSlot(one, TIME_ZONE), GetSlot(two, TIME_ZONE));
      }
    }]);

    return ZonedDateTime;
  }();
  MakeIntrinsicClass(ZonedDateTime, 'Temporal.ZonedDateTime');

  function bigIntIfAvailable$2(wrapper) {
    return typeof BigInt === 'undefined' ? wrapper : wrapper.value;
  }

  function dateTime$1(zdt) {
    return ES.GetTemporalDateTimeFor(GetSlot(zdt, TIME_ZONE), GetSlot(zdt, INSTANT), GetSlot(zdt, CALENDAR));
  }

  function zonedDateTimeToString(zdt, precision) {
    var showCalendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'auto';
    var showTimeZone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'auto';
    var showOffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'auto';
    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
    var dt = dateTime$1(zdt);
    var year = GetSlot(dt, ISO_YEAR);
    var month = GetSlot(dt, ISO_MONTH);
    var day = GetSlot(dt, ISO_DAY);
    var hour = GetSlot(dt, ISO_HOUR);
    var minute = GetSlot(dt, ISO_MINUTE);
    var second = GetSlot(dt, ISO_SECOND);
    var millisecond = GetSlot(dt, ISO_MILLISECOND);
    var microsecond = GetSlot(dt, ISO_MICROSECOND);
    var nanosecond = GetSlot(dt, ISO_NANOSECOND);

    if (options) {
      var unit = options.unit,
          increment = options.increment,
          roundingMode = options.roundingMode;

      var _ES$RoundDateTime2 = ES.RoundDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode);

      year = _ES$RoundDateTime2.year;
      month = _ES$RoundDateTime2.month;
      day = _ES$RoundDateTime2.day;
      hour = _ES$RoundDateTime2.hour;
      minute = _ES$RoundDateTime2.minute;
      second = _ES$RoundDateTime2.second;
      millisecond = _ES$RoundDateTime2.millisecond;
      microsecond = _ES$RoundDateTime2.microsecond;
      nanosecond = _ES$RoundDateTime2.nanosecond;
    }

    year = ES.ISOYearString(year);
    month = ES.ISODateTimePartString(month);
    day = ES.ISODateTimePartString(day);
    hour = ES.ISODateTimePartString(hour);
    minute = ES.ISODateTimePartString(minute);
    var seconds = ES.FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision);
    var tz = GetSlot(zdt, TIME_ZONE);
    var result = "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute).concat(seconds);
    if (showOffset !== 'never') result += ES.GetOffsetStringFor(tz, GetSlot(zdt, INSTANT));
    if (showTimeZone !== 'never') result += "[".concat(ES.TimeZoneToString(tz), "]");
    result += ES.FormatCalendarAnnotation(GetSlot(zdt, CALENDAR), showCalendar);
    return result;
  }

  var Temporal = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Instant: Instant,
    Calendar: Calendar,
    Date: Date$1,
    DateTime: DateTime,
    Duration: Duration,
    MonthDay: MonthDay,
    now: now,
    Time: Time,
    TimeZone: TimeZone,
    YearMonth: YearMonth,
    ZonedDateTime: ZonedDateTime
  });

  function toTemporalInstant() {
    // Observable access to valueOf is not correct here, but unavoidable
    var epochNanoseconds = BigInteger(+this).multiply(1e6);
    return new Instant(bigIntIfAvailable$3(epochNanoseconds));
  }

  function bigIntIfAvailable$3(wrapper) {
    return typeof BigInt === 'undefined' ? wrapper : wrapper.value;
  }

  Object.defineProperty(globalThis, 'Temporal', {
    value: {},
    writable: true,
    enumerable: false,
    configurable: true
  });
  copy(globalThis.Temporal, Temporal);
  copy(globalThis.Intl, Intl$1);
  Object.defineProperty(globalThis.Date.prototype, 'toTemporalInstant', {
    value: toTemporalInstant,
    writable: true,
    enumerable: false,
    configurable: true
  });

  function copy(target, source) {
    var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(source)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        Object.defineProperty(target, prop, {
          value: source[prop],
          writable: true,
          enumerable: false,
          configurable: true
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  exports.Intl = Intl$1;
  exports.Temporal = Temporal;
  exports.toTemporalInstant = toTemporalInstant;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=playground.js.map
