(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-ui/admin-ui.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-ui/admin-ui.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>admin-ui works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees/employee-form/employee-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees/employee-form/employee-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n  <input type=\"hidden\" name=\"EmployeeID\" #EmployeeID=\"ngModel\" [(ngModel)]=\"service.formData.EmployeeID\">\r\n  <div class=\"form-group\">\r\n    <label>First Name</label>\r\n    <input\r\n      name=\"FirstName\"\r\n      #FirstName=\"ngModel\"\r\n      [(ngModel)]=\"service.formData.FirstName\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      required\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Last Name</label>\r\n    <input\r\n      name=\"LastName\"\r\n      #LastName=\"ngModel\"\r\n      [(ngModel)]=\"service.formData.LastName\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      required\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Position</label>\r\n    <input\r\n      name=\"Position\"\r\n      #Position=\"ngModel\"\r\n      [(ngModel)]=\"service.formData.Position\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      required\r\n    />\r\n  </div>\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-6\">\r\n      <label>Hourly Rate</label>\r\n      <input\r\n        name=\"HourlyRate\"\r\n        #HourlyRate=\"ngModel\"\r\n        [(ngModel)]=\"service.formData.HourlyRate\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        required\r\n      />\r\n    </div>\r\n    <div class=\"form-group col-md-6\">\r\n      <label>Hours Worked</label>\r\n      <input\r\n        name=\"HoursWorked\"\r\n        #HoursWorked=\"ngModel\"\r\n        [(ngModel)]=\"service.formData.HoursWorked\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        required\r\n      />\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-lg btn-block\">Submit</button>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees/employee-list/employee-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees/employee-list/employee-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<table class=\"table table-striped table-hover\">\r\n    <thead class=\"thead-dark\"> \r\n        <tr>\r\n          <th scope=\"col\">ID</th>\r\n          <th scope=\"col\">First</th>\r\n          <th scope=\"col\">Last</th>\r\n          <th scope=\"col\">Position</th>\r\n          <th scope=\"col\">Hours</th>\r\n          <th scope=\"col\">Rate</th>\r\n          <th scope=\"col\">Total</th>\r\n          <th scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let employee of service.employeeList\">\r\n            <td (click)=\"populateForm(employee)\">{{employee.EmployeeID}}</td>\r\n            <td (click)=\"populateForm(employee)\">{{employee.FirstName}}</td>\r\n            <td (click)=\"populateForm(employee)\">{{employee.LastName}}</td>\r\n            <td (click)=\"populateForm(employee)\">{{employee.Position}}</td>\r\n            <td (click)=\"populateForm(employee)\">{{employee.HoursWorked | number : '1.2-2'}}</td>\r\n            <td (click)=\"populateForm(employee)\">{{employee.HourlyRate | number : '1.2-2'}}</td>\r\n            <td (click)=\"populateForm(employee)\">{{employee.TotalPay | number : '1.2-2'}}</td>\r\n            <td (click)=\"deleteEmp(employee.EmployeeID)\"><button class=\"btn btn-sm btn-outline-danger\">X</button></td>\r\n        </tr>\r\n    </tbody>\r\n    \r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees/employees.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees/employees.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\r\n    <h1 class=\"display-4 text-center\">Employee Management</h1>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <app-employee-form></app-employee-form>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n            <app-employee-list></app-employee-list>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"nav-link disabled brand\" href=\"#\">Ice Cream Parlor</a>\r\n  \r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"\" [ngClass]=\"setSales()\">Sales</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"admin\" [ngClass]=\"setAdmin()\">Admin</a>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n  </nav>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/items-display/items-display.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/items-display/items-display.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"display-container\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"td-display\" scope=\"col\">Description</th>\r\n        <th class=\"td-display\" scope=\"col\">Quantity</th>\r\n        <th class=\"td-display\" scope=\"col\">Unit Price</th>\r\n        <th class=\"td-display\" scope=\"col\">Total</th>\r\n        <th scope=\"col\"></th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody\r\n      style=\"overflow-y: scroll; height: xyz;\"\r\n      #scrollMe\r\n      [scrollTop]=\"scrollMe.scrollHeight\"\r\n    >\r\n      <tr *ngFor=\"let item of service.itemList\">\r\n        <td class=\"td-display\">{{ item.Name }}</td>\r\n        <td class=\"td-display\">\r\n          <div class=\"row qty-wrapper\">\r\n            <div class=\"col-md-2 qty-div qty-space-adj\">\r\n              <button\r\n                class=\"btn btn-outline-secondary qty-btn\"\r\n                (click)=\"decreaseQty(item.Name)\"\r\n                onclick=\"this.blur();\"\r\n              >\r\n                -\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-2 qty-num\">\r\n              {{ item.Quantity }}\r\n            </div>\r\n            <div class=\"col-md-2 qty-div\">\r\n              <button\r\n                class=\"btn btn-outline-secondary qty-btn\"\r\n                (click)=\"increaseQty(item.Name)\"\r\n                onclick=\"this.blur();\"\r\n              >\r\n                +\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </td>\r\n        <td class=\"td-display\">{{ item.UnitPrice }}</td>\r\n        <td class=\"td-display\">{{ item.SubtotalString }}</td>\r\n        <td (click)=\"removeItem(item.ItemID)\" class=\"delete-td\">\r\n          <button class=\"btn btn-outline-danger rmv-btn\" onclick=\"this.blur();\">\r\n            Remove</button\r\n          >&nbsp;\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/menu-btns/menu-btns.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/menu-btns/menu-btns.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"display-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5 cones\">\r\n      <button\r\n        class=\"btn btn-primary col-md-9\"\r\n        type=\"button\"\r\n        (click)=\"addItem('Chocolate Cone')\"\r\n        onclick=\"this.blur();\"\r\n      >\r\n        Chocolate Cone\r\n      </button>\r\n      <button\r\n        class=\"btn btn-primary col-md-9\"\r\n        type=\"button\"\r\n        (click)=\"addItem('Vanilla Cone')\"\r\n        onclick=\"this.blur();\"\r\n      >\r\n        Vanilla Cone\r\n      </button>\r\n      <button\r\n        class=\"btn btn-primary col-md-9\"\r\n        type=\"button\"\r\n        (click)=\"addItem('Strawberry Cone')\"\r\n        onclick=\"this.blur();\"\r\n      >\r\n        Strawberry Cone\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"col-md-5 scoops\">\r\n      <button\r\n        class=\"btn btn-primary col-md-9\"\r\n        type=\"button\"\r\n        (click)=\"addItem('Chocolate Bowl')\"\r\n        onclick=\"this.blur();\"\r\n      >\r\n        Chocolate Bowl\r\n      </button>\r\n      <button\r\n        class=\"btn btn-primary col-md-9\"\r\n        type=\"button\"\r\n        (click)=\"addItem('Vanilla Bowl')\"\r\n        onclick=\"this.blur();\"\r\n      >\r\n        Vanilla Bowl\r\n      </button>\r\n      <button\r\n        class=\"btn btn-primary col-md-9\"\r\n        type=\"button\"\r\n        (click)=\"addItem('Strawberry Bowl')\"\r\n        onclick=\"this.blur();\"\r\n      >\r\n        Strawberry Bowl\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"col-md-2 drinks\">\r\n      <button\r\n        class=\"btn btn-primary col-md-9\"\r\n        type=\"button\"\r\n        (click)=\"addItem('Sm Soft Drink')\"\r\n        onclick=\"this.blur();\"\r\n      >\r\n        Sm Soft Drink\r\n      </button>\r\n      <button\r\n        class=\"btn btn-primary col-md-9\"\r\n        type=\"button\"\r\n        (click)=\"addItem('Md Soft Drink')\"\r\n        onclick=\"this.blur();\"\r\n      >\r\n        Md Soft Drink\r\n      </button>\r\n      <button\r\n        class=\"btn btn-primary col-md-9\"\r\n        type=\"button\"\r\n        (click)=\"addItem('Lg Soft Drink')\"\r\n        onclick=\"this.blur();\"\r\n      >\r\n        Lg Soft Drink\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/register/register.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/register/register.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"display-container\">\r\n  \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/sales-ui.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/sales-ui.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-items-display></app-items-display>\r\n<app-register></app-register>\r\n<app-menu-btns></app-menu-btns>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_sales_ui_sales_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sales-ui/sales-ui.component */ "./src/app/components/sales-ui/sales-ui.component.ts");
/* harmony import */ var _components_admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin-ui/admin-ui.component */ "./src/app/components/admin-ui/admin-ui.component.ts");





