import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GsCommonConfigService {

  private config: {[module: string]: any};

  constructor() {
    this.config = {};
  }

  public setConfig(module: string, config: any) {
    this.config[module] = config;
  }

  public getConfig(module: string): any {
    return this.config[module];
  }
}
