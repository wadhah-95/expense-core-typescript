/*dto=data transfer object
what data do i need to create an expense?
for creating an expense, the user should provide:
-title
-amount
-category
-ispaid(optionnal)
!!! He should not create: id and/or createdat because they should be created by the system !!!*/

import {
  VALID_CATEGORIES,
  type ExpenseCategory,
} from "../types/expense-category.type.js";