const routes = [
    { path: "", component: _components_sales_ui_sales_ui_component__WEBPACK_IMPORTED_MODULE_3__["SalesUIComponent"] },
    { path: "admin", component: _components_admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_4__["AdminUIComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'posUI';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/employees/employees.component */ "./src/app/components/employees/employees.component.ts");
/* harmony import */ var _components_employees_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/employees/employee-form/employee-form.component */ "./src/app/components/employees/employee-form/employee-form.component.ts");
/* harmony import */ var _components_employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/employees/employee-list/employee-list.component */ "./src/app/components/employees/employee-list/employee-list.component.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_sales_ui_sales_ui_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sales-ui/sales-ui.component */ "./src/app/components/sales-ui/sales-ui.component.ts");
/* harmony import */ var _components_admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin-ui/admin-ui.component */ "./src/app/components/admin-ui/admin-ui.component.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _components_sales_ui_items_display_items_display_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sales-ui/items-display/items-display.component */ "./src/app/components/sales-ui/items-display/items-display.component.ts");
/* harmony import */ var _components_sales_ui_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sales-ui/register/register.component */ "./src/app/components/sales-ui/register/register.component.ts");
/* harmony import */ var _components_sales_ui_menu_btns_menu_btns_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sales-ui/menu-btns/menu-btns.component */ "./src/app/components/sales-ui/menu-btns/menu-btns.component.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/register.service */ "./src/app/services/register.service.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_8__["EmployeesComponent"],
            _components_employees_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeFormComponent"],
            _components_employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeListComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
            _components_sales_ui_sales_ui_component__WEBPACK_IMPORTED_MODULE_14__["SalesUIComponent"],
            _components_admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_15__["AdminUIComponent"],
            _components_sales_ui_items_display_items_display_component__WEBPACK_IMPORTED_MODULE_17__["ItemsDisplayComponent"],
            _components_sales_ui_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
            _components_sales_ui_menu_btns_menu_btns_component__WEBPACK_IMPORTED_MODULE_19__["MenuBtnsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot()
        ],
        providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_11__["EmployeeService"], _services_register_service__WEBPACK_IMPORTED_MODULE_20__["RegisterService"], _globals__WEBPACK_IMPORTED_MODULE_16__["Globals"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin-ui/admin-ui.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/admin-ui/admin-ui.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tdWkvYWRtaW4tdWkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/admin-ui/admin-ui.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/admin-ui/admin-ui.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminUIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUIComponent", function() { return AdminUIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");



let AdminUIComponent = class AdminUIComponent {
    constructor(globals) {
        globals.page = "admin";
        console.log(globals.page);
    }
    ngOnInit() { }
};
AdminUIComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
AdminUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-admin-ui",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-ui.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-ui/admin-ui.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-ui.component.scss */ "./src/app/components/admin-ui/admin-ui.component.scss")).default]
    })
], AdminUIComponent);



