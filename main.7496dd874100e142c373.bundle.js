webpackJsonp([2],{

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(13);

// Angular 2
// rc2 workaround


// Environment Providers
var PROVIDERS = [
// common env directives
];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_16" /* enableProdMode */])();
    // Production
    _decorateModuleRef = function (modRef) {
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* disableDebugTools */])();
        return modRef;
    };
    PROVIDERS = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __spreadArray */])([], PROVIDERS);
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = __spreadArray([], PROVIDERS);
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __spreadArray */])([], PROVIDERS);


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _typeof;
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _classCallCheck;
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _createClass;
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

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaults;
/* harmony export (immutable) */ __webpack_exports__["b"] = hasXMLHttpRequest;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function hasXMLHttpRequest() {
  return typeof XMLHttpRequest === 'function' || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof(XMLHttpRequest)) === 'object';
}

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessDeniedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);


var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent() {
    }
    AccessDeniedComponent = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'access-denied',
            template: __webpack_require__(519)
        })
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);


var SimpleDemoComponent = /** @class */ (function () {
    function SimpleDemoComponent() {
        this.value = 15;
        this.str = 'Hello';
    }
    SimpleDemoComponent = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'simple-demo',
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewEncapsulation */].None,
            template: __webpack_require__(520)
        })
    ], SimpleDemoComponent);
    return SimpleDemoComponent;
}());



/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18NextValidationMessageModule; });
/* unused harmony export ValidationError */
/* unused harmony export ValidationErrorBuilder */
/* unused harmony export ValidationMessage */
/* unused harmony export ValidationMessageComponent */
/* unused harmony export ValidationMessageDirective */
/* unused harmony export ValidationMessageModule */
/* unused harmony export declarations */
/* unused harmony export providers */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_i18next__ = __webpack_require__(61);




class ValidationMessage {
    constructor(key = '', params = null) {
        this.key = '';
        this.key = key;
        this.params = params;
    }
}

class ValidationMessageComponent {
    constructor(formControlName, formGroupName) {
        this.formControlName = formControlName;
        this.for = null;
        this.acd = formControlName || formGroupName;
        if (this.acd != null)
            this.for = this.acd.control;
    }
    get standalone() {
        return this.acd == null;
    }
    get messages() {
        return this.getValidationMessages();
    }
    get firstMessage() {
        return this.messages[0] ? this.messages[0] : new ValidationMessage();
    }
    get controlPath() {
        if (this.acd == null)
            return '';
        return this.acd.path.join('.');
    }
    getValidationMessages() {
        if (this.for == null || this.for.errors == null)
            return [];
        let messages = [];
        let keys = Object.keys(this.for.errors);
        keys.forEach(k => {
            let errValue = this.for.errors[k];
            let params = null;
            if (errValue instanceof Object)
                params = errValue;
            else if (errValue !== true) {
                params = {};
                params[k] = errValue;
            }
            messages.push(new ValidationMessage(k, params));
        });
        return messages;
    }
}
ValidationMessageComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'validation-message',
                template: `
      <div class="error-container">{{ firstMessage.key + (firstMessage.params ? '(' + firstMessage.params + ')' : '') }}</div>
      <i class="error-icon"></i>
    `,
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
                styles: [`
      validation-message {
        display: none;
        width: 100%;
      }
      validation-message.standalone,
      .ng-dirty.ng-invalid + validation-message {
        display: block;
      }
    `]
            },] }
];
ValidationMessageComponent.ctorParameters = () => [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControlName */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Optional */] }] },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormGroupName */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Optional */] }] }
];
ValidationMessageComponent.propDecorators = {
    standalone: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */], args: ['class.standalone',] }],
    for: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */] }]
};

class ValidationMessageDirective {
    constructor(viewContainer, componentFactoryResolver, vmComp) {
        this.viewContainer = viewContainer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.vmComp = vmComp;
        this.validationMessageComponent = null;
    }
    ngAfterViewInit() {
        let factory = this.componentFactoryResolver.resolveComponentFactory(this.vmComp);
        this.ngOnDestroy();
        this.validationMessageComponent = this.viewContainer.createComponent(factory, null, this.viewContainer.injector);
        this.validationMessageComponent.changeDetectorRef.detectChanges();
    }
    ngOnDestroy() {
        if (this.validationMessageComponent) {
            this.validationMessageComponent.changeDetectorRef.detach();
        }
    }
}
ValidationMessageDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[validationMessage]'
            },] }
];
ValidationMessageDirective.ctorParameters = () => [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Type */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [ValidationMessageComponent,] }] }
];

class ValidationError {
    get error() {
        return this.control.getError(this.errorKey);
    }
}

class ValidationErrorBuilder {
    build(form, prevKey) {
        let validationErrors = [];
        let formControls = form.controls;
        for (const key in formControls) {
            if (formControls.hasOwnProperty(key)) {
                let fullKey = prevKey ? [prevKey, key].join('.') : key;
                let ctrl = formControls[key];
                if (ctrl instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]) {
                    if (!ctrl.valid) {
                        for (const erKey in ctrl.errors) {
                            if (ctrl.errors.hasOwnProperty(erKey)) {
                                let valError = new ValidationError();
                                valError.control = ctrl;
                                valError.controlKey = fullKey;
                                valError.errorKey = erKey;
                                validationErrors.push(valError);
                            }
                        }
                    }
                }
                else {
                    let group = ctrl;
                    validationErrors = validationErrors.concat(this.build(group, fullKey));
                }
            }
        }
        return validationErrors;
    }
}

const declarations$1 = [
    ValidationMessageDirective,
    ValidationMessageComponent,
];
const ɵ0$1 = ValidationMessageComponent;
class ValidationMessageModule {
}
ValidationMessageModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */], args: [{
                declarations: declarations$1,
                exports: declarations$1,
                entryComponents: [
                    ValidationMessageComponent
                ],
                providers: [
                    ValidationErrorBuilder,
                    {
                        provide: ValidationMessageComponent,
                        useValue: ɵ0$1
                    }
                ]
            },] }
];

class I18NextValidationMessageComponent extends ValidationMessageComponent {
    constructor(i18nextNamespace, formControlName, formGroupName) {
        super(formControlName, formGroupName);
        this.i18nextNamespace = i18nextNamespace;
        this.formControlName = formControlName;
        this.formGroupName = formGroupName;
        this.VALIDATION = 'validation';
    }
    get i18nextKey() {
        if (!this.firstMessage.key)
            return '';
        let specificKey = [this.VALIDATION, ['control_specific', this.controlPath, this.firstMessage.key].join('.')].join(':');
        let commonKey = [this.VALIDATION, this.firstMessage.key].join(':');
        let i18nextKeys = [];
        if (this.i18nextNamespace && this.i18nextNamespace !== this.VALIDATION) {
            i18nextKeys.push([this.i18nextNamespace, specificKey].join('.'));
            i18nextKeys.push([this.i18nextNamespace, commonKey].join('.'));
        }
        i18nextKeys.push(specificKey);
        i18nextKeys.push(commonKey);
        return i18nextKeys;
    }
}
I18NextValidationMessageComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'i18next-validation-message',
                template: `
      <div class="error-container">{{ i18nextKey | i18nextCap: firstMessage.params }}</div>
      <i class="error-icon"></i>
    `,
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
                styles: [`
      i18next-validation-message {
        display: none;
        width: 100%;
        position: relative;
      }
      i18next-validation-message.standalone,
      .ng-dirty.ng-invalid + i18next-validation-message {
        display: block;
      }
    `]
            },] }
];
I18NextValidationMessageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_2_angular_i18next__["a" /* I18NEXT_NAMESPACE */],] }] },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControlName */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Optional */] }] },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormGroupName */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Optional */] }] }
];

