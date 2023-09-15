function getMostPopularCategoryId(data) {
  const availableFilters = data.available_filters || [];

  const categoriesFilter = availableFilters.find((filter) => filter.id === 'category');
  if (categoriesFilter) {
    const validCategories = categoriesFilter.values
      .filter((category) => category.results)
      .sort((a, b) => b.results - a.results);

    return validCategories.length > 0 ? validCategories[0].id : null;
  }

  const filterValues = data.filters[0]?.values;
  return filterValues ? filterValues[0]?.path_from_root.pop().id : null;
}

module.exports = {
  getMostPopularCategoryId,
};
