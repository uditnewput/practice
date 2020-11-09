  function initializer(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (xhttp.readyState == 4 && xhttp.status == 200){
        var obj = JSON.parse(xhttp.responseText);
        midFunc(obj.items);
      }
    }
    xhttp.open("GET", "https://www.googleapis.com/books/v1/volumes?q=harry+potter", true);
    xhttp.send();
  };

  function midFunc(data){
    for(let i = 0; i<data.length;i++){
      books(data[i]);
    }
  }

  var finalBookList=[];

  function books(b){
    function getTitle(t){
      var t = t.volumeInfo.title;
      t = t.slice(0,38);
      return t;
    }

    function getAuthor(t){
      var a=t.volumeInfo.authors;
      var auth="";

      for(let b =0;b<a.length;b++){

        if(b==0){
          auth = auth +a[b];
        }else{
          auth = auth + ", "+a[b];
        }
      }
      return auth;
    }

    function getDate(t){
      return t.volumeInfo.publishedDate;
    }

    function getDesc(t){
      var str = t.volumeInfo.description;
      if (str.length>300){
        str = str.slice(0,300);
        str = str + "...";
        return str;
      }else{
      return str;
      }
    }

    function getImg(t){
      return t.volumeInfo.imageLinks.thumbnail;
    }

    function getRating(t){
      return t.volumeInfo.averageRating;
    }

    var singleBook={
      "title":getTitle(b),
      "author":getAuthor(b),
      "published":getDate(b),
      "description":getDesc(b),
      "image":getImg(b),
      "rating":getRating(b)
    }
    finalBookList.push(singleBook);
    insertchild(singleBook);
  }

  function insertchild(book){
    var out=document.getElementById("cardss").innerHTML;
    out = out + '<div class="col-sm-6 col-md-4 col-lg-3 mt-4"><div class="card shadow"><div class="card-header bg-primary text-center text-white"><h5>'+ book.title +'</h5></div><img src="' + book.image + '" class="card-img-top img-ht" alt="book"><div class="card-body text-justify overflow-auto card-flow"><small class="text-muted">' + book.published + '</small><p class="card-text">' + book.description + '</p></div><ul class="list-group list-group-flush text-center"><li class="list-group-item author">' + book.author + '</li><li class="list-group-item">Rating - ' + book.rating + '</li></ul><div class="card-body flexx"><a href="#"><i class="fa fa-thumbs-up thumb-size"></i></a><a href="#" class="btn btn-primary">Download</a><a href="#"><i class="fa fa-thumbs-down thumb-size"></i></a></div></div></div>';
    document.getElementById("cardss").innerHTML = out;
  }
