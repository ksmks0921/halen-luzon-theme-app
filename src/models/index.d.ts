import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Customer {
  readonly id: string;
  readonly fname?: string;
  readonly lname?: string;
  readonly email?: string;
  readonly number?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}