import React from 'react';

function Sidebar({ filters, setFilters,categories,tags }) {
    const toggleTag = (tag) => {
    setFilters(prev => {
      const alreadySelected = prev.tags.includes(tag);
      const updatedTags = alreadySelected
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags: updatedTags };
    });
  };

  return (
    <div className="p-3 border rounded shadow-sm bg-white ">
      <h5>Filter</h5>

      <div className="mb-3">
        <label className="form-label fw-bold">Category</label>
           <select
          className="form-select"
          value={filters.category}
          onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
        >
          <option value="">All</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Availability</label>
        <select
          className="form-select"
          value={filters.availability}
          onChange={(e) => setFilters(prev => ({ ...prev, availability: e.target.value }))}
        >
          <option value="">All</option>
          <option value="in">In Stock</option>
          <option value="out">Out of Stock</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Max Price</label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="5000"
          step="100"
          value={filters.priceRange[1]}
          onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [0, +e.target.value] }))}
        />
        <div>₹0 - ₹{filters.priceRange[1]}</div>
      </div>

        <div className="mb-3">
        <label className="form-label fw-bold">Tags</label>
        <div className="d-flex flex-wrap">
          {tags.map((tag, index) => (
            <div className="form-check me-3" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`tag-${index}`}
                checked={filters.tags.includes(tag)}
                onChange={() => toggleTag(tag)}
              />
              <label className="form-check-label" htmlFor={`tag-${index}`}>
                {tag}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
