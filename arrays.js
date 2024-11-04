// Step 1: Using createGroceries function return an array with 6 groceries items
function createGroceries() {
  // write your code here...
  let groceries = [
    "Milk", "Eggs", "Bread",
    "Juice", "Cheese", "Water"
  ];
  return groceries;
}

// Step 2: Using getSecondGroceryItem function return the second grocery item from `groceries` argument
function getSecondGroceryItem(groceries) {
  // write your code here...
  return groceries[1];
}

// Step 3: Using getGroceriesCount return the length of the `groceries` argument
function getGroceriesCount(groceries) {
  // write your code here...
  return groceries.length;
}

// Step 4: Using getLastGroceryItem function return the last grocery item from `groceries` argument
function getLastGroceryItem(groceries) {
  // write your code here...
  return groceries.at(groceries.length - 1);
}

// Step 5: Using removeLastGroceryItem remove the last grocery item and return it
function removeLastGroceryItem(groceries) {
  // write your code here...
  return groceries.pop();
}

// Step 6: Using addNewGroceries function Add two new and different grocery items to the end of the groceries argument, and return the new array
function addNewGroceries(groceries, itemOne, itemTwo) {
  // write your code here...
  groceries.push(itemOne);
  groceries.push(itemTwo);
  return groceries;
}

// Step 7: Using getFirstThreeGroceryItems function return a new array named that include the first three grocery items
function getFirstThreeGroceryItems(groceries) {
  // write your code here...
  return groceries.slice(0, 3);
}

// 🌶️🌶️🌶️ **Challenge**

// Step 1: Using deleteThirdItem function delete the third item from the groceries list, and return the groceries list
function deleteThirdItem(groceries) {
  // write your code here...
  groceries.splice(2, 1);
  return groceries;
}

// Step 2: Using insertItemAtBeginning function inserts a new grocery item at the beginning of the array, and return the new groceries list
function insertItemAtBeginning(groceries, item) {
  // write your code here...
  groceries.unshift(item);
  return groceries;
}

// Step 3: Using replaceFirstTwoItems function replace the first two elements with 'ketchup' and 'chili', and return the new groceries list
function replaceFirstTwoItems(groceries) {
  // write your code here...
  groceries.splice(0, 2, "ketchup", "chili");
  return groceries;
}

// DO NOT CHANGE THE LINE OF CODE BELOW
const groceries = createGroceries();

module.exports = {
  groceries,
  createGroceries,
  getSecondGroceryItem,
  getGroceriesCount,
  getLastGroceryItem,
  removeLastGroceryItem,
  addNewGroceries,
  getFirstThreeGroceryItems,
  deleteThirdItem,
  insertItemAtBeginning,
  replaceFirstTwoItems,
};
