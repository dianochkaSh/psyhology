"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const index_1 = require("../store/index");
const WrappedApp = ({ Component, pageProps }) => (<Component {...pageProps}/>);
exports.default = index_1.wrapper.withRedux(WrappedApp);
//# sourceMappingURL=_app.js.map