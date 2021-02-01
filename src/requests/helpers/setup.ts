import { AxiosRequestConfig } from 'axios';
import { defaultInstance } from './instances';

export function setup() {
  defaultInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    return {
      ...config,
      baseURL: 'http://your-api-base-url.com/v1/api',
      headers: {
        'my-custom-header': 'header-value',
      },
    };
  });
}
