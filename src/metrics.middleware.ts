import { Injectable, NestMiddleware } from '@nestjs/common';
import { Counter } from 'prom-client';

const requestCounter = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    res.on('finish', () => {
      requestCounter.inc({
        method: req.method,
        route: req.route?.path || req.url,
        status: res.statusCode,
      });
    });

    next();
  }
}