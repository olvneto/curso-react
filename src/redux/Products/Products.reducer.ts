//import Products, { Product } from "../../shared/Table/Table.mockdata";
import { Action } from "..";
import { Product } from "./../../shared/Table/Table.mockdata";

export default function f(state: Product[] = [], action: Action): Product[] {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return action.payload;
    case "INSERT_NEW_PRODUCT":
      return [
        ...state,
        {
          ...action.payload,
          _id: String(state.length + 1),
        },
      ];
    default:
      return state;
  }
}
