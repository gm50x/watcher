import { AsyncLocalStorage } from 'async_hooks';

export const requestContextStorage = new AsyncLocalStorage<RequestContext>();

export class RequestContext<TRequest = any, TResponse = any> {
  constructor(public readonly req: TRequest, public readonly res: TResponse) {}

  static get context() {
    return requestContextStorage.getStore();
  }
}
