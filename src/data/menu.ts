export type MenuItem = {
  id: string;
  name_ru: string;
  name_en?: string;
  description_ru?: string;
  price: number;
  weight?: string;
  category: string;
  is_signature?: boolean;
  is_available: boolean;
  sort_order: number;
};

export const menuCategories = [
  { id: "salads-veg", name: "Овощные салаты", name_en: "Vegetable salads" },
  { id: "salads-fish", name: "Рыбные салаты", name_en: "Fish salads" },
  { id: "salads-meat", name: "Мясные салаты", name_en: "Meat salads" },
  { id: "starters", name: "Закуски", name_en: "Starters" },
  { id: "soups", name: "Супы", name_en: "Soups" },
  { id: "pasta", name: "Паста", name_en: "Pasta" },
  { id: "beef", name: "Говядина", name_en: "Beef" },
  { id: "horse-mutton", name: "Конина и баранина", name_en: "Horsemeat & Mutton" },
  { id: "company", name: "Блюда на компанию", name_en: "Company meals" },
  { id: "poultry", name: "Птица", name_en: "Poultry" },
  { id: "fish", name: "Рыба", name_en: "Fish" },
  { id: "sides", name: "Гарниры", name_en: "Sides" },
  { id: "desserts", name: "Десерты", name_en: "Desserts" },
  { id: "drinks", name: "Напитки", name_en: "Drinks" },
] as const;

