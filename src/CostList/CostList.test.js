import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CostList from './CostList'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../redux/store/store'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } })
  })
)

describe('CostList Test', () => {
  test('render CostList component', () => {
    const costItemListProps = {
      costItems: [
        {
          name: 'Яблоко',
          cost: 100,
          category: 'Фрукты',
          store: 'Пятёрочка',
          date: '2023-07',
          id: 1
        },
        {
          name: 'Ванна',
          cost: 100000,
          category: 'Сантехника',
          store: 'Водолей',
          date: '2023-07',
          id: 2
        }
      ],
      categories: ['Сантехника', 'Фрукты'],
      monthToCalculate: '2023-07',
      deleteCostItem: () => {}
    }
    render(<Provider store={store}><CostList {...costItemListProps}/></Provider>)
    screen.debug()
  })
  test('CostList component contains', () => {
    const costItems = []
    render(<Provider store={store}><CostList costItems={costItems}/></Provider>)
    expect(screen.getByText('Добавить расход')).toBeInTheDocument()
  })
  test('CostList push add button - form is shown', () => {
    const costItemListProps = {
      costItems: [
        {
          name: 'Яблоко',
          cost: 100,
          category: 'Фрукты',
          store: 'Пятёрочка',
          date: '2023-07',
          id: 1
        },
        {
          name: 'Ванна',
          cost: 100000,
          category: 'Сантехника',
          store: 'Водолей',
          date: '2023-07',
          id: 2
        }
      ],
      categories: ['Сантехника', 'Фрукты'],
      showForm: true,
      monthToCalculate: '2023-07'
    }

    const toogleForm = jest.fn(() => {
      costItemListProps.showForm = true
    })

    const deleteCostItem = jest.fn(() => {
    })

    const addCostItem = jest.fn(() => {
    })

    render(<Provider store={store}>
      <CostList {...costItemListProps} toogleForm = {toogleForm.bind(CostList)} deleteCostItem = {deleteCostItem.bind(CostList)} addCostItem={addCostItem.bind(CostList)}/>
      </Provider>)
    fireEvent.click(screen.getByText('Добавить расход'))
    expect(screen.getByText('Цена')).toBeInTheDocument()
  })
})
