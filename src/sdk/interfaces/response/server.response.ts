export interface ServerResponse<T> {
    data: T
    status: number
    message: any
}
export interface PagintaionResponse {
    page: number
    pageSize: number
    totalCount: number
    totalPage: number
}
export interface PaginationServerResponse<T> extends ServerResponse<T> {
    pages: PagintaionResponse
    [index: string]: any
}
