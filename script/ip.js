function carregar() {
  let ip_sistema = window.document.getElementById('ip-sistema')
        fetch('https://api.ipify.org?format=json')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					if (data.ip == 'ipfixo.in:58785') {
                        ip_sistema.src = 'http://192.168.15.166/mmrest/autocliente'
                    }
				});
}

document.onload = carregar()