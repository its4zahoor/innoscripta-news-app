export const TODAY = new Date();
export const WEEK_AGO = new Date();
WEEK_AGO.setDate(WEEK_AGO.getDate() - 7);

export const getQuery = (options = {}) => {
  const params = Object.entries(options).reduce((acc, [key, value]) => {
    if (value) acc.push(`${key}=${encodeURIComponent(value)}`);
    return acc;
  }, []);
  return params.join("&");
};

export const stringifyArray = (list = [], q = "cnn") => {
  if (!list.length) return q;

  return list.join(",").toString();
};

const [FROM] = WEEK_AGO.toISOString().split("T");
const [TO] = TODAY.toISOString().split("T");

export const guardianQueryParams = ([q, preferences, filters]) => {
  const { categories, sources } = preferences;
  const { category, source, from, to } = filters;
  return getQuery({
    q,
    "from-date": from || FROM,
    "to-date": to || TO,
    pageSize: 10,
    section: stringifyArray(categories.concat(category)),
    "production-office": stringifyArray(sources.concat(source)),
  });
};

export const nytQueryParams = ([q, preferences, filters]) => {
  const { categories, sources } = preferences;
  const { category, source, from, to } = filters;
  if (!category && categories.length > 0) {
    return `topstories/v2/${categories[0]}.json?`;
  }

  const query = getQuery({
    begin_date: from || FROM,
    end_date: to || TO,
    q: stringifyArray(categories.concat(category), q),
    sources: stringifyArray(sources.concat(source)),
  });

  return `search/v2/articlesearch.json?${query}`;
};

export const newsOrgQueryParams = ([q, preferences, filters]) => {
  const { categories, sources } = preferences;
  const { category, source, from, to } = filters;

  return getQuery({
    from: from || FROM,
    to: to || TO,
    q: q || "ai",
    category: stringifyArray(categories.concat(category)),
    sources: stringifyArray(sources.concat(source)),
  });
};
