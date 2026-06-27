/*
Application logic
Uses Repository
Sould do: 
create expense
get all expenses
get expense by id
update expense
delete expense
calculate total spending
calculate spending by category
calculate unpaid expenses
*/  
import { Expense } from "../expenses/entities/expense.entity.js";
import { ExpenseRepository} from "../repositories/expense.repository.js";
import {type  ExpenseCategory } from "../types/expense-category.type.js";
import {type CreateExpenseDto } from "../dto/create-expense.dto.js";
import { type UpdateExpenseDto } from "../dto/update-expense.dto.js";
export class ExpenseService{
  private expenserepository: ExpenseRepository;
  private nextId: number=1;

  constructor(expenserepository: ExpenseRepository){
    this.expenserepository=expenserepository;
  }

  private generateId(): number{
    const id=this.nextId;
    this.nextId++;
    return id;
  }
  createExpense(expensedto: CreateExpenseDto){
    const id=this.generateId();
    const date= new Date();
    const ispaid: boolean=expensedto.isPaid ?? false
    const expense=new Expense(id, expensedto.title, expensedto.amount, expensedto.category, date,ispaid )
    return this.expenserepository.saveExpense(expense);
    
  }

  updateExpense(id: number, updexpensedto: UpdateExpenseDto): Expense{
    const expense=this.expenserepository.findById(id);
    if(expense==undefined) {throw new Error("No expense with that id")}
    else{
    
    if(updexpensedto.amount!==undefined){
      expense?.updateAmount(updexpensedto.amount);
    }
    if(updexpensedto.category!==undefined){
      expense?.updateCategory(updexpensedto.category);
    }
    if(updexpensedto.title!==undefined){
      expense?.updateTitle(updexpensedto.title);
    }
    if(updexpensedto.isPaid!==undefined){
      if(updexpensedto.isPaid===true){
        expense?.markAsPaid();
      }
      else expense?.markAsUnpaid();
    }
  }
    return expense;  
  }



}