/***/ }),

/***/ "./src/app/components/employees/employee-form/employee-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/employees/employee-form/employee-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlLWZvcm0vZW1wbG95ZWUtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/employees/employee-form/employee-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/employees/employee-form/employee-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeFormComponent", function() { return EmployeeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let EmployeeFormComponent = class EmployeeFormComponent {
    constructor(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.resetForm();
    }
    // ? means nullable i.e. form is nullable
    resetForm(form) {
        this.service.formData = {
            EmployeeID: null,
            FirstName: "",
            LastName: "",
            Position: "",
            HourlyRate: 8.15,
            HoursWorked: 0,
            TotalPay: 0
        };
    }
    onSubmit(form) {
        if (form.value.EmployeeID == null)
            this.insertRecord(form);
        else
            this.updateRecord(form);
    }
    insertRecord(form) {
        this.service.postEmployee(form.value).subscribe(res => {
            this.toastr.success("New employee added", "REGISTER");
            this.service.refreshList();
            this.resetForm(form);
        });
    }
    updateRecord(form) {
        this.service.putEmployee(form.value).subscribe(res => {
            this.toastr.info("Employee updated", "EDIT");
            this.service.refreshList();
            this.resetForm(form);
        });
    }
};
EmployeeFormComponent.ctorParameters = () => [
    { type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
EmployeeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-employee-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees/employee-form/employee-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-form.component.scss */ "./src/app/components/employees/employee-form/employee-form.component.scss")).default]
    })
], EmployeeFormComponent);



