import "./SearchBar.css";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <Search className="search-icon" size={20} />

      <input
        type="text"
        placeholder="Search applications, pods, deployments..."
        className="search-input"
      />

      <div className="shortcut">
        Ctrl + K
      </div>
    </div>
  );
};

export default SearchBar;