const declarations = [
    I18NextValidationMessageComponent,
];
const ɵ0 = I18NextValidationMessageComponent;
const providers = [
    {
        provide: ValidationMessageComponent,
        useValue: ɵ0
    }
];
class I18NextValidationMessageModule {
}
I18NextValidationMessageModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */], args: [{
                declarations: declarations,
                entryComponents: declarations,
                exports: [
                    declarations,
                    ValidationMessageModule
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2_angular_i18next__["d" /* I18NextModule */],
                    ValidationMessageModule
                ],
                providers: providers
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angular-validation-message.js.map


/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_AppModule__ = __webpack_require__(500);
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_AppModule__["a" /* AppModule */])
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["b" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
Object(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appInit */
/* unused harmony export localeIdFactory */
/* unused harmony export I18N_PROVIDERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_i18next__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_validation_message__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_i18next_browser_languagedetector__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_i18next_http_backend__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AppComponent__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__content_access_denied_access_denied_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__content_simple_demo_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environment__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routing_AppRouterModule__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__structure_app_error_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__structure_app_footer_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__structure_app_header_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__structure_header_controls_header_language_component__ = __webpack_require__(528);


















/*
 * Platform and Environment providers/directives/pipes
 */
var i18nextOptions = {
    whitelist: ['en', 'ru'],
    fallbackLng: 'en',
    debug: true,
    returnEmptyString: false,
    ns: [
        'translation',
        'validation',
        'error',
        // 'feature.rich_form'
    ],
    interpolation: {
        format: __WEBPACK_IMPORTED_MODULE_5_angular_i18next__["d" /* I18NextModule */].interpolationFormat(__WEBPACK_IMPORTED_MODULE_5_angular_i18next__["e" /* defaultInterpolationFormat */])
    },
    //backend plugin options
    backend: {
        loadPath: 'locales/{{lng}}.{{ns}}.json'
    },
    // lang detection plugin options
    detection: {
        // order and from where user language should be detected
        order: ['cookie'],
        // keys or params to lookup language from
        lookupCookie: 'lang',
        // cache user language on
        caches: ['cookie'],
        // optional expire and domain for set cookie
        cookieMinutes: 10080,
        cookieDomain: "romanchuk.github.io"
    }
};
function appInit(i18next) {
    return function () {
        var promise = i18next
            .use(__WEBPACK_IMPORTED_MODULE_8_i18next_http_backend__["a" /* default */])
            .use(__WEBPACK_IMPORTED_MODULE_7_i18next_browser_languagedetector__["a" /* default */])
            .init(i18nextOptions);
        return promise;
    };
}
function localeIdFactory(i18next) {
    return i18next.language;
}
var I18N_PROVIDERS = [
    {
        provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* APP_INITIALIZER */],
        useFactory: appInit,
        deps: [__WEBPACK_IMPORTED_MODULE_5_angular_i18next__["c" /* I18NEXT_SERVICE */]],
        multi: true
    },
    {
        provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* LOCALE_ID */],
        deps: [__WEBPACK_IMPORTED_MODULE_5_angular_i18next__["c" /* I18NEXT_SERVICE */]],
        useFactory: localeIdFactory
    },
];
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = /** @class */ (function () {
    function AppModule(appRef) {
        this.appRef = appRef;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store)
            return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        //this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        //delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        //const state = this.appState._state;
        //store.state = state;
        // recreate root elements
        store.disposeOldHosts = Object(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = Object(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        Object(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__AppComponent__["a" /* AppComponent */]],
            declarations: [
                //app
                __WEBPACK_IMPORTED_MODULE_9__AppComponent__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__structure_app_header_component__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__structure_app_footer_component__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__structure_header_controls_header_language_component__["a" /* HeaderLanguageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__structure_app_error_component__["a" /* AppErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_11__content_simple_demo_component__["a" /* SimpleDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__content_access_denied_access_denied_component__["a" /* AccessDeniedComponent */]
            ],
            imports: [
                //core
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormsModule */],
                //lib
                __WEBPACK_IMPORTED_MODULE_5_angular_i18next__["d" /* I18NextModule */].forRoot({
                // errorHandlingStrategy: StrictErrorHandlingStrategy
                }),
                //app
                __WEBPACK_IMPORTED_MODULE_13__routing_AppRouterModule__["a" /* AppRouterModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_validation_message__["a" /* I18NextValidationMessageModule */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__environment__["a" /* ENV_PROVIDERS */],
                I18N_PROVIDERS
            ],
            entryComponents: []
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */])("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["g" /* ApplicationRef */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_inherits__ = __webpack_require__(506);









var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};

var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Logger);

    this.init(concreteLogger, options);
  }

  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }, this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter = function () {
  function EventEmitter() {
    Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, EventEmitter);

    this.observers = {};
  }

  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;

      if (!listener) {
        delete this.observers[event];
        return;
      }

      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();

    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);

  if (value !== undefined) {
    return value;
  }

  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}
var isIE10 = typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;

function deepFind(obj, path) {
  var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  var paths = path.split(keySeparator);
  var current = obj;

  for (var i = 0; i < paths.length; ++i) {
    if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
      return undefined;
    }

    if (current[paths[i]] === undefined) {
      var j = 2;
      var p = paths.slice(i, i + j).join(keySeparator);
      var mix = current[p];

      while (mix === undefined && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }

      if (mix === undefined) return undefined;
      if (typeof mix === 'string') return mix;
      if (p && typeof mix[p] === 'string') return mix[p];
      var joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
      return undefined;
    }

    current = current[paths[i]];
  }

  return current;
}

var ResourceStore = function (_EventEmitter) {
  Object(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_inherits__["a" /* default */])(ResourceStore, _EventEmitter);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, ResourceStore);

    _this = Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(ResourceStore).call(this));

    if (isIE10) {
      EventEmitter.call(Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this));
    }

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    if (_this.options.ignoreJSONStructure === undefined) {
      _this.options.ignoreJSONStructure = true;
    }

    return _this;
  }

  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      var result = getPath(this.data, path);
      if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
      return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, pack, resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === 'v1') return Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, {}, this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

var checkedLoadedFor = {};

var Translator = function (_EventEmitter) {
  Object(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_inherits__["a" /* default */])(Translator, _EventEmitter);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Translator);

    _this = Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(Translator).call(this));

    if (isIE10) {
      EventEmitter.call(Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this));
    }

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS;

      if (nsSeparator && key.indexOf(nsSeparator) > -1) {
        var m = key.match(this.interpolator.nestingRegexp);

        if (m && m.length > 0) {
          return {
            key: key,
            namespaces: namespaces
          };
        }

        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;

      if (Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__["a" /* default */])(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {};
      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)];
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace + nsSeparator + key;
        }

        return key;
      }

      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        }

        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy[m] = this.translate(deepKey, Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options, {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy[m] === deepKey) copy[m] = res[m];
            }
          }

          res = copy;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var hasDefaultValue = Translator.hasDefaultValue(options);
        var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count) : '';
        var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;

        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }

        var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);

          if (keySeparator) {
            var fk = this.resolve(key, Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options, {
              keySeparator: false
            }));
            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
          }

          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k, fallbackValue) {
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? fallbackValue : res, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? fallbackValue : res, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (language) {
                _this2.pluralResolver.getSuffixes(language).forEach(function (suffix) {
                  send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }

        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
        if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
      }

      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation) this.interpolator.init(Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options, {
          interpolation: Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, this.options.interpolation, options.interpolation)
        }));
        var skipOnVariables = options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
        var nestBef;

        if (skipOnVariables) {
          var nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, this.options.interpolation.defaultVariables, data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);

        if (skipOnVariables) {
          var na = res.match(this.interpolator.nestingRegexp);
          var nestAft = na && na.length;
          if (nestBef < nestAft) options.nest = false;
        }

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));

            return null;
          }

          return _this3.translate.apply(_this3, args.concat([key]));
        }, options);
        if (options.interpolation) this.interpolator.reset();
      }

      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({
          i18nResolved: resolved
        }, options) : options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys];
      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;

          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;

            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }

          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKey = key;
            var finalKeys = [finalKey];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count);
              if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);
              if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context));
              if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
            }

            var possibleKey;

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }], [{
    key: "hasDefaultValue",
    value: function hasDefaultValue(options) {
      var prefix = 'defaultValue';

      for (var option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
          return true;
        }
      }

      return false;
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil = function () {
  function LanguageUtil(options) {
    Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, LanguageUtil);

    this.options = options;
    this.whitelist = this.options.supportedLngs || false;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }

  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === 'x') return null;
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase();
          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isWhitelisted",
    value: function isWhitelisted(code) {
      this.logger.deprecate('languageUtils.isWhitelisted', 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.');
      return this.isSupportedCode(code);
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;

      if (!codes) return null;
      var found;
      codes.forEach(function (code) {
        if (found) return;

        var cleanedLng = _this.formatLanguageCode(code);

        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
      });

      if (!found && this.options.supportedLngs) {
        codes.forEach(function (code) {
          if (found) return;

          var lngOnly = _this.getLanguagePartFromCode(code);

          if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
          found = _this.options.supportedLngs.find(function (supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
          });
        });
      }

      if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    this.rules = createRules();
  }

  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var rule = this.getRule(code);
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      return this.getSuffixes(code).map(function (suffix) {
        return key + suffix;
      });
    }
  }, {
    key: "getSuffixes",
    value: function getSuffixes(code) {
      var _this = this;

      var rule = this.getRule(code);

      if (!rule) {
        return [];
      }

      return rule.numbers.map(function (number) {
        return _this.getSuffix(code, number);
      });
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var _this2 = this;

      var rule = this.getRule(code);

      if (rule) {
        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx];

        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        };

        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (this.options.compatibilityJSON === 'v2') {
          return returnSuffix();
        } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }

        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }]);

  return PluralResolver;
}();

var Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }

  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
      this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = getPathWithDefaults(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path, undefined, lng, Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options, data, {
            interpolationkey: key
          })) : path;
        }

        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options, data, {
          interpolationkey: k
        }));
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function (todo) {
        replaces = 0;

        while (match = todo.regex.exec(str)) {
          value = handleFormat(match[1].trim());

          if (value === undefined) {
            if (typeof missingInterpolationHandler === 'function') {
              var temp = missingInterpolationHandler(str, match, options);
              value = typeof temp === 'string' ? temp : '';
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));

              value = '';
            }
          } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
            value = makeString(value);
          }

          var safeValue = todo.safeValue(value);
          str = str.replace(match[0], safeValue);

          if (skipOnVariables) {
            todo.regex.lastIndex += safeValue.length;
            todo.regex.lastIndex -= match[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }

          replaces++;

          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options);

      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;

      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0) return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, inheritedOptions, clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }

        delete clonedOptions.defaultValue;
        return key;
      }

      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        var doReduce = false;

        if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function (elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }

        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== 'string') return value;
        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        }

        if (doReduce) {
          value = formatters.reduce(function (v, f) {
            return _this2.format(v, f, options.lng, Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options, {
              interpolationkey: match[1].trim()
            }));
          }, value.trim());
        }

        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var Connector = function (_EventEmitter) {
  Object(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_inherits__["a" /* default */])(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Connector);

    _this = Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(Connector).call(this));

    if (isIE10) {
      EventEmitter.call(Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this));
    }

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0) pending.push(name);
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0) pending.push(name);
            if (toLoad.indexOf(name) < 0) toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces) toLoadLanguages.push(lng);
      });

      if (toLoad.length || pending.length) {
        this.queue.push({
          pending: pending,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: toLoad,
        pending: pending,
        toLoadLanguages: toLoadLanguages,
        toLoadNamespaces: toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }

      this.state[name] = err ? -1 : 2;
      var loaded = {};
      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        remove(q.pending, name);
        if (err) q.errors.push(err);

        if (q.pending.length === 0 && !q.done) {
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = [];

            if (q.loaded[l].length) {
              q.loaded[l].forEach(function (ns) {
                if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
              });
            }
          });
          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit('loaded', loaded);
      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 350;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {});
      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback();
        return null;
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }

      if (key === undefined || key === null || key === '') return;

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null, Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, options, {
          isUpdate: isUpdate
        }));
      }

      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    whitelist: false,
    nonExplicitWhitelist: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__["a" /* default */])(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__["a" /* default */])(args[2]) === 'object' || Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__["a" /* default */])(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: false
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  if (options.whitelist) {
    if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
      options.whitelist = options.whitelist.concat(['cimode']);
    }

    options.supportedLngs = options.whitelist;
  }

  if (options.nonExplicitWhitelist) {
    options.nonExplicitSupportedLngs = options.nonExplicitWhitelist;
  }

  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }

  return options;
}

function noop() {}

var I18n = function (_EventEmitter) {
  Object(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_inherits__["a" /* default */])(I18n, _EventEmitter);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, I18n);

    _this = Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(I18n).call(this));

    if (isIE10) {
      EventEmitter.call(Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this));
    }

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };

    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(_this, Object(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (options.whitelist && !options.supportedLngs) {
        this.logger.deprecate('whitelist', 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.');
      }

      if (options.nonExplicitWhitelist && !options.nonExplicitSupportedLngs) {
        this.logger.deprecate('whitelist', 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.');
      }

      this.options = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, get(), this.options, transformOptions(options));
      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      }

      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options);
        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      }

      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
      }

      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn('init: no languageDetector is used and no lng is defined');
      }

      var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
      storeApiChained.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store2;

          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);

          return _this2;
        };
      });
      var deferred = defer();

      var load = function load() {
        var finish = function finish(err, t) {
          if (_this2.isInitialized) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
          _this2.isInitialized = true;
          if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t);
          callback(err, t);
        };

        if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));

        _this2.changeLanguage(_this2.options.lng, finish);
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === 'string' ? language : this.language;
      if (typeof language === 'function') usedCallback = language;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, usedCallback);
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
      if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');

      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit('languageChanging', lng);

      var done = function done(err, l) {
        if (l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);

          _this4.translator.changeLanguage(l);

          _this4.isLanguageChangingTo = undefined;

          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        } else {
          _this4.isLanguageChangingTo = undefined;
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(lngs) {
        var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);

        if (l) {
          if (!_this4.language) {
            _this4.language = l;
            _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          }

          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(l, function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if (Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_typeof__["a" /* default */])(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        return _this5.t(key, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }

      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }

      var lng = this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === 'cimode') return true;

      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

        return loadState === -1 || loadState === 2;
      };

      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== undefined) return preResult;
      }

      if (this.hasResourceBundle(lng, ns)) return true;
      if (!this.services.backendConnector.backend) return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      });

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
    }
  }, {
    key: "createInstance",
    value: function createInstance() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      return new I18n(options, callback);
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, this.options, options, {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.services = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectSpread__["a" /* default */])({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }]);

  return I18n;
}(EventEmitter);

var i18next = new I18n();

/* harmony default export */ __webpack_exports__["a"] = (i18next);


/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectSpread;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defineProperty__ = __webpack_require__(503);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(__WEBPACK_IMPORTED_MODULE_0__defineProperty__["a" /* default */])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _defineProperty;
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

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _possibleConstructorReturn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_esm_typeof__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assertThisInitialized__ = __webpack_require__(211);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(__WEBPACK_IMPORTED_MODULE_0__helpers_esm_typeof__["a" /* default */])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_1__assertThisInitialized__["a" /* default */])(self);
}

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _getPrototypeOf;
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inherits;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setPrototypeOf__ = __webpack_require__(507);

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
  if (superClass) Object(__WEBPACK_IMPORTED_MODULE_0__setPrototypeOf__["a" /* default */])(subClass, superClass);
}

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _setPrototypeOf;
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ = __webpack_require__(210);



var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

