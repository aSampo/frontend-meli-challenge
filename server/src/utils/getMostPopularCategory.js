// Esta funcion busca si hay available_filters con id category para buscar
// el que tenga mas results como pide el challenge
// Hay casos en los que no existen available_filters con id category,
// en ese caso se usan los de filters
function getMostPopularCategoryId(data) {
  const availableFilters = data.available_filters || [];
  const categoriesFilter = availableFilters.find((filter) => filter.id === 'category');

  if (categoriesFilter) {
    const validCategories = categoriesFilter.values
      .filter((category) => category.results)
      .sort((a, b) => b.results - a.results);

    return validCategories.length > 0 ? validCategories[0].id : null;
  }

  const firstFilterValues = data.filters[0]?.values;
  return firstFilterValues ? firstFilterValues[0]?.path_from_root[0].id : null;
}

module.exports = {
  getMostPopularCategoryId,
};
