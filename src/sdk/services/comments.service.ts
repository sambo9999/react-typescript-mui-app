import { CommentRequest } from './../interfaces/request/comment.request';
import { COMMENTS_SERVICE } from './../routes/index';
import { ServerResponse } from "../interfaces/response/server.response"
import { getAxiosConfig } from '../config/axiosConfig';

export class CommentsService {
    async getOne(id: number): Promise<ServerResponse<CommentRequest>> {
        return await getAxiosConfig()
            .get(`${COMMENTS_SERVICE}/${id}`)
            .then((res: any) => res.data)

    }
    async getAll(params?: any): Promise<ServerResponse<CommentRequest>> {
        return await getAxiosConfig()
            .get(COMMENTS_SERVICE, { params })
            .then((res) => res.data)
    }
    // async create(data: any): Promise<ServerResponse<PermissionRequest>> {
    //     return await getAxiosInstance()
    //         .post(PERMISSION_API, data)
    //         .then((res) => res.data)
    //         .finally(() => {
    //             console.log("Create Permission")
    //         })
    // }
    // async update(
    //     id: string | number,
    //     data?: any
    // ): Promise<ServerResponse<PermissionRequest>> {
    //     return await getAxiosInstance()
    //         .put(`${PERMISSION_API}/${id}`, data)
    //         .then((res) => res.data)
    //         .finally(() => {
    //             console.log("Update Permission")
    //         })
    // }

    // async delete(
    //     id: string | number
    // ): Promise<ServerResponse<PermissionRequest>> {
    //     return await getAxiosInstance()
    //         .delete(`${PERMISSION_API}/${id}`)
    //         .then((res) => res.data)
    //         .finally(() => {
    //             console.log("Delete Permission")
    //         })
    // }

    // isEnable(id: string | number, data?: any, param?: any): Promise<any> {
    //     throw new Error("Method not implemented.")
    // }

    // change(id: string | number, data?: any): Promise<any> {
    //     throw new Error("Method not implemented.")
    // }
}