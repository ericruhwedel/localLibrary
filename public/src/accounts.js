function findAccountById(accounts, id) {
  let solution = accounts.find((account) => account.id === id)
  return solution
}

function sortAccountsByLastName(accounts) {
  let surNames = accounts.map((account) => account.name.last)
  surNames.sort()
  let sortedNames = []
  for (let i = 0; i < surNames.length; i++){
    sortedNames.push(accounts.find((account) => account.name.last === surNames[i]))
  }
  return sortedNames
}

function getTotalNumberOfBorrows(account, books) {
  let ids = []
  books.forEach((book) => {book.borrows.forEach((borrow) => ids.push(borrow.id))})
  let total = ids.filter((theId) => theId === account.id)
  let result = total.length
  return result
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
     books.forEach((book) => {
       if (book.borrows.find((item) => item.id === account.id && !item.returned)){
         result.push(book);
      }
    })
     result.forEach((book) => {
       let anAuthor = authors.find((person) => person.id === book.authorId);
       book['author'] = anAuthor;
    })
    return result
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