var cookie = {
  create: function create(name, value, minutes, domain) {
    var expires;

    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      expires = '; expires=' + date.toGMTString();
    } else expires = '';

    domain = domain ? 'domain=' + domain + ';' : '';
    document.cookie = name + '=' + value + expires + ';' + domain + 'path=/';
  },
  read: function read(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
  },
  remove: function remove(name) {
    this.create(name, '', -1);
  }
};
var cookie$1 = {
  name: 'cookie',
  lookup: function lookup(options) {
    var found;

    if (options.lookupCookie && typeof document !== 'undefined') {
      var c = cookie.read(options.lookupCookie);
      if (c) found = c;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== 'undefined') {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain);
    }
  }
};

var querystring = {
  name: 'querystring',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var query = window.location.search.substring(1);
      var params = query.split('&');

      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf('=');

        if (pos > 0) {
          var key = params[i].substring(0, pos);

          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }

    return found;
  }
};

var hasLocalStorageSupport;

try {
  hasLocalStorageSupport = window !== 'undefined' && window.localStorage !== null;
  var testKey = 'i18next.translate.boo';
  window.localStorage.setItem(testKey, 'foo');
  window.localStorage.removeItem(testKey);
} catch (e) {
  hasLocalStorageSupport = false;
}

var localStorage = {
  name: 'localStorage',
  lookup: function lookup(options) {
    var found;

    if (options.lookupLocalStorage && hasLocalStorageSupport) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng) found = lng;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupLocalStorage && hasLocalStorageSupport) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }
};

var navigator$1 = {
  name: 'navigator',
  lookup: function lookup(options) {
    var found = [];

    if (typeof navigator !== 'undefined') {
      if (navigator.languages) {
        // chrome only; not an array, so can't use .push.apply instead of iterating
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }

      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }

      if (navigator.language) {
        found.push(navigator.language);
      }
    }

    return found.length > 0 ? found : undefined;
  }
};

var htmlTag = {
  name: 'htmlTag',
  lookup: function lookup(options) {
    var found;
    var htmlTag = options.htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);

    if (htmlTag && typeof htmlTag.getAttribute === 'function') {
      found = htmlTag.getAttribute('lang');
    }

    return found;
  }
};

var path = {
  name: 'path',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);

      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === 'number') {
          if (typeof language[options.lookupFromPathIndex] !== 'string') {
            return undefined;
          }

          found = language[options.lookupFromPathIndex].replace('/', '');
        } else {
          found = language[0].replace('/', '');
        }
      }
    }

    return found;
  }
};

var subdomain = {
  name: 'subdomain',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var language = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);

      if (language instanceof Array) {
        if (typeof options.lookupFromSubdomainIndex === 'number') {
          found = language[options.lookupFromSubdomainIndex].replace('http://', '').replace('https://', '').replace('.', '');
        } else {
          found = language[0].replace('http://', '').replace('https://', '').replace('.', '');
        }
      }
    }

    return found;
  }
};

function getDefaults() {
  return {
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    // cache user language
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'],
    //cookieMinutes: 10,
    //cookieDomain: 'myDomain'
    checkWhitelist: true
  };
}

var Browser =
/*#__PURE__*/
function () {
  function Browser(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Browser);

    this.type = 'languageDetector';
    this.detectors = {};
    this.init(services, options);
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__["a" /* default */])(Browser, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults()); // backwards compatibility

      if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
    }
  }, {
    key: "addDetector",
    value: function addDetector(detector) {
      this.detectors[detector.name] = detector;
    }
  }, {
    key: "detect",
    value: function detect(detectionOrder) {
      var _this = this;

      if (!detectionOrder) detectionOrder = this.options.order;
      var detected = [];
      detectionOrder.forEach(function (detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup = _this.detectors[detectorName].lookup(_this.options);

          if (lookup && typeof lookup === 'string') lookup = [lookup];
          if (lookup) detected = detected.concat(lookup);
        }
      });
      var found;
      detected.forEach(function (lng) {
        if (found) return;

        var cleanedLng = _this.services.languageUtils.formatLanguageCode(lng);

        if (!_this.options.checkWhitelist || _this.services.languageUtils.isWhitelisted(cleanedLng)) found = cleanedLng;
      });

      if (!found) {
        var fallbacks = this.i18nOptions.fallbackLng;
        if (typeof fallbacks === 'string') fallbacks = [fallbacks];
        if (!fallbacks) fallbacks = [];

        if (Object.prototype.toString.apply(fallbacks) === '[object Array]') {
          found = fallbacks[0];
        } else {
          found = fallbacks[0] || fallbacks["default"] && fallbacks["default"][0];
        }
      }

      return found;
    }
  }, {
    key: "cacheUserLanguage",
    value: function cacheUserLanguage(lng, caches) {
      var _this2 = this;

      if (!caches) caches = this.options.caches;
      if (!caches) return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
      caches.forEach(function (cacheName) {
        if (_this2.detectors[cacheName]) _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }
  }]);

  return Browser;
}();

Browser.type = 'languageDetector';

/* harmony default export */ __webpack_exports__["a"] = (Browser);


/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_js__ = __webpack_require__(510);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var getDefaults = function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/add/{{lng}}/{{ns}}',
    allowMultiLoading: false,
    parse: function parse(data) {
      return JSON.parse(data);
    },
    stringify: JSON.stringify,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return _defineProperty({}, key, fallbackValue || '');
    },
    request: __WEBPACK_IMPORTED_MODULE_1__request_js__["a" /* default */],
    reloadInterval: typeof window !== 'undefined' ? false : 60 * 60 * 1000,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    requestOptions: {
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default'
    }
  };
};

