const VALID_CATEGORIES=[ "Food" , "Transport" , "Utilities" , "Entertainment" , "Rent"] as const;
type ExpenseCategory=typeof VALID_CATEGORIES[number];
class Expense{
  private readonly expenseId: number;
  private readonly expenseCreatedAt: Date;
  private expenseTitle: string;
  private expenseAmount: number;
  private expenseCategory: ExpenseCategory;
  private expenseIsPaid: boolean;

    constructor(id: number, title: string, amount: number, category: ExpenseCategory, createdAt: Date, isPaid: boolean){
      this.expenseId=id;
      if (title.trim().length===0) throw new Error ("Title can't be empty !");
      this.expenseTitle=title;
      if (amount<=0) throw new Error("Amount can't be negative !")
      this.expenseAmount=amount;
      this.expenseCategory=category;
      this.expenseCreatedAt=createdAt;
      this.expenseIsPaid=isPaid;
    }
    get amount(): number {
      return this.expenseAmount;
    }
    updateAmount(newAmount: number): void {
      if (newAmount<=0) throw new Error("Amount can't be negative !");
      this.expenseAmount=newAmount;
    }
    get Id(): number {
      return this.expenseId;
    }
    get Title(): string {
      return this.expenseTitle;
    }
    updateTitle(newTitle: string): void{
      if (newTitle.trim().length===0 ) throw new Error("Title can't be empty !");
      this.expenseTitle=newTitle.trim();
    }
    get Category(): ExpenseCategory{
      return this.expenseCategory;
    }
    updateCategory(newCategory:ExpenseCategory): void{
      if(!VALID_CATEGORIES.includes(newCategory)) throw new Error ("Category must be within Expense Categories !");
      this.expenseCategory=newCategory;
    }
    get isPaid(): boolean{
      return this.expenseIsPaid;
    }
    markAsPaid(): void{
      this.expenseIsPaid=true;
    }
    markAsUnpaid(): void{
      this.expenseIsPaid=false;
    }
    get createdAt(): Date{
      return this.expenseCreatedAt;
    }

}
const favdate=new Date(2026, 3, 15);
const expense=new Expense(1234, "confession", 1000, "Transport", favdate, true);

console.log(expense.amount);
//console.log(favedate_expense);