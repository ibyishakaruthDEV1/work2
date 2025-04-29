const Filters = ({ 
    categories, 
    filters, 
    setFilters, 
    sortOption, 
    setSortOption,
    onApply 
  }) => {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-4">Sort & Filter</h3>
        
        {/* Sort Options */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Sort By</h4>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>
        
        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Category</h4>
          <div className="space-y-2">
            {categories.map(category => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === category}
                  onChange={() => setFilters({...filters, category})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Price Range */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Price Range (RWF)</h4>
          <div className="flex items-center justify-between mb-2">
            <span>{filters.priceRange[0]}</span>
            <span>{filters.priceRange[1]}</span>
          </div>
          <div className="flex gap-4">
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={filters.priceRange[0]}
              onChange={(e) => setFilters({
                ...filters,
                priceRange: [parseInt(e.target.value), filters.priceRange[1]]
              })}
              className="w-full"
            />
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters({
                ...filters,
                priceRange: [filters.priceRange[0], parseInt(e.target.value)]
              })}
              className="w-full"
            />
          </div>
        </div>
        
        {/* Rating Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Minimum Rating</h4>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.rating}
            onChange={(e) => setFilters({
              ...filters,
              rating: parseInt(e.target.value)
            })}
          >
            <option value="0">Any Rating</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
            <option value="1">1+ Stars</option>
          </select>
        </div>
        
        {onApply && (
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={onApply}
          >
            Apply Filters
          </button>
        )}
      </div>
    );
  };
  
  export default Filters;