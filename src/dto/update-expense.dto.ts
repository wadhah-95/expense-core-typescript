/*For updating, every field is optional.*/
import {
  //VALID_CATEGORIES, don't really need this
  type ExpenseCategory,
} from "../types/expense-category.type.js";
//import {type CreateExpenseDto} from "../dto/create-expense.dto.js"; Not needed
export interface UpdateExpenseDto{
  title?: string;
  amount?: number;
  category?: ExpenseCategory;
  isPaid?: boolean;
}