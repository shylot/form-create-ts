import {HttpImpl} from '@/api/http/HttpImpl';

export class Upload {

    private http: HttpImpl;

    constructor(baseUrl: string, axios = new HttpImpl()) {
        this.http = axios;
        this.http.setBaseUrl(baseUrl);
        this.http.setContentType('application/json');
    }

    public uploadFile(file: any, userId: string, nodeId: string, type: string, dataId: string) {
        const baseUrl: string = 'http://172.18.8.85:28300/';
        const url: string = 'emap/dcms/v1/attachment/upload';
        this.http.setBaseUrl(baseUrl);
        const formData = new FormData();
        formData.append('file', file);

    }
}
