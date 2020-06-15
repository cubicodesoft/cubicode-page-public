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
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar>\n</app-navbar>\n<router-outlet>\n</router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"image-background-page-blog\">\n    <div class=\"site-wrapper\">\n        <div class=\"site-wrapper-inner\">\n            <div class=\"cover-container\">\n                <div class=\"masthead clearfix pt-5\">\n                    <div class=\"inner\">\n                        <h3 class=\"masthead-brand\">\n                            <a [routerLink]=\"['']\" class=\"\"><img src=\"assets/img/logo_horizontal.png\" width=\"265\"></a>\n                        </h3>\n                        <nav class=\"nav nav-masthead\">\n                            <a class=\"nav-link nav-social\" href=\"https://www.facebook.com/cubicode/\"><i class=\"fab fa-facebook-f\" aria-hidden=\"true\"></i></a>\n                            <a class=\"nav-link nav-social\" href=\"https://github.com/cubicodesoft\"><i class=\"fab fa-github\" aria-hidden=\"true\"></i></a>\n                        </nav>\n                    </div>\n                </div>\n                <br>\n                <div class=\"inner cover\">\n                    <h1 class=\"cover-heading\">Blog CUBICODE</h1>\n                    <h5 class=\"sub-header\"> Inicia en pocas semanas </h5>\n                    <br>\n                    <p class=\"lead cover-copy\">\n                        Iniciativa para presentar todos los avances en tecnologias y de inovación adquiridos en más de 6 años de experiencia como emprendedores.</p>\n                    <h4 class=\"sub-header\"> Nuestros productos </h4>\n\n                    <p class=\"lead\">\n                        <a href=\"https://sellodigital.com.mx\" class=\"btn btn-lg btn-default btn-notify\">Sello Digital</a>\n                        <a href=\"https://www.fisherapp.mx\" class=\"btn btn-lg btn-default btn-notify\">Fisher App</a>\n                    </p>\n                </div>\n                <div class=\"mastfoot\">\n                    <div class=\"inner\">\n                        <p>© {{ dateYear }} Cubicode servicios integrados.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/contact/contact.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/contact/contact.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"bg-blue-cubicode pt-5\">\n  <div class=\"row justify-content-center pb-2\">\n    <div class=\"col-auto\">\n      <h2>Contacto</h2>\n    </div>\n  </div>\n  <div class=\"row justify-content-center pb-5\">\n    <div class=\"col-12 col-sm-3 col-md-2 col-lg-2 text-center\">\n      <img src=\"assets/img/cubicode-webpage-mascot.png\" class=\"img-fluid mascot\" alt=\"mascot\" >\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-6 col-lg-6\">\n      <form>\n        <div class=\"form-group row\">\n          <label for=\"inputName2\" class=\"col-3 col-sm-2 col-md-2 col-lg-2 col-form-label text-right\">Nombre</label>\n          <div class=\"col-8 col-sm-10 col-md-10 col-lg-10\">\n            <input type=\"text\" class=\"form-control\" id=\"inputName2\" placeholder=\"Nombre\" [(ngModel)]=\"formContact.name\" name=\"name\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputEmail\" class=\"col-3 col-sm-2 col-md-2 col-lg-2 col-form-label text-right\">Email</label>\n          <div class=\"col-8 col-sm-10 col-md-10 col-lg-10\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\" [(ngModel)]=\"formContact.email\" name=\"email\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputPhone\" class=\"col-3 col-sm-2 col-md-2 col-lg-2 col-form-label text-right\">Tel&eacute;fono</label>\n          <div class=\"col-8 col-sm-10 col-md-10 col-lg-10\">\n            <input type=\"text\" class=\"form-control\" id=\"inputPhone\" placeholder=\"Teléfono\" [(ngModel)]=\"formContact.phone\" name=\"phone\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputCity\" class=\"col-3 col-sm-2 col-md-2 col-lg-2 col-form-label text-right\">Ciudad</label>\n          <div class=\"col-8 col-sm-10 col-md-10 col-lg-10\">\n            <input type=\"text\" class=\"form-control\" id=\"inputCity\" placeholder=\"Ciudad\" [(ngModel)]=\"formContact.city\" name=\"city\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputMessage\" class=\"col-3 col-sm-2 col-md-2 col-lg-2 col-form-label text-right\">Mensaje</label>\n          <div class=\"col-8 col-sm-10 col-md-10 col-lg-10\">\n            <textarea class=\"form-control\" rows=\"5\" placeholder=\"Mensaje\" id=\"inputMessage\" [(ngModel)]=\"formContact.name\" name=\"message\"></textarea>\n          </div>\n        </div>\n        <div class=\"row justify-content-end\">\n          <div class=\"col-4\">\n            <button type=\"button\" class=\"btn btn-dark-cubi btn-block\">Enviar</button>\n          </div>\n        </div>\n      </form>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"sectionHome\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n            <img src=\"assets/img/homeGallery/cubicode01.png\" class=\"w-100 min-vh-100 d-xs-none d-md-block\" alt=\"...\">\n            <!-- d-block -->\n            <div class=\"carousel-caption\">\n                <!-- d-none d-sm-block -->\n                <div class=\"container\">\n                    <div class=\"row justify-content-md-center justify-content-sm-center justify-content-xs-center\">\n                        <div class=\"col col-md-12 col-lg-6 col-sm-12 col-xs-12\">\n                            <h3 class=\"text-dark\">Explora tu potencial</h3>\n                            <p class=\"text-dark\">Somos una empresa mexicana fundada en abril del 2013 en la ciudad de Mérida Yucatán, CUBICODE nace como una empresa de desarrollo de software a la medida, usando herramientas y metodologías ágiles, comprometidos a desarrollar\n                                proyectos con calidad e involucrando a sus clientes en todo el proceso del desarrollo para asegurar el cumplimiento de los objetivos.</p>\n                            <br>\n                            <p class=\"text-dark\">Somos una empresa joven pero con gran experiencia obtenida en los mas de 20 proyectos desarrollados</p>\n                            <h4>Desarrollo de sistemas web</h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-service id=\"sectionService\"></app-service>\n<app-products id=\"sectionProducts\"></app-products>\n<app-projects id=\"sectionProjects\"></app-projects>\n<app-contact id=\"sectionContact\"></app-contact>\n<app-footer id=\"sectionFooter\"></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/products/products.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/products/products.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid bg-blue-cubicode\">\n    <div class=\"row text-center pt-5\">\n        <div class=\"col\">\n            <h2>Nuestros Productos</h2>\n        </div>\n    </div>\n    <div class=\"row justify-content-center pb-5\">\n        <div class=\"col-xs-10 col-sm-4 col-md-4 col-lg-4\">\n            <div class=\"row text-center\">\n                <div class=\"col\">\n                    <img src=\"assets/img/products/cubicode-sellodigital.png\" class=\"img-fluid\" alt=\"Sello Digital\" width=\"350\" height=\"110\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <p>\n                        Sistema de facturación electrónica para múltiples empresas, genere facturas validas para el SAT, administren sus clientes y controle el cobro de sus facturas.\n                    </p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col text-right mr-2\">\n                    <a href=\"https://sellodigital.com.mx\" target=\"_blank\">\n                        Ver más...\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-10 col-sm-4 col-md-4 col-lg-4\">\n            <div class=\"row text-center\">\n                <div class=\"col\">\n                    <img src=\"assets/img/products/cubicode-fisherapp.png\" class=\"img-fluid\" alt=\"Fisher App\" height=\"105\" width=\"275\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <p>\n                        Sistema administrativo para lavanderías y tintorerías en la nube, ayuda a mejorar la atención a los clientes y administrar su negocio de manera fácil e intuitiva.\n                    </p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col text-right mr-2\">\n                    <a href=\"https://www.fisherapp.mx\" target=\"_blank\">\n                        Ver más...\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/projects/detail/detail.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/projects/detail/detail.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <!-- Tab panes -->\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"tab-content\">\n          <div *ngFor=\"let project of projectsToShow; let i = index\" role=\"tabpanel\" class=\"tab-pane {{animate}}\" [ngClass]=\"project.active ? 'show active' : '' \" id=\"{{project.id}}\">\n\n            <div class=\"row justify-content-center\">\n              <div class=\"col-xs-12 col-sm-10 col-md-5 col-lg-5\">\n                <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n                  <div class=\"carousel-inner\">\n                    <div class=\"carousel-item\" *ngFor=\"let image of project.gallery;let ind = index\" [class.active]=\"ind==0\">\n                      <img class=\"d-block w-100\" [src]=\"image\" alt=\"First slide\">\n                    </div>\n                  </div>\n                  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Previous</span>\n                  </a>\n                  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Next</span>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-xs-12 col-sm-10 col-md-7 col-lg-5 mt-4\">\n                <div class=\"row\">\n                  <div class=\"col-auto mb-4\">\n                    <img [src]=\"project.logo\" class=\"img-fluid\" alt=\"Logo\" width=\"100\" height=\"130\" >\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <h2>{{project.title}}</h2>\n                    <p>{{project.description}}</p>\n                  </div>\n                </div>\n                <div  class=\"row justify-content-end\" [class.pt-5]=\"!project.link\" [class.mb-3]=\"project.link\">\n                  <div class=\"col-4\">\n                    <a *ngIf=\"project.link\" [href]=\"project.link\" class=\"btn btn-info btn-blue-cubi btn-block\" target=\"_blank\" >Ver más</a>\n                  </div>\n                </div>\n                <div *ngIf=\"project.icons.length > 0\" class=\"row justify-content-end\">\n                  <div class=\"col-5\">\n                    <img *ngFor=\"let icon of project.icons\" [src]=\"icon\" class=\"img-fluid\" alt=\"Logo\" width=\"55\" height=\"55\" >\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Nav tabs -->\n    <div class=\"row justify-content-center\">\n      <div class=\"col-auto\">\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n          <li role=\"tab\" *ngFor=\"let project of projectsToShow\" [class.nav-item]=\"project.active\">\n            <a (click)=\"nextProject(project)\" [ngClass]=\"project.active? 'dot nav-project active' : 'dot nav-project'\" href=\"#{{project.id}}\" [attr.aria-controls]=\"project.id\" role=\"tab\" data-toggle=\"tab\" [attr.aria-selected]=\"project.active\"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <!--\n\n    -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/projects/filter/filter.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/projects/filter/filter.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"select_filter\">\n    <img *ngIf=\"image\" [src]=\"image\" class=\"img-fluid\" alt=\"Desktop\" width=\"80\" height=\"80\">\n    <br>\n    <label class=\"subtitle_filter select_filter\">{{title}}</label>\n</div>\n<div  [class.filter_active]=\"activeFilter\">\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/projects/projects.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/projects/projects.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid bg-black-cubicode \">\n    <div class=\"row text-center pt-5\">\n        <div class=\"col\">\n            <h2>Nuestros Proyectos</h2>\n        </div>\n    </div>\n    <div class=\"row justify-content-center mt-1 pb-4\">\n        <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n            <div class=\"row text-center\">\n              <app-filter [title]=\"filter.title\"\n                          [image]=\"filter.img\"\n                          [activeFilter]=\"filter.active\"\n                          *ngFor=\"let filter of filters\"\n                          class=\"col align-self-end\" (click)=\"activeFilter(filter); appDetail.showProjects(filter);\"></app-filter>\n            </div>\n        </div>\n    </div>\n  <div class=\"row mt-1 pb-4\">\n    <div class=\"col\">\n      <app-detail  #appDetail></app-detail>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/service/description/description.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/service/description/description.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Modal -->\n<ng-template #contentDevelopment let-modal>\n  <div class=\"modal-header bg-black-cubicode\">\n    <h2 class=\"modal-title title-service\">Desarrollo de software</h2>\n    <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body bg-black-cubicode\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien lacus,\n      posuere eget elementum vel, fringilla vitae tellus. Suspendisse vitae odio id nunc tempor porta nec sed odio.\n      Nam arcu magna, bibendum sit amet gravida vel, volutpat nec metus. Integer nec volutpat urna. Fusce ultrices nisi\n      ac quam aliquet condimentum. Proin augue odio, faucibus vel feugiat vel, eleifend at odio. Sed maximus dolor a\n      viverra convallis. Ut semper commodo urna ut blandit. Etiam et placerat quam. Proin dapibus ligula convallis,\n      blandit erat non, consectetur elit. Mauris quis dapibus arcu. Integer vitae finibus dolor, vel scelerisque ligula.\n       Donec et dignissim arcu, eu sollicitudin ipsum.</p>\n  </div>\n  <div class=\"modal-footer bg-black-cubicode\">\n    <button type=\"button\" class=\"btn btn-outline-dark btn-dark-cubi\" (click)=\"modal.close('Save click')\">Cerrar</button>\n  </div>\n</ng-template>\n<!-- End Modal -->\n\n<!-- Modal -->\n<ng-template #contentErs let-modal>\n  <div class=\"modal-header bg-black-cubicode\">\n    <h4 class=\"modal-title title-service\">Análisis y documentación de requisitos</h4>\n    <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body bg-black-cubicode\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien lacus,\n      posuere eget elementum vel, fringilla vitae tellus. Suspendisse vitae odio id nunc tempor porta nec sed odio.\n      Nam arcu magna, bibendum sit amet gravida vel, volutpat nec metus. Integer nec volutpat urna. Fusce ultrices nisi\n      ac quam aliquet condimentum. Proin augue odio, faucibus vel feugiat vel, eleifend at odio. Sed maximus dolor a\n      viverra convallis. Ut semper commodo urna ut blandit. Etiam et placerat quam. Proin dapibus ligula convallis,\n      blandit erat non, consectetur elit. Mauris quis dapibus arcu. Integer vitae finibus dolor, vel scelerisque ligula.\n      Donec et dignissim arcu, eu sollicitudin ipsum.</p>\n  </div>\n  <div class=\"modal-footer bg-black-cubicode\">\n    <button type=\"button\" class=\"btn btn-outline-dark btn-dark-cubi\" (click)=\"modal.close('Save click')\">Cerrar</button>\n  </div>\n</ng-template>\n<!-- End Modal -->\n\n<!-- Modal -->\n<ng-template #contentArchitecture let-modal>\n  <div class=\"modal-header bg-black-cubicode\">\n    <h4 class=\"modal-title title-service\">Arquitectura de software</h4>\n    <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body bg-black-cubicode\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien lacus,\n      posuere eget elementum vel, fringilla vitae tellus. Suspendisse vitae odio id nunc tempor porta nec sed odio.\n      Nam arcu magna, bibendum sit amet gravida vel, volutpat nec metus. Integer nec volutpat urna. Fusce ultrices nisi\n      ac quam aliquet condimentum. Proin augue odio, faucibus vel feugiat vel, eleifend at odio. Sed maximus dolor a\n      viverra convallis. Ut semper commodo urna ut blandit. Etiam et placerat quam. Proin dapibus ligula convallis,\n      blandit erat non, consectetur elit. Mauris quis dapibus arcu. Integer vitae finibus dolor, vel scelerisque ligula.\n      Donec et dignissim arcu, eu sollicitudin ipsum.</p>\n  </div>\n  <div class=\"modal-footer bg-black-cubicode\">\n    <button type=\"button\" class=\"btn btn-outline-dark btn-dark-cubi\" (click)=\"modal.close('Save click')\">Cerrar</button>\n  </div>\n</ng-template>\n<!-- End Modal -->\n\n<!-- Modal -->\n<ng-template #contentSupport let-modal>\n  <div class=\"modal-header bg-black-cubicode\">\n    <h4 class=\"modal-title title-service\">Soporte técnico</h4>\n    <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body bg-black-cubicode\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien lacus,\n      posuere eget elementum vel, fringilla vitae tellus. Suspendisse vitae odio id nunc tempor porta nec sed odio.\n      Nam arcu magna, bibendum sit amet gravida vel, volutpat nec metus. Integer nec volutpat urna. Fusce ultrices nisi\n      ac quam aliquet condimentum. Proin augue odio, faucibus vel feugiat vel, eleifend at odio. Sed maximus dolor a\n      viverra convallis. Ut semper commodo urna ut blandit. Etiam et placerat quam. Proin dapibus ligula convallis,\n      blandit erat non, consectetur elit. Mauris quis dapibus arcu. Integer vitae finibus dolor, vel scelerisque ligula.\n      Donec et dignissim arcu, eu sollicitudin ipsum.</p>\n  </div>\n  <div class=\"modal-footer bg-black-cubicode\">\n    <button type=\"button\" class=\"btn btn-outline-dark btn-dark-cubi\" (click)=\"modal.close('Save click')\">Cerrar</button>\n  </div>\n</ng-template>\n<!-- End Modal -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/service/service.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/service/service.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid bg-service pb-5\">\n    <div class=\"row justify-content-center pt-5\">\n        <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 align-self-center text-right\">\n            <img src=\"assets/img/services/icon-001.png\" class=\"d-none d-sm-block\" alt=\"Desarrollo de Software\" width=\"46\" height=\"46\">\n        </div>\n        <div class=\"col-xs-10 col-sm-6 col-md-6 col-lg-6\" id=\"sectionDevelopment\">\n            <h3 class=\"title-service\" >Desarrollo de software <img src=\"assets/img/services/icon-001.png\" class=\"d-xs-block d-sm-none d-md-none d-lg-none d-xl-none\" alt=\"Desarrollo de Software\" width=\"46\" height=\"46\"></h3>\n            <p>Contamos con un equipo especializado en diferentes tecnologías para el desarrollo de sofware a la medida, apegándonos a las metodologías del desarrollo ágil como SCRUM. Desarrollo web, desktop y móviles.</p>\n        </div>\n        <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 align-self-center text-left mb-3\">\n            <a [routerLink]=\"\"\n               queryParamsHandling=\"preserve\"\n               (click)=\"descriptionComponent.showModalService('development', 'lg')\">Ver más...</a>\n        </div>\n    </div>\n    <div class=\"row justify-content-center\">\n        <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 align-self-center text-right\">\n            <img src=\"assets/img/services/icon-002.png\" class=\"d-none d-sm-block\" alt=\"Desarrollo de Software\" width=\"46\" height=\"46\">\n        </div>\n        <div class=\"col-xs-10 col-sm-6 col-md-6 col-lg-6\" id=\"sectionErs\">\n            <h3  class=\"title-service\" >Análisis y documentación de requisitos <img src=\"assets/img/services/icon-002.png\" class=\"d-xs-block d-sm-none d-md-none d-lg-none d-xl-none\" alt=\"Desarrollo de Software\" width=\"46\" height=\"46\"></h3>\n            <p>Todo buen proyecto requiere de un análisis y documentación de requisitos apropiada para poder dar inicio, este servicio ayudara a que todo el equipo involucrado en el proyecto tenga de manera fácil, clara y accesible los requisitos del proyecto.</p>\n        </div>\n        <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 align-self-center text-left mb-3\">\n            <a [routerLink]=\"\"\n               queryParamsHandling=\"preserve\"\n               (click)=\"descriptionComponent.showModalService('ers','lg')\">Ver más...</a>\n        </div>\n    </div>\n\n    <div class=\"row justify-content-center\">\n        <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 align-self-center text-right\">\n            <img src=\"assets/img/services/icon-003.png\" class=\"d-none d-sm-block\" alt=\"Desarrollo de Software\" width=\"46\" height=\"46\">\n        </div>\n        <div class=\"col-xs-10 col-sm-6 col-md-6 col-lg-6\" id=\"sectionArchitecture\">\n            <h3  class=\"title-service\" >Arquitectura de software <img src=\"assets/img/services/icon-003.png\" class=\"d-xs-block d-sm-none d-md-none d-lg-none d-xl-none\" alt=\"Desarrollo de Software\" width=\"46\" height=\"46\"></h3>\n            <p>No se puede desarrollar un proyecto de software sin diseño y arquitectura, este servicio ayudara al equipo de desarrollo a establecer los lineamientos correctos antes de escribir una linea de código, siguiendo estándares como el UML para el\n                diseño del sistema.</p>\n        </div>\n        <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 align-self-center text-left mb-3\">\n            <a [routerLink]=\"\"\n               queryParamsHandling=\"preserve\"\n               (click)=\"descriptionComponent.showModalService('architecture', 'lg')\">Ver más...</a>\n        </div>\n    </div>\n\n    <div class=\"row justify-content-center\">\n        <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 align-self-center text-right\">\n            <img src=\"assets/img/services/icon-004.png\" class=\"d-none d-sm-block\" alt=\"Desarrollo de Software\" width=\"46\" height=\"46\">\n        </div>\n        <div class=\"col-xs-10 col-sm-6 col-md-6 col-lg-6\" id=\"sectionSupport\">\n            <h3  class=\"title-service\">Soporte técnico <img src=\"assets/img/services/icon-004.png\" class=\"d-xs-block d-sm-none d-md-none d-lg-none d-xl-none\" alt=\"Desarrollo de Software\" width=\"46\" height=\"46\"></h3>\n            <p>El soporte técnico es un servicio que te ayudara a poder diagnosticar y corregir cualquier problema relacionado con tu proyecto que pudiera afectar la operación, ofrecemos una atención inmediata en caso de problemas críticos con soluciones\n                en menos de 24 horas.</p>\n        </div>\n        <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 align-self-center text-left mb-3\">\n            <a [routerLink]=\"\"\n               queryParamsHandling=\"preserve\"\n               (click)=\"descriptionComponent.showModalService('support', 'lg')\">Ver más...</a>\n        </div>\n    </div>\n</div>\n\n<app-description-services #descriptionComponent></app-description-services>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-black-cubicode\">\n  <div class=\"row justify-content-center pb-3 pt-2\">\n    <div class=\"col-auto\">\n      <label class=\"text-cubi\">Copyright, Cubicode {{year}}.</label>\n    </div>\n  </div>\n  <div class=\"row justify-content-center pb-3\">\n    <div class=\"col-8\">\n      <div class=\"row justify-content-end\">\n      <div class=\"col-auto\">\n        <a href=\"https://www.facebook.com/\" target=\"_blank\"><img src=\"assets/img/icons/facebook-icon.png\" class=\"img-fluid mascot\" alt=\"facebook\" width=\"30\" height=\"30\" ></a>\n        <a href=\"https://github.com/cubicodesoft\" target=\"_blank\" class=\"ml-2\"><img src=\"assets/img/icons/github-icon.png\" class=\"img-fluid mascot\" alt=\"github\" width=\"30\" height=\"30\" ></a>\n      </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-center pb-5 container-info-footer\">\n    <div class=\"col-6 col-sm-4 col-md-4 col-lg-4\">\n      <h3 class=\"subtitle\">Servicios</h3>\n      <a href=\"#sectionDevelopment\" SimpleSmoothScroll class=\"text-cubi\">\n        Desarrollo de software\n      </a> <br>\n      <a href=\"#sectionErs\" SimpleSmoothScroll class=\"text-cubi\">\n        Análisis y documentación de requisitos\n      </a> <br>\n      <a href=\"#sectionArchitecture\" SimpleSmoothScroll class=\"text-cubi\">\n        Hosting\n      </a> <br>\n      <a href=\"#sectionArchitecture\" SimpleSmoothScroll class=\"text-cubi\">\n        Arquitectura de software\n      </a> <br>\n      <a href=\"#sectionSupport\" SimpleSmoothScroll class=\"text-cubi\">\n        Soporte técnico\n      </a> <br>\n\n    </div>\n    <div class=\"col-4 col-sm-2 col-md-2 col-lg-2\">\n      <h3 class=\"subtitle\">Productos</h3>\n      <a href=\"https://sellodigital.com.mx/\" target=\"_blank\" class=\"text-cubi\">Sello digital</a>\n      <br>\n      <a href=\"https://www.fisherapp.mx/\" target=\"_blank\" class=\"text-cubi\">Fisher</a>\n      <br>\n      <h3 class=\"subtitle\">Extras</h3>\n      <a href=\"#sectionContact\" SimpleSmoothScroll class=\"text-cubi\">Contacto</a> <br>\n      <a [routerLink]=\"['blog']\" class=\"text-cubi\">Blog</a> <br>\n    </div>\n    <div class=\"col-10 col-sm-2 col-md-2 col-lg-2 align-\">\n      <h3 class=\"subtitle\">Cubicode</h3>\n      <label class=\"text-cubi\">Aviso de privacidad</label> <br>\n      <label class=\"text-cubi\">Aviso legal</label>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar fixed-top navbar-dark {{classMenuNavBar}}\" id=\"menu-navbar-home\" (mouseover)=\"onFocus()\" (mouseout)=\"onFocusOut()\">\n    <img src=\"assets/img/navbar-cubicode-logo.png\" class=\"d-inline-block align-top\" width=\"165\" height=\"63\" alt=\"cubicode desarrllo de software\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#menuHome\" aria-controls=\"menuHome\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (clickOutside)=\"closeMenuNavBar()\" #btnMenuHome>\n                    <span class=\"navbar-toggler-icon\" ></span>\n    </button>\n</nav>\n\n<div class=\"row collapse fixed-top navbar-collapse menu-home\" id=\"menuHome\" #menuHome>\n    <div class=\"offset-md-8 offset-xs-8 offset-lg-9 offset-sm-8\"></div>\n    <div class=\"col-md-4 col-xs-12 col-lg-3 col-sm-12 bg-dark\">\n        <div class=\"row justify-content-md-center justify-content-sm-center justify-content-xs-center\">\n            <div class=\"col col-md-12 col-lg-11 col-sm-8 col-xs-12 fixed-top-menu\">\n                <div class=\"menu-home-container\">\n                    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0 text-center\">\n                        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"router.url != '/home'\">\n                            <a class=\"nav-link h5\" [routerLink]=\"['home']\">Inicio</a>\n                        </li>\n                        <li class=\"nav-item\" *ngIf=\"router.url == '/home'\">\n                            <a class=\"nav-link h5 \" href=\"#sectionHome\" SimpleSmoothScroll>Nosotros</a>\n                        </li>\n                        <li class=\"nav-item\" *ngIf=\"router.url == '/home'\">\n                            <a class=\"nav-link h5 \" href=\"#sectionService\" SimpleSmoothScroll >Servicios</a>\n                        </li>\n                        <li class=\"nav-item\" *ngIf=\"router.url == '/home'\">\n                            <a class=\"nav-link h5 \" href=\"#sectionProducts\" SimpleSmoothScroll>Productos</a>\n                        </li>\n                        <li class=\"nav-item\" *ngIf=\"router.url == '/home'\">\n                            <a class=\"nav-link h5 \" href=\"#sectionProjects\" SimpleSmoothScroll>Proyectos</a>\n                        </li>\n                        <li class=\"nav-item\" *ngIf=\"router.url == '/home'\">\n                            <a class=\"nav-link h5 \" href=\"#sectionContact\" SimpleSmoothScroll>Contacto</a>\n                        </li>\n                        <li class=\"nav-item h5 \" routerLinkActive=\"active\" *ngIf=\"router.url == '/home'\">\n                            <a class=\"nav-link \" [routerLink]=\"['blog']\">Blog</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/working/working.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/working/working.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"image-background-page-home\">\n    <div class=\"site-wrapper\">\n        <div class=\"site-wrapper-inner\">\n            <div class=\"cover-container\">\n                <div class=\"masthead clearfix\">\n                    <div class=\"inner\">\n                        <h3 class=\"masthead-brand\">\n                            <img src=\"assets/img/logo_horizontal.png\" width=\"265\">\n                        </h3>\n                        <nav class=\"nav nav-masthead\">\n                            <a class=\"nav-link nav-social\" href=\"https://www.facebook.com/cubicode/\"><i class=\"fab fa-facebook-f\" aria-hidden=\"true\"></i></a>\n                            <a class=\"nav-link nav-social\" href=\"https://github.com/cubicodesoft\"><i class=\"fab fa-github\" aria-hidden=\"true\"></i></a>\n                        </nav>\n                    </div>\n                </div>\n                <br>\n                <div class=\"inner cover\">\n                    <h1 class=\"cover-heading\">CUBICODE</h1>\n                    <h5 class=\"sub-header\"> Regresaremos pronto </h5>\n                    <br>\n                    <p class=\"lead\">\n                        <!-- cover-copy -->\n                        Somo una empresa Mexicana del estado de Yucatán que nos apasiona la tecnologia y el desarrollo de gran impacto, estamos para llevar su idea al siguiente nivel, estaremos de regreso muy pronto con un nuevo diseño para este año 2020 y nuevos servicios.\n                    </p>\n                    <p>\n                        El equipo CUBICODE les desea Feliz navidad y feliz año nuevo, que este 2020 lleven sus proyectos y su negocio al siguiente nivel y nuestro equipo esta para ayudarlos.\n                    </p>\n                    <h4 class=\"sub-header\"> Nuestros productos </h4>\n\n                    <p class=\"lead\">\n                        <a href=\"https://sellodigital.com.mx\" class=\"btn btn-lg btn-default btn-notify\">Sello Digital</a>\n                        <a href=\"https://www.fisherapp.mx\" class=\"btn btn-lg btn-default btn-notify\">Fisher App</a>\n                    </p>\n\n                    <h4 class=\"sub-header\"> Proximamente nuestro Blog </h4>\n                    <p>\n                        <a [routerLink]=\"['blog']\" class=\"btn btn-lg btn-default btn-notify\">Blog Cubicode</a>\n                    </p>\n                </div>\n                <div class=\"mastfoot\">\n                    <div class=\"inner\">\n                        <p>© {{dateYear}} Cubicode servicios integrados.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
        this.title = 'cubicode-page';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-simple-smooth-scroll */ "./node_modules/ng2-simple-smooth-scroll/fesm5/ng2-simple-smooth-scroll.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _services_filters_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/filters.service */ "./src/app/services/filters.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_working_working_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/working/working.component */ "./src/app/components/working/working.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_home_service_service_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/service/service.component */ "./src/app/components/home/service/service.component.ts");
