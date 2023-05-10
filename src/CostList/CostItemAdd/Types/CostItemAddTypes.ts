import { type CostItemType, type CallbackFunction } from '../../Types/CostItemType'

export interface ICostItemAddProps {
  onAdd: CallbackFunction
  costItem: CostItemType
};
