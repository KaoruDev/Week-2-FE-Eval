$(document).ready(function () {
	
	var bookTempHtml = $("#templates .book").html();
	var bookTemplate = _.template(bookTempHtml);

	window.Library = function () {
		var self = this;

		this.books = [
		  {
 		    title: 'Title',
	        author: 'AUTHOR',
	        status: 'available'
	      },
	      {
		    title: 'LOTR',
            author: 'DIFFAUTHOR',
		    status: 'available'
		  }
     	];
		this.addBook = function (new_book) {
			new_book.status = "available";
			this.books.push(new_book);
		};
		this.getBook = function (title) {
			for(var i=0; i < this.books.length; i++) {
				if(this.books[i].title === title) {
					return this.books[i];
				}
			}
		};
		
		this.render = function () {
			$("#library").empty();
			for(var i = 0; i < this.books.length; i++) {
		        var newLibHtml = bookTemplate(this.books[i]);
		        $("#library").append(newLibHtml);
		    }

		    $(".chkBtn").on('click', function () {
		    	var title = $(this).data("title");
		    	var book = self.getBook(title);
		    	book.status = "checkedOut";
				self.render();
		    });
		};

		this.checkoutBook = function(title) {
			for(var i = 0; i < this.books.length; i++) {
				var book = this.books[i];
				if(book.title.toLowerCase() === title.toLowerCase() && book.status === "available") {
					book.status = "checkedOut";
					return book;
				}
			}
		};
	};

    $("#subBut").click(function () {
		var title = $("#title").val();
		var author = $("#author").val();
		var status = $("#status").val();

		var newLibHtml = bookTemplate({title: title, author: author, status: status});
		$("#library").append(newLibHtml);
	});
});