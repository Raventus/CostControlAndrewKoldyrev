import { type CostItemType } from './CostItemType'

export interface ICostItemListProps {
  items: CostItemType[]
};

export interface ICostItemListState {
  costItems: CostItemType[]
  showForm: boolean
  brandNewCostItem: CostItemType
}
