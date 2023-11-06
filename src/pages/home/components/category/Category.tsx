import Heading from "../../../../components/Heading/Heading";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { useGetCategoryQuery } from "../../../../redux/features/category/categoryApi";

const Category = () => {
  const { data: categories } = useGetCategoryQuery({});

  return (
    <div className="py-10">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <Heading
          title="JOB CATEGORIES"
          desc="A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be."
        />
        <div className="my-6">
          <Tabs id="custom-animation">
            <TabsHeader>
              {categories?.length > 0 &&
                categories.map((tab: { title: string; _id: string }) => (
                  <Tab key={tab._id} value={tab.title} className="capitalize">
                    {tab.title}
                  </Tab>
                ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Category;
