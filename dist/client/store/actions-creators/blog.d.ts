import { Dispatch } from 'react';
import { BlogAction } from '@/types/blog';
export declare const fetchBlog: () => (dispatch: Dispatch<BlogAction>) => Promise<void>;
