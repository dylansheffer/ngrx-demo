import { Request } from "./request.model";

export interface Queue {
    requests: Request[];
    nextQueue?: Queue;
}