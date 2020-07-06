webpackJsonp([0],{

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declarations", function() { return declarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichFormFeatureModule", function() { return RichFormFeatureModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_i18next__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_validation_message__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_validation_ValidationModule__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rich_form_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RichFormFeatureRouterModule__ = __webpack_require__(533);









var declarations = [
    __WEBPACK_IMPORTED_MODULE_7__rich_form_component__["a" /* RichFormComponent */]
];
var providers = [
    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
    {
        provide: __WEBPACK_IMPORTED_MODULE_4_angular_i18next__["a" /* I18NEXT_NAMESPACE */],
        useValue: ['not_existing_namespace', 'feature.rich_form']
    }
];
var RichFormFeatureModule = /** @class */ (function () {
    function RichFormFeatureModule() {
    }
    RichFormFeatureModule = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            bootstrap: declarations,
            declarations: declarations,
            providers: providers,
            imports: [
                //core
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                //feature
                __WEBPACK_IMPORTED_MODULE_8__RichFormFeatureRouterModule__["a" /* RichFormFeatureRouterModule */],
                //lib
                __WEBPACK_IMPORTED_MODULE_4_angular_i18next__["d" /* I18NextModule */],
                __WEBPACK_IMPORTED_MODULE_6__lib_validation_ValidationModule__["a" /* ValidationModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_validation_message__["a" /* I18NextValidationMessageModule */],
            ]
        })
    ], RichFormFeatureModule);
    return RichFormFeatureModule;
}());



/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationDirtyChecker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);



var ValidationDirtyChecker = /** @class */ (function () {
    function ValidationDirtyChecker() {
    }
    ValidationDirtyChecker.prototype.markControlsDirty = function (group) {
        var controls = group.controls;
        for (var ck in controls) {
            if (controls.hasOwnProperty(ck)) {
                var c = controls[ck];
                c.markAsDirty({ onlySelf: true });
                if (c instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormGroup */] || c instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */])
                    this.markControlsDirty(c);
            }
        }
    };
    ValidationDirtyChecker = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])()
    ], ValidationDirtyChecker);
    return ValidationDirtyChecker;
}());



/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_validation_services_ValidationDirtyChecker__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rich_form_model__ = __webpack_require__(531);





var RichFormComponent = /** @class */ (function () {
    function RichFormComponent(fb, vdc) {
        this.fb = fb;
        this.vdc = vdc;
        this.model = new __WEBPACK_IMPORTED_MODULE_4__rich_form_model__["a" /* RichFormModel */]();
        this.form = this.fb.group({
            'count': [this.model.count, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].max(3)]],
            'email': [this.model.email, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]],
            'technicalContact': this.fb.group({
                'firstName': [this.model.technicalContact.firstName, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
                'lastName': [this.model.technicalContact.lastName, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
                'middleName': [this.model.technicalContact.middleName, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            })
        });
    }
    RichFormComponent.prototype.ngOnInit = function () {
    };
    RichFormComponent.prototype.onSubmit = function (e) {
        this.form.controls['technicalContact'].updateValueAndValidity();
        if (!this.form.valid) {
            this.vdc.markControlsDirty(this.form);
        }
    };
    RichFormComponent = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'rich-form',
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewEncapsulation */].None,
            template: __webpack_require__(532)
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */])("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__lib_validation_services_ValidationDirtyChecker__["a" /* ValidationDirtyChecker */]])
    ], RichFormComponent);
    return RichFormComponent;
}());



/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export declarations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_ValidationOnBlurDirective__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ValidationDirtyChecker__ = __webpack_require__(527);




var declarations = [
    __WEBPACK_IMPORTED_MODULE_2__directives_ValidationOnBlurDirective__["a" /* ValidationOnBlurDirective */]
];
var ValidationModule = /** @class */ (function () {
    function ValidationModule() {
    }
    ValidationModule = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: declarations,
            exports: declarations,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_ValidationDirtyChecker__["a" /* ValidationDirtyChecker */]
            ]
        })
    ], ValidationModule);
    return ValidationModule;
}());



/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationOnBlurDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);



