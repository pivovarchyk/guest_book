(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var ekko_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ekko-lightbox */ "./node_modules/ekko-lightbox/dist/ekko-lightbox.min.js");
/* harmony import */ var ekko_lightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ekko_lightbox__WEBPACK_IMPORTED_MODULE_4__);


global.$ = global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;



jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn.addTag = function (tag, text) {
    var value;
    var selected = text.val().substr(text.prop('selectionStart'), text.prop('selectionEnd'));
    var before = text.val().substr(0, text.prop('selectionStart'));
    var after = text.val().substr(text.prop('selectionEnd'), text.length);
    tag = tag === 'link' ? 'a' : tag;
    value = before + '[' + tag;
    value += tag === 'a' ? ' href = \"\" title = \"\"]' : ']';
    value += selected + '[/' + tag + ']' + after;
    text.val(value);
  };

  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn.showPreviewMessage = function (previewMessage, previewButton) {
    previewMessage.show().animate({
      opacity: 1
    });
    previewButton.val('   скрыть   ');
  };

  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn.hidePreviewMessage = function (previewMessage, previewButton) {
    previewMessage.hide().animate({
      opacity: 0
    });
    previewButton.val('отобразить');
  };
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  var _this = this;

  var $textMessage;
  var $text = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#text');
  var $previewMessage = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#preview-message');
  var $previewButton = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#preview-button');
  $text.on('focusin', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(_this).showPreviewMessage($previewMessage, $previewButton);
  });
  $text.on('focusout', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(_this).hidePreviewMessage($previewMessage, $previewButton);
  });
  $text.on('change keyup paste', function () {
    $textMessage = $text.val().replace(/\[italic\](.*?)\[\/italic\]/g, '<i>$1</i>').replace(/\[code\](.*?)\[\/code\]/g, '<code>$1</code>').replace(/\[strike\](.*?)\[\/strike\]/g, '<strike>$1</strike>').replace(/\[strong\](.*?)\[\/strong\]/g, '<strong>$1</strong>').replace(/\[a\s*(\w+\s*=\s*(?:".*?"|'.*?'))\s*\](.*?)\[\s*\/a\s*\]/g, '<a $1>$2</a>');
    $previewMessage.html($textMessage);
  });
  $previewButton.on('click', function () {
    $textMessage = $text.val().replace(/\[italic\](.+?)\[\/italic\]/g, '<i>$1</i>').replace(/\[code\](.*?)\[\/code\]/g, '<code>$1</code>').replace(/\[strike\](.*?)\[\/strike\]/g, '<strike>$1</strike>').replace(/\[strong\](.*?)\[\/strong\]/g, '<strong>$1</strong>').replace(/\[a\s*(\w+\s*=\s*(?:".*?"|'.*?'))\s*\](.*?)\[\s*\/a\s*\]/g, '<a $1>$2</a>');
    $previewMessage.html($textMessage);

    if ($previewMessage.css('opacity') == 0) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(_this).showPreviewMessage($previewMessage, $previewButton);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(_this).hidePreviewMessage($previewMessage, $previewButton);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#link-button, #code-button, #italic-button, #strike-button, #strong-button').on('mousedown', function (event) {
    // for event onClick
    //var tag = $(this)[0].activeElement.attributes[1].nodeValue;
    // for event mousedown
    var tag = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target)[0].attributes[1].nodeValue;

    if (event.which === 1) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addTag(tag, $text);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#link-button, #code-button, #italic-button, #strike-button, #strong-button').on('mouseup', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).showPreviewMessage($previewMessage, $previewButton);
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-toggle="lightbox"]').on('click', function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).ekkoLightbox();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiJCIsImpRdWVyeSIsImZuIiwiYWRkVGFnIiwidGFnIiwidGV4dCIsInZhbHVlIiwic2VsZWN0ZWQiLCJ2YWwiLCJzdWJzdHIiLCJwcm9wIiwiYmVmb3JlIiwiYWZ0ZXIiLCJsZW5ndGgiLCJzaG93UHJldmlld01lc3NhZ2UiLCJwcmV2aWV3TWVzc2FnZSIsInByZXZpZXdCdXR0b24iLCJzaG93IiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJoaWRlUHJldmlld01lc3NhZ2UiLCJoaWRlIiwiZG9jdW1lbnQiLCJyZWFkeSIsIiR0ZXh0TWVzc2FnZSIsIiR0ZXh0IiwiJHByZXZpZXdNZXNzYWdlIiwiJHByZXZpZXdCdXR0b24iLCJvbiIsInJlcGxhY2UiLCJodG1sIiwiY3NzIiwiZXZlbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwibm9kZVZhbHVlIiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsImVra29MaWdodGJveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBQSxNQUFNLENBQUNDLENBQVAsR0FBV0QsTUFBTSxDQUFDRSxNQUFQLEdBQWdCRCw2Q0FBM0I7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsNkNBQUMsQ0FBQyxZQUFXO0FBQ1RBLCtDQUFDLENBQUNFLEVBQUYsQ0FBS0MsTUFBTCxHQUFjLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUMvQixRQUFJQyxLQUFKO0FBQ0EsUUFBSUMsUUFBUSxHQUFHRixJQUFJLENBQUNHLEdBQUwsR0FBV0MsTUFBWCxDQUFrQkosSUFBSSxDQUFDSyxJQUFMLENBQVUsZ0JBQVYsQ0FBbEIsRUFBK0NMLElBQUksQ0FBQ0ss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QkFBRCxDQUFELENBQThCNEIsRUFBOUIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBU0ksS0FBVCxFQUFnQjtBQUN0REEsU0FBSyxDQUFDSyxjQUFOO0FBQ0FyQyxpREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0MsWUFBUjtBQUNILEdBSEQ7QUFJSCxDQXpERCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XHJcbmltcG9ydCAnYm9vdHN0cmFwJztcclxuaW1wb3J0ICdwb3BwZXIuanMnO1xyXG5pbXBvcnQgJ2Vra28tbGlnaHRib3gnO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgICQuZm4uYWRkVGFnID0gZnVuY3Rpb24gKHRhZywgdGV4dCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA7XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gdGV4dC52YWwoKS5zdWJzdHIodGV4dC5wcm9wKCdzZWxlY3Rpb25TdGFydCcpLCB0ZXh0LnByb3AoJ3NlbGVjdGlvbkVuZCcpKTtcclxuICAgICAgICB2YXIgYmVmb3JlID0gdGV4dC52YWwoKS5zdWJzdHIoMCwgdGV4dC5wcm9wKCdzZWxlY3Rpb25TdGFydCcpKTtcclxuICAgICAgICB2YXIgYWZ0ZXIgPSB0ZXh0LnZhbCgpLnN1YnN0cih0ZXh0LnByb3AoJ3NlbGVjdGlvbkVuZCcpLCB0ZXh0Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHRhZyA9ICh0YWcgPT09ICdsaW5rJykgPyAnYScgOiB0YWc7XHJcbiAgICAgICAgdmFsdWUgPSBiZWZvcmUgKyAnWycgKyB0YWc7XHJcbiAgICAgICAgdmFsdWUgKz0gKHRhZyA9PT0gJ2EnKSA/ICcgaHJlZiA9IFxcXCJcXFwiIHRpdGxlID0gXFxcIlxcXCJdJyA6ICddJztcclxuICAgICAgICB2YWx1ZSArPSBzZWxlY3RlZCArICdbLycrdGFnKyddJyArIGFmdGVyO1xyXG4gICAgICAgIHRleHQudmFsKHZhbHVlKTtcclxuICAgIH07XHJcbiAgICAkLmZuLnNob3dQcmV2aWV3TWVzc2FnZSA9IGZ1bmN0aW9uKHByZXZpZXdNZXNzYWdlLCBwcmV2aWV3QnV0dG9uKSB7XHJcbiAgICAgICAgcHJldmlld01lc3NhZ2Uuc2hvdygpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHByZXZpZXdCdXR0b24udmFsKCcgICDRgdC60YDRi9GC0YwgICAnKTtcclxuICAgIH07XHJcbiAgICAkLmZuLmhpZGVQcmV2aWV3TWVzc2FnZSA9IGZ1bmN0aW9uKHByZXZpZXdNZXNzYWdlLCBwcmV2aWV3QnV0dG9uKSB7XHJcbiAgICAgICAgcHJldmlld01lc3NhZ2UuaGlkZSgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHByZXZpZXdCdXR0b24udmFsKCfQvtGC0L7QsdGA0LDQt9C40YLRjCcpO1xyXG4gICAgfTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICBsZXQgJHRleHRNZXNzYWdlO1xyXG4gICAgY29uc3QgJHRleHQgPSAkKCcjdGV4dCcpO1xyXG4gICAgY29uc3QgJHByZXZpZXdNZXNzYWdlID0gJCgnI3ByZXZpZXctbWVzc2FnZScpO1xyXG4gICAgY29uc3QgJHByZXZpZXdCdXR0b24gPSAkKCcjcHJldmlldy1idXR0b24nKTtcclxuXHJcbiAgICAkdGV4dC5vbignZm9jdXNpbicsICgpID0+IHtcclxuICAgICAgICAkKHRoaXMpLnNob3dQcmV2aWV3TWVzc2FnZSgkcHJldmlld01lc3NhZ2UsICRwcmV2aWV3QnV0dG9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgICR0ZXh0Lm9uKCdmb2N1c291dCcsICgpID0+IHtcclxuICAgICAgICAkKHRoaXMpLmhpZGVQcmV2aWV3TWVzc2FnZSgkcHJldmlld01lc3NhZ2UsICRwcmV2aWV3QnV0dG9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgICR0ZXh0Lm9uKCdjaGFuZ2Uga2V5dXAgcGFzdGUnLCAoKSA9PiB7XHJcbiAgICAgICAgJHRleHRNZXNzYWdlID0gJHRleHQudmFsKClcclxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFxbaXRhbGljXFxdKC4qPylcXFtcXC9pdGFsaWNcXF0vZywgJzxpPiQxPC9pPicpXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcW2NvZGVcXF0oLio/KVxcW1xcL2NvZGVcXF0vZywgJzxjb2RlPiQxPC9jb2RlPicpXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcW3N0cmlrZVxcXSguKj8pXFxbXFwvc3RyaWtlXFxdL2csICc8c3RyaWtlPiQxPC9zdHJpa2U+JylcclxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFxbc3Ryb25nXFxdKC4qPylcXFtcXC9zdHJvbmdcXF0vZywgJzxzdHJvbmc+JDE8L3N0cm9uZz4nKVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFthXFxzKihcXHcrXFxzKj1cXHMqKD86XCIuKj9cInwnLio/JykpXFxzKlxcXSguKj8pXFxbXFxzKlxcL2FcXHMqXFxdL2csICc8YSAkMT4kMjwvYT4nKTtcclxuICAgICAgICAkcHJldmlld01lc3NhZ2UuaHRtbCgkdGV4dE1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHByZXZpZXdCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAkdGV4dE1lc3NhZ2UgPSAkdGV4dC52YWwoKS5yZXBsYWNlKC9cXFtpdGFsaWNcXF0oLis/KVxcW1xcL2l0YWxpY1xcXS9nLCAnPGk+JDE8L2k+JylcclxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFxbY29kZVxcXSguKj8pXFxbXFwvY29kZVxcXS9nLCAnPGNvZGU+JDE8L2NvZGU+JylcclxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFxbc3RyaWtlXFxdKC4qPylcXFtcXC9zdHJpa2VcXF0vZywgJzxzdHJpa2U+JDE8L3N0cmlrZT4nKVxyXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFtzdHJvbmdcXF0oLio/KVxcW1xcL3N0cm9uZ1xcXS9nLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpXHJcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcW2FcXHMqKFxcdytcXHMqPVxccyooPzpcIi4qP1wifCcuKj8nKSlcXHMqXFxdKC4qPylcXFtcXHMqXFwvYVxccypcXF0vZywgJzxhICQxPiQyPC9hPicpO1xyXG4gICAgICAgICRwcmV2aWV3TWVzc2FnZS5odG1sKCR0ZXh0TWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKCRwcmV2aWV3TWVzc2FnZS5jc3MoJ29wYWNpdHknKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5zaG93UHJldmlld01lc3NhZ2UoJHByZXZpZXdNZXNzYWdlLCAkcHJldmlld0J1dHRvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmhpZGVQcmV2aWV3TWVzc2FnZSgkcHJldmlld01lc3NhZ2UsICRwcmV2aWV3QnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjbGluay1idXR0b24sICNjb2RlLWJ1dHRvbiwgI2l0YWxpYy1idXR0b24sICNzdHJpa2UtYnV0dG9uLCAjc3Ryb25nLWJ1dHRvbicpLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgLy8gZm9yIGV2ZW50IG9uQ2xpY2tcclxuICAgICAgLy92YXIgdGFnID0gJCh0aGlzKVswXS5hY3RpdmVFbGVtZW50LmF0dHJpYnV0ZXNbMV0ubm9kZVZhbHVlO1xyXG4gICAgICAvLyBmb3IgZXZlbnQgbW91c2Vkb3duXHJcbiAgICAgICAgdmFyIHRhZyA9ICQoZXZlbnQudGFyZ2V0KVswXS5hdHRyaWJ1dGVzWzFdLm5vZGVWYWx1ZTtcclxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDEpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZFRhZyh0YWcsICR0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjbGluay1idXR0b24sICNjb2RlLWJ1dHRvbiwgI2l0YWxpYy1idXR0b24sICNzdHJpa2UtYnV0dG9uLCAjc3Ryb25nLWJ1dHRvbicpLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgJCh0aGlzKS5zaG93UHJldmlld01lc3NhZ2UoJHByZXZpZXdNZXNzYWdlLCAkcHJldmlld0J1dHRvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJsaWdodGJveFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmVra29MaWdodGJveCgpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9