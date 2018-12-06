setTimeout(popup, 10000)

function popup() {
  var txt = confirm('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please')
  if (txt==true) {
    location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
  else {
    txt = null ;
  }
    document.getElementById("demo").innerHTML = txt;
  }
