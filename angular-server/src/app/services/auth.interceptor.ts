import { tap } from 'rxjs/operators';
import { HttpEvent, HttpEventType, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept request ', req);

    const cloned = req.clone({
      headers: req.headers.append('Auth', 'SOME RANDOM TOKEN')
    });

    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log('Interceptor response', event);
        }
      })
    );
  }
}
