(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <div class=\"text-center mt-3\">\r\n    <ng-flash-message></ng-flash-message>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n  <hr>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Ng-Flash-Messages */ "./node_modules/Ng-Flash-Messages/ng-flash-messages.umd.js");
/* harmony import */ var Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-post/add-post.component */ "./src/app/components/add-post/add-post.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _components_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/edit-post/edit-post.component */ "./src/app/components/edit-post/edit-post.component.ts");


















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'posts', component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_10__["PostsComponent"] },
    { path: 'post/:id', component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"] },
    { path: 'edit/:id', component: _components_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_17__["EditPostComponent"] },
    { path: 'create', component: _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_11__["AddPostComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_10__["PostsComponent"],
                _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_11__["AddPostComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"],
                _components_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_17__["EditPostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_6__["NgFlashMessagesModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _services_validate_service__WEBPACK_IMPORTED_MODULE_16__["ValidateService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-4\">\n  <h2 class=\"post-title\">{{ title }}</h2>\n  <hr>\n  <div class=\"my-3\">\n    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, qui deserunt? Iure perspiciatis explicabo eligendi quos voluptatibus dolor tempore cumque amet, officia possimus molestiae autem reiciendis neque cum excepturi vero error dolorum voluptas vitae aliquid distinctio quidem! Blanditiis officiis tempora adipisci neque, excepturi nulla tempore, autem cumque voluptate obcaecati voluptas!</p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat quos velit dolor magni. Voluptates maxime officia at saepe quisquam voluptatibus? Quaerat natus cupiditate numquam itaque consectetur animi eaque illo.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.title = "About";
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/add-post/add-post.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXBvc3QvYWRkLXBvc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-post/add-post.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-4\">\n  <h2 class=\"post-title\">{{ title }}</h2>\n  <hr>\n  <div class=\"my-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form (submit)=\"onHandleSubmit(xLevel.value)\">\n          <div class=\"\">\n            <div class=\"row\">\n              <div class=\"col col-sm-12 col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"fname\">First Name</label>\n                  <input id=\"fname\" name=\"first_name\" type=\"text\"class=\"form-control\" placeholder=\"Enter First Name...\"\n                  [(ngModel)]=\"first_name\">\n                </div>\n              </div>\n              <div class=\"col col-sm-12 col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"lname\">Last Name</label>\n                  <input id=\"lname\" name=\"last_name\"type=\"text\"class=\"form-control\" placeholder=\"Enter Last Name...\"\n                  [(ngModel)]=\"last_name\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col col-sm-12\">\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input id=\"email\" name=\"email\"type=\"text\"class=\"form-control\" placeholder=\"Enter Email...\"\n                  [(ngModel)]=\"email\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col col-sm-12\">\n                <div class=\"form-group\">\n                  <label for=\"username\">Username</label>\n                  <input id=\"username\" name=\"username\" type=\"text\"class=\"form-control\" placeholder=\"Enter Username...\"\n                  [(ngModel)]=\"username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col col-sm-12 col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"country\">Country</label>\n                  <input id=\"country\" name=\"country\"type=\"text\"class=\"form-control\" placeholder=\"Enter Country...\"\n                  [(ngModel)]=\"country\">\n                </div>\n              </div>\n              <div class=\"col col-sm-12 col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"xlevel\">Experience Level</label>\n                  <select #xLevel class=\"form-control\" name=\"experience_level\" id=\"xlevel\" >\n                    <option value=\"low\">Low</option>\n                    <option value=\"medium\">Medium</option>\n                    <option value=\"high\">High</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-add btn-success\">ADD POST</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-post/add-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.ts ***!
  \***********************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Ng-Flash-Messages */ "./node_modules/Ng-Flash-Messages/ng-flash-messages.umd.js");
/* harmony import */ var Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");






var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(authService, validateService, router, ngFlashMessage) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.ngFlashMessage = ngFlashMessage;
    }
    AddPostComponent.prototype.ngOnInit = function () {
        this.title = "Add Post";
    };
    AddPostComponent.prototype.onHandleSubmit = function (value) {
        var _this = this;
        var post = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            username: this.username,
            country: this.country,
            experience_level: value
        };
        if (!this.validateService.validatePost(post)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ['Invalid fields found...!'],
                dismissible: true,
                timeout: 5000,
                type: 'danger'
            });
            this.router.navigate(['/create']);
            return false;
        }
        if (!this.validateService.validateEmail(post.email)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ['Invalid email id found...!'],
                dismissible: true,
                timeout: 5000,
                type: 'danger'
            });
            this.router.navigate(['/create']);
            return false;
        }
        if (!this.validateService.validateUsername(post.username)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ['Invalid username found...!'],
                dismissible: true,
                timeout: 5000,
                type: 'danger'
            });
            this.router.navigate(['/create']);
            return false;
        }
        if (!this.validateService.validateName(post.first_name)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ['Invalid first name...!'],
                dismissible: true,
                timeout: 5000,
                type: 'danger'
            });
            this.router.navigate(['/create']);
            return false;
        }
        if (!this.validateService.validateName(post.last_name)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ['Invalid last name...!'],
                dismissible: true,
                timeout: 5000,
                type: 'danger'
            });
            this.router.navigate(['/create']);
            return false;
        }
        //If there is no any errors then add post
        this.authService.addPost(post).subscribe(function (data) {
            if (data.success) {
                _this.ngFlashMessage.showFlashMessage({
                    messages: ['Your post added successfully...!'],
                    dismissible: true,
                    timeout: 5000,
                    type: 'success'
                });
                _this.router.navigate(['/posts']);
            }
            else {
                _this.ngFlashMessage.showFlashMessage({
                    messages: ['Something went wrong....'],
                    dismissible: true,
                    timeout: 5000,
                    type: 'danger'
                });
                _this.router.navigate(['/create']);
            }
        });
    };
    AddPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-post',
            template: __webpack_require__(/*! ./add-post.component.html */ "./src/app/components/add-post/add-post.component.html"),
            styles: [__webpack_require__(/*! ./add-post.component.css */ "./src/app/components/add-post/add-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], AddPostComponent);
    return AddPostComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-post/edit-post.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/edit-post/edit-post.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-save {\r\n  background: #93C54B;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXBvc3QvZWRpdC1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtcG9zdC9lZGl0LXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tc2F2ZSB7XHJcbiAgYmFja2dyb3VuZDogIzkzQzU0QjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/edit-post/edit-post.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-post/edit-post.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-4\">\n  <h2 class=\"post-title\">{{ title }}</h2>\n  <hr>\n  <div class=\"my-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form (submit)=\"onHandleSubmit(xLevel.value)\">\n          <div class=\"\">\n            <div class=\"row\">\n              <div class=\"col col-sm-12 col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"fname\">First Name</label>\n                  <input id=\"fname\" name=\"post.first_name\"      type=\"text\" class=\"form-control\" placeholder=\"Enter First Name...\" [(ngModel)]=\"post.first_name\">\n                </div>\n              </div>\n              <div class=\"col col-sm-12 col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"lname\">Last Name</label>\n                  <input id=\"lname\" name=\"post.last_name\" type=\"text\" class=\"form-control\" placeholder=\"Enter Last Name...\" [(ngModel)]=\"post.last_name\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col col-sm-12\">\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input id=\"email\" name=\"post.email\" type=\"text\" class=\"form-control\" placeholder=\"Enter Email...\" [(ngModel)]=\"post.email\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col col-sm-12\">\n                <div class=\"form-group\">\n                  <label for=\"username\">Username</label>\n                  <input id=\"username\" name=\"post.username\" type=\"text\" class=\"form-control\" placeholder=\"Enter Username...\"\n                  [(ngModel)]=\"post.username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col col-sm-12 col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"country\">Country</label>\n                  <input id=\"country\" name=\"post.country\" type=\"text\" class=\"form-control\" placeholder=\"Enter Country...\"\n                  [(ngModel)]=\"post.country\">\n                </div>\n              </div>\n              <div class=\"col col-sm-12 col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"xlevel\">Experience Level</label>\n                  <select #xLevel class=\"form-control\" name=\"experience_level\" id=\"xlevel\" >\n                    <option value=\"low\">Low</option>\n                    <option value=\"medium\">Medium</option>\n                    <option value=\"high\">High</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-save text-light mr-1\">SAVE CHANGES</button>\n          <button (click)=\"onHandleDiscard()\" type=\"button\" class=\"btn btn-discard btn-dark\">DISCARD</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/edit-post/edit-post.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-post/edit-post.component.ts ***!
  \*************************************************************/
/*! exports provided: EditPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostComponent", function() { return EditPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Ng-Flash-Messages */ "./node_modules/Ng-Flash-Messages/ng-flash-messages.umd.js");
/* harmony import */ var Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");






var EditPostComponent = /** @class */ (function () {
    function EditPostComponent(authService, validateService, router, ngFlashMessage) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.ngFlashMessage = ngFlashMessage;
    }
    EditPostComponent.prototype.ngOnInit = function () {
        this.title = "Edit Post";
        var id = this.router.url.split('/')[2];
        this.id = id;
        this.fetchPost();
    };
    EditPostComponent.prototype.fetchPost = function () {
        var _this = this;
        this.authService.viewPost(this.id).subscribe(function (post) {
            _this.post = post;
        });
    };
    EditPostComponent.prototype.onHandleDiscard = function () {
        this.router.navigate(["/post/" + this.id]);
    };
    EditPostComponent.prototype.onHandleSubmit = function (value) {
        var _this = this;
        var post = {
            first_name: this.post.first_name,
            last_name: this.post.last_name,
            email: this.post.email,
            username: this.post.username,
            country: this.post.country,
            experience_level: value
        };
        if (!this.validateService.validatePost(this.post)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ['Invalid fields found...!'],
                dismissible: true,
                timeout: 5000,
                type: 'danger'
            });
            this.router.navigate(["/edit/" + this.id]);
            return false;
        }
        if (!this.validateService.validateEmail(this.post.email)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ['Invalid email id found...!'],
                dismissible: true,
                timeout: 5000,
                type: 'danger'
            });
            this.router.navigate(["/edit/" + this.id]);
            return false;
        }
        if (!this.validateService.validateUsername(this.post.username)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ['Invalid username found...!'],
                dismissible: true,
                timeout: 5000,
                type: 'danger'
            });
            this.router.navigate(["/edit/" + this.id]);
            return false;
        }
        if (!this.validateService.validateName(this.post.first_name)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ['Invalid first name...!'],
                dismissible: true,
                timeout: 5000,
                type: 'danger'
            });
            this.router.navigate(["/edit/" + this.id]);
            return false;
        }
        if (!this.validateService.validateName(this.post.last_name)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ['Invalid last name...!'],
                dismissible: true,
                timeout: 5000,
                type: 'danger'
            });
            this.router.navigate(["/edit/" + this.id]);
            return false;
        }
        //If there is no any errors then patch post
        this.authService.patchPost(this.id, post).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.ngFlashMessage.showFlashMessage({
                    messages: ['Your post updated successfully...!'],
                    dismissible: true,
                    timeout: 5000,
                    type: 'success'
                });
                _this.router.navigate(['/posts']);
            }
            else {
                _this.ngFlashMessage.showFlashMessage({
                    messages: ['Something went wrong....'],
                    dismissible: true,
                    timeout: 5000,
                    type: 'danger'
                });
                _this.router.navigate(["/edit/" + _this.id]);
            }
        });
    };
    EditPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-post',
            template: __webpack_require__(/*! ./edit-post.component.html */ "./src/app/components/edit-post/edit-post.component.html"),
            styles: [__webpack_require__(/*! ./edit-post.component.css */ "./src/app/components/edit-post/edit-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], EditPostComponent);
    return EditPostComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-4\">\n  <footer class=\"footer p-3 text-center\">\n    <p class=\"text-muted\">Todo App <strong>&copy;</strong> By MA.Rooney in 2k18</p>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background: #d9534f;\r\n}\r\n\r\nh1 {\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZDk1MzRmO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4\">\r\n  <div class=\"jumbotron text-center text-light\">\r\n    <h1 class=\"display-4\">{{ title }}</h1>\r\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, exercitationem! Quas dicta dolore recusandae alias earum tempora qui doloremque optio quod quasi. Minima quas nesciunt dicta nemo aperiam porro sit.</p>\r\n    <button class=\"btn btn-light\">VISIT REPOSITORY</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title = "TODO COLLECTION";
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n  background: #d9534f;\r\n}\r\n/* #d9534f danger */\r\n.navbar-brand {\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRCxvQkFBb0I7QUFDcEI7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgYmFja2dyb3VuZDogI2Q5NTM0ZjtcclxufVxyXG4vKiAjZDk1MzRmIGRhbmdlciAqL1xyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark px-lg-5\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">{{ title }}</a>\r\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\"\r\n  aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/']\">HOME</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/create']\">ADD POST</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/posts']\">POSTS</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/about']\">ABOUT</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"http://www.github.com/rooneyrulz\">GITHUB</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.title = "TODO COLLECTION";
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/post/post.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-edit {\r\n  background: #325D88;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWVkaXQge1xyXG4gIGJhY2tncm91bmQ6ICMzMjVEODg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-4\">\n  <h2 class=\"post-title\">{{ title }}</h2>\n  <hr>\n  <div class=\"card my-4\">\n    <div class=\"card-body\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <strong>First Name</strong>\n          <span class=\"float-right\">{{ post.first_name }}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <strong>Last Name</strong>\n          <span class=\"float-right\">{{ post.last_name }}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <strong>Email</strong>\n          <span class=\"float-right\">{{ post.email }}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <strong>Username</strong>\n          <span class=\"float-right\">{{ post.username }}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <strong>Country</strong>\n          <span class=\"float-right\">{{ post.country }}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <strong>Experience Level</strong>\n          <span class=\"float-right\">{{ post.experience_level }}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <strong>Created Date</strong>\n          <span class=\"float-right\">{{ post.date }}</span>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-footer\">\n      <button (click)=\"onHandleEdit(post._id)\" class=\"btn btn-edit text-light mr-1\">EDIT</button>\n      <button (click)=\"onHandleBack()\" class=\"btn btn-back text-light btn-dark\">BACK</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Ng-Flash-Messages */ "./node_modules/Ng-Flash-Messages/ng-flash-messages.umd.js");
/* harmony import */ var Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");






var PostComponent = /** @class */ (function () {
    function PostComponent(authService, validateService, router, ngFlashMessage) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.ngFlashMessage = ngFlashMessage;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.title = "Post";
        var id = this.router.url.split('/')[2];
        this.id = id;
        this.fetchPost();
    };
    PostComponent.prototype.fetchPost = function () {
        var _this = this;
        this.authService.viewPost(this.id).subscribe(function (post) {
            _this.post = post;
        });
    };
    PostComponent.prototype.onHandleBack = function () {
        this.router.navigate(['/posts']);
    };
    PostComponent.prototype.onHandleEdit = function (id) {
        this.router.navigate(["/edit/" + id]);
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/posts.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/posts/posts.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-view {\r\n  background: #325D88;\r\n}\r\n\r\n.btn-delete {\r\n  background: #d9534f;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi12aWV3IHtcclxuICBiYWNrZ3JvdW5kOiAjMzI1RDg4O1xyXG59XHJcblxyXG4uYnRuLWRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZDogI2Q5NTM0ZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/posts/posts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4\">\n  <h2 class=\"post-title\">{{ title }}</h2>\n  <hr>\n  <ng-container *ngIf=\"posts; else noPosts\">\n    <div *ngFor=\"let post of posts\" class=\"card my-4\">\n      <div class=\"card-body\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">\n            <strong>Name</strong>\n            <span class=\"float-right\">{{ post.first_name}} {{ post.last_name }}</span>\n          </li>\n          <li class=\"list-group-item\">\n            <strong>Email</strong>\n            <span class=\"float-right\">{{ post.email }}</span>\n          </li>\n          <li class=\"list-group-item\">\n            <strong>Username</strong>\n            <span class=\"float-right\">{{ post.username }}</span>\n          </li>\n          <li class=\"list-group-item\">\n            <strong>Country</strong>\n            <span class=\"float-right\">{{ post.country }}</span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"card-footer\">\n        <button (click)=\"onHandleView(post._id)\" class=\"btn btn-view text-light mr-1\">VIEW</button>\n        <button (click)=\"onHandleDelete(post._id)\" class=\"btn btn-delete text-light\">DELETE</button>\n        <p class=\"text-muted font-italic float-right\">Post Created {{ post.date }}</p>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #noPosts>\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <h4 class=\"text-muted\">No Posts Added Yet...</h4>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Ng-Flash-Messages */ "./node_modules/Ng-Flash-Messages/ng-flash-messages.umd.js");
/* harmony import */ var Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");






var PostsComponent = /** @class */ (function () {
    function PostsComponent(authService, validateService, router, ngFlashMessage) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.ngFlashMessage = ngFlashMessage;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.title = "Posts";
        this.fetchPosts();
    };
    PostsComponent.prototype.fetchPosts = function () {
        var _this = this;
        this.authService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent.prototype.onHandleView = function (id) {
        this.router.navigate(["/post/" + id]);
        console.log(id);
    };
    PostsComponent.prototype.onHandleDelete = function (id) {
        var _this = this;
        var isConfirm = confirm("Are you sure you want to delete this post?");
        if (isConfirm) {
            this.authService.deletePost(id).subscribe(function (data) {
                if (data.success) {
                    _this.ngFlashMessage.showFlashMessage({
                        messages: ["Post deleted successfully, Let's create one...!"],
                        dismissible: true,
                        timeout: 5000,
                        type: 'success'
                    });
                    _this.router.navigate(['/create']);
                }
                else {
                    _this.ngFlashMessage.showFlashMessage({
                        messages: ["Something went wrong..."],
                        dismissible: true,
                        timeout: 5000,
                        type: 'danger'
                    });
                    _this.router.navigate(['/posts']);
                }
            });
        }
        else {
            this.router.navigate(['/posts']);
        }
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/components/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            Ng_Flash_Messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.uri = 'http://localhost:5000';
        console.log("auth service injected..!");
    }
    //Get all of the posts...................
    AuthService.prototype.getPosts = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.uri + "/api/posts", { headers: headers });
    };
    //Add some post.........................
    AuthService.prototype.addPost = function (post) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.uri + "/api/post/add", post, { headers: headers });
    };
    //View post............................
    AuthService.prototype.viewPost = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.uri + "/api/post/" + id, { headers: headers });
    };
    //Patch post................................
    AuthService.prototype.patchPost = function (id, post) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch(this.uri + "/api/post/patch/" + id, post, { headers: headers });
    };
    //Delete some post...........................
    AuthService.prototype.deletePost = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.uri + "/api/post/" + id, { headers: headers });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
        console.log("validate service injected...");
    }
    //Validate for empty fields................
    ValidateService.prototype.validatePost = function (post) {
        if (post.first_name == undefined || post.last_name == undefined || post.email == undefined || post.username == undefined || post.country == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    //Validate email id...............................
    ValidateService.prototype.validateEmail = function (email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    //Validate username.........................
    ValidateService.prototype.validateUsername = function (username) {
        var usernameRegex = /^[a-zA-Z0-9]+$/;
        return usernameRegex.test(String(username).toLowerCase());
    };
    //Validate name...............................
    ValidateService.prototype.validateName = function (name) {
        var nameregex = /^[a-zA-Z '.-]*$/;
        return nameregex.test(String(name));
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\Desktop\MEAN APPS\TODO-APP\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map