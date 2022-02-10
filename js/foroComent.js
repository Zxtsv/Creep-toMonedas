$("#exampleModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data("whatever"); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find(".modal-title").text("Nueva entrada");
    modal.find(".modal-body input").val(recipient);
});

document.getElementById("Benviar").addEventListener("click", enviars);

var posts = [];

function enviars() {
    // usaremos join para unir los arrays y unshif para agregar el primer elemento arriba

    let title = "<h3>";
    let category = selectCategory();
    title += document.getElementById("comment-title").value + category + "</h3>"; // Extrae el valor del titulo
    let doubt = "<p>";
    doubt += document.getElementById("message-text").value + "</p>"; // Extrae el valor de la duda

    let post =
        "<div class='col-md-9'><div class='right-description893'><div id='que-hedder2983'>" +
        title +
        "</div><div class='ques-details10018'>" +
        doubt +
        "</div><hr></div></div>";

    posts.unshift(post);

    let result = posts.join("");
    document.getElementById("section-publication").innerHTML = result;
    alerta();
}

function alerta() {
    Swal.fire('Tu publicación se ha publicado correctamente');
}


// Bloque de código categoria
function selectCategory(){
    let selection = document.getElementById("exampleFormControlSelect1");
    let boton = "";
    switch (selection.selectedIndex) {
        case 0:
            boton = "<button type='button' class='btn btn-success ms-4 btn-redondeado' id='bttn-categoria'>"+ selection.options[selection.selectedIndex].value +"</button>";
            break;
        case 1:
            boton = "<button type='button' class='btn btn-info ms-4 btn-redondeado' id='bttn-categoria'>"+ selection.options[selection.selectedIndex].value +"</button>";
            break;
        case 2:
            boton = "<button type='button' class='btn btn-dark ms-4 btn-redondeado' id='bttn-categoria'>"+ selection.options[selection.selectedIndex].value +"</button>";
            break;
        default:
            boton = "";
            break;
    }

    return boton;
}

