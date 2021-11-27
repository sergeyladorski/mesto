(()=>{"use strict";var e=document.querySelector(".profile__name"),t=document.querySelector(".profile__desc"),n=document.querySelector(".profile__avatar"),o=document.querySelector("#name"),r=document.querySelector("#about"),i=document.querySelector("#form-info"),a=document.querySelector("#form-card"),c=document.querySelector("#form-avatar"),s=document.querySelector(".profile__add-card"),u=document.querySelector(".profile__edit-info"),l=document.querySelector(".profile__change-avatar"),f=document.querySelector(".gallery__list"),h="#popup-card",p="#popup-avatar",_="#popup-confirm",d="#popup-info",y={inputSelector:".form__input",submitButtonSelector:".form__save",inactiveButtonClass:"form__save_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},v=function(e,t){var n=document.querySelector(t).querySelector(".form__save");e?(n.value="Сохранение...",n.setAttribute("disabled","disabled"),n.classList.add("form__save_inactive")):e||(n.value=n.title,n.removeAttribute("disabled"),n.classList.remove("form__save_inactive"))};function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const b=function(){function e(t,n,o,r,i,a){var c=a.setLike,s=a.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.name,this._link=t.link,this._id=t._id,this._data=t,this._user=o,this._template=n,this._handleCardClick=r,this._deleteCardClick=i,this._setLike=c,this._deleteLike=s}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".gallery__card").cloneNode(!0)}},{key:"_islikeActive",value:function(){var e=this,t=!1;return this._data.likes.forEach((function(n){n._id.includes(e._user)&&(t=!0)})),t}},{key:"_isDeleteBtnActive",value:function(){this._user===this._data.owner._id?this._deleteButton.classList.add("gallery__delete-photo_active"):this._deleteButton.classList.remove("gallery__delete-photo_active")}},{key:"_setLikeStateActive",value:function(){this._likeButton.classList.add("gallery__photo-like_active")}},{key:"_removeLikeStateActive",value:function(){this._likeButton.classList.remove("gallery__photo-like_active")}},{key:"getLikes",value:function(e){this._data.likes=e.likes,this._like.textContent=e.likes.length,this._showLikesNumber(),this._islikeActive()?this._setLikeStateActive(this._data._id):this._removeLikeStateActive(this._data._id)}},{key:"_showLikesNumber",value:function(){var e=this._element.querySelector(".gallery__like-counter");this._data.likes.length>=1?(this._like.textContent=this._data.likes.length,e.classList.add("gallery__like-counter_active")):0===this._data.likes.length&&(this._like.textContent="",e.classList.remove("gallery__like-counter_active"))}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._islikeActive()?(e._deleteLike(e._data._id),e._removeLikeStateActive(e._data._id)):(e._setLike(e._data._id),e._setLikeStateActive(e._data._id))})),this._isDeleteBtnActive(),this._deleteButton.addEventListener("click",(function(){e._deleteCardClick(e._id,e._element)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick({link:e._link,name:e._title})}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._deleteButton=this._element.querySelector(".gallery__delete-photo"),this._cardCaption=this._element.querySelector(".gallery__photo-title"),this._cardImage=this._element.querySelector(".gallery__photo"),this._likeButton=this._element.querySelector(".gallery__photo-like"),this._like=this._element.querySelector(".gallery__like-counter"),this._cardCaption.textContent=this._title,this._cardImage.src=this._link,this._cardImage.alt=this._title,this._setEventListeners(),this._showLikesNumber(),this._element}}])&&m(t.prototype,n),e}();function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const g=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputsList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));t.textContent=e.validationMessage,t.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_toggleButtonState",value:function(){this._inputsList.some((function(e){return!e.validity.valid}))?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled","disabled")):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputsList.forEach((function(t){e._hideError(t)}))}},{key:"_setEventListers",value:function(){var e=this;this._inputsList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))})),this._formElement.addEventListener("submit",(function(e){e.preventDefault()}))}},{key:"enableValidation",value:function(){this._setEventListers()}}])&&k(t.prototype,n),e}();function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const E=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e,t){!0===t?this._container.prepend(e):this._container.append(e)}}])&&w(t.prototype,n),e}();function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this._closeByEsc=this._closeByEsc.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closeByEsc)}},{key:"close",value:function(){this.popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeByEsc)}},{key:"_closeByEsc",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&L(t.prototype,n),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=B(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},j.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function R(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}const q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(o);if(r){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).popupImage=t.popup.querySelector(".popup__view"),t.popupImageTitle=t.popup.querySelector(".popup__view-title"),t}return t=a,(n=[{key:"open",value:function(e){this.popupImage.src=e.link,this.popupImageTitle.textContent=e.name,this.popupImage.alt=e.name,j(A(a.prototype),"open",this).call(this)}}])&&O(t.prototype,n),a}(S);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=U(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},x.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function N(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}const z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(o);if(r){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitForm=t,n._form=n.popup.querySelector(".form"),n._inputsList=n._form.querySelectorAll(".form__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return Array.from(this._inputsList).forEach((function(t){e[t.id]=t.value})),e}},{key:"close",value:function(){x(V(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;x(V(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}}])&&T(t.prototype,n),a}(S);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=M(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},H.apply(this,arguments)}function M(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}function G(e,t){return G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},G(e,t)}function K(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}const W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(o);if(r){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return K(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e)).handleConfirm=t,n._form=n.popup.querySelector(".form"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e.handleConfirm(e.cardId,e.newCard)})),H(Q(a.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(e,t){this.cardId=e,this.newCard=t,H(Q(a.prototype),"open",this).call(this)}}])&&F(t.prototype,n),a}(S);function X(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Y=function(){function e(t){var n=t.userName,o=t.userDesc,r=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.userName=n,this.userAbout=o,this.userAvatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.userName.textContent,about:this.userAbout.textContent,avatar:this.userAvatar.src}}},{key:"setUserAvatar",value:function(e){e?this.userAvatar.src=e:console.log("Не удалось загрузить аватар")}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,o=e.id;this.userName.textContent=t,this.userAbout.textContent=n,this._id=o}},{key:"getUserId",value:function(){return this._id}}])&&X(t.prototype,n),e}();const Z=Y;function $(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var ee=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.source=t.source,this.cohort=t.cohort,this.token=t.token}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.source,"/").concat(this.cohort,"/users/me"),{headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(t){return e._checkResponse(t)}))}},{key:"patchUserInfo",value:function(e){var t=this,n=e.name,o=e.about;return fetch("".concat(this.source,"/").concat(this.cohort,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:n,about:o})}).then((function(e){return t._checkResponse(e)}))}},{key:"patchUserAvatar",value:function(e){var t=this;return fetch("".concat(this.source,"/").concat(this.cohort,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResponse(e)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this.source,"/").concat(this.cohort,"/cards"),{headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(t){return e._checkResponse(t)}))}},{key:"postCard",value:function(e){var t=this,n=e.name,o=e.link;return fetch("".concat(this.source,"/").concat(this.cohort,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:n,link:o})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.source,"/").concat(this.cohort,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.token}}).then((function(e){return t._checkResponse(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this.source,"/").concat(this.cohort,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this.token}}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this.source,"/").concat(this.cohort,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this.token}}).then((function(e){return t._checkResponse(e)}))}}])&&$(t.prototype,n),e}())({source:"https://mesto.nomoreparties.co/v1",cohort:"cohort-30",token:"115fa395-010f-4ccc-93c6-6dc65854738f"});Promise.all([ee.getUserInfo(),ee.getCards()]).then((function(e){var t=e[0];te.setUserInfo({name:t.name,about:t.about,id:t._id}),te.setUserAvatar(t.avatar),se.renderItems(e[1])})).catch((function(e){console.log(e)}));var te=new Z({userName:e,userDesc:t,userAvatar:n}),ne=new z(d,(function(e){v(!0,d),ee.patchUserInfo({name:e.name,about:e.about}).then((function(){te.setUserInfo(e),ne.close()})).catch((function(e){console.log(e)})).finally((function(){v(!1,d)}))}));ne.setEventListeners();var oe=new z(p,(function(e){v(!0,p),ee.patchUserAvatar(e.avatar).then((function(){te.setUserAvatar(e.avatar),oe.close()})).catch((function(e){console.log(e)})).finally((function(){v(!1,p)}))}));oe.setEventListeners();var re=new z(h,(function(e){v(!0,h),ee.postCard({name:e.place,link:e.source}).then((function(e){var t=ce({name:e.name,link:e.link,likes:e.likes,_id:e._id,owner:e.owner}).generateCard();se.addItem(t,!0),re.close()})).catch((function(e){console.log(e)})).finally((function(){v(!1,h)}))}));re.setEventListeners();var ie=new W(_,(function(e,t){v(!0,_),ee.deleteCard(e).then((function(){t.remove(),ie.close()})).catch((function(e){console.log(e)})).finally((function(){v(!1,_)}))}));ie.setEventListeners();var ae=new q("#view");ae.setEventListeners();var ce=function(e){var t=new b(e,"#card-template",te.getUserId(),(function(e){ae.open(e)}),(function(e,t){ie.open(e,t)}),{setLike:function(e){ee.setLike(e).then((function(e){t.getLikes(e)})).catch((function(e){console.log(e)}))},deleteLike:function(e){ee.deleteLike(e).then((function(e){t.getLikes(e)})).catch((function(e){console.log(e)}))}});return t},se=new E({renderer:function(e){var t=ce(e),n=t.generateCard();se.addItem(n,!1),t.getLikes(e)}},f);u.addEventListener("click",(function(){ne.open(),ue.resetValidation();var e=te.getUserInfo();o.value=e.name,r.value=e.about})),l.addEventListener("click",(function(){oe.open(),fe.resetValidation()})),s.addEventListener("click",(function(){re.open(),le.resetValidation()}));var ue=new g(y,i);ue.enableValidation();var le=new g(y,a);le.enableValidation();var fe=new g(y,c);fe.enableValidation()})();