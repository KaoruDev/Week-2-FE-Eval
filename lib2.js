$(document).ready(function(){
	window.Library = function(){
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
		this.addBook = function(new_book){
			new_book.status = "available";
			this.books.push(new_book);
		};
		this.getBook = function(title){
			for(var i=0;i < this.books.length; i++){
				if(this.books[i].title === title){
					return this.books[i];
				};
			}
		};
		
		this.render = function(){
			$("#library").text("");
			var libTempHtml = $("#templates .book").html();
			var libTemplate = _.template(libTempHtml);
			for(var i = 0; i < this.books.length; i++){
		        var newLibHtml = libTemplate({title: this.books[i].title, author: this.books[i].author, status: this.books[i].status});
		        $("#library").append(newLibHtml);
		    }

		    $(".chkBtn").click(function(){
		    	title = $(this).data("title");
				for(i = 0; i < passBooks.length; i++){
					if (self.books[i].title === title && self.books[i].status === "available"){
						self.books[i].status = "checkedOut";
						self.render();
					};
				}
		    });
		};

		this.checkoutBook = function(title){
			for(var i = 0; i < this.books.length; i++){
				if(this.books[i].title.toLowerCase() === title.toLowerCase() && this.books[i].status === "available"){
					this.books[i].status = "checkedOut";
					return this.books[i];
				};
			}
		};
	};

	var libTempHtml = $("#templates .book").html();
	var libTemplate = _.template(libTempHtml);

    $("#subBut").click(function(){
		var title = $("#title").val();
		var author = $("#author").val();
		var status = $("#status").val();

		var newLibHtml = libTemplate({title: title, author: author, status: status});
		$("#library").append(newLibHtml);
	});
});