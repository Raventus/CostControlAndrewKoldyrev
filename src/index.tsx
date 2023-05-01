import React from "react";
import ReactDOM from "react-dom/client";
import { CostItemType } from './CostList/Types/CostItemType';
import { CostList } from './CostList/CostList';

let itemsArray : Array<CostItemType> = [
     {
        name: "Яблоко",
        cost : 100,
        category : "Фрукты",
        store : "Пятёрочка"
    },
    {
        name: "Ванна",
        cost : 100000,
        category : "Сантехника",
        store : "Водолей"
    },
    {
        name: "Монитор",
        cost : 10000,
        category : "Техника",
        store : "DNS"
    },
    {
        name: "Гарри поттер и Узник Азкабана",
        cost : 1000,
        category : "Книга",
        store : "Книжный мир"
    }
]

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <CostList items={itemsArray} />
  </React.StrictMode>
);
