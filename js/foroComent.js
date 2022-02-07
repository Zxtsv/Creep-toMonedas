$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Nueva entrada')
    modal.find('.modal-body input').val(recipient)
})

// Evento que envia cada pulsacion de tecla a la nueva ventana
document.getElementById("enviar").addEventListener("keyup",(e)=>{
 
    // Enviamos el texto a la nueva ventana
    document.getElementById("texto").innerHTML=e.currentTarget.value;
});