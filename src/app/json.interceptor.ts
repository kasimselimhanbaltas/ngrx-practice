import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable()
// export class JsonInterceptor implements HttpInterceptor {

//   constructor() {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // JSONPlaceholder API'sine bir istek gönderiyorsak, bu isteği özelleştirebiliriz
//     if (request.url.includes('jsonplaceholder.typicode.com/users')) {
//       console.log("interceptor is working!")
//       // Örnek olarak, her isteğin sonuna ".json" ekleyelim
//       request = request.clone({
//         url: request.url + '.json'
//       });
//     }
//     return next.handle(request);
//   }
// }
@Injectable()
export class JsonInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // İstekin metot, URL ve başlıklarını konsola yazdır
    console.log(`HTTP isteği: ${request.method}\nIstek URL: ${request.url}`);
    //console.log('Başlıklar:', request.headers.keys().map(key => `${key}: ${request.headers.get(key)}`));

    // İsteğin kendisini işle ve devam et
    return next.handle(request);
  }
}