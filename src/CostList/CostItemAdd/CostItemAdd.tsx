import React from "react";
import { CostItemType } from "../Types/CostItemType";

export class CostItemAdd extends React.Component<{onAdd: Function, costItem: CostItemType}, CostItemType> {

    constructor(props : { onAdd: Function, costItem: CostItemType }){
        super(props);
        this.state = this.props.costItem;
      }

    onCostItemAdd(){
        debugger;
        this.props.onAdd();
    }
    
    render() {
        return (
        <div>
            <div>
                <div>Название: </div>
                <input type="text" defaultValue={this.state.name}/>
            </div>
            <div>
                <div>Цена: </div>
                <input type="text"  defaultValue={this.state.cost}/>
            </div>
            <div>
                <div>Магазин: </div>
                <input type="text"  defaultValue={this.state.store}/>
            </div>
            <div>
                <div>Категория: </div>
                <input type="text"  defaultValue={this.state.category}/>
            </div>
            <button onClick={this.onCostItemAdd.bind(this)}>Добавить</button>
        </div>
        )
    }
}
