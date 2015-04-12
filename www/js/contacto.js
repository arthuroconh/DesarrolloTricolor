function formulario(f) {
		if (f.nombre.value  == '') { alert ('El Nombre esta vacio');
				f.nombre.focus(); return false; }
		if (f.Email.value  == '') { alert ('El Email esta vacío');
			f..focus(); return false; } 
		if (f.asunto.value  == '') { alert ('El Asunto esta vacío');
			f.asunto.focus(); return false; }
		if (f.mensaje.value  == '') { alert ('El Mensaje esta vacío');
			f.mensaje.focus(); return false; }
		alert("Mensaje Enviado");
		return true;
		 }