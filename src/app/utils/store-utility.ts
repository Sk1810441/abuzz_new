export class StoreUtility {

  static normalize(entityArray: Entity[]) {
    return entityArray.reduce((previousValue, currentValue) => {
      return {...previousValue, ...{[currentValue.id]: currentValue}};
    }, {});
  }

  static unNormalized(entities: { [id: number]: any }) {
    if (!entities) {
      return [];
    } else {
      return Object.keys(entities).map((key: any) => entities[key] );
    }
  }

  static filterDuplicateIds(ids: number[]) {
    return ids.filter((elem, index, self) => index === self.indexOf(elem));
  }

  static filterDuplicatecitys(citys: string[]) {
    return citys.filter((elem, index, self) => index === self.indexOf(elem));
  }

  static removeKey(entities: { [id: number]: any }, id: any) {
    const newObj = {...entities};
    delete newObj[id];
    return newObj;
  }

  static unNormalizedfilter(entities: { [id: number]: any } , city:string , zipcode:string) {
    if (!entities) {
      return [];
    }
    else {
      return Object.keys(entities).map((key: any) => entities[key] );
    }
  }



}

interface Entity {
  id: any;
}


