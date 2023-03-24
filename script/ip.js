function carregar() {
  let ip_sistema = window.document.getElementById('ip-sistema')
        fetch('https://api.ipify.org?format=json')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					if (data.ip == '177.8.250.214') {
                        ip_sistema.src = 'http://192.168.1.100:58080'
                    }
				});
}

document.onload = carregar()