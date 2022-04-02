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
//using spread operator in function per feedback
function getBorrowersForBook(book, accounts) {
  const {borrows} = book;
  const borrowers = borrows.map(({ id, returned }) => {
    const account = accounts.find(account => account.id === id);
    return {
      ...account,
      returned,
    };
  });
  return borrowers
    .sort((borrowerA, borrowerB) => {
      const companyA =borrowerA.company;
      const companyB = borrowerB.company;
      return companyA.localeCompare(companyB);
    })
    .slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
