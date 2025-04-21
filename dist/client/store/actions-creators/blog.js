"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBlog = void 0;
const blog_1 = require("@/types/blog");
const axios_1 = require("axios");
const fetchBlog = () => {
    return async (dispatch) => {
        try {
            const response = await axios_1.default.get('http://localhost:3000/blogs');
            dispatch({ type: blog_1.BlogActionTypes.FETCH_BLOGS, payload: response.data });
        }
        catch (e) {
            dispatch({
                type: blog_1.BlogActionTypes.FETCH_BLOGS_ERROR,
                payload: 'Произошла ошибка',
            });
        }
    };
};
exports.fetchBlog = fetchBlog;
//# sourceMappingURL=blog.js.map