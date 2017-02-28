/* tslint:disable */

declare var Object: any;
export interface StaffInterface {
  name?: string;
  addressId?: string;
  id?: number;
}

export class Staff implements StaffInterface {
  name: string;
  addressId: string;
  id: number;
  constructor(data?: StaffInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Staff`.
   */
  public static getModelName() {
    return "Staff";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Staff for dynamic purposes.
  **/
  public static factory(data: StaffInterface): Staff{
    return new Staff(data);
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
      name: 'Staff',
      plural: 'Staffs',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        addressId: {
          name: 'addressId',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
