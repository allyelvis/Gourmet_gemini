export type MenuCategory = 'Appetizers' | 'Main Courses' | 'Desserts' | 'Beverages';

export interface NutritionInfo {
  calories: number;
  protein: number; // in grams
  carbs: number; // in grams
  fat: number; // in grams
}

export interface MenuItemDetails {
  ingredients: string[];
  cookingTime: string;
  originStory: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  nutrition: NutritionInfo;
  details: MenuItemDetails;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Suggestion {
  itemName: string;
  reason: string;
}