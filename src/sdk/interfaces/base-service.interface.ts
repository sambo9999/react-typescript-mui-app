export interface ReadService {
    getDashboard(id?: string | number, params?: any): any
    getAll(params?: any): any
}
export interface BasicService extends ReadService {
    create(data: any): any
    update(id: string | number, data?: any): any
    delete(id: string | number): any
}

export interface RequestPaginationParams {
    q?: string
    page?: number
    paged?: boolean
    size?: number
    sort?: string
    expression?: string
    [index: string]: any
}