import { useGetCategoryQuery } from "../../../redux/features/category/categoryApi";
interface Prop {
  onchange: (value: string) => void;
}
const Filter = ({ onchange }: Prop) => {
  const { data: categories, isLoading } = useGetCategoryQuery({});
  const handelChange = (value: string) => {
    if (value == "all") {
      onchange("");
    } else {
      onchange(value);
    }
  };

  return (
    <div className="w-72">
      {categories?.length > 0 && (
        <select
          className="w-72 h-8 rounded px-4 bg-transparent text-color-gray border border-color-gray-1 capitalize"
          defaultValue="All"
        >
          <option onClick={() => handelChange("all")}>All</option>
          {!isLoading &&
            categories?.length > 0 &&
            categories.map((category: { _id: string; title: string }) => (
              <option
                key={category._id}
                className="capitalize"
                onClick={() => handelChange(category.title)}
              >
                {category.title}
              </option>
            ))}
        </select>
      )}
    </div>
  );
};

export default Filter;
