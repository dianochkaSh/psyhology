"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const redux_1 = require("redux");
const next_redux_wrapper_1 = require("next-redux-wrapper");
const blogReducer_1 = require("./blogReducer");
const rootReducer = (0, redux_1.combineReducers)({
    blog: blogReducer_1.blogReducer
});
const reducer = (state, action) => {
    if (action.type === next_redux_wrapper_1.HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count)
            nextState.count = state.count;
        return nextState;
    }
    else {
        return rootReducer(state, action);
    }
};
exports.reducer = reducer;
//# sourceMappingURL=index.js.map