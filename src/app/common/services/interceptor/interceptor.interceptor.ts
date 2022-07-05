import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpErrorHandlerService } from 'src/app/common/services/error/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class  InterceptorInterceptor<T> implements HttpInterceptor {
  constructor(private httpErrorHandler: HttpErrorHandlerService<T>) {}

  intercept(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    let request = req.clone({
      setHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });

    return next
      .handle(request)
      .pipe(
        retry(1),
        catchError(this.httpErrorHandler.airInterceptorHandleError)
      );
  }
}
