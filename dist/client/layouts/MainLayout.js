"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Navbar_1 = require("@/components/Navbar");
const MainLayout = ({ children }) => {
    return (<>
      <Navbar_1.default />
      {children}
    </>);
};
exports.default = MainLayout;
//# sourceMappingURL=MainLayout.js.map