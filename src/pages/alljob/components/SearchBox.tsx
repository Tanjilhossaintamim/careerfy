import React from 'react';

interface Prop {
  onChange: (query: string) => void;
}

const SearchBox: React.FC<Prop> = ({ onChange }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  function search(query: string) {
    // Simulate a search operation
    console.log(`Searching for: ${query}`);
    // You can also call the prop function to pass the query to the parent component
    onChange(query);
  }

  const handleValueChange = debounce((query: string) => search(query), 300);

  return (
    <div className="mt-4 lg:mt-0">
      <input
        type="text"
        name="search"
        placeholder="Search by title..."
        className="h-10 outline-none border border-color-gray-1 rounded px-4"
        onChange={(e) => handleValueChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
