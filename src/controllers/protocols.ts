export interface HttpRequest <B> {
    params?: any;
    headers?: any;
    body?: B;
    userId?: string;
}


export interface HttpResponse <T> {
    statusCode: number;
    message?: string;
    body: T | string;
}   