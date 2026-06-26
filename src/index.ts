//used for testing
import {Expense} from "./expenses/entities/expense.entity.js";
import { ExpenseRepository } from "./repositories/expense.repository.js";
//creating expence instances
const expense1=new Expense(111, "expense1", 1000,"Transport", new Date(2026, 5, 15), true );
const expense2=new Expense(222, "expense2", 2000,"Food", new Date(2016, 4, 15), true );
const expense3=new Expense(333, "expense3", 3000,"Utilities", new Date(2025, 2, 10), true );
//creating expenserepository instance
const repository=new ExpenseRepository;
//adding expenses to repository
repository.saveExpense(expense1);
repository.saveExpense(expense2);
repository.saveExpense(expense3);
//print repository.findAll()
console.log(repository.findAll());
//test repository.findById() with valid id
repository.findById(222);
//test repository.findById() with invalid id
repository.findById(444);
//test repository.existsById() with valid id
repository.existsById(333);
//test repository.existsById() with invalid id
repository.existsById(100);
//test deleteById() with valid id
repository.deleteById(111);
//test deleteById() with invalid id
repository.deleteById(200);
//print repository.findAll() again
console.log(repository.findAll());