/***/ }),

/***/ "./src/app/components/employees/employee-list/employee-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/employees/employee-list/employee-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/employees/employee-list/employee-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/employees/employee-list/employee-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let EmployeeListComponent = class EmployeeListComponent {
    constructor(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.service.refreshList();
    }
    populateForm(employee) {
        // Object.assign precents two-way binding from automatically updating while users are editing info
        this.service.formData = Object.assign({}, employee);
    }
    deleteEmp(id) {
        this.service.deleteEmployee(id).subscribe(res => {
            this.service.refreshList();
            this.toastr.warning("Employee removed", "DELETE");
        });
    }
};
EmployeeListComponent.ctorParameters = () => [
    { type: src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-employee-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees/employee-list/employee-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-list.component.scss */ "./src/app/components/employees/employee-list/employee-list.component.scss")).default]
    })
], EmployeeListComponent);



/***/ }),

/***/ "./src/app/components/employees/employees.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/employees/employees.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/employees/employees.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/employees/employees.component.ts ***!
  \*************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmployeesComponent = class EmployeesComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employees',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees/employees.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employees.component.scss */ "./src/app/components/employees/employees.component.scss")).default]
    })
], EmployeesComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".brand {\n  position: absolute;\n  left: 45%;\n  color: #c5c5c5;\n}\n\n.sales {\n  background: #575757;\n}\n\n.admin {\n  background: #575757;\n}\n\n.navbar {\n  padding: 0;\n}\n\ndiv.collapse.navbar-collapse {\n  height: 5vh;\n}\n\n.nav-link {\n  height: 5vh;\n  font-size: 2vh;\n}\n\n.nav-item {\n  height: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxCT1NTXFxEZXNrdG9wXFxwb3NcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk3LCAxOTcpO1xyXG59XHJcblxyXG4uc2FsZXMge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDg3LCA4NywgODcpO1xyXG59XHJcblxyXG4uYWRtaW4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDg3LCA4NywgODcpO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmRpdi5jb2xsYXBzZS5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIGZvbnQtc2l6ZTogMnZoO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbn0iLCIuYnJhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ1JTtcbiAgY29sb3I6ICNjNWM1YzU7XG59XG5cbi5zYWxlcyB7XG4gIGJhY2tncm91bmQ6ICM1NzU3NTc7XG59XG5cbi5hZG1pbiB7XG4gIGJhY2tncm91bmQ6ICM1NzU3NTc7XG59XG5cbi5uYXZiYXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG5kaXYuY29sbGFwc2UubmF2YmFyLWNvbGxhcHNlIHtcbiAgaGVpZ2h0OiA1dmg7XG59XG5cbi5uYXYtbGluayB7XG4gIGhlaWdodDogNXZoO1xuICBmb250LXNpemU6IDJ2aDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgaGVpZ2h0OiA1dmg7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");



