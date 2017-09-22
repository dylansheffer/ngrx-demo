import { Queue } from "./queue.model";

export interface Request {
    title: string;
    author: string;
    queue:  Queue;
}