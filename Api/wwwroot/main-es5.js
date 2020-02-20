function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- If not looking at project, show side nav.-->\r\n<ng-template [ngIf]=\"this.globals.onProject\" [ngIfElse]=\"sideNav\">\r\n    <router-outlet></router-outlet>\r\n</ng-template>\r\n\r\n<ng-template #sideNav>\r\n    <app-nav><router-outlet></router-outlet></app-nav>\r\n</ng-template>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCodeCodeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p class=\"promise\">\r\n  <span class=\"dark-blue\">public class</span>\r\n  <span class=\"grey\"> Recursion</span>\r\n  <span class=\"grey\"> &#123;</span><br />\r\n\r\n  <span class=\"dark-blue\"\r\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;static</span\r\n  >\r\n  <span class=\"grey\"> String</span><span class=\"teal\"> reverse</span>\r\n  <span class=\"grey\"> (String str) &#123;</span><br />\r\n  <span class=\"dark-blue\"\r\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if</span\r\n  >\r\n  <span class=\"grey\"> (str.isEmpty()) &#123;</span><br />\r\n  <span class=\"dark-blue\"\r\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return</span\r\n  >\r\n  <span class=\"grey\"> str</span><span class=\"dark-blue\">;</span><br />\r\n  <span class=\"grey\"\r\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span\r\n  >\r\n  <span class=\"dark-blue\"> else </span><span class=\"grey\">&#123;</span><br />\r\n  <span class=\"dark-blue\"\r\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return </span\r\n  ><span class=\"grey\"> reverse(str.substring(</span><span class=\"then\">1</span>\r\n  <span class=\"grey\">)) + str.charAt(</span><span class=\"then\">0</span\r\n  ><span class=\"dark-blue\"><span class=\"grey\">)</span>;</span><br />\r\n  <span class=\"grey\"\r\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span\r\n  ><br />\r\n  <span class=\"grey\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span\r\n  ><br /><br />\r\n  <span class=\"dark-blue\"\r\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public static void</span\r\n  >\r\n  <span class=\"teal\"> main</span>\r\n  <span class=\"grey\"> (String[ ] args) &#123;</span><br />\r\n  <span class=\"dark-blue\"\r\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.</span\r\n  ><span class=\"comment\">out</span><span class=\"grey\">.println(reverse(</span>\r\n  <span class=\"comment\"\r\n    >\"TIG ,partstooB ,LQSyM ,SSAS ,SSC ,LMTH ,sserpxE ,tpircSavaJ </span\r\n  ><br />\r\n\r\n  <span class=\"comment\"\r\n    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,ralugnA\r\n    ,gnirpS avaJ ,avaJ :SLLIKS\"</span\r\n  >\r\n  <span class=\"grey\">));</span><br />\r\n  <span class=\"grey\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span\r\n  ><br /><span class=\"grey\">}</span>\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\r\n  *ngIf=\"slideIn\"\r\n  [@slideSide]\r\n  class=\"jumbotron\"\r\n  [ngStyle]=\"{\r\n    width: '93%',\r\n    margin: 'auto',\r\n    padding: '5rem',\r\n    marginTop: '5rem'\r\n  }\"\r\n>\r\n  <h1>Let's Talk</h1>\r\n  <h2 class=\"mb-4\">\r\n    Send me an email or give me a call about inquiries or job opportunities!\r\n  </h2>\r\n  <mat-accordion>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <h5\r\n            [ngStyle]=\"{\r\n              fontSize: '1.65rem',\r\n              margin: '0rem'\r\n            }\"\r\n          >\r\n            Email\r\n          </h5>\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <p\r\n        [ngStyle]=\"{ cursor: 'pointer' }\"\r\n        onClick=\"window.open('mailto:tonyvu.dev@gmail.com')\"\r\n      >\r\n        tonyvu.dev@gmail.com\r\n      </p>\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <h5\r\n            [ngStyle]=\"{\r\n              fontSize: '1.65rem',\r\n              margin: '0rem'\r\n            }\"\r\n          >\r\n            Phone\r\n          </h5>\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <p>612-246-0527</p>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\r\n  *ngIf=\"slideIn\"\r\n  [@slideSide]\r\n  class=\"jumbotron\"\r\n  [ngStyle]=\"{\r\n    width: '93%',\r\n    margin: 'auto',\r\n    padding: '5rem',\r\n    marginTop: '5rem'\r\n  }\"\r\n>\r\n  <h1>Hello</h1>\r\n  <h2 [ngStyle]=\"{ margin: '0' }\" class=\"mb-1\">\r\n    I'm a Software Developer\r\n  </h2>\r\n  <h4>\r\n    Seeking internships and entry-level positions\r\n  </h4>\r\n  <hr class=\"my-4\" />\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <app-code></app-code>\r\n\r\n      <ng-template [ngIf]=\"running === true\" [ngIfElse]=\"off\">\r\n        <button\r\n          mat-raised-button\r\n          color=\"accent\"\r\n          [ngStyle]=\"{ width: '100%' }\"\r\n          (click)=\"runCode()\"\r\n        >\r\n          <i\r\n            class=\"fas fa-arrow-alt-circle-left\"\r\n            [ngStyle]=\"{\r\n              fontSize: '2rem',\r\n              marginRight: '.5rem',\r\n              paddingBottom: 'rem'\r\n            }\"\r\n          ></i>\r\n          RESET\r\n        </button>\r\n        <mat-progress-bar\r\n          mode=\"indeterminate\"\r\n          [ngStyle]=\"{ width: '100%', marginBottom: '3rem' }\"\r\n          [ngClass]=\"runStyle()\"\r\n        >\r\n        </mat-progress-bar>\r\n      </ng-template>\r\n\r\n      <ng-template #off>\r\n        <button\r\n          mat-raised-button\r\n          color=\"accent\"\r\n          [ngStyle]=\"{ width: '100%', backgroundColor: 'green' }\"\r\n          (click)=\"runCode()\"\r\n        >\r\n          <i\r\n            class=\"far fa-arrow-alt-circle-right\"\r\n            [ngStyle]=\"{\r\n              fontSize: '2rem',\r\n              marginRight: '.5rem',\r\n              paddingBottom: 'rem'\r\n            }\"\r\n          ></i>\r\n          RUN\r\n        </button>\r\n        <mat-progress-bar\r\n          mode=\"indeterminate\"\r\n          [ngStyle]=\"{ width: '100%', marginBottom: '3rem' }\"\r\n          [ngClass]=\"runStyle()\"\r\n        >\r\n        </mat-progress-bar>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 console\">\r\n      <div *ngIf=\"visible\" [@slideInOut]>\r\n        <span class=\"blink\">></span><br /><br /><span\r\n          class=\"str\"\r\n          [ngClass]=\"runStyle()\"\r\n        >\r\n          SKILLS: Java, Java Spring, Angular, JavaScript, Express, HTML, CSS, SASS,\r\n          MySQL, Bootstrap, GIT\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav\r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"false\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"(isHandset$ | async) === false\"\r\n  >\r\n    <mat-nav-list class=\"nav-list\">\r\n      <a href=\"\">\r\n        <mat-toolbar\r\n          [ngStyle]=\"{\r\n            justifyContent: 'center',\r\n            height: '10rem',\r\n            marginTop: '1rem'\r\n          }\"\r\n          ><img class=\"header-image\"\r\n        /></mat-toolbar>\r\n\r\n        <div class=\"header\">\r\n          <h2>Tony Vu</h2>\r\n          <h5 class=\"sub-header\">Software Developer</h5>\r\n        </div>\r\n      </a>\r\n      <a\r\n        mat-list-item\r\n        href=\"#\"\r\n        routerLink=\"\"\r\n        (click)=\"handSetState && drawer.close()\"\r\n      >\r\n        <i class=\"fas fa-home link-icon\"> </i>Home</a\r\n      >\r\n      <a\r\n        mat-list-item\r\n        href=\"#\"\r\n        routerLink=\"projects\"\r\n        (click)=\"handSetState && drawer.close()\"\r\n        ><i class=\"fas fa-folder-open link-icon\"> </i> Projects</a\r\n      >\r\n      <a\r\n        mat-list-item\r\n        href=\"#\"\r\n        routerLink=\"contact\"\r\n        (click)=\"handSetState && drawer.close()\"\r\n      >\r\n        <i class=\"far fa-address-card link-icon\"> </i>Contact</a\r\n      >\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\"\r\n      >\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <mat-toolbar color=\"primary\">\r\n        <h1>{{ globals.title }}</h1>\r\n\r\n        <span class=\"fill-remaining-space\"></span>\r\n\r\n        <button mat-button onClick=\"window.open('//github.com/tonyvu1')\">\r\n          <i\r\n            class=\"fab fa-github\"\r\n            [ngStyle]=\"{\r\n              fontSize: '2.5rem',\r\n              marginRight: '.5rem',\r\n              paddingBottom: '.4rem'\r\n            }\"\r\n          >\r\n          </i>\r\n          Github\r\n        </button>\r\n\r\n        <button mat-button onClick=\"window.open('//linkedin.com/in/tonyvu1/')\">\r\n          <i\r\n            class=\"fab fa-linkedin\"\r\n            [ngStyle]=\"{\r\n              fontSize: '2.5rem',\r\n              marginRight: '.5rem',\r\n              paddingBottom: '.4rem'\r\n            }\"\r\n          >\r\n          </i>\r\n          LinkedIn\r\n        </button>\r\n      </mat-toolbar>\r\n    </mat-toolbar>\r\n\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"projects-container\">\r\n  <div class=\"row projects-row\">\r\n    <div class=\"col-md-4\" *ngIf=\"slideIn\" [@project1]>\r\n      <mat-card class=\"project-card\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar>\r\n            <i\r\n              class=\"fab fa-java\"\r\n              [ngStyle]=\"{\r\n                fontSize: '5rem'\r\n              }\"\r\n            ></i>\r\n          </div>\r\n          <mat-card-title>Java Spring</mat-card-title>\r\n          <mat-card-subtitle>Angular - MySQL</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img mat-card-image src=\"../../assets/images/pos.JPG\" alt=\"Project 1\" />\r\n        <mat-card-content>\r\n          <mat-card-title>POS</mat-card-title>\r\n          <mat-card-subtitle>Business Tool</mat-card-subtitle>\r\n          <p class=\"description\">\r\n            This is my most recent project in progress. It is an online POS\r\n            system for a fictional restaurant business. So far, I've completed\r\n            the register UI and it is fully functional. I'm currently working on\r\n            sending completed orders to the database and being able to retrieve\r\n            and display all orders on the admin page. I'm developing the\r\n            frontend with the Angular, Java Spring Boot for the backend, and\r\n            MySQL for the database. The IDE's I'm using are Intellij and VS\r\n            Code.\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-button onClick=\"window.open('//posjava.herokuapp.com')\">\r\n            DEMO\r\n          </button>\r\n          <button mat-button onClick=\"window.open('//github.com/tonyvu1/pos')\">\r\n            CODE\r\n          </button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-4\" *ngIf=\"slideIn\" [@project2]>\r\n      <mat-card class=\"project-card\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar>\r\n            <i\r\n              class=\"fab fa-node-js\"\r\n              [ngStyle]=\"{\r\n                fontSize: '5rem'\r\n              }\"\r\n            ></i>\r\n          </div>\r\n          <mat-card-title>Express</mat-card-title>\r\n          <mat-card-subtitle>MongoDB - Bootstrap 4 - EJS</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img\r\n          mat-card-image\r\n          src=\"../../assets/images/meetingspace.jpg\"\r\n          alt=\"Project 2\"\r\n        />\r\n        <mat-card-content>\r\n          <mat-card-title>MeetingSpace</mat-card-title>\r\n          <mat-card-subtitle>Online Communication Service</mat-card-subtitle>\r\n          <p class=\"description\">\r\n            This is an online video/chat website I made with ExpressJS, EJS\r\n            templating system, and Bootstrap 4. I used MongoDB for my backend\r\n            database to store user account information, PassportJS middleware\r\n            for login authentication and protected routes, and Heruoku CLI for\r\n            deployment. I implemented and tested various realtime,\r\n            bi-directional communication interfaces such as WebRTC, Socket.IO,\r\n            Firebase, Twilio, and Scaledrone.\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button\r\n            mat-button\r\n            onClick=\"window.open('//meetingspace-tv.herokuapp.com')\"\r\n          >\r\n            DEMO\r\n          </button>\r\n          <button\r\n            mat-button\r\n            onClick=\"window.open('//github.com/tonyvu1/meetingspace')\"\r\n          >\r\n            CODE\r\n          </button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\" *ngIf=\"slideIn\" [@project3]>\r\n      <mat-card class=\"project-card\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar>\r\n            <i\r\n              class=\"fab fa-js-square\"\r\n              [ngStyle]=\"{\r\n                fontSize: '5rem'\r\n              }\"\r\n            ></i>\r\n          </div>\r\n          <mat-card-title>JavaScript</mat-card-title>\r\n          <mat-card-subtitle>HTML - SASS - PHP</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img\r\n          mat-card-image\r\n          src=\"../../assets/images/oldportfolio.jpg\"\r\n          alt=\"Project 3\"\r\n        />\r\n        <mat-card-content>\r\n          <mat-card-title>Original</mat-card-title>\r\n          <mat-card-subtitle>Portfolio</mat-card-subtitle>\r\n          <p class=\"description\">\r\n            This was my first portfolio website that I developed with vanilla\r\n            JavaScript, HTML, SASS, and a hint of PHP. I included it in my list\r\n            of projects because it taught me a lot of fundamental lessons about\r\n            web development, such as why it's a good idea to use styling\r\n            frameworks such as Bootstrap to save time on responsive UI\r\n            implementations, basic JS DOM element manipulation for UX, and\r\n            handling form submissions with PHP.\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button\r\n            mat-button\r\n            onClick=\"window.open('//old-portfolio.000webhostapp.com')\"\r\n          >\r\n            DEMO\r\n          </button>\r\n          <button\r\n            mat-button\r\n            onClick=\"window.open('//github.com/tonyvu1/old-portfolio')\"\r\n          >\r\n            CODE\r\n          </button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "projects",
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    }, {
      path: "contact",
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: false
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./globals */
    "./src/app/globals.ts");

    var AppComponent = function AppComponent(globals) {
      _classCallCheck(this, AppComponent);

      this.globals = globals;
      this.title = 'client';
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _code_code_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./code/code.component */
    "./src/app/code/code.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./globals */
    "./src/app/globals.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_19__["NavComponent"], _code_code_component__WEBPACK_IMPORTED_MODULE_24__["CodeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_25__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_26__["ContactComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [_globals__WEBPACK_IMPORTED_MODULE_27__["Globals"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/code/code.component.scss":
  /*!******************************************!*\
    !*** ./src/app/code/code.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCodeCodeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".promise {\n  font-size: 1.5rem;\n  font-weight: 400;\n}\n\n.dark-blue {\n  color: #3627ff;\n}\n\n.comment {\n  color: #cb29d1;\n}\n\n.teal {\n  color: #1699aa;\n}\n\n.green {\n  color: #1f832c;\n}\n\n.blue {\n  color: #3fb1d4;\n}\n\n.purple {\n  color: #ee01ff;\n}\n\n.grey {\n  color: #6e6e6e;\n}\n\n.then {\n  color: red;\n}\n\n.orange {\n  color: #bb7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29kZS9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXFJlcG9zXFxIdWJcXENsaWVudC9zcmNcXGFwcFxcY29kZVxcY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29kZS9jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0ksY0FBQTtBQ0NOOztBRElFO0VBQ0ksY0FBQTtBQ0ROOztBRElFO0VBQ0ksY0FBQTtBQ0ROOztBRElFO0VBQ0ksVUFBQTtBQ0ROOztBRElFO0VBQ0UsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29kZS9jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb21pc2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICAuZGFyay1ibHVlIHtcclxuICAgIGNvbG9yOiByZ2IoNTQsIDM5LCAyNTUpXHJcbiAgfVxyXG4gIFxyXG4gIC5jb21tZW50e1xyXG4gICAgY29sb3I6IHJnYigyMDMsIDQxLCAyMDkpO1xyXG4gIH1cclxuICBcclxuICAudGVhbCB7XHJcbiAgICBjb2xvcjogcmdiKDIyLCAxNTMsIDE3MCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmVlbiB7XHJcbiAgICBjb2xvcjogIHJnYigzMSwgMTMxLCA0NCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ibHVlIHtcclxuICAgICAgY29sb3I6IHJnYig2MywgMTc3LCAyMTIpO1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gIC5wdXJwbGUge1xyXG4gICAgICBjb2xvcjogcmdiKDIzOCwgMSwgMjU1KTtcclxuICB9XHJcbiAgXHJcbiAgLmdyZXkge1xyXG4gICAgICBjb2xvcjogcmdiKDExMCwgMTEwLCAxMTApO1xyXG4gIH1cclxuICBcclxuICAudGhlbiB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICB9XHJcbiAgXHJcbiAgLm9yYW5nZSB7XHJcbiAgICBjb2xvcjogcmdiKDE4NywgMTIxLCAwKTtcclxuICB9IiwiLnByb21pc2Uge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmRhcmstYmx1ZSB7XG4gIGNvbG9yOiAjMzYyN2ZmO1xufVxuXG4uY29tbWVudCB7XG4gIGNvbG9yOiAjY2IyOWQxO1xufVxuXG4udGVhbCB7XG4gIGNvbG9yOiAjMTY5OWFhO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogIzFmODMyYztcbn1cblxuLmJsdWUge1xuICBjb2xvcjogIzNmYjFkNDtcbn1cblxuLnB1cnBsZSB7XG4gIGNvbG9yOiAjZWUwMWZmO1xufVxuXG4uZ3JleSB7XG4gIGNvbG9yOiAjNmU2ZTZlO1xufVxuXG4udGhlbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5vcmFuZ2Uge1xuICBjb2xvcjogI2JiNzkwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/code/code.component.ts":
  /*!****************************************!*\
    !*** ./src/app/code/code.component.ts ***!
    \****************************************/

  /*! exports provided: CodeComponent */

  /***/
  function srcAppCodeCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeComponent", function () {
      return CodeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CodeComponent =
    /*#__PURE__*/
    function () {
      function CodeComponent() {
        _classCallCheck(this, CodeComponent);
      }

      _createClass(CodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CodeComponent;
    }();

    CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-code',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./code.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./code.component.scss */
      "./src/app/code/code.component.scss")).default]
    })], CodeComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.scss":
  /*!************************************************!*\
    !*** ./src/app/contact/contact.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contact-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.contact-container > * {\n  width: 100%;\n}\n\n.jumbotron {\n  box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px, rgba(156, 172, 172, 0.2) 0px 4px 4px, rgba(156, 172, 172, 0.2) 0px 8px 8px, rgba(156, 172, 172, 0.2) 0px 16px 16px, rgba(156, 172, 172, 0.2) 0px 32px 32px, rgba(156, 172, 172, 0.2) 0px 64px 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXFJlcG9zXFxIdWJcXENsaWVudC9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxvUEFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250YWN0LWNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICBib3gtc2hhZG93OiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDJweCAycHgsXHJcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDRweCA0cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggOHB4IDhweCxcclxuICAgIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMTZweCAxNnB4LFxyXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsXHJcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDY0cHggNjRweDtcclxufVxyXG4iLCIuY29udGFjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFjdC1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBib3gtc2hhZG93OiByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDJweCAycHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNHB4IDRweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA4cHggOHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDE2cHggMTZweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAzMnB4IDMycHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggNjRweCA2NHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(router, globals) {
        var _this = this;

        _classCallCheck(this, ContactComponent);

        this.router = router;
        this.slideIn = false;
        this.router.events.subscribe(function (ev) {
          if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            _this.slideInHome();
          }
        });
        globals.title = "Contact";
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "slideInHome",
        value: function slideInHome() {
          this.slideIn = !this.slideIn;
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-contact",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideSide", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(-120%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(0%)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(-100%)"
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/contact/contact.component.scss")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/globals.ts":
  /*!****************************!*\
    !*** ./src/app/globals.ts ***!
    \****************************/

  /*! exports provided: Globals */

  /***/
  function srcAppGlobalsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Globals", function () {
      return Globals;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Globals = function Globals() {
      _classCallCheck(this, Globals);

      this.title = 'test';
      this.onProject = false;
    };

    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Globals);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".console {\n  background-color: #3a3a3a;\n  height: 37rem;\n  padding: 2rem 3rem 0.5rem 3rem;\n  margin-bottom: 1rem;\n}\n\n.on {\n  visibility: visible;\n}\n\n.off {\n  visibility: hidden;\n}\n\n@keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n\n.blink {\n  color: white;\n  font-size: 2rem;\n  animation: blink 1.5s step-start 0s infinite;\n  -webkit-animation: blink 1.5s step-start 0s infinite;\n}\n\n.str {\n  color: white;\n  font-size: 2rem;\n  margin-top: 1rem;\n}\n\n.console-label {\n  color: white;\n  font-size: 2rem;\n}\n\n.jumbotron {\n  box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px, rgba(156, 172, 172, 0.2) 0px 4px 4px, rgba(156, 172, 172, 0.2) 0px 8px 8px, rgba(156, 172, 172, 0.2) 0px 16px 16px, rgba(156, 172, 172, 0.2) 0px 32px 32px, rgba(156, 172, 172, 0.2) 0px 64px 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXFJlcG9zXFxIdWJcXENsaWVudC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLFVBQUE7RUNDRjtBQUNGOztBRENBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxvREFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG9QQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uc29sZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xyXG4gIGhlaWdodDogMzdyZW07XHJcbiAgcGFkZGluZzogMnJlbSAzcmVtIC41cmVtIDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLm9uIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ub2ZmIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmsge1xyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG4uYmxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYW5pbWF0aW9uOiBibGluayAxLjVzIHN0ZXAtc3RhcnQgMHMgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDEuNXMgc3RlcC1zdGFydCAwcyBpbmZpbml0ZTtcclxufVxyXG5cclxuLnN0ciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY29uc29sZS1sYWJlbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAycHggMnB4LFxyXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDhweCA4cHgsXHJcbiAgICByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDE2cHggMTZweCxcclxuICAgIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMzJweCAzMnB4LFxyXG4gICAgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA2NHB4IDY0cHg7XHJcbn0iLCIuY29uc29sZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XG4gIGhlaWdodDogMzdyZW07XG4gIHBhZGRpbmc6IDJyZW0gM3JlbSAwLjVyZW0gM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm9uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLm9mZiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uYmxpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYW5pbWF0aW9uOiBibGluayAxLjVzIHN0ZXAtc3RhcnQgMHMgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxLjVzIHN0ZXAtc3RhcnQgMHMgaW5maW5pdGU7XG59XG5cbi5zdHIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmNvbnNvbGUtbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMnB4IDJweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDhweCA4cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMTZweCAxNnB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDMycHggMzJweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA2NHB4IDY0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router, globals) {
        var _this2 = this;

        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.running = false;
        this.userInput = "";
        this.visible = false;
        this.slideIn = false;
        this.router.events.subscribe(function (ev) {
          if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            _this2.slideInHome();
          }
        });
        globals.title = "Home";
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "runStyle",
        value: function runStyle() {
          var runStyle = {
            on: this.running === true,
            off: this.running === false
          };
          return runStyle;
        }
      }, {
        key: "runCode",
        value: function runCode() {
          this.running = !this.running;
          this.visible = !this.visible;
        }
      }, {
        key: "slideInHome",
        value: function slideInHome() {
          this.slideIn = !this.slideIn;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideInOut", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(-100%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(0%)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(-100%)"
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideSide", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(-120%)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(0%)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateX(-100%)"
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/nav/nav.component.scss":
  /*!****************************************!*\
    !*** ./src/app/nav/nav.component.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\n.fill-remaining-space {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.toolbar-flex {\n  -webkit-box-flex: 1;\n          flex: 1 0.5 auto;\n}\n\n.nav-list {\n  background: #eee;\n}\n\n.header-image {\n  background-image: url('trills.jpg');\n  background-size: cover;\n  padding: 5rem;\n  border-radius: 50%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.header {\n  text-align: center;\n  margin: 1rem;\n}\n\n.sub-header {\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.link-icon {\n  font-size: 2rem;\n  margin-right: 1rem;\n  padding-bottom: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcQk9TU1xcRGVza3RvcFxcUmVwb3NcXEh1YlxcQ2xpZW50L3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4udG9vbGJhci1mbGV4IHtcclxuICBmbGV4OiAxIDAuNSBhdXRvO1xyXG59XHJcblxyXG4ubmF2LWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcbi5oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpbGxzLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBhZGRpbmc6IDVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4uc3ViLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbn1cclxuXHJcbi5saW5rLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IC4zcmVtO1xyXG59XHJcbiIsIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4udG9vbGJhci1mbGV4IHtcbiAgZmxleDogMSAwLjUgYXV0bztcbn1cblxuLm5hdi1saXN0IHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLmhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpbGxzLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG4uc3ViLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLmxpbmstaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent(breakpointObserver, globals) {
        _classCallCheck(this, NavComponent);

        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        this.globals = globals;
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.breakpointObserver.observe(['(min-width: 600px)']).subscribe(function (state) {
            if (state.matches) {
              _this3.handSetState = false;
            } else {
              _this3.handSetState = true;
            }
          });
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }];
    };

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.scss */
      "./src/app/nav/nav.component.scss")).default]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/projects/projects.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/projects/projects.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".project-card {\n  background: #eee;\n  margin: 5rem auto 0;\n  box-shadow: rgba(156, 172, 172, 0.2) 0px 2px 2px, rgba(156, 172, 172, 0.2) 0px 4px 4px, rgba(156, 172, 172, 0.2) 0px 8px 8px, rgba(156, 172, 172, 0.2) 0px 16px 16px, rgba(156, 172, 172, 0.2) 0px 32px 32px, rgba(156, 172, 172, 0.2) 0px 64px 64px;\n}\n\n.projects-container {\n  width: 100%;\n}\n\n.projects-row {\n  margin: 0;\n}\n\n.description {\n  height: 15rem;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxCT1NTXFxEZXNrdG9wXFxSZXBvc1xcSHViXFxDbGllbnQvc3JjXFxhcHBcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb1BBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIG1hcmdpbjogNXJlbSBhdXRvIDA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAycHggMnB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDRweCA0cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggOHB4IDhweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCAxNnB4IDE2cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMzJweCAzMnB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDY0cHggNjRweDtcclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1yb3cge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBoZWlnaHQ6IDE1cmVtO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuIiwiLnByb2plY3QtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIG1hcmdpbjogNXJlbSBhdXRvIDA7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMnB4IDJweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA0cHggNHB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDhweCA4cHgsIHJnYmEoMTU2LCAxNzIsIDE3MiwgMC4yKSAwcHggMTZweCAxNnB4LCByZ2JhKDE1NiwgMTcyLCAxNzIsIDAuMikgMHB4IDMycHggMzJweCwgcmdiYSgxNTYsIDE3MiwgMTcyLCAwLjIpIDBweCA2NHB4IDY0cHg7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3RzLXJvdyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../globals */
    "./src/app/globals.ts");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent(router, globals) {
        var _this4 = this;

        _classCallCheck(this, ProjectsComponent);

        this.router = router;
        this.slideIn = false;
        this.router.events.subscribe(function (ev) {
          if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            _this4.slideInProjects();
          }
        });
        globals.title = "Projects";
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "slideInProjects",
        value: function slideInProjects() {
          this.slideIn = !this.slideIn;
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]
      }];
    };

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-projects",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("project1", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "0"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "1"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(-100%)"
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("project2", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "0"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms 100ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "1"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(-100%)"
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("project3", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "0"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms 200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: "1"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translateY(-100%)"
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/projects/projects.component.scss")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\BOSS\Desktop\Repos\Hub\Client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map