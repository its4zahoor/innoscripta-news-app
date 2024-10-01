export const CATEGORIES = [
  { value: "business", label: "Business" },
  { value: "science", label: "Science" },
  { value: "food", label: "Food" },
  { value: "technology", label: "Technology" },
  { value: "health", label: "Health" },
  { value: "sports", label: "Sports" },
  { value: "politics", label: "Politics" },
];

export const CATEGORIES_MAP = {
  business: "Business",
  science: "Science",
  food: "Food",
  technology: "Technology",
  health: "Health",
  sports: "Sports",
  politics: "Politics",
};

// NYTimes categories (https://developer.nytimes.com/docs/top-stories-product/1/routes/%7Bsection%7D.json/get)
// arts, automobiles, books/review, business, fashion, food, health, home, insider, magazine, movies, nyregion,
// obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world

// NEWS ORG (https://newsapi.org/docs/endpoints/sources)
// business, entertainment, general, health, science, sports, technology

// The Guardian (https://open-platform.theguardian.com/documentation/search)
// arts, books, business, environment, film, food, games, music, politics, science, sport, technology, television, travel

export const SOURCES = [
  { value: "bbc-news", label: "BBC News" },
  { value: "cnn", label: "CNN" },
  { value: "the-verge", label: "The Verge" },
  { value: "techcrunch", label: "TechCrunch" },
  { value: "reuters", label: "Reuters" },
  { value: "bloomberg", label: "Bloomberg" },
  { value: "al-jazeera-english", label: "Al Jazeera English" },
  { value: "the-new-york-times", label: "The New York Times" },
];

export const SOURCES_MAP = {
  "bbc-news": "BBC News",
  cnn: "CNN",
  "the-verge": "The Verge",
  techcrunch: "TechCrunch",
  reuters: "Reuters",
  bloomberg: "Bloomberg",
  "al-jazeera-english": "Al Jazeera English",
  "the-new-york-times": "The New York Times",
};
