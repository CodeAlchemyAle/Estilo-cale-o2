function agregarResena() {
    const textoResena = document.getElementById('nueva-resena').value;
    if (textoResena.trim() === "") return;

    const reseñaContainer = document.getElementById('resenas-container');
    const reseñaDiv = document.createElement('div');
    reseñaDiv.className = 'resena';
    reseñaDiv.innerHTML = `
        <p>${textoResena}</p>
        <button onclick="editarResena(this)">Editar</button>
        <button onclick="eliminarResena(this)">Eliminar</button>
    `;

    reseñaContainer.appendChild(reseñaDiv);
    document.getElementById('nueva-resena').value = '';
}

function editarResena(button) {
    const reseñaDiv = button.parentNode;
    const textoActual = reseñaDiv.querySelector('p').innerText;
    const nuevoTexto = prompt("Editar reseña:", textoActual);
    if (nuevoTexto) {
        reseñaDiv.querySelector('p').innerText = nuevoTexto;
    }
}

function eliminarResena(button) {
    const reseñaDiv = button.parentNode;
    reseñaDiv.remove();
}
