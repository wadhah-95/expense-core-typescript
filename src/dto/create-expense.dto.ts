/*dto=data transfer object
what data do i need to create an expense?
for creating an expense, the user should provide:
-title
-amount
-category
-ispaid(optionnal)
!!! He should not create: id and/or createdat because they should be created by the system !!!*/

import {
  //VALID_CATEGORIES, don't really need this
  type ExpenseCategory,
} from "../types/expense-category.type.js";

export interface CreateExpenseDto{
  title: string;
  amount: number;
  category: ExpenseCategory;
  isPaid?: boolean;
}
