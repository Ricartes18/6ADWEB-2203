import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booksapp';
  readonly APIUrl = "http://localhost:5038/api/books/";

  books: any = [];
  editingId: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshBooks();
  }

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe(data => {
      this.books = data;
    });
  }

  addBook() {
  const newBook = (document.getElementById("newBook") as HTMLInputElement).value;
  const newDesc = (document.getElementById("newDesc") as HTMLInputElement).value;
  const newPrice = (document.getElementById("newPrice") as HTMLInputElement).value;
  const newAuthor = (document.getElementById("newAuthor") as HTMLInputElement).value;
  const newYear = (document.getElementById("newYear") as HTMLInputElement).value;

  const formData = new FormData();
  formData.append("title", newBook);
  formData.append("description", newDesc);
  formData.append("price", newPrice.toString());
  formData.append("author", newAuthor);
  formData.append("year", newYear);

  if (this.editingId) {
    formData.append("id", this.editingId);
    this.http.put(this.APIUrl + 'EditBook', formData).subscribe(data => {
      alert(data);
      this.refreshBooks();
      this.editingId = null;
    });
  } else {
    this.http.post(this.APIUrl + 'AddBook', formData).subscribe(data => {
      alert(data);
      this.refreshBooks();
    });
  }
}



  deleteBook(id: any) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe(data => {
      alert(data);
      this.refreshBooks();
    });
  }

  editBook(book: any) {
    // Pre-fill form
    (document.getElementById("newBook") as HTMLInputElement).value = book.title;
    (document.getElementById("newDesc") as HTMLInputElement).value = book.desc;
    (document.getElementById("newPrice") as HTMLInputElement).value = book.price;
    (document.getElementById("newAuthor") as HTMLInputElement).value = book.author;
    (document.getElementById("newYear") as HTMLInputElement).value = book.year;

    this.editingId = book.id; // store ID
  }

  editBookData: any = {};

  startEdit(book: any) {
    this.editingId = book.id;
    this.editBookData = { ...book }; // clone book data
  }

  cancelEdit() {
    this.editingId = null;
    this.editBookData = {};
  }

  saveEdit() {
    const formData = new FormData();
    formData.append("id", this.editingId!);
    formData.append("title", this.editBookData.title);
    formData.append("description", this.editBookData.desc);
    formData.append("price", this.editBookData.price.toString());
    formData.append("author", this.editBookData.author);
    formData.append("year", this.editBookData.year.toString());

    this.http.put(this.APIUrl + 'EditBook', formData).subscribe(data => {
      alert(data);
      this.refreshBooks();
      this.cancelEdit();
    });
  }

}
