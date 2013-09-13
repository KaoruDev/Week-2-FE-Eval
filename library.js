$(document).ready(function(){

	var books = [
		{
			title: 'TITLE',
			author: 'AUTHOR',
			status: 'avaiable'
		},
		{
		    title: 'DIFFTITLE',
		    author: 'DIFFAUTHOR',
		    status: 'DIFFavailable'
	  	}
  	];

  	var libTempHtml = $("#templates").html();
  	var libTemplate = _.template(libTempHtml);
  	//var newLibHtml = libTemplate({ title: 'Aur', author: "ausdf", status: "asfd" });

  	for(var i = 0; i < books.length; i++){
  		var newLibHtml = libTemplate({title: books[i].title, author: books[i].author, status: books[i].status});
  		$("#library").append(newLibHtml);
  	}
});

