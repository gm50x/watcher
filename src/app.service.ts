import { Injectable, Logger } from '@nestjs/common';
import { RequestContext } from './request-context/request-context.model';

@Injectable()
export class AppService {
  getHello(): string {
    const context = RequestContext.context;
    const reqId = context.req.requestId;

    Logger.debug(reqId, this.constructor.name);

    return 'Hello World!';
  }
}
