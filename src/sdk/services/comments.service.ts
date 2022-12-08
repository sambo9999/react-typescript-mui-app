import { CommentRequest } from "./../interfaces/request/comment.request";
import { COMMENTS_SERVICE } from "./../routes/index";
import { ServerResponse } from "../interfaces/response/server.response";
import { getAxiosConfig } from "../config/axiosConfig";

export class CommentsService {
  async getOne(id: number): Promise<ServerResponse<CommentRequest>> {
    return await getAxiosConfig()
      .get(`${COMMENTS_SERVICE}/${id}`)
      .then((res: any) => res.data);
  }
  async getAll(params?: any): Promise<ServerResponse<CommentRequest>> {
    return await getAxiosConfig()
      .get(COMMENTS_SERVICE, { params })
      .then((res) => res.data);
  }

  async create(data: any): Promise<ServerResponse<CommentRequest>> {
    return await getAxiosConfig()
      .post(COMMENTS_SERVICE, data)
      .then((res) => res.data);
  }

  async update(
    id: string | number,
    data?: any
  ): Promise<ServerResponse<CommentRequest>> {
    return await getAxiosConfig()
      .put(`${COMMENTS_SERVICE}/${id}`, data)
      .then((res) => res.data);
  }

  async delete(id: string | number): Promise<ServerResponse<CommentRequest>> {
    return await getAxiosConfig()
      .delete(`${COMMENTS_SERVICE}/${id}`)
      .then((res) => res.data);
  }
}