/* harmony import */ var _components_home_products_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/products/products.component */ "./src/app/components/home/products/products.component.ts");
/* harmony import */ var _components_home_projects_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/projects/projects.component */ "./src/app/components/home/projects/projects.component.ts");
/* harmony import */ var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/contact/contact.component */ "./src/app/components/home/contact/contact.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_home_projects_filter_filter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home/projects/filter/filter.component */ "./src/app/components/home/projects/filter/filter.component.ts");
/* harmony import */ var _components_home_projects_detail_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/projects/detail/detail.component */ "./src/app/components/home/projects/detail/detail.component.ts");
/* harmony import */ var _components_home_service_description_description_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/service/description/description.component */ "./src/app/components/home/service/description/description.component.ts");

// Routes

// Modules






// Services


// Components













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_working_working_component__WEBPACK_IMPORTED_MODULE_11__["WorkingComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_home_service_service_component__WEBPACK_IMPORTED_MODULE_15__["ServiceComponent"],
                _components_home_products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"],
                _components_home_projects_projects_component__WEBPACK_IMPORTED_MODULE_17__["ProjectsComponent"],
                _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
                _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _components_home_projects_filter_filter_component__WEBPACK_IMPORTED_MODULE_20__["FilterComponent"],
                _components_home_projects_detail_detail_component__WEBPACK_IMPORTED_MODULE_21__["DetailComponent"],
                _components_home_service_description_description_component__WEBPACK_IMPORTED_MODULE_22__["DescriptionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideModule"],
                ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__["SimpleSmoothScrollModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [
                _services_projects_service__WEBPACK_IMPORTED_MODULE_8__["ProjectsService"],
                _services_filters_service__WEBPACK_IMPORTED_MODULE_9__["FiltersService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");





var ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'blog', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * Globals\n */\n\n\n/* Links */\n\n\na,\na:focus,\na:hover {\n    color: #fff;\n}\n\n\n/* Custom default button */\n\n\n.btn-default {\n    color: #fff;\n    text-shadow: none;\n    /* Prevent inheritence from `body` */\n    background-color: transparent;\n    border: 2px solid #fff;\n    border-radius: 20px;\n    padding: 0.5rem 2rem;\n}\n\n\n.btn-default:hover,\n.btn-default:focus {\n    background-color: rgba(255, 255, 255, 0.3);\n}\n\n\n/*\n * Base structure\n */\n\n\nhtml,\nbody {\n    height: 100%;\n}\n\n\n.image-background-page-blog {\n    background: url(/assets/img/background-working-blog.jpg) no-repeat center center fixed;\n    background-size: cover;\n    color: #fff;\n    text-align: center;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 18px !important;\n    height: 100%;\n}\n\n\n.cover-copy {\n    color: #fff !important;\n}\n\n\n.btn-notify {\n    border: 2px solid #fff !important;\n}\n\n\n/* Extra markup and styles for table-esque vertical and horizontal centering */\n\n\n.site-wrapper {\n    display: table;\n    width: 100%;\n    height: 100%;\n    /* For at least Firefox */\n    min-height: 100%;\n    background: rgba(48, 53, 70, 0.5);\n    box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5);\n}\n\n\n.site-wrapper-inner {\n    display: table-cell;\n    vertical-align: top;\n}\n\n\n.cover-container {\n    margin-right: auto;\n    margin-left: auto;\n}\n\n\n/* Padding for spacing */\n\n\n.inner {\n    padding: 30px;\n}\n\n\n/*\n * Header\n */\n\n\n.masthead-brand {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    color: #fff !important;\n}\n\n\n.nav-masthead {\n    text-align: center;\n    display: block;\n    color: #fff !important;\n}\n\n\n.nav-masthead .nav-link {\n    display: inline-block;\n    color: #fff !important;\n}\n\n\n@media (min-width: 768px) {\n    .masthead-brand {\n        float: left;\n    }\n    .nav-masthead {\n        float: right;\n    }\n}\n\n\n/*\n * Cover\n */\n\n\n.cover {\n    padding: 0 20px;\n}\n\n\n.cover .btn-notify {\n    padding: 10px 60px;\n    font-weight: 500;\n    text-transform: uppercase;\n    border-radius: 40px;\n}\n\n\n.cover-heading {\n    font-weight: 500;\n    text-transform: uppercase;\n    letter-spacing: 10px;\n    font-size: 2rem;\n    margin-bottom: 15px !important;\n}\n\n\n.sub-header {\n    font-size: 23px;\n    letter-spacing: 6px;\n    color: #fff !important;\n}\n\n\n.cover-heading {\n    color: #fff !important;\n}\n\n\n@media (min-width: 768px) {\n    .cover-heading {\n        font-size: 3.4rem;\n        letter-spacing: 15px;\n    }\n}\n\n\n.cover-copy {\n    max-width: 500px;\n    margin: 0 auto 3rem;\n}\n\n\n/*\n * Footer\n */\n\n\n.mastfoot {\n    color: #999;\n    /* IE8 proofing */\n    color: rgba(255, 255, 255, 0.5);\n}\n\n\n/*\n * Subscribe modal box\n */\n\n\n#subscribeModal .modal-content {\n    background-color: #303546;\n    color: #fff;\n    text-align: left;\n}\n\n\n#subscribeModal .modal-header,\n#subscribeModal .modal-footer {\n    border: 0;\n}\n\n\n#subscribeModal .close {\n    color: #fff;\n}\n\n\n#subscribeModal .form-control {\n    margin-top: 1rem;\n    background: rgba(0, 0, 0, 0.4);\n    color: #fff;\n}\n\n\n#subscribeModal .form-control:focus {\n    border-color: #49506a;\n}\n\n\n/*\n * Affix and center\n */\n\n\n@media (min-width: 768px) {\n    /* Pull out the header and footer */\n    .masthead {\n        position: fixed;\n        top: 0;\n    }\n    .mastfoot {\n        position: fixed;\n        bottom: 0;\n    }\n    /* Start the vertical centering */\n    .site-wrapper-inner {\n        vertical-align: middle;\n    }\n    /* Handle the widths */\n    .masthead,\n    .mastfoot,\n    .cover-container {\n        width: 100%;\n        /* Must be percentage or pixels for horizontal alignment */\n    }\n}\n\n\n@media (min-width: 992px) {\n    .masthead,\n    .mastfoot,\n    .cover-container {\n        width: 1060px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTs7O0FBR0YsVUFBVTs7O0FBRVY7OztJQUdJLFdBQVc7QUFDZjs7O0FBR0EsMEJBQTBCOzs7QUFFMUI7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7OztBQUVBOztJQUVJLDBDQUEwQztBQUM5Qzs7O0FBR0E7O0VBRUU7OztBQUVGOztJQUVJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksc0ZBQXNGO0lBQ3RGLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOzs7QUFHQSw4RUFBOEU7OztBQUU5RTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLDhDQUE4QztBQUNsRDs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUdBLHdCQUF3Qjs7O0FBRXhCO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7O0VBRUU7OztBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOzs7QUFHQTs7RUFFRTs7O0FBRUY7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7QUFDSjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTs7RUFFRTs7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7O0FBR0E7O0VBRUU7OztBQUVGO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7OztBQUVBOztJQUVJLFNBQVM7QUFDYjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQTs7RUFFRTs7O0FBRUY7SUFDSSxtQ0FBbUM7SUFDbkM7UUFDSSxlQUFlO1FBQ2YsTUFBTTtJQUNWO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsU0FBUztJQUNiO0lBQ0EsaUNBQWlDO0lBQ2pDO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0Esc0JBQXNCO0lBQ3RCOzs7UUFHSSxXQUFXO1FBQ1gsMERBQTBEO0lBQzlEO0FBQ0o7OztBQUVBO0lBQ0k7OztRQUdJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogR2xvYmFsc1xuICovXG5cblxuLyogTGlua3MgKi9cblxuYSxcbmE6Zm9jdXMsXG5hOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4vKiBDdXN0b20gZGVmYXVsdCBidXR0b24gKi9cblxuLmJ0bi1kZWZhdWx0IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAvKiBQcmV2ZW50IGluaGVyaXRlbmNlIGZyb20gYGJvZHlgICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xufVxuXG4uYnRuLWRlZmF1bHQ6aG92ZXIsXG4uYnRuLWRlZmF1bHQ6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuXG4vKlxuICogQmFzZSBzdHJ1Y3R1cmVcbiAqL1xuXG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1hZ2UtYmFja2dyb3VuZC1wYWdlLWJsb2cge1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLXdvcmtpbmctYmxvZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb3Zlci1jb3B5IHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLW5vdGlmeSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5cbi8qIEV4dHJhIG1hcmt1cCBhbmQgc3R5bGVzIGZvciB0YWJsZS1lc3F1ZSB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBjZW50ZXJpbmcgKi9cblxuLnNpdGUtd3JhcHBlciB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIEZvciBhdCBsZWFzdCBGaXJlZm94ICovXG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ4LCA1MywgNzAsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnNpdGUtd3JhcHBlci1pbm5lciB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY292ZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cblxuLyogUGFkZGluZyBmb3Igc3BhY2luZyAqL1xuXG4uaW5uZXIge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cblxuLypcbiAqIEhlYWRlclxuICovXG5cbi5tYXN0aGVhZC1icmFuZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtbWFzdGhlYWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5tYXN0aGVhZC1icmFuZCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICAubmF2LW1hc3RoZWFkIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cblxuXG4vKlxuICogQ292ZXJcbiAqL1xuXG4uY292ZXIge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmNvdmVyIC5idG4tbm90aWZ5IHtcbiAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5jb3Zlci1oZWFkaW5nIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogNnB4O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5jb3Zlci1oZWFkaW5nIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY292ZXItaGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy40cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcbiAgICB9XG59XG5cbi5jb3Zlci1jb3B5IHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDNyZW07XG59XG5cblxuLypcbiAqIEZvb3RlclxuICovXG5cbi5tYXN0Zm9vdCB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgLyogSUU4IHByb29maW5nICovXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuXG4vKlxuICogU3Vic2NyaWJlIG1vZGFsIGJveFxuICovXG5cbiNzdWJzY3JpYmVNb2RhbCAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzU0NjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jc3Vic2NyaWJlTW9kYWwgLm1vZGFsLWhlYWRlcixcbiNzdWJzY3JpYmVNb2RhbCAubW9kYWwtZm9vdGVyIHtcbiAgICBib3JkZXI6IDA7XG59XG5cbiNzdWJzY3JpYmVNb2RhbCAuY2xvc2Uge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4jc3Vic2NyaWJlTW9kYWwgLmZvcm0tY29udHJvbCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbiNzdWJzY3JpYmVNb2RhbCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM0OTUwNmE7XG59XG5cblxuLypcbiAqIEFmZml4IGFuZCBjZW50ZXJcbiAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAvKiBQdWxsIG91dCB0aGUgaGVhZGVyIGFuZCBmb290ZXIgKi9cbiAgICAubWFzdGhlYWQge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG4gICAgLm1hc3Rmb290IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuICAgIC8qIFN0YXJ0IHRoZSB2ZXJ0aWNhbCBjZW50ZXJpbmcgKi9cbiAgICAuc2l0ZS13cmFwcGVyLWlubmVyIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gICAgLyogSGFuZGxlIHRoZSB3aWR0aHMgKi9cbiAgICAubWFzdGhlYWQsXG4gICAgLm1hc3Rmb290LFxuICAgIC5jb3Zlci1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogTXVzdCBiZSBwZXJjZW50YWdlIG9yIHBpeGVscyBmb3IgaG9yaXpvbnRhbCBhbGlnbm1lbnQgKi9cbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5tYXN0aGVhZCxcbiAgICAubWFzdGZvb3QsXG4gICAgLmNvdmVyLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDYwcHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
        this.dateYear = new Date().getFullYear();
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")).default]
        })
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/home/contact/contact.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nlabel{\n  color: white;\n}\n\n.mascot {\n  width: 115px;\n  height: 140px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmxhYmVse1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXNjb3Qge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTQwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/home/contact/contact.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.formContact = {
            name: '',
            email: '',
            phone: '',
            city: '',
            message: ''
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ContactComponent.prototype, "getModelForm", {
        get: function () {
            return JSON.stringify(this.formContact);
        },
        enumerable: true,
        configurable: true
    });
    ContactComponent.prototype.sendForm = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/contact/contact.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/components/home/contact/contact.component.css")).default]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel-caption {\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.carousel-caption {\n    bottom: initial;\n}\n\n/*.carousel-item {\n    height: 100vh;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    padding: 0 15%;\n}\n\n.carousel-item.active,\n.carousel-item-left,\n.carousel-item-right {\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousel-item img {\n    display: none;\n}\n\n.carousel-item h1 {\n    color: #fff;\n    font-size: 36px;\n    padding: 0 10%;\n}\n\n.carousel-item p {\n    color: #fff;\n    margin: 10px 0;\n}\n\n.carousel-indicators {\n    margin: 0 !important;\n    bottom: 7vh !important;\n}\n\n.carousel-indicators li {\n    height: 20px !important;\n    width: 100px !important;\n    border-radius: 0px !important;\n    opacity: .8 !important;\n    background: url(\"https://picsum.photos/100/40/?gravity=west\") center center no-repeat !important;\n}\n\n@media screen and (min-width: 992px) {\n    .carousel-indicators {\n        bottom: auto !important;\n        top: 67vh !important;\n    }\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtERyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgYm90dG9tOiBpbml0aWFsO1xufVxuXG5cbi8qLmNhcm91c2VsLWl0ZW0ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcGFkZGluZzogMCAxNSU7XG59XG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSxcbi5jYXJvdXNlbC1pdGVtLWxlZnQsXG4uY2Fyb3VzZWwtaXRlbS1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJvdXNlbC1pdGVtIGltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNhcm91c2VsLWl0ZW0gaDEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBwYWRkaW5nOiAwIDEwJTtcbn1cblxuLmNhcm91c2VsLWl0ZW0gcCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBib3R0b206IDd2aCAhaW1wb3J0YW50O1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogLjggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAwLzQwLz9ncmF2aXR5PXdlc3RcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgICAgIGJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDY3dmggIWltcG9ydGFudDtcbiAgICB9XG59ICovIl19 */");

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
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/products/products.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/home/products/products.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\np {\n    color: white;\n    border-right: 6px solid #648ec7!important;\n    font-family: 'avenir';\n}\n\na {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCAjNjQ4ZWM3IWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ2F2ZW5pcic7XG59XG5cbmEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/products/products.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/home/products/products.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/products/products.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.css */ "./src/app/components/home/products/products.component.css")).default]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/projects/detail/detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/projects/detail/detail.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh2 {\n  color: #648ec7;\n  font-family: 'myriadpro-bold';\n}\n\np{\n  color: #878787;\n}\n\n.nav-tabs{\n  border-bottom: 0px solid #dee2e6 !important;\n}\n\n.nav-tabs .nav-project.active {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n\n.nav-tabs a{\n  margin: 0 5px 0 5px;\n}\n\n.dot {\n  height: 15px;\n  width: 15px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.nav-item .active{\n  background-color: #658ec7 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9wcm9qZWN0cy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgyIHtcbiAgY29sb3I6ICM2NDhlYzc7XG4gIGZvbnQtZmFtaWx5OiAnbXlyaWFkcHJvLWJvbGQnO1xufVxuXG5we1xuICBjb2xvcjogIzg3ODc4Nztcbn1cblxuLm5hdi10YWJze1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXRhYnMgLm5hdi1wcm9qZWN0LmFjdGl2ZSB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNkZWUyZTYgI2RlZTJlNiAjZmZmO1xufVxuXG4ubmF2LXRhYnMgYXtcbiAgbWFyZ2luOiAwIDVweCAwIDVweDtcbn1cblxuLmRvdCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmF2LWl0ZW0gLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1OGVjNyAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/home/projects/detail/detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/home/projects/detail/detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/projects.service */ "./src/app/services/projects.service.ts");



var DetailComponent = /** @class */ (function () {
    // tslint:disable-next-line:variable-name
    function DetailComponent(_projectService) {
        this._projectService = _projectService;
        // @Input() filter: any = null;
        // currentProject: any = {};
        this.projectsToShow = [];
        // tslint:disable-next-line:no-shadowed-variable
        this.animate = 'animated fadeInRightBig'; // animated fadeOutLeft
    }
    DetailComponent.prototype.ngOnInit = function () {
        // this.projectsToShow = this._projectService.getProjects();
    };
    DetailComponent.prototype.showProjects = function (develop) {
        var _this = this;
        /*
        Se creo la promesa ya que la variable projectsToShow cuando es llamada por el componente
        projects Angular la encuentra utilizando realizando un check, cuando finaliza se procede a modificarla
        */
        Promise.resolve(this.projectsToShow).then(function () {
            _this.projectsToShow.forEach(function (project) {
                project.active = false;
            });
            if (develop.id === 1) { // All project
                _this.projectsToShow = _this._projectService.getProjects();
            }
            else {
                _this.projectsToShow = _this._projectService.getProjectsByFilter(develop);
            }
            if (_this.projectsToShow.length > 0) {
                _this.projectsToShow[0].active = true;
            }
        });
    };
    DetailComponent.prototype.nextProject = function (nextProject) {
        var _this = this;
        this.animate = 'animated fadeOutLeft';
        // tslint:disable-next-line:no-shadowed-variable
        setTimeout(function () {
            _this.projectsToShow.forEach(function (project) {
                if (project.active) {
                    project.active = false;
                }
            });
            nextProject.active = true;
            _this.animate = 'animated fadeInRightBig';
        }, 700);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/projects/detail/detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.css */ "./src/app/components/home/projects/detail/detail.component.css")).default]
        })
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/components/home/projects/filter/filter.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/projects/filter/filter.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subtitle_filter {\n  font-weight: bold;\n  color: #878787;\n}\n\nlabel {\n  margin-bottom: 0 !important;\n}\n\n.select_filter {\n  cursor: pointer;\n}\n\n.filter_active:after {\n  background-color: #648ec7;\n  bottom: -3px;\n  content: '';\n  display: block;\n  height: 4px;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%,0);\n}\n\n@media (max-width: 575.98px) {\n  .filter_active:after {\n    width: 90px;\n  }\n}\n\n@media (min-width: 576px) {\n  .filter_active:after {\n    width: 80px;\n  }\n}\n\n@media (min-width: 768px) {\n  .filter_active:after {\n    width: 60px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvcHJvamVjdHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlX2ZpbHRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzg3ODc4Nztcbn1cblxubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RfZmlsdGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsdGVyX2FjdGl2ZTphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDhlYzc7XG4gIGJvdHRvbTogLTNweDtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDRweDtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsMCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuZmlsdGVyX2FjdGl2ZTphZnRlciB7XG4gICAgd2lkdGg6IDkwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5maWx0ZXJfYWN0aXZlOmFmdGVyIHtcbiAgICB3aWR0aDogODBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZpbHRlcl9hY3RpdmU6YWZ0ZXIge1xuICAgIHdpZHRoOiA2MHB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/home/projects/filter/filter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/home/projects/filter/filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.image = null;
        this.title = null;
        this.activeFilter = false;
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FilterComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FilterComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FilterComponent.prototype, "activeFilter", void 0);
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/projects/filter/filter.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.component.css */ "./src/app/components/home/projects/filter/filter.component.css")).default]
        })
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/projects/projects.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/home/projects/projects.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n    color: #648ec7;\n    font-family: 'myriadpro-bold';\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgY29sb3I6ICM2NDhlYzc7XG4gICAgZm9udC1mYW1pbHk6ICdteXJpYWRwcm8tYm9sZCc7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/projects/projects.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/home/projects/projects.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_filters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/filters.service */ "./src/app/services/filters.service.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/components/home/projects/detail/detail.component.ts");




