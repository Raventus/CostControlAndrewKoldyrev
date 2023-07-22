import { type CostItemType } from '../../CostList/Types/CostItemType'

export const CostItems: CostItemType[] = [
  {
    name: 'Яблоко',
    cost: 100,
    category: 'Фрукты',
    store: 'Пятёрочка',
    date: '2023-07-21',
    id: 5
  },
  {
    name: 'Ванна',
    cost: 100000,
    category: 'Сантехника',
    store: 'Водолей',
    date: '2023-07-22',
    id: 7
  },
  {
    name: 'Монитор',
    cost: 10000,
    category: 'Техника',
    store: 'DNS',
    date: '2023-07-22',
    id: 9
  },
  {
    name: 'Гарри поттер и Узник Азкабана',
    cost: 1000,
    category: 'Книга',
    store: 'Книжный мир',
    date: '2023-07-23',
    id: 11
  }
]

export const Categories: string[] = [
  'Фрукты',
  'Сантехника',
  'Техника',
  'Книга'
]

export const MonthToCalculate = '2023-07'
