"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const onChange = (e) => {
    setFile(e.target.files[0]);
};
const FileUpload = ({ setFile, accept, children }) => {
    const ref = (0, react_1.useRef)();
    return (<div onClick={() => ref.current.click()}>
      <input type="file" accept={accept} style={{ display: "none" }} ref={ref} onChange={onChange}/>
      {children}
    </div>);
};
exports.default = FileUpload;
//# sourceMappingURL=FileUpload.js.map