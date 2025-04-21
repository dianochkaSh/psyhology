declare const rootReducer: import("redux").Reducer<{
    blog: BlogState;
}, any, Partial<{
    blog: any;
}>>;
export declare const reducer: (state: any, action: any) => any;
export type RootState = ReturnType<typeof rootReducer>;
export {};
