
let tareas = [];

function nuevoElemento() {
  let input = document.getElementById("input");
  let tareaTexto = input.value.trim();

  if (tareaTexto === "") {
    alert("No puede haber tarea sin título :)");
    return;
  }

  let tarea = {
    texto: tareaTexto,
    completado: false,
    creado: new Date().toLocaleString(),
    id: Date.now(),
  };

  tareas.push(tarea);
  actualizarLista();
  input.value = "";
}

function actualizarLista() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  tareas.forEach((tarea) => {
    let li = document.createElement("li");
    li.textContent = tarea.texto;
    li.setAttribute("data-id", tarea.id);

    if (tarea.completado) {
      li.classList.add("checked");
    }

    let btnCerrar = document.createElement("span");
    btnCerrar.textContent = "×";
    btnCerrar.className = "close";
    btnCerrar.onclick = function () {
      eliminarTarea(tarea.id);
    };

    li.appendChild(btnCerrar);
    lista.appendChild(li);

    li.onclick = function () {
      marcarCompletado(tarea.id);
    };
  });
}

function eliminarTarea(id) {
  tareas = tareas.filter((tarea) => tarea.id !== id);
  actualizarLista();
}

function marcarCompletado(id) {
  tareas = tareas.map((tarea) => {
    if (tarea.id === id) {
      tarea.completado = !tarea.completado;
    }
    return tarea;
  });
  actualizarLista();
}
