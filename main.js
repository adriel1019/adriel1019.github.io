(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\GithubProfile\adriel.github.io\adriel-profile-page\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Jz31":
/*!******************************************************************************************************!*\
  !*** ./src/app/feature-modules/page-not-found/components/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wYWdlLW5vdC1mb3VuZC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lvdk":
/*!***************************************************************************************************!*\
  !*** ./src/app/feature-modules/artteam-hogwarts-houses/artteam-hogwarts-houses-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ArtTeamHogwartsHousesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtTeamHogwartsHousesRoutingModule", function() { return ArtTeamHogwartsHousesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_artteam_hogwarts_houses_artteam_hogwarts_houses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/artteam-hogwarts-houses/artteam-hogwarts-houses.component */ "loJU");





const routes = [
    {
        path: '',
        component: _components_artteam_hogwarts_houses_artteam_hogwarts_houses_component__WEBPACK_IMPORTED_MODULE_2__["ArtteamHogwartsHousesComponent"]
    }
];
class ArtTeamHogwartsHousesRoutingModule {
}
ArtTeamHogwartsHousesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArtTeamHogwartsHousesRoutingModule });
ArtTeamHogwartsHousesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArtTeamHogwartsHousesRoutingModule_Factory(t) { return new (t || ArtTeamHogwartsHousesRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArtTeamHogwartsHousesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtTeamHogwartsHousesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "MXxV":
/*!*********************************************************************************!*\
  !*** ./src/app/feature-modules/page-not-found/page-not-found-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PageNotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundRoutingModule", function() { return PageNotFoundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "Jz31");





const routes = [
    {
        path: '',
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
    }
];
class PageNotFoundRoutingModule {
}
PageNotFoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageNotFoundRoutingModule });
PageNotFoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageNotFoundRoutingModule_Factory(t) { return new (t || PageNotFoundRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageNotFoundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PJ6C":
/*!*********************************************************************************************!*\
  !*** ./src/app/feature-modules/artteam-hogwarts-houses/services/members/members.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: MembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersService", function() { return MembersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MembersService {
    constructor() {
        this.mMembersDataList = [
            {
                name: 'Daniel Nava',
                houseId: 1,
                isLeader: true,
                imageSrc: 'Dan'
            },
            {
                name: 'Dany Mapachin',
                houseId: 2,
                isLeader: true,
                imageSrc: 'Dany'
            },
            {
                name: 'Pam Jajou',
                houseId: 3,
                isLeader: true,
                imageSrc: 'Pam'
            },
            {
                name: 'Lore Robles',
                houseId: 4,
                isLeader: true,
                imageSrc: 'Lore'
            },
            {
                name: 'Adriel Madrigal',
                houseId: 4,
                isLeader: false,
                imageSrc: ''
            },
            {
                name: 'Cris Finn',
                houseId: 2,
                isLeader: false,
                imageSrc: ''
            },
            {
                name: 'Rafa Hernandez',
                houseId: 2,
                isLeader: false,
                imageSrc: ''
            },
            {
                name: 'Bertha Odohui',
                houseId: 4,
                isLeader: false,
                imageSrc: ''
            },
            {
                name: 'Samara',
                houseId: 1,
                isLeader: false,
                imageSrc: ''
            },
            {
                name: 'David Mendoza',
                houseId: 3,
                isLeader: false,
                imageSrc: ''
            },
            {
                name: 'Vania Torres',
                houseId: 3,
                isLeader: false,
                imageSrc: ''
            },
            {
                name: 'Mary',
                houseId: 4,
                isLeader: false,
                imageSrc: ''
            },
            {
                name: 'Wicho',
                houseId: 2,
                isLeader: false,
                imageSrc: ''
            },
            {
                name: 'Panda',
                houseId: 3,
                isLeader: false,
                imageSrc: ''
            },
            {
                name: 'Sharky',
                houseId: 3,
                isLeader: false,
                imageSrc: ''
            },
            {
                name: 'Chuy',
                houseId: 1,
                isLeader: false,
                imageSrc: ''
            }
        ];
    }
    getLeaderMemberData(houseId) {
        let leaderData = null;
        this.mMembersDataList.forEach((member) => {
            if (leaderData !== null) {
                return;
            }
            if (member.houseId === houseId && member.isLeader === true) {
                leaderData = member;
                return;
            }
        });
        return leaderData;
    }
    getYellowHouseMembers() {
        return this.getMembersFromHouseId(1);
    }
    getRedHouseMembers() {
        return this.getMembersFromHouseId(2);
    }
    getGreenHouseMembers() {
        return this.getMembersFromHouseId(3);
    }
    getBlueHouseMembers() {
        return this.getMembersFromHouseId(4);
    }
    getMembersFromHouseId(houseId) {
        let listMembers = [];
        this.mMembersDataList.forEach((member) => {
            if (member.houseId === houseId) {
                listMembers.push(member);
            }
        });
        return listMembers;
    }
}
MembersService.ɵfac = function MembersService_Factory(t) { return new (t || MembersService)(); };
MembersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MembersService, factory: MembersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Pd5A":
/*!*************************************************************************!*\
  !*** ./src/app/feature-modules/page-not-found/page-not-found.module.ts ***!
  \*************************************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found-routing.module */ "MXxV");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "Jz31");


