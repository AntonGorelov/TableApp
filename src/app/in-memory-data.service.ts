import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1,  name: 'iPhone 5'   , price: 20000 },
      { id: 2,  name: 'iPhone 5s'  , price: 25000 },
      { id: 3,  name: 'iPhone 6'   , price: 30000 },
      { id: 4,  name: 'iPhone 6s'  , price: 35000 },
      { id: 5,  name: 'iPhone 7'   , price: 40000 },
      { id: 6,  name: 'iPhone 7s'  , price: 42000 },
      { id: 7,  name: 'iPhone 8'   , price: 45000 },
      { id: 8,  name: 'iPhone X'   , price: 80000 },
      { id: 9,  name: 'Xiaomi Mi5' , price: 25000 },
      { id: 10, name: 'Xiaomi MS'  , price: 30000 },
      { id: 11, name: 'Sony Xperia', price: 35000 },
      { id: 12, name: 'Galaxy S6'  , price: 40000 },
      { id: 13, name: 'Galaxy S7'  , price: 42000 },
      { id: 14, name: 'Galaxy S8'  , price: 45000 },
      { id: 15, name: 'Galaxy SS'  , price: 45000 }
    ];
    return {items};
  }
}