var Backend = function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Backend);

    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = 'backend';
    this.init(services, options, allOptions);
  }

  _createClass(Backend, [{
    key: "init",
    value: function init(services) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* defaults */])(options, this.options || {}, getDefaults());
      this.allOptions = allOptions;

      if (this.services && this.options.reloadInterval) {
        setInterval(function () {
          return _this.reload();
        }, this.options.reloadInterval);
      }
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages, namespaces, callback) {
      var loadPath = this.options.loadPath;

      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(languages, namespaces);
      }

      var url = this.services.interpolator.interpolate(loadPath, {
        lng: languages.join('+'),
        ns: namespaces.join('+')
      });
      this.loadUrl(url, callback, languages, namespaces);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      var loadPath = this.options.loadPath;

      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath([language], [namespace]);
      }

      var url = this.services.interpolator.interpolate(loadPath, {
        lng: language,
        ns: namespace
      });
      this.loadUrl(url, callback, language, namespace);
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback, languages, namespaces) {
      var _this2 = this;

      this.options.request(this.options, url, undefined, function (err, res) {
        if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback('failed loading ' + url + '; status code: ' + res.status, true);
        if (res && res.status >= 400 && res.status < 500) return callback('failed loading ' + url + '; status code: ' + res.status, false);
        if (!res && err && err.message && err.message.indexOf('Failed to fetch') > -1) return callback('failed loading ' + url + ': ' + err.message, true);
        if (err) return callback(err, false);
        var ret, parseErr;

        try {
          if (typeof res.data === 'string') {
            ret = _this2.options.parse(res.data, languages, namespaces);
          } else {
            ret = res.data;
          }
        } catch (e) {
          parseErr = 'failed parsing ' + url + ' to json';
        }

        if (parseErr) return callback(parseErr, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create(languages, namespace, key, fallbackValue, callback) {
      var _this3 = this;

      if (!this.options.addPath) return;
      if (typeof languages === 'string') languages = [languages];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      var finished = 0;
      var dataArray = [];
      var resArray = [];
      languages.forEach(function (lng) {
        var addPath = _this3.options.addPath;

        if (typeof _this3.options.addPath === 'function') {
          addPath = _this3.options.addPath(lng, namespace);
        }

        var url = _this3.services.interpolator.interpolate(addPath, {
          lng: lng,
          ns: namespace
        });

        _this3.options.request(_this3.options, url, payload, function (data, res) {
          finished += 1;
          dataArray.push(data);
          resArray.push(res);

          if (finished === languages.length) {
            if (callback) callback(dataArray, resArray);
          }
        });
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this4 = this;

      var _this$services = this.services,
          backendConnector = _this$services.backendConnector,
          languageUtils = _this$services.languageUtils,
          logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === 'cimode') return;
      var toLoad = [];

      var append = function append(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function (l) {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };

      append(currentLanguage);
      if (this.allOptions.preload) this.allOptions.preload.forEach(function (l) {
        return append(l);
      });
      toLoad.forEach(function (lng) {
        _this4.allOptions.ns.forEach(function (ns) {
          backendConnector.read(lng, ns, 'read', null, null, function (err, data) {
            if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);

  return Backend;
}();

Backend.type = 'backend';
/* harmony default export */ __webpack_exports__["a"] = (Backend);

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getFetch_cjs__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getFetch_cjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__getFetch_cjs__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var fetchApi;

if (typeof fetch === 'function') {
  if (typeof global !== 'undefined' && global.fetch) {
    fetchApi = global.fetch;
  } else if (typeof window !== 'undefined' && window.fetch) {
    fetchApi = window.fetch;
  }
}

var XmlHttpRequestApi;

if (__WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* hasXMLHttpRequest */]) {
  if (typeof global !== 'undefined' && global.XMLHttpRequest) {
    XmlHttpRequestApi = global.XMLHttpRequest;
  } else if (typeof window !== 'undefined' && window.XMLHttpRequest) {
    XmlHttpRequestApi = window.XMLHttpRequest;
  }
}

var ActiveXObjectApi;

if (typeof ActiveXObject === 'function') {
  if (typeof global !== 'undefined' && global.ActiveXObject) {
    ActiveXObjectApi = global.ActiveXObject;
  } else if (typeof window !== 'undefined' && window.ActiveXObject) {
    ActiveXObjectApi = window.ActiveXObject;
  }
}

if (!fetchApi && __WEBPACK_IMPORTED_MODULE_1__getFetch_cjs__ && !XmlHttpRequestApi && !ActiveXObjectApi) fetchApi = __WEBPACK_IMPORTED_MODULE_1__getFetch_cjs__["default"] || __WEBPACK_IMPORTED_MODULE_1__getFetch_cjs__;
if (typeof fetchApi !== 'function') fetchApi = undefined;

var addQueryString = function addQueryString(url, params) {
  if (params && _typeof(params) === 'object') {
    var queryString = '';

    for (var paramName in params) {
      queryString += '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(params[paramName]);
    }

    if (!queryString) return url;
    url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
  }

  return url;
};

var requestWithFetch = function requestWithFetch(options, url, payload, callback) {
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }

  var headers = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* defaults */])({}, typeof options.customHeaders === 'function' ? options.customHeaders() : options.customHeaders);
  if (payload) headers['Content-Type'] = 'application/json';
  fetchApi(url, Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* defaults */])({
    method: payload ? 'POST' : 'GET',
    body: payload ? options.stringify(payload) : undefined,
    headers: headers
  }, typeof options.requestOptions === 'function' ? options.requestOptions(payload) : options.requestOptions)).then(function (response) {
    if (!response.ok) return callback(response.statusText || 'Error', {
      status: response.status
    });
    response.text().then(function (data) {
      callback(null, {
        status: response.status,
        data: data
      });
    }).catch(callback);
  }).catch(callback);
};

var requestWithXmlHttpRequest = function requestWithXmlHttpRequest(options, url, payload, callback) {
  if (payload && _typeof(payload) === 'object') {
    payload = addQueryString('', payload).slice(1);
  }

  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }

  try {
    var x;

    if (XmlHttpRequestApi) {
      x = new XmlHttpRequestApi();
    } else {
      x = new ActiveXObjectApi('MSXML2.XMLHTTP.3.0');
    }

    x.open(payload ? 'POST' : 'GET', url, 1);

    if (!options.crossDomain) {
      x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }

    x.withCredentials = !!options.withCredentials;

    if (payload) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    if (x.overrideMimeType) {
      x.overrideMimeType('application/json');
    }

    var h = options.customHeaders;
    h = typeof h === 'function' ? h() : h;

    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }

    x.onreadystatechange = function () {
      x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
        status: x.status,
        data: x.responseText
      });
    };

    x.send(payload);
  } catch (e) {
    console && console.log(e);
  }
};

var request = function request(options, url, payload, callback) {
  if (typeof payload === 'function') {
    callback = payload;
    payload = undefined;
  }

  callback = callback || function () {};

  if (fetchApi) {
    return requestWithFetch(options, url, payload, callback);
  }

  if (__WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* hasXMLHttpRequest */] || typeof ActiveXObject === 'function') {
    return requestWithXmlHttpRequest(options, url, payload, callback);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (request);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(56)))

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var fetchApi
if (typeof fetch === 'function') {
  if (typeof global !== 'undefined' && global.fetch) {
    fetchApi = global.fetch
  } else if (typeof window !== 'undefined' && window.fetch) {
    fetchApi = window.fetch
  }
}

if ("function" !== 'undefined' && (typeof window === 'undefined' || typeof window.document === 'undefined')) {
  var f = fetchApi || __webpack_require__(512)
  if (f.default) f = f.default
  exports.default = f
  module.exports = exports.default
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_i18next__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_assets_ng_validation_css__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_assets_ng_validation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_assets_ng_validation_css__);







var AppComponent = /** @class */ (function () {
    function AppComponent(router, title, i18NextService) {
        var _this = this;
        this.router = router;
        this.title = title;
        this.i18NextService = i18NextService;
        this.loading = true;
        this.start = 0;
        // spinner/loader subscription
        router.events
            .subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
        // page title subscription
        // https://toddmotto.com/dynamic-page-titles-angular-2-router-events#final-code
        this.router.events
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["c" /* filter */])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]; }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function () { return _this.router.routerState.root; }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["c" /* filter */])(function (route) { return route.outlet === 'primary'; }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["i" /* mergeMap */])(function (route) { return route.data; }))
            .subscribe(function (event) { return _this.updatePageTitle(event['title']); });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Default test: ' + this.i18NextService.t('not_exists', 'default'));
        console.log('Initial App State', 0);
        this.i18NextService.events.languageChanged.subscribe(function (lang) {
            var root = _this.router.routerState.root;
            if (root != null && root.firstChild != null) {
                var data = root.firstChild.data;
                _this.updatePageTitle(data && data.value && data.value.title);
            }
        });
    };
    // http://stackoverflow.com/questions/37069609/show-loading-screen-when-navigating-between-routes-in-angular-2
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* NavigationStart */]) {
            // this.start = performance.now();
            this.loading = true;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]
            || event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationCancel */]
            || event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationError */]) {
            this.loading = false;
            // console.log(performance.now() - this.start);
        }
    };
    AppComponent.prototype.updatePageTitle = function (title) {
        var newTitle = title || 'application_title';
        console.log('Setting page title:', newTitle);
        this.title.setTitle(newTitle);
        console.log('Setting page title end:', newTitle);
    };
    AppComponent = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app',
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewEncapsulation */].None,
            template: __webpack_require__(518)
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __param */])(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4_angular_i18next__["c" /* I18NEXT_SERVICE */])),
        Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */])("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */], Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(515);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(517)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./ng-validation.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./ng-validation.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(516)();
// imports


// module
exports.push([module.i, ".form-control.ng-dirty.ng-invalid,.ng-dirty.ng-invalid:focus,input.ng-dirty.ng-invalid,textarea.ng-dirty.ng-invalid{background-color:#fdeded;border-color:#d22630;-webkit-box-shadow:none;box-shadow:none}.form-group .error-container{display:block}.error-container{color:#d22630;padding-top:2px}checkbox.ng-invalid .custom-control-indicator,datepicker.ng-invalid.ng-dirty .select2-container .select2-selection,div.ng-invalid.ng-dirty.form-group-valid .custom-control-indicator,div.ng-invalid.ng-dirty.form-group-valid .select2-container .select2-selection,flatpickr.ng-invalid.ng-dirty .form-control,multiplecheckbox.ng-invalid.ng-dirty .custom-control-indicator,radio-button.ng-dirty.ng-invalid .custom-control-indicator{border-color:#d22630;background-color:#fdeded}checkbox+checkbox,radio-button+radio-button{margin-left:15px}", ""]);

// exports


/***/ }),

