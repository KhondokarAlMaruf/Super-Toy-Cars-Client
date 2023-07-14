import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SelectedItemDetails from "./SelectedItemDetails";

const ShopCategory = () => {
  const [subCategory, setSubCategory] = useState([]);
  const [car, setCar] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/category`)
      .then((res) => res.json())
      .then((data) => setSubCategory(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  const handleSubCategory = (subCateName) => {
    // console.log(subCateName);
    const matchingItems = car.filter(
      (item) => item.category_name === subCateName
    );
    setSelectedItems(matchingItems);
    // console.log(selectedItem);
  };

  return (
    <div>
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Police Car</Tab>
          <Tab>Racing Car</Tab>
          <Tab>Regular Car</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            {subCategory[0]?.items?.map((subCateName) => (
              <Tab onClick={() => handleSubCategory(subCateName)}>
                {subCateName}
              </Tab>
            ))}
            <SelectedItemDetails selectedItems={selectedItems} />
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            {subCategory[1]?.items?.map((subCateName) => (
              <Tab onClick={() => handleSubCategory(subCateName)}>
                {subCateName}
              </Tab>
            ))}
            <SelectedItemDetails selectedItems={selectedItems} />
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            {subCategory[2]?.items?.map((subCateName) => (
              <Tab onClick={() => handleSubCategory(subCateName)}>
                {subCateName}
              </Tab>
            ))}
            <SelectedItemDetails selectedItems={selectedItems} />
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
