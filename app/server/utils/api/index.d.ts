export declare function paginateResponse(data: any, page: number, limit: number): {
    statusCode: string;
    data: any[];
    count: any;
    currentPage: number;
    nextPage: number;
    prevPage: number;
    lastPage: number;
};
export declare class BaseQueryDto {
    page: number;
    limit: number;
}
