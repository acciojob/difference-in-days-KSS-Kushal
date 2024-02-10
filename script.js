var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const dateObj1 = new Date(date1);
const dateObj2 = new Date(date2);
const diff = dateObj2 - dateObj1;
return Math.floor(diff/86400000);
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
