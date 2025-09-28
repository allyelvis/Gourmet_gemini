import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Crispy Calamari',
    description: 'Golden-fried calamari rings served with a zesty marinara sauce.',
    price: 14.99,
    image: 'https://picsum.photos/id/1060/600/400',
    category: 'Appetizers',
    nutrition: { calories: 450, protein: 25, carbs: 35, fat: 22 },
    details: {
      ingredients: ['Calamari Rings', 'All-Purpose Flour', 'Cornstarch', 'Paprika', 'Garlic Powder', 'Marinara Sauce'],
      cookingTime: '15 minutes',
      originStory: 'A beloved seaside classic, our calamari is sourced from the Mediterranean and prepared using a traditional Italian recipe passed down through generations.'
    }
  },
  {
    id: 2,
    name: 'Bruschetta al Pomodoro',
    description: 'Toasted ciabatta bread topped with fresh tomatoes, garlic, basil, and olive oil.',
    price: 11.50,
    image: 'https://picsum.photos/id/25/600/400',
    category: 'Appetizers',
    nutrition: { calories: 250, protein: 6, carbs: 30, fat: 12 },
    details: {
      ingredients: ['Ciabatta Bread', 'Roma Tomatoes', 'Fresh Garlic', 'Basil Leaves', 'Extra Virgin Olive Oil', 'Balsamic Glaze'],
      cookingTime: '10 minutes',
      originStory: 'Originating from central Italy, bruschetta was a simple way for farmers to enjoy the harvest. We honor that tradition with the freshest, sun-ripened tomatoes.'
    }
  },
  {
    id: 3,
    name: 'Wagyu Burger',
    description: 'Juicy Wagyu beef patty with cheddar, lettuce, tomato, and our secret sauce.',
    price: 24.00,
    image: 'https://picsum.photos/id/102/600/400',
    category: 'Main Courses',
    nutrition: { calories: 850, protein: 45, carbs: 40, fat: 55 },
    details: {
      ingredients: ['Wagyu Beef Patty', 'Cheddar Cheese', 'Brioche Bun', 'Lettuce', 'Tomato', 'Secret Sauce'],
      cookingTime: '20 minutes',
      originStory: 'Our Wagyu is sourced from the finest farms in Japan, known for its exceptional marbling and buttery texture, creating an unforgettable burger experience.'
    }
  },
  {
    id: 4,
    name: 'Grilled Salmon',
    description: 'Perfectly grilled salmon fillet with a lemon-dill sauce, served with asparagus.',
    price: 28.50,
    image: 'https://picsum.photos/id/366/600/400',
    category: 'Main Courses',
    nutrition: { calories: 600, protein: 50, carbs: 15, fat: 38 },
    details: {
      ingredients: ['Atlantic Salmon Fillet', 'Asparagus', 'Lemon', 'Fresh Dill', 'Olive Oil', 'Sea Salt'],
      cookingTime: '25 minutes',
      originStory: 'A light and healthy classic, our salmon is sustainably sourced and grilled to perfection, locking in its natural flavors and omega-3 goodness.'
    }
  },
  {
    id: 5,
    name: 'Spaghetti Carbonara',
    description: 'Classic pasta with pancetta, pecorino cheese, and a creamy egg sauce.',
    price: 21.00,
    image: 'https://picsum.photos/id/431/600/400',
    category: 'Main Courses',
    nutrition: { calories: 750, protein: 30, carbs: 80, fat: 35 },
    details: {
      ingredients: ['Spaghetti', 'Pancetta', 'Pecorino Romano Cheese', 'Free-Range Eggs', 'Black Pepper', 'Garlic'],
      cookingTime: '30 minutes',
      originStory: 'An authentic Roman dish, our Carbonara is made the traditional way—no cream, just the rich harmony of egg yolk, cheese, and cured pork.'
    }
  },
  {
    id: 6,
    name: 'Tiramisu',
    description: 'Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa.',
    price: 10.50,
    image: 'https://picsum.photos/id/225/600/400',
    category: 'Desserts',
    nutrition: { calories: 550, protein: 8, carbs: 60, fat: 30 },
    details: {
      ingredients: ['Ladyfingers', 'Espresso', 'Mascarpone Cheese', 'Eggs', 'Sugar', 'Cocoa Powder'],
      cookingTime: '20 minutes + chilling',
      originStory: 'Meaning "pick me up" in Italian, this iconic dessert from Veneto combines bold coffee flavors with creamy mascarpone for a truly decadent finish.'
    }
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
    price: 11.00,
    image: 'https://picsum.photos/id/429/600/400',
    category: 'Desserts',
    nutrition: { calories: 620, protein: 7, carbs: 75, fat: 32 },
    details: {
      ingredients: ['Bittersweet Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour', 'Vanilla Ice Cream'],
      cookingTime: '22 minutes',
      originStory: 'A happy accident in a New York kitchen, this dessert is famous for its irresistible liquid chocolate core. We bake ours to order for the perfect eruption.'
    }
  },
  {
    id: 8,
    name: 'Artisanal Lemonade',
    description: 'Freshly squeezed lemonade with a hint of mint.',
    price: 6.50,
    image: 'https://picsum.photos/id/1015/600/400',
    category: 'Beverages',
    nutrition: { calories: 150, protein: 0, carbs: 40, fat: 0 },
    details: {
      ingredients: ['Lemons', 'Water', 'Cane Sugar', 'Fresh Mint'],
      cookingTime: '5 minutes',
      originStory: 'A timeless refreshment. We squeeze our lemons daily and add a sprig of fresh mint from our garden for a crisp, invigorating taste.'
    }
  },
   {
    id: 9,
    name: 'Espresso Martini',
    description: 'A rich and smooth cocktail of vodka, coffee liqueur, and fresh espresso.',
    price: 15.00,
    image: 'https://picsum.photos/id/355/600/400',
    category: 'Beverages',
    nutrition: { calories: 280, protein: 1, carbs: 25, fat: 0 },
    details: {
      ingredients: ['Vodka', 'Coffee Liqueur', 'Freshly Brewed Espresso', 'Coffee Beans for garnish'],
      cookingTime: '5 minutes',
      originStory: 'Born in London in the 1980s, this cocktail is the perfect marriage of a nightcap and a pick-me-up, shaken to create its signature frothy top.'
    }
  },
];