let NavbarComponent = class NavbarComponent {
    constructor(globals) {
        this.globals = globals;
    }
    ngOnInit() { }
    // Method returns style class based on navbar Globals state
    setSales() {
        let activeClass = {
            sales: this.globals.page === "sales"
        };
        return activeClass;
    }
    setAdmin() {
        let activeClass = {
            admin: this.globals.page === "admin"
        };
        return activeClass;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/sales-ui/items-display/items-display.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/sales-ui/items-display/items-display.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".display-container {\n  height: 47.5vh;\n  width: 70vw;\n}\n\nthead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\nthead {\n  width: 100%;\n  height: 5vh;\n}\n\ntable {\n  width: 100%;\n}\n\ntbody {\n  display: block;\n  height: 42.5vh;\n}\n\n.items-display {\n  height: 47.5vh;\n}\n\ntr {\n  background-color: #ececec;\n}\n\n.td-display {\n  width: 14vw;\n  font-size: 1vw;\n}\n\ntd {\n  background-color: white;\n  font-weight: 500;\n}\n\n.qty-btn {\n  font-size: 1vw;\n  outline: black;\n  width: 2vw;\n  padding: 0.2vh 0vw;\n}\n\n.qty-div {\n  margin: 0;\n  padding: 0;\n  text-align: left;\n}\n\n.qty-num {\n  text-align: center;\n  padding: 0;\n  margin-right: 0.5vw;\n}\n\n.qty-space-adj {\n  margin-left: 0.8vw;\n}\n\n.rmv-btn {\n  font-size: 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYWxlcy11aS9pdGVtcy1kaXNwbGF5L0M6XFxVc2Vyc1xcQk9TU1xcRGVza3RvcFxccG9zXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNhbGVzLXVpXFxpdGVtcy1kaXNwbGF5XFxpdGVtcy1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NhbGVzLXVpL2l0ZW1zLWRpc3BsYXkvaXRlbXMtZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FER0E7O0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FsZXMtdWkvaXRlbXMtZGlzcGxheS9pdGVtcy1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDQ3LjV2aDtcclxuICB3aWR0aDogNzB2dztcclxufVxyXG5cclxuLy8gVGhpcyBzZXR1cCBpcyB0byBmaXggdGhlIHRhYmxlIGhlYWQgc28gdGhhdCBpdCBkb2Vzbid0IHNjcm9sbC5cclxudGhlYWQsXHJcbnRib2R5IHRyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGJvZHkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNDIuNXZoO1xyXG59XHJcblxyXG4uaXRlbXMtZGlzcGxheSB7XHJcbiAgaGVpZ2h0OiA0Ny41dmg7XHJcbn1cclxuXHJcbnRyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XHJcbn1cclxuXHJcbi50ZC1kaXNwbGF5IHtcclxuICB3aWR0aDogMTR2dztcclxuICBmb250LXNpemU6IDF2dztcclxufVxyXG5cclxudGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5xdHktYnRuIHtcclxuICBmb250LXNpemU6IDF2dztcclxuICBvdXRsaW5lOiBibGFjaztcclxuICB3aWR0aDogMnZ3O1xyXG4gIHBhZGRpbmc6IDAuMnZoIDB2dztcclxufVxyXG5cclxuLnF0eS1kaXYge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5xdHktbnVtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xyXG59XHJcblxyXG4ucXR5LXNwYWNlLWFkaiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuOHZ3O1xyXG59XHJcblxyXG4ucm12LWJ0biB7XHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbn1cclxuIiwiLmRpc3BsYXktY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0Ny41dmg7XG4gIHdpZHRoOiA3MHZ3O1xufVxuXG50aGVhZCxcbnRib2R5IHRyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG50aGVhZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDV2aDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGJvZHkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0Mi41dmg7XG59XG5cbi5pdGVtcy1kaXNwbGF5IHtcbiAgaGVpZ2h0OiA0Ny41dmg7XG59XG5cbnRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbn1cblxuLnRkLWRpc3BsYXkge1xuICB3aWR0aDogMTR2dztcbiAgZm9udC1zaXplOiAxdnc7XG59XG5cbnRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5xdHktYnRuIHtcbiAgZm9udC1zaXplOiAxdnc7XG4gIG91dGxpbmU6IGJsYWNrO1xuICB3aWR0aDogMnZ3O1xuICBwYWRkaW5nOiAwLjJ2aCAwdnc7XG59XG5cbi5xdHktZGl2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucXR5LW51bSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcbn1cblxuLnF0eS1zcGFjZS1hZGoge1xuICBtYXJnaW4tbGVmdDogMC44dnc7XG59XG5cbi5ybXYtYnRuIHtcbiAgZm9udC1zaXplOiAxdnc7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/sales-ui/items-display/items-display.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/sales-ui/items-display/items-display.component.ts ***!
  \******************************************************************************/
/*! exports provided: ItemsDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsDisplayComponent", function() { return ItemsDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/register.service */ "./src/app/services/register.service.ts");



let ItemsDisplayComponent = class ItemsDisplayComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    // @desc    UI method to remove item from current order
    // @params  id
    // @Return  None
    removeItem(id) {
        this.service.removeItemById(id);
    }
    // @desc    UI method to increase qty of item
    // @params  itemName
    // @Return  None
    increaseQty(itemName) {
        this.service.increaseQuantity(itemName);
    }
    // @desc    UI method to decrease qty of item
    // @params  itemName
    // @Return  None
    decreaseQty(itemName) {
        this.service.decreaseQuantity(itemName);
    }
};
ItemsDisplayComponent.ctorParameters = () => [
    { type: _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] }
];
ItemsDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-items-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./items-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/items-display/items-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./items-display.component.scss */ "./src/app/components/sales-ui/items-display/items-display.component.scss")).default]
    })
], ItemsDisplayComponent);



