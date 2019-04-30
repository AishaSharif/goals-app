import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Quote} from '../quote-class/quote';

@Injectable()
export class QuoteRequestService {
  quote: Quote
  constructor(private http:HttpClient) {
    this.quote = new Quote("", "")
   }
   quoteRequest(){
    interface ApiResponse{
      author: string,
      quote:string
    }
    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(environment.apiURL).toPromise().then(response=>{
        this.quote.quote = response.quote
        this.quote.author = response.author
        resolve()
      }, err => {
        this.quote.quote = 'Never, never, never give up'
        this.quote.author = 'Winston Churchill'
        reject(err)
      })
    })
    return promise;
  }
}
