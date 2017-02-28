/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Staff } from '../../models/Staff';
import { Address } from '../../models/Address';
import { MyForm } from '../../models/MyForm';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Staff: Staff,
    Address: Address,
    MyForm: MyForm,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