/***/ }),

/***/ "./src/app/components/sales-ui/menu-btns/menu-btns.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/sales-ui/menu-btns/menu-btns.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".display-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 47.5vh;\n  width: 70vw;\n  background-color: #ececec;\n}\n\n.cones, .scoops {\n  height: 47.5vh;\n  padding: 0vw;\n  text-align: center;\n}\n\n.cones button, .scoops button {\n  height: 12.83vh;\n  border-radius: 1.5vh;\n  margin: 1.5vh 0vw;\n  font-size: 1.5vw;\n  border: none;\n}\n\n.scoops {\n  text-align: left;\n}\n\n.scoops button {\n  background-color: #27a331;\n}\n\n.scoops button:hover {\n  background-color: #228600;\n}\n\n.drinks {\n  height: 47.5vh;\n  padding: 0vw;\n}\n\n.drinks button {\n  height: 12.83vh;\n  border-radius: 1.5vh;\n  margin: 1.5vh 0vw;\n  font-size: 1.5vw;\n  border: none;\n  background-color: #b14e4e;\n}\n\n.drinks button:hover {\n  background-color: #964242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYWxlcy11aS9tZW51LWJ0bnMvQzpcXFVzZXJzXFxCT1NTXFxEZXNrdG9wXFxwb3NcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2FsZXMtdWlcXG1lbnUtYnRuc1xcbWVudS1idG5zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NhbGVzLXVpL21lbnUtYnRucy9tZW51LWJ0bnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDUjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FERUk7RUFDSSx5QkFBQTtBQ0FSOztBREVJO0VBQ0kseUJBQUE7QUNBUjs7QURJQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDREo7O0FER0k7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRFI7O0FER0k7RUFDSSx5QkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zYWxlcy11aS9tZW51LWJ0bnMvbWVudS1idG5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDQ3LjV2aDtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG59XHJcblxyXG4uY29uZXMsIC5zY29vcHMge1xyXG4gICAgaGVpZ2h0OiA0Ny41dmg7XHJcbiAgICBwYWRkaW5nOiAwdnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMi44M3ZoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXZoO1xyXG4gICAgICAgIG1hcmdpbjogMS41dmggMHZ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Nvb3BzIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCAxNjMsIDQ5KTtcclxuICAgIH1cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAxMzQsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJpbmtzIHtcclxuICAgIGhlaWdodDogNDcuNXZoO1xyXG4gICAgcGFkZGluZzogMHZ3O1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMi44M3ZoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXZoO1xyXG4gICAgICAgIG1hcmdpbjogMS41dmggMHZ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDc4LCA3OCk7XHJcbiAgICB9XHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDY2LCA2Nik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLmRpc3BsYXktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNDcuNXZoO1xuICB3aWR0aDogNzB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbn1cblxuLmNvbmVzLCAuc2Nvb3BzIHtcbiAgaGVpZ2h0OiA0Ny41dmg7XG4gIHBhZGRpbmc6IDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbmVzIGJ1dHRvbiwgLnNjb29wcyBidXR0b24ge1xuICBoZWlnaHQ6IDEyLjgzdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXZoO1xuICBtYXJnaW46IDEuNXZoIDB2dztcbiAgZm9udC1zaXplOiAxLjV2dztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc2Nvb3BzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zY29vcHMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YTMzMTtcbn1cbi5zY29vcHMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyODYwMDtcbn1cblxuLmRyaW5rcyB7XG4gIGhlaWdodDogNDcuNXZoO1xuICBwYWRkaW5nOiAwdnc7XG59XG4uZHJpbmtzIGJ1dHRvbiB7XG4gIGhlaWdodDogMTIuODN2aDtcbiAgYm9yZGVyLXJhZGl1czogMS41dmg7XG4gIG1hcmdpbjogMS41dmggMHZ3O1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMTRlNGU7XG59XG4uZHJpbmtzIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NjQyNDI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/sales-ui/menu-btns/menu-btns.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/sales-ui/menu-btns/menu-btns.component.ts ***!
  \**********************************************************************/
