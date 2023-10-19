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

/***/ "./src/app/aboutchruch/aboutchruch.component.ts":
/*!******************************************************!*\
  !*** ./src/app/aboutchruch/aboutchruch.component.ts ***!
  \******************************************************/
/*! exports provided: AboutchruchComponent, AboutChurchForm, PictureViewAboutChurch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutchruchComponent", function() { return AboutchruchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutChurchForm", function() { return AboutChurchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureViewAboutChurch", function() { return PictureViewAboutChurch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");






























function AboutchruchComponent_ng_container_8_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutchruchComponent_ng_container_8_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.confirmDialog(data_r3, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r4.image_url, "", data_r3.about_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AboutchruchComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutchruchComponent_ng_container_8_img_2_Template, 1, 2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutchruchComponent_ng_container_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r3 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openDialog(data_r3.about_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r3.about_image && data_r3.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r3.about_tittle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AboutchruchComponent_ng_container_11_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutchruchComponent_ng_container_11_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.confirmDialog(data_r12, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r13.image_url, "", data_r12.about_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AboutchruchComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutchruchComponent_ng_container_11_img_2_Template, 1, 2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutchruchComponent_ng_container_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const data_r12 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.openDialog(data_r12.about_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r12.about_image && data_r12.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r12.about_tittle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AboutchruchComponent_ngx_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function AboutChurchForm_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutChurchForm_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.about_image);
} }
function AboutChurchForm_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutChurchForm_div_23_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.image_url, "", ctx_r2.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AboutChurchForm_mat_progress_spinner_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 31);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function PictureViewAboutChurch_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.image_url, "", ctx_r0.data["about_image"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AboutchruchComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.about_language = 0;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getAboutChurch();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.about_id = id;
                this.getAboutChurchDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    getAboutChurchDelete() {
        if (this.about_id == null || this.about_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'about_church';
        var where = 'about_id=' + this.about_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getAboutChurch();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    onTabChanged($event) {
        let clickedIndex = $event.index;
        console.log(clickedIndex);
        if (this.result != null) {
            while (this.result.length > 0) {
                this.result.pop();
            }
        }
        this.about_language = clickedIndex;
        this.getAboutChurch();
    }
    getAboutChurch() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allchurchdetails/' + this.about_language)
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
            if (!this.result) {
                this._snackBar.open("Records Empty", '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openDialog(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.about_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(AboutChurchForm, {
            minWidth: "40%",
            maxWidth: "40%",
            //data: data,
            data: {
                data: data,
                about_language: this.about_language
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getAboutChurch();
            }
        });
    }
    confirmDialog(id, action) {
        var data = null;
        if (id != 0) {
            data = id;
        }
        const dialogRef = this.dialog.open(PictureViewAboutChurch, {
            minWidth: "40%",
            maxWidth: "40%",
            data: {
                data: data,
                action: action
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
AboutchruchComponent.ɵfac = function AboutchruchComponent_Factory(t) { return new (t || AboutchruchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
AboutchruchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutchruchComponent, selectors: [["app-aboutchruch"]], decls: 13, vars: 3, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [3, "selectedTabChange"], ["label", "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"], [4, "ngFor", "ngForOf"], ["label", "English"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["matListAvatar", "", "alt", "image", 3, "src", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "Edit"], ["tooltip", "matTooltip"], ["mat-line", "", 3, "innerHTML"], ["matListAvatar", "", "alt", "image", 3, "src", "click"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function AboutchruchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function AboutchruchComponent_Template_mat_tab_group_selectedTabChange_5_listener($event) { return ctx.onTabChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutchruchComponent_ng_container_8_Template, 9, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AboutchruchComponent_ng_container_11_Template, 9, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AboutchruchComponent_ngx_spinner_12_Template, 3, 1, "ngx-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTab"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListAvatarCssMatStyler"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0Y2hydWNoL2Fib3V0Y2hydWNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutchruchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutchruch',
                templateUrl: './aboutchruch.component.html',
                styleUrls: ['./aboutchruch.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();
class AboutChurchForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.about_id = 0;
        this.subresult = [];
        this.about_image = 'Select Banner Image';
        this.image_path = '';
        this.about_language = 0;
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' },
                { class: 'akarathi-0', name: 'Akarathi_0' },
                { class: 'tamil-bible', name: 'Tamil Bible' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.AboutChurchFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'tittle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data.data != null) {
            this.AboutChurchFormData.patchValue({
                tittle: this.data.data.about_tittle,
                description: this.data.data.about_text,
                status: this.data.data.status,
                about_id: this.data.data.about_id,
            });
            this.about_id = this.data.data.about_id;
            this.image_path = this.data.data.about_image;
        }
        this.about_language = this.data.about_language;
        console.log("texttttttttt--->" + this.data.about_language);
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allchurchdetails/' + this.about_language)
            .subscribe((res) => {
            this.subresult = res["result"]["data"];
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    onSubmit() {
        console.log("text11");
        if (this.AboutChurchFormData.invalid) {
            return;
        }
        console.log("text22" + this.about_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.about_id != 0) {
            formData.append('about_tittle', this.AboutChurchFormData.value.tittle);
            formData.append('about_text', this.AboutChurchFormData.value.description);
            formData.append('status', this.AboutChurchFormData.value.status);
            formData.append('about_image', this.image_path);
            console.log("text--->" + this.about_id);
            url = 'update_record/about_church/about_id = ' + this.about_id;
        }
        else {
            formData.append('about_tittle', this.AboutChurchFormData.value.tittle);
            formData.append('about_text', this.AboutChurchFormData.value.description);
            formData.append('status', this.AboutChurchFormData.value.status);
            formData.append('about_image', this.image_path);
            formData.append('about_language', this.about_language.toString());
            url = 'insert_aboutchurch';
            console.log("Insert--->" + formData);
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.about_image = 'Select Banner Image';
        }
    }
}
AboutChurchForm.ɵfac = function AboutChurchForm_Factory(t) { return new (t || AboutChurchForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AboutChurchForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutChurchForm, selectors: [["aboutchurch-form"]], decls: 51, vars: 7, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "tittle"], ["fxFlex", "50%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "preview-image", 4, "ngIf"], ["fxFlex", "100%"], ["appearance", "outline", "fxFlex", "100%", 1, "example-full-width"], ["matInput", "", "rows", "8", "required", "", "formControlName", "description"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 3, "click"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function AboutChurchForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Trust History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AboutChurchForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tittle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AboutChurchForm_button_20_Template, 2, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AboutChurchForm_Template_input_change_21_listener($event) { return ctx.fileProgress($event, "about_image", "image_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AboutChurchForm_div_23_Template, 5, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "About Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AboutChurchForm_mat_progress_spinner_50_Template, 1, 3, "mat-progress-spinner", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.AboutChurchFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_20__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutChurchForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aboutchurch-form',
                templateUrl: 'aboutchurch-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class PictureViewAboutChurch {
    constructor(dialogRef, datapopup, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.action = '';
        this.loading = false;
        this.student_register_id = 0;
        if (this.datapopup != null) {
            this.action = this.datapopup.action;
            this.data = this.datapopup.data;
        }
    }
}
PictureViewAboutChurch.ɵfac = function PictureViewAboutChurch_Factory(t) { return new (t || PictureViewAboutChurch)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PictureViewAboutChurch.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureViewAboutChurch, selectors: [["aboutchurchimage-view"]], decls: 5, vars: 2, consts: [[1, "mat-typography"], ["class", "member-profile", "mat-card-image", "", "alt", "Photo", 3, "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-card-image", "", "alt", "Photo", 1, "member-profile", 3, "src"]], template: function PictureViewAboutChurch_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PictureViewAboutChurch_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardImage"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureViewAboutChurch, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aboutchurchimage-view',
                templateUrl: 'aboutchurchimage-view.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent, AdminForm, PictureViewUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminForm", function() { return AdminForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureViewUser", function() { return PictureViewUser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");





























function AdminComponent_ng_container_6_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_ng_container_6_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.confirmDialog(data_r2, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r3.image_url, "", data_r2.admin_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AdminComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_ng_container_6_img_2_Template, 1, 2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_ng_container_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const data_r2 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.openDialog(data_r2.admin_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.admin_image && data_r2.admin_image != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r2.admin_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AdminComponent_ngx_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function AdminForm_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminForm_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.admin_image);
} }
function AdminForm_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminForm_div_23_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.image_url, "", ctx_r2.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AdminForm_mat_progress_spinner_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 31);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function PictureViewUser_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.image_url, "", ctx_r0.data["admin_image"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AdminComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getAdmin();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.admin_id = id;
                this.wordDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    wordDelete() {
        if (this.admin_id == null || this.admin_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'admin';
        var where = 'admin_id=' + this.admin_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getAdmin();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getAdmin() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_admindetails')
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openDialog(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.admin_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(AdminForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getAdmin();
            }
        });
    }
    confirmDialog(id, action) {
        var data = null;
        if (id != 0) {
            data = id;
        }
        const dialogRef = this.dialog.open(PictureViewUser, {
            minWidth: "40%",
            maxWidth: "40%",
            data: {
                data: data,
                action: action
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 8, vars: 2, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["matListAvatar", "", "alt", "image", 3, "src", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "Edit"], ["tooltip", "matTooltip"], ["mat-line", "", 3, "innerHTML"], ["matListAvatar", "", "alt", "image", 3, "src", "click"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminComponent_ng_container_6_Template, 9, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_ngx_spinner_7_Template, 3, 1, "ngx-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListAvatarCssMatStyler"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"]], styles: [".task-header[_ngcontent-%COMP%] {\r\n    background-color: blue;\r\n    padding: 0 5px;\r\n     height: 20px;\r\n}\r\n.fx-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0tBQ2IsWUFBWTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgIGhlaWdodDogMjBweDtcclxufVxyXG4uZngtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();
class AdminForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.admin_id = 0;
        this.subresult = [];
        this.admin_image = 'Select admin Image';
        this.image_path = '';
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' },
                { class: 'akarathi-0', name: 'Akarathi_0' },
                { class: 'tamil-bible', name: 'Tamil Bible' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.AdminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data != null) {
            this.AdminForm.patchValue({
                description: this.data.admin_text,
                name: this.data.admin_name,
                status: this.data.status,
                admin_id: this.data.admin_id,
            });
            this.admin_id = this.data.admin_id;
            this.image_path = this.data.admin_image;
        }
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_admindetails')
            .subscribe((res) => {
            this.subresult = res["result"]["data"];
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    onSubmit() {
        console.log("text11");
        if (this.AdminForm.invalid) {
            return;
        }
        console.log("text22" + this.admin_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.admin_id != 0) {
            formData.append('admin_name', this.AdminForm.value.name);
            formData.append('admin_text', this.AdminForm.value.description);
            formData.append('status', this.AdminForm.value.status);
            formData.append('admin_image', this.image_path);
            console.log("text33" + this.admin_id);
            url = 'update_record/admin/admin_id = ' + this.admin_id;
        }
        else {
            formData.append('admin_name', this.AdminForm.value.name);
            formData.append('admin_text', this.AdminForm.value.description);
            formData.append('status', this.AdminForm.value.status);
            formData.append('admin_image', this.image_path);
            url = 'insert_admintext';
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.admin_image = 'Select admin Image';
        }
    }
}
AdminForm.ɵfac = function AdminForm_Factory(t) { return new (t || AdminForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AdminForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminForm, selectors: [["admin-form"]], decls: 50, vars: 7, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "name"], ["fxFlex", "50%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "preview-image", 4, "ngIf"], ["fxFlex", "100%"], ["appearance", "outline", "fxFlex", "100%", 1, "example-full-width"], ["matInput", "", "rows", "10", "required", "", "formControlName", "description"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 3, "click"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function AdminForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pastor Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pastor Name is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdminForm_button_20_Template, 2, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminForm_Template_input_change_21_listener($event) { return ctx.fileProgress($event, "admin_image", "image_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AdminForm_div_23_Template, 5, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AdminForm_mat_progress_spinner_49_Template, 1, 3, "mat-progress-spinner", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.AdminForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'admin-form',
                templateUrl: 'admin-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class PictureViewUser {
    constructor(dialogRef, datapopup, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.action = '';
        this.loading = false;
        this.student_register_id = 0;
        if (this.datapopup != null) {
            this.action = this.datapopup.action;
            this.data = this.datapopup.data;
        }
    }
}
PictureViewUser.ɵfac = function PictureViewUser_Factory(t) { return new (t || PictureViewUser)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PictureViewUser.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureViewUser, selectors: [["adminimage-view"]], decls: 5, vars: 2, consts: [[1, "mat-typography"], ["class", "member-profile", "mat-card-image", "", "alt", "Photo", 3, "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-card-image", "", "alt", "Photo", 1, "member-profile", 3, "src"]], template: function PictureViewUser_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PictureViewUser_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardImage"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureViewUser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'adminimage-view',
                templateUrl: 'adminimage-view.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _welcometext_welcometext_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcometext/welcometext.component */ "./src/app/welcometext/welcometext.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homebanner/homebanner.component */ "./src/app/homebanner/homebanner.component.ts");
/* harmony import */ var _scrolltext_scrolltext_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrolltext/scrolltext.component */ "./src/app/scrolltext/scrolltext.component.ts");
/* harmony import */ var _aboutchruch_aboutchruch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aboutchruch/aboutchruch.component */ "./src/app/aboutchruch/aboutchruch.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _kartharinsatham_kartharinsatham_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kartharinsatham/kartharinsatham.component */ "./src/app/kartharinsatham/kartharinsatham.component.ts");
/* harmony import */ var _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./johnydavismessage/johnydavismessage.component */ "./src/app/johnydavismessage/johnydavismessage.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./eventpage/eventpage.component */ "./src/app/eventpage/eventpage.component.ts");
/* harmony import */ var _donation_page_donation_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./donation-page/donation-page.component */ "./src/app/donation-page/donation-page.component.ts");


















