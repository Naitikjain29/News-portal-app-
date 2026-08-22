const Category = ({ category, setCategory }) => {
  const categories = [
    "general",
    "business",
    "sports",
    "technology",
    "health",
    "entertainment",
    "science",
  ];

  return (
    <div className="bg-white border-t border-gray-100 border-b border-gray-200 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center justify-center gap-8 py-3 overflow-x-auto scrollbar-hide">

          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`capitalize whitespace-nowrap px-2 py-2 text-[16px] font-medium transition-all duration-300 relative
                ${
                  category === c
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }
              `}
            >
              {c}

              {category === c && (
                <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-600 rounded-full"></span>
              )}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Category;