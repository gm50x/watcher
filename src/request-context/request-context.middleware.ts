import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { NextFunction } from 'express';
import { RequestContext, requestContextStorage } from './request-context.model';

@Injectable()
export class RequestContextMiddleware<Request = any, Response = any>
  implements NestMiddleware<Request, Response>
{
  use(req: Request, res: Response, next: NextFunction) {
    (req as any).requestId = randomUUID();
    requestContextStorage.run(new RequestContext(req, res), next, 'route');
  }
}
