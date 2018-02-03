"use strict";

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ "/Users/malinantonsson/Dev/projects/mamp/sam/wp-content/themes/html5blank-stable-child/src/scripts/app.js": [function (require, module, exports) {
    'use strict';

    var _modulesFileUpload = require('./modules/file-upload');

    (0, _modulesFileUpload.fileUploads)();
  }, { "./modules/file-upload": "/Users/malinantonsson/Dev/projects/mamp/sam/wp-content/themes/html5blank-stable-child/src/scripts/modules/file-upload.js" }], "/Users/malinantonsson/Dev/projects/mamp/sam/wp-content/themes/html5blank-stable-child/src/scripts/modules/file-upload.js": [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.fileUploads = fileUploads;

    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }return arr2;
      } else {
        return Array.from(arr);
      }
    }

    function fileUploads() {
      var fileUploadsButton = document.querySelectorAll('.file-upload');

      if (fileUploads) {
        var fileUploadsArray = [].concat(_toConsumableArray(fileUploadsButton));
        fileUploadsArray.map(function (field) {
          field.addEventListener('change', function (e) {
            field.classList.add('file-upload--is-complete');
            var fileName = e.target.value.split('\\').pop();

            if (fileName) {
              field.querySelector('.file-upload__label').innerHTML = fileName;
            }
          });
        });
      }
    }
  }, {}] }, {}, ["/Users/malinantonsson/Dev/projects/mamp/sam/wp-content/themes/html5blank-stable-child/src/scripts/app.js"]);