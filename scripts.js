let encrypt_button = document.getElementById("button_encrypt");
let decrypt_button = document.getElementById("button_decrypt");
let copy_button = document.getElementById("button_copy");
let input_text = document.getElementById("input_text_encrypt");
let output_text = document.getElementById("output_text_decrypt");
let parent_container = document.querySelector(".result");

function enable_buttons() {
    // Habilitar botones de cifrado
    encrypt_button.disabled = false;
    decrypt_button.disabled = false;
}

function enable_copy_button() {
    // Habilitar botón de copiar
    copy_button.disabled = false;
}

function update_page() {
    // Elimina el mensaje de ausencia de texto a cifrar
    if (input_text.value !== "") {
        parent_container.classList.remove("no_text");
    }
    input_text.focus();
}

function custom_alerts(message) {
    // Mostrar alertas con mensajes personalizados
    var alert = document.getElementById('custom-alert');
    alert.innerHTML = message;
    alert.style.display = 'block';
    setTimeout(function() {
        alert.style.display = 'none';
    }, 3000); // Ocultar alert después de 3 segundos
}

function focus_text_area() {
    // Enfocar el área de texto
    input_text.focus();
}

function encrypt_message() {
    if (input_text.value !== "") {
        // Se usa una regex (expresión regular) para verificar que el texto sea válido.
        // Válido es que solo tenga minúsculas y espacios
        let regex_lower_space = /^[a-z\s]+$/;

        if (regex_lower_space.test(input_text.value)) {
            let encrypted_message = input_text.value;
            // Se reemplazan las vocales con las claves definidas
            encrypted_message = encrypted_message.replace(/e/g, "enter");
            encrypted_message = encrypted_message.replace(/i/g, "imes");
            encrypted_message = encrypted_message.replace(/a/g, "ai");
            encrypted_message = encrypted_message.replace(/o/g, "ober");
            encrypted_message = encrypted_message.replace(/u/g, "ufat");
            // Se muestra el texto cifrado en la caja respectiva
            output_text.innerHTML = encrypted_message;
            output_text.value = encrypted_message;
            update_page();
        } else {
            custom_alerts("Por favor escribe un texto válido, solo letras minúsculas y espacios.");
            focus_text_area();
        }
    } else {
        custom_alerts("Por favor escribe un texto.");
        focus_text_area();
    }
}

function decrypt_message() {
    if (input_text.value !== "") {
        let decrypted_message = input_text.value;
        // Se reemplazan las claves definidas con las vocales originales
        decrypted_message = decrypted_message.replace(/enter/g, "e");
        decrypted_message = decrypted_message.replace(/imes/g, "i");
        decrypted_message = decrypted_message.replace(/ai/g, "a");
        decrypted_message = decrypted_message.replace(/ober/g, "o");
        decrypted_message = decrypted_message.replace(/ufat/g, "u");
        // Se muestra el texto descifrado en la caja respectiva
        output_text.innerHTML = decrypted_message;
        output_text.value = decrypted_message;
        update_page();
    } else {
        custom_alerts("Para desencriptar un mensaje, usa la caja de texto.");
        focus_text_area();
    }
}

function copy_message() {
    if (output_text.value !== "") {
        // Se copia el contenido al portapapeles
        navigator.clipboard.writeText(output_text.value).then(() => {
            custom_alerts("Mensaje copiado!");
        }, () => {
            custom_alerts("No se pudo copiar el mensaje.");
        });
    } else {
        custom_alerts("No hay nada que copiar!");
    }
}

// Asignar funciones a los eventos de los botones
encrypt_button.onclick = encrypt_message;
decrypt_button.onclick = decrypt_message;
copy_button.onclick = copy_message;
input_text.oninput = enable_buttons;

// Inicializar el estado de los botones
enable_buttons();
