import { SOURCES_MAP, CATEGORIES_MAP } from "../constants";

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

export const stringifyArray = (list = []) => {
  const _list = list.filter(Boolean);

  if (!_list.length) return "";

  return _list.join(",").toString();
};

export const fqTokens = (categories, sources) => {
  const _categories = stringifyArray(
    categories.map((category) => CATEGORIES_MAP[category])
  );
  const _sources = stringifyArray(sources.map((source) => SOURCES_MAP[source]));

  const fq = [];
  if (_categories) {
    fq.push(`section_name:(${_categories})`);
  }

  if (_sources) {
    fq.push(`source:(${_sources})`);
  }

  return fq.join(" AND ");
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
    "page-size": 20,
    section: stringifyArray(categories.concat(category)),
    "production-office": stringifyArray(sources.concat(source), "cnn"),
  });
};

export const nytQueryParams = ([q, preferences, filters]) => {
  const { categories, sources } = preferences;
  const { category, source, from, to } = filters;

  return getQuery({
    q,
    begin_date: (from || FROM).replace(/-/g, ""),
    end_date: (to || TO).replace(/-/g, ""),
    fq: fqTokens(categories.concat(category), sources.concat(source)),
  });
};

export const newsOrgQueryParams = ([q, preferences, filters]) => {
  const { categories, sources } = preferences;
  const { category, source, from, to } = filters;

  return getQuery({
    from: from || FROM,
    to: to || TO,
    sortBy: "popularity",
    q: stringifyArray(categories.concat(category, q)) || "ai",
    sources: stringifyArray(sources.concat(source)),
  });
};
