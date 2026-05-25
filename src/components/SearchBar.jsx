function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        placeholder="Search Games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[90%] md:w-[40%] p-4 rounded-xl bg-slate-800 border border-slate-600 outline-none"
      />
    </div>
  );
}

export default SearchBar;