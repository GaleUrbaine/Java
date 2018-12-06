<html>
  <body>
<script>
    <form name="popup.html">
      <p><input type='text' value='xxxvidsxxx' name="titre">
      <p><input type="setTimeout(function () {

      }, 10);" value="Générer le popup" onclick="popup()">
    </form>

function popup() {
  // ouvre une fenetre sans barre d'etat, ni d'ascenceur
  w=open("",'popup','width=400,height=200,toolbar=no,scrollbars=no,resizable=yes');
  w.document.write("<title>"+document.forms["popup.html"].elements["titre"].value+"</title>");
  w.document.write("<body> "+document.forms["f_popup"].elements["nom"].value+"<br><br>");
  w.document.write("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please ");
  w.document.write("</body>");
  w.document.close();
}
</script>
  </body>
</html>
