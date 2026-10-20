import { MenuItem, Review, GalleryItem } from '../types/restaurant';

export const RESTAURANT_INFO = {
  name: "The’Kush Garden",
  shortName: "Kush’Garden",
  tagline: "Contemporary Himalayan Gastronomy & Artisanal Fire",
  description: "An immersive culinary sanctuary nestled in historic Thamel, celebrating heritage charcoal hearth cookery, wild mountain botanicals, and bespoke mixology.",
  address: "Airport road, Biratnagar-4, Moranag, Nepal",
  neighborhood: "Airport Road",
  coordinates: {
    lat: 27.7152,
    lng: 85.3123,
    formatted: "27.7152° N, 85.3123° E"
  },
  phone: "+977 9712054843",
  conciergePhone: "+977 9712054841",
  email: "thekushgardenbrt@gmail.com",
  inquiriesEmail: "concierge@lambre-thamel.com",
  hours: {
    weekday: "Monday – Thursday: 07:00 AM – 09:30 PM",
    weekend: "Friday – Sunday: 07:00 AM – 10:00 PM",
    barHours: "Lounge & Hearth Bar open until midnight on weekends"
  },
  stats: [
    { value: "14+", label: "Years of Culinary Heritage", detail: "Rooted in Kathmandu since 2012" },
    { value: "48K+", label: "Discerning Guests Welcomed", detail: "From over 65 countries" },
    { value: "36", label: "Artisanal Hearth Dishes", detail: "Crafted on wild applewood charcoal" },
    { value: "4.9★", label: "Verified Guest Acclaim", detail: "Over 1,280 five-star reviews" }
  ]
};

export const HERO_IMAGE = "https://sajilonumber.com/wp-content/uploads/2026/10/herosection.jpeg";
export const CHEF_IMAGE = "/src/assets/images/chef_plating_dish_1790848798344.jpg";
export const DISH_TENDERLOIN_IMAGE = "/src/assets/images/dish_himalayan_tenderloin_1790848810918.jpg";
export const DISH_DUCK_IMAGE = "/src/assets/images/drink.jpeg";
export const COCKTAIL_SMOKE_IMAGE = "/src/assets/images/cocktail_himalayan_smoke_1790848839775.jpg";

export const COK_DRINK_IMAGE = "https://sajilonumber.com/wp-content/uploads/2026/10/cok_drink.jpg";
export const COK_SEXONTHEBEACH_IMAGE = "https://sajilonumber.com/wp-content/uploads/2026/10/cok_sexonthebeach.jpg";

export const SIG_CHICKEN_IMAGE = "https://sajilonumber.com/wp-content/uploads/2026/10/sig_chicken.jpg";
export const SIG_CHICKEN_BIRANY_IMAGE = "https://sajilonumber.com/wp-content/uploads/2026/10/sig_chicken_birany.jpg";
export const SIG_THALI_IMAGE = "https://sajilonumber.com/wp-content/uploads/2026/10/sig_thali.jpg";
export const SIG_burger_IMAGE = "https://sajilonumber.com/wp-content/uploads/2026/10/sig_burger.jpeg";
//export const DISH_DUCK_IMAGE = "/src/assets/images/dish_duck.jpeg";