export const menuItems: MenuItem[] = [
  // Овощные салаты
  { id: "greek-salakis", name_ru: "Салат Греческий с сыром салакис", name_en: "Greek salad with salakis cheese", price: 3500, category: "salads-veg", is_available: true, sort_order: 1 },
  { id: "tomato-stracciatella", name_ru: "Салат с помидорами и страчателлой", name_en: "Salad with tomatoes and stracciatella", price: 3500, category: "salads-veg", is_available: true, sort_order: 2 },
  { id: "eggplant-nut", name_ru: "Салат из печеных баклажан с ореховым соусом", name_en: "Salad with baked eggplant under nut sauce", price: 2800, category: "salads-veg", is_available: true, sort_order: 3 },
  { id: "burrata-tomato", name_ru: "Салат буррата с томатами", name_en: "Tomato Burrata Salad", price: 3800, category: "salads-veg", is_available: true, sort_order: 4, is_signature: true },
  { id: "pumpkin-pear", name_ru: "Салат из тыквы и пьяной груши", name_en: "Salad made of baked pumpkin and brandied pear", price: 4000, category: "salads-veg", is_available: true, sort_order: 5 },

  // Рыбные салаты
  { id: "eel-cucumber", name_ru: "Салат из угря с огуречным спагетти", name_en: "Eel cucumber spaghetti salad", price: 3800, category: "salads-fish", is_available: true, sort_order: 1 },
  { id: "avocado-shrimp", name_ru: "Салат из авокадо с креветками", name_en: "Avocado and shrimps salad", price: 4800, category: "salads-fish", is_available: true, sort_order: 2 },
  { id: "caesar-shrimp", name_ru: "Салат Цезарь с креветками", name_en: "Salad Caesar with shrimps", price: 4500, category: "salads-fish", is_available: true, sort_order: 3 },
  { id: "salmon-avocado-cobb", name_ru: "Салат с семгой, авокадо и креветками под соусом КОББ", name_en: "Salad with salmon avocado and shrimps with Cobb sauce", price: 5600, category: "salads-fish", is_available: true, sort_order: 4, is_signature: true },
  { id: "caesar-salmon", name_ru: "Салат Цезарь с семгой", name_en: "Salad Caesar with salmon", price: 4500, category: "salads-fish", is_available: true, sort_order: 5 },

  // Мясные салаты
  { id: "horsemeat-muer", name_ru: "Салат из конины с грибами Муэр", name_en: "Muer salad with horsemeat and mushrooms", price: 3500, category: "salads-meat", is_available: true, sort_order: 1 },
  { id: "davinci-quail", name_ru: "Фирменный салат «DaVinci» с перепёлкой", name_en: "Specialty quail salad «DaVinci»", price: 4800, category: "salads-meat", is_available: true, sort_order: 2, is_signature: true },
  { id: "chicken-liver-salad", name_ru: "Салат из куриной печени", name_en: "Chicken liver salad", price: 2800, category: "salads-meat", is_available: true, sort_order: 3 },
  { id: "caesar-grilled-chicken", name_ru: "Салат Цезарь с курочкой гриль", name_en: "Salad Caesar with grilled chicken", price: 3500, category: "salads-meat", is_available: true, sort_order: 4 },
  { id: "olivie-smoked", name_ru: "Салат Оливье с копченой куриной грудкой и перепелиным яйцом", name_en: "Olivie with smoked chicken breast and quail egg", price: 2600, category: "salads-meat", is_available: true, sort_order: 5 },
  { id: "thai-eggplant", name_ru: "Тайский салат с жареными баклажанами", name_en: "Thai salad with baked eggplants", price: 4200, category: "salads-meat", is_available: true, sort_order: 6 },
  { id: "lebanese-grill", name_ru: "Леванский салат с овощами гриль и злаками", name_en: "Lebanese salad with vegetables on grill", price: 2800, category: "salads-meat", is_available: true, sort_order: 7 },

  // Закуски
  { id: "salmon-tartar", name_ru: "Тар-тар из семги в облаке дыма", name_en: "Smoked salmon Tartar", price: 5300, category: "starters", is_available: true, sort_order: 1, is_signature: true },
  { id: "hummus", name_ru: "Хумус с чиабаттой", name_en: "Hummus ciabatta", price: 2200, category: "starters", is_available: true, sort_order: 2 },
  { id: "bacon-bruschetta", name_ru: "Брускетта с говяжьим беконом под перечным соусом", name_en: "Bacon bruschetta and pepper sauce", price: 2800, category: "starters", is_available: true, sort_order: 3 },
  { id: "beef-rolls-goat", name_ru: "Рулетики из говядины с козьим сыром", name_en: "Beef rolls with goat cheese", price: 3500, category: "starters", is_available: true, sort_order: 4 },
  { id: "himalayan-salmon", name_ru: "Семга по-гималайски", name_en: "Himalayan salt block salmon", price: 9500, category: "starters", is_available: true, sort_order: 5, is_signature: true },
  { id: "salmon-bruschetta", name_ru: "Брускетта с лососем", name_en: "Salmon bruschetta", price: 6000, category: "starters", is_available: true, sort_order: 6 },
  { id: "cheese-platter", name_ru: "Ассорти из сыров", name_en: "Cheese platter", price: 5500, category: "starters", is_available: true, sort_order: 7 },
  { id: "veg-platter", name_ru: "Овощи по-кавказски", name_en: "Vegetable platter", price: 3200, category: "starters", is_available: true, sort_order: 8 },
  { id: "fruit-platter", name_ru: "Фруктовая нарезка", name_en: "Fruit platter", price: 4000, category: "starters", is_available: true, sort_order: 9 },
  { id: "beef-jelly", name_ru: "Холодец из говядины с горчицей", name_en: "Beef jelly with mustard", price: 3500, category: "starters", is_available: true, sort_order: 10 },
  { id: "pickles", name_ru: "Соленья домашние", name_en: "Homemade pickles", price: 4000, category: "starters", is_available: true, sort_order: 11 },
  { id: "herring", name_ru: "Селедочка под водочку", name_en: "Herring starter", price: 2600, category: "starters", is_available: true, sort_order: 12 },
  { id: "kazy", name_ru: "Казы", name_en: "Kazy, horsemeat", price: 3800, category: "starters", is_available: true, sort_order: 13 },
  { id: "champignons-mousse", name_ru: "Шампиньоны запеченные с сырным муссом", name_en: "Champignons baked with cheese mousse", price: 3500, category: "starters", is_available: true, sort_order: 14 },
  { id: "halumi", name_ru: "Жареный сыр «Халуми»", name_en: "«Halumi» fried cheese", price: 3500, category: "starters", is_available: true, sort_order: 15 },
  { id: "chicken-liver-croutons", name_ru: "Печень цыпленка на чесночных гренках", name_en: "Liver fried on garlic croutons", price: 2000, category: "starters", is_available: true, sort_order: 16 },

  // Супы
  { id: "pumpkin-shrimp-soup", name_ru: "Крем-суп из тыквы с креветками", name_en: "Pumpkin cream soup with shrimp", price: 3200, category: "soups", is_available: true, sort_order: 1 },
  { id: "tom-yum", name_ru: "Том Ям классический", name_en: "Tom Yum soup", price: 4300, category: "soups", is_available: true, sort_order: 2 },
  { id: "noodle-soup", name_ru: "Суп лапша", name_en: "Noodles soup", price: 2500, category: "soups", is_available: true, sort_order: 3 },
  { id: "lamb-soup", name_ru: "Суп из баранины с овощами", name_en: "Lamb soup with vegetables", price: 4500, category: "soups", is_available: true, sort_order: 4 },
  { id: "bouillabaisse", name_ru: "Французский суп Буйабес", name_en: "Bouillabaisse French soup", price: 4300, category: "soups", is_available: true, sort_order: 5 },
  { id: "wonton-soup", name_ru: "Суп-лапша с вонтонами", name_en: "Noodle soup with wontons", price: 3500, category: "soups", is_available: true, sort_order: 6 },
  { id: "ramen-chicken", name_ru: "Суп Рамен с курицей", name_en: "Ramen Soup with Chicken", price: 3800, category: "soups", is_available: true, sort_order: 7 },
  { id: "ramen-beef", name_ru: "Суп Рамен с мраморной говядиной", name_en: "Ramen Soup with marbled beef", price: 5000, category: "soups", is_available: true, sort_order: 8 },

  // Паста
  { id: "pasta-bacon", name_ru: "Паста с беконом", name_en: "Pasta with bacon", price: 4500, category: "pasta", is_available: true, sort_order: 1 },
  { id: "tagliatelle-salmon", name_ru: "Тальятелли с семгой", name_en: "Tagliatelle with salmon", price: 5000, category: "pasta", is_available: true, sort_order: 2 },
  { id: "pasta-tomato-chicken", name_ru: "Паста на основе томатов с курочкой", name_en: "Pasta with tomatoes and chicken", price: 4500, category: "pasta", is_available: true, sort_order: 3 },
  { id: "fettuccine-chicken-mushroom", name_ru: "Фетуччини с курочкой и грибами", name_en: "Fettuccine with chicken and mushrooms", price: 4600, category: "pasta", is_available: true, sort_order: 4 },
  { id: "pasta-pesto-stracciatella", name_ru: "Паста базилик, песто и страчателла", name_en: "Basil paste, pesto and stracciatella", price: 3000, category: "pasta", is_available: true, sort_order: 5 },

  // Говядина
  { id: "ribeye", name_ru: "Рибай стейк", name_en: "Ribeye steak", price: 8500, category: "beef", is_available: true, sort_order: 1, is_signature: true },
  { id: "filet-mignon", name_ru: "Филе миньон", name_en: "Steak Minion", price: 6300, category: "beef", is_available: true, sort_order: 2 },
  { id: "veal-farmer", name_ru: "Телятина по-фермерски", name_en: "Farmer style Veal", price: 6000, category: "beef", is_available: true, sort_order: 3 },
  { id: "beef-tongue-josper", name_ru: "Язык жареный на хоспере", name_en: "Beef tongue fried in josper", price: 7000, category: "beef", is_available: true, sort_order: 4 },
  { id: "tbone", name_ru: "Тибон стейк", name_en: "T-bone steak", price: 7000, category: "beef", is_available: true, sort_order: 5 },
  { id: "beef-rib", name_ru: "Ребро говяжье", name_en: "Beef rib", price: 14500, category: "beef", is_available: true, sort_order: 6 },

  // Конина и баранина
  { id: "horsemeat-steak", name_ru: "Стейк из конины", name_en: "Horsemeat Steak", price: 7500, category: "horse-mutton", is_available: true, sort_order: 1 },
  { id: "horsemeat-mash", name_ru: "Конина с картофельным пюре и запеченным перцем", name_en: "Horse meat with mashed potatoes and baked peppers", price: 6500, category: "horse-mutton", is_available: true, sort_order: 2 },
  { id: "kazy-grill", name_ru: "Фирменные казы гриль", name_en: "House grilled kazy with BBQ sauce", price: 9400, category: "horse-mutton", is_available: true, sort_order: 3, is_signature: true },
  { id: "rack-lamb", name_ru: "Каре ягнёнка", name_en: "Rack of lamb", price: 11000, category: "horse-mutton", is_available: true, sort_order: 4 },

  // Блюда на компанию
  { id: "josper-mix", name_ru: "Хоспер микс", name_en: "Josper mix", price: 29500, category: "company", is_available: true, sort_order: 1, is_signature: true },

  // Птица
  { id: "duck-fillet", name_ru: "Филе утки на углях", name_en: "Duck fillet on charcoal", price: 4200, category: "poultry", is_available: true, sort_order: 1 },
  { id: "chicken-roll-prune", name_ru: "Рулетики из цыпленка с черносливом и грушей", name_en: "Chicken roll filled with prunes and pear", price: 6000, category: "poultry", is_available: true, sort_order: 2 },
  { id: "chicken-risotto", name_ru: "Куриная грудка с ризотто", name_en: "Chicken risotto", price: 6000, category: "poultry", is_available: true, sort_order: 3 },

  // Рыба
  { id: "dorado-grill", name_ru: "Дорадо гриль", name_en: "Grilled Dorado steak", price: 7500, category: "fish", is_available: true, sort_order: 1 },
  { id: "sea-bass-grill", name_ru: "Сибас на гриле с вялеными томатами и оливками", name_en: "Grilled Sea Bass with Sun-Dried Tomatoes and Olives", price: 8500, category: "fish", is_available: true, sort_order: 2, is_signature: true },
  { id: "zander-fried", name_ru: "Судак жареный", name_en: "Fried Zander", price: 6500, category: "fish", is_available: true, sort_order: 3 },
  { id: "trout-atlantic", name_ru: "Форель Атлантическая (Норвегия) с маринованным цукини", name_en: "Atlantic trout (Norway) with marinated zucchini", price: 9000, category: "fish", is_available: true, sort_order: 4 },
  { id: "salmon-asian", name_ru: "Сёмга в азиатском стиле с овощами", name_en: "Salmon with vegetables in Asian style", price: 7500, category: "fish", is_available: true, sort_order: 5 },

  // Гарниры
  { id: "mashed", name_ru: "Картофельное пюре", price: 1600, category: "sides", is_available: true, sort_order: 1 },
  { id: "home-potato", name_ru: "Картофель по-домашнему", price: 1600, category: "sides", is_available: true, sort_order: 2 },
  { id: "idaho", name_ru: "Картофель «Айдахо»", price: 1600, category: "sides", is_available: true, sort_order: 3 },
  { id: "fries", name_ru: "Картофель фри", price: 1600, category: "sides", is_available: true, sort_order: 4 },
  { id: "rice", name_ru: "Рис", price: 900, category: "sides", is_available: true, sort_order: 5 },
  { id: "grill-veg", name_ru: "Овощи гриль", price: 1600, category: "sides", is_available: true, sort_order: 6 },
  { id: "champignon-onion", name_ru: "Шампиньоны с луком", price: 1600, category: "sides", is_available: true, sort_order: 7 },

  // Десерты
  { id: "spanish-cheesecake", name_ru: "Испанский чизкейк с бельгийским шоколадом", name_en: "Spanish cheesecake with Belgian chocolate", price: 3500, category: "desserts", is_available: true, sort_order: 1 },
  { id: "honey-cake", name_ru: "Медовик", name_en: "Honey cake", price: 3000, category: "desserts", is_available: true, sort_order: 2 },
  { id: "pancake", name_ru: "Панкейк", name_en: "Pancake", price: 3500, category: "desserts", is_available: true, sort_order: 3 },
  { id: "fondant", name_ru: "Фондан", name_en: "Chocolate fondant", price: 3500, category: "desserts", is_available: true, sort_order: 4 },
  { id: "nuts-condensed", name_ru: "Орешки со сгущенкой", name_en: "Nuts Cake with condensed milk", price: 2500, category: "desserts", is_available: true, sort_order: 5 },
  { id: "ice-cream", name_ru: "Мороженое в ассортименте", name_en: "Different kinds of ice-cream", price: 1500, category: "desserts", is_available: true, sort_order: 6 },
];

export const signatureItems = menuItems.filter((i) => i.is_signature);