/***/ 516:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 517:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper\">\r\n    <div class=\"app-loader\" *ngIf=\"loading\">\r\n        <div class=\"loader-pusher\">\r\n            <div class=\"spinner\">\r\n                <div class=\"spinner-tail\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-header></app-header>\r\n    <main>\r\n        <div class=\"app-body\">\r\n            <div class=\"container\">\r\n                <hr />\r\n                <p class=\"lead\">{{ 'intro' | i18next }}</p>\r\n                <hr />\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n    </main>\r\n    <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header\">\r\n    <h2>{{ 'error:access_denied' | i18next: { case: 'cap' } }}</h2>\r\n</div>\r\n"

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br/>\r\n    <h1>{{ 'simple_demo' | i18nextCap }}</h1>\r\n    <br/>\r\n    <hr/>\r\n    <div class=\"row\">\r\n        <h4>\r\n            {{ 'parametrized_string_title' | i18nextCap }}\r\n        </h4>\r\n        <div class=\"input-group\">\r\n            <div class=\"form-inline\">\r\n                <div class=\"form-group\">\r\n                    <span>{{ 'parametrized_string' | i18next: { value: value, str: str } }}</span>\r\n                </div>\r\n                <div class=\"form-group mx-sm-3\">\r\n                    <input name=\"number\" type=\"number\" class=\"form-control\" [(ngModel)]=\"value\">\r\n                </div>\r\n                <div class=\"form-group mx-sm-3\">\r\n                    <input name=\"str\" type=\"text\" class=\"form-control\" [(ngModel)]=\"str\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <hr/>\r\n    <div class=\"row\">\r\n        <h4>\r\n            {{ 'case_demo_title' | i18nextCap }}\r\n        </h4>\r\n        <div class=\"form-inline\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>original</th>\r\n                        <th>capitalize</th>\r\n                        <th>lowercase</th>\r\n                        <th>uppercase</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>{{ 'case_demo' | i18next }}</td>\r\n                        <td>{{ 'case_demo' | i18next: { format: 'capitalize' } }}</td>\r\n                        <td>{{ 'case_demo' | i18next: { format: 'lowercase' } }}</td>\r\n                        <td>{{ 'case_demo' | i18next | i18nextFormat: 'uppercase' }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_i18next__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_simple_demo_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_access_denied_access_denied_component__ = __webpack_require__(213);






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__content_simple_demo_component__["a" /* SimpleDemoComponent */] },
    {
        path: 'rich_form',
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(0).then((function (require) { resolve(__webpack_require__(530)['RichFormFeatureModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); },
        data: {
            i18nextNamespaces: ['feature.rich_form']
        },
        resolve: {
            i18next: __WEBPACK_IMPORTED_MODULE_1_angular_i18next__["b" /* I18NEXT_NAMESPACE_RESOLVER */]
        }
    },
    { path: 'denied', component: __WEBPACK_IMPORTED_MODULE_5__content_access_denied_access_denied_component__["a" /* AccessDeniedComponent */], data: { title: 'error:access_denied' } }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* RouterModule */]
            ],
            providers: []
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);


var AppErrorComponent = /** @class */ (function () {
    function AppErrorComponent() {
        this.showed = false;
    }
    AppErrorComponent.prototype.toggle = function () {
        this.showed = !this.showed;
    };
    AppErrorComponent.prototype.close = function () {
        this.showed = false;
    };
    AppErrorComponent.prototype.reload = function () {
        document.location.href = document.location.protocol + '//' + document.location.host;
    };
    AppErrorComponent = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-error',
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewEncapsulation */].None,
            template: __webpack_require__(523)
        })
    ], AppErrorComponent);
    return AppErrorComponent;
}());



/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<div class=\"error-page\">\r\n    <div class=\"viewport\">\r\n        <div class=\"page-404\">\r\n            <div class=\"cols\">\r\n                <div class=\"col\">\r\n                    <div class=\"error-code\">{{ 'error:oops' | i18next }}</div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <div class=\"error-description\">{{ 'error:error_occured_onload' | i18next }}</div>\r\n                    <ul>\r\n                        <li>\r\n                            <p>{{ 'error:contact_administrator_or_try_to_clear_browser_chache_and_restart_application' | i18next }}</p>\r\n                            <button class=\"btn btn-success btn-block\" (click)=\"reload()\">{{ 'error:restart' | i18next }}</button>\r\n                            <div class=\"popover-wrapper\">\r\n                                <div *ngIf=\"showed\">\r\n                                    <svg class=\"icon\" (click)=\"close()\">\r\n                                        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#cross\"></use>\r\n                                    </svg>\r\n                                    <div class=\"popover-header\">{{ 'error:cookies.how_to' | i18next }}</div>\r\n                                    <div class=\"popover-body\">{{ 'error:cookies.clear_chrome' | i18next }}</div>\r\n                                </div>\r\n                                <svg class=\"icon icon-question-circle-black\" placement=\"right\" (click)=\"toggle()\">\r\n                                    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#question-circle-black\"></use>\r\n                                </svg>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <p>{{ 'error:need_help_write_to_us' | i18next }}</p>\r\n                            <a class=\"link text-sm\" href=\"#\">\r\n                                {{ 'error:write' | i18next }}\r\n                                <svg class=\"icon icon_link-arrow\">\r\n                                    <use xlink:href=\"assets/images/icons.svg#link-arrow\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"></use>\r\n                                </svg>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);


var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
        this.angularVersion = '0.0.0';
        this.i18nextVersion = '0.0.0';
        this.angularVersion = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* VERSION */].full;
        this.i18nextVersion = '20.2.2'; // todo: get version automaticaly
    }
    AppFooterComponent = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewEncapsulation */].None,
            template: __webpack_require__(525)
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */])("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <nav class=\"fixed-bottom navbar navbar-expand-lg navbar-light\" style=\"background-color: #f2f2f2;\">\r\n        <div><a href=\"https://angular.io\" target=\"_blank\">angular</a> v.{{angularVersion}} / <a href=\"https://www.i18next.com\" target=\"_blank\">i18next</a> v.{{i18nextVersion}}</div>\r\n\r\n\r\n        <iframe src=\"https://ghbtns.com/github-btn.html?user=romanchuk&repo=angular-i18next&type=star&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe>\r\n    </nav>\r\n</footer>"

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);


var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-header',
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewEncapsulation */].None,
            template: __webpack_require__(527)
        })
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: #f2f2f2;\">\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <a class=\"navbar-brand\" href=\"#\">\n                <img src=\"assets/logo.svg\" width=\"80\" height=\"40\" class=\"d-inline-block align-top\" alt=\"\" />\n            </a>\n            <b>{{ 'application_title' | i18next }}</b>\n            <ul class=\"nav nav-pills\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/\">{{ 'simple_demo' | i18nextCap }}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/rich_form\">{{ 'rich_form_title' | i18nextCap }}</a>\n                </li>\n            </ul>\n        </div>\n        <header-language></header-language>\n    </nav>\n</header>\n"

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLanguageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_i18next__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(13);



