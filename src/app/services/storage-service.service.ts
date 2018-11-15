import { Injectable } from '@angular/core';

@Injectable()
export class StorageService{

  constructor() { }

  get(key: string, fallback: any): any {
    const value = localStorage.getItem(key);
    return (value) ? JSON.parse(value) : fallback;
  }
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
   clearAll()
   {
     localStorage.clear();
   }
}
