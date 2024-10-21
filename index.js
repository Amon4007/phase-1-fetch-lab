function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => {
      renderBooks(data);
      getTotalPages(data);  // Optional: Display total pages in console
    });
}

function renderBooks(books) {
  const bookList = document.getElementById('book-list');
  if (!bookList) {
    console.error("Element with id 'book-list' not found!");
    return;
  }

  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}

function getTotalPages(books) {
  const totalPages = books.reduce((total, book) => total + book.numberOfPages, 0);
  console.log('Total Pages:', totalPages);
}

// Make sure to call fetchBooks when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
