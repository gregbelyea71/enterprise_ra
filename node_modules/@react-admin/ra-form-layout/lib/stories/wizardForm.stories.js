"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithSummaryStep = exports.Basic = void 0;
var react_1 = __importDefault(require("react"));
var ra_data_fakerest_1 = __importDefault(require("ra-data-fakerest"));
var history_1 = require("history");
var react_admin_1 = require("react-admin");
var react_final_form_1 = require("react-final-form");
var core_1 = require("@material-ui/core");
var src_1 = require("../src");
var i18nProvider_1 = __importDefault(require("./i18nProvider"));
var dataProvider = ra_data_fakerest_1.default({
    posts: [
        { id: 1, title: 'Lorem Ipsum', description: '' },
        { id: 2, title: 'Sic dolor amet', description: 'Almost empty' },
    ],
}, true);
exports.default = {
    title: 'ra-form-layout/Wizard Form',
};
var PostList = function (props) { return (react_1.default.createElement(react_admin_1.List, __assign({}, props),
    react_1.default.createElement(react_admin_1.SimpleList, { primaryText: function (record) { return record.title; } }))); };
var PostEdit = function (props) { return (react_1.default.createElement(react_admin_1.Edit, __assign({}, props),
    react_1.default.createElement(react_admin_1.SimpleForm, null,
        react_1.default.createElement(react_admin_1.TextInput, { source: "title" }),
        react_1.default.createElement(react_admin_1.TextInput, { source: "description" }),
        react_1.default.createElement(react_admin_1.TextInput, { source: "fullDescription" })))); };
var PostCreate = function (props) { return (react_1.default.createElement(react_admin_1.Create, __assign({}, props),
    react_1.default.createElement(src_1.WizardForm, null,
        react_1.default.createElement(src_1.WizardFormStep, { label: "First step" },
            react_1.default.createElement(react_admin_1.TextInput, { source: "title", validate: react_admin_1.required() })),
        react_1.default.createElement(src_1.WizardFormStep, { label: "Second step" },
            react_1.default.createElement(react_admin_1.TextInput, { source: "description" })),
        react_1.default.createElement(src_1.WizardFormStep, { label: "Third step" },
            react_1.default.createElement(react_admin_1.TextInput, { source: "fullDescription", validate: react_admin_1.required() })),
        react_1.default.createElement(src_1.WizardFormStep, { label: "" },
            react_1.default.createElement(react_final_form_1.FormSpy, { subscription: { values: true } }, function (props) { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("p", null,
                    "title: ",
                    props.values.title),
                react_1.default.createElement("p", null,
                    "description: ",
                    props.values.description),
                react_1.default.createElement("p", null,
                    "fullDescription: ",
                    props.values.fullDescription))); }))))); };
var PostShow = function (props) { return (react_1.default.createElement(react_admin_1.Show, __assign({}, props),
    react_1.default.createElement(react_admin_1.SimpleShowLayout, null,
        react_1.default.createElement(react_admin_1.TextField, { source: "title" }),
        react_1.default.createElement(react_admin_1.TextField, { source: "description" }),
        react_1.default.createElement(react_admin_1.TextField, { source: "fullDescription" })))); };
var Basic = function () { return (react_1.default.createElement(react_admin_1.Admin, { history: history_1.createMemoryHistory(), i18nProvider: i18nProvider_1.default, dataProvider: dataProvider },
    react_1.default.createElement(react_admin_1.Resource, { name: "posts", list: PostList, edit: PostEdit, show: PostShow, create: PostCreate }))); };
exports.Basic = Basic;
var PostCreateWithSummary = function (props) { return (react_1.default.createElement(react_admin_1.Create, __assign({}, props),
    react_1.default.createElement(src_1.WizardForm, null,
        react_1.default.createElement(src_1.WizardFormStep, { label: "First step" },
            react_1.default.createElement(react_admin_1.TextInput, { source: "title", validate: react_admin_1.required() })),
        react_1.default.createElement(src_1.WizardFormStep, { label: "Second step" },
            react_1.default.createElement(react_admin_1.TextInput, { source: "description" })),
        react_1.default.createElement(src_1.WizardFormStep, { label: "Third step" },
            react_1.default.createElement(react_admin_1.TextInput, { source: "fullDescription", validate: react_admin_1.required() })),
        react_1.default.createElement(src_1.WizardFormStep, { label: "" },
            react_1.default.createElement(react_final_form_1.FormSpy, { subscription: { values: true } }, function (props) { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(core_1.Typography, null,
                    "title: ",
                    props.values.title),
                react_1.default.createElement(core_1.Typography, null,
                    "description: ",
                    props.values.description),
                react_1.default.createElement(core_1.Typography, null,
                    "fullDescription: ",
                    props.values.fullDescription))); }))))); };
var WithSummaryStep = function () { return (react_1.default.createElement(react_admin_1.Admin, { history: history_1.createMemoryHistory(), i18nProvider: i18nProvider_1.default, dataProvider: dataProvider },
    react_1.default.createElement(react_admin_1.Resource, { name: "posts", list: PostList, edit: PostEdit, show: PostShow, create: PostCreateWithSummary }))); };
exports.WithSummaryStep = WithSummaryStep;
