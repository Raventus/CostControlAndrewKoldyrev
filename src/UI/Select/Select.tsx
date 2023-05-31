import React from 'react'
import classes from './Select.module.css'

interface ISelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  label: string
  value: string
  options: string[]
}

const Select = (props: ISelectProps): JSX.Element => {
  const htmlFor = `${props.label}-${Math.random()}`
  return (
        <div className={classes.Select}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <select id={htmlFor}
            value={props.value}
            onChange={props.onChange}
            >
                {props.options.map((optionItem, index: number) => {
                  return (
                        <option
                        value={optionItem}
                        key={optionItem + index.toString()}
                        >
                            {optionItem}
                        </option>
                  )
                })}
            </select>
        </div>
  )
}

export default Select
