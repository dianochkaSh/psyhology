"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapper = void 0;
const next_redux_wrapper_1 = require("next-redux-wrapper");
const redux_1 = require("redux");
const index_1 = require("./reducers/index");
const redux_thunk_1 = require("redux-thunk");
const makeStore = (context) => (0, redux_1.createStore)(index_1.reducer, (0, redux_1.applyMiddleware)(redux_thunk_1.thunk));
exports.wrapper = (0, next_redux_wrapper_1.createWrapper)(makeStore, { debug: true });
//# sourceMappingURL=index.js.map