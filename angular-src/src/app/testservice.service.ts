import { Injectable } from '@angular/core';

@Injectable()

export class TestService {
  public globalNum: number;

  constructor() {}

  public getNum() {
    return this.globalNum;
  }

  public saveNum(num: number) {
    this.globalNum = num;
  }
}

