"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
require("../style.css");
const MainLayout_1 = require("@/layouts/MainLayout");
const FileUpload_1 = require("@/components/FileUpload");
const Index = () => {
    return (<>
      <MainLayout_1.default>
        <div>
          Главная страница
          <material_1.Button> Кнопка </material_1.Button>
          <FileUpload_1.default setFile={() => ({})} accept="image/*">
            <material_1.Button>Загрузить изображение</material_1.Button>
          </FileUpload_1.default>
        </div>
      </MainLayout_1.default>


    </>);
};
exports.default = Index;
//# sourceMappingURL=index.js.map