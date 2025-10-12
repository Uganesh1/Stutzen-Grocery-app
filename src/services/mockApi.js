// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock products data
const mockProducts = [
  // Fruits 
  { 
    id: 1, 
    name: 'Apples', 
    weight: '1lb', 
    price: 1.60, 
    originalPrice: 2.00, 
    image: '🍎', 
    discount: 20, 
    category: 'fruits',
    description: 'Fresh and crispy apples'
  },
  { 
    id: 3, 
    name: 'Blueberries', 
    weight: '1lb', 
    price: 3.00, 
    originalPrice: null, 
    image: '🫐', 
    discount: 0, 
    category: 'fruits',
    description: 'Sweet and juicy blueberries'
  },
  { 
    id: 6, 
    name: 'Clementines', 
    weight: '1lb', 
    price: 2.50, 
    originalPrice: 3.00, 
    image: '🍊', 
    discount: 17, 
    category: 'fruits',
    description: 'Sweet and easy to peel clementines'
  },
  { 
    id: 12, 
    name: 'Strawberries', 
    weight: '1lb', 
    price: 4.50, 
    originalPrice: 5.50, 
    image: '🍓', 
    discount: 18, 
    category: 'fruits',
    description: 'Fresh red strawberries'
  },

  // Vegetables
  { 
    id: 2, 
    name: 'Baby Spinach', 
    weight: '2lb', 
    price: 0.60, 
    originalPrice: null, 
    image: '🥬', 
    discount: 0, 
    category: 'vegetables',
    description: 'Organic baby spinach leaves'
  },
  { 
    id: 4, 
    name: 'Brussels Sprout', 
    weight: '1lb', 
    price: 3.00, 
    originalPrice: 5.00, 
    image: '🥬', 
    discount: 0, 
    category: 'vegetables',
    description: 'Fresh brussels sprouts'
  },
  { 
    id: 5, 
    name: 'Celery Stick', 
    weight: '1lb', 
    price: 5.00, 
    originalPrice: 6.00, 
    image: '🥬', 
    discount: 17, 
    category: 'vegetables',
    description: 'Crunchy celery sticks'
  },
  { 
    id: 7, 
    name: 'Sweet Corn', 
    weight: '1lb', 
    price: 4.00, 
    originalPrice: 5.00, 
    image: '🌽', 
    discount: 20, 
    category: 'vegetables',
    description: 'Fresh sweet corn'
  },
  { 
    id: 8, 
    name: 'Cucumber', 
    weight: '2.5lb', 
    price: 2.50, 
    originalPrice: null, 
    image: '🥒', 
    discount: 0, 
    category: 'vegetables',
    description: 'Crisp and refreshing cucumbers'
  },
  { 
    id: 9, 
    name: 'Red Tomatoes', 
    weight: '1lb', 
    price: 2.00, 
    originalPrice: 2.50, 
    image: '🍅', 
    discount: 0, 
    category: 'vegetables',
    description: 'Vine-ripened red tomatoes'
  },
  { 
    id: 10, 
    name: 'Green Beans', 
    weight: '1lb', 
    price: 3.50, 
    originalPrice: 4.00, 
    image: '🫘', 
    discount: 0, 
    category: 'vegetables',
    description: 'Fresh green beans'
  },
  { 
    id: 11, 
    name: 'Carrots', 
    weight: '2lb', 
    price: 1.80, 
    originalPrice: 2.20, 
    image: '🥕', 
    discount: 0, 
    category: 'vegetables',
    description: 'Sweet and crunchy carrots'
  },

  // Meat & Fish Products
  { 
    id: 13, 
    name: 'Chicken Breast', 
    weight: '1lb', 
    price: 6.50, 
    originalPrice: 7.50, 
    image: '🍗', 
    discount: 13, 
    category: 'meat',
    description: 'Fresh boneless chicken breast'
  },
  { 
    id: 14, 
    name: 'Salmon Fillet', 
    weight: '1lb', 
    price: 12.00, 
    originalPrice: 14.00, 
    image: '🐟', 
    discount: 14, 
    category: 'meat',
    description: 'Fresh Atlantic salmon fillet'
  },
  { 
    id: 15, 
    name: 'Ground Beef', 
    weight: '1lb', 
    price: 8.00, 
    originalPrice: 9.00, 
    image: '🥩', 
    discount: 11, 
    category: 'meat',
    description: 'Lean ground beef'
  },
  { 
    id: 16, 
    name: 'Pork Chops', 
    weight: '1lb', 
    price: 7.50, 
    originalPrice: 8.50, 
    image: '🍖', 
    discount: 12, 
    category: 'meat',
    description: 'Fresh pork chops'
  },

  //Snacks Products
  { 
    id: 17, 
    name: 'Potato Chips', 
    weight: '200g', 
    price: 2.50, 
    originalPrice: 3.00, 
    image: '🥔', 
    discount: 17, 
    category: 'snacks',
    description: 'Crunchy potato chips'
  },
  { 
    id: 18, 
    name: 'Chocolate Bar', 
    weight: '100g', 
    price: 1.80, 
    originalPrice: 2.20, 
    image: '🍫', 
    discount: 18, 
    category: 'snacks',
    description: 'Milk chocolate bar'
  },
  { 
    id: 19, 
    name: 'Popcorn', 
    weight: '150g', 
    price: 3.20, 
    originalPrice: null, 
    image: '🍿', 
    discount: 0, 
    category: 'snacks',
    description: 'Butter flavored popcorn'
  },
  { 
    id: 20, 
    name: 'Cookies', 
    weight: '250g', 
    price: 4.50, 
    originalPrice: 5.00, 
    image: '🍪', 
    discount: 10, 
    category: 'snacks',
    description: 'Chocolate chip cookies'
  },

  // Pet Care Products
  { 
    id: 21, 
    name: 'Dog Food', 
    weight: '5lb', 
    price: 12.00, 
    originalPrice: 15.00, 
    image: '🐕', 
    discount: 20, 
    category: 'pet',
    description: 'Premium dry dog food'
  },
  { 
    id: 22, 
    name: 'Cat Food', 
    weight: '3lb', 
    price: 8.50, 
    originalPrice: 10.00, 
    image: '🐱', 
    discount: 15, 
    category: 'pet',
    description: 'Gourmet wet cat food'
  },
  { 
    id: 23, 
    name: 'Pet Toys', 
    weight: '1pc', 
    price: 5.00, 
    originalPrice: 6.50, 
    image: '🎾', 
    discount: 23, 
    category: 'pet',
    description: 'Durable pet toys'
  },
  { 
    id: 24, 
    name: 'Pet Bed', 
    weight: '1pc', 
    price: 25.00, 
    originalPrice: 30.00, 
    image: '🛏️', 
    discount: 17, 
    category: 'pet',
    description: 'Comfortable pet bed'
  },

  // Home & Cleaning Products
  { 
    id: 25, 
    name: 'Laundry Detergent', 
    weight: '2L', 
    price: 8.00, 
    originalPrice: 10.00, 
    image: '🧴', 
    discount: 20, 
    category: 'home',
    description: 'Fresh scent laundry detergent'
  },
  { 
    id: 26, 
    name: 'Dish Soap', 
    weight: '1L', 
    price: 3.50, 
    originalPrice: 4.00, 
    image: '🍽️', 
    discount: 13, 
    category: 'home',
    description: 'Lemon scented dish soap'
  },
  { 
    id: 27, 
    name: 'All-Purpose Cleaner', 
    weight: '750ml', 
    price: 4.20, 
    originalPrice: 5.00, 
    image: '🧼', 
    discount: 16, 
    category: 'home',
    description: 'Multi-surface cleaner'
  },
  { 
    id: 28, 
    name: 'Paper Towels', 
    weight: '6 rolls', 
    price: 5.50, 
    originalPrice: 6.50, 
    image: '🧻', 
    discount: 15, 
    category: 'home',
    description: 'Absorbent paper towels'
  },

  // Dairy Products
  { 
    id: 29, 
    name: 'Milk', 
    weight: '1L', 
    price: 2.80, 
    originalPrice: 3.20, 
    image: '🥛', 
    discount: 13, 
    category: 'dairy',
    description: 'Fresh whole milk'
  },
  { 
    id: 30, 
    name: 'Cheese', 
    weight: '200g', 
    price: 4.50, 
    originalPrice: 5.50, 
    image: '🧀', 
    discount: 18, 
    category: 'dairy',
    description: 'Aged cheddar cheese'
  },
  { 
    id: 31, 
    name: 'Yogurt', 
    weight: '500g', 
    price: 3.20, 
    originalPrice: 3.80, 
    image: '🍶', 
    discount: 16, 
    category: 'dairy',
    description: 'Greek yogurt'
  },
  { 
    id: 32, 
    name: 'Butter', 
    weight: '250g', 
    price: 3.80, 
    originalPrice: 4.50, 
    image: '🧈', 
    discount: 16, 
    category: 'dairy',
    description: 'Salted butter'
  },

  // Cooking Products
  { 
    id: 33, 
    name: 'Olive Oil', 
    weight: '500ml', 
    price: 8.50, 
    originalPrice: 10.00, 
    image: '🫒', 
    discount: 15, 
    category: 'cooking',
    description: 'Extra virgin olive oil'
  },
  { 
    id: 34, 
    name: 'Pasta', 
    weight: '500g', 
    price: 2.20, 
    originalPrice: 2.80, 
    image: '🍝', 
    discount: 21, 
    category: 'cooking',
    description: 'Italian spaghetti'
  },
  { 
    id: 35, 
    name: 'Rice', 
    weight: '2lb', 
    price: 4.00, 
    originalPrice: 5.00, 
    image: '🍚', 
    discount: 20, 
    category: 'cooking',
    description: 'Long grain white rice'
  },
  { 
    id: 36, 
    name: 'Flour', 
    weight: '2lb', 
    price: 3.50, 
    originalPrice: 4.20, 
    image: '🌾', 
    discount: 17, 
    category: 'cooking',
    description: 'All-purpose flour'
  },

  // Breakfast Products
  { 
    id: 37, 
    name: 'Cereal', 
    weight: '500g', 
    price: 4.80, 
    originalPrice: 5.50, 
    image: '🥣', 
    discount: 13, 
    category: 'breakfast',
    description: 'Whole grain cereal'
  },
  { 
    id: 38, 
    name: 'Oatmeal', 
    weight: '400g', 
    price: 3.20, 
    originalPrice: 3.80, 
    image: '🥣', 
    discount: 16, 
    category: 'breakfast',
    description: 'Instant oatmeal'
  },
  { 
    id: 39, 
    name: 'Bread', 
    weight: '1 loaf', 
    price: 2.50, 
    originalPrice: 3.00, 
    image: '🍞', 
    discount: 17, 
    category: 'breakfast',
    description: 'Whole wheat bread'
  },
  { 
    id: 40, 
    name: 'Jam', 
    weight: '300g', 
    price: 3.80, 
    originalPrice: 4.50, 
    image: '🍓', 
    discount: 16, 
    category: 'breakfast',
    description: 'Strawberry jam'
  },

  // Beverage Products
  { 
    id: 41, 
    name: 'Orange Juice', 
    weight: '1L', 
    price: 3.50, 
    originalPrice: 4.20, 
    image: '🧃', 
    discount: 17, 
    category: 'beverage',
    description: 'Fresh orange juice'
  },
  { 
    id: 42, 
    name: 'Coffee', 
    weight: '250g', 
    price: 6.80, 
    originalPrice: 8.00, 
    image: '☕', 
    discount: 15, 
    category: 'beverage',
    description: 'Ground coffee beans'
  },
  { 
    id: 43, 
    name: 'Tea', 
    weight: '100g', 
    price: 4.20, 
    originalPrice: 5.00, 
    image: '🍵', 
    discount: 16, 
    category: 'beverage',
    description: 'Green tea leaves'
  },
  { 
    id: 44, 
    name: 'Soda', 
    weight: '2L', 
    price: 2.00, 
    originalPrice: 2.50, 
    image: '🥤', 
    discount: 20, 
    category: 'beverage',
    description: 'Carbonated soft drink'
  },

  //Health & Beauty Products
  { 
    id: 45, 
    name: 'Shampoo', 
    weight: '400ml', 
    price: 6.50, 
    originalPrice: 8.00, 
    image: '🧴', 
    discount: 19, 
    category: 'health',
    description: 'Moisturizing shampoo'
  },
  { 
    id: 46, 
    name: 'Toothpaste', 
    weight: '100g', 
    price: 2.80, 
    originalPrice: 3.50, 
    image: '🦷', 
    discount: 20, 
    category: 'health',
    description: 'Fluoride toothpaste'
  },
  { 
    id: 47, 
    name: 'Body Lotion', 
    weight: '500ml', 
    price: 7.20, 
    originalPrice: 9.00, 
    image: '🧴', 
    discount: 20, 
    category: 'health',
    description: 'Hydrating body lotion'
  },
  { 
    id: 48, 
    name: 'Vitamins', 
    weight: '60 tablets', 
    price: 12.00, 
    originalPrice: 15.00, 
    image: '💊', 
    discount: 20, 
    category: 'health',
    description: 'Multivitamin supplements'
  }
];