var ValidationOnBlurDirective = /** @class */ (function () {
    function ValidationOnBlurDirective(formControl) {
        this.formControl = formControl;
    }
    ValidationOnBlurDirective.prototype.onFocus = function ($event) {
        this.wasChanged = false;
        this.validators = this.formControl.control.validator;
        this.asyncValidators = this.formControl.control.asyncValidator;
        this.formControl.control.clearAsyncValidators();
        this.formControl.control.clearValidators();
    };
    ValidationOnBlurDirective.prototype.onKeyup = function ($event) {
        this.wasChanged = true; // keyboard change
    };
    ValidationOnBlurDirective.prototype.onChange = function ($event) {
        this.wasChanged = true; // ng-value change
    };
    ValidationOnBlurDirective.prototype.onBlur = function ($event) {
        this.formControl.control.setAsyncValidators(this.asyncValidators);
        this.formControl.control.setValidators(this.validators);
        if (this.wasChanged)
            this.formControl.control.updateValueAndValidity();
    };
    ValidationOnBlurDirective = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */])({
            selector: '[validate-onblur]',
            host: {
                '(focus)': 'onFocus($event)',
                '(blur)': 'onBlur($event)',
                '(keyup)': 'onKeyup($event)',
                '(change)': 'onChange($event)'
            }
        })
        // cache and remove validation on focus, and restore on blur
        ,
        Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */])("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgControl */]])
    ], ValidationOnBlurDirective);
    return ValidationOnBlurDirective;
}());



/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Contact */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichFormModel; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());

var RichFormModel = /** @class */ (function () {
    function RichFormModel() {
        this.count = 0;
        this.technicalContact = new Contact();
    }
    return RichFormModel;
}());



/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"main-header\">\n        <h1>{{ 'title' | i18next: { case: 'cap' } }}</h1>\n    </div>\n    <br/>\n    <form #requestHtmlForm class=\"form-default\" name=\"requestHtmlForm\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit($event)\">\n\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"control-label control-label-sm text-muted\">{{ 'email' | i18nextCap }}</label>\n                    <input validate-onblur validationMessage name=\"email\" type=\"email\" class=\"form-control\" formControlName=\"email\" [(ngModel)]=\"model.email\" />\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"control-label control-label-sm text-muted\">{{ 'count' | i18nextCap }}</label>\n                    <input validate-onblur validationMessage name=\"count\" type=\"number\" class=\"form-control\" formControlName=\"count\" [(ngModel)]=\"model.count\" />\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <div>{{ 'technical_contact' | i18nextEager }}</div>\n        </div>\n\n        <div formGroupName=\"technicalContact\">\n\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label control-label-sm text-muted\">{{ '_person.last_name' | i18next: { format: 'cap' } }}</label>\n                        <input validate-onblur validationMessage class=\"form-control\" type=\"text\" formControlName=\"lastName\" [(ngModel)]=\"model.technicalContact.lastName\" />\n                    </div>\n                </div>\n                <div class=\"col-6\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label control-label-sm text-muted\">{{ '_person.first_name' | i18next: { format: 'cap' } }}</label>\n                        <input validate-onblur validationMessage class=\"form-control\" type=\"text\" formControlName=\"firstName\" [(ngModel)]=\"model.technicalContact.firstName\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label control-label-sm text-muted\">{{ '_person.middle_name' | i18next: { format: 'cap' } }}</label>\n                        <input validate-onblur validationMessage class=\"form-control\" type=\"text\" formControlName=\"middleName\" [(ngModel)]=\"model.technicalContact.middleName\">\n                    </div>\n                </div>\n                <div class=\"col-6\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">{{ '_buttons.send' | i18nextCap }}</button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichFormFeatureRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rich_form_component__ = __webpack_require__(528);




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__rich_form_component__["a" /* RichFormComponent */], data: { title: 'feature.rich_form:title' } }
];
var RichFormFeatureRouterModule = /** @class */ (function () {
    function RichFormFeatureRouterModule() {
    }
    RichFormFeatureRouterModule = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */])([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */]
            ],
            providers: []
        })
    ], RichFormFeatureRouterModule);
    return RichFormFeatureRouterModule;
}());



/***/ })

});
//# sourceMappingURL=0.f464b68012e5a6ede38d.bundle.map