"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/report/Report.js

var Report = function Report(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h4",
    component: "div",
    gutterBottom: true
  }, "Report"), /*#__PURE__*/_react["default"].createElement(_material.Paper, {
    sx: {
      width: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.TableContainer, {
    sx: {
      maxHeight: 440
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Table, {
    stickyHeader: true,
    "aria-label": "sticky table"
  }, /*#__PURE__*/_react["default"].createElement(_material.TableHead, null, /*#__PURE__*/_react["default"].createElement(_material.TableRow, null, /*#__PURE__*/_react["default"].createElement(_material.TableCell, null, "ID"), /*#__PURE__*/_react["default"].createElement(_material.TableCell, null, "Name"), /*#__PURE__*/_react["default"].createElement(_material.TableCell, null, "Value"))), /*#__PURE__*/_react["default"].createElement(_material.TableBody, null, data.map(function (row) {
    return /*#__PURE__*/_react["default"].createElement(_material.TableRow, {
      key: row.id,
      hover: true,
      role: "checkbox",
      tabIndex: -1
    }, /*#__PURE__*/_react["default"].createElement(_material.TableCell, null, row.id), /*#__PURE__*/_react["default"].createElement(_material.TableCell, null, row.name), /*#__PURE__*/_react["default"].createElement(_material.TableCell, null, row.value));
  }))))), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    color: "primary",
    sx: {
      marginTop: 2
    }
  }, "Export"));
};
var _default = exports["default"] = Report;