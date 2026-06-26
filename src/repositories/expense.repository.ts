/*
Manages storadge
The repository should do only storage operations:

save expense
find all expenses
find one expense by id
delete expense by id
check if expense exists
!!! Repository does not decide business rules !!!
*/

import {Expense} from "../expenses/entities/expense.entity.js";
export class ExpenseRepository{
  private expenses: Expense[]=[];
  
  
  saveExpense(expense: Expense): Expense{
    this.expenses.push(expense);
    return expense;
  }
  findAll(): Expense[]{
    return this.expenses;
  }
  
  findById(id: number): Expense | undefined {
    
    for (const expense of this.expenses){
      if (expense.Id===id){
        return expense;
      }
    }
    return undefined;
  }
    
  deleteById(id: number): boolean{
    const initiallength=this.expenses.length;
    this.expenses=this.expenses.filter((expense)=>expense.Id!==id);
    return initiallength===this.expenses.length;

  }

  existsById(id: number): boolean{
    for(const expense of this.expenses){
      if (expense.Id===id) return true;
    }
    return false;
  }

  
}