/*! exports provided: MenuBtnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBtnsComponent", function() { return MenuBtnsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");




let MenuBtnsComponent = class MenuBtnsComponent {
    constructor(service, globals) {
        this.service = service;
        this.globals = globals;
    }
    ngOnInit() { }
    // @desc    UI method to add item to current order
    // @params  itemName
    // @Return  None
    addItem(itemName) {
        // Switch cases determine item prices stored in Globals
        switch (itemName) {
            case "Chocolate Cone":
                this.service.addItem(itemName, 1, this.globals.conePrice);
                break;
            case "Vanilla Cone":
                this.service.addItem(itemName, 1, this.globals.conePrice);
                break;
            case "Strawberry Cone":
                this.service.addItem(itemName, 1, this.globals.conePrice);
                break;
            case "Chocolate Bowl":
                this.service.addItem(itemName, 1, this.globals.bowlPrice);
                break;
            case "Vanilla Bowl":
                this.service.addItem(itemName, 1, this.globals.bowlPrice);
                break;
            case "Strawberry Bowl":
                this.service.addItem(itemName, 1, this.globals.bowlPrice);
                break;
            case "Sm Soft Drink":
                this.service.addItem(itemName, 1, this.globals.smDrinkPrice);
                break;
            case "Md Soft Drink":
                this.service.addItem(itemName, 1, this.globals.mdDrinkPrice);
                break;
            case "Lg Soft Drink":
                this.service.addItem(itemName, 1, this.globals.lgDrinkPrice);
                break;
        }
    }
};
MenuBtnsComponent.ctorParameters = () => [
    { type: src_app_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] }
];
MenuBtnsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-menu-btns",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-btns.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/menu-btns/menu-btns.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-btns.component.scss */ "./src/app/components/sales-ui/menu-btns/menu-btns.component.scss")).default]
    })
], MenuBtnsComponent);



/***/ }),

/***/ "./src/app/components/sales-ui/register/register.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/sales-ui/register/register.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".display-container {\n  position: absolute;\n  top: 5vh;\n  right: 0;\n  height: 95vh;\n  width: 30vw;\n  background: #3f3fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYWxlcy11aS9yZWdpc3Rlci9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXHBvc1xcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzYWxlcy11aVxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NhbGVzLXVpL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FsZXMtdWkvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1dmg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogOTV2aDtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDYzLCA2MywgMjU1KTtcclxufSIsIi5kaXNwbGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1dmg7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDk1dmg7XG4gIHdpZHRoOiAzMHZ3O1xuICBiYWNrZ3JvdW5kOiAjM2YzZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/sales-ui/register/register.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/sales-ui/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/components/sales-ui/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/sales-ui/sales-ui.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/sales-ui/sales-ui.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FsZXMtdWkvc2FsZXMtdWkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sales-ui/sales-ui.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sales-ui/sales-ui.component.ts ***!
  \***********************************************************/
/*! exports provided: SalesUIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesUIComponent", function() { return SalesUIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");



let SalesUIComponent = class SalesUIComponent {
    constructor(globals) {
        globals.page = "sales";
        console.log(globals.page);
    }
    ngOnInit() {
    }
};
SalesUIComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
SalesUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-ui',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-ui.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sales-ui/sales-ui.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-ui.component.scss */ "./src/app/components/sales-ui/sales-ui.component.scss")).default]
    })
], SalesUIComponent);



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// This class is used for setting prices globally, so that you 
// don't need to repeatedly set prices for adding items. 
let Globals = class Globals {
    // This class is used for setting prices globally, so that you 
    // don't need to repeatedly set prices for adding items. 
    constructor() {
        this.page = "";
        this.conePrice = 2.99;
        this.bowlPrice = 3.99;
        this.smDrinkPrice = .99;
        this.mdDrinkPrice = 1.49;
        this.lgDrinkPrice = 1.99;
    }
};
Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Globals);



