/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const answer = new Array();
  for (const obj1 of transactions) {
    let flag = 0;
    for (const obj2 of answer) {
      if (obj2.category == obj1.category) {
        flag = 1;
        obj2.totalSpent = obj2.totalSpent + obj1.price;
      }
    }
    if (!flag) {
      answer.push({
        category: obj1.category,
        totalSpent: obj1.price,
      });
    }
  }
  return answer;
}

module.exports = calculateTotalSpentByCategory;