// '../../../../services/projects.service'
var ProjectsComponent = /** @class */ (function () {
    // private renderer: Renderer2
    // tslint:disable-next-line:variable-name
    function ProjectsComponent(_filterService) {
        this._filterService = _filterService;
        // @ViewChild("menuHome", {static: false}) menuHome: ElementRef;
        this.filterActive = null;
        this.filters = [];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.filters = this._filterService.getFilters();
        this.filterActive = this.filters[0];
    };
    ProjectsComponent.prototype.ngAfterViewInit = function () {
        this.detailProject.showProjects(this.filterActive);
    };
    ProjectsComponent.prototype.activeFilter = function (filter) {
        this.filterActive.active = false;
        filter.active = true;
        this.filterActive = filter;
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _services_filters_service__WEBPACK_IMPORTED_MODULE_2__["FiltersService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"], { static: false })
    ], ProjectsComponent.prototype, "detailProject", void 0);
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/projects/projects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/components/home/projects/projects.component.css")).default]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/service/description/description.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/home/service/description/description.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\np {\n  color: white;\n  border-right: 6px solid #648ec7!important;\n}\n\n.close-modal{\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3NlcnZpY2UvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3NlcnZpY2UvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgIzY0OGVjNyFpbXBvcnRhbnQ7XG59XG5cbi5jbG9zZS1tb2RhbHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/home/service/description/description.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/home/service/description/description.component.ts ***!
  \******************************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var DescriptionComponent = /** @class */ (function () {
    // tslint:disable-next-line:ban-types
    function DescriptionComponent(modalService) {
        this.modalService = modalService;
        this.title = null;
        this.servicesCubi = {
            development: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            ers: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            architecture: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            support: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        };
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent.prototype.ngAfterContentInit = function () {
        // throw new Error("Method not implemented.");
    };
    DescriptionComponent.prototype.ngAfterViewInit = function () {
        this.servicesCubi.development = this.modalDevelopment;
        this.servicesCubi.ers = this.modalErs;
        this.servicesCubi.architecture = this.modalArchitecture;
        this.servicesCubi.support = this.modalSupport;
    };
    DescriptionComponent.prototype.showModalService = function (name, size) {
        var modalRef = this.modalService.open(this.servicesCubi[name], {
            windowClass: 'modal-holder',
            centered: true,
            size: size,
            backdrop: 'static',
            keyboard: true
        });
    };
    DescriptionComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentDevelopment', { static: false })
    ], DescriptionComponent.prototype, "modalDevelopment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentErs', { static: false })
    ], DescriptionComponent.prototype, "modalErs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentArchitecture', { static: false })
    ], DescriptionComponent.prototype, "modalArchitecture", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentSupport', { static: false })
    ], DescriptionComponent.prototype, "modalSupport", void 0);
    DescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-description-services',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./description.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/service/description/description.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./description.component.css */ "./src/app/components/home/service/description/description.component.css")).default]
        })
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/components/home/service/service.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/home/service/service.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-service {\n    background-color: #3a3a3a;\n}\n\np {\n    color: white;\n    border-right: 6px solid #648ec7!important;\n}\n\na {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctc2VydmljZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcbn1cblxucCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkICM2NDhlYzchaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/home/service/service.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/service/service.component.ts ***!
  \**************************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/service/service.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service.component.css */ "./src/app/components/home/service/service.component.css")).default]
        })
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.text-cubi{\n  color: white;\n  font-family: 'avenir';\n  margin-bottom: 0;\n  font-size: 0.9em;\n}\n\n.subtitle{\n  font-family: 'myriadpro-regular';\n  color: #648ec7;\n  font-size: 1.4em;\n}\n\n.container-info-footer a{\n  color: white !important;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50ZXh0LWN1Yml7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdhdmVuaXInO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uc3VidGl0bGV7XG4gIGZvbnQtZmFtaWx5OiAnbXlyaWFkcHJvLXJlZ3VsYXInO1xuICBjb2xvcjogIzY0OGVjNztcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLmNvbnRhaW5lci1pbmZvLWZvb3RlciBhe1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.year = new Date().getFullYear();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")).default]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-home {\n    opacity: 0.7;\n}\n\n.fixed-top-menu {\n    margin-top: 79px;\n    /*padding-top: 79px;\n    z-index: -99999999;*/\n}\n\n.menu-home a {\n    color: white !important;\n    cursor: pointer;\n}\n\n.menu-home-container {\n    /* padding-left: 4rem;\n    padding-right: 4rem;*/\n}\n\n.menu-home ul li:not(:last-child):after {\n    content: \"\";\n    display: block;\n    height: 1.1px;\n    width: 95%;\n    margin: 5px;\n    background: white;\n}\n\n#menu-navbar-home {\n    transition: 0.7s;\n    opacity: 0.7;\n    /*z-index: 99999999;*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQjt3QkFDb0I7QUFDeEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO3lCQUNxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1ob21lIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5maXhlZC10b3AtbWVudSB7XG4gICAgbWFyZ2luLXRvcDogNzlweDtcbiAgICAvKnBhZGRpbmctdG9wOiA3OXB4O1xuICAgIHotaW5kZXg6IC05OTk5OTk5OTsqL1xufVxuXG4ubWVudS1ob21lIGEge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtaG9tZS1jb250YWluZXIge1xuICAgIC8qIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtOyovXG59XG5cbi5tZW51LWhvbWUgdWwgbGk6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEuMXB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbiNtZW51LW5hdmJhci1ob21lIHtcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICAvKnotaW5kZXg6IDk5OTk5OTk5OyovXG59Il19 */");

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-simple-smooth-scroll */ "./node_modules/ng2-simple-smooth-scroll/fesm5/ng2-simple-smooth-scroll.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(smooth, router, location) {
        this.smooth = smooth;
        this.router = router;
        this.location = location;
        this.classMenuNavBar = '';
        /* router.events.subscribe(val => {
          // tslint:disable-next-line:triple-equals
          if (location.path() != '') {
            this.route = location.path();
          } else {
            this.route = 'Home';
          }
        }); */
    } // private router: Router
    NavbarComponent.prototype.ngOnInit = function () {
        // this.smooth.smoothScrollToTop();
        // to move scroll to top page
        /* this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
            return;
          }
          window.scrollTo(0, 0);
        }); */
    };
    NavbarComponent.prototype.onFocus = function () {
        // this.classMenuNavBar = "bg-dark";
    };
    NavbarComponent.prototype.onFocusOut = function () {
        this.classMenuNavBar = '';
    };
    NavbarComponent.prototype.closeMenuNavBar = function (element) {
        if (this.menuHome.nativeElement.classList.contains('show')) {
            this.btnMenuHome.nativeElement.click();
        }
        // $('.navbar-toggler').click();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__["SimpleSmoothScrollService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnMenuHome', { static: false })
    ], NavbarComponent.prototype, "btnMenuHome", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('menuHome', { static: false })
    ], NavbarComponent.prototype, "menuHome", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/shared/navbar/navbar.component.css")).default]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/working/working.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/working/working.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * Globals\n */\n\n\n/* Links */\n\n\na,\na:focus,\na:hover {\n    color: #fff;\n}\n\n\n/* Custom default button */\n\n\n.btn-default {\n    color: #fff;\n    text-shadow: none;\n    /* Prevent inheritence from `body` */\n    background-color: transparent;\n    border: 2px solid #fff;\n    border-radius: 20px;\n    padding: 0.5rem 2rem;\n}\n\n\n.btn-default:hover,\n.btn-default:focus {\n    background-color: rgba(255, 255, 255, 0.3);\n}\n\n\n/*\n * Base structure\n */\n\n\nhtml,\nbody {\n    height: 100%;\n}\n\n\n.image-background-page-home {\n    background: url(/assets/img/background-working.jpg) no-repeat center center fixed;\n    background-size: cover;\n    color: #fff;\n    text-align: center;\n    font-family: 'myriadpro-semibold', sans-serif;\n    font-size: 18px !important;\n    height: 100%;\n}\n\n\n.cover-copy {\n    color: #fff !important;\n}\n\n\n.btn-notify {\n    border: 2px solid #fff !important;\n}\n\n\n/* Extra markup and styles for table-esque vertical and horizontal centering */\n\n\n.site-wrapper {\n    display: table;\n    width: 100%;\n    height: 100%;\n    /* For at least Firefox */\n    min-height: 100%;\n    background: rgba(48, 53, 70, 0.5);\n    box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5);\n}\n\n\n.site-wrapper-inner {\n    display: table-cell;\n    vertical-align: top;\n}\n\n\n.cover-container {\n    margin-right: auto;\n    margin-left: auto;\n}\n\n\n/* Padding for spacing */\n\n\n.inner {\n    padding: 30px;\n}\n\n\n/*\n * Header\n */\n\n\n.masthead-brand {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    color: #fff !important;\n}\n\n\n.nav-masthead {\n    text-align: center;\n    display: block;\n    color: #fff !important;\n}\n\n\n.nav-masthead .nav-link {\n    display: inline-block;\n    color: #fff !important;\n}\n\n\n@media (min-width: 768px) {\n    .masthead-brand {\n        float: left;\n    }\n    .nav-masthead {\n        float: right;\n    }\n}\n\n\n/*\n * Cover\n */\n\n\n.cover {\n    padding: 0 20px;\n}\n\n\n.cover .btn-notify {\n    padding: 10px 60px;\n    font-weight: 500;\n    text-transform: uppercase;\n    border-radius: 40px;\n}\n\n\n.cover-heading {\n    font-weight: 500;\n    text-transform: uppercase;\n    letter-spacing: 10px;\n    font-size: 2rem;\n    margin-bottom: 15px !important;\n}\n\n\n.sub-header {\n    font-size: 23px;\n    letter-spacing: 6px;\n    color: #fff !important;\n}\n\n\n.cover-heading {\n    color: #fff !important;\n}\n\n\n@media (min-width: 768px) {\n    .cover-heading {\n        font-size: 3.4rem;\n        letter-spacing: 15px;\n    }\n}\n\n\n.cover-copy {\n    max-width: 500px;\n    margin: 0 auto 3rem;\n}\n\n\n/*\n * Footer\n */\n\n\n.mastfoot {\n    color: #999;\n    /* IE8 proofing */\n    color: rgba(255, 255, 255, 0.5);\n}\n\n\n/*\n * Subscribe modal box\n */\n\n\n#subscribeModal .modal-content {\n    background-color: #303546;\n    color: #fff;\n    text-align: left;\n}\n\n\n#subscribeModal .modal-header,\n#subscribeModal .modal-footer {\n    border: 0;\n}\n\n\n#subscribeModal .close {\n    color: #fff;\n}\n\n\n#subscribeModal .form-control {\n    margin-top: 1rem;\n    background: rgba(0, 0, 0, 0.4);\n    color: #fff;\n}\n\n\n#subscribeModal .form-control:focus {\n    border-color: #49506a;\n}\n\n\n/*\n * Affix and center\n */\n\n\n@media (min-width: 768px) {\n    /* Pull out the header and footer */\n    .masthead {\n        position: fixed;\n        top: 0;\n    }\n    .mastfoot {\n        position: fixed;\n        bottom: 0;\n    }\n    /* Start the vertical centering */\n    .site-wrapper-inner {\n        vertical-align: middle;\n    }\n    /* Handle the widths */\n    .masthead,\n    .mastfoot,\n    .cover-container {\n        width: 100%;\n        /* Must be percentage or pixels for horizontal alignment */\n    }\n}\n\n\n@media (min-width: 992px) {\n    .masthead,\n    .mastfoot,\n    .cover-container {\n        width: 1060px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JraW5nL3dvcmtpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTs7O0FBR0YsVUFBVTs7O0FBRVY7OztJQUdJLFdBQVc7QUFDZjs7O0FBR0EsMEJBQTBCOzs7QUFFMUI7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7OztBQUVBOztJQUVJLDBDQUEwQztBQUM5Qzs7O0FBR0E7O0VBRUU7OztBQUVGOztJQUVJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksaUZBQWlGO0lBQ2pGLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QywwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOzs7QUFHQSw4RUFBOEU7OztBQUU5RTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLDhDQUE4QztBQUNsRDs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUdBLHdCQUF3Qjs7O0FBRXhCO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7O0VBRUU7OztBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOzs7QUFHQTs7RUFFRTs7O0FBRUY7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7QUFDSjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTs7RUFFRTs7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7O0FBR0E7O0VBRUU7OztBQUVGO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7OztBQUVBOztJQUVJLFNBQVM7QUFDYjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQTs7RUFFRTs7O0FBRUY7SUFDSSxtQ0FBbUM7SUFDbkM7UUFDSSxlQUFlO1FBQ2YsTUFBTTtJQUNWO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsU0FBUztJQUNiO0lBQ0EsaUNBQWlDO0lBQ2pDO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0Esc0JBQXNCO0lBQ3RCOzs7UUFHSSxXQUFXO1FBQ1gsMERBQTBEO0lBQzlEO0FBQ0o7OztBQUVBO0lBQ0k7OztRQUdJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29ya2luZy93b3JraW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogR2xvYmFsc1xuICovXG5cblxuLyogTGlua3MgKi9cblxuYSxcbmE6Zm9jdXMsXG5hOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4vKiBDdXN0b20gZGVmYXVsdCBidXR0b24gKi9cblxuLmJ0bi1kZWZhdWx0IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAvKiBQcmV2ZW50IGluaGVyaXRlbmNlIGZyb20gYGJvZHlgICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xufVxuXG4uYnRuLWRlZmF1bHQ6aG92ZXIsXG4uYnRuLWRlZmF1bHQ6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuXG4vKlxuICogQmFzZSBzdHJ1Y3R1cmVcbiAqL1xuXG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1hZ2UtYmFja2dyb3VuZC1wYWdlLWhvbWUge1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLXdvcmtpbmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ215cmlhZHByby1zZW1pYm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY292ZXItY29weSB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1ub3RpZnkge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcbn1cblxuXG4vKiBFeHRyYSBtYXJrdXAgYW5kIHN0eWxlcyBmb3IgdGFibGUtZXNxdWUgdmVydGljYWwgYW5kIGhvcml6b250YWwgY2VudGVyaW5nICovXG5cbi5zaXRlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBGb3IgYXQgbGVhc3QgRmlyZWZveCAqL1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSg0OCwgNTMsIDcwLCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zaXRlLXdyYXBwZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmNvdmVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5cbi8qIFBhZGRpbmcgZm9yIHNwYWNpbmcgKi9cblxuLmlubmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG5cbi8qXG4gKiBIZWFkZXJcbiAqL1xuXG4ubWFzdGhlYWQtYnJhbmQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubmF2LW1hc3RoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAubWFzdGhlYWQtYnJhbmQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgLm5hdi1tYXN0aGVhZCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG59XG5cblxuLypcbiAqIENvdmVyXG4gKi9cblxuLmNvdmVyIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5jb3ZlciAuYnRuLW5vdGlmeSB7XG4gICAgcGFkZGluZzogMTBweCA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG4uY292ZXItaGVhZGluZyB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDZweDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uY292ZXItaGVhZGluZyB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvdmVyLWhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDMuNHJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XG4gICAgfVxufVxuXG4uY292ZXItY29weSB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDAgYXV0byAzcmVtO1xufVxuXG5cbi8qXG4gKiBGb290ZXJcbiAqL1xuXG4ubWFzdGZvb3Qge1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIC8qIElFOCBwcm9vZmluZyAqL1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cblxuLypcbiAqIFN1YnNjcmliZSBtb2RhbCBib3hcbiAqL1xuXG4jc3Vic2NyaWJlTW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDM1NDY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI3N1YnNjcmliZU1vZGFsIC5tb2RhbC1oZWFkZXIsXG4jc3Vic2NyaWJlTW9kYWwgLm1vZGFsLWZvb3RlciB7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4jc3Vic2NyaWJlTW9kYWwgLmNsb3NlIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuI3N1YnNjcmliZU1vZGFsIC5mb3JtLWNvbnRyb2wge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4jc3Vic2NyaWJlTW9kYWwgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDk1MDZhO1xufVxuXG5cbi8qXG4gKiBBZmZpeCBhbmQgY2VudGVyXG4gKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLyogUHVsbCBvdXQgdGhlIGhlYWRlciBhbmQgZm9vdGVyICovXG4gICAgLm1hc3RoZWFkIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuICAgIC5tYXN0Zm9vdCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgICAvKiBTdGFydCB0aGUgdmVydGljYWwgY2VudGVyaW5nICovXG4gICAgLnNpdGUtd3JhcHBlci1pbm5lciB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICAgIC8qIEhhbmRsZSB0aGUgd2lkdGhzICovXG4gICAgLm1hc3RoZWFkLFxuICAgIC5tYXN0Zm9vdCxcbiAgICAuY292ZXItY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIE11c3QgYmUgcGVyY2VudGFnZSBvciBwaXhlbHMgZm9yIGhvcml6b250YWwgYWxpZ25tZW50ICovXG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAubWFzdGhlYWQsXG4gICAgLm1hc3Rmb290LFxuICAgIC5jb3Zlci1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTA2MHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/working/working.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/working/working.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingComponent", function() { return WorkingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkingComponent = /** @class */ (function () {
    function WorkingComponent() {
        this.dateYear = new Date().getFullYear();
    }
    WorkingComponent.prototype.ngOnInit = function () {
    };
    WorkingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-working',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./working.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/working/working.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./working.component.css */ "./src/app/components/working/working.component.css")).default]
        })
    ], WorkingComponent);
    return WorkingComponent;
}());



