import ApiManager from "./ApiManager";

interface Comment {}

class CommentApi {
  constructor(
    private readonly baseUrl: string,
    private readonly apiManager: ApiManager
  ) {}

  async getCommentList(taskId: number) {
    const result = await this.apiManager.sendApi<Comment[]>(
      `${this.baseUrl}/tasks/${taskId}/comments`
    );
    return result;
  }

  async getComment(taskId: number, commentId: number) {
    const result = await this.apiManager.sendApi<Comment>(
      `${this.baseUrl}/tasks/${taskId}/comments/${commentId}`
    );
    return result;
  }
}

export default CommentApi;
