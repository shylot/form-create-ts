import {IHttp} from '@/api/http/IHttp';
import axios from 'axios';

export class HttpImpl implements IHttp {
    private http: any;
    private config: any;
    private interceptors: any;

    constructor() {
        this.http = axios.create();
        this.config = {};
        this.interceptors = {
            request: this.http.interceptors.request,
            response: this.http.interceptors.response,
        };
    }

    // 设置配置
    public setAxiosConfig(name: string, value: any): HttpImpl {
        this.config[name] = value;
        return this;
    }

    // 设置返回格式类型
    public setResponseType(responseType: string | any): HttpImpl {
        this.config.responseType = responseType;
        return this;
    }

    // 设置请求时长
    public setTimeout(timeout: number): HttpImpl {
        this.config.timeout = timeout;
        return this;
    }

    // 设置根地址
    public setBaseUrl(url: string): HttpImpl {
        this.config.baseURL = url;
        return this;
    }

    // 设置内容类型
    public setContentType(contentType: string): HttpImpl {
        this.config.headers = this.config.headers || {};
        this.config.headers['Content-Type'] = contentType;
        return this;
    }

    // 设置请求头
    public setRequestHeader(header: string, value: any): HttpImpl {
        this.config.headers = this.config.headers || {};
        this.config.headers[header] = value;
        return this;
    }

    // 设置验证
    public setAuth(auth: any): HttpImpl {
        this.config.auth = auth;
        return this;
    }

    // GET请求
    public GET(url: string, data?: any, responseType?: any, contentType?: any): Promise<any> {
        return this.send('get', url, data, responseType, contentType);
    }
    // PUT请求
    public PUT(url: string, data?: any, responseType?: any, contentType?: any): Promise<any> {
        return this.send('put', url, data, responseType, contentType);
    }
    // POST请求
    public POST(url: string, data?: any, responseType?: any, contentType?: any): Promise<any> {
        return this.send('post', url, data, responseType, contentType);
    }
    // DELETE请求
    public DELETE(url: string, data?: any, responseType?: any, contentType?: any): Promise<any> {
        return this.send('delete', url, data, responseType, contentType);
    }

    send(type: string, url: string, data?: any, responseType?: any, contentType?: any): any {
        let newUrl: string = '';
        if (url.indexOf('?') > 0) { // 带参数get请求
            newUrl = newUrl.split('?')[0];
            const urlArr: string[] = newUrl.split('?')[1].split('&');
            this.config.params = {};
            for (const item of urlArr) {
                const it: string[] = item.split('=');
                this.config.params[it[0]] = it[1];
            }
        }
        this.config.url = newUrl;
        this.config.method = type;
        this.config.data = data;
        this.config.responseType = responseType || this.config.responseType;
        this.config.header['Content-Type'] = contentType || this.config['Content-Type'];
        return this.http.request(this.config);
    }
}
