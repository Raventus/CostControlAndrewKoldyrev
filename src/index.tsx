import React from 'react'
import ReactDOM from 'react-dom/client'
import { type CostItemType } from './CostList/Types/CostItemType'
import { CostList } from './CostList/CostList'
import Layout from './hoc/Layout/Layout'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Categories from './Categories/Categories'

const itemsArray: CostItemType[] = [
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

const categories: string[] = [
  'Фрукты',
  'Сантехника',
  'Техника',
  'Книга'
]

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <HashRouter >
    <React.StrictMode>
      <Layout>
      <Routes >
        <Route path='/categories' element={ <Categories categories={categories} />}/>
        <Route path='/' element={ <CostList items={itemsArray} categories={categories}/>}/>
      </Routes >
      </Layout>
    </React.StrictMode>
  </HashRouter >
)
