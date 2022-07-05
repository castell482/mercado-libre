import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService<T> implements ErrorHandler {
	handleError(error: HttpErrorResponse): string {
		let errorMessage = `Unknown error: ${error}`;

		if (error instanceof HttpErrorResponse)
      errorMessage = `Error the client received: ${error}`;

		if (!(error instanceof ErrorEvent))
			errorMessage = `Error code ${error.status}\nMessage: ${error.message}`;

		console.log(errorMessage);

		return errorMessage;
	}

	airInterceptorHandleError(error: HttpErrorResponse): Observable<HttpEvent<T>> {
		return throwError(() => {
			return this.handleError(error);
		});
	}
}
