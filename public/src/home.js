//implementing a reduce method per feedback
function getTotalBooksCount(books) {
  solution = books.reduce((acc, book) =>
    {acc++; return acc;}, 0)
    return solution;
  
}

//implementing a helper function per feedback
function short(array) {
  let arr = array.sort((a,b) => b.count - a.count).slice(0, 5)
  return arr
}

function getTotalAccountsCount(accounts) {
  solution = accounts.length
  return solution
}

function getBooksBorrowedCount(books) {
  bookOut = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false))
  solution = bookOut.length
  return solution
}

function getMostCommonGenres(books) {
  let genres = []
  books.forEach((book) => {
    if (genres.some((gen) => gen.name === book.genre)){
      for (let i = 0; i < genres.length; i ++){
        if (genres[i].name === book.genre){
          genres[i].count += 1
        }
      }
    } else {
      let theObject = {}
      theObject.name = book.genre
      theObject.count = 1
    genres.push(theObject)
    }
  })
  genres.sort((first, second) => second.count - first.count)
  return genres.slice(0,5)
}

function getMostPopularBooks(books) {
  const borrows = books.map(book => ({name:book.title, count:book.borrows.length}));
  //using the helper function
  return short(borrows);
}

function getMostPopularAuthors(books, authors) {
  books.forEach((book) => {
    let total = book.borrows.length
    let theAuthor = authors.find((person) => person.id === book.authorId);
    let authName = `${theAuthor.name.first} ${theAuthor.name.last}`
    book['name'] = authName;
    book['count'] = total;
  })
  let bookArray = books.map(({ name, count}) => ({ name, count}))
  let endArray = []
  bookArray.forEach((item) => {
    if (endArray.some((obj) => obj.name === item.name)) {
      for (let i = 0; i < endArray.length; i++) {
        if (endArray[i].name === item.name) {
          endArray[i].count += item.count
        }
      }
    } else{
      let newObject = {}
      newObject.name = item.name;
      newObject.count = item.count;
    endArray.push(newObject);
    }
  })
  endArray.sort((first, second) => second.count - first.count)
  return endArray.slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
