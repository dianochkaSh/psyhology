import { AnyAction } from 'redux';
import { RootState } from './reducers/index';
import { ThunkDispatch } from 'redux-thunk';
export declare const wrapper: {
    getServerSideProps: <P extends {} = any>(callback: import("next-redux-wrapper").GetServerSidePropsCallback<{
        blog: BlogState;
    }, P>) => import("next").GetServerSideProps<P, import("querystring").ParsedUrlQuery, import("next").PreviewData>;
    getStaticProps: <P_1 extends {} = any>(callback: import("next-redux-wrapper").GetStaticPropsCallback<{
        blog: BlogState;
    }, P_1>) => import("next").GetStaticProps<P_1, import("querystring").ParsedUrlQuery, import("next").PreviewData>;
    getInitialAppProps: <P_2 extends {} = any>(callback: import("next-redux-wrapper").AppCallback<{
        blog: BlogState;
    }, P_2>) => ({ Component, ctx }: import("next/app").AppContext) => Promise<import("next/app").AppInitialProps & {
        pageProps: P_2;
    }>;
    getInitialPageProps: <P_3 extends {} = any>(callback: import("next-redux-wrapper").PageCallback<{
        blog: BlogState;
    }, P_3>) => ((context: import("next").NextPageContext<any>) => any) | undefined;
    withRedux: (Component: import("next").NextComponentType | import("next/app").default | any) => {
        (props: any): JSX.Element;
        displayName: string;
        getInitialProps: any;
    };
    useWrappedStore: ({ initialState: giapState, initialProps, ...props }: any, displayName?: string) => {
        store: {
            blog: BlogState;
        };
        props: any;
    };
};
export type NextThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