/***/ }),

/***/ "./src/app/models/item.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/item.model.ts ***!
  \**************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Item {
}


/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.rootURL = "https://localhost:44338/api";
    }
    postEmployee(formData) {
        return this.http.post(this.rootURL + "/Employee", formData);
    }
    refreshList() {
        this.http
            .get(this.rootURL + "/Employee")
            .toPromise()
            .then(res => (this.employeeList = res));
    }
    putEmployee(formData) {
        return this.http.put(this.rootURL + "/Employee/" + formData.EmployeeID, formData);
    }
    deleteEmployee(id) {
        return this.http.delete(this.rootURL + "/Employee/" + id);
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/item.model */ "./src/app/models/item.model.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);




let RegisterService = class RegisterService {
    constructor() {
        this.itemList = [];
    }
    // @desc    Add new item to current order Item array
    // @params  name, unitPrice
    // @return  None
    addItem(name, quantity, unitPrice) {
        if (this.itemExists(name)) {
            this.increaseQuantity(name);
        }
        else {
            let newItem = new _models_item_model__WEBPACK_IMPORTED_MODULE_2__["Item"]();
            newItem.ItemID = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
            newItem.Name = name;
            newItem.Quantity = quantity;
            newItem.UnitPrice = unitPrice;
            newItem.Subtotal = quantity * unitPrice;
            newItem.SubtotalString = (Math.round(newItem.Subtotal * 100) / 100).toFixed(2);
            this.itemList.push(newItem);
        }
    }
    // @desc    Function to remove item from item array by id (used for "Remove" btn)
    // @params  id
    // @Return  None
    removeItemById(id) {
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].ItemID === id) {
                this.itemList.splice(i, 1);
            }
        }
    }
    // @desc    Function to remove item from item array by name (private method used for decreaseQuantity)
    // @params  itemName
    // @Return  None
    removeItemByName(itemName) {
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].Name === itemName) {
                this.itemList.splice(i, 1);
            }
        }
    }
    // @desc    Find item, then increment quantity.
    // @params  name
    // @Return  None
    increaseQuantity(name) {
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].Name === name) {
                this.itemList[i].Quantity++;
                let newSubtotal = this.itemList[i].Quantity * this.itemList[i].UnitPrice;
                // Used to round to 2 decimal places
                this.itemList[i].Subtotal =
                    Math.round((newSubtotal + Number.EPSILON) * 100) / 100;
                // Forcing 2 decimal places (converts to string only)
                this.itemList[i].SubtotalString = (Math.round(this.itemList[i].Subtotal * 100) / 100).toFixed(2);
            }
        }
    }
    // @desc    Find item, then increment quantity.
    // @params  name
    // @Return  None
    decreaseQuantity(name) {
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].Name === name) {
                // If quantity is 0, then remove it from the list.
                if (this.itemList[i].Quantity === 1) {
                    this.removeItemByName(name);
                }
                else {
                    this.itemList[i].Quantity--;
                    let newSubtotal = this.itemList[i].Quantity * this.itemList[i].UnitPrice;
                    // Used to round to 2 decimal places
                    this.itemList[i].Subtotal =
                        Math.round((newSubtotal + Number.EPSILON) * 100) / 100;
                }
            }
        }
    }
    // @desc    Returns true if item is already in basket.
    // @params  name
    // @Return  None
    itemExists(name) {
        var exists = false;
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].Name === name) {
                exists = true;
            }
        }
        return exists;
    }
};
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], RegisterService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\BOSS\Desktop\pos\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map