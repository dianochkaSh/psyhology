"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogReducer = void 0;
const blog_1 = require("@/types/blog");
const initialState = {
    posts: [],
    error: ''
};
const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case blog_1.BlogActionTypes.FETCH_BLOGS:
            return { error: '', posts: action.payload };
        case blog_1.BlogActionTypes.FETCH_BLOGS_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
exports.blogReducer = blogReducer;
//# sourceMappingURL=blogReducer.js.map