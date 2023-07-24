import React, { type FC } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import classes from './Analytics.module.css'
import { type storeValuesType } from '../../redux/reducers/rootReducer'
import { useSelector } from 'react-redux'

interface IAnalitycsCostSalary {
  name: string
  cost: number
  salary: number
}
const Analytics: FC = () => {
  const salary = useSelector((state: storeValuesType) => {
    return state.salary
  })

  const costItems = useSelector((state: storeValuesType) => {
    return state.costItems
  })

  const data: IAnalitycsCostSalary[] = []
  salary.forEach(element => {
    const cost = costItems.filter(x => x.date.includes(element.month)).reduce((currentSum, currentCost) => {
      return currentSum + currentCost.cost
    }, 0)

    const item: IAnalitycsCostSalary = {
      name: element.month,
      cost,
      salary: element.salary
    }

    data.push(item)
  })

  return (
        <ResponsiveContainer className={classes.ChartsContainer} width="100%" height="100%">
            <div className={classes.Header}>
                <div >Доходы/расходы: </div>
                <BarChart
                    width={550}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 40,
                      bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#ffffff"/>
                    <YAxis stroke="#ffffff"/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="cost" name="Расходы" fill="rgba(240, 87, 108, 1)" display='Расходы'/>
                    <Bar dataKey="salary" name="Доходы" fill="#82ca9d" display='Доходы'/>
                </BarChart>
            </div>
        </ResponsiveContainer>
  )
}

export default Analytics
