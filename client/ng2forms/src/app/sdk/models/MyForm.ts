/* tslint:disable */

declare var Object: any;
export interface MyFormInterface {
  formName?: string;
  formSchema: any;
  id?: any;
}

export class MyForm implements MyFormInterface {
  formName: string;
  formSchema: any;
  id: any;
  constructor(data?: MyFormInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MyForm`.
   */
  public static getModelName() {
    return "MyForm";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MyForm for dynamic purposes.
  **/
  public static factory(data: MyFormInterface): MyForm{
    return new MyForm(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'MyForm',
      plural: 'MyForms',
      properties: {
        formName: {
          name: 'formName',
          type: 'string'
        },
        formSchema: {
          name: 'formSchema',
          type: 'any'
        },
        id: {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
