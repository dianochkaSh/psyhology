"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const MainLayout_1 = require("@/layouts/MainLayout");
const useTypedSelector_1 = require("@/hooks/useTypedSelector");
const store_1 = require("@/store");
const blog_1 = require("@/store/actions-creators/blog");
const Blogs = () => {
    const { posts, error } = (0, useTypedSelector_1.useTypedSelector)(state => state.blog);
    return (<>
      <MainLayout_1.default>
        <div> блог </div>
      </MainLayout_1.default>
    </>);
};
exports.default = Blogs;
exports.getServerSideProps = store_1.wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch;
    await dispatch(await (0, blog_1.fetchBlog)());
});
//# sourceMappingURL=index.js.map