// import { SharedModule } from 'src/app/shared/shared.module';



class PageNotFoundModule {
}
PageNotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageNotFoundModule });
PageNotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageNotFoundModule_Factory(t) { return new (t || PageNotFoundModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            // SharedModule,
            _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageNotFoundModule, { declarations: [_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        // SharedModule,
        _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    // SharedModule,
                    _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'adriel-profile-page';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "XSfv":
/*!***********************************************************************************************************!*\
  !*** ./src/app/feature-modules/artteam-hogwarts-houses/components/student-list/student-list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_members_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/members/members.service */ "PJ6C");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0, a1, a2, a3) { return { "yellow-leader-item": a0, "red-leader-item": a1, "green-leader-item": a2, "blue-leader-item": a3 }; };
function StudentListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const studentData_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c0, studentData_r1.isLeader === true && studentData_r1.houseId === 2, studentData_r1.isLeader === true && studentData_r1.houseId === 1, studentData_r1.isLeader === true && studentData_r1.houseId === 3, studentData_r1.isLeader === true && studentData_r1.houseId === 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](studentData_r1.name);
} }
class StudentListComponent {
    constructor(membersDataService) {
        this.membersDataService = membersDataService;
    }
    ngOnInit() {
        this.studentsHouseList = this.getStudentsHouseList(this.houseId);
    }
    getStudentsHouseList(houseId) {
        if (houseId === 1) {
            return this.membersDataService.getYellowHouseMembers();
        }
        else if (houseId === 2) {
            return this.membersDataService.getRedHouseMembers();
        }
        else if (houseId === 3) {
            return this.membersDataService.getGreenHouseMembers();
        }
        return this.membersDataService.getBlueHouseMembers();
    }
}
StudentListComponent.ɵfac = function StudentListComponent_Factory(t) { return new (t || StudentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_members_members_service__WEBPACK_IMPORTED_MODULE_1__["MembersService"])); };
StudentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentListComponent, selectors: [["app-student-list"]], inputs: { houseId: "houseId" }, decls: 5, vars: 2, consts: [[1, "student-list-container"], [1, "student-counter"], ["class", "student-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "student-item", 3, "ngClass"]], template: function StudentListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StudentListComponent_div_4_Template, 3, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.studentsHouseList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.studentsHouseList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".student-list-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.student-list-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.student-list-container[_ngcontent-%COMP%]   .student-counter[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.student-list-container[_ngcontent-%COMP%]   .student-counter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.student-list-container[_ngcontent-%COMP%]   .yellow-leader-item[_ngcontent-%COMP%] {\n  background-color: #ffe606;\n  font-weight: bold;\n}\n.student-list-container[_ngcontent-%COMP%]   .red-leader-item[_ngcontent-%COMP%] {\n  background-color: #5f0303;\n  color: #e9e5e5;\n  font-weight: bold;\n}\n.student-list-container[_ngcontent-%COMP%]   .green-leader-item[_ngcontent-%COMP%] {\n  background-color: #0e250e;\n  color: #e9e5e5;\n  font-weight: bold;\n}\n.student-list-container[_ngcontent-%COMP%]   .blue-leader-item[_ngcontent-%COMP%] {\n  background-color: #121e3a;\n  color: #e9e5e5;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS1tb2R1bGVzL2FydHRlYW0taG9nd2FydHMtaG91c2VzL2NvbXBvbmVudHMvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0FBQUo7QUFHUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7QUFEWjtBQUtJO0VBTUksbUJBQUE7QUFSUjtBQUdRO0VBRUksa0JBQUE7QUFGWjtBQWNJO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQVpSO0FBZUk7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWJSO0FBZ0JJO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFkUjtBQWlCSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBZlIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlLW1vZHVsZXMvYXJ0dGVhbS1ob2d3YXJ0cy1ob3VzZXMvY29tcG9uZW50cy9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWRlbnQtbGlzdC1jb250YWluZXIge1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgXHJcbiAgICBkaXYge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3R1ZGVudC1jb3VudGVyIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgLy8gYm9yZGVyOjFweCBzb2xpZCByZWQ7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0dWRlbnQtaXRlbSB7XHJcbiAgICAgICAgcCB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAueWVsbG93LWxlYWRlci1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzAsIDYpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWQtbGVhZGVyLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMywgMyk7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMzMsIDIyOSwgMjI5KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JlZW4tbGVhZGVyLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMzcsIDE0KTtcclxuICAgICAgICBjb2xvcjogcmdiKDIzMywgMjI5LCAyMjkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5ibHVlLWxlYWRlci1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDMwLCA1OCk7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMzMsIDIyOSwgMjI5KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-list',
                templateUrl: './student-list.component.html',
                styleUrls: ['./student-list.component.scss']
            }]
    }], function () { return [{ type: _services_members_members_service__WEBPACK_IMPORTED_MODULE_1__["MembersService"] }]; }, { houseId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _feature_modules_artteam_hogwarts_houses_artteam_hogwarts_houses_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature-modules/artteam-hogwarts-houses/artteam-hogwarts-houses.module */ "hH4k");
