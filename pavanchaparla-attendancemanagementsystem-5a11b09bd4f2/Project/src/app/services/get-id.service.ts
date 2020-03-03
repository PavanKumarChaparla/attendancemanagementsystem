import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIdService {
  associateId;
  constructor() { }
  
  setId(uid){
    this.associateId=uid;
  }
  getId(){
    return this.associateId;
  }
}
