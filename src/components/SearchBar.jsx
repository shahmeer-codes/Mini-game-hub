function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[90%] md:w-[45%] bg-white border border-gray-300 rounded-2xl px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
    </div>
  );
}

export default SearchBar;