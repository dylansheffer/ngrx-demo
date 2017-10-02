import { Request } from "./request.model";

export interface Queue {
    requests: Request[];
    nextQueue?: Queue;
}

export class AwaitingRequestProcessing implements Queue {
    requests: Request[];
    nextQueue:  ItemCheckedOut;
}

export class ItemCheckedOut implements Queue {
    requests: Request[];
    nextQueue: AwaitingRequestProcessing;
}

export class RequestFinished implements Queue {
    requests: Request[];
}