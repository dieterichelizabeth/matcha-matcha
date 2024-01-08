/**
 * Category dropdown on the "Shop" page
 */
import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useSelector, useDispatch } from "react-redux";
import {
  Stack,
  Button,
  Menu,
  MenuButton,
  Flex,
  Heading,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";

function CategoryMenu() {
  // Access and interact with the Redux Store
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // On page load, attempt to gather "category names" from the Database
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  // Use redux store to display current category name.
  const categoryName = getName();
  function getName() {
    console.log(store);
    if (store.currentCategory) {
      const id = store.currentCategory;
      const category = store.categories.find((category) => category._id === id);

      if (category) {
        if (category.name) {
          return category.name;
        }
      }
    }
  }

  // Once the "category names" return from the database, add them to the Redux Store.
  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: "updateCategories",
        categories: categoryData.categories,
      });
    }
  }, [categoryData, loading, dispatch]);

  useEffect(() => {
    const c = JSON.parse(localStorage.getItem("categoryId"));
    if (c !== undefined || c !== null) {
      localStorage.removeItem("categoryId");
      dispatch({
        type: "updateCurrentCategory",
        currentCategory: c,
      });
    }
  }, []);

  // When the user selects a category, update the current category in the Redux Store.
  const handleClick = (id) => {
    dispatch({
      type: "updateCurrentCategory",
      currentCategory: id,
    });
  };

  return (
    <section>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading color={"green.800"} fontSize={{ base: "3xl", md: "5xl" }}>
          {categoryName ? `${categoryName}` : "All Plants"}
        </Heading>
        <Stack>
          <Menu>
            <MenuButton bg={"gray.50"} as={Button} rightIcon={<FaAngleDown />}>
              Filter By Category
            </MenuButton>

            <MenuList>
              {store.categories ? (
                <>
                  {store.categories.map((category) => (
                    <MenuItem
                      color={categoryName === category.name ? "gray.400" : ""}
                      cursor={
                        categoryName === category.name ? "auto" : "pointer"
                      }
                      pointerEvents={
                        categoryName === category.name ? "none" : "auto"
                      }
                      key={category.name}
                      onClick={() => {
                        handleClick(category._id);
                      }}
                    >
                      {category.name}
                    </MenuItem>
                  ))}
                </>
              ) : (
                <></>
              )}
              <MenuItem
                key={"reset"}
                onClick={() => {
                  handleClick(null);
                }}
              >
                View All
              </MenuItem>
            </MenuList>
          </Menu>

          {loading ? <Text>Loading..</Text> : null}
        </Stack>
      </Flex>
    </section>
  );
}

export default CategoryMenu;
