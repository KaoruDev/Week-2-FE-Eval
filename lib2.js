$(document).ready(function(){
	window.Library = function(){
		this.books = [];
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
			var libTempHtml = $("#templates .book").html();
			var libTemplate = _.template(libTempHtml);
			for(var i = 0; i < this.books.length; i++){
		        var newLibHtml = libTemplate({title: this.books[i].title, author: this.books[i].author, status: this.books[i].status});
		        $("#library").append(newLibHtml);
		     }
		};
	};



    $("#subBut").click(function(){
		var title = $("#title").val();
		var author = $("#author").val();
		var status = $("#status").val();

		var newLibHtml = libTemplate({title: title, author: author, status: status});
		$("#library").append(newLibHtml);
	});
});