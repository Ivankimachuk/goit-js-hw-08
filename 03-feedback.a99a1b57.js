!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=l||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return m.Date.now()};function g(e,t,n){var r,i,a,u,f,c,l=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function S(e){return l=e,f=setTimeout(h,t),d?g(e):u}function x(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-l>=a}function h(){var e=b();if(x(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return m?p(n,a-(e-l)):n}(e))}function w(e){return f=void 0,s&&r?g(e):(r=i=void 0,u)}function I(){var e=b(),n=x(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(m)return f=setTimeout(h,t),g(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),I.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},I.flush=function(){return void 0===f?u:w(b())},I}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var S="feedback-form-state",x="feedback-form-state-email",h={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('.feedback-form input[name="email"]'),textarea:document.querySelector('.feedback-form textarea[name="message"]')};h.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(S)})),h.emailInput.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem(x,t)}),500)),h.textarea.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem(S,t)}),500)),function(){var e=localStorage.getItem(x),t=localStorage.getItem(S);e&&(h.emailInput.value=e);t&&(h.textarea.value=t)}()}();
//# sourceMappingURL=03-feedback.a99a1b57.js.map