export const AMB_1_IMAGE = "https://sajilonumber.com/wp-content/uploads/2026/10/amb_1-1.jpeg";
export const AMB_2_IMAGE = "https://sajilonumber.com/wp-content/uploads/2026/10/amb_2.jpeg";
export const AMB_3_IMAGE = "https://sajilonumber.com/wp-content/uploads/2026/10/amb_3.jpeg";
export const AMB_4_IMAGE = "https://sajilonumber.com/wp-content/uploads/2026/10/amb_4.jpeg";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "tenderloin-charcoal",
    name: "Himalayan Spiced Tenderloin",
    nepaliSubtitle: "अंगारमा भुटेको मासु",
    description: "Dry-aged tenderloin seared over applewood coals, truffled mousseline, charred shallot petals, and mountain juniper reduction jus.",
    price: 34,
    formattedPrice: "$34 / Rs. 4,500",
    category: "main",
    categoryLabel: "Main Course",
    image: DISH_TENDERLOIN_IMAGE,
    isSignature: true,
    isGlutenFree: true,
    pairing: "2018 Barolo DOCG or Himalayan Smoky Old Fashioned",
    ingredients: ["28-day Dry Aged Tenderloin", "Winter Black Truffle", "Mountain Juniper", "Charred Sweet Shallots", "Bone Marrow Glaze"],
    spiciness: 1
  },
  {
    id: "roasted-duck-clay",
    name: "Clay-Roasted Wild Duck Breast",
    nepaliSubtitle: "माटोको भाँडोमा पोलेको हाँस",
    description: "Tender glazed duck breast cured in wild timur pepper and mountain honey, saffron parsnip purée, blackberry gastrique, and micro-sorrel.",
    price: 32,
    formattedPrice: "$32 / Rs. 4,200",
    category: "main",
    categoryLabel: "Main Course",
    image: DISH_DUCK_IMAGE,
    isSignature: true,
    isGlutenFree: true,
    pairing: "Pinot Noir Bourgogne or Rhododendron Infused Sour",
    ingredients: ["Free-range Duck Breast", "Wild Timur Pepper", "Saffron Roots", "Wild Himalayan Berries", "Mountain Blossom Honey"],
    spiciness: 1
  },
  {
    id: "truffle-morel-momo",
    name: "Artisanal Morel & Truffle Potstickers",
    nepaliSubtitle: "गुच्ची च्याउ र मसरुम मोमो",
    description: "Delicate hand-pinched translucent dumplings filled with foraged Jumla morels, confit garlic, aged Yak cheese, and smoked tomato-sesame emulsion.",
    price: 22,
    formattedPrice: "$22 / Rs. 2,900",
    category: "starters",
    categoryLabel: "Starters",
    image: DISH_TENDERLOIN_IMAGE,
    isSignature: true,
    isVegetarian: true,
    pairing: "Grüner Veltliner or Sparkling Himalayan Mead",
    ingredients: ["Foraged Jumla Morels", "Aged Yak Gruyère", "Smoked Himalayan Timur", "Sesame Oil", "Crispy Chives"],
    spiciness: 2
  },
  {
    id: "charred-octopus-saffron",
    name: "Hearth-Charred Mediterranean Octopus",
    nepaliSubtitle: "कोइलामा पोलेको अक्टोपस",
    description: "Slow-braised and flash-charred octopus tentacle over citrus embers, smoked paprika potato crema, fermented chili crisp, and pickled shallots.",
    price: 26,
    formattedPrice: "$26 / Rs. 3,400",
    category: "starters",
    categoryLabel: "Starters",
    image: DISH_DUCK_IMAGE,
    isGlutenFree: true,
    pairing: "Dry Crisp Albariño or Lemongrass Ginger Tonic",
    ingredients: ["Wild Octopus", "Spanish Smoked Paprika", "Fingerling Potatoes", "Pickled Mustard Seeds", "Kaffir Lime Oil"],
    spiciness: 1
  },
  {
    id: "foraged-mushroom-risotto",
    name: "Alpine Forest Porcini & Barley Risotto",
    nepaliSubtitle: "हिमाली च्याउको रिसोतो",
    description: "Creamy pearl barley and carnaroli simmered in rich mushroom broth, roasted chanterelles, shaved winter truffle, and 24-month Parmigiano.",
    price: 28,
    formattedPrice: "$28 / Rs. 3,700",
    category: "main",
    categoryLabel: "Main Course",
    image: DISH_TENDERLOIN_IMAGE,
    isVegetarian: true,
    isGlutenFree: false,
    pairing: "Chardonnay Napa Valley or Cold Drip Oolong Tea",
    ingredients: ["Carnaroli Rice", "Mountain Chanterelles", "Winter Porcini", "Aged Parmigiano Reggiano", "Herb Butter"],
    spiciness: 0
  },
  {
    id: "smoke-cocktail-signature",
    name: "The Thamel Ember & Smoke",
    nepaliSubtitle: "धुवाँदार हिमालयन ककटेल",
    description: "Rare 12-year single malt, roasted cinnamon smoke, Nepalese bitter wild cherry liqueur, lapsi reduction, served in crystal glass over hand-cut ice.",
    price: 18,
    formattedPrice: "$18 / Rs. 2,400",
    category: "drinks",
    categoryLabel: "Drinks",
    image: COCKTAIL_SMOKE_IMAGE,
    isSignature: true,
    pairing: "Pairs with Charred Tenderloin or Single Origin Dark Chocolate",
    ingredients: ["12-Yr Single Malt", "Lapsi Sweet-Tart Liqueur", "Cinnamon Bark Smoke", "Angostura & Timur Bitters", "Citrus Mist"],
    spiciness: 0
  },
  {
    id: "rhododendron-gin-botanical",
    name: "Wild Rhododendron & Botanical Elixir",
    nepaliSubtitle: "लालीगुराँस र जिन अमृत",
    description: "Craft Himalayan dry gin steeped with wild scarlet rhododendron petals, clarified mountain lime, sparkling elderflower, and gold dust.",
    price: 16,
    formattedPrice: "$16 / Rs. 2,100",
    category: "drinks",
    categoryLabel: "Drinks",
    image: COCKTAIL_SMOKE_IMAGE,
    isSignature: false,
    pairing: "Pairs with Morel Potstickers or Fresh Shellfish",
    ingredients: ["Artisanal Himalayan Gin", "Scarlet Rhododendron Cordial", "Sparkling Elderflower", "Lime Blossom", "24k Gold Flakes"],
    spiciness: 0
  },
  {
    id: "dark-chocolate-cardamom-tart",
    name: "Smoked Valrhona Chocolate & Cardamom Tart",
    nepaliSubtitle: "डार्क चकलेट र अलैंची टार्ट",
    description: "70% smoked single-origin chocolate ganache, black cardamom crisp, salted jaggery caramel, and house-churned wild yak milk gelato.",
    price: 17,
    formattedPrice: "$17 / Rs. 2,250",
    category: "desserts",
    categoryLabel: "Desserts",
    image: DISH_DUCK_IMAGE,
    isSignature: true,
    isVegetarian: true,
    pairing: "Tawny Port 20-Year or Highland Peated Espresso",
    ingredients: ["Valrhona 70% Dark Chocolate", "Himalayan Black Cardamom", "Yak Milk Cream", "Organic Sugarcane Jaggery", "Flaky Maldon Sea Salt"],
    spiciness: 0
  },
  {
    id: "saffron-pistachio-tresleches",
    name: "Kashmiri Saffron & Pistachio Milk Cake",
    nepaliSubtitle: "केसर र पिस्ता मिल्क केक",
    description: "Airy sponge soaked in three slow-simmered milks infused with golden saffron strands, toasted Sicilian pistachios, and dried rose pearls.",
    price: 16,
    formattedPrice: "$16 / Rs. 2,100",
    category: "desserts",
    categoryLabel: "Desserts",
    image: DISH_TENDERLOIN_IMAGE,
    isVegetarian: true,
    pairing: "Darjeeling First Flush Muskatel or Sweet Riesling",
    ingredients: ["Grade-A Kashmiri Saffron", "Sicilian Bronte Pistachio", "Condensed Sweet Milk", "Damask Rose Essence", "Gold Leaf"],
    spiciness: 0
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "",
    category: "ambiance",
    categoryLabel: "Interior Ambiance",
    image: HERO_IMAGE,
    caption: "SIntimate dark timber tables bathed in soft amber candlelight and warm acoustic textures."
  },
  // {
  //   id: "g2",
  //   title: "Mastery at the Pass",
  //   category: "hearth",
  //   categoryLabel: "Culinary Craft",
  //   image: CHEF_IMAGE,
  //   caption: "Executive Chef Soren precision-finishing our charcoal-grilled seasonal tasting courses."
  // },
  {
    id: "g3",
    title: "",
    category: "dishes",
    categoryLabel: "Signature Dishes",
    image: SIG_CHICKEN_IMAGE,
    caption: ""
  },
  {
    id: "g4",
    title: "Clay-Roasted Wild Duck",
    category: "dishes",
    categoryLabel: "Signature Dishes",
    image: SIG_CHICKEN_BIRANY_IMAGE,
    caption: "Wild timur pepper cured duck breast served over saffron-parsnip emulsion."
  },
  {
    id: "g5",
    title: "Smoked Himalayan Elixir",
    category: "cocktails",
    categoryLabel: "Craft Bar",
    image: COK_DRINK_IMAGE,
    caption: "Handcrafted smoked single-malt cocktails infused with mountain botanicals and spicesS."
  },
  {
    id: "g6",
    title: "Clay-Roasted Wild Duck",
    category: "dishes",
    categoryLabel: "Signature Dishes",
    image: SIG_burger_IMAGE,
    caption: "A delicious burger crafted with locally sourced ingredients and a hint of Himalayan spices."
  },
    {
    id: "g7",
    title: "Smoked Himalayan Elixir",
    category: "cocktails",
    categoryLabel: "Craft Bar",
    image: COK_SEXONTHEBEACH_IMAGE,
    caption: "Handcrafted smoked single-malt cocktails infused with mountain botanicals and spicesS."
  },
    {
    id: "g8",
    title: "Clay-Roasted Wild Duck",
    category: "dishes",
    categoryLabel: "Signature Dishes",
    image: SIG_THALI_IMAGE,
    caption: "Wild timur pepper cured duck breast served over saffron-parsnip emulsion."
  },
   {
    id: "g9",
    title: "",
    category: "ambiance",
    categoryLabel: "Interior Ambiance",
    image: AMB_1_IMAGE,
    caption: "SIntimate dark timber tables bathed in soft amber candlelight and warm acoustic textures."
  },
   {
    id: "g10",
    title: "",
    category: "ambiance",
    categoryLabel: "Interior Ambiance",
    image: AMB_2_IMAGE,
    caption: "SIntimate dark timber tables bathed in soft amber candlelight and warm acoustic textures."
  },
   {
    id: "g11",
    title: "",
    category: "ambiance",
    categoryLabel: "Interior Ambiance",
    image: AMB_3_IMAGE,
    caption: "SIntimate dark timber tables bathed in soft amber candlelight and warm acoustic textures."
  },
   {
    id: "g12",
    title: "",
    category: "ambiance",
    categoryLabel: "Interior Ambiance",
    image: AMB_4_IMAGE,
    caption: "SIntimate dark timber tables bathed in soft amber candlelight and warm acoustic textures."
  },
   

];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Elena Rostova",
    role: "Michelin Guide Contributor & Food Critic",
    location: "Zurich, Switzerland",
    rating: 5,
    title: "An unexpected triumph of Himalayan gastronomy",
    comment: "L’Ambre is redefining South Asian high gastronomy. The charcoal-grilled tenderloin paired with wild mountain timur pepper is one of the most memorable dishes I tasted all year in Asia. The service is discreet yet deeply warm.",
    date: "September 2026",
    avatar: "ER"
  },

  {
    id: "r2",
    author: "Aarav Sharma",
    role: "Culinary Editor & Sommelier",
    location: "Kathmandu & London",
    rating: 5,
    title: "The standard for luxury dining in Kathmandu",
    comment: "From the moment you step off Thamel's bustling streets into L’Ambre’s darkened amber sanctuary, time stops. The cocktail program alone rivals the world's best speakeasies. Do not skip the artisanal morel dumplings.",
    date: "August 2026",
    avatar: "AS"
  },
  {
    id: "r3",
    author: "Marc & Claire DuPont",
    role: "Global Travelers & Wine Collectors",
    location: "Lyon, France",
    rating: 5,
    title: "Unforgettable anniversary dinner",
    comment: "We reserved the private wine alcove for our 15th anniversary. Chef Soren personally presented our tasting menu. The duck breast and Valrhona chocolate dessert were culinary art. Flawless hospitality.",
    date: "July 2026",
    avatar: "MC"
  },
  {
    id: "r4",
    author: "Tenzing Norbu",
    role: "Hospitality Executive",
    location: "Pokhara, Nepal",
    rating: 5,
    title: "Proud to showcase this to international guests",
    comment: "Whenever our overseas partners visit Nepal, L’Ambre is our first booking. The balance of ancestral fire technique with modern aesthetic plating is simply world-class. Atmospheric, refined, and exquisite.",
    date: "June 2026",
    avatar: "TN"
  }
];