// Mock categories data
const categories = [
  { id: 'all', name: 'All Products', icon: '🛒' },
  { id: 'fruits', name: 'Fruits & Vegetables', icon: '🥬' },
  { id: 'meat', name: 'Meat & Fish', icon: '🍖' },
  { id: 'snacks', name: 'Snacks', icon: '🍿' },
  { id: 'pet', name: 'Pet Care', icon: '🐾' },
  { id: 'home', name: 'Home & Cleaning', icon: '🧹' },
  { id: 'dairy', name: 'Dairy', icon: '🥛' },
  { id: 'cooking', name: 'Cooking', icon: '🍳' },
  { id: 'breakfast', name: 'Breakfast', icon: '🥞' },
  { id: 'beverage', name: 'Beverage', icon: '🥤' },
  { id: 'health', name: 'Health & Beauty', icon: '💄' },
];

// Mock API functions
export const mockApi = {
    
  // Get all products
  getProducts: async () => {
    await delay(500);
    return {
      data: mockProducts,
      status: 200,
      message: 'Products fetched successfully'
    };
  },

  // Get products by category
  getProductsByCategory: async (category) => {
    await delay(300);
    const filteredProducts = category === 'all' 
      ? mockProducts 
      : mockProducts.filter(p => p.category === category);
    
    return {
      data: filteredProducts,
      status: 200,
      message: `Products for ${category} fetched successfully`
    };
  },

  // Get all categories
  getCategories: async () => {
    await delay(200);
    return {
      data: categories,
      status: 200,
      message: 'Categories fetched successfully'
    };
  },

  // Get product by ID
  getProductById: async (id) => {
    await delay(200);
    const product = mockProducts.find(p => p.id === id);
    return {
      data: product,
      status: product ? 200 : 404,
      message: product ? 'Product found' : 'Product not found'
    };
  },

  // Search products
  searchProducts: async (query) => {
    await delay(400);
    const filteredProducts = mockProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    
    return {
      data: filteredProducts,
      status: 200,
      message: `Search results for "${query}"`
    };
  }
};

export default mockApi;