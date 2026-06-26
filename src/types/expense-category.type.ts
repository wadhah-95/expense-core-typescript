export const VALID_CATEGORIES = ["Food", "Transport", "Utilities", "Entertainment", "Rent"] as const;

export type ExpenseCategory = typeof VALID_CATEGORIES[number];