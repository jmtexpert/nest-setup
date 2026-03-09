import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
@Injectable()
export class TransformInterceptors implements NestInterceptor {
  intercept(context:ExecutionContext, next:CallHandler ): any {
    console.log('checking request');
    return next.handle();
  }
}