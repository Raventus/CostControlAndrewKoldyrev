import { type CostItemType } from '../../CostList/Types/CostItemType'

export const CostItems: CostItemType[] = [
  {
    name: 'Яблоко',
    cost: 100,
    category: 'Фрукты',
    store: 'Пятёрочка'
  },
  {
    name: 'Ванна',
    cost: 100000,
    category: 'Сантехника',
    store: 'Водолей'
  },
  {
    name: 'Монитор',
    cost: 10000,
    category: 'Техника',
    store: 'DNS'
  },
  {
    name: 'Гарри поттер и Узник Азкабана',
    cost: 1000,
    category: 'Книга',
    store: 'Книжный мир'
  }
]

export const Categories: string[] = [
  'Фрукты',
  'Сантехника',
  'Техника',
  'Книга'
]

export const MonthToCalculate = '2023-07'