/* harmony import */ var _feature_modules_page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feature-modules/page-not-found/page-not-found.module */ "Pd5A");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _feature_modules_artteam_hogwarts_houses_artteam_hogwarts_houses_module__WEBPACK_IMPORTED_MODULE_4__["ArtteamHogwartsHousesModule"],
            _feature_modules_page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _feature_modules_artteam_hogwarts_houses_artteam_hogwarts_houses_module__WEBPACK_IMPORTED_MODULE_4__["ArtteamHogwartsHousesModule"],
        _feature_modules_page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _feature_modules_artteam_hogwarts_houses_artteam_hogwarts_houses_module__WEBPACK_IMPORTED_MODULE_4__["ArtteamHogwartsHousesModule"],
                    _feature_modules_page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aIOa":
/*!***********************************************************************************************************!*\
  !*** ./src/app/feature-modules/artteam-hogwarts-houses/components/leader-house/leader-house.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LeaderHouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderHouseComponent", function() { return LeaderHouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_house_house_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/house/house.service */ "weZj");
/* harmony import */ var _services_members_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/members/members.service */ "PJ6C");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function LeaderHouseComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("house-flag ", ctx_r0.houseData.color, "-house");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r0.houseData.color, "-house-image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.houseData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("left-flag left-", ctx_r0.houseData.color, "-flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("right-flag right-", ctx_r0.houseData.color, "-flag");
} }
class LeaderHouseComponent {
    constructor(houseDataService, membersDataService) {
        this.houseDataService = houseDataService;
        this.membersDataService = membersDataService;
    }
    ngOnInit() {
        this.houseData = this.houseDataService.getHouseDataFromId(this.houseId);
        this.memberLeaderData = this.membersDataService.getLeaderMemberData(this.houseId);
        console.log(this.memberLeaderData);
        const imgSource = './../../../../../assets/images/art-team-members/houses-leaders/' + this.memberLeaderData.imageSrc + '.jpeg';
        console.log(imgSource);
        this.imgSrc = imgSource;
    }
}
LeaderHouseComponent.ɵfac = function LeaderHouseComponent_Factory(t) { return new (t || LeaderHouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_house_house_service__WEBPACK_IMPORTED_MODULE_1__["HouseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_members_members_service__WEBPACK_IMPORTED_MODULE_2__["MembersService"])); };
LeaderHouseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeaderHouseComponent, selectors: [["app-leader-house"]], inputs: { houseId: "houseId" }, decls: 2, vars: 1, consts: [[1, "leader-house-container"], [3, "class", 4, "ngIf"], ["alt", "", 3, "src"], [1, "house-name"]], template: function LeaderHouseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeaderHouseComponent_div_1_Template, 7, 14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.houseData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 280px;\n  display: inline-block;\n  position: relative;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 155px;\n  height: 200px;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .yellow-house-image[_ngcontent-%COMP%] {\n  border: 2px solid yellow;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .red-house-image[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .green-house-image[_ngcontent-%COMP%] {\n  border: 2px solid green;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .blue-house-image[_ngcontent-%COMP%] {\n  border: 2px solid blue;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .house-name[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .house-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n  text-align: center;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .left-flag[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  bottom: 0;\n  left: 0px;\n  border-right: 80px solid transparent;\n  position: absolute;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .right-flag[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0px;\n  border-left: 80px solid transparent;\n  border-right: 0px solid transparent;\n  position: absolute;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .left-yellow-flag[_ngcontent-%COMP%] {\n  border-left: 0px solid yellow;\n  border-top: 49px solid yellow;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .right-yellow-flag[_ngcontent-%COMP%] {\n  border-top: 49px solid yellow;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .left-red-flag[_ngcontent-%COMP%] {\n  border-left: 0px solid red;\n  border-top: 49px solid red;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .right-red-flag[_ngcontent-%COMP%] {\n  border-top: 49px solid red;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .left-green-flag[_ngcontent-%COMP%] {\n  border-left: 0px solid green;\n  border-top: 49px solid green;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .right-green-flag[_ngcontent-%COMP%] {\n  border-top: 49px solid green;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .left-blue-flag[_ngcontent-%COMP%] {\n  border-left: 0px solid blue;\n  border-top: 49px solid blue;\n}\n.leader-house-container[_ngcontent-%COMP%]   .house-flag[_ngcontent-%COMP%]   .right-blue-flag[_ngcontent-%COMP%] {\n  border-top: 49px solid blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS1tb2R1bGVzL2FydHRlYW0taG9nd2FydHMtaG91c2VzL2NvbXBvbmVudHMvbGVhZGVyLWhvdXNlL2xlYWRlci1ob3VzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFFQSxrQkFBQTtBQVBSO0FBU1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVBaO0FBVVE7RUFDSSx3QkFBQTtBQVJaO0FBV1E7RUFDSSxxQkFBQTtBQVRaO0FBWVE7RUFDSSx1QkFBQTtBQVZaO0FBYVE7RUFDSSxzQkFBQTtBQVhaO0FBY1E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQVpaO0FBYVk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFYaEI7QUFlUTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBYlo7QUFnQlE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUVBLGtCQUFBO0FBZlo7QUFrQlE7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0FBaEJaO0FBbUJRO0VBQ0ksNkJBQUE7QUFqQlo7QUFvQlE7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FBbEJaO0FBcUJRO0VBQ0ksMEJBQUE7QUFuQlo7QUFzQlE7RUFDSSw0QkFBQTtFQUNBLDRCQUFBO0FBcEJaO0FBdUJRO0VBQ0ksNEJBQUE7QUFyQlo7QUF3QlE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0FBdEJaO0FBeUJRO0VBQ0ksMkJBQUE7QUF2QloiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlLW1vZHVsZXMvYXJ0dGVhbS1ob2d3YXJ0cy1ob3VzZXMvY29tcG9uZW50cy9sZWFkZXItaG91c2UvbGVhZGVyLWhvdXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcF9ib3JkZXI6IDQ5cHg7XHJcblxyXG4ubGVhZGVyLWhvdXNlLWNvbnRhaW5lciB7XHJcbiAgICAvLyB3aWR0aDogMTYwcHg7XHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBtYXJnaW46IDEwcHggMjBweDtcclxuXHJcbiAgICAuaG91c2UtZmxhZyB7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIC8vIG1hcmdpbjogMTBweCAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTU1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnllbGxvdy1ob3VzZS1pbWFnZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAucmVkLWhvdXNlLWltYWdlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5ncmVlbi1ob3VzZS1pbWFnZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5ibHVlLWhvdXNlLWltYWdlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ob3VzZS1uYW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGVmdC1mbGFnIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogODBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0LWZsYWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sZWZ0LXllbGxvdy1mbGFnIHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCB5ZWxsb3c7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICR0b3BfYm9yZGVyIHNvbGlkIHllbGxvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodC15ZWxsb3ctZmxhZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICR0b3BfYm9yZGVyIHNvbGlkIHllbGxvdztcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgLmxlZnQtcmVkLWZsYWcge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMHB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogJHRvcF9ib3JkZXIgc29saWQgcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0LXJlZC1mbGFnIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogJHRvcF9ib3JkZXIgc29saWQgcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxlZnQtZ3JlZW4tZmxhZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICR0b3BfYm9yZGVyIHNvbGlkIGdyZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0LWdyZWVuLWZsYWcge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAkdG9wX2JvcmRlciBzb2xpZCBncmVlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sZWZ0LWJsdWUtZmxhZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogJHRvcF9ib3JkZXIgc29saWQgYmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodC1ibHVlLWZsYWcge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAkdG9wX2JvcmRlciBzb2xpZCBibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaderHouseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-leader-house',
                templateUrl: './leader-house.component.html',
                styleUrls: ['./leader-house.component.scss']
            }]
    }], function () { return [{ type: _services_house_house_service__WEBPACK_IMPORTED_MODULE_1__["HouseService"] }, { type: _services_members_members_service__WEBPACK_IMPORTED_MODULE_2__["MembersService"] }]; }, { houseId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hH4k":
/*!*******************************************************************************************!*\
  !*** ./src/app/feature-modules/artteam-hogwarts-houses/artteam-hogwarts-houses.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ArtteamHogwartsHousesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtteamHogwartsHousesModule", function() { return ArtteamHogwartsHousesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _artteam_hogwarts_houses_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artteam-hogwarts-houses-routing.module */ "Lvdk");
/* harmony import */ var _components_artteam_hogwarts_houses_artteam_hogwarts_houses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/artteam-hogwarts-houses/artteam-hogwarts-houses.component */ "loJU");
/* harmony import */ var _components_leader_house_leader_house_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/leader-house/leader-house.component */ "aIOa");
/* harmony import */ var _components_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/student-list/student-list.component */ "XSfv");
/* harmony import */ var _services_members_members_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/members/members.service */ "PJ6C");
/* harmony import */ var _services_house_house_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/house/house.service */ "weZj");









class ArtteamHogwartsHousesModule {
}
ArtteamHogwartsHousesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArtteamHogwartsHousesModule });
ArtteamHogwartsHousesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArtteamHogwartsHousesModule_Factory(t) { return new (t || ArtteamHogwartsHousesModule)(); }, providers: [
        _services_members_members_service__WEBPACK_IMPORTED_MODULE_6__["MembersService"],
        _services_house_house_service__WEBPACK_IMPORTED_MODULE_7__["HouseService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _artteam_hogwarts_houses_routing_module__WEBPACK_IMPORTED_MODULE_2__["ArtTeamHogwartsHousesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArtteamHogwartsHousesModule, { declarations: [_components_artteam_hogwarts_houses_artteam_hogwarts_houses_component__WEBPACK_IMPORTED_MODULE_3__["ArtteamHogwartsHousesComponent"],
        _components_leader_house_leader_house_component__WEBPACK_IMPORTED_MODULE_4__["LeaderHouseComponent"],
        _components_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _artteam_hogwarts_houses_routing_module__WEBPACK_IMPORTED_MODULE_2__["ArtTeamHogwartsHousesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtteamHogwartsHousesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_artteam_hogwarts_houses_artteam_hogwarts_houses_component__WEBPACK_IMPORTED_MODULE_3__["ArtteamHogwartsHousesComponent"],
                    _components_leader_house_leader_house_component__WEBPACK_IMPORTED_MODULE_4__["LeaderHouseComponent"],
                    _components_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _artteam_hogwarts_houses_routing_module__WEBPACK_IMPORTED_MODULE_2__["ArtTeamHogwartsHousesRoutingModule"]
                ],
                providers: [
                    _services_members_members_service__WEBPACK_IMPORTED_MODULE_6__["MembersService"],
                    _services_house_house_service__WEBPACK_IMPORTED_MODULE_7__["HouseService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "loJU":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/feature-modules/artteam-hogwarts-houses/components/artteam-hogwarts-houses/artteam-hogwarts-houses.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ArtteamHogwartsHousesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtteamHogwartsHousesComponent", function() { return ArtteamHogwartsHousesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_house_house_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/house/house.service */ "weZj");
/* harmony import */ var _services_members_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/members/members.service */ "PJ6C");
/* harmony import */ var _leader_house_leader_house_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../leader-house/leader-house.component */ "aIOa");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../student-list/student-list.component */ "XSfv");






class ArtteamHogwartsHousesComponent {
    constructor(houseDataService, membersDataService) {
        this.houseDataService = houseDataService;
        this.membersDataService = membersDataService;
    }
    ngOnInit() {
    }
}
ArtteamHogwartsHousesComponent.ɵfac = function ArtteamHogwartsHousesComponent_Factory(t) { return new (t || ArtteamHogwartsHousesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_house_house_service__WEBPACK_IMPORTED_MODULE_1__["HouseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_members_members_service__WEBPACK_IMPORTED_MODULE_2__["MembersService"])); };
ArtteamHogwartsHousesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtteamHogwartsHousesComponent, selectors: [["app-artteam-hogwarts-houses"]], decls: 13, vars: 8, consts: [[1, "artteam-hogwarts-houses-container"], [1, "house-container"], [3, "houseId"]], template: function ArtteamHogwartsHousesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-leader-house", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-student-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-leader-house", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-student-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-leader-house", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-student-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-leader-house", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-student-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("houseId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("houseId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("houseId", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("houseId", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("houseId", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("houseId", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("houseId", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("houseId", 4);
    } }, directives: [_leader_house_leader_house_component__WEBPACK_IMPORTED_MODULE_3__["LeaderHouseComponent"], _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_4__["StudentListComponent"]], styles: [".house-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 160px;\n  border: 1px solid red;\n  vertical-align: top;\n  margin: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS1tb2R1bGVzL2FydHRlYW0taG9nd2FydHMtaG91c2VzL2NvbXBvbmVudHMvYXJ0dGVhbS1ob2d3YXJ0cy1ob3VzZXMvYXJ0dGVhbS1ob2d3YXJ0cy1ob3VzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9hcnR0ZWFtLWhvZ3dhcnRzLWhvdXNlcy9jb21wb25lbnRzL2FydHRlYW0taG9nd2FydHMtaG91c2VzL2FydHRlYW0taG9nd2FydHMtaG91c2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdXNlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtteamHogwartsHousesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-artteam-hogwarts-houses',
                templateUrl: './artteam-hogwarts-houses.component.html',
                styleUrls: ['./artteam-hogwarts-houses.component.scss']
            }]
    }], function () { return [{ type: _services_house_house_service__WEBPACK_IMPORTED_MODULE_1__["HouseService"] }, { type: _services_members_members_service__WEBPACK_IMPORTED_MODULE_2__["MembersService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | feature-modules-home-home-module */ "feature-modules-home-home-module").then(__webpack_require__.bind(null, /*! ./feature-modules/home/home.module */ "wr6c")).then(m => m.HomeModule)
    },
    {
        path: 'artteam-hogwarts-houses',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./feature-modules/artteam-hogwarts-houses/artteam-hogwarts-houses.module */ "hH4k"))
            .then(m => m.ArtteamHogwartsHousesModule)
    },
    {
        path: '**',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./feature-modules/page-not-found/page-not-found.module */ "Pd5A")).then(m => m.PageNotFoundModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "weZj":
/*!*****************************************************************************************!*\
  !*** ./src/app/feature-modules/artteam-hogwarts-houses/services/house/house.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: HouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseService", function() { return HouseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HouseService {
    constructor() {
        this.mHouseDataList = [
            {
                id: 1,
                name: 'Gryffindor',
                color: 'red',
            },
            {
                id: 2,
                name: 'Hupplepuff',
                color: 'yellow'
            },
            {
                id: 3,
                name: 'Slytherin',
                color: 'green',
            },
            {
                id: 4,
                name: 'Ravenclaw',
                color: 'blue',
            }
        ];
    }
    getAllHousesData() {
        return this.mHouseDataList;
    }
    getHouseData(name) {
        this.mHouseDataList.forEach((house) => {
            if (house.name === name) {
                return house;
            }
        });
        return null;
    }
    getHouseDataFromId(id) {
        let result = null;
        this.mHouseDataList.forEach((house) => {
            if (result !== null) {
                return;
            }
            if (house.id === id) {
                result = house;
            }
        });
        return result;
    }
}
HouseService.ɵfac = function HouseService_Factory(t) { return new (t || HouseService)(); };
HouseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HouseService, factory: HouseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HouseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map