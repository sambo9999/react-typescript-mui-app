import { CommentsService } from "./services/comments.service";
export default class WebSdk {
    public static instance: WebSdk;
    public static getInstance(): WebSdk {
        if (!this.instance) {
            this.instance = new WebSdk();
        }
        return this.instance;
    }
    public comments = () => {
        return new CommentsService();
    };
}

const commentsSdk = WebSdk.getInstance().comments();
export {
    commentsSdk
}

// const comment = WebSdk.getInstance().comments;
// const result = comment.get(4).then((res: any) => console.log(res))