/***/ }),

/***/ "./src/app/services/filters.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/filters.service.ts ***!
  \*********************************************/
/*! exports provided: FiltersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersService", function() { return FiltersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiltersService = /** @class */ (function () {
    function FiltersService() {
        this.filters = [
            {
                id: 1,
                img: null,
                title: 'Todos',
                active: true
            },
            {
                id: 2,
                img: 'assets/img/projects/desktop-icon.png',
                title: 'Escritorio',
                active: false
            },
            {
                id: 3,
                img: 'assets/img/projects/web-icon.png',
                title: 'Web',
                active: false
            },
            {
                id: 4,
                img: 'assets/img/projects/app-icon.png',
                title: 'App',
                active: false
            },
            {
                id: 5,
                img: 'assets/img/projects/software-icon.png',
                title: 'Software',
                active: false
            }
        ];
        console.log('Servicio de filtros listo para usar');
    }
    FiltersService.prototype.getFilters = function () {
        return this.filters;
    };
    FiltersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FiltersService);
    return FiltersService;
}());



/***/ }),

/***/ "./src/app/services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsService = /** @class */ (function () {
    function ProjectsService() {
        this.projects = [
            {
                id: 1,
                gallery: [
                    'assets/img/projects/projectsDev/no-image-available.png',
                    'assets/img/projects/projectsDev/no-image-available.png',
                    'assets/img/projects/projectsDev/no-image-available.png'
                ],
                logo: 'assets/img/projects/projectsDev/no-image-available.png',
                title: 'Sistema de permanencia',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien lacus, ' +
                    'posuere eget elementum vel, fringilla vitae tellus. Suspendisse vitae odio id nunc tempor porta nec sed odio. ' +
                    'Nam arcu magna, bibendum sit amet gravida vel, volutpat nec metus. Integer nec volutpat urna. Fusce ultrices nisi ' +
                    'ac quam aliquet condimentum. Proin augue odio, faucibus vel feugiat vel, eleifend at odio. Sed maximus dolor a ' +
                    'viverra convallis. Ut semper commodo urna ut blandit. Etiam et placerat quam. Proin dapibus ligula convallis, ' +
                    'blandit erat non, consectetur elit. Mauris quis dapibus arcu. Integer vitae finibus dolor, vel scelerisque ligula.' +
                    ' Donec et dignissim arcu, eu sollicitudin ipsum.',
                icons: [
                    'assets/img/projects/android-icon.png',
                    'assets/img/projects/ios-icon.png',
                ],
                categories: [2],
                active: false,
                link: null
            },
            {
                id: 2,
                gallery: [
                    'assets/img/projects/projectsDev/no-image-available.png',
                    'assets/img/projects/projectsDev/no-image-available.png'
                ],
                logo: 'assets/img/projects/projectsDev/no-image-available.png',
                title: 'Expo Quinceañeras',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien lacus, ' +
                    'posuere eget elementum vel, fringilla vitae tellus. Suspendisse vitae odio id nunc tempor porta nec sed odio. ' +
                    'Nam arcu magna, bibendum sit amet gravida vel, volutpat nec metus. Integer nec volutpat urna. Fusce ultrices nisi ' +
                    'ac quam aliquet condimentum. Proin augue odio, faucibus vel feugiat vel, eleifend at odio. Sed maximus dolor a ' +
                    'viverra convallis. Ut semper commodo urna ut blandit. Etiam et placerat quam. Proin dapibus ligula convallis, ' +
                    'blandit erat non, consectetur elit. Mauris quis dapibus arcu. Integer vitae finibus dolor, vel scelerisque ligula.' +
                    ' Donec et dignissim arcu, eu sollicitudin ipsum.',
                icons: [
                    'assets/img/projects/android-icon.png'
                ],
                categories: [2, 3],
                active: false,
                link: 'https://www.quinceanerasexpo.com/index'
            },
            {
                id: 3,
                gallery: [
                    'assets/img/projects/projectsDev/no-image-available.png',
                    'assets/img/projects/projectsDev/no-image-available.png'
                ],
                logo: 'assets/img/projects/projectsDev/no-image-available.png',
                title: 'SmartSara & SmartBooking',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien lacus, ' +
                    'posuere eget elementum vel, fringilla vitae tellus. Suspendisse vitae odio id nunc tempor porta nec sed odio. ' +
                    'Nam arcu magna, bibendum sit amet gravida vel, volutpat nec metus. Integer nec volutpat urna. Fusce ultrices nisi ' +
                    'ac quam aliquet condimentum. Proin augue odio, faucibus vel feugiat vel, eleifend at odio. Sed maximus dolor a ' +
                    'viverra convallis. Ut semper commodo urna ut blandit. Etiam et placerat quam. Proin dapibus ligula convallis, ' +
                    'blandit erat non, consectetur elit. Mauris quis dapibus arcu. Integer vitae finibus dolor, vel scelerisque ligula.' +
                    ' Donec et dignissim arcu, eu sollicitudin ipsum.',
                icons: [
                    'assets/img/projects/android-icon.png'
                ],
                categories: [4],
                active: false,
                link: null
            },
            {
                id: 4,
                gallery: [
                    'assets/img/projects/projectsDev/no-image-available.png',
                    'assets/img/projects/projectsDev/no-image-available.png'
                ],
                logo: 'assets/img/projects/projectsDev/no-image-available.png',
                title: 'Sello Digital',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien lacus, ' +
                    'posuere eget elementum vel, fringilla vitae tellus. Suspendisse vitae odio id nunc tempor porta nec sed odio. ' +
                    'Nam arcu magna, bibendum sit amet gravida vel, volutpat nec metus. Integer nec volutpat urna. Fusce ultrices nisi ' +
                    'ac quam aliquet condimentum. Proin augue odio, faucibus vel feugiat vel, eleifend at odio. Sed maximus dolor a ' +
                    'viverra convallis. Ut semper commodo urna ut blandit. Etiam et placerat quam. Proin dapibus ligula convallis, ' +
                    'blandit erat non, consectetur elit. Mauris quis dapibus arcu. Integer vitae finibus dolor, vel scelerisque ligula.' +
                    ' Donec et dignissim arcu, eu sollicitudin ipsum.',
                icons: [
                    'assets/img/projects/android-icon.png'
                ],
                categories: [5],
                active: false,
                link: 'https://sellodigital.com.mx/'
            }
        ];
        console.log('Servicio de proyecto listo para usar');
    }
    ProjectsService.prototype.getProjects = function () {
        // return Object.assign([], this.projects);
        return this.projects;
    };
    ProjectsService.prototype.getProjectsByFilter = function (filter) {
        var projectsFilters = [];
        this.projects.forEach(function (project) {
            // console.log('EDGAR >>');
            if (project.categories.includes(filter.id)) {
                console.log('si encontro');
                projectsFilters.push(project);
            }
            // console.log(develop);
            // console.log(project);
        });
        return projectsFilters;
    };
    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProjectsService);
    return ProjectsService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/edgar/WebstormProjects/cubicode-page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map