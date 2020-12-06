// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const exclaimPoint = [];
const forEachArray = array.forEach(user => {
  exclaimPoint.push(user.username + "!");
});

/* let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
}) */

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map(user => {
  return user.username + "?";
});

/* const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
}) */

//Filter the array to only include users who are on team: red

const filterArray = array.filter(user => {
  return user.team === "red";
});

//Find out the total score of all users using reduce

const reduceArray = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);
console.log(reduceArray);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

// 1) the index
/* 2) const newArray = arrayNum.map((num, i) => {
  return num * 2;
}) */

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!";
  });
  return user;
});