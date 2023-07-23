import { type CategoryType } from '../../Infrastructure/Types/CategoryType'
import { type CostItemType } from '../../Infrastructure/Types/CostItemType'
import { type SalaryByMonth } from '../../Infrastructure/Types/SalaryByMonth'

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
  },
  {
    name: 'Гарри поттер и Тайная комната',
    cost: 1000,
    category: 'Книга',
    store: 'Книжный мир',
    date: '2023-06-30',
    id: 13
  }
]

export const Categories: CategoryType[] = [
  {
    name: 'Фрукты',
    id: 1
  },
  {
    name: 'Сантехника',
    id: 2
  },
  {
    name: 'Техника',
    id: 3
  },
  {
    name: 'Книга',
    id: 4
  }
]

export const MonthToCalculate = '2023-07'

export const Salary: SalaryByMonth[] = [
  {
    salary: 200000,
    month: '2023-07'
  },
  {
    salary: 190000,
    month: '2023-06'
  }
]