var HeaderLanguageComponent = /** @class */ (function () {
    function HeaderLanguageComponent(i18NextService) {
        this.i18NextService = i18NextService;
        this.language = 'ru';
        this.languages = ['ru', 'en'];
    }
    HeaderLanguageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18NextService.events.initialized.subscribe(function (e) {
            if (e) {
                _this.updateState(_this.i18NextService.language);
            }
        });
    };
    HeaderLanguageComponent.prototype.changeLanguage = function (lang) {
        var _this = this;
        if (lang !== this.i18NextService.language) {
            this.i18NextService.changeLanguage(lang).then(function (x) {
                _this.updateState(lang);
                document.location.reload();
            });
        }
    };
    HeaderLanguageComponent.prototype.updateState = function (lang) {
        this.language = lang;
    };
    HeaderLanguageComponent = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'header-language',
            encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewEncapsulation */].None,
            template: __webpack_require__(529),
            styles: ["\n\n  "]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __param */])(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_angular_i18next__["c" /* I18NEXT_SERVICE */])),
        Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */])("design:paramtypes", [Object])
    ], HeaderLanguageComponent);
    return HeaderLanguageComponent;
}());



/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <ng-template ngFor let-lang [ngForOf]=\"languages\" let-i=\"index\">\r\n        <a *ngIf=\"language !== lang\" href=\"javascript:void(0)\" class=\"link lang-item {{lang}}\" (click)=\"changeLanguage(lang)\">{{ '_languages.' + lang | i18nextCap }}</a>\r\n        <span *ngIf=\"language === lang\" class=\"current lang-item {{lang}}\">{{ '_languages.' + lang | i18nextCap }}</span>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export I18NEXT_ERROR_HANDLING_STRATEGY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18NEXT_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return I18NEXT_NAMESPACE_RESOLVER; });
/* unused harmony export I18NEXT_SCOPE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return I18NEXT_SERVICE; });
/* unused harmony export I18NextCapPipe */
/* unused harmony export I18NextEagerPipe */
/* unused harmony export I18NextFormatPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return I18NextModule; });
/* unused harmony export I18NextPipe */
/* unused harmony export I18NextService */
/* unused harmony export I18NextTitle */
/* unused harmony export NativeErrorHandlingStrategy */
/* unused harmony export StrictErrorHandlingStrategy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultInterpolationFormat; });
/* unused harmony export i18nextNamespaceResolverFactory */
/* unused harmony export resolver */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_i18next__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(77);







const I18NEXT_SCOPE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* InjectionToken */]('I18NEXT_SCOPE');
const I18NEXT_NAMESPACE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* InjectionToken */]('I18NEXT_NAMESPACE');
const I18NEXT_SERVICE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* InjectionToken */]('I18NEXT_SERVICE');
const I18NEXT_NAMESPACE_RESOLVER = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* InjectionToken */]('I18NEXT_NAMESPACE_RESOLVER');
const I18NEXT_ERROR_HANDLING_STRATEGY = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* InjectionToken */]('I18NEXT_ERROR_HANDLING_STRATEGY');

class I18NextPipe {
    constructor(translateI18Next, ns, scope) {
        this.translateI18Next = translateI18Next;
        this.ns = ns;
        this.scope = scope;
    }
    transform(key, options) {
        options = this.prepareOptions(options);
        let i18nOpts = this.translateI18Next.options;
        if (options.prependScope === undefined || options.prependScope === true) {
            if (this.scope) {
                key = this.prependScope(key, this.scope, i18nOpts.keySeparator, i18nOpts.nsSeparator);
            }
        }
        if (options.prependNamespace === undefined || options.prependNamespace === true) {
            if (this.ns) {
                key = this.prependNamespace(key, this.ns, i18nOpts.nsSeparator);
            }
        }
        let result = this.translateI18Next.t(key, options);
        if (options.format) {
            if (result) {
                result = this.translateI18Next
                    .format(result, options.format, this.translateI18Next.language);
            }
        }
        return result;
    }
    prependScope(key, scope, keySeparator, nsSeparator) {
        const nsSep = nsSeparator || '';
        const keySep = keySeparator || '';
        if (typeof (key) === 'string') {
            key = [key];
        }
        if (typeof (scope) === 'string') {
            scope = [scope];
        }
        let keysWithScope = [];
        for (let i = 0; i < key.length; i++) {
            const k = key[i];
            if (!this.keyContainsNsSeparator(k, nsSep)) { // Do not set scope, if key contains a namespace
                keysWithScope.push(...scope.map(sc => this.joinStrings(keySep, sc, k)));
            }
            keysWithScope.push(k);
        }
        return keysWithScope;
    }
    prependNamespace(key, ns, nsSeparator) {
        const nsSep = nsSeparator || '';
        if (typeof (key) === 'string') {
            key = [key];
        }
        if (typeof (ns) === 'string') {
            ns = [ns];
        }
        let keysWithNamespace = [];
        for (let i = 0; i < key.length; i++) {
            const k = key[i];
            if (!this.keyContainsNsSeparator(k, nsSep)) { // Do not set namespace, if key contains a namespace
                keysWithNamespace.push(...ns.map(n => this.joinStrings(nsSep, n, k)));
            }
            keysWithNamespace.push(k);
        }
        return keysWithNamespace;
    }
    joinStrings(separator, ...str) {
        return [...str].join(separator);
    }
    keyContainsNsSeparator(key, nsSeparator) {
        return key.indexOf(nsSeparator) !== -1;
    }
    prepareOptions(options) {
        options = options || {};
        if (options.context != null)
            options.context = options.context.toString();
        return options;
    }
}
I18NextPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */], args: [{
                name: 'i18next'
            },] }
];
I18NextPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [I18NEXT_SERVICE,] }] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [I18NEXT_NAMESPACE,] }] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [I18NEXT_SCOPE,] }] }
];

class I18NextCapPipe extends I18NextPipe {
    constructor(translateI18Next, ns, scope) {
        super(translateI18Next, ns, scope);
    }
    transform(key, options) {
        options = options || {};
        options.format = 'cap';
        return super.transform(key, options);
    }
}
I18NextCapPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */], args: [{
                name: 'i18nextCap'
            },] }
];
I18NextCapPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [I18NEXT_SERVICE,] }] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [I18NEXT_NAMESPACE,] }] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [I18NEXT_SCOPE,] }] }
];

class NativeErrorHandlingStrategy {
    handle(resolve, reject) {
        return (err, t) => {
            let result = {
                err: err,
                t: t
            };
            resolve(result);
        };
    }
}
class StrictErrorHandlingStrategy {
    handle(resolve, reject) {
        return (err, t) => {
            let result = {
                err: err,
                t: t
            };
            if (!err) {
                resolve(result);
                return;
            }
            reject(err);
        };
    }
}

class I18NextFormatPipe {
    constructor(translateI18Next) {
        this.translateI18Next = translateI18Next;
    }
    transform(value, options) {
        let opts = typeof (options) === 'string' ? { format: options } : options;
        return this.translateI18Next.format(value, opts.format, opts.lng);
    }
}
I18NextFormatPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */], args: [{
                name: 'i18nextFormat'
            },] }
];
I18NextFormatPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [I18NEXT_SERVICE,] }] }
];

class I18NextEvents {
    constructor() {
        this.initialized = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["a" /* BehaviorSubject */](false);
        this.loaded = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["a" /* BehaviorSubject */](false);
        this.failedLoading = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["f" /* Subject */]();
        this.missingKey = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["f" /* Subject */]();
        this.added = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["f" /* Subject */]();
        this.removed = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["f" /* Subject */]();
        this.languageChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["a" /* BehaviorSubject */](null);
    }
}

