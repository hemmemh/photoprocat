export interface ItypeInformationConst {
  [key: string]: ITypeInformation;
}

export interface IInformationValuesConst {
  [key: string]: string | string[] | number[];
}

export interface ISlideMouseOneConst {
  [key: string]: [number, number] | number[];
}

export type ITypeInformation = 'radio' | 'check' | 'slider';

export interface IActions {
  newType: string;
  newPage: string;
  limit: string;
  search: string;
  newcheckedBrands: string;
  newSortNumber: string;
  minPrice: number;
  maxPrice: number;
  newSort: string;
  newInformationValues: string;
  newTypeInformation: string;
}
