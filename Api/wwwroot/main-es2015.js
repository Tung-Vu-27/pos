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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_sales_ui_sales_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sales-ui/sales-ui.component */ "./src/app/components/sales-ui/sales-ui.component.ts");
/* harmony import */ var _components_admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin-ui/admin-ui.component */ "./src/app/components/admin-ui/admin-ui.component.ts");






const routes = [
    { path: "", component: _components_sales_ui_sales_ui_component__WEBPACK_IMPORTED_MODULE_2__["SalesUIComponent"] },
    { path: "admin", component: _components_admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_3__["AdminUIComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'posUI';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_sales_ui_sales_ui_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sales-ui/sales-ui.component */ "./src/app/components/sales-ui/sales-ui.component.ts");
/* harmony import */ var _components_admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin-ui/admin-ui.component */ "./src/app/components/admin-ui/admin-ui.component.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _components_sales_ui_items_display_items_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sales-ui/items-display/items-display.component */ "./src/app/components/sales-ui/items-display/items-display.component.ts");
/* harmony import */ var _components_sales_ui_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sales-ui/register/register.component */ "./src/app/components/sales-ui/register/register.component.ts");
/* harmony import */ var _components_sales_ui_menu_btns_menu_btns_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sales-ui/menu-btns/menu-btns.component */ "./src/app/components/sales-ui/menu-btns/menu-btns.component.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_register_service__WEBPACK_IMPORTED_MODULE_15__["RegisterService"], _globals__WEBPACK_IMPORTED_MODULE_11__["Globals"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot({
                timeOut: 3000,
                preventDuplicates: true,
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _components_sales_ui_sales_ui_component__WEBPACK_IMPORTED_MODULE_9__["SalesUIComponent"],
        _components_admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_10__["AdminUIComponent"],
        _components_sales_ui_items_display_items_display_component__WEBPACK_IMPORTED_MODULE_12__["ItemsDisplayComponent"],
        _components_sales_ui_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
        _components_sales_ui_menu_btns_menu_btns_component__WEBPACK_IMPORTED_MODULE_14__["MenuBtnsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _components_sales_ui_sales_ui_component__WEBPACK_IMPORTED_MODULE_9__["SalesUIComponent"],
                    _components_admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_10__["AdminUIComponent"],
                    _components_sales_ui_items_display_items_display_component__WEBPACK_IMPORTED_MODULE_12__["ItemsDisplayComponent"],
                    _components_sales_ui_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                    _components_sales_ui_menu_btns_menu_btns_component__WEBPACK_IMPORTED_MODULE_14__["MenuBtnsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot({
                        timeOut: 3000,
                        preventDuplicates: true,
                    })
                ],
                providers: [_services_register_service__WEBPACK_IMPORTED_MODULE_15__["RegisterService"], _globals__WEBPACK_IMPORTED_MODULE_11__["Globals"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
/* harmony import */ var _services_sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sales.service */ "./src/app/services/sales.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AdminUIComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sale_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sale_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sale_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 6, sale_r1.total, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sale_r1.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 9, sale_r1.cash, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 12, sale_r1.change, "1.2-2"));
} }
class AdminUIComponent {
    constructor(globals, salesService) {
        this.salesService = salesService;
        globals.page = "admin";
    }
    ngOnInit() {
        this.salesService.refreshSalesList();
    }
}
AdminUIComponent.ɵfac = function AdminUIComponent_Factory(t) { return new (t || AdminUIComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"])); };
AdminUIComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminUIComponent, selectors: [["app-admin-ui"]], decls: 25, vars: 1, consts: [[1, "wrapper"], [1, "row"], [1, "col-md-12"], [1, "col-md-12", "sales-table"], [1, "table", "table-hover"], ["scope", "col", 1, "td-display"], [4, "ngFor", "ngForOf"], [1, "td-display"]], template: function AdminUIComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SalesId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PaymentType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AdminUIComponent_tr_22_Template, 16, 15, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "[Table resets after 50 entries.]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.salesService.salesList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-left: 5%;\n  height: 90vh;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sales-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 85vh !important;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi11aS9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXHBvc1xcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZG1pbi11aVxcYWRtaW4tdWkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tdWkvYWRtaW4tdWkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi11aS9hZG1pbi11aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBoZWlnaHQ6IDkwdmg7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNhbGVzLXRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4NXZoICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn0iLCIud3JhcHBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNhbGVzLXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogODV2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUIComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-admin-ui",
                templateUrl: "./admin-ui.component.html",
                styleUrls: ["./admin-ui.component.scss"]
            }]
    }], function () { return [{ type: _globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }, { type: _services_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class NavbarComponent {
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
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "nav-link", "disabled", "brand"], [1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "", 1, "nav-link", 3, "ngClass"], ["routerLink", "admin", 1, "nav-link", 3, "ngClass"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ice Cream Parlor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setSales());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setAdmin());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".brand[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 45%;\n  color: #c5c5c5;\n}\n\n.sales[_ngcontent-%COMP%] {\n  background: #575757;\n}\n\n.admin[_ngcontent-%COMP%] {\n  background: #575757;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\ndiv.collapse.navbar-collapse[_ngcontent-%COMP%] {\n  height: 5vh;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  height: 5vh;\n  font-size: 2vh;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  height: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxCT1NTXFxEZXNrdG9wXFxwb3NcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1JTtcbiAgICBjb2xvcjogcmdiKDE5NywgMTk3LCAxOTcpO1xufVxuXG4uc2FsZXMge1xuICAgIGJhY2tncm91bmQ6IHJnYig4NywgODcsIDg3KTtcbn1cblxuLmFkbWluIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODcsIDg3LCA4Nyk7XG59XG5cbi5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmRpdi5jb2xsYXBzZS5uYXZiYXItY29sbGFwc2Uge1xuICAgIGhlaWdodDogNXZoO1xufVxuXG4ubmF2LWxpbmsge1xuICAgIGhlaWdodDogNXZoO1xuICAgIGZvbnQtc2l6ZTogMnZoO1xufVxuXG4ubmF2LWl0ZW0ge1xuICAgIGhlaWdodDogNXZoO1xufSIsIi5icmFuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDUlO1xuICBjb2xvcjogI2M1YzVjNTtcbn1cblxuLnNhbGVzIHtcbiAgYmFja2dyb3VuZDogIzU3NTc1Nztcbn1cblxuLmFkbWluIHtcbiAgYmFja2dyb3VuZDogIzU3NTc1Nztcbn1cblxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmRpdi5jb2xsYXBzZS5uYXZiYXItY29sbGFwc2Uge1xuICBoZWlnaHQ6IDV2aDtcbn1cblxuLm5hdi1saW5rIHtcbiAgaGVpZ2h0OiA1dmg7XG4gIGZvbnQtc2l6ZTogMnZoO1xufVxuXG4ubmF2LWl0ZW0ge1xuICBoZWlnaHQ6IDV2aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-navbar",
                templateUrl: "./navbar.component.html",
                styleUrls: ["./navbar.component.scss"]
            }]
    }], function () { return [{ type: _globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ItemsDisplayComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsDisplayComponent_tr_15_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.decreaseQty(item_r4.Name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsDisplayComponent_tr_15_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.increaseQty(item_r4.Name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsDisplayComponent_tr_15_Template_td_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removeItem(item_r4.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.Quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.UnitPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 4, item_r4.Subtotal, "1.2-2"));
} }
class ItemsDisplayComponent {
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
}
ItemsDisplayComponent.ɵfac = function ItemsDisplayComponent_Factory(t) { return new (t || ItemsDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"])); };
ItemsDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsDisplayComponent, selectors: [["app-items-display"]], decls: 16, vars: 2, consts: [[1, "display-container"], [1, "table", "table-hover"], ["scope", "col", 1, "td-display"], ["scope", "col"], [2, "overflow-y", "scroll", "height", "xyz", 3, "scrollTop"], ["scrollMe", ""], [4, "ngFor", "ngForOf"], [1, "td-display"], [1, "row", "qty-wrapper"], [1, "col-md-2", "qty-div", "qty-space-adj"], ["onclick", "this.blur();", 1, "btn", "btn-outline-secondary", "qty-btn", 3, "click"], [1, "col-md-2", "qty-num"], [1, "col-md-2", "qty-div"], [1, "delete-td", 3, "click"], ["onclick", "this.blur();", 1, "btn", "btn-outline-danger", "rmv-btn"]], template: function ItemsDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Unit Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ItemsDisplayComponent_tr_15_Template, 22, 7, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollTop", _r2.scrollHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.itemList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".display-container[_ngcontent-%COMP%] {\n  height: 47.5vh;\n  width: 70vw;\n}\n\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\nthead[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5vh;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntbody[_ngcontent-%COMP%] {\n  display: block;\n  height: 42.5vh;\n}\n\n.items-display[_ngcontent-%COMP%] {\n  height: 47.5vh;\n}\n\ntr[_ngcontent-%COMP%] {\n  background-color: #ececec;\n}\n\n.td-display[_ngcontent-%COMP%] {\n  width: 14vw;\n  font-size: 1vw;\n}\n\ntd[_ngcontent-%COMP%] {\n  background-color: white;\n  font-weight: 500;\n}\n\n.qty-btn[_ngcontent-%COMP%] {\n  font-size: 1vw;\n  outline: black;\n  width: 2vw;\n  padding: 0.2vh 0vw;\n}\n\n.qty-div[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  text-align: left;\n}\n\n.qty-num[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0;\n  margin-right: 0.5vw;\n}\n\n.qty-space-adj[_ngcontent-%COMP%] {\n  margin-left: 0.8vw;\n}\n\n.rmv-btn[_ngcontent-%COMP%] {\n  font-size: 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYWxlcy11aS9pdGVtcy1kaXNwbGF5L0M6XFxVc2Vyc1xcQk9TU1xcRGVza3RvcFxccG9zXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNhbGVzLXVpXFxpdGVtcy1kaXNwbGF5XFxpdGVtcy1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NhbGVzLXVpL2l0ZW1zLWRpc3BsYXkvaXRlbXMtZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FER0E7O0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FsZXMtdWkvaXRlbXMtZGlzcGxheS9pdGVtcy1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0Ny41dmg7XG4gIHdpZHRoOiA3MHZ3O1xufVxuXG4vLyBUaGlzIHNldHVwIGlzIHRvIGZpeCB0aGUgdGFibGUgaGVhZCBzbyB0aGF0IGl0IGRvZXNuJ3Qgc2Nyb2xsLlxudGhlYWQsXG50Ym9keSB0ciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxudGhlYWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1dmg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRib2R5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNDIuNXZoO1xufVxuXG4uaXRlbXMtZGlzcGxheSB7XG4gIGhlaWdodDogNDcuNXZoO1xufVxuXG50ciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcbn1cblxuLnRkLWRpc3BsYXkge1xuICB3aWR0aDogMTR2dztcbiAgZm9udC1zaXplOiAxdnc7XG59XG5cbnRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5xdHktYnRuIHtcbiAgZm9udC1zaXplOiAxdnc7XG4gIG91dGxpbmU6IGJsYWNrO1xuICB3aWR0aDogMnZ3O1xuICBwYWRkaW5nOiAwLjJ2aCAwdnc7XG59XG5cbi5xdHktZGl2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucXR5LW51bSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcbn1cblxuLnF0eS1zcGFjZS1hZGoge1xuICBtYXJnaW4tbGVmdDogMC44dnc7XG59XG5cbi5ybXYtYnRuIHtcbiAgZm9udC1zaXplOiAxdnc7XG59XG4iLCIuZGlzcGxheS1jb250YWluZXIge1xuICBoZWlnaHQ6IDQ3LjV2aDtcbiAgd2lkdGg6IDcwdnc7XG59XG5cbnRoZWFkLFxudGJvZHkgdHIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbnRoZWFkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXZoO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50Ym9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDQyLjV2aDtcbn1cblxuLml0ZW1zLWRpc3BsYXkge1xuICBoZWlnaHQ6IDQ3LjV2aDtcbn1cblxudHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xufVxuXG4udGQtZGlzcGxheSB7XG4gIHdpZHRoOiAxNHZ3O1xuICBmb250LXNpemU6IDF2dztcbn1cblxudGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnF0eS1idG4ge1xuICBmb250LXNpemU6IDF2dztcbiAgb3V0bGluZTogYmxhY2s7XG4gIHdpZHRoOiAydnc7XG4gIHBhZGRpbmc6IDAuMnZoIDB2dztcbn1cblxuLnF0eS1kaXYge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5xdHktbnVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xufVxuXG4ucXR5LXNwYWNlLWFkaiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjh2dztcbn1cblxuLnJtdi1idG4ge1xuICBmb250LXNpemU6IDF2dztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-items-display',
                templateUrl: './items-display.component.html',
                styleUrls: ['./items-display.component.scss']
            }]
    }], function () { return [{ type: _services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");




class MenuBtnsComponent {
    constructor(service, globals) {
        this.service = service;
        this.globals = globals;
    }
    ngOnInit() { }
    // UI method to add item to current order
    addItem(itemName) {
        // Switch cases determine item prices stored in Globals
        switch (itemName) {
            case "Chocolate Cone":
                this.service.checkIfInProgress();
                this.service.addItem(itemName, 1, this.globals.conePrice);
                break;
            case "Vanilla Cone":
                this.service.checkIfInProgress();
                this.service.addItem(itemName, 1, this.globals.conePrice);
                break;
            case "Strawberry Cone":
                this.service.checkIfInProgress();
                this.service.addItem(itemName, 1, this.globals.conePrice);
                break;
            case "Chocolate Bowl":
                this.service.checkIfInProgress();
                this.service.addItem(itemName, 1, this.globals.bowlPrice);
                break;
            case "Vanilla Bowl":
                this.service.checkIfInProgress();
                this.service.addItem(itemName, 1, this.globals.bowlPrice);
                break;
            case "Strawberry Bowl":
                this.service.checkIfInProgress();
                this.service.addItem(itemName, 1, this.globals.bowlPrice);
                break;
            case "Sm Soft Drink":
                this.service.checkIfInProgress();
                this.service.addItem(itemName, 1, this.globals.smDrinkPrice);
                break;
            case "Md Soft Drink":
                this.service.checkIfInProgress();
                this.service.addItem(itemName, 1, this.globals.mdDrinkPrice);
                break;
            case "Lg Soft Drink":
                this.service.checkIfInProgress();
                this.service.addItem(itemName, 1, this.globals.lgDrinkPrice);
                break;
        }
    }
}
MenuBtnsComponent.ɵfac = function MenuBtnsComponent_Factory(t) { return new (t || MenuBtnsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
MenuBtnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuBtnsComponent, selectors: [["app-menu-btns"]], decls: 23, vars: 0, consts: [[1, "display-container"], [1, "row"], [1, "col-md-5", "cones"], ["type", "button", "onclick", "this.blur();", 1, "btn", "btn-primary", "col-md-9", 3, "click"], [1, "col-md-5", "scoops"], [1, "col-md-2", "drinks"]], template: function MenuBtnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBtnsComponent_Template_button_click_3_listener($event) { return ctx.addItem("Chocolate Cone"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Chocolate Cone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBtnsComponent_Template_button_click_5_listener($event) { return ctx.addItem("Vanilla Cone"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Vanilla Cone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBtnsComponent_Template_button_click_7_listener($event) { return ctx.addItem("Strawberry Cone"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Strawberry Cone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBtnsComponent_Template_button_click_10_listener($event) { return ctx.addItem("Chocolate Bowl"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Chocolate Bowl ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBtnsComponent_Template_button_click_12_listener($event) { return ctx.addItem("Vanilla Bowl"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Vanilla Bowl ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBtnsComponent_Template_button_click_14_listener($event) { return ctx.addItem("Strawberry Bowl"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Strawberry Bowl ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBtnsComponent_Template_button_click_17_listener($event) { return ctx.addItem("Sm Soft Drink"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Sm Soft Drink ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBtnsComponent_Template_button_click_19_listener($event) { return ctx.addItem("Md Soft Drink"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Md Soft Drink ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBtnsComponent_Template_button_click_21_listener($event) { return ctx.addItem("Lg Soft Drink"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Lg Soft Drink ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".display-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 47.5vh;\n  width: 70vw;\n  background-color: #ececec;\n  border-right: 1px solid black;\n}\n\n.cones[_ngcontent-%COMP%], .scoops[_ngcontent-%COMP%] {\n  height: 47.5vh;\n  padding: 0vw;\n  text-align: center;\n}\n\n.cones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .scoops[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 12.83vh;\n  border-radius: 1.5vh;\n  margin: 1.5vh 0vw;\n  font-size: 1.5vw;\n  border: none;\n  background-color: #33357e;\n}\n\n.cones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .scoops[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #212250;\n}\n\n.scoops[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.scoops[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #33b13d;\n}\n\n.scoops[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #228600;\n}\n\n.drinks[_ngcontent-%COMP%] {\n  height: 47.5vh;\n  padding: 0vw;\n}\n\n.drinks[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 12.83vh;\n  border-radius: 1.5vh;\n  margin: 1.5vh 0vw;\n  font-size: 1.5vw;\n  border: none;\n  background-color: #b14e4e;\n}\n\n.drinks[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #964242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYWxlcy11aS9tZW51LWJ0bnMvQzpcXFVzZXJzXFxCT1NTXFxEZXNrdG9wXFxwb3NcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2FsZXMtdWlcXG1lbnUtYnRuc1xcbWVudS1idG5zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NhbGVzLXVpL21lbnUtYnRucy9tZW51LWJ0bnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ1I7O0FEQ0k7RUFDSSx5QkFBQTtBQ0NSOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURFSTtFQUNJLHlCQUFBO0FDQVI7O0FERUk7RUFDSSx5QkFBQTtBQ0FSOztBRElBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNESjs7QURHSTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNEUjs7QURHSTtFQUNJLHlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NhbGVzLXVpL21lbnUtYnRucy9tZW51LWJ0bnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDQ3LjV2aDtcbiAgICB3aWR0aDogNzB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5jb25lcywgLnNjb29wcyB7XG4gICAgaGVpZ2h0OiA0Ny41dmg7XG4gICAgcGFkZGluZzogMHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEyLjgzdmg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXZoO1xuICAgICAgICBtYXJnaW46IDEuNXZoIDB2dztcbiAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUzLCAxMjYpO1xuICAgIH1cbiAgICBidXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDM0LCA4MCk7XG4gICAgfVxufVxuXG4uc2Nvb3BzIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIFxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTc3LCA2MSk7XG4gICAgfVxuICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMTM0LCAwKTtcbiAgICB9XG59XG5cbi5kcmlua3Mge1xuICAgIGhlaWdodDogNDcuNXZoO1xuICAgIHBhZGRpbmc6IDB2dztcbiAgICBcbiAgICBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEyLjgzdmg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXZoO1xuICAgICAgICBtYXJnaW46IDEuNXZoIDB2dztcbiAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCA3OCwgNzgpO1xuICAgIH1cbiAgICBidXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCA2NiwgNjYpO1xuICAgIH1cbn1cblxuXG5cbiIsIi5kaXNwbGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDQ3LjV2aDtcbiAgd2lkdGg6IDcwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY29uZXMsIC5zY29vcHMge1xuICBoZWlnaHQ6IDQ3LjV2aDtcbiAgcGFkZGluZzogMHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29uZXMgYnV0dG9uLCAuc2Nvb3BzIGJ1dHRvbiB7XG4gIGhlaWdodDogMTIuODN2aDtcbiAgYm9yZGVyLXJhZGl1czogMS41dmg7XG4gIG1hcmdpbjogMS41dmggMHZ3O1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM1N2U7XG59XG4uY29uZXMgYnV0dG9uOmhvdmVyLCAuc2Nvb3BzIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIyNTA7XG59XG5cbi5zY29vcHMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnNjb29wcyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNiMTNkO1xufVxuLnNjb29wcyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI4NjAwO1xufVxuXG4uZHJpbmtzIHtcbiAgaGVpZ2h0OiA0Ny41dmg7XG4gIHBhZGRpbmc6IDB2dztcbn1cbi5kcmlua3MgYnV0dG9uIHtcbiAgaGVpZ2h0OiAxMi44M3ZoO1xuICBib3JkZXItcmFkaXVzOiAxLjV2aDtcbiAgbWFyZ2luOiAxLjV2aCAwdnc7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxNGU0ZTtcbn1cbi5kcmlua3MgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2NDI0Mjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuBtnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-menu-btns",
                templateUrl: "./menu-btns.component.html",
                styleUrls: ["./menu-btns.component.scss"]
            }]
    }], function () { return [{ type: src_app_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/sales.service */ "./src/app/services/sales.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class RegisterComponent {
    constructor(registerService, salesService, toastr) {
        this.registerService = registerService;
        this.salesService = salesService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.registerService.refreshValues();
        this.salesService.refreshSalesList();
        this.registerService.refreshNum();
    }
    // Method to make complete cash sale. This method will interact with salesService to add new sale to database.
    cashSale() {
        this.checkInProgress();
        if (this.registerService.total != 0) {
            if (this.registerService.inputNum < this.registerService.total) {
                this.toastr.error("Payment amount is less than total owed.", "INVALID");
            }
            else {
                this.registerService.change =
                    this.registerService.inputNum - this.registerService.total;
                // Create sale from service
                this.salesService
                    .createSale(this.registerService.total, "Cash", this.registerService.inputNum, this.registerService.change)
                    .subscribe(data => console.log(data), error => console.log(error));
                this.registerService.inProgress = false;
                this.toastr.success("Purchase completed.", "SUCCESS");
            }
        }
    }
    // Method to make complete credit sale. This method will interact with salesService to add new sale to database.
    creditSale() {
        this.checkInProgress();
        if (this.registerService.total != 0) {
            this.registerService.change = 0;
            this.registerService.inputNum = 0;
            // Create sale from service
            this.salesService
                .createSale(this.registerService.total, "Credit", this.registerService.inputNum, this.registerService.change)
                .subscribe(data => console.log(data), error => console.log(error));
            this.registerService.inProgress = false;
            this.toastr.success("Purchase completed.", "SUCCESS");
        }
    }
    // Checks if sale is in progress. If false, reset all values and itemsList.
    checkInProgress() {
        if (this.registerService.inProgress == false) {
            this.registerService.reset();
            this.registerService.inProgress = true;
        }
    }
    // Numpad btn methods
    pressZero() {
        this.checkInProgress();
        this.registerService.inputStr += "0";
        this.registerService.refreshNum();
    }
    pressOne() {
        this.checkInProgress();
        this.registerService.inputStr += "1";
        this.registerService.refreshNum();
    }
    pressTwo() {
        this.checkInProgress();
        this.registerService.inputStr += "2";
        this.registerService.refreshNum();
    }
    pressThree() {
        this.checkInProgress();
        this.registerService.inputStr += "3";
        this.registerService.refreshNum();
    }
    pressFour() {
        this.checkInProgress();
        this.registerService.inputStr += "4";
        this.registerService.refreshNum();
    }
    pressFive() {
        this.checkInProgress();
        this.registerService.inputStr += "5";
        this.registerService.refreshNum();
    }
    pressSix() {
        this.checkInProgress();
        this.registerService.inputStr += "6";
        this.registerService.refreshNum();
    }
    pressSeven() {
        this.checkInProgress();
        this.registerService.inputStr += "7";
        this.registerService.refreshNum();
    }
    pressEight() {
        this.checkInProgress();
        this.registerService.inputStr += "8";
        this.registerService.refreshNum();
    }
    pressNine() {
        this.checkInProgress();
        this.registerService.inputStr += "9";
        this.registerService.refreshNum();
    }
    pressPoint() {
        this.checkInProgress();
        this.registerService.inputStr += ".";
        this.registerService.refreshNum();
    }
    pressDel() {
        this.checkInProgress();
        this.registerService.inputStr = "0";
        this.registerService.refreshNum();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 62, vars: 8, consts: [[1, "display-container"], [1, "totals"], [1, "container", "subtotal-wrapper"], [1, "subtotal-label"], [1, "subtotal-data"], [1, "container", "tax-wrapper"], [1, "tax-label"], [1, "tax-data"], [1, "container", "total-wrapper"], [1, "total-label"], [1, "total-data"], [1, "container", "input-wrapper"], [1, "change-label"], [1, "input-data"], [1, "container", "change-wrapper"], [1, "change-data"], [1, "payment-btns"], ["onclick", "this.blur();", 1, "btn", "btn-primary", "cash-btn", 3, "click"], ["onclick", "this.blur();", 1, "btn", "btn-primary", "credit-btn", 3, "click"], [1, "container", "numpad"], [1, "row"], ["onclick", "this.blur();", 1, "btn", "btn-primary", "numpad-btn", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_29_listener($event) { return ctx.cashSale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_31_listener($event) { return ctx.creditSale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_35_listener($event) { return ctx.pressSeven(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_37_listener($event) { return ctx.pressEight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_39_listener($event) { return ctx.pressNine(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_42_listener($event) { return ctx.pressFour(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_44_listener($event) { return ctx.pressFive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_46_listener($event) { return ctx.pressSix(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_49_listener($event) { return ctx.pressOne(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_51_listener($event) { return ctx.pressTwo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_53_listener($event) { return ctx.pressThree(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_56_listener($event) { return ctx.pressDel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Del ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_58_listener($event) { return ctx.pressZero(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_60_listener($event) { return ctx.pressPoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.registerService.subtotalStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.registerService.taxStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.registerService.totalStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.registerService.displayNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 5, ctx.registerService.change, "1.2-2"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".display-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5vh;\n  right: 0;\n  height: 95vh;\n  width: 30vw;\n  background-color: #ececec;\n}\n\n.totals[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  height: 47.5vh;\n  width: 30vw;\n}\n\n.subtotal-wrapper[_ngcontent-%COMP%], .discount-wrapper[_ngcontent-%COMP%], .tax-wrapper[_ngcontent-%COMP%], .total-wrapper[_ngcontent-%COMP%], .input-wrapper[_ngcontent-%COMP%], .change-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  position: relative;\n  width: 100%;\n  height: 7.92vh;\n  color: white;\n  background: #343a40;\n  border-bottom: 0.01vh #616161 solid;\n}\n\n.subtotal-label[_ngcontent-%COMP%], .discount-label[_ngcontent-%COMP%], .tax-label[_ngcontent-%COMP%], .total-label[_ngcontent-%COMP%], .change-label[_ngcontent-%COMP%] {\n  line-height: 7.92vh;\n  font-size: 1.25vw;\n}\n\n.subtotal-data[_ngcontent-%COMP%], .discount-data[_ngcontent-%COMP%], .tax-data[_ngcontent-%COMP%], .input-data[_ngcontent-%COMP%] {\n  line-height: 7.92vh;\n  font-size: 1vw;\n  position: absolute;\n  right: 1.5vw;\n}\n\n.total-data[_ngcontent-%COMP%], .input-data[_ngcontent-%COMP%], .change-data[_ngcontent-%COMP%] {\n  line-height: 7.92vh;\n  font-size: 2vw;\n  position: absolute;\n  right: 1.3vw;\n}\n\n.payment-btns[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 100%;\n  height: 7.92vh;\n  background: #343a40;\n}\n\n.payment-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0;\n  width: 15vw;\n  font-size: 1.25vw;\n}\n\n.cash-btn[_ngcontent-%COMP%] {\n  border-right: 0.01vh #8f8f8f solid;\n}\n\n.numpad[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 47.5vh;\n  right: 0;\n  height: 47.5vh;\n  width: 30vw;\n}\n\n.numpad-btn[_ngcontent-%COMP%] {\n  width: 7vw;\n  height: 9vh;\n  margin-top: 2.3vh;\n  margin-left: 2.3vw;\n  font-size: 1.5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYWxlcy11aS9yZWdpc3Rlci9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXHBvc1xcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzYWxlcy11aVxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NhbGVzLXVpL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NSOztBREdBO0VBQ0ksa0NBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FsZXMtdWkvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDV2aDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDk1dmg7XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xufVxuXG4udG90YWxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA0Ny41dmg7XG4gICAgd2lkdGg6IDMwdnc7XG59XG5cbi5zdWJ0b3RhbC13cmFwcGVyLCAuZGlzY291bnQtd3JhcHBlciwgLnRheC13cmFwcGVyLCAudG90YWwtd3JhcHBlciwgLmlucHV0LXdyYXBwZXIsIC5jaGFuZ2Utd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcuOTJ2aDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogIzM0M2E0MDtcbiAgICBib3JkZXItYm90dG9tOiAuMDF2aCByZ2IoOTcsIDk3LCA5Nykgc29saWQ7XG59XG5cbi5zdWJ0b3RhbC1sYWJlbCwgLmRpc2NvdW50LWxhYmVsLCAudGF4LWxhYmVsLCAudG90YWwtbGFiZWwsIC5jaGFuZ2UtbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiA3Ljkydmg7XG4gICAgZm9udC1zaXplOiAxLjI1dnc7XG59XG5cbi5zdWJ0b3RhbC1kYXRhLCAuZGlzY291bnQtZGF0YSwgLnRheC1kYXRhLCAuaW5wdXQtZGF0YSB7XG4gICAgbGluZS1oZWlnaHQ6IDcuOTJ2aDtcbiAgICBmb250LXNpemU6IDF2dztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEuNXZ3O1xufSBcblxuLnRvdGFsLWRhdGEsIC5pbnB1dC1kYXRhLCAuY2hhbmdlLWRhdGEge1xuICAgIGxpbmUtaGVpZ2h0OiA3Ljkydmg7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxLjN2dztcbn1cblxuLnBheW1lbnQtYnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNy45MnZoO1xuICAgIGJhY2tncm91bmQ6ICMzNDNhNDA7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgZm9udC1zaXplOiAxLjI1dnc7XG4gICAgfVxufVxuXG4uY2FzaC1idG4ge1xuICAgIGJvcmRlci1yaWdodDogLjAxdmggcmdiKDE0MywgMTQzLCAxNDMpIHNvbGlkO1xufVxuXG4ubnVtcGFkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0Ny41dmg7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA0Ny41dmg7XG4gICAgd2lkdGg6IDMwdnc7XG59XG5cbi5udW1wYWQtYnRuIHtcbiAgICB3aWR0aDogN3Z3O1xuICAgIGhlaWdodDogOXZoO1xuICAgIG1hcmdpbi10b3A6IDIuM3ZoO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjN2dztcbiAgICBmb250LXNpemU6IDEuNXZ3O1xufSIsIi5kaXNwbGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1dmg7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDk1dmg7XG4gIHdpZHRoOiAzMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xufVxuXG4udG90YWxzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA0Ny41dmg7XG4gIHdpZHRoOiAzMHZ3O1xufVxuXG4uc3VidG90YWwtd3JhcHBlciwgLmRpc2NvdW50LXdyYXBwZXIsIC50YXgtd3JhcHBlciwgLnRvdGFsLXdyYXBwZXIsIC5pbnB1dC13cmFwcGVyLCAuY2hhbmdlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcuOTJ2aDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xuICBib3JkZXItYm90dG9tOiAwLjAxdmggIzYxNjE2MSBzb2xpZDtcbn1cblxuLnN1YnRvdGFsLWxhYmVsLCAuZGlzY291bnQtbGFiZWwsIC50YXgtbGFiZWwsIC50b3RhbC1sYWJlbCwgLmNoYW5nZS1sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiA3Ljkydmg7XG4gIGZvbnQtc2l6ZTogMS4yNXZ3O1xufVxuXG4uc3VidG90YWwtZGF0YSwgLmRpc2NvdW50LWRhdGEsIC50YXgtZGF0YSwgLmlucHV0LWRhdGEge1xuICBsaW5lLWhlaWdodDogNy45MnZoO1xuICBmb250LXNpemU6IDF2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMS41dnc7XG59XG5cbi50b3RhbC1kYXRhLCAuaW5wdXQtZGF0YSwgLmNoYW5nZS1kYXRhIHtcbiAgbGluZS1oZWlnaHQ6IDcuOTJ2aDtcbiAgZm9udC1zaXplOiAydnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEuM3Z3O1xufVxuXG4ucGF5bWVudC1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNy45MnZoO1xuICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xufVxuLnBheW1lbnQtYnRucyBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogMTV2dztcbiAgZm9udC1zaXplOiAxLjI1dnc7XG59XG5cbi5jYXNoLWJ0biB7XG4gIGJvcmRlci1yaWdodDogMC4wMXZoICM4ZjhmOGYgc29saWQ7XG59XG5cbi5udW1wYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDcuNXZoO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA0Ny41dmg7XG4gIHdpZHRoOiAzMHZ3O1xufVxuXG4ubnVtcGFkLWJ0biB7XG4gIHdpZHRoOiA3dnc7XG4gIGhlaWdodDogOXZoO1xuICBtYXJnaW4tdG9wOiAyLjN2aDtcbiAgbWFyZ2luLWxlZnQ6IDIuM3Z3O1xuICBmb250LXNpemU6IDEuNXZ3O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-register",
                templateUrl: "./register.component.html",
                styleUrls: ["./register.component.scss"]
            }]
    }], function () { return [{ type: _services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"] }, { type: _services_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
/* harmony import */ var _items_display_items_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items-display/items-display.component */ "./src/app/components/sales-ui/items-display/items-display.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/components/sales-ui/register/register.component.ts");
/* harmony import */ var _menu_btns_menu_btns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-btns/menu-btns.component */ "./src/app/components/sales-ui/menu-btns/menu-btns.component.ts");






class SalesUIComponent {
    constructor(globals) {
        globals.page = "sales";
        console.log(globals.page);
    }
    ngOnInit() { }
}
SalesUIComponent.ɵfac = function SalesUIComponent_Factory(t) { return new (t || SalesUIComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"])); };
SalesUIComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalesUIComponent, selectors: [["app-sales-ui"]], decls: 3, vars: 0, template: function SalesUIComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-items-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-btns");
    } }, directives: [_items_display_items_display_component__WEBPACK_IMPORTED_MODULE_2__["ItemsDisplayComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _menu_btns_menu_btns_component__WEBPACK_IMPORTED_MODULE_4__["MenuBtnsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FsZXMtdWkvc2FsZXMtdWkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesUIComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-sales-ui",
                templateUrl: "./sales-ui.component.html",
                styleUrls: ["./sales-ui.component.scss"]
            }]
    }], function () { return [{ type: _globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


// This class is used for setting prices globally, so that you 
// don't need to repeatedly set prices for adding items. 
class Globals {
    constructor() {
        this.page = "";
        this.conePrice = 2.99;
        this.bowlPrice = 3.99;
        this.smDrinkPrice = .99;
        this.mdDrinkPrice = 1.49;
        this.lgDrinkPrice = 1.99;
    }
}
Globals.ɵfac = function Globals_Factory(t) { return new (t || Globals)(); };
Globals.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Globals, factory: Globals.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Globals, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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
class Item {
}


/***/ }),

/***/ "./src/app/models/sales.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/sales.model.ts ***!
  \***************************************/
/*! exports provided: Sales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sales", function() { return Sales; });
class Sales {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/item.model */ "./src/app/models/item.model.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);




class RegisterService {
    constructor() {
        this.itemList = [];
        this.subtotal = 0;
        this.tax = 0;
        this.total = 0;
        this.inputStr = "0";
        this.displayNum = ""; // Used after all conversions to display string
        this.inputNum = 0;
        this.change = 0;
        this.inProgress = true; // Used to determine if ongoing sale is taking place. If false, reset all register values.
        // Once sale is made, this turns true which displays cash change
        // amount if paid in cash.
        this.saleMade = false;
    }
    // Add new item to current order Item array
    addItem(name, quantity, unitPrice) {
        if (this.itemExists(name)) {
            this.increaseQuantity(name);
            this.refreshValues();
        }
        else {
            let newItem = new _models_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]();
            newItem.Id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
            newItem.Name = name;
            newItem.Quantity = quantity;
            newItem.UnitPrice = unitPrice;
            newItem.Subtotal = quantity * unitPrice;
            this.itemList.push(newItem);
            this.refreshValues();
        }
    }
    // Function to remove item from item array by id (used for "Remove" btn)
    removeItemById(id) {
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].Id === id) {
                this.itemList.splice(i, 1);
            }
        }
        this.refreshValues();
    }
    // Function to remove item from item array by name (private method used for decreaseQuantity)
    removeItemByName(itemName) {
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].Name === itemName) {
                this.itemList.splice(i, 1);
            }
        }
    }
    // Find item, then increment quantity.
    increaseQuantity(name) {
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].Name === name) {
                this.itemList[i].Quantity++;
                this.itemList[i].Subtotal =
                    this.itemList[i].Quantity * this.itemList[i].UnitPrice;
                this.refreshValues();
            }
        }
    }
    // Find item, then increment quantity.
    decreaseQuantity(name) {
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].Name === name) {
                // If quantity is 0, then remove it from the list.
                if (this.itemList[i].Quantity === 1) {
                    this.removeItemByName(name);
                    this.refreshValues();
                }
                else {
                    this.itemList[i].Quantity--;
                    this.itemList[i].Subtotal =
                        this.itemList[i].Quantity * this.itemList[i].UnitPrice;
                    this.refreshValues();
                }
            }
        }
    }
    // Returns true if item is already in basket.
    itemExists(name) {
        var exists = false;
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i].Name === name) {
                exists = true;
            }
        }
        return exists;
    }
    // Refresh subtotal, tax, and total values
    refreshValues() {
        // Refresh subtotals
        this.subtotal = 0;
        for (let i = 0; i < this.itemList.length; i++) {
            this.subtotal += this.itemList[i].Subtotal;
        }
        this.subtotalStr = (Math.round(this.subtotal * 100) / 100).toFixed(2);
        // Refresh taxes: MN sales tax is 6.875%
        this.tax = this.subtotal * 0.06875;
        this.taxStr = (Math.round(this.tax * 100) / 100).toFixed(2);
        // Refresh total
        this.total = this.subtotal + this.tax;
        this.totalStr = (Math.round(this.total * 100) / 100).toFixed(2);
        console.log(this.total + this.totalStr);
    }
    // Reset all values including array
    reset() {
        this.subtotal = 0;
        this.tax = 0;
        this.total = 0;
        this.inputNum = 0;
        this.change = 0;
        this.displayNum = "0.00";
        this.inputStr = "";
        for (let i = this.itemList.length - 1; i >= 0; i--) {
            this.itemList.pop();
        }
        for (let i = 0; i < this.itemList.length; i++) {
            console.log(this.itemList[i]);
        }
        this.refreshValues();
        this.inProgress = true;
    }
    // If in progress, reset all values including array. (used in menu-btn component)
    checkIfInProgress() {
        if (this.inProgress == false) {
            this.reset();
        }
    }
    // Method used to force string to show 2 digit decimal
    refreshNum() {
        this.inputNum = parseFloat(this.inputStr);
        this.displayNum = (Math.floor(this.inputNum * 100) / 100).toFixed(2);
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(); };
RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/sales.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/sales.service.ts ***!
  \*******************************************/
/*! exports provided: SalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesService", function() { return SalesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_sales_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/sales.model */ "./src/app/models/sales.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class SalesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://icecreampos.azurewebsites.net/api/Sales";
    }
    // Refresh and populate salesList
    refreshSalesList() {
        this.http
            .get(`${this.baseUrl}`)
            .toPromise()
            .then(res => (this.salesList = res));
    }
    // CRUD service method to create new sale
    createSale(total, paymentType, cash, change) {
        // Reset Sales database when sales reach 30 or more
        if (this.salesList.length > 30) {
            this.deleteAll();
        }
        // Set string date format
        var today = new Date();
        var date = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + " " + time;
        // Create new sale object
        let newSale = new _models_sales_model__WEBPACK_IMPORTED_MODULE_1__["Sales"]();
        newSale.date = dateTime;
        newSale.total = total;
        newSale.paymentType = paymentType;
        newSale.cash = cash;
        newSale.change = change;
        return this.http.post(`${this.baseUrl}`, newSale);
    }
    // CRUD service method to delete sale
    deleteSale(id) {
        return this.http.delete(`${this.baseUrl}` + "/" + id);
    }
    // CRUD service method to delete all sales iteratively
    deleteAll() {
        this.refreshSalesList();
        for (let i = 0; i < this.salesList.length; i++) {
            this.deleteSale(this.salesList[i].id).subscribe(data => console.log(data), error => console.log(error));
        }
        this.refresh();
    }
    refresh() {
        window.location.reload();
    }
}
SalesService.ɵfac = function SalesService_Factory(t) { return new (t || SalesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SalesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SalesService, factory: SalesService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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