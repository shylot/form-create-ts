export interface IHttp {
    send(type: string, url: string, data?: any, responseType?: any, contentType?: any): any;
}
