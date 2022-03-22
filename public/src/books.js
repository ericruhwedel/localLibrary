function findAuthorById(authors, id) {
  let solution = authors.find((author) => author.id === id)
  return solution
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  let availableArray = []
  let returnedArray = []
  books.forEach((book) => {
    if(book.borrows.find((item) => item.returned === false)){
      availableArray.push(book)
    } else{
      returnedArray.push(book);
    }
  })
  result = [availableArray, returnedArray];
  return result
}

function getBorrowersForBook(book, accounts) {
  let history = book.borrows.map((borrow) => {
    let info = findAuthorById(accounts, borrow.id)
    info.returned = borrow.returned
   return info
  }).slice(0,10)
  return history
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