const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"] },
    { path: 'members', component: _members_members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"] },
    { path: 'welcometext', component: _welcometext_welcometext_component__WEBPACK_IMPORTED_MODULE_4__["WelcometextComponent"] },
    { path: 'quote', component: _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__["QuoteComponent"] },
    { path: 'homebanner', component: _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_6__["HomebannerComponent"] },
    { path: 'scrolltext', component: _scrolltext_scrolltext_component__WEBPACK_IMPORTED_MODULE_7__["ScrolltextComponent"] },
    { path: 'aboutchruch', component: _aboutchruch_aboutchruch_component__WEBPACK_IMPORTED_MODULE_8__["AboutchruchComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"] },
    { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"] },
    { path: 'articles', component: _kartharinsatham_kartharinsatham_component__WEBPACK_IMPORTED_MODULE_11__["KartharinsathamComponent"] },
    { path: 'trustmessage', component: _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_12__["JohnydavismessageComponent"] },
    // {path: 'pastortwomessage', component: JamydavismessageComponent},
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'eventpage', component: _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_14__["EventpageComponent"] },
    { path: 'donation', component: _donation_page_donation_page_component__WEBPACK_IMPORTED_MODULE_15__["DonationPageComponent"] },
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'immanuel';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".blue-snackbar[_ngcontent-%COMP%]{\r\n    background:blue;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZS1zbmFja2JhcntcclxuICAgIGJhY2tncm91bmQ6Ymx1ZTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/__ivy_ngcc__/fesm2015/ngx-youtube-player.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "./src/app/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _welcometext_welcometext_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./welcometext/welcometext.component */ "./src/app/welcometext/welcometext.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./homebanner/homebanner.component */ "./src/app/homebanner/homebanner.component.ts");
/* harmony import */ var _scrolltext_scrolltext_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./scrolltext/scrolltext.component */ "./src/app/scrolltext/scrolltext.component.ts");
/* harmony import */ var _aboutchruch_aboutchruch_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./aboutchruch/aboutchruch.component */ "./src/app/aboutchruch/aboutchruch.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _kartharinsatham_kartharinsatham_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./kartharinsatham/kartharinsatham.component */ "./src/app/kartharinsatham/kartharinsatham.component.ts");
/* harmony import */ var _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./johnydavismessage/johnydavismessage.component */ "./src/app/johnydavismessage/johnydavismessage.component.ts");
/* harmony import */ var _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./jamydavismessage/jamydavismessage.component */ "./src/app/jamydavismessage/jamydavismessage.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./eventpage/eventpage.component */ "./src/app/eventpage/eventpage.component.ts");
/* harmony import */ var _donation_page_donation_page_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./donation-page/donation-page.component */ "./src/app/donation-page/donation-page.component.ts");

























































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_41__["ConfirmationDialogService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_27__["CommonModule"],
            ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_28__["SuiModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__["TooltipModule"].forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_30__["NgxSpinnerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_31__["AngularEditorModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_32__["FlexLayoutModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_33__["PdfViewerModule"],
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_34__["NgxYoutubePlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_36__["HeaderComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_37__["SidenavComponent"],
        _members_members_component__WEBPACK_IMPORTED_MODULE_38__["MembersComponent"],
        _members_members_component__WEBPACK_IMPORTED_MODULE_38__["MemberViewForm"],
        _members_members_component__WEBPACK_IMPORTED_MODULE_38__["MemberDelete"],
        _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_39__["ConfirmationDialogComponent"],
        _welcometext_welcometext_component__WEBPACK_IMPORTED_MODULE_42__["WelcometextComponent"],
        _welcometext_welcometext_component__WEBPACK_IMPORTED_MODULE_42__["PictureViewwelcome"],
        _quote_quote_component__WEBPACK_IMPORTED_MODULE_43__["QuoteComponent"],
        _quote_quote_component__WEBPACK_IMPORTED_MODULE_43__["QuoteForm"],
        _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_44__["HomebannerComponent"],
        _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_44__["HomeBannerForm"],
        _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_44__["PictureViewHomeBanner"],
        _scrolltext_scrolltext_component__WEBPACK_IMPORTED_MODULE_45__["ScrolltextComponent"],
        _scrolltext_scrolltext_component__WEBPACK_IMPORTED_MODULE_45__["ScrollForm"],
        _aboutchruch_aboutchruch_component__WEBPACK_IMPORTED_MODULE_46__["AboutchruchComponent"],
        _aboutchruch_aboutchruch_component__WEBPACK_IMPORTED_MODULE_46__["AboutChurchForm"],
        _aboutchruch_aboutchruch_component__WEBPACK_IMPORTED_MODULE_46__["PictureViewAboutChurch"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_47__["GalleryComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_47__["PictureViewGallery"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_47__["GalleryForm"],
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_48__["ContactsComponent"],
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_48__["ContactViewForm"],
        _kartharinsatham_kartharinsatham_component__WEBPACK_IMPORTED_MODULE_49__["KartharinsathamComponent"],
        _kartharinsatham_kartharinsatham_component__WEBPACK_IMPORTED_MODULE_49__["PictureViewKarthar"],
        _kartharinsatham_kartharinsatham_component__WEBPACK_IMPORTED_MODULE_49__["KartharChurchForm"],
        _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["JohnydavismessageComponent"],
        _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["PictureViewAboutMessage"],
        _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["MessageForm"],
        _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["VideoForm"],
        _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["AudioForm"],
        _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["PictureViewAboutAudio"],
        _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamydavismessageComponent"],
        _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyPictureViewAboutMessage"],
        _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyMessageForm"],
        _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyVideoForm"],
        _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyAudioForm"],
        _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyPictureViewAboutAudio"],
        _welcometext_welcometext_component__WEBPACK_IMPORTED_MODULE_42__["WelcomeForm"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_52__["AdminComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_52__["AdminForm"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_52__["PictureViewUser"],
        _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_44__["PictureViewHomeBanner"],
        _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__["EventpageComponent"],
        _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__["EventForm"],
        _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__["EventImageForm"],
        _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__["PictureViewEvent"],
        _donation_page_donation_page_component__WEBPACK_IMPORTED_MODULE_54__["DonationPageComponent"],
        _donation_page_donation_page_component__WEBPACK_IMPORTED_MODULE_54__["DonationViewForm"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_27__["CommonModule"],
        ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_28__["SuiModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__["TooltipModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_30__["NgxSpinnerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_31__["AngularEditorModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_32__["FlexLayoutModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_33__["PdfViewerModule"],
        ngx_youtube_player__WEBPACK_IMPORTED_MODULE_34__["NgxYoutubePlayerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_36__["HeaderComponent"],
                    _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_37__["SidenavComponent"],
                    _members_members_component__WEBPACK_IMPORTED_MODULE_38__["MembersComponent"],
                    _members_members_component__WEBPACK_IMPORTED_MODULE_38__["MemberViewForm"],
                    _members_members_component__WEBPACK_IMPORTED_MODULE_38__["MemberDelete"],
                    _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_39__["ConfirmationDialogComponent"],
                    _welcometext_welcometext_component__WEBPACK_IMPORTED_MODULE_42__["WelcometextComponent"],
                    _welcometext_welcometext_component__WEBPACK_IMPORTED_MODULE_42__["PictureViewwelcome"],
                    _quote_quote_component__WEBPACK_IMPORTED_MODULE_43__["QuoteComponent"],
                    _quote_quote_component__WEBPACK_IMPORTED_MODULE_43__["QuoteForm"],
                    _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_44__["HomebannerComponent"],
                    _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_44__["HomeBannerForm"],
                    _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_44__["PictureViewHomeBanner"],
                    _scrolltext_scrolltext_component__WEBPACK_IMPORTED_MODULE_45__["ScrolltextComponent"],
                    _scrolltext_scrolltext_component__WEBPACK_IMPORTED_MODULE_45__["ScrollForm"],
                    _aboutchruch_aboutchruch_component__WEBPACK_IMPORTED_MODULE_46__["AboutchruchComponent"],
                    _aboutchruch_aboutchruch_component__WEBPACK_IMPORTED_MODULE_46__["AboutChurchForm"],
                    _aboutchruch_aboutchruch_component__WEBPACK_IMPORTED_MODULE_46__["PictureViewAboutChurch"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_47__["GalleryComponent"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_47__["PictureViewGallery"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_47__["GalleryForm"],
                    _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_48__["ContactsComponent"],
                    _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_48__["ContactViewForm"],
                    _kartharinsatham_kartharinsatham_component__WEBPACK_IMPORTED_MODULE_49__["KartharinsathamComponent"],
                    _kartharinsatham_kartharinsatham_component__WEBPACK_IMPORTED_MODULE_49__["PictureViewKarthar"],
                    _kartharinsatham_kartharinsatham_component__WEBPACK_IMPORTED_MODULE_49__["KartharChurchForm"],
                    _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["JohnydavismessageComponent"],
                    _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["PictureViewAboutMessage"],
                    _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["MessageForm"],
                    _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["VideoForm"],
                    _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["AudioForm"],
                    _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["PictureViewAboutAudio"],
                    _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamydavismessageComponent"],
                    _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyPictureViewAboutMessage"],
                    _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyMessageForm"],
                    _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyVideoForm"],
                    _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyAudioForm"],
                    _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyPictureViewAboutAudio"],
                    _welcometext_welcometext_component__WEBPACK_IMPORTED_MODULE_42__["WelcomeForm"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_52__["AdminComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_52__["AdminForm"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_52__["PictureViewUser"],
                    _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_44__["PictureViewHomeBanner"],
                    _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__["EventpageComponent"],
                    _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__["EventForm"],
                    _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__["EventImageForm"],
                    _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__["PictureViewEvent"],
                    _donation_page_donation_page_component__WEBPACK_IMPORTED_MODULE_54__["DonationPageComponent"],
                    _donation_page_donation_page_component__WEBPACK_IMPORTED_MODULE_54__["DonationViewForm"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_27__["CommonModule"],
                    ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_28__["SuiModule"],
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__["TooltipModule"].forRoot(),
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_30__["NgxSpinnerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
                    _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_31__["AngularEditorModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_32__["FlexLayoutModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_33__["PdfViewerModule"],
                    ngx_youtube_player__WEBPACK_IMPORTED_MODULE_34__["NgxYoutubePlayerModule"]
                ],
                entryComponents: [
                    _members_members_component__WEBPACK_IMPORTED_MODULE_38__["MembersComponent"],
                    _members_members_component__WEBPACK_IMPORTED_MODULE_38__["MemberViewForm"],
                    _members_members_component__WEBPACK_IMPORTED_MODULE_38__["MemberDelete"],
                    _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_39__["ConfirmationDialogComponent"],
                    _welcometext_welcometext_component__WEBPACK_IMPORTED_MODULE_42__["WelcomeForm"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_52__["AdminForm"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_52__["PictureViewUser"],
                    _quote_quote_component__WEBPACK_IMPORTED_MODULE_43__["QuoteForm"],
                    _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_44__["HomeBannerForm"],
                    _homebanner_homebanner_component__WEBPACK_IMPORTED_MODULE_44__["PictureViewHomeBanner"],
                    _scrolltext_scrolltext_component__WEBPACK_IMPORTED_MODULE_45__["ScrollForm"],
                    _aboutchruch_aboutchruch_component__WEBPACK_IMPORTED_MODULE_46__["AboutChurchForm"],
                    _aboutchruch_aboutchruch_component__WEBPACK_IMPORTED_MODULE_46__["PictureViewAboutChurch"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_47__["GalleryForm"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_47__["PictureViewGallery"],
                    _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_48__["ContactViewForm"],
                    _kartharinsatham_kartharinsatham_component__WEBPACK_IMPORTED_MODULE_49__["PictureViewKarthar"],
                    _kartharinsatham_kartharinsatham_component__WEBPACK_IMPORTED_MODULE_49__["KartharChurchForm"],
                    _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["PictureViewAboutMessage"],
                    _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["MessageForm"],
                    _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["VideoForm"],
                    _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["AudioForm"],
                    _johnydavismessage_johnydavismessage_component__WEBPACK_IMPORTED_MODULE_50__["PictureViewAboutAudio"],
                    _welcometext_welcometext_component__WEBPACK_IMPORTED_MODULE_42__["PictureViewwelcome"],
                    _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyPictureViewAboutMessage"],
                    _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyMessageForm"],
                    _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyVideoForm"],
                    _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyAudioForm"],
                    _jamydavismessage_jamydavismessage_component__WEBPACK_IMPORTED_MODULE_51__["JamyPictureViewAboutAudio"],
                    _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__["EventForm"],
                    _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__["EventImageForm"],
                    _eventpage_eventpage_component__WEBPACK_IMPORTED_MODULE_53__["PictureViewEvent"],
                    _donation_page_donation_page_component__WEBPACK_IMPORTED_MODULE_54__["DonationViewForm"]
                ],
                providers: [_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_41__["ConfirmationDialogService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/confirmation-dialog/confirmation-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");




class ConfirmationDialogComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    decline() {
        this.activeModal.close(false);
    }
    accept() {
        this.activeModal.close(true);
    }
    dismiss() {
        this.activeModal.dismiss();
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], inputs: { title: "title", message: "message", btnOkText: "btnOkText", btnCancelText: "btnCancelText" }, decls: 13, vars: 4, consts: [["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center", 1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_3_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_9_listener() { return ctx.decline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_11_listener() { return ctx.accept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnCancelText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnOkText);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmation-dialog',
                templateUrl: './confirmation-dialog.component.html',
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnOkText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnCancelText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/confirmation-dialog/confirmation-dialog.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.service.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmationDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogService", function() { return ConfirmationDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation-dialog.component */ "./src/app/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




class ConfirmationDialogService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    confirm(title, message, btnOkText = 'OK', btnCancelText = 'Cancel', dialogSize = 'sm') {
        const modalRef = this.modalService.open(_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    }
}
ConfirmationDialogService.ɵfac = function ConfirmationDialogService_Factory(t) { return new (t || ConfirmationDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
ConfirmationDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfirmationDialogService, factory: ConfirmationDialogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent, ContactViewForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactViewForm", function() { return ContactViewForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");





















function ContactsComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_ng_container_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const data_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openView(data_r2.contact_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_ng_container_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const data_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openConfirmationDialog(data_r2.contact_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 7, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.contact_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.contact_phoneno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 3, data_r2.created_at, "dd-MM-yyyy"), " ");
} }
function ContactsComponent_ngx_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
class ContactsComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getContacts();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.contact_id = id;
                this.memberDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    memberDelete() {
        if (this.contact_id == null || this.contact_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'contact_us';
        var where = 'contact_id=' + this.contact_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getContacts();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getContacts() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_contactdetails')
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openView(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.contact_id) === parseInt(id)) {
                    data = val;
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(ContactViewForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"])); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 8, vars: 2, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "View"], ["tooltip", "matTooltip"], ["matTooltip", "Delete"], ["mat-line", ""], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContactsComponent_ng_container_6_Template, 18, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContactsComponent_ngx_spinner_7_Template, 3, 1, "ngx-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }]; }, null); })();
class ContactViewForm {
    constructor(dialog, dialogRef, datapopup, _snackBar, httpClient) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.tag = [];
        this.data = this.datapopup;
    }
    ngOnInit() {
    }
}
ContactViewForm.ɵfac = function ContactViewForm_Factory(t) { return new (t || ContactViewForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ContactViewForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactViewForm, selectors: [["contactview"]], decls: 60, vars: 11, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "75%"], [1, "Product-table"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"]], template: function ContactViewForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " : \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone Number \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " : \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " : \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Date And Time \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " : \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Message \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " : \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Date\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " :\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.contact_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.contact_phoneno, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.contact_email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.created_at, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.contact_message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 8, ctx.data.created_at, "dd-MM-yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactViewForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contactview',
                templateUrl: 'contactview.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/donation-page/donation-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/donation-page/donation-page.component.ts ***!
  \**********************************************************/
/*! exports provided: DonationPageComponent, DonationViewForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationPageComponent", function() { return DonationPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationViewForm", function() { return DonationViewForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");





















function DonationPageComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationPageComponent_ng_container_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const data_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openView(data_r2.donation_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 3, data_r2.created_at, "dd-MMM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rs.", data_r2.amount, "");
} }
function DonationPageComponent_ngx_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
class DonationPageComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getdonation();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(donation_id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.donation_id = donation_id;
                this.memberDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    memberDelete() {
        if (this.donation_id == null || this.donation_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'donation';
        var where = 'donation_id=' + this.donation_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getdonation();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getdonation() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_donation')
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openView(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.donation_id) === parseInt(id)) {
                    data = val;
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(DonationViewForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
DonationPageComponent.ɵfac = function DonationPageComponent_Factory(t) { return new (t || DonationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"])); };
DonationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonationPageComponent, selectors: [["app-donation-page"]], decls: 8, vars: 2, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "View"], ["tooltip", "matTooltip"], ["mat-line", ""], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function DonationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DonationPageComponent_ng_container_6_Template, 14, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DonationPageComponent_ngx_spinner_7_Template, 3, 1, "ngx-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["td[_ngcontent-%COMP%]:nth-child(2) {\r\n    padding: 0 10px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb24tcGFnZS9kb25hdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlLEVBQUUsMkNBQTJDO0FBQ2hFIiwiZmlsZSI6InNyYy9hcHAvZG9uYXRpb24tcGFnZS9kb25hdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgcGFkZGluZzogMCAxMHB4OyAvKiBBZGp1c3QgdGhlIGFtb3VudCBvZiBzcGFjaW5nIGFzIG5lZWRlZCAqL1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-donation-page',
                templateUrl: './donation-page.component.html',
                styleUrls: ['./donation-page.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }]; }, null); })();
class DonationViewForm {
    constructor(dialog, dialogRef, datapopup, _snackBar, httpClient) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.tag = [];
        this.data = this.datapopup;
    }
    ngOnInit() {
    }
}
DonationViewForm.ɵfac = function DonationViewForm_Factory(t) { return new (t || DonationViewForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DonationViewForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonationViewForm, selectors: [["donationview"]], decls: 53, vars: 10, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "75%"], [1, "Product-table"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"]], template: function DonationViewForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Donation Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Donation Amount \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " :\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Date Of Donation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.mobile_no, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.reason, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.amount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 7, ctx.data.created_at, "dd-MM-yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationViewForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'donationview',
                templateUrl: 'donationview.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/eventpage/eventpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/eventpage/eventpage.component.ts ***!
  \**************************************************/
/*! exports provided: EventpageComponent, EventForm, PictureViewEvent, EventImageForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventpageComponent", function() { return EventpageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventForm", function() { return EventForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureViewEvent", function() { return PictureViewEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventImageForm", function() { return EventImageForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");





























function EventpageComponent_ng_container_11_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventpageComponent_ng_container_11_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.confirmDialog(data_r2, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r3.image_url, "", data_r2.event_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventpageComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventpageComponent_ng_container_11_img_2_Template, 1, 2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventpageComponent_ng_container_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const data_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.openimage(data_r2.event_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventpageComponent_ng_container_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const data_r2 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.openDialog(data_r2.event_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 10, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventpageComponent_ng_container_11_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const data_r2 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.openConfirmationDialog(data_r2.event_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 11, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.event_image && data_r2.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r2.event_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function EventpageComponent_ngx_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function EventForm_button_59_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventForm_button_59_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.event_image);
} }
function EventForm_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventForm_div_62_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.image_url, "", ctx_r2.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventForm_mat_progress_spinner_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 36);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function PictureViewEvent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.image_url, "", ctx_r0.data["event_image"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = ["fileInput1"];
const _c1 = ["fileInput2"];
const _c2 = ["fileInput3"];
const _c3 = ["fileInput4"];
const _c4 = ["fileInput5"];
const _c5 = ["fileInput6"];
const _c6 = ["fileInput7"];
const _c7 = ["fileInput8"];
function EventImageForm_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.pic_1);
} }
function EventImageForm_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_div_20_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.image_url, "", ctx_r2.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventImageForm_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return _r4.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.pic_2);
} }
function EventImageForm_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_div_26_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.removeMedia("image_path2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r5.image_url, "", ctx_r5.image_path2, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventImageForm_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return _r7.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.pic_3);
} }
function EventImageForm_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_div_32_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.removeMedia("image_path3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r8.image_url, "", ctx_r8.image_path3, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventImageForm_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); return _r10.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.pic_4);
} }
function EventImageForm_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_div_41_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.removeMedia("image_path4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r11.image_url, "", ctx_r11.image_path4, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventImageForm_button_44_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_button_44_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46); return _r13.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.pic_5);
} }
function EventImageForm_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_div_47_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.removeMedia("image_path5"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r14.image_url, "", ctx_r14.image_path5, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventImageForm_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return _r16.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.pic_6);
} }
function EventImageForm_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_div_53_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.removeMedia("image_path6"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r17.image_url, "", ctx_r17.image_path6, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventImageForm_button_59_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_button_59_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61); return _r19.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.pic_7);
} }
function EventImageForm_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_div_62_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.removeMedia("image_path7"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r20.image_url, "", ctx_r20.image_path7, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventImageForm_button_65_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_button_65_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67); return _r22.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.pic_8);
} }
function EventImageForm_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventImageForm_div_68_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.removeMedia("image_path8"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r23.image_url, "", ctx_r23.image_path8, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EventImageForm_mat_progress_spinner_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 49);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
class EventpageComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getEvent();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.event_id = id;
                this.getEventDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    getEventDelete() {
        if (this.event_id == null || this.event_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'Events';
        var where = 'event_id=' + this.event_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getEvent();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getEvent() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Event')
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
            if (!this.result) {
                this._snackBar.open("Records Empty", '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openDialog(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.event_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(EventForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data,
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getEvent();
            }
        });
    }
    openimage(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.event_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(EventImageForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data,
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getEvent();
            }
        });
    }
    confirmDialog(id, action) {
        var data = null;
        if (id != 0) {
            data = id;
        }
        const dialogRef = this.dialog.open(PictureViewEvent, {
            minWidth: "40%",
            maxWidth: "40%",
            data: {
                data: data,
                action: action
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
EventpageComponent.ɵfac = function EventpageComponent_Factory(t) { return new (t || EventpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
EventpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventpageComponent, selectors: [["app-eventpage"]], decls: 13, vars: 2, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [1, "add-btn-container"], ["mat-raised-button", "", 2, "background-color", "#e7b73b", 3, "click"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["matListAvatar", "", "alt", "image", 3, "src", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "add"], ["tooltip", "matTooltip"], ["matTooltip", "Edit"], ["matTooltip", "Delete"], ["mat-line", "", 3, "innerHTML"], ["matListAvatar", "", "alt", "image", 3, "src", "click"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function EventpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventpageComponent_Template_button_click_6_listener() { return ctx.openDialog(0, "null"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EventpageComponent_ng_container_11_Template, 17, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EventpageComponent_ngx_spinner_12_Template, 3, 1, "ngx-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListAvatarCssMatStyler"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"]], styles: [".dialog-picture[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n  }\r\n.dialog-image[_ngcontent-%COMP%] {\r\n    width: 100%; \r\n    height: 200px; \r\n    -o-object-fit: cover;\r\n       object-fit: cover; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRwYWdlL2V2ZW50cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDtBQUNqRDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLFdBQVcsRUFBRSxnRUFBZ0U7SUFDN0UsYUFBYSxFQUFFLHlEQUF5RDtJQUN4RSxvQkFBaUI7T0FBakIsaUJBQWlCLEVBQUUsc0RBQXNEO0VBQzNFIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRwYWdlL2V2ZW50cGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIENTUyBzdHlsZXMgdG8gc2NhbGUgYW5kIGNvdmVyIHRoZSBpbWFnZXMgKi9cclxuLmRpYWxvZy1waWN0dXJlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZGlhbG9nLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBFbnN1cmUgdGhlIGltYWdlIHRha2VzIHVwIHRoZSBlbnRpcmUgd2lkdGggb2YgaXRzIGNvbnRhaW5lciAqL1xyXG4gICAgaGVpZ2h0OiAyMDBweDsgLyogU2V0IGEgZml4ZWQgaGVpZ2h0IGZvciBhbGwgaW1hZ2VzIChhZGp1c3QgYXMgbmVlZGVkKSAqL1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7IC8qIE1haW50YWluIHRoZSBhc3BlY3QgcmF0aW8gYW5kIGNvdmVyIHRoZSBjb250YWluZXIgKi9cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-eventpage',
                templateUrl: './eventpage.component.html',
                styleUrls: ['./eventpage.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();
class EventForm {
    // about_language=0;
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.event_id = 0;
        this.subresult = [];
        this.event_image = 'Select Event Image';
        this.image_path = '';
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' },
                { class: 'akarathi-0', name: 'Akarathi_0' },
                { class: 'tamil-bible', name: 'Tamil Bible' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.eventFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'location': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'fromdate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'todate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'fromtime': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'totime': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'data': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            //'image': new FormControl('', Validators.required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data != null) {
            this.eventFormData.patchValue({
                name: this.data.event_name,
                location: this.data.event_location,
                fromdate: this.data.event_fromdate,
                todate: this.data.event_Todate,
                fromtime: this.data.event_Fromtime,
                totime: this.data.event_Totime,
                description: this.data.event_description,
                status: this.data.status,
                event_id: this.data.event_id,
            });
            this.event_id = this.data.event_id;
            this.image_path = this.data.event_image;
        }
    }
    onSubmit() {
        console.log("text11");
        // if (this.image_path==null ||  this.image_path=='') {
        //   this._snackBar.open("Choose image", '', {
        //     duration: 2000,
        //   });
        //   return;
        // }
        // if (this.eventFormData.invalid) {
        //   return;
        // }
        console.log("text22" + this.event_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.event_id != 0) {
            formData.append('event_name', this.eventFormData.value.name);
            formData.append('event_location', this.eventFormData.value.location);
            formData.append('event_fromdate', this.eventFormData.value.fromdate);
            formData.append('event_Todate', this.eventFormData.value.todate);
            formData.append('event_Fromtime', this.eventFormData.value.fromtime);
            formData.append('event_Totime', this.eventFormData.value.totime);
            formData.append('event_description', this.eventFormData.value.description);
            formData.append('status', this.eventFormData.value.status);
            formData.append('event_image', this.image_path);
            console.log("text--->" + this.event_id);
            url = 'update_record/event/event_id = ' + this.event_id;
        }
        else {
            formData.append('event_name', this.eventFormData.value.name);
            formData.append('event_location', this.eventFormData.value.location);
            formData.append('event_fromdate', this.eventFormData.value.fromdate);
            formData.append('event_Todate', this.eventFormData.value.todate);
            formData.append('event_Fromtime', this.eventFormData.value.fromtime);
            formData.append('event_Totime', this.eventFormData.value.totime);
            formData.append('event_description', this.eventFormData.value.description);
            formData.append('status', this.eventFormData.value.status);
            formData.append('event_image', this.image_path);
            // formData.append('about_language', this.about_language.toString());
            url = 'insert_event';
            console.log("Insert--->" + formData);
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.event_image = 'Select Event Image';
        }
    }
}
EventForm.ɵfac = function EventForm_Factory(t) { return new (t || EventForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
EventForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventForm, selectors: [["event-form"]], decls: 90, vars: 7, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "name"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "location"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "fromdate"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "todate"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "fromtime"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "totime"], ["fxFlex", "100%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "preview-image", 4, "ngIf"], ["fxFlex", "100%"], ["appearance", "outline", "fxFlex", "100%", 1, "example-full-width"], ["matInput", "", "rows", "8", "required", "", "formControlName", "description"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 3, "click"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function EventForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Event Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EventForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tittle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "From Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "To Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, EventForm_button_59_Template, 2, 1, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventForm_Template_input_change_60_listener($event) { return ctx.fileProgress($event, "event_image", "image_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, EventForm_div_62_Template, 5, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Description Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, EventForm_mat_progress_spinner_89_Template, 1, 3, "mat-progress-spinner", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.eventFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'event-form',
                templateUrl: 'event-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class PictureViewEvent {
    constructor(dialogRef, datapopup, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.action = '';
        this.loading = false;
        this.student_register_id = 0;
        if (this.datapopup != null) {
            this.action = this.datapopup.action;
            this.data = this.datapopup.data;
        }
    }
}
PictureViewEvent.ɵfac = function PictureViewEvent_Factory(t) { return new (t || PictureViewEvent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PictureViewEvent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureViewEvent, selectors: [["event-image-view"]], decls: 5, vars: 2, consts: [[1, "mat-typography"], ["class", "member-profile", "mat-card-image", "", "alt", "Photo", 3, "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-card-image", "", "alt", "Photo", 1, "member-profile", 3, "src"]], template: function PictureViewEvent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PictureViewEvent_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardImage"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureViewEvent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'event-image-view',
                templateUrl: 'eventimage-view.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class EventImageForm {
    // about_language=0;
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.event_id = 0;
        this.subresult = [];
        this.pic_1 = 'Add Event Image';
        this.pic_2 = 'Add Event Image';
        this.pic_3 = 'Add Event Image';
        this.pic_4 = 'Add Event Image';
        this.pic_5 = 'Add Event Image';
        this.pic_6 = 'Add Event Image';
        this.pic_7 = 'Add Event Image';
        this.pic_8 = 'Add Event Image';
        this.image_path = '';
        this.image_path2 = '';
        this.image_path3 = '';
        this.image_path4 = '';
        this.image_path5 = '';
        this.image_path6 = '';
        this.image_path7 = '';
        this.image_path8 = '';
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' },
                { class: 'akarathi-0', name: 'Akarathi_0' },
                { class: 'tamil-bible', name: 'Tamil Bible' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.EventImageFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'location': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'fromdate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'todate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'fromtime': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'totime': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'data': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            //'image': new FormControl('', Validators.required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data != null) {
            this.EventImageFormData.patchValue({
                name: this.data.event_name,
                location: this.data.event_location,
                fromdate: this.data.event_fromdate,
                todate: this.data.event_Todate,
                fromtime: this.data.event_Fromtime,
                totime: this.data.event_Totime,
                description: this.data.event_description,
                status: this.data.status,
                event_id: this.data.event_id,
            });
            this.event_id = this.data.event_id;
            this.image_path = this.data.pic_1;
            this.image_path2 = this.data.pic_2;
            this.image_path3 = this.data.pic_3;
            this.image_path4 = this.data.pic_4;
            this.image_path5 = this.data.pic_5;
            this.image_path6 = this.data.pic_6;
            this.image_path7 = this.data.pic_7;
            this.image_path8 = this.data.pic_8;
        }
    }
    onSubmit() {
        console.log("text11");
        // if (this.image_path==null ||  this.image_path=='') {
        //   this._snackBar.open("Choose image", '', {
        //     duration: 2000,
        //   });
        //   return;
        // }
        // console.log("text22"+this.event_id );
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.event_id != 0) {
            formData.append('pic_1', this.image_path);
            formData.append('pic_2', this.image_path2);
            formData.append('pic_3', this.image_path3);
            formData.append('pic_4', this.image_path4);
            formData.append('pic_5', this.image_path5);
            formData.append('pic_6', this.image_path6);
            formData.append('pic_7', this.image_path7);
            formData.append('pic_8', this.image_path8);
            console.log("text--->" + this.event_id);
            url = 'update_record/Events/event_id = ' + this.event_id;
        }
        else {
            formData.append('pic_1', this.image_path);
            formData.append('pic_2', this.image_path2);
            formData.append('pic_3', this.image_path3);
            formData.append('pic_4', this.image_path4);
            formData.append('pic_5', this.image_path5);
            formData.append('pic_6', this.image_path6);
            formData.append('pic_7', this.image_path7);
            formData.append('pic_8', this.image_path8);
            url = 'insert_event';
            console.log("Insert--->" + formData);
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path, inputElement) {
        const fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        const formData = new FormData();
        formData.append('file', fileData);
        // Replace 'your-upload-api-url' with your actual API endpoint for file upload
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_imgfile', formData).subscribe((res) => {
            this.loading = false;
            if (res.result.error === false) {
                this[path] = res.result.data;
            }
            else {
                // Handle error messages as needed
            }
        }, (error) => {
            this.loading = false;
            // Handle HTTP error, e.g., display an error message
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.pic_1 = 'Select Event Image';
        }
        if (url === 'image_path2') {
            this.pic_2 = 'Select Event Image';
        }
        if (url === 'image_path3') {
            this.pic_3 = 'Select Event Image';
        }
        if (url === 'image_path4') {
            this.pic_4 = 'Select Event Image';
        }
        if (url === 'image_path5') {
            this.pic_5 = 'Select Event Image';
        }
        if (url === 'image_path6') {
            this.pic_6 = 'Select Event Image';
        }
        if (url === 'image_path7') {
            this.pic_7 = 'Select Event Image';
        }
        if (url === 'image_path8') {
            this.pic_8 = 'Select Event Image';
        }
    }
}
EventImageForm.ɵfac = function EventImageForm_Factory(t) { return new (t || EventImageForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
EventImageForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventImageForm, selectors: [["event-imageform"]], viewQuery: function EventImageForm_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput5 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput6 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput7 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput8 = _t.first);
    } }, decls: 104, vars: 21, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], [2, "font-weight", "800"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "33%", 1, "dialog-picture"], ["for", "file1", 1, "file-label"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file1", 3, "change"], ["fileInput1", ""], ["class", "preview-image", 4, "ngIf"], ["for", "file2", 1, "file-label"], ["hidden", "", "type", "file", "id", "file2", 3, "change"], ["fileInput2", ""], ["for", "file3", 1, "file-label"], ["hidden", "", "type", "file", "id", "file3", 3, "change"], ["fileInput3", ""], ["for", "file4", 1, "file-label"], ["hidden", "", "type", "file", "id", "file4", 3, "change"], ["fileInput4", ""], ["for", "file5", 1, "file-label"], ["hidden", "", "type", "file", "id", "file5", 3, "change"], ["fileInput5", ""], ["for", "file6", 1, "file-label"], ["hidden", "", "type", "file", "id", "file6", 3, "change"], ["fileInput6", ""], ["for", "file7", 1, "file-label"], ["hidden", "", "type", "file", "id", "file7", 3, "change"], ["fileInput7", ""], ["for", "file8", 1, "file-label"], ["hidden", "", "type", "file", "id", "file8", 3, "change"], ["fileInput8", ""], ["fxFlex", "33%"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "tittle"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "date"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 2, "width", "100%", "height", "200px", "object-fit", "cover", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 3, "click"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function EventImageForm_Template(rf, ctx) { if (rf & 1) {
        const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Event Images / Videos Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EventImageForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EventImageForm_button_17_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventImageForm_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.fileProgress($event, "pic_1", "image_path", _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EventImageForm_div_20_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EventImageForm_button_23_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventImageForm_Template_input_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return ctx.fileProgress($event, "pic_2", "image_path2", _r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EventImageForm_div_26_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, EventImageForm_button_29_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventImageForm_Template_input_change_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.fileProgress($event, "pic_3", "image_path3", _r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EventImageForm_div_32_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EventImageForm_button_38_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventImageForm_Template_input_change_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); return ctx.fileProgress($event, "pic_4", "image_path4", _r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EventImageForm_div_41_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, EventImageForm_button_44_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventImageForm_Template_input_change_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46); return ctx.fileProgress($event, "pic_5", "image_path5", _r13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EventImageForm_div_47_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, EventImageForm_button_50_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventImageForm_Template_input_change_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return ctx.fileProgress($event, "pic_6", "image_path6", _r16); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, EventImageForm_div_53_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, EventImageForm_button_59_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventImageForm_Template_input_change_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61); return ctx.fileProgress($event, "pic_7", "image_path7", _r19); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, EventImageForm_div_62_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, EventImageForm_button_65_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventImageForm_Template_input_change_66_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67); return ctx.fileProgress($event, "pic_8", "image_path8", _r22); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, EventImageForm_div_68_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "You Tube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "You Tube id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "You Tube id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "You Tube id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, EventImageForm_mat_progress_spinner_103_Template, 1, 3, "mat-progress-spinner", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.EventImageFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path2 == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path2 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path3 == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path3 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path4 == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path4 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path5 == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path5 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path6 == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path6 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path7 == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path7 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path8 == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path8 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatError"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventImageForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'event-imageform',
                templateUrl: 'event-imageform.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { fileInput1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput1']
        }], fileInput2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput2']
        }], fileInput3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput3']
        }], fileInput4: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput4']
        }], fileInput5: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput5']
        }], fileInput6: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput6']
        }], fileInput7: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput7']
        }], fileInput8: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput8']
        }] }); })();


/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent, GalleryForm, PictureViewGallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryForm", function() { return GalleryForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureViewGallery", function() { return PictureViewGallery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");





























function GalleryComponent_ng_container_11_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_ng_container_11_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.confirmDialog(data_r2, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r3.image_url, "", data_r2.gallery_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleryComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_ng_container_11_img_2_Template, 1, 2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_ng_container_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openDialog(data_r2.gallery_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_ng_container_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openConfirmationDialog(data_r2.gallery_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 10, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.gallery_image && data_r2.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r2.gallery_descrption, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function GalleryComponent_ngx_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function GalleryForm_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryForm_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.gallery_image);
} }
function GalleryForm_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryForm_div_17_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.image_url, "", ctx_r2.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleryForm_mat_progress_spinner_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 30);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function PictureViewGallery_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.image_url, "", ctx_r0.data["gallery_image"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class GalleryComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getGallery();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.gallery_id = id;
                this.getGalleryDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    getGalleryDelete() {
        if (this.gallery_id == null || this.gallery_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'gallery';
        var where = 'gallery_id=' + this.gallery_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getGallery();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getGallery() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_gallery')
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
            if (!this.result) {
                this._snackBar.open("Records Empty", '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openDialog(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.gallery_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(GalleryForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data,
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getGallery();
            }
        });
    }
    confirmDialog(id, action) {
        var data = null;
        if (id != 0) {
            data = id;
        }
        const dialogRef = this.dialog.open(PictureViewGallery, {
            minWidth: "40%",
            maxWidth: "40%",
            data: {
                data: data,
                action: action
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 13, vars: 2, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [1, "add-btn-container"], ["mat-raised-button", "", 2, "background-color", "#e7b73b", 3, "click"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["matListAvatar", "", "alt", "image", 3, "src", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "Edit"], ["tooltip", "matTooltip"], ["matTooltip", "Delete"], ["mat-line", "", 3, "innerHTML"], ["matListAvatar", "", "alt", "image", 3, "src", "click"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_button_click_6_listener() { return ctx.openDialog(0, "null"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GalleryComponent_ng_container_11_Template, 13, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GalleryComponent_ngx_spinner_12_Template, 3, 1, "ngx-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListAvatarCssMatStyler"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();
class GalleryForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.gallery_id = 0;
        this.subresult = [];
        this.gallery_image = 'Select Banner Image';
        this.image_path = '';
        this.about_language = 0;
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' },
                { class: 'akarathi-0', name: 'Akarathi_0' },
                { class: 'tamil-bible', name: 'Tamil Bible' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.GalleryFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //'name': new FormControl('', Validators.required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            //'image': new FormControl('', Validators.required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data != null) {
            this.GalleryFormData.patchValue({
                //name: this.data.gallery_name,
                description: this.data.gallery_descrption,
                status: this.data.status,
                gallery_id: this.data.gallery_id,
            });
            this.gallery_id = this.data.gallery_id;
            this.image_path = this.data.gallery_image;
        }
    }
    onSubmit() {
        console.log("text11");
        if (this.image_path == null || this.image_path == '') {
            this._snackBar.open("Choose image", '', {
                duration: 2000,
            });
            return;
        }
        if (this.GalleryFormData.invalid) {
            return;
        }
        console.log("text22" + this.gallery_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.gallery_id != 0) {
            //formData.append('gallery_name', this.GalleryFormData.value.name);       
            formData.append('gallery_descrption', this.GalleryFormData.value.description);
            formData.append('status', this.GalleryFormData.value.status);
            formData.append('gallery_image', this.image_path);
            console.log("text--->" + this.gallery_id);
            url = 'update_record/gallery/gallery_id = ' + this.gallery_id;
        }
        else {
            //formData.append('gallery_name', this.GalleryFormData.value.name);
            formData.append('gallery_descrption', this.GalleryFormData.value.description);
            formData.append('status', this.GalleryFormData.value.status);
            formData.append('gallery_image', this.image_path);
            // formData.append('about_language', this.about_language.toString());
            url = 'insert_gallery';
            console.log("Insert--->" + formData);
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.gallery_image = 'Select Banner Image';
        }
    }
}
GalleryForm.ɵfac = function GalleryForm_Factory(t) { return new (t || GalleryForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
GalleryForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryForm, selectors: [["gallery-form"]], decls: 45, vars: 7, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "50%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "preview-image", 4, "ngIf"], ["fxFlex", "100%"], ["appearance", "outline", "fxFlex", "100%", 1, "example-full-width"], ["matInput", "", "rows", "8", "required", "", "formControlName", "description"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 3, "click"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function GalleryForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gallery Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GalleryForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GalleryForm_button_14_Template, 2, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GalleryForm_Template_input_change_15_listener($event) { return ctx.fileProgress($event, "gallery_image", "image_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GalleryForm_div_17_Template, 5, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Gallery Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, GalleryForm_mat_progress_spinner_44_Template, 1, 3, "mat-progress-spinner", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.GalleryFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-form',
                templateUrl: 'gallery-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class PictureViewGallery {
    constructor(dialogRef, datapopup, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.action = '';
        this.loading = false;
        this.student_register_id = 0;
        if (this.datapopup != null) {
            this.action = this.datapopup.action;
            this.data = this.datapopup.data;
        }
    }
}
PictureViewGallery.ɵfac = function PictureViewGallery_Factory(t) { return new (t || PictureViewGallery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PictureViewGallery.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureViewGallery, selectors: [["galleryimage-view"]], decls: 5, vars: 2, consts: [[1, "mat-typography"], ["class", "member-profile", "mat-card-image", "", "alt", "Photo", 3, "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-card-image", "", "alt", "Photo", 1, "member-profile", 3, "src"]], template: function PictureViewGallery_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PictureViewGallery_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardImage"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureViewGallery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'galleryimage-view',
                templateUrl: 'galleryimage-view.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







class HeaderComponent {
    constructor(router, confirmationDialogService) {
        this.router = router;
        this.confirmationDialogService = confirmationDialogService;
    }
    ngOnInit() {
    }
    openConfirmationDialog() {
        this.confirmationDialogService.confirm('Logout', 'Are you sure ? Logout..! ' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.router.navigateByUrl('/login');
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    onSubmit() {
        console.log("button Clicked");
        this.router.navigateByUrl('/login');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 0, consts: [[2, "color", "white"], ["mat-mini-fab", "", "aria-label", "Logout", 1, "logout-btn-title", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trust Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener() { return ctx.openConfirmationDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["mat-toolbar-row[_ngcontent-%COMP%] {\r\n    background: #c84403 !important;\r\n}\r\n.logout-btn-title[_ngcontent-%COMP%]{\r\n    margin-left: auto !important;\r\n    background-color: #e7b73b;\r\n    color: black;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzg0NDAzICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ291dC1idG4tdGl0bGV7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3YjczYjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/homebanner/homebanner.component.ts":
/*!****************************************************!*\
  !*** ./src/app/homebanner/homebanner.component.ts ***!
  \****************************************************/
/*! exports provided: HomebannerComponent, HomeBannerForm, PictureViewHomeBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomebannerComponent", function() { return HomebannerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBannerForm", function() { return HomeBannerForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureViewHomeBanner", function() { return PictureViewHomeBanner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");





























function HomebannerComponent_ng_container_11_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomebannerComponent_ng_container_11_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.confirmDialog(data_r2, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r3.image_url, "", data_r2.home_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomebannerComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomebannerComponent_ng_container_11_img_2_Template, 1, 2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomebannerComponent_ng_container_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openDialog(data_r2.home_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomebannerComponent_ng_container_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openConfirmationDialog(data_r2.home_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 10, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.home_image && data_r2.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r2.home_description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function HomebannerComponent_ngx_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function HomeBannerForm_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeBannerForm_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.home_image);
} }
function HomeBannerForm_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeBannerForm_div_17_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.image_url, "", ctx_r2.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeBannerForm_mat_progress_spinner_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 30);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function PictureViewHomeBanner_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.image_url, "", ctx_r0.data["home_image"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class HomebannerComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getHomebanner();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.home_id = id;
                this.getHomebannerDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    getHomebannerDelete() {
        if (this.home_id == null || this.home_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'home_banner';
        var where = 'home_id=' + this.home_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getHomebanner();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getHomebanner() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allbanners')
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openDialog(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.home_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(HomeBannerForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getHomebanner();
            }
        });
        console.log("haiiiiiiiiiiiiiiii");
        console.log(id);
        console.log(data);
    }
    confirmDialog(id, action) {
        var data = null;
        if (id != 0) {
            data = id;
        }
        const dialogRef = this.dialog.open(PictureViewHomeBanner, {
            minWidth: "40%",
            maxWidth: "40%",
            data: {
                data: data,
                action: action
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
HomebannerComponent.ɵfac = function HomebannerComponent_Factory(t) { return new (t || HomebannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
HomebannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomebannerComponent, selectors: [["app-homebanner"]], decls: 13, vars: 2, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [1, "add-btn-container"], ["mat-raised-button", "", 2, "background-color", "#e7b73b", 3, "click"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", " #9755e2", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["matListAvatar", "", "alt", "image", 3, "src", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "Edit"], ["tooltip", "matTooltip"], ["matTooltip", "Delete"], ["mat-line", "", 3, "innerHTML"], ["matListAvatar", "", "alt", "image", 3, "src", "click"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", " #9755e2", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function HomebannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomebannerComponent_Template_button_click_6_listener() { return ctx.openDialog(0, "null"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomebannerComponent_ng_container_11_Template, 13, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomebannerComponent_ngx_spinner_12_Template, 3, 1, "ngx-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListAvatarCssMatStyler"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWViYW5uZXIvaG9tZWJhbm5lci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomebannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homebanner',
                templateUrl: './homebanner.component.html',
                styleUrls: ['./homebanner.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();
class HomeBannerForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.home_id = 0;
        this.subresult = [];
        this.home_image = 'Select Banner Image';
        this.image_path = '';
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' },
                { class: 'akarathi-0', name: 'Akarathi_0' },
                { class: 'tamil-bible', name: 'Tamil Bible' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.HomeBannerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //'home_id': new FormControl('', Validators.required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        console.log("haiii");
        console.log(this.data);
        if (this.data != null) {
            console.log("welcome");
            this.HomeBannerForm.patchValue({
                description: this.data.home_description,
                status: this.data.status,
                home_id: this.data.home_id,
            });
            this.home_id = this.data.home_id;
            this.image_path = this.data.home_image;
        }
        // this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_Allbanners')
        //   .subscribe(
        //     (res) => {
        //       this.subresult = res["result"]["data"];              
        //     },
        //     (error) => {
        //       this._snackBar.open(error["statusText"], '', {
        //         duration: 2000,
        //       });
        //     }
        //   );
    }
    getInnerHTML(val) {
        return val.replace(/(<([^>]+)>)/ig, '');
    }
    onSubmit() {
        console.log("text11");
        if (this.HomeBannerForm.invalid) {
            return;
        }
        console.log("text22" + this.home_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.home_id != 0) {
            //formData.append('home_id', this.HomeBannerForm.value.home_id);       
            formData.append('home_description', this.HomeBannerForm.value.description);
            formData.append('status', this.HomeBannerForm.value.status);
            formData.append('home_image', this.image_path);
            console.log("text33" + this.home_id);
            url = 'update_record/home_banner/home_id = ' + this.home_id;
        }
        else {
            //formData.append('home_id', this.HomeBannerForm.value.home_id);
            formData.append('home_description', this.HomeBannerForm.value.description);
            formData.append('status', this.HomeBannerForm.value.status);
            formData.append('home_image', this.image_path);
            url = 'insert_homebanner';
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.home_image = 'Select Banner Image';
        }
    }
}
HomeBannerForm.ɵfac = function HomeBannerForm_Factory(t) { return new (t || HomeBannerForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
HomeBannerForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeBannerForm, selectors: [["homebanner-form"]], decls: 45, vars: 7, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "100%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "preview-image", 4, "ngIf"], ["fxFlex", "100%"], ["appearance", "outline", "fxFlex", "100%", 1, "example-full-width"], ["matInput", "", "rows", "8", "required", "", "formControlName", "description"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 3, "click"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function HomeBannerForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home Banner Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeBannerForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeBannerForm_button_14_Template, 2, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeBannerForm_Template_input_change_15_listener($event) { return ctx.fileProgress($event, "home_image", "image_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeBannerForm_div_17_Template, 5, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Banner Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HomeBannerForm_mat_progress_spinner_44_Template, 1, 3, "mat-progress-spinner", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.HomeBannerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeBannerForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'homebanner-form',
                templateUrl: 'homebanner-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class PictureViewHomeBanner {
    constructor(dialogRef, datapopup, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.action = '';
        this.loading = false;
        this.student_register_id = 0;
        if (this.datapopup != null) {
            this.action = this.datapopup.action;
            this.data = this.datapopup.data;
        }
    }
}
PictureViewHomeBanner.ɵfac = function PictureViewHomeBanner_Factory(t) { return new (t || PictureViewHomeBanner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PictureViewHomeBanner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureViewHomeBanner, selectors: [["homeimage-view"]], decls: 5, vars: 2, consts: [[1, "mat-typography"], ["class", "member-profile", "mat-card-image", "", "alt", "Photo", 3, "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-card-image", "", "alt", "Photo", 1, "member-profile", 3, "src"]], template: function PictureViewHomeBanner_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PictureViewHomeBanner_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardImage"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureViewHomeBanner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'homeimage-view',
                templateUrl: 'homeimage-view.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/jamydavismessage/jamydavismessage.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/jamydavismessage/jamydavismessage.component.ts ***!
  \****************************************************************/
/*! exports provided: JamydavismessageComponent, JamyMessageForm, JamyVideoForm, JamyAudioForm, JamyPictureViewAboutMessage, JamyPictureViewAboutAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JamydavismessageComponent", function() { return JamydavismessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JamyMessageForm", function() { return JamyMessageForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JamyVideoForm", function() { return JamyVideoForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JamyAudioForm", function() { return JamyAudioForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JamyPictureViewAboutMessage", function() { return JamyPictureViewAboutMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JamyPictureViewAboutAudio", function() { return JamyPictureViewAboutAudio; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/__ivy_ngcc__/fesm2015/ngx-youtube-player.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
































function JamydavismessageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openDialog(0, "null"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Articles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JamydavismessageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openDialogaudio(0, "null"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Audios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JamydavismessageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.openDialogvedio(0, "null"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Videos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JamydavismessageComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "speaker_notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0\u00A0Articles ");
} }
function JamydavismessageComponent_mat_tab_group_11_ng_container_3_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_11_ng_container_3_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const data_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.confirmDialog(data_r18, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r19.image_url, "", data_r18.articles_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JamydavismessageComponent_mat_tab_group_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JamydavismessageComponent_mat_tab_group_11_ng_container_3_img_2_Template, 1, 2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_11_ng_container_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const data_r18 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.openDialog(data_r18.articles_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_11_ng_container_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const data_r18 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.openConfirmationDialog(data_r18.articles_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r18.articles_image && data_r18.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r18.articles_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function JamydavismessageComponent_mat_tab_group_11_ng_container_6_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_11_ng_container_6_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.confirmDialog(data_r29, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r30.image_url, "", data_r29.articles_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JamydavismessageComponent_mat_tab_group_11_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JamydavismessageComponent_mat_tab_group_11_ng_container_6_img_2_Template, 1, 2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_11_ng_container_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const data_r29 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.openDialog(data_r29.articles_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_11_ng_container_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const data_r29 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.openConfirmationDialog(data_r29.articles_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r29.articles_image && data_r29.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r29.articles_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function JamydavismessageComponent_mat_tab_group_11_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function JamydavismessageComponent_mat_tab_group_11_Template_mat_tab_group_selectedIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.selectedIndex = $event; })("selectedTabChange", function JamydavismessageComponent_mat_tab_group_11_Template_mat_tab_group_selectedTabChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.onTabChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JamydavismessageComponent_mat_tab_group_11_ng_container_3_Template, 13, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JamydavismessageComponent_mat_tab_group_11_ng_container_6_Template, 13, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx_r4.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.result);
} }
function JamydavismessageComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "library_music");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0\u00A0Audios ");
} }
function JamydavismessageComponent_mat_tab_group_14_ng_container_3_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_14_ng_container_3_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const data_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.confirmDialogaudio(data_r45, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r46.image_url, "", data_r45.audio_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JamydavismessageComponent_mat_tab_group_14_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r47.image_url, "", data_r45.audio_link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JamydavismessageComponent_mat_tab_group_14_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JamydavismessageComponent_mat_tab_group_14_ng_container_3_img_2_Template, 1, 2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JamydavismessageComponent_mat_tab_group_14_ng_container_3_div_3_Template, 4, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_14_ng_container_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const data_r45 = ctx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.openDialogaudio(data_r45.audio_id, "resultaudio"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_14_ng_container_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const data_r45 = ctx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.openConfirmationDialog(data_r45.audio_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r45.audio_image && data_r45.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r45.audio_link != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r45.audio_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r45.audio_date, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function JamydavismessageComponent_mat_tab_group_14_ng_container_6_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_14_ng_container_6_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const data_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.confirmDialogaudio(data_r58, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r59.image_url, "", data_r58.audio_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JamydavismessageComponent_mat_tab_group_14_ng_container_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r60.image_url, "", data_r58.audio_link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JamydavismessageComponent_mat_tab_group_14_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JamydavismessageComponent_mat_tab_group_14_ng_container_6_img_2_Template, 1, 2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JamydavismessageComponent_mat_tab_group_14_ng_container_6_div_3_Template, 4, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_14_ng_container_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const data_r58 = ctx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.openDialogaudio(data_r58.audio_id, "resultaudio"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_14_ng_container_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const data_r58 = ctx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.openConfirmationDialog(data_r58.audio_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r58.audio_image && data_r58.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r58.audio_link != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r58.audio_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r58.audio_date, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function JamydavismessageComponent_mat_tab_group_14_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function JamydavismessageComponent_mat_tab_group_14_Template_mat_tab_group_selectedIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.selectedIndex = $event; })("selectedTabChange", function JamydavismessageComponent_mat_tab_group_14_Template_mat_tab_group_selectedTabChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.onTabChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JamydavismessageComponent_mat_tab_group_14_ng_container_3_Template, 15, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JamydavismessageComponent_mat_tab_group_14_ng_container_6_Template, 15, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx_r6.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.resultaudio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.resultaudio);
} }
function JamydavismessageComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "theaters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0\u00A0Videos ");
} }
function JamydavismessageComponent_mat_tab_group_17_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_17_div_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const data_r76 = ctx.$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.openDialogvedio(data_r76.video_id, "resultvideo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_17_div_3_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const data_r76 = ctx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r81.openConfirmationDialog(data_r76.video_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "youtube-player", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function JamydavismessageComponent_mat_tab_group_17_div_3_Template_youtube_player_ready_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r82.savePlayer($event); })("change", function JamydavismessageComponent_mat_tab_group_17_div_3_Template_youtube_player_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r83.onStateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r76 = ctx.$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 4, data_r76.video_name, 0, 20) + "..", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r76.video_date + "\u00A0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", data_r76.video_youtubeid)("playerVars", ctx_r74.playerVars);
} }
function JamydavismessageComponent_mat_tab_group_17_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_17_div_6_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const data_r84 = ctx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r87.openDialogvedio(data_r84.video_id, "resultvideo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamydavismessageComponent_mat_tab_group_17_div_6_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const data_r84 = ctx.$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r89.openConfirmationDialog(data_r84.video_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "youtube-player", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function JamydavismessageComponent_mat_tab_group_17_div_6_Template_youtube_player_ready_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.savePlayer($event); })("change", function JamydavismessageComponent_mat_tab_group_17_div_6_Template_youtube_player_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r91.onStateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r84 = ctx.$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 4, data_r84.video_name, 0, 20) + "..", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r84.video_date + "\u00A0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", data_r84.video_youtubeid)("playerVars", ctx_r75.playerVars);
} }
function JamydavismessageComponent_mat_tab_group_17_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function JamydavismessageComponent_mat_tab_group_17_Template_mat_tab_group_selectedIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.selectedIndex = $event; })("selectedTabChange", function JamydavismessageComponent_mat_tab_group_17_Template_mat_tab_group_selectedTabChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.onTabChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JamydavismessageComponent_mat_tab_group_17_div_3_Template, 22, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JamydavismessageComponent_mat_tab_group_17_div_6_Template, 22, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx_r8.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.resultvideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.resultvideo);
} }
function JamydavismessageComponent_ngx_spinner_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function JamyMessageForm_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamyMessageForm_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.articles_image);
} }
function JamyMessageForm_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamyMessageForm_div_32_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.image_url, "", ctx_r2.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JamyMessageForm_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "pdf-viewer", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.image_url + ctx_r4.pdf_path)("original-size", false);
} }
function JamyMessageForm_mat_progress_spinner_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 38);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function JamyVideoForm_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "youtube-player", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function JamyVideoForm_div_44_Template_youtube_player_ready_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.savePlayer($event); })("change", function JamyVideoForm_div_44_Template_youtube_player_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onStateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r0.id)("playerVars", ctx_r0.playerVars);
} }
function JamyVideoForm_mat_progress_spinner_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function JamyAudioForm_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamyAudioForm_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.audio_image);
} }
function JamyAudioForm_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamyAudioForm_div_32_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.image_url, "", ctx_r2.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JamyAudioForm_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r4.image_url, "", ctx_r4.mp3_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JamyAudioForm_mat_progress_spinner_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 34);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function JamyPictureViewAboutMessage_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.image_url, "", ctx_r0.data["articles_image"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JamyPictureViewAboutAudio_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.image_url, "", ctx_r0.data["audio_image"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class JamydavismessageComponent {
    //http://vallalarforall.com/vallalar_app_api/v1/uploads/user1.jpg
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.resultaudio = [];
        this.resultvideo = [];
        this.loading = false;
        this.about_language = 0;
        this.hollmattab = 0;
        this.admin_id = 2;
        this.table = 'articles';
        this.where = 'articles_id=' + this.articles_id;
        this.selectedIndex = 0;
        this.id = '';
        this.playerVars = {
            cc_lang_pref: 'en'
        };
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getArticels();
    }
    onStateChange(event) {
        this.ytEvent = event.data;
    }
    savePlayer(player) {
        this.player = player;
    }
    playVideo() {
        this.player.playVideo();
    }
    pauseVideo() {
        this.player.pauseVideo();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                console.log('Home:', this.hollmattab);
                if (this.hollmattab == 0) {
                    this.articles_id = id;
                    this.table = 'articles';
                    this.where = 'articles_id=' + this.articles_id;
                    this.getArticelsDelete();
                }
                if (this.hollmattab == 1) {
                    this.audio_id = id;
                    this.table = 'Audios';
                    this.where = 'audio_id=' + this.audio_id;
                    this.getArticelsDelete();
                }
                if (this.hollmattab == 2) {
                    this.video_id = id;
                    this.table = 'videos';
                    this.where = 'video_id=' + this.video_id;
                    this.getArticelsDelete();
                }
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    getArticelsDelete() {
        if ((this.articles_id == null || this.articles_id == 0) && this.hollmattab == 0) {
            return;
        }
        if ((this.audio_id == null || this.audio_id == 0) && this.hollmattab == 1) {
            return;
        }
        if ((this.video_id == null || this.video_id == 0) && this.hollmattab == 2) {
            return;
        }
        this.loading = true;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + this.table + '/' + this.where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            if (this.hollmattab == 0) {
                this.getArticels();
            }
            if (this.hollmattab == 1) {
                this.getAudios();
            }
            if (this.hollmattab == 2) {
                this.getVideos();
            }
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    onTabChanged($event) {
        let clickedIndex = $event.index;
        console.log(clickedIndex);
        if (this.result != null) {
            while (this.result.length > 0) {
                this.result.pop();
            }
        }
        if (this.resultaudio != null) {
            while (this.resultaudio.length > 0) {
                this.resultaudio.pop();
            }
        }
        if (this.resultvideo != null) {
            while (this.resultvideo.length > 0) {
                this.resultvideo.pop();
            }
        }
        this.about_language = clickedIndex;
        if (this.hollmattab == 0) {
            this.getArticels();
        }
        if (this.hollmattab == 1) {
            this.getAudios();
        }
        if (this.hollmattab == 2) {
            this.getVideos();
        }
    }
    onTabChangedAll($event) {
        let clickedIndex = $event.index;
        console.log(clickedIndex);
        this.hollmattab = clickedIndex;
        this.about_language = 0;
        this.selectedIndex = 0;
        if (this.hollmattab == 0) {
            this.getArticels();
        }
        if (this.hollmattab == 1) {
            this.getAudios();
        }
        if (this.hollmattab == 2) {
            this.getVideos();
        }
    }
    getArticels() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allarticles/' + this.admin_id + '/' + this.about_language)
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
            if (!this.result) {
                this._snackBar.open("Records Empty", '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getAudios() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allaudio/' + this.admin_id + '/' + this.about_language)
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.resultaudio = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
            if (!this.resultaudio) {
                this._snackBar.open("Records Empty", '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getVideos() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allvideos/' + this.admin_id + '/' + this.about_language)
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.resultvideo = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
            if (!this.resultvideo) {
                this._snackBar.open("Records Empty", '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openDialog(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.articles_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(JamyMessageForm, {
            minWidth: "40%",
            maxWidth: "40%",
            //data: data,
            data: {
                data: data,
                about_language: this.about_language,
                admin_id: this.admin_id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getArticels();
            }
        });
    }
    openDialogvedio(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.video_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(JamyVideoForm, {
            minWidth: "40%",
            maxWidth: "40%",
            //data: data,
            data: {
                data: data,
                about_language: this.about_language,
                admin_id: this.admin_id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getVideos();
            }
        });
    }
    openDialogaudio(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.audio_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(JamyAudioForm, {
            minWidth: "40%",
            maxWidth: "40%",
            //data: data,
            data: {
                data: data,
                about_language: this.about_language,
                admin_id: this.admin_id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getAudios();
            }
        });
    }
    confirmDialog(id, action) {
        var data = null;
        if (id != 0) {
            data = id;
        }
        const dialogRef = this.dialog.open(JamyPictureViewAboutMessage, {
            minWidth: "40%",
            maxWidth: "40%",
            data: {
                data: data,
                action: action
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    confirmDialogaudio(id, action) {
        var data = null;
        if (id != 0) {
            data = id;
        }
        const dialogRef = this.dialog.open(JamyPictureViewAboutAudio, {
            minWidth: "40%",
            maxWidth: "40%",
            data: {
                data: data,
                action: action
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
JamydavismessageComponent.ɵfac = function JamydavismessageComponent_Factory(t) { return new (t || JamydavismessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
JamydavismessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JamydavismessageComponent, selectors: [["app-jamydavismessage"]], decls: 19, vars: 7, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], ["class", "add-btn-container", 4, "ngIf"], [3, "selectedTabChange"], ["mat-tab-label", ""], [3, "selectedIndex", "selectedIndexChange", "selectedTabChange", 4, "ngIf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], [1, "add-btn-container"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["label", "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"], [4, "ngFor", "ngForOf"], ["label", "English"], ["matListAvatar", "", "alt", "image", 3, "src", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "Edit"], ["tooltip", "matTooltip"], ["matTooltip", "Delete"], ["mat-line", "", 3, "innerHTML"], ["matListAvatar", "", "alt", "image", 3, "src", "click"], ["fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "center center"], ["controls", ""], ["type", "audio/mp3", 3, "src"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 2, "padding", "10px"], ["fxFlex", "32", 4, "ngFor", "ngForOf"], ["fxFlex", "32"], [2, "margin-bottom", "10px"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxFlex", "70"], ["mat-card-avatar", "", "src", "./assets/loginlogo.jpg", 2, "background-color", "dodgerblue", "size", ""], [1, "btn-01"], ["fxFlex", "30"], [3, "videoId", "playerVars", "ready", "change"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function JamydavismessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, JamydavismessageComponent_div_5_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JamydavismessageComponent_div_6_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JamydavismessageComponent_div_7_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function JamydavismessageComponent_Template_mat_tab_group_selectedTabChange_8_listener($event) { return ctx.onTabChangedAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, JamydavismessageComponent_ng_template_10_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, JamydavismessageComponent_mat_tab_group_11_Template, 7, 3, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, JamydavismessageComponent_ng_template_13_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, JamydavismessageComponent_mat_tab_group_14_Template, 7, 3, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, JamydavismessageComponent_ng_template_16_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, JamydavismessageComponent_mat_tab_group_17_Template, 7, 3, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, JamydavismessageComponent_ngx_spinner_18_Template, 3, 1, "ngx-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListAvatarCssMatStyler"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardSubtitle"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_21__["YoutubePlayerComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardContent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"]], styles: ["[_nghost-%COMP%]     .mat-card .mat-card-header-text{\r\n    display: none !important;\r\n     margin: 0 16px;\r\n    }\r\n    .btn-01[_ngcontent-%COMP%]{\r\n        display: inline-block;\r\n        padding: 0px 0px 0px 8px;\r\n        position: relative;\r\n         top: 13px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvamFteWRhdmlzbWVzc2FnZS9qYW15ZGF2aXNtZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7S0FDdkIsY0FBYztJQUNmO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLGtCQUFrQjtTQUNqQixTQUFTO0lBQ2QiLCJmaWxlIjoic3JjL2FwcC9qYW15ZGF2aXNtZXNzYWdlL2phbXlkYXZpc21lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LWNhcmQgLm1hdC1jYXJkLWhlYWRlci10ZXh0e1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi0wMXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgdG9wOiAxM3B4O1xyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JamydavismessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jamydavismessage',
                templateUrl: './jamydavismessage.component.html',
                styleUrls: ['./jamydavismessage.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();
class JamyMessageForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.articles_id = 0;
        this.subresult = [];
        this.articles_image = 'Select Banner Image';
        this.articles_pdf = 'Select Pdf File';
        this.image_path = '';
        this.pdf_path = '';
        this.about_language = 0;
        this.admin_id = 2;
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.MessageFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'tittle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            //'pdf': new FormControl('', Validators.required),
            //'description': new FormControl('', Validators.required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data.data != null) {
            this.MessageFormData.patchValue({
                tittle: this.data.data.articles_name,
                //pdf:this.data.data.articles_pdf,
                date: this.data.data.articles_date,
                status: this.data.data.status,
                articles_id: this.data.data.articles_id,
            });
            this.articles_id = this.data.data.articles_id;
            this.image_path = this.data.data.articles_image;
            this.pdf_path = this.data.data.articles_pdf;
            this.src = this.image_url + this.data.data.articles_pdf;
        }
        this.about_language = this.data.about_language;
        this.admin_id = this.data.admin_id;
        console.log("texttttttttt--->" + this.data.about_language);
    }
    onSubmit() {
        console.log("text11");
        if (this.pdf_path == null || this.pdf_path == '') {
            this._snackBar.open("Choose Pdf File", '', {
                duration: 2000,
            });
            return;
        }
        if (this.MessageFormData.invalid) {
            return;
        }
        console.log("text22" + this.articles_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.articles_id != 0) {
            formData.append('articles_name', this.MessageFormData.value.tittle);
            formData.append('articles_pdf', this.pdf_path);
            //formData.append('about_text', this.MessageFormData.value.description);
            formData.append('articles_date', this.MessageFormData.value.date);
            formData.append('status', this.MessageFormData.value.status);
            formData.append('articles_image', this.image_path);
            console.log("text--->" + this.articles_id);
            url = 'update_record/articles/articles_id = ' + this.articles_id;
        }
        else {
            formData.append('articles_name', this.MessageFormData.value.tittle);
            formData.append('articles_date', this.MessageFormData.value.date);
            formData.append('articles_pdf', this.pdf_path);
            // formData.append('about_text', this.MessageFormData.value.description);
            formData.append('status', this.MessageFormData.value.status);
            formData.append('articles_image', this.image_path);
            formData.append('about_language', this.about_language.toString());
            formData.append('admin_id', this.admin_id.toString());
            url = 'insert_articels';
            console.log("Insert--->" + formData);
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        console.log("test..");
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
                console.log(this[path]);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgressPdf(fileInput, name, path) {
        console.log("test..");
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_pdffile', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
                console.log(this[path]);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.articles_image = 'Select Banner Image';
        }
    }
    removePdf(url) {
        this[url] = '';
        if (url === 'pdf_path') {
            this.articles_image = 'Select Pdf File';
        }
    }
}
JamyMessageForm.ɵfac = function JamyMessageForm_Factory(t) { return new (t || JamyMessageForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
JamyMessageForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JamyMessageForm, selectors: [["message-form"]], decls: 65, vars: 9, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "tittle"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "date"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "center center"], ["fxFlex", "100%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "preview-image", 4, "ngIf"], ["fxLayout", "column", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "center center"], ["fxFlex", "50%", "fxLayoutAlign", "center center"], ["type", "button", "mat-stroked-button", "", 1, "icon-bottom-save", 3, "click"], ["hidden", "", "type", "file", "id", "file", "accept", ".pdf", 3, "change"], ["fileInputpdf", ""], ["fxFlex", "50%", "fxLayoutAlign", "center center", 4, "ngIf"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 1, "mat-icon-button-picture", 3, "click"], [1, "pdf-container"], [3, "src", "original-size"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function JamyMessageForm_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Articles Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function JamyMessageForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tittle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, JamyMessageForm_button_29_Template, 2, 1, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function JamyMessageForm_Template_input_change_30_listener($event) { return ctx.fileProgress($event, "articles_image", "image_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, JamyMessageForm_div_32_Template, 5, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamyMessageForm_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function JamyMessageForm_Template_input_change_41_listener($event) { return ctx.fileProgressPdf($event, "articles_pdf", "pdf_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, JamyMessageForm_div_45_Template, 3, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, JamyMessageForm_mat_progress_spinner_64_Template, 1, 3, "mat-progress-spinner", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.MessageFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.articles_pdf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pdf_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_23__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardImage"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_27__["PdfViewerComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JamyMessageForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'message-form',
                templateUrl: 'message-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class JamyVideoForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.id = '';
        this.playerVars = {
            cc_lang_pref: 'en'
        };
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.video_id = 0;
        this.subresult = [];
        this.video_image = 'Select Banner Image';
        this.articles_pdf = 'Select Pdf File';
        this.image_path = '';
        this.pdf_path = '';
        this.about_language = 0;
        this.admin_id = 2;
        this.VideoFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'tittle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'youtubevideo_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            //'description': new FormControl('', Validators.required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data.data != null) {
            this.VideoFormData.patchValue({
                tittle: this.data.data.video_name,
                youtubevideo_id: this.data.data.video_youtubeid,
                date: this.data.data.video_date,
                status: this.data.data.status,
                video_id: this.data.data.video_id,
            });
            this.video_id = this.data.data.video_id;
            this.image_path = this.data.data.video_image;
            //this.pdf_path = this.data.data.articles_pdf;
            this.id = this.data.data.video_youtubeid;
        }
        this.about_language = this.data.about_language;
        this.admin_id = this.data.admin_id;
        console.log("texttttttttt--->" + this.data.about_language);
    }
    onStateChange(event) {
        this.ytEvent = event.data;
    }
    savePlayer(player) {
        this.player = player;
    }
    playVideo() {
        this.player.playVideo();
    }
    pauseVideo() {
        this.player.pauseVideo();
    }
    onSubmit() {
        console.log("text11");
        if (this.VideoFormData.invalid) {
            return;
        }
        console.log("text22" + this.video_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.video_id != 0) {
            formData.append('video_name', this.VideoFormData.value.tittle);
            //formData.append('articles_pdf', this.pdf_path);       
            formData.append('	video_youtubeid', this.VideoFormData.value.youtubevideo_id);
            formData.append('video_date', this.VideoFormData.value.date);
            formData.append('status', this.VideoFormData.value.status);
            //formData.append('articles_image', this.image_path);
            console.log("text--->" + this.video_id);
            url = 'update_record/videos/video_id = ' + this.video_id;
        }
        else {
            formData.append('video_name', this.VideoFormData.value.tittle);
            formData.append('video_youtubeid', this.VideoFormData.value.youtubevideo_id);
            //formData.append('articles_pdf', this.pdf_path);
            formData.append('video_date', this.VideoFormData.value.date);
            formData.append('status', this.VideoFormData.value.status);
            //formData.append('articles_image', this.image_path);
            formData.append('about_language', this.about_language.toString());
            formData.append('admin_id', this.admin_id.toString());
            url = 'insert_videos';
            console.log("Insert--->" + formData);
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
}
JamyVideoForm.ɵfac = function JamyVideoForm_Factory(t) { return new (t || JamyVideoForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
JamyVideoForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JamyVideoForm, selectors: [["video-form"]], decls: 52, vars: 6, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "tittle"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "date"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "youtubevideo_id"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], [3, "videoId", "playerVars", "ready", "change"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function JamyVideoForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Video Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function JamyVideoForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tittle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Youtube Video ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Id is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, JamyVideoForm_div_44_Template, 2, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, JamyVideoForm_mat_progress_spinner_51_Template, 1, 3, "mat-progress-spinner", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.VideoFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_23__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_21__["YoutubePlayerComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JamyVideoForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'video-form',
                templateUrl: 'video-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class JamyAudioForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.audio_id = 0;
        this.subresult = [];
        this.audio_image = 'Select Banner Image';
        this.audio_link = 'Select MP3 File';
        this.image_path = '';
        this.mp3_path = '';
        this.about_language = 0;
        this.admin_id = 2;
        this.AudioFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'tittle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            //'mp3': new FormControl('', Validators.required),
            //'description': new FormControl('', Validators.required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data.data != null) {
            this.AudioFormData.patchValue({
                tittle: this.data.data.audio_name,
                // pdf:this.data.data.audio_link,
                date: this.data.data.audio_date,
                status: this.data.data.status,
                audio_id: this.data.data.audio_id,
            });
            this.audio_id = this.data.data.audio_id;
            this.image_path = this.data.data.audio_image;
            this.mp3_path = this.data.data.audio_link;
        }
        this.about_language = this.data.about_language;
        this.admin_id = this.data.admin_id;
        console.log("texttttttttt--->" + this.data.about_language);
    }
    onSubmit() {
        console.log("text11");
        if (this.mp3_path == null || this.mp3_path == '') {
            this._snackBar.open("Choose Audio File", '', {
                duration: 2000,
            });
            return;
        }
        if (this.AudioFormData.invalid) {
            return;
        }
        console.log("text22" + this.audio_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.audio_id != 0) {
            formData.append('audio_name', this.AudioFormData.value.tittle);
            formData.append('audio_link', this.mp3_path);
            //formData.append('about_text', this.AudioFormData.value.description);
            formData.append('audio_date', this.AudioFormData.value.date);
            formData.append('status', this.AudioFormData.value.status);
            formData.append('audio_image', this.image_path);
            console.log("text--->" + this.audio_id);
            url = 'update_record/Audios/audio_id = ' + this.audio_id;
        }
        else {
            formData.append('audio_name', this.AudioFormData.value.tittle);
            formData.append('audio_date', this.AudioFormData.value.date);
            formData.append('audio_link', this.mp3_path);
            // formData.append('about_text', this.AudioFormData.value.description);
            formData.append('status', this.AudioFormData.value.status);
            formData.append('audio_image', this.image_path);
            formData.append('about_language', this.about_language.toString());
            formData.append('admin_id', this.admin_id.toString());
            url = 'insert_Audios';
            console.log("Insert--->" + formData);
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        console.log("test..");
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
                console.log(this[path]);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    //http://vallalarforall.com/vallalar_app_api/v1/upload_audiofile
    fileProgressaudio(fileInput, name, path) {
        console.log("test..");
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_audiofile', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
                console.log(this[path]);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    /*editorConfig: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: '100px',
      minHeight: '100px',
      maxHeight: '100px',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        { class: 'arial', name: 'Arial' },
        { class: 'times-new-roman', name: 'Times New Roman' },
        { class: 'calibri', name: 'Calibri' },
        { class: 'comic-sans-ms', name: 'Comic Sans MS' }
      ],
      customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ],
      uploadUrl: 'v1/image',
      sanitize: true,
      toolbarPosition: 'top',
    };*/
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.audio_image = 'Select Banner Image';
        }
    }
    removePdf(url) {
        this[url] = '';
        if (url === 'pdf_path') {
            this.audio_link = 'Select MP3 File';
        }
    }
}
JamyAudioForm.ɵfac = function JamyAudioForm_Factory(t) { return new (t || JamyAudioForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
JamyAudioForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JamyAudioForm, selectors: [["audio-form"]], decls: 66, vars: 9, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "tittle"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "date"], ["fxFlex", "50%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "preview-image", 4, "ngIf"], ["fxLayout", "column", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click"], ["hidden", "", "type", "file", "id", "file", "accept", ".mp3", 3, "change"], ["fileInputmp3", ""], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 3, "click"], ["controls", ""], ["type", "audio/mp3", 3, "src"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function JamyAudioForm_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Audio Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function JamyAudioForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tittle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, JamyAudioForm_button_29_Template, 2, 1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function JamyAudioForm_Template_input_change_30_listener($event) { return ctx.fileProgress($event, "audio_image", "image_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, JamyAudioForm_div_32_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JamyAudioForm_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function JamyAudioForm_Template_input_change_40_listener($event) { return ctx.fileProgressaudio($event, "audio_link", "mp3_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, JamyAudioForm_div_46_Template, 4, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, JamyAudioForm_mat_progress_spinner_65_Template, 1, 3, "mat-progress-spinner", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.AudioFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.audio_link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mp3_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_23__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JamyAudioForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'audio-form',
                templateUrl: 'audio-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class JamyPictureViewAboutMessage {
    constructor(dialogRef, datapopup, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.action = '';
        this.loading = false;
        this.student_register_id = 0;
        if (this.datapopup != null) {
            this.action = this.datapopup.action;
            this.data = this.datapopup.data;
        }
    }
}
JamyPictureViewAboutMessage.ɵfac = function JamyPictureViewAboutMessage_Factory(t) { return new (t || JamyPictureViewAboutMessage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
JamyPictureViewAboutMessage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JamyPictureViewAboutMessage, selectors: [["messageimage-view"]], decls: 5, vars: 2, consts: [[1, "mat-typography"], ["class", "member-profile", "mat-card-image", "", "alt", "Photo", 3, "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-card-image", "", "alt", "Photo", 1, "member-profile", 3, "src"]], template: function JamyPictureViewAboutMessage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JamyPictureViewAboutMessage_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardImage"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JamyPictureViewAboutMessage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'messageimage-view',
                templateUrl: 'messageimage-view.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class JamyPictureViewAboutAudio {
    constructor(dialogRef, datapopup, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.action = '';
        this.loading = false;
        this.student_register_id = 0;
        if (this.datapopup != null) {
            this.action = this.datapopup.action;
            this.data = this.datapopup.data;
        }
    }
}
JamyPictureViewAboutAudio.ɵfac = function JamyPictureViewAboutAudio_Factory(t) { return new (t || JamyPictureViewAboutAudio)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
JamyPictureViewAboutAudio.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JamyPictureViewAboutAudio, selectors: [["audioimage-view"]], decls: 5, vars: 2, consts: [[1, "mat-typography"], ["class", "member-profile", "mat-card-image", "", "alt", "Photo", 3, "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-card-image", "", "alt", "Photo", 1, "member-profile", 3, "src"]], template: function JamyPictureViewAboutAudio_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JamyPictureViewAboutAudio_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardImage"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JamyPictureViewAboutAudio, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'audioimage-view',
                templateUrl: 'audioimage-view.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/johnydavismessage/johnydavismessage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/johnydavismessage/johnydavismessage.component.ts ***!
  \******************************************************************/
/*! exports provided: JohnydavismessageComponent, MessageForm, VideoForm, AudioForm, PictureViewAboutMessage, PictureViewAboutAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JohnydavismessageComponent", function() { return JohnydavismessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageForm", function() { return MessageForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoForm", function() { return VideoForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioForm", function() { return AudioForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureViewAboutMessage", function() { return PictureViewAboutMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureViewAboutAudio", function() { return PictureViewAboutAudio; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/__ivy_ngcc__/fesm2015/ngx-youtube-player.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
































function JohnydavismessageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openDialog(0, "null"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Articles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JohnydavismessageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openDialogaudio(0, "null"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Audios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JohnydavismessageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.openDialogvedio(0, "null"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Videos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JohnydavismessageComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "speaker_notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0\u00A0Articles ");
} }
function JohnydavismessageComponent_mat_tab_group_11_ng_container_3_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_11_ng_container_3_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const data_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.confirmDialog(data_r18, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r19.image_url, "", data_r18.articles_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JohnydavismessageComponent_mat_tab_group_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JohnydavismessageComponent_mat_tab_group_11_ng_container_3_img_2_Template, 1, 2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_11_ng_container_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const data_r18 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.openDialog(data_r18.articles_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_11_ng_container_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const data_r18 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.openConfirmationDialog(data_r18.articles_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r18.articles_image && data_r18.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r18.articles_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function JohnydavismessageComponent_mat_tab_group_11_ng_container_6_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_11_ng_container_6_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.confirmDialog(data_r29, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r30.image_url, "", data_r29.articles_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JohnydavismessageComponent_mat_tab_group_11_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JohnydavismessageComponent_mat_tab_group_11_ng_container_6_img_2_Template, 1, 2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_11_ng_container_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const data_r29 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.openDialog(data_r29.articles_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_11_ng_container_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const data_r29 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.openConfirmationDialog(data_r29.articles_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r29.articles_image && data_r29.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r29.articles_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function JohnydavismessageComponent_mat_tab_group_11_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function JohnydavismessageComponent_mat_tab_group_11_Template_mat_tab_group_selectedIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.selectedIndex = $event; })("selectedTabChange", function JohnydavismessageComponent_mat_tab_group_11_Template_mat_tab_group_selectedTabChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.onTabChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JohnydavismessageComponent_mat_tab_group_11_ng_container_3_Template, 13, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JohnydavismessageComponent_mat_tab_group_11_ng_container_6_Template, 13, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx_r4.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.result);
} }
function JohnydavismessageComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "library_music");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0\u00A0Audios ");
} }
function JohnydavismessageComponent_mat_tab_group_14_ng_container_3_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_14_ng_container_3_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const data_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.confirmDialogaudio(data_r45, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r46.image_url, "", data_r45.audio_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JohnydavismessageComponent_mat_tab_group_14_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r47.image_url, "", data_r45.audio_link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JohnydavismessageComponent_mat_tab_group_14_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JohnydavismessageComponent_mat_tab_group_14_ng_container_3_img_2_Template, 1, 2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JohnydavismessageComponent_mat_tab_group_14_ng_container_3_div_3_Template, 4, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_14_ng_container_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const data_r45 = ctx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.openDialogaudio(data_r45.audio_id, "resultaudio"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_14_ng_container_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const data_r45 = ctx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.openConfirmationDialog(data_r45.audio_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r45.audio_image && data_r45.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r45.audio_link != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r45.audio_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r45.audio_date, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function JohnydavismessageComponent_mat_tab_group_14_ng_container_6_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_14_ng_container_6_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const data_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.confirmDialogaudio(data_r58, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r59.image_url, "", data_r58.audio_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JohnydavismessageComponent_mat_tab_group_14_ng_container_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r60.image_url, "", data_r58.audio_link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JohnydavismessageComponent_mat_tab_group_14_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JohnydavismessageComponent_mat_tab_group_14_ng_container_6_img_2_Template, 1, 2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JohnydavismessageComponent_mat_tab_group_14_ng_container_6_div_3_Template, 4, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_14_ng_container_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const data_r58 = ctx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.openDialogaudio(data_r58.audio_id, "resultaudio"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_14_ng_container_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const data_r58 = ctx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.openConfirmationDialog(data_r58.audio_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r58.audio_image && data_r58.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r58.audio_link != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r58.audio_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r58.audio_date, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function JohnydavismessageComponent_mat_tab_group_14_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function JohnydavismessageComponent_mat_tab_group_14_Template_mat_tab_group_selectedIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.selectedIndex = $event; })("selectedTabChange", function JohnydavismessageComponent_mat_tab_group_14_Template_mat_tab_group_selectedTabChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.onTabChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JohnydavismessageComponent_mat_tab_group_14_ng_container_3_Template, 15, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JohnydavismessageComponent_mat_tab_group_14_ng_container_6_Template, 15, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx_r6.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.resultaudio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.resultaudio);
} }
function JohnydavismessageComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "theaters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0\u00A0Videos ");
} }
function JohnydavismessageComponent_mat_tab_group_17_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_17_div_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const data_r76 = ctx.$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.openDialogvedio(data_r76.video_id, "resultvideo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_17_div_3_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const data_r76 = ctx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r81.openConfirmationDialog(data_r76.video_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "youtube-player", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function JohnydavismessageComponent_mat_tab_group_17_div_3_Template_youtube_player_ready_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r82.savePlayer($event); })("change", function JohnydavismessageComponent_mat_tab_group_17_div_3_Template_youtube_player_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r83.onStateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r76 = ctx.$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 4, data_r76.video_name, 0, 20) + "..", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r76.video_date + "\u00A0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", data_r76.video_youtubeid)("playerVars", ctx_r74.playerVars);
} }
function JohnydavismessageComponent_mat_tab_group_17_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_17_div_6_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const data_r84 = ctx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r87.openDialogvedio(data_r84.video_id, "resultvideo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JohnydavismessageComponent_mat_tab_group_17_div_6_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const data_r84 = ctx.$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r89.openConfirmationDialog(data_r84.video_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "youtube-player", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function JohnydavismessageComponent_mat_tab_group_17_div_6_Template_youtube_player_ready_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.savePlayer($event); })("change", function JohnydavismessageComponent_mat_tab_group_17_div_6_Template_youtube_player_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r91.onStateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r84 = ctx.$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 4, data_r84.video_name, 0, 20) + "..", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r84.video_date + "\u00A0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", data_r84.video_youtubeid)("playerVars", ctx_r75.playerVars);
} }
function JohnydavismessageComponent_mat_tab_group_17_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function JohnydavismessageComponent_mat_tab_group_17_Template_mat_tab_group_selectedIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.selectedIndex = $event; })("selectedTabChange", function JohnydavismessageComponent_mat_tab_group_17_Template_mat_tab_group_selectedTabChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.onTabChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JohnydavismessageComponent_mat_tab_group_17_div_3_Template, 22, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JohnydavismessageComponent_mat_tab_group_17_div_6_Template, 22, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx_r8.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.resultvideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.resultvideo);
} }
function JohnydavismessageComponent_ngx_spinner_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function MessageForm_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageForm_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.articles_image);
} }
function MessageForm_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageForm_div_32_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.image_url, "", ctx_r2.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MessageForm_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "pdf-viewer", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.image_url + ctx_r4.pdf_path)("original-size", false);
} }
function MessageForm_mat_progress_spinner_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 38);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function VideoForm_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "youtube-player", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function VideoForm_div_44_Template_youtube_player_ready_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.savePlayer($event); })("change", function VideoForm_div_44_Template_youtube_player_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onStateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r0.id)("playerVars", ctx_r0.playerVars);
} }
function VideoForm_mat_progress_spinner_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function AudioForm_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioForm_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.audio_image);
} }
function AudioForm_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioForm_div_32_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.image_url, "", ctx_r2.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AudioForm_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r4.image_url, "", ctx_r4.mp3_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AudioForm_mat_progress_spinner_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 34);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function PictureViewAboutMessage_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.image_url, "", ctx_r0.data["articles_image"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PictureViewAboutAudio_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.image_url, "", ctx_r0.data["audio_image"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class JohnydavismessageComponent {
    //http://vallalarforall.com/vallalar_app_api/v1/uploads/user1.jpg
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.resultaudio = [];
        this.resultvideo = [];
        this.loading = false;
        this.about_language = 0;
        this.hollmattab = 0;
        this.admin_id = 1;
        this.table = 'articles';
        this.where = 'articles_id=' + this.articles_id;
        this.selectedIndex = 0;
        this.id = '';
        this.playerVars = {
            cc_lang_pref: 'en'
        };
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getArticels();
    }
    onStateChange(event) {
        this.ytEvent = event.data;
    }
    savePlayer(player) {
        this.player = player;
    }
    playVideo() {
        this.player.playVideo();
    }
    pauseVideo() {
        this.player.pauseVideo();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                console.log('Home:', this.hollmattab);
                if (this.hollmattab == 0) {
                    this.articles_id = id;
                    this.table = 'articles';
                    this.where = 'articles_id=' + this.articles_id;
                    this.getArticelsDelete();
                }
                if (this.hollmattab == 1) {
                    this.audio_id = id;
                    this.table = 'Audios';
                    this.where = 'audio_id=' + this.audio_id;
                    this.getArticelsDelete();
                }
                if (this.hollmattab == 2) {
                    this.video_id = id;
                    this.table = 'videos';
                    this.where = 'video_id=' + this.video_id;
                    this.getArticelsDelete();
                }
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    getArticelsDelete() {
        if ((this.articles_id == null || this.articles_id == 0) && this.hollmattab == 0) {
            return;
        }
        if ((this.audio_id == null || this.audio_id == 0) && this.hollmattab == 1) {
            return;
        }
        if ((this.video_id == null || this.video_id == 0) && this.hollmattab == 2) {
            return;
        }
        this.loading = true;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + this.table + '/' + this.where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            if (this.hollmattab == 0) {
                this.getArticels();
            }
            if (this.hollmattab == 1) {
                this.getAudios();
            }
            if (this.hollmattab == 2) {
                this.getVideos();
            }
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    onTabChanged($event) {
        let clickedIndex = $event.index;
        console.log("tab-->" + clickedIndex);
        if (this.result != null) {
            while (this.result.length > 0) {
                this.result.pop();
            }
        }
        if (this.resultaudio != null) {
            while (this.resultaudio.length > 0) {
                this.resultaudio.pop();
            }
        }
        if (this.resultvideo != null) {
            while (this.resultvideo.length > 0) {
                this.resultvideo.pop();
            }
        }
        this.about_language = clickedIndex;
        if (this.hollmattab == 0) {
            this.getArticels();
        }
        if (this.hollmattab == 1) {
            this.getAudios();
        }
        if (this.hollmattab == 2) {
            this.getVideos();
        }
    }
    onTabChangedAll($event) {
        let clickedIndex = $event.index;
        console.log("alltab--" + clickedIndex);
        this.hollmattab = clickedIndex;
        this.about_language = 0;
        this.selectedIndex = 0;
        if (this.hollmattab == 0) {
            this.getArticels();
        }
        if (this.hollmattab == 1) {
            this.getAudios();
        }
        if (this.hollmattab == 2) {
            this.getVideos();
        }
    }
    getArticels() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allarticles/' + this.admin_id + '/' + this.about_language)
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
            if (!this.result) {
                this._snackBar.open("Records Empty", '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getAudios() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allaudio/' + this.admin_id + '/' + this.about_language)
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.resultaudio = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
            if (!this.resultaudio) {
                this._snackBar.open("Records Empty", '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getVideos() {
        this.loading = true;
        this.showSpinner('sp3');
        console.log("Texstingfunction");
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allvideos/' + this.admin_id + '/' + this.about_language)
            .subscribe((res) => {
            console.log("Texsting");
            this.resultvideo = res["result"]["data"];
            //console.log(this.result );
            this.loading = false;
            this.hideSpinner('sp3');
            if (!this.resultvideo) {
                this._snackBar.open("Records Empty", '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openDialog(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.articles_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(MessageForm, {
            minWidth: "40%",
            maxWidth: "40%",
            //data: data,
            data: {
                data: data,
                about_language: this.about_language,
                admin_id: this.admin_id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getArticels();
            }
        });
    }
    openDialogvedio(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.video_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(VideoForm, {
            minWidth: "40%",
            maxWidth: "40%",
            //data: data,
            data: {
                data: data,
                about_language: this.about_language,
                admin_id: this.admin_id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getVideos();
            }
        });
    }
    openDialogaudio(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.audio_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(AudioForm, {
            minWidth: "40%",
            maxWidth: "40%",
            //data: data,
            data: {
                data: data,
                about_language: this.about_language,
                admin_id: this.admin_id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getAudios();
            }
        });
    }
    confirmDialog(id, action) {
        var data = null;
        if (id != 0) {
            data = id;
        }
        const dialogRef = this.dialog.open(PictureViewAboutMessage, {
            minWidth: "40%",
            maxWidth: "40%",
            data: {
                data: data,
                action: action
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    confirmDialogaudio(id, action) {
        var data = null;
        if (id != 0) {
            data = id;
        }
        const dialogRef = this.dialog.open(PictureViewAboutAudio, {
            minWidth: "40%",
            maxWidth: "40%",
            data: {
                data: data,
                action: action
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
JohnydavismessageComponent.ɵfac = function JohnydavismessageComponent_Factory(t) { return new (t || JohnydavismessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
JohnydavismessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JohnydavismessageComponent, selectors: [["app-johnydavismessage"]], decls: 19, vars: 7, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], ["class", "add-btn-container", 4, "ngIf"], [3, "selectedTabChange"], ["mat-tab-label", ""], [3, "selectedIndex", "selectedIndexChange", "selectedTabChange", 4, "ngIf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], [1, "add-btn-container"], ["mat-raised-button", "", 2, "background-color", "#e7b73b", 3, "click"], [3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["label", "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"], [4, "ngFor", "ngForOf"], ["label", "English"], ["matListAvatar", "", "alt", "image", 3, "src", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "Edit"], ["tooltip", "matTooltip"], ["matTooltip", "Delete"], ["mat-line", "", 3, "innerHTML"], ["matListAvatar", "", "alt", "image", 3, "src", "click"], ["fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "center center"], ["controls", ""], ["type", "audio/mp3", 3, "src"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 2, "padding", "10px"], ["fxFlex", "32", 4, "ngFor", "ngForOf"], ["fxFlex", "32"], [2, "margin-bottom", "10px"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxFlex", "70"], ["mat-card-avatar", "", "src", "./assets/loginlogo.jpg", 2, "background-color", "dodgerblue", "size", ""], [1, "btn-01"], ["fxFlex", "30"], [3, "videoId", "playerVars", "ready", "change"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function JohnydavismessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, JohnydavismessageComponent_div_5_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JohnydavismessageComponent_div_6_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JohnydavismessageComponent_div_7_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function JohnydavismessageComponent_Template_mat_tab_group_selectedTabChange_8_listener($event) { return ctx.onTabChangedAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, JohnydavismessageComponent_ng_template_10_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, JohnydavismessageComponent_mat_tab_group_11_Template, 7, 3, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, JohnydavismessageComponent_ng_template_13_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, JohnydavismessageComponent_mat_tab_group_14_Template, 7, 3, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, JohnydavismessageComponent_ng_template_16_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, JohnydavismessageComponent_mat_tab_group_17_Template, 7, 3, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, JohnydavismessageComponent_ngx_spinner_18_Template, 3, 1, "ngx-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hollmattab == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListAvatarCssMatStyler"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardSubtitle"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_21__["YoutubePlayerComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardContent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"]], styles: ["[_nghost-%COMP%]     .mat-card .mat-card-header-text{\r\ndisplay: none !important;\r\n margin: 0 16px;\r\n}\r\n.btn-01[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding: 0px 0px 0px 8px;\r\n    position: relative;\r\n     top: 13px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9obnlkYXZpc21lc3NhZ2Uvam9obnlkYXZpc21lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLHdCQUF3QjtDQUN2QixjQUFjO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0JBQWtCO0tBQ2pCLFNBQVM7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2pvaG55ZGF2aXNtZXNzYWdlL2pvaG55ZGF2aXNtZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1hdC1jYXJkIC5tYXQtY2FyZC1oZWFkZXItdGV4dHtcclxuZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuLmJ0bi0wMXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICB0b3A6IDEzcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JohnydavismessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-johnydavismessage',
                templateUrl: './johnydavismessage.component.html',
                styleUrls: ['./johnydavismessage.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();
class MessageForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.articles_id = 0;
        this.subresult = [];
        this.articles_image = 'Select Banner Image';
        this.articles_pdf = 'Select Pdf File';
        this.image_path = '';
        this.pdf_path = '';
        this.about_language = 0;
        this.admin_id = 1;
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.MessageFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'tittle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            // 'pdf': new FormControl('', Validators.required),
            //'description': new FormControl('', Validators.required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data.data != null) {
            this.MessageFormData.patchValue({
                tittle: this.data.data.articles_name,
                //pdf:this.data.data.articles_pdf,
                date: this.data.data.articles_date,
                status: this.data.data.status,
                articles_id: this.data.data.articles_id,
            });
            this.articles_id = this.data.data.articles_id;
            this.image_path = this.data.data.articles_image;
            this.pdf_path = this.data.data.articles_pdf;
            this.src = this.image_url + this.data.data.articles_pdf;
        }
        this.about_language = this.data.about_language;
        this.admin_id = this.data.admin_id;
        console.log("texttttttttt--->" + this.data.about_language);
    }
    onSubmit() {
        console.log("text11");
        if (this.pdf_path == null || this.pdf_path == '') {
            this._snackBar.open("Choose Pdf File", '', {
                duration: 2000,
            });
            return;
        }
        if (this.MessageFormData.invalid) {
            return;
        }
        console.log("text22" + this.articles_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.articles_id != 0) {
            formData.append('articles_name', this.MessageFormData.value.tittle);
            formData.append('articles_pdf', this.pdf_path);
            //formData.append('about_text', this.MessageFormData.value.description);
            formData.append('articles_date', this.MessageFormData.value.date);
            formData.append('status', this.MessageFormData.value.status);
            formData.append('articles_image', this.image_path);
            console.log("text--->" + this.articles_id);
            url = 'update_record/articles/articles_id = ' + this.articles_id;
        }
        else {
            formData.append('articles_name', this.MessageFormData.value.tittle);
            formData.append('articles_date', this.MessageFormData.value.date);
            formData.append('articles_pdf', this.pdf_path);
            // formData.append('about_text', this.MessageFormData.value.description);
            formData.append('status', this.MessageFormData.value.status);
            formData.append('articles_image', this.image_path);
            formData.append('about_language', this.about_language.toString());
            formData.append('admin_id', this.admin_id.toString());
            url = 'insert_articels';
            console.log("Insert--->" + formData);
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        console.log("test..");
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
                console.log(this[path]);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgressPdf(fileInput, name, path) {
        console.log("test..");
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_pdffile', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
                console.log(this[path]);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.articles_image = 'Select Banner Image';
        }
    }
    removePdf(url) {
        this[url] = '';
        if (url === 'pdf_path') {
            this.articles_image = 'Select Pdf File';
        }
    }
}
MessageForm.ɵfac = function MessageForm_Factory(t) { return new (t || MessageForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MessageForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageForm, selectors: [["message-form"]], decls: 65, vars: 9, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "tittle"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "date"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "center center"], ["fxFlex", "100%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "preview-image", 4, "ngIf"], ["fxLayout", "column", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "center center"], ["fxFlex", "50%", "fxLayoutAlign", "center center"], ["type", "button", "mat-stroked-button", "", 1, "icon-bottom-save", 3, "click"], ["hidden", "", "type", "file", "id", "file", "accept", ".pdf", 3, "change"], ["fileInputpdf", ""], ["fxFlex", "50%", "fxLayoutAlign", "center center", 4, "ngIf"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 1, "mat-icon-button-picture", 3, "click"], [1, "pdf-container"], [3, "src", "original-size"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function MessageForm_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Articles Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MessageForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tittle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MessageForm_button_29_Template, 2, 1, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MessageForm_Template_input_change_30_listener($event) { return ctx.fileProgress($event, "articles_image", "image_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MessageForm_div_32_Template, 5, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageForm_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MessageForm_Template_input_change_41_listener($event) { return ctx.fileProgressPdf($event, "articles_pdf", "pdf_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MessageForm_div_45_Template, 3, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, MessageForm_mat_progress_spinner_64_Template, 1, 3, "mat-progress-spinner", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.MessageFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.articles_pdf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pdf_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_23__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardImage"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_27__["PdfViewerComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'message-form',
                templateUrl: 'message-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class VideoForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.id = '';
        this.playerVars = {
            cc_lang_pref: 'en'
        };
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.video_id = 0;
        this.subresult = [];
        this.video_image = 'Select Banner Image';
        this.articles_pdf = 'Select Pdf File';
        this.image_path = '';
        this.pdf_path = '';
        this.about_language = 0;
        this.admin_id = 1;
        this.VideoFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'tittle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'youtubevideo_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            //'description': new FormControl('', Validators.required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data.data != null) {
            this.VideoFormData.patchValue({
                tittle: this.data.data.video_name,
                youtubevideo_id: this.data.data.video_youtubeid,
                date: this.data.data.video_date,
                status: this.data.data.status,
                video_id: this.data.data.video_id,
            });
            this.video_id = this.data.data.video_id;
            this.image_path = this.data.data.video_image;
            //this.pdf_path = this.data.data.articles_pdf;
            this.id = this.data.data.video_youtubeid;
        }
        this.about_language = this.data.about_language;
        this.admin_id = this.data.admin_id;
        console.log("texttttttttt--->" + this.data.about_language);
    }
    onStateChange(event) {
        this.ytEvent = event.data;
    }
    savePlayer(player) {
        this.player = player;
    }
    playVideo() {
        this.player.playVideo();
    }
    pauseVideo() {
        this.player.pauseVideo();
    }
    onSubmit() {
        console.log("text11");
        if (this.VideoFormData.invalid) {
            return;
        }
        console.log("text22" + this.video_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.video_id != 0) {
            formData.append('video_name', this.VideoFormData.value.tittle);
            //formData.append('articles_pdf', this.pdf_path);       
            formData.append('video_youtubeid', this.VideoFormData.value.youtubevideo_id);
            formData.append('video_date', this.VideoFormData.value.date);
            formData.append('status', this.VideoFormData.value.status);
            //formData.append('articles_image', this.image_path);
            console.log("text--->" + this.video_id);
            url = 'update_record/videos/video_id = ' + this.video_id;
        }
        else {
            formData.append('video_name', this.VideoFormData.value.tittle);
            formData.append('video_youtubeid', this.VideoFormData.value.youtubevideo_id);
            //formData.append('articles_pdf', this.pdf_path);
            formData.append('video_date', this.VideoFormData.value.date);
            formData.append('status', this.VideoFormData.value.status);
            //formData.append('articles_image', this.image_path);
            formData.append('about_language', this.about_language.toString());
            formData.append('admin_id', this.admin_id.toString());
            url = 'insert_videos';
            console.log("Insert--->" + formData);
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
}
VideoForm.ɵfac = function VideoForm_Factory(t) { return new (t || VideoForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
VideoForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoForm, selectors: [["video-form"]], decls: 52, vars: 6, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "tittle"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "date"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "youtubevideo_id"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], [3, "videoId", "playerVars", "ready", "change"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function VideoForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Video Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function VideoForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tittle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Youtube Video ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Id is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, VideoForm_div_44_Template, 2, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, VideoForm_mat_progress_spinner_51_Template, 1, 3, "mat-progress-spinner", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.VideoFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_23__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ngx_youtube_player__WEBPACK_IMPORTED_MODULE_21__["YoutubePlayerComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'video-form',
                templateUrl: 'video-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class AudioForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.audio_id = 0;
        this.subresult = [];
        this.audio_image = 'Select Banner Image';
        this.audio_link = 'Select MP3 File';
        this.image_path = '';
        this.mp3_path = '';
        this.about_language = 0;
        this.admin_id = 1;
        this.AudioFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'tittle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            //'mp3': new FormControl('', Validators.required),
            //'description': new FormControl('', Validators.required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data.data != null) {
            this.AudioFormData.patchValue({
                tittle: this.data.data.audio_name,
                //mp3:this.data.data.audio_link,
                date: this.data.data.audio_date,
                status: this.data.data.status,
                audio_id: this.data.data.audio_id,
            });
            this.audio_id = this.data.data.audio_id;
            this.image_path = this.data.data.audio_image;
            this.mp3_path = this.data.data.audio_link;
        }
        this.about_language = this.data.about_language;
        this.admin_id = this.data.admin_id;
        console.log("texttttttttt--->" + this.data.about_language);
    }
    onSubmit() {
        console.log("text11");
        if (this.mp3_path == null || this.mp3_path == '') {
            this._snackBar.open("Choose Audio File", '', {
                duration: 2000,
            });
            return;
        }
        if (this.AudioFormData.invalid) {
            return;
        }
        console.log("text22" + this.audio_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.audio_id != 0) {
            formData.append('audio_name', this.AudioFormData.value.tittle);
            formData.append('audio_link', this.mp3_path);
            //formData.append('about_text', this.AudioFormData.value.description);
            formData.append('audio_date', this.AudioFormData.value.date);
            formData.append('status', this.AudioFormData.value.status);
            formData.append('audio_image', this.image_path);
            console.log("text--->" + this.audio_id);
            url = 'update_record/Audios/audio_id = ' + this.audio_id;
        }
        else {
            formData.append('audio_name', this.AudioFormData.value.tittle);
            formData.append('audio_date', this.AudioFormData.value.date);
            formData.append('audio_link', this.mp3_path);
            // formData.append('about_text', this.AudioFormData.value.description);
            formData.append('status', this.AudioFormData.value.status);
            formData.append('audio_image', this.image_path);
            formData.append('about_language', this.about_language.toString());
            formData.append('admin_id', this.admin_id.toString());
            url = 'insert_Audios';
            console.log("Insert--->" + formData);
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        console.log("test..");
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
                console.log(this[path]);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    //http://vallalarforall.com/vallalar_app_api/v1/upload_audiofile
    fileProgressaudio(fileInput, name, path) {
        console.log("test..");
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_audiofile', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
                console.log(this[path]);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    /*editorConfig: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: '100px',
      minHeight: '100px',
      maxHeight: '100px',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        { class: 'arial', name: 'Arial' },
        { class: 'times-new-roman', name: 'Times New Roman' },
        { class: 'calibri', name: 'Calibri' },
        { class: 'comic-sans-ms', name: 'Comic Sans MS' }
      ],
      customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ],
      uploadUrl: 'v1/image',
      sanitize: true,
      toolbarPosition: 'top',
    };*/
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.audio_image = 'Select Banner Image';
        }
    }
    removePdf(url) {
        this[url] = '';
        if (url === 'pdf_path') {
            this.audio_link = 'Select MP3 File';
        }
    }
}
AudioForm.ɵfac = function AudioForm_Factory(t) { return new (t || AudioForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AudioForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioForm, selectors: [["audio-form"]], decls: 66, vars: 9, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "tittle"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "date"], ["fxFlex", "50%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "preview-image", 4, "ngIf"], ["fxLayout", "column", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click"], ["hidden", "", "type", "file", "id", "file", "accept", ".mp3", 3, "change"], ["fileInputmp3", ""], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 3, "click"], ["controls", ""], ["type", "audio/mp3", 3, "src"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function AudioForm_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Audio Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AudioForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tittle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AudioForm_button_29_Template, 2, 1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AudioForm_Template_input_change_30_listener($event) { return ctx.fileProgress($event, "audio_image", "image_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AudioForm_div_32_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioForm_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AudioForm_Template_input_change_40_listener($event) { return ctx.fileProgressaudio($event, "audio_link", "mp3_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AudioForm_div_46_Template, 4, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AudioForm_mat_progress_spinner_65_Template, 1, 3, "mat-progress-spinner", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.AudioFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.audio_link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mp3_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_23__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'audio-form',
                templateUrl: 'audio-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class PictureViewAboutMessage {
    constructor(dialogRef, datapopup, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.action = '';
        this.loading = false;
        this.student_register_id = 0;
        if (this.datapopup != null) {
            this.action = this.datapopup.action;
            this.data = this.datapopup.data;
        }
    }
}
PictureViewAboutMessage.ɵfac = function PictureViewAboutMessage_Factory(t) { return new (t || PictureViewAboutMessage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PictureViewAboutMessage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureViewAboutMessage, selectors: [["messageimage-view"]], decls: 5, vars: 2, consts: [[1, "mat-typography"], ["class", "member-profile", "mat-card-image", "", "alt", "Photo", 3, "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-card-image", "", "alt", "Photo", 1, "member-profile", 3, "src"]], template: function PictureViewAboutMessage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PictureViewAboutMessage_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardImage"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureViewAboutMessage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'messageimage-view',
                templateUrl: 'messageimage-view.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class PictureViewAboutAudio {
    constructor(dialogRef, datapopup, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.action = '';
        this.loading = false;
        this.student_register_id = 0;
        if (this.datapopup != null) {
            this.action = this.datapopup.action;
            this.data = this.datapopup.data;
        }
    }
}
PictureViewAboutAudio.ɵfac = function PictureViewAboutAudio_Factory(t) { return new (t || PictureViewAboutAudio)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PictureViewAboutAudio.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureViewAboutAudio, selectors: [["audioimage-view"]], decls: 5, vars: 2, consts: [[1, "mat-typography"], ["class", "member-profile", "mat-card-image", "", "alt", "Photo", 3, "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-card-image", "", "alt", "Photo", 1, "member-profile", 3, "src"]], template: function PictureViewAboutAudio_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PictureViewAboutAudio_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardImage"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureViewAboutAudio, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'audioimage-view',
                templateUrl: 'audioimage-view.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/kartharinsatham/kartharinsatham.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/kartharinsatham/kartharinsatham.component.ts ***!
  \**************************************************************/
/*! exports provided: KartharinsathamComponent, KartharChurchForm, PictureViewKarthar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KartharinsathamComponent", function() { return KartharinsathamComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KartharChurchForm", function() { return KartharChurchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureViewKarthar", function() { return PictureViewKarthar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");






























function KartharinsathamComponent_ng_container_11_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KartharinsathamComponent_ng_container_11_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.confirmDialog(data_r2, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r3.image_url, "", data_r2.karthar_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function KartharinsathamComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KartharinsathamComponent_ng_container_11_img_2_Template, 1, 2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KartharinsathamComponent_ng_container_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openDialog(data_r2.karthar_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KartharinsathamComponent_ng_container_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openConfirmationDialog(data_r2.karthar_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 10, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.karthar_image && data_r2.imageurl != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r2.karthar_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function KartharinsathamComponent_ngx_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function KartharChurchForm_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.KartharChurchFormData.controls["date"].value, "dd-MM-yyyy"), " ");
} }
function KartharChurchForm_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KartharChurchForm_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); return _r3.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.karthar_image);
} }
function KartharChurchForm_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KartharChurchForm_div_37_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r4.image_url, "", ctx_r4.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function KartharChurchForm_mat_progress_spinner_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 37);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function PictureViewKarthar_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.image_url, "", ctx_r0.data["karthar_image"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class KartharinsathamComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.about_language = 0;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getArticles();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.karthar_id = id;
                this.getArticlesDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    getArticlesDelete() {
        if (this.karthar_id == null || this.karthar_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'kartharin_satham';
        var where = 'karthar_id=' + this.karthar_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getArticles();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getArticles() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_kartharin_satham')
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
            if (!this.result) {
                this._snackBar.open("Records Empty", '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openDialog(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.karthar_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(KartharChurchForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data,
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getArticles();
            }
        });
    }
    confirmDialog(id, action) {
        var data = null;
        if (id != 0) {
            data = id;
        }
        const dialogRef = this.dialog.open(PictureViewKarthar, {
            minWidth: "40%",
            maxWidth: "40%",
            data: {
                data: data,
                action: action
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    changeFunc(event) {
        const data = event;
        const formattedDate = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate();
        console.log("hai-->" + formattedDate);
        //this.date_check= this.datePipe.transform(data, 'yyyy-MM-dd');
    }
}
KartharinsathamComponent.ɵfac = function KartharinsathamComponent_Factory(t) { return new (t || KartharinsathamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
KartharinsathamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KartharinsathamComponent, selectors: [["app-kartharinsatham"]], decls: 13, vars: 2, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [1, "add-btn-container"], ["mat-raised-button", "", 2, "background-color", "#e7b73b", 3, "click"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["matListAvatar", "", "alt", "image", 3, "src", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "Edit"], ["tooltip", "matTooltip"], ["matTooltip", "Delete"], ["mat-line", "", 3, "innerHTML"], ["matListAvatar", "", "alt", "image", 3, "src", "click"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function KartharinsathamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KartharinsathamComponent_Template_button_click_6_listener() { return ctx.openDialog(0, "null"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, KartharinsathamComponent_ng_container_11_Template, 13, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, KartharinsathamComponent_ngx_spinner_12_Template, 3, 1, "ngx-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListAvatarCssMatStyler"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"]], styles: ["@font-face {\r\n    font-family: 'tamilfont';\r\n    src:url(/DavisIPH/admin/assets/fonts/TamilBible.ttf);\r\n  }\r\ntextarea[_ngcontent-%COMP%] {\r\n    font-family: 'tamilfont';\r\n    font-size: inherit;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FydGhhcmluc2F0aGFtL2thcnRoYXJpbnNhdGhhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUdDO0lBQ0csd0JBQXdCO0lBQ3hCLG9EQUFvRDtFQUN0RDtBQUNGO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2thcnRoYXJpbnNhdGhhbS9rYXJ0aGFyaW5zYXRoYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbiBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAndGFtaWxmb250JztcclxuICAgIHNyYzp1cmwoL0RhdmlzSVBIL2FkbWluL2Fzc2V0cy9mb250cy9UYW1pbEJpYmxlLnR0Zik7XHJcbiAgfVxyXG50ZXh0YXJlYSB7XHJcbiAgICBmb250LWZhbWlseTogJ3RhbWlsZm9udCc7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KartharinsathamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kartharinsatham',
                templateUrl: './kartharinsatham.component.html',
                styleUrls: ['./kartharinsatham.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();
class KartharChurchForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.karthar_id = 0;
        this.subresult = [];
        this.karthar_image = 'Select Banner Image';
        this.image_path = '';
        this.about_language = 0;
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' },
                { class: 'akarathi-0', name: 'Akarathi_0' },
                { class: 'tamil-bible', name: 'Tamil Bible' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.KartharChurchFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date()),
            'tittle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'articleno': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data != null) {
            this.KartharChurchFormData.patchValue({
                date: this.data.karthar_date,
                tittle: this.data.karthar_name,
                description: this.data.karthar_description,
                articleno: this.data.karthar_no,
                status: this.data.status,
                karthar_id: this.data.karthar_id,
            });
            this.karthar_id = this.data.karthar_id;
            this.image_path = this.data.karthar_image;
        }
    }
    onSubmit() {
        console.log("text11");
        if (this.KartharChurchFormData.invalid) {
            return;
        }
        console.log("text22" + this.karthar_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.karthar_id != 0) {
            formData.append('karthar_date', this.KartharChurchFormData.value.date);
            formData.append('karthar_name', this.KartharChurchFormData.value.tittle);
            formData.append('karthar_description', this.KartharChurchFormData.value.description);
            formData.append('karthar_no', this.KartharChurchFormData.value.articleno);
            formData.append('status', this.KartharChurchFormData.value.status);
            formData.append('karthar_image', this.image_path);
            console.log("text--->" + this.karthar_id);
            url = 'update_record/kartharin_satham/karthar_id = ' + this.karthar_id;
        }
        else {
            formData.append('karthar_date', this.KartharChurchFormData.value.date);
            formData.append('karthar_name', this.KartharChurchFormData.value.tittle);
            formData.append('karthar_description', this.KartharChurchFormData.value.description);
            formData.append('karthar_no', this.KartharChurchFormData.value.articleno);
            formData.append('status', this.KartharChurchFormData.value.status);
            formData.append('karthar_image', this.image_path);
            url = 'insert_kartharin_satham';
            console.log("Insert--->" + formData);
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.karthar_image = 'Select Banner Image';
        }
    }
}
KartharChurchForm.ɵfac = function KartharChurchForm_Factory(t) { return new (t || KartharChurchForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
KartharChurchForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KartharChurchForm, selectors: [["kartharchurch-form"]], decls: 71, vars: 11, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "tittle"], ["matInput", "", "placeholder", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "100%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "preview-image", 4, "ngIf"], ["fxFlex", "100%"], ["appearance", "outline", "fxFlex", "100%", 1, "example-full-width"], ["matInput", "", "rows", "25", "required", "", "formControlName", "description", 2, "font-family", "tamilfont"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["matInput", "", "placeholder", "", "required", "", "formControlName", "articleno"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 3, "click"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function KartharChurchForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Article Form to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function KartharChurchForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tittle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tittle is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, KartharChurchForm_div_30_Template, 3, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, KartharChurchForm_button_34_Template, 2, 1, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function KartharChurchForm_Template_input_change_35_listener($event) { return ctx.fileProgress($event, "karthar_image", "image_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, KartharChurchForm_div_37_Template, 5, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Article No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Article No is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, KartharChurchForm_mat_progress_spinner_70_Template, 1, 3, "mat-progress-spinner", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.KartharChurchFormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("formControl", ctx.KartharChurchFormData.controls["date"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.KartharChurchFormData.controls["date"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatError"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KartharChurchForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'kartharchurch-form',
                templateUrl: 'kartharchurch-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class PictureViewKarthar {
    constructor(dialogRef, datapopup, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.action = '';
        this.loading = false;
        this.student_register_id = 0;
        if (this.datapopup != null) {
            this.action = this.datapopup.action;
            this.data = this.datapopup.data;
        }
    }
}
PictureViewKarthar.ɵfac = function PictureViewKarthar_Factory(t) { return new (t || PictureViewKarthar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PictureViewKarthar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureViewKarthar, selectors: [["kartharimage-view"]], decls: 5, vars: 2, consts: [[1, "mat-typography"], ["class", "member-profile", "mat-card-image", "", "alt", "Photo", 3, "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-card-image", "", "alt", "Photo", 1, "member-profile", 3, "src"]], template: function PictureViewKarthar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PictureViewKarthar_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardImage"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureViewKarthar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'kartharimage-view',
                templateUrl: 'kartharimage-view.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");







class LoginComponent {
    constructor(_snackBar, router) {
        this._snackBar = _snackBar;
        this.router = router;
        this.loading = false;
        this.messages = '';
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onSubmit() {
        if (this.loginForm.value.username === 'admin' && this.loginForm.value.password === 'Vallalar@123') {
            this.router.navigateByUrl('/trustmessage');
        }
        else {
            this._snackBar.open('Invalid login details', '', {
                duration: 2000,
                panelClass: "error-snackbar"
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 35, vars: 1, consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", "integrity", "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.6.1/css/all.css", "integrity", "sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP", "crossorigin", "anonymous"], [1, "container", "h-100"], [1, "d-flex", "justify-content-center", "h-100"], [1, "user_card"], [1, "d-flex", "justify-content-center"], [1, "brand_logo_container"], ["src", "./assets/church-logo-color (1).png", "alt", "Logo", 1, "brand_logo"], [1, "text_container"], [1, "text_container1"], [1, "d-flex", "justify-content-center", "form_container"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "name", "", "required", "", "formControlName", "username", "value", "", "placeholder", "username", "ng-maxlength", "5", 1, "form-control", "input_user"], [1, "input-group", "mb-2"], [1, "fas", "fa-key"], ["type", "password", "name", "", "value", "", "placeholder", "password", "required", "", "formControlName", "password", 1, "form-control", "input_pass"], [1, "login_container"], ["type", "button", "name", "button", 1, "btn", "login_btn", 3, "click"], [1, "text_container2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Awesome Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Trust Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " App Content Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_19_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u00A9 Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_4__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".user_card[_ngcontent-%COMP%] {\r\n        height: 417px;\r\n        width: 363px;\r\n        margin-top: auto;\r\n        margin-bottom: auto;\r\n        background: #601019;\r\n        position: relative;\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        padding: 10px;\r\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n        -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n        -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n        border-radius: 5px;\r\n\r\n    }\r\n    .brand_logo_container[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        height: 170px;\r\n        width: 170px;\r\n        top: -75px;\r\n        border-radius: 50%;\r\n        background: #ebedef;\r\n        padding: 10px;\r\n        text-align: center;\r\n    }\r\n    .brand_logo[_ngcontent-%COMP%] {\r\n        height: 150px;\r\n        width: 150px;\r\n        border-radius: 50%;\r\n        border: 5px solid;\r\n        border-color: #c84403;\r\n    }\r\n    .form_container[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n    }\r\n    .login_btn[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        background: #e7b73b !important;\r\n        color: black !important;\r\n    }\r\n    .login_btn[_ngcontent-%COMP%]:focus {\r\n        box-shadow: none !important;\r\n        outline: 0px !important;\r\n    }\r\n    .login_container[_ngcontent-%COMP%] {\r\n        padding: 19px 2rem;\r\n       \r\n    }\r\n    .text_container[_ngcontent-%COMP%] {\r\n            color: white;\r\n            font-size: x-large;\r\n            align-content: center;\r\n            align-self: center;\r\n            margin-top: 100px;\r\n    }\r\n    .text_container1[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-size: 17px !important;\r\n        align-content: center;\r\n        align-self: center;\r\n        margin-top: 1px;\r\n}\r\n    .text_container2[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 12px !important;\r\n    align-content: center;\r\n    align-self: center;\r\n    margin-top: 2px;\r\n    text-align: center;\r\n}\r\n    .mb-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\r\n        margin-bottom: 2rem!important;\r\n    }\r\n    .input-group-text[_ngcontent-%COMP%] {\r\n        background: #e7b73b !important;\r\n        color: white !important;\r\n        border: 0 !important;\r\n        border-radius: 0.25rem 0 0 0.25rem !important;\r\n    }\r\n    .input_user[_ngcontent-%COMP%], .input_pass[_ngcontent-%COMP%]:focus {\r\n        box-shadow: none !important;\r\n        outline: 0px !important;\r\n    }\r\n    .custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]::before {\r\n        background-color: #c0392b !important;\r\n    }\r\n    .red-snackbar[_ngcontent-%COMP%]{\r\n        background-color: rgb(153, 50, 50) !important;\r\n        color:lightgoldenrodyellow !important;\r\n      }\r\n    .green-snackbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        background-color: rgb(29, 102, 29) !important;\r\n        color:lightgreen ;\r\n    }\r\n    [_nghost-%COMP%]     .error-snackbar {\r\n        background: fuchsia !important;\r\n      }\r\n    [_nghost-%COMP%]      .mat-simple-snackbar ng-star-inserted {\r\n        display: flex;\r\n        justify-content: center  !important;\r\n        align-items: center;\r\n        line-height: 20px;\r\n        opacity: 1;\r\n        font-size: 18px  !important; \r\n        color: blue !important;;\r\n      }\r\n    [_nghost-%COMP%]     .mat-snack-bar-center  {\r\n        color: rgba(255, 255, 255, 0.7);\r\n        background: #229ae0 !important;\r\n      }\r\n    .mat-simple-snackbar[_ngcontent-%COMP%]   ng-star-inserted[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: center  !important;\r\n        align-items: center;\r\n        line-height: 20px;\r\n        opacity: 1;\r\n        font-size: 18px  !important; \r\n        color: blue !important;;\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQzs7Ozs7Ozs7TUFRSztJQUNGO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLDRFQUE0RTtRQUM1RSxvRkFBb0Y7UUFDcEYsaUZBQWlGO1FBQ2pGLGtCQUFrQjs7SUFFdEI7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsWUFBWTtRQUNaLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztRQUNYLDhCQUE4QjtRQUM5Qix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtCQUFrQjs7SUFFdEI7SUFDQTtZQUNRLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixpQkFBaUI7SUFDekI7SUFDQTtRQUNJLFlBQVk7UUFDWiwwQkFBMEI7UUFDMUIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixlQUFlO0FBQ3ZCO0lBQ0E7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQiw2Q0FBNkM7SUFDakQ7SUFDQTs7UUFFSSwyQkFBMkI7UUFDM0IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxvQ0FBb0M7SUFDeEM7SUFDQTtRQUNJLDZDQUE2QztRQUM3QyxxQ0FBcUM7TUFDdkM7SUFHRjtRQUNJLDZDQUE2QztRQUM3QyxpQkFBaUI7SUFDckI7SUFFQTtRQUNJLDhCQUE4QjtNQUNoQztJQUNGO1FBQ0ksYUFBYTtRQUNiLG1DQUFtQztRQUNuQyxtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDViwyQkFBMkI7UUFDM0Isc0JBQXNCO01BQ3hCO0lBQ0E7UUFDRSwrQkFBK0I7UUFDL0IsOEJBQThCO01BQ2hDO0lBQ0E7UUFDRSxhQUFhO1FBQ2IsbUNBQW1DO1FBQ25DLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLDJCQUEyQjtRQUMzQixzQkFBc0I7TUFDeEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHQvKiBDb2RlZCB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltIFxyXG4gICAgYm9keSxcclxuICAgIGh0bWwge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICBcclxuICAgIH0qL1xyXG4gICAgLnVzZXJfY2FyZCB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MTdweDtcclxuICAgICAgICB3aWR0aDogMzYzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2MDEwMTk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnJhbmRfbG9nb19jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICB0b3A6IC03NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlZGVmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJyYW5kX2xvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNjODQ0MDM7XHJcbiAgICB9XHJcbiAgICAuZm9ybV9jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAubG9naW5fYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTdiNzNiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubG9naW5fYnRuOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubG9naW5fY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxOXB4IDJyZW07XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC50ZXh0X2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dF9jb250YWluZXIxIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuLnRleHRfY29udGFpbmVyMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4gICAgLm1iLTMsIC5teS0zIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTdiNzNiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmlucHV0X3VzZXIsXHJcbiAgICAuaW5wdXRfcGFzczpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJlZC1zbmFja2JhcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCA1MCwgNTApICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6bGlnaHRnb2xkZW5yb2R5ZWxsb3cgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgIC5ncmVlbi1zbmFja2JhciBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTAyLCAyOSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjpsaWdodGdyZWVuIDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5lcnJvci1zbmFja2JhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZnVjaHNpYSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgIC5tYXQtc2ltcGxlLXNuYWNrYmFyIG5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweCAgIWltcG9ydGFudDsgXHJcbiAgICAgICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDs7XHJcbiAgICAgIH1cclxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNlbnRlciAge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIyOWFlMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5tYXQtc2ltcGxlLXNuYWNrYmFyIG5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweCAgIWltcG9ydGFudDsgXHJcbiAgICAgICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDs7XHJcbiAgICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/members/members.component.ts":
/*!**********************************************!*\
  !*** ./src/app/members/members.component.ts ***!
  \**********************************************/
/*! exports provided: MembersComponent, MemberViewForm, MemberDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberViewForm", function() { return MemberViewForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDelete", function() { return MemberDelete; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");






















function MembersComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MembersComponent_ng_container_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const data_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openView(data_r2.user_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MembersComponent_ng_container_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const data_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openConfirmationDialog(data_r2.user_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 7, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.user_phoneno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 3, data_r2.created_at, "dd-MM-yyyy"));
} }
function MembersComponent_ngx_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function MemberDelete_mat_progress_spinner_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
class MembersComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getUsers();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.user_id = id;
                this.memberDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    memberDelete() {
        if (this.user_id == null || this.user_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'User';
        var where = 'user_id=' + this.user_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getUsers();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getUsers() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_users')
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openView(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.user_id) === parseInt(id)) {
                    data = val;
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(MemberViewForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    confirmDelete(id) {
        var data = null;
        if (id != 0) {
            data = { id: id, from: 'result' };
        }
        const dialogRef = this.dialog.open(MemberDelete, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== false && result !== 'false') {
                this.getUsers();
            }
        });
    }
}
MembersComponent.ɵfac = function MembersComponent_Factory(t) { return new (t || MembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"])); };
MembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MembersComponent, selectors: [["app-members"]], decls: 8, vars: 2, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "View"], ["tooltip", "matTooltip"], ["matTooltip", "Delete"], ["mat-line", ""], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function MembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MembersComponent_ng_container_6_Template, 18, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MembersComponent_ngx_spinner_7_Template, 3, 1, "ngx-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-members',
                templateUrl: './members.component.html',
                styleUrls: ['./members.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }]; }, null); })();
class MemberViewForm {
    constructor(dialog, dialogRef, datapopup, _snackBar, httpClient) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.tag = [];
        this.data = this.datapopup;
    }
    ngOnInit() {
    }
}
MemberViewForm.ɵfac = function MemberViewForm_Factory(t) { return new (t || MemberViewForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MemberViewForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberViewForm, selectors: [["memberview"]], decls: 60, vars: 11, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "75%"], [1, "Product-table"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"]], template: function MemberViewForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Member Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " : \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone Number\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " : \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " : \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Address\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " : \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Pincode\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " :\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Date Of Join\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " : \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.user_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.user_phoneno, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.user_email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.user_address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.user_pincode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 8, ctx.data.created_at, "dd-MM-yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberViewForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'memberview',
                templateUrl: 'memberview.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();
class MemberDelete {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.loading = false;
        this.user_id = 0;
        if (this.data != null) {
            if (this.data.from === 'result') {
                this.user_id = this.data.id;
            }
        }
    }
    confirmDelete() {
        if (this.user_id == null || this.user_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'User';
        var where = 'user_id=' + this.user_id;
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
}
MemberDelete.ɵfac = function MemberDelete_Factory(t) { return new (t || MemberDelete)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MemberDelete.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberDelete, selectors: [["memberdelete"]], decls: 10, vars: 3, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", 3, "disabled", "click"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function MemberDelete_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Are you sure? Do you want to delete this record? You can't recover it! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberDelete_Template_button_click_7_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes, delete it!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MemberDelete_mat_progress_spinner_9_Template, 1, 3, "mat-progress-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberDelete, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'memberdelete',
                templateUrl: 'memberdelete.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent, QuoteForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteForm", function() { return QuoteForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");




























function QuoteComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteComponent_ng_container_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const data_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openDialog(data_r2.quote_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r2.quote_text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function QuoteComponent_ngx_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function QuoteForm_mat_progress_spinner_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 21);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
class QuoteComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getQuote();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.quote_id = id;
                this.quotesDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    quotesDelete() {
        if (this.quote_id == null || this.quote_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'quotes';
        var where = 'quote_id=' + this.quote_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getQuote();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getQuote() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allquotes')
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openDialog(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.quote_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(QuoteForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getQuote();
            }
        });
    }
}
QuoteComponent.ɵfac = function QuoteComponent_Factory(t) { return new (t || QuoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteComponent, selectors: [["app-quote"]], decls: 8, vars: 2, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "Edit"], ["tooltip", "matTooltip"], ["mat-line", "", 3, "innerHTML"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function QuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuoteComponent_ng_container_6_Template, 8, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuoteComponent_ngx_spinner_7_Template, 3, 1, "ngx-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlL3F1b3RlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quote',
                templateUrl: './quote.component.html',
                styleUrls: ['./quote.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();
class QuoteForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.quote_id = 0;
        this.subresult = [];
        this.welcome_image = 'Select Welcome Image';
        this.image_path = '';
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' },
                { class: 'akarathi-0', name: 'Akarathi_0' },
                { class: 'tamil-bible', name: 'Tamil Bible' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.QuoteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //'name': new FormControl('', Validators.required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data != null) {
            this.QuoteForm.patchValue({
                //name: this.data.quote_author, 
                description: this.data.quote_text,
                status: this.data.status,
                quote_id: this.data.quote_id,
            });
            this.quote_id = this.data.quote_id;
            this.image_path = this.data.welcome_image;
        }
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allquotes')
            .subscribe((res) => {
            this.subresult = res["result"]["data"];
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    onSubmit() {
        console.log("text11");
        if (this.QuoteForm.invalid) {
            return;
        }
        console.log("text22" + this.quote_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.quote_id != 0) {
            //formData.append('quote_author', this.QuoteForm.value.name);       
            formData.append('quote_text', this.QuoteForm.value.description);
            formData.append('status', this.QuoteForm.value.status);
            //formData.append('welcome_image', this.image_path);
            console.log("text33" + this.quote_id);
            url = 'update_record/quotes/quote_id = ' + this.quote_id;
        }
        else {
            //formData.append('quote_author', this.QuoteForm.value.name);
            formData.append('quote_text', this.QuoteForm.value.description);
            formData.append('status', this.QuoteForm.value.status);
            //formData.append('welcome_image', this.image_path);
            url = 'insert_quotestext';
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.welcome_image = 'Select Welcome Image';
        }
    }
}
QuoteForm.ɵfac = function QuoteForm_Factory(t) { return new (t || QuoteForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
QuoteForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteForm, selectors: [["quote-form"]], decls: 36, vars: 5, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "100%"], ["appearance", "outline", "fxFlex", "100%", 1, "example-full-width"], ["matInput", "", "rows", "8", "required", "", "formControlName", "description"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function QuoteForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quote Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function QuoteForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quote Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, QuoteForm_mat_progress_spinner_35_Template, 1, 3, "mat-progress-spinner", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.QuoteForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'quote-form',
                templateUrl: 'quote-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/scrolltext/scrolltext.component.ts":
/*!****************************************************!*\
  !*** ./src/app/scrolltext/scrolltext.component.ts ***!
  \****************************************************/
/*! exports provided: ScrolltextComponent, ScrollForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrolltextComponent", function() { return ScrolltextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollForm", function() { return ScrollForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");




























function ScrolltextComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrolltextComponent_ng_container_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const data_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openDialog(data_r2.scroll_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r2.scroll_text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ScrolltextComponent_ngx_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function ScrollForm_mat_progress_spinner_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 21);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
class ScrolltextComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getWords();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.scroll_id = id;
                this.scrollDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    scrollDelete() {
        if (this.scroll_id == null || this.scroll_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'scroll_text';
        var where = 'scroll_id=' + this.scroll_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getWords();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getWords() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allscrolltext')
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openDialog(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.scroll_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(ScrollForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getWords();
            }
        });
    }
}
ScrolltextComponent.ɵfac = function ScrolltextComponent_Factory(t) { return new (t || ScrolltextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
ScrolltextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrolltextComponent, selectors: [["app-scrolltext"]], decls: 8, vars: 2, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "Edit"], ["tooltip", "matTooltip"], ["mat-line", "", 3, "innerHTML"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function ScrolltextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ScrolltextComponent_ng_container_6_Template, 8, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ScrolltextComponent_ngx_spinner_7_Template, 3, 1, "ngx-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njcm9sbHRleHQvc2Nyb2xsdGV4dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrolltextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scrolltext',
                templateUrl: './scrolltext.component.html',
                styleUrls: ['./scrolltext.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();
class ScrollForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.scroll_id = 0;
        this.subresult = [];
        this.Scroll_image = 'Select Scroll Image';
        this.image_path = '';
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' },
                { class: 'akarathi-0', name: 'Akarathi_0' },
                { class: 'tamil-bible', name: 'Tamil Bible' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.ScrollForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //'scroll_id': new FormControl('', Validators.required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data != null) {
            this.ScrollForm.patchValue({
                description: this.data.scroll_text,
                status: this.data.status,
                scroll_id: this.data.scroll_id,
            });
            this.scroll_id = this.data.scroll_id;
            //this.image_path = this.data.scroll_image;
        }
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_Allscrolltext')
            .subscribe((res) => {
            this.subresult = res["result"]["data"];
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    onSubmit() {
        console.log("text11");
        if (this.ScrollForm.invalid) {
            return;
        }
        console.log("text22" + this.scroll_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.scroll_id != 0) {
            //formData.append('scroll_id', this.ScrollForm.value.scroll_id);       
            formData.append('scroll_text', this.ScrollForm.value.description);
            formData.append('status', this.ScrollForm.value.status);
            // formData.append('scroll_image', this.image_path);
            console.log("text33" + this.scroll_id);
            url = 'update_record/scroll_text/scroll_id = ' + this.scroll_id;
        }
        else {
            //formData.append('scroll_id', this.ScrollForm.value.scroll_id);
            formData.append('scroll_text', this.ScrollForm.value.description);
            formData.append('status', this.ScrollForm.value.status);
            //formData.append('Scroll_image', this.image_path);
            url = 'insert_scrolltext';
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.Scroll_image = 'Select Scroll Image';
        }
    }
}
ScrollForm.ɵfac = function ScrollForm_Factory(t) { return new (t || ScrollForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ScrollForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollForm, selectors: [["scroll-form"]], decls: 36, vars: 5, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "100%"], ["appearance", "outline", "fxFlex", "100%", 1, "example-full-width"], ["matInput", "", "rows", "8", "required", "", "formControlName", "description"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function ScrollForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Scroll Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ScrollForm_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Scroll Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ScrollForm_mat_progress_spinner_35_Template, 1, 3, "mat-progress-spinner", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ScrollForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'scroll-form',
                templateUrl: 'scroll-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





class SidenavComponent {
    constructor() {
        this.isExpanded = true;
    }
    ngOnInit() {
    }
    mouseleave() {
        if (!this.isExpanded) {
            this.isExpanded = false;
        }
        else {
            this.isExpanded = true;
        }
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 55, vars: 0, consts: [[1, "text-center", "logo-bg"], ["src", "./assets/web-app-top-left-picture.jpg", "alt", "image"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/trustmessage"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/welcometext"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/quote"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/homebanner"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/scrolltext"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/eventpage"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/donation"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/aboutchruch"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/gallery"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/members"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/contacts"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/articles"], ["mat-list-item", "", "routerLinkActive", "active-nav", "routerLink", "/admin"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0 Trust Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "local_library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0\u00A0 Home Banners ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "import_contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0\u00A0 Quotes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "theaters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A0\u00A0 Banner With Quotes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "swap_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0\u00A0 Scroll Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0\u00A0 Events ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00A0\u00A0 Donation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0\u00A0 About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "picture_in_picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u00A0\u00A0 Gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "supervised_user_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00A0\u00A0Members ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "contact_mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00A0\u00A0 Enquiries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u00A0\u00A0 Articles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "perm_identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u00A0\u00A0 Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".logo-bg[_ngcontent-%COMP%] {\r\n    background: #f5f5f5;\r\n    padding: 0px 0px;\r\n}\r\n\r\n.logo-bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 80%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogMHB4IDBweDtcclxufVxyXG5cclxuLmxvZ28tYmcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcometext/welcometext.component.ts":
/*!******************************************************!*\
  !*** ./src/app/welcometext/welcometext.component.ts ***!
  \******************************************************/
/*! exports provided: WelcometextComponent, WelcomeForm, PictureViewwelcome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcometextComponent", function() { return WelcometextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeForm", function() { return WelcomeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureViewwelcome", function() { return PictureViewwelcome; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.service */ "./src/app/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/__ivy_ngcc__/dist/public.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");




























function WelcometextComponent_ng_container_11_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcometextComponent_ng_container_11_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.confirmDialog(data_r2, "preview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r3.image_url, "", data_r2.welcome_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WelcometextComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WelcometextComponent_ng_container_11_img_2_Template, 1, 2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcometextComponent_ng_container_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const data_r2 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.openDialog(data_r2.welcome_id, "result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.welcome_image && data_r2.welcome_image != "");
} }
function WelcometextComponent_ngx_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function WelcomeForm_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeForm_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.welcome_image);
} }
function WelcomeForm_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeForm_div_17_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeMedia("image_path"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.image_url, "", ctx_r2.image_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WelcomeForm_mat_progress_spinner_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 27);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "indeterminate")("strokeWidth", 3)("diameter", 25);
} }
function PictureViewwelcome_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.image_url, "", ctx_r0.data["welcome_image"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class WelcometextComponent {
    constructor(confirmationDialogService, dialog, httpClient, _snackBar, spinner) {
        this.confirmationDialogService = confirmationDialogService;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this._snackBar = _snackBar;
        this.spinner = spinner;
        this.result = [];
        this.loading = false;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
    }
    ngOnInit() {
        this.getWords();
    }
    showSpinner(name) {
        this.spinner.show(name);
    }
    hideSpinner(name) {
        this.spinner.hide(name);
    }
    openConfirmationDialog(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
            .then((confirmed) => {
            console.log('User confirmed:', confirmed);
            if (confirmed == true) {
                this.welcome_id = id;
                this.wordDelete();
            }
        })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    wordDelete() {
        if (this.welcome_id == null || this.welcome_id == 0) {
            return;
        }
        this.loading = true;
        var table = 'welcometext';
        var where = 'welcome_id=' + this.welcome_id;
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/' + table + '/' + where).subscribe((res) => {
            this.loading = false;
            this.loading = false;
            this.hideSpinner('sp3');
            this.getWords();
            if (res["result"]["error"] === false) {
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    getWords() {
        this.loading = true;
        this.showSpinner('sp3');
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_welcometext')
            .subscribe((res) => {
            console.log("jhxgjhlfg-->" + res);
            this.result = res["result"]["data"];
            console.log(this.result);
            this.loading = false;
            this.hideSpinner('sp3');
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
            this.loading = false;
            this.hideSpinner('sp3');
        });
    }
    openDialog(id, res) {
        var data = null;
        if (id != 0) {
            this[res].forEach(val => {
                if (parseInt(val.welcome_id) === parseInt(id)) {
                    data = val;
                    console.log(data);
                    return false;
                }
            });
        }
        const dialogRef = this.dialog.open(WelcomeForm, {
            minWidth: "40%",
            maxWidth: "40%",
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result != 'undefined' && result !== false && result !== 'false') {
                this.getWords();
            }
        });
    }
    confirmDialog(id, action) {
        var data = null;
        if (id != 0) {
            data = id;
        }
        const dialogRef = this.dialog.open(PictureViewwelcome, {
            minWidth: "40%",
            maxWidth: "40%",
            data: {
                data: data,
                action: action
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
WelcometextComponent.ɵfac = function WelcometextComponent_Factory(t) { return new (t || WelcometextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
WelcometextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcometextComponent, selectors: [["app-welcometext"]], decls: 13, vars: 2, consts: [["fullscreen", ""], ["mode", "side", "opened", "", "cdkScrollable", "", 1, "primary"], [1, "add-btn-container"], ["mat-raised-button", "", 2, "background-color", "#e7b73b", 3, "click"], [4, "ngFor", "ngForOf"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen", 4, "ngIf"], ["matListAvatar", "", "alt", "image", 3, "src", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "label", 3, "click"], ["matTooltip", "Edit"], ["tooltip", "matTooltip"], ["mat-line", "", 3, "innerHTML"], ["matListAvatar", "", "alt", "image", 3, "src", "click"], ["bdColor", "rgba(0, 0, 0, 0)", "name", "sp3", "type", "ball-spin-clockwise", "color", "#1d94cd", "size", "medium", 3, "fullScreen"], [2, "color", "darkblue"]], template: function WelcometextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcometextComponent_Template_button_click_6_listener() { return ctx.openDialog(0, "null"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home Banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WelcometextComponent_ng_container_11_Template, 9, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WelcometextComponent_ngx_spinner_12_Template, 3, 1, "ngx-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListAvatarCssMatStyler"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWV0ZXh0L3dlbGNvbWV0ZXh0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcometextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcometext',
                templateUrl: './welcometext.component.html',
                styleUrls: ['./welcometext.component.css']
            }]
    }], function () { return [{ type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();
class WelcomeForm {
    constructor(dialogRef, data, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.loading = false;
        this.welcome_id = 0;
        this.subresult = [];
        this.welcome_image = 'Select Welcome Image';
        this.image_path = '';
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '100px',
            maxHeight: '100px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' },
                { class: 'akarathi-0', name: 'Akarathi_0' },
                { class: 'tamil-bible', name: 'Tamil Bible' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
        };
        this.welcomeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //'welcome_id': new FormControl('', Validators.required),
            // 'description': new FormControl('', Validators.required),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        if (this.data != null) {
            this.welcomeForm.patchValue({
                description: this.data.welcome_text,
                status: this.data.status,
                welcome_id: this.data.welcome_id,
            });
            this.welcome_id = this.data.welcome_id;
            this.image_path = this.data.welcome_image;
        }
        this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/get_welcometext')
            .subscribe((res) => {
            this.subresult = res["result"]["data"];
        }, (error) => {
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    onSubmit() {
        console.log("text11");
        if (this.welcomeForm.invalid) {
            return;
        }
        console.log("text22" + this.welcome_id);
        this.loading = true;
        var formData = new FormData();
        var url = '';
        if (this.welcome_id != 0) {
            //formData.append('welcome_id', this.welcomeForm.value.welcome_id);       
            formData.append('welcome_text', this.welcomeForm.value.description);
            formData.append('status', this.welcomeForm.value.status);
            formData.append('welcome_image', this.image_path);
            console.log("text33" + this.welcome_id);
            url = 'update_record/welcometext/welcome_id = ' + this.welcome_id;
        }
        else {
            //formData.append('welcome_id', this.welcomeForm.value.welcome_id);
            formData.append('welcome_text', this.welcomeForm.value.description);
            formData.append('status', this.welcomeForm.value.status);
            formData.append('welcome_image', this.image_path);
            url = 'insert_welcometext';
        }
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this.dialogRef.close(true);
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    fileProgress(fileInput, name, path) {
        var fileData = fileInput.target.files[0];
        this[name] = fileData.name;
        this.loading = true;
        var formData = new FormData();
        formData.append('file', fileData);
        this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe((res) => {
            this.loading = false;
            if (res["result"]["error"] === false) {
                this[path] = res["result"]["data"];
            }
            else {
                this._snackBar.open(res["result"]["message"], '', {
                    duration: 2000,
                });
            }
        }, (error) => {
            this.loading = false;
            this._snackBar.open(error["statusText"], '', {
                duration: 2000,
            });
        });
    }
    removeMedia(url) {
        this[url] = '';
        if (url === 'image_path') {
            this.welcome_image = 'Select Welcome Image';
        }
    }
}
WelcomeForm.ɵfac = function WelcomeForm_Factory(t) { return new (t || WelcomeForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
WelcomeForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeForm, selectors: [["welcome-form"]], decls: 40, vars: 7, consts: [["mat-dialog-title", ""], ["role", "toolbar", 1, "task-header"], [1, "font-header"], [1, "fx-spacer"], ["mat-icon-button", "", 1, "icon-header"], ["mat-list-icon", "", 3, "mat-dialog-close"], [1, "mat-typography"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["fxFlex", "100%", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["class", "preview-image", 4, "ngIf"], ["fxFlex", "50%"], ["appearance", "outline", "fxFlex", "100%"], ["formControlName", "status"], ["value", "1"], ["value", "0"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "icon-bottom-close", 3, "mat-dialog-close"], ["mat-stroked-button", "", "type", "submit", 1, "icon-bottom-save", 3, "disabled"], ["class", "example-margin", 3, "mode", "strokeWidth", "diameter", 4, "ngIf"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "preview-image"], ["mat-card-image", "", "alt", "Photo", 1, "dialog-picture", 3, "src"], ["mat-icon-button", "", "aria-label", "Close icon", 3, "click"], [1, "example-margin", 3, "mode", "strokeWidth", "diameter"]], template: function WelcomeForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WelcomeForm_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WelcomeForm_button_14_Template, 2, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function WelcomeForm_Template_input_change_15_listener($event) { return ctx.fileProgress($event, "welcome_image", "image_path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WelcomeForm_div_17_Template, 5, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, WelcomeForm_mat_progress_spinner_39_Template, 1, 3, "mat-progress-spinner", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.welcomeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image_path != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListIconCssMatStyler"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_19__["SuiRadioManager"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'welcome-form',
                templateUrl: 'welcome-form.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();
class PictureViewwelcome {
    constructor(dialogRef, datapopup, _snackBar, httpClient) {
        this.dialogRef = dialogRef;
        this.datapopup = datapopup;
        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.image_url = 'http://vallalarforall.com/vallalar_app_api/v1/';
        this.action = '';
        this.loading = false;
        this.student_register_id = 0;
        if (this.datapopup != null) {
            this.action = this.datapopup.action;
            this.data = this.datapopup.data;
        }
    }
}
PictureViewwelcome.ɵfac = function PictureViewwelcome_Factory(t) { return new (t || PictureViewwelcome)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PictureViewwelcome.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureViewwelcome, selectors: [["welcomeimage-view"]], decls: 5, vars: 2, consts: [[1, "mat-typography"], ["class", "member-profile", "mat-card-image", "", "alt", "Photo", 3, "src", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "0.5%", "fxLayoutAlign", "end center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-card-image", "", "alt", "Photo", 1, "member-profile", 3, "src"]], template: function PictureViewwelcome_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PictureViewwelcome_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardImage"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureViewwelcome, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'welcomeimage-view',
                templateUrl: 'welcomeimage-view.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\2023\Flutter\vallalar_admin_app\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map