const i18next = __WEBPACK_IMPORTED_MODULE_1_i18next__["a" /* default */];
class I18NextService {
    constructor(errorHandlingStrategy) {
        this.errorHandlingStrategy = errorHandlingStrategy;
        this.events = new I18NextEvents();
        this.language = '';
        this.languages = [];
    }
    get options() {
        return i18next.options;
    }
    use(module) {
        i18next.use.call(i18next, module);
        return this;
    }
    init(options) {
        options = options || {};
        this.subscribeEvents();
        return new Promise((resolve, reject) => {
            i18next.init.call(i18next, Object.assign({}, options), this.errorHandlingStrategy.handle(resolve, reject));
        });
    }
    t(key, optionsOrDefault, options) {
        const hasDefault = optionsOrDefault && typeof (optionsOrDefault) === 'string';
        if (hasDefault) {
            return i18next.t.call(i18next, key, optionsOrDefault, options);
        }
        else {
            return i18next.t.call(i18next, key, optionsOrDefault);
        }
    }
    format(value, format, lng) {
        return i18next.format.call(i18next, value, format, lng);
    }
    exists(key, options) {
        return i18next.exists.call(i18next, key, options);
    }
    getFixedT(lng, ns) {
        return i18next.getFixedT.call(i18next, lng, ns);
    }
    setDefaultNamespace(ns) {
        i18next.setDefaultNamespace.call(i18next, ns);
    }
    dir(lng = undefined) {
        return i18next.dir.call(i18next, lng);
    }
    changeLanguage(lng) {
        return new Promise((resolve, reject) => {
            i18next.changeLanguage.call(i18next, lng, this.errorHandlingStrategy.handle(resolve, reject));
        });
    }
    loadNamespaces(namespaces) {
        return new Promise((resolve, reject) => {
            i18next.loadNamespaces.call(i18next, namespaces, this.errorHandlingStrategy.handle(resolve, reject));
        });
    }
    loadLanguages(lngs, callback) {
        return new Promise((resolve, reject) => {
            i18next.loadLanguages.call(i18next, lngs, this.errorHandlingStrategy.handle(resolve, reject));
        });
    }
    //#region resource handling
    reloadResources(...params) {
        i18next.reloadResources.apply(i18next, params);
    }
    getResource(lng, ns, key, options) {
        return i18next.getResource.call(i18next, lng, ns, key, options);
    }
    addResource(lng, ns, key, value, options) {
        i18next.addResource.call(i18next, lng, ns, key, value, options);
    }
    addResources(lng, ns, resources) {
        i18next.addResources.call(i18next, lng, ns, resources);
    }
    addResourceBundle(lng, ns, resources, deep, overwrite) {
        i18next.addResourceBundle.call(i18next, lng, ns, resources, deep, overwrite);
    }
    hasResourceBundle(lng, ns) {
        return i18next.hasResourceBundle.call(i18next, lng, ns);
    }
    getResourceBundle(lng, ns) {
        return i18next.getResourceBundle.call(i18next, lng, ns);
    }
    removeResourceBundle(lng, ns) {
        i18next.removeResourceBundle.call(i18next, lng, ns);
    }
    //#endregion
    subscribeEvents() {
        i18next.on.call(i18next, 'initialized', options => {
            this.language = i18next.language;
            this.languages = i18next.languages;
            this.events.initialized.next(options);
        });
        i18next.on.call(i18next, 'loaded', loaded => this.events.loaded.next(loaded));
        i18next.on.call(i18next, 'failedLoading', (lng, ns, msg) => this.events.failedLoading.next({ lng, ns, msg }));
        i18next.on.call(i18next, 'languageChanged', lng => {
            this.language = i18next.language;
            this.languages = i18next.languages;
            this.events.languageChanged.next(lng);
        });
        i18next.on.call(i18next, 'missingKey', (lngs, namespace, key, res) => this.events.missingKey.next({ lngs, namespace, key, res }));
        i18next.on.call(i18next, 'added', (lng, ns) => this.events.added.next({ lng, ns }));
        i18next.on.call(i18next, 'removed', (lng, ns) => this.events.removed.next({ lng, ns }));
    }
}
I18NextService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */] }
];
I18NextService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [I18NEXT_ERROR_HANDLING_STRATEGY,] }] }
];

class I18NextTitle extends __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] {
    constructor(i18nextPipe, doc) {
        super(doc);
        this.i18nextPipe = i18nextPipe;
    }
    setTitle(value) {
        return super.setTitle(this.translate(value));
    }
    translate(text) {
        return this.i18nextPipe.transform(text, { format: 'cap' });
    }
}
I18NextTitle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */] }
];
I18NextTitle.ctorParameters = () => [
    { type: I18NextPipe },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* DOCUMENT */],] }] }
];

class I18NextEagerPipe extends I18NextPipe {
    constructor(translateI18Next, ns, scope, cd) {
        super(translateI18Next, ns, scope);
        this.translateI18Next = translateI18Next;
        this.ns = ns;
        this.scope = scope;
        this.cd = cd;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["f" /* Subject */]();
        translateI18Next.events.languageChanged
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["q" /* takeUntil */])(this.ngUnsubscribe))
            .subscribe(() => {
            this.cd.markForCheck();
        });
    }
    hasKeyChanged(key) {
        return !this.lastKey || this.lastKey !== key;
    }
    hasOptionsChanged(options) {
        return this.lastOptions !== options;
    }
    transform(key, options) {
        const newKey = this.translateI18Next.language + '|' + JSON.stringify(key);
        if (this.hasKeyChanged(newKey) || this.hasOptionsChanged(options)) {
            this.lastKey = newKey;
            this.lastOptions = options;
            this.lastValue = super.transform(key, options);
        }
        return this.lastValue;
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
I18NextEagerPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */], args: [{
                name: 'i18nextEager',
                pure: false
            },] }
];
I18NextEagerPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [I18NEXT_SERVICE,] }] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [I18NEXT_NAMESPACE,] }] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [I18NEXT_SCOPE,] }] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] }
];

function resolver(activatedRouteSnapshot, routerStateSnapshot) {
    let namespaces = [];
    namespaces = activatedRouteSnapshot.data && activatedRouteSnapshot.data.i18nextNamespaces || namespaces;
    return this.loadNamespaces(namespaces.filter(n => n));
}
function i18nextNamespaceResolverFactory(i18next) {
    return resolver.bind(i18next);
}
class I18NextModule {
    static forRoot(params = {}) {
        return {
            ngModule: I18NextModule,
            providers: [
                {
                    provide: I18NEXT_SERVICE,
                    useClass: I18NextService
                },
                {
                    provide: I18NEXT_ERROR_HANDLING_STRATEGY,
                    useClass: params.errorHandlingStrategy || NativeErrorHandlingStrategy
                },
                I18NextService,
                I18NextPipe,
                I18NextCapPipe,
                I18NextFormatPipe,
                I18NextTitle,
                I18NextEagerPipe,
                {
                    provide: I18NEXT_NAMESPACE_RESOLVER,
                    useFactory: i18nextNamespaceResolverFactory,
                    deps: [I18NEXT_SERVICE]
                }
            ]
        };
    }
    static interpolationFormat(customFormat = null) {
        function formatDelegate(value, format, lng) {
            let formatedValue = defaultInterpolationFormat(value, format, lng);
            if (customFormat === null)
                return formatedValue;
            return customFormat(formatedValue, format, lng);
        }
        return formatDelegate;
    }
}
I18NextModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */], args: [{
                providers: [
                    {
                        provide: I18NEXT_NAMESPACE,
                        useValue: ''
                    },
                    {
                        provide: I18NEXT_SCOPE,
                        useValue: ''
                    },
                    I18NextPipe,
                    I18NextCapPipe,
                    I18NextFormatPipe,
                    I18NextTitle,
                    I18NextEagerPipe
                ],
                declarations: [
                    I18NextPipe,
                    I18NextCapPipe,
                    I18NextFormatPipe,
                    I18NextEagerPipe
                ],
                exports: [
                    I18NextPipe,
                    I18NextCapPipe,
                    I18NextFormatPipe,
                    I18NextEagerPipe
                ]
            },] }
];
function defaultInterpolationFormat(value, format, lng = undefined) {
    if (!value)
        return value;
    switch (format) {
        case 'upper':
        case 'uppercase':
            return value.toUpperCase();
        case 'lower':
        case 'lowercase':
            return value.toLowerCase();
        case 'cap':
        case 'capitalize':
            return value.charAt(0).toUpperCase() + value.slice(1);
        case null:
        case undefined:
        case 'none':
        default:
            return value;
    }
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angular-i18next.js.map


/***/ })

},[499]);
//# sourceMappingURL=main.7496dd874100e142c373.bundle.map