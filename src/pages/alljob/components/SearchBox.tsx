interface Prop {
  onchange: (value: string) => void;
}
const SearchBox = ({ onchange }: Prop) => {
  const debounce = (func, timeout = 300) => {
    let timer: any;
    return (...arg: []) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(arg);
      }, timeout);
    };
  };
  const saveInput = (value: string[]) => {
    onchange(value[0]);
  };

  const handelValueChange = debounce((e: string[]) => saveInput(e));
  return (
    <div className="mt-4 lg:mt-0">
      <input
        type="text"
        name="search"
        placeholder="Search by title..."
        className="h-10 outline-none border border-color-gray-1 rounded px-4"
        onChange={(e) => handelValueChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
