function consultaCEP() {
      var xhr = new XMLHttpRequest ();
      xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  //document.getElementById('output').innerHTML = xhr.responseText;
                  var data = JSON.parse (xhr.responseText);
                  document.getElementById('output').innerHTML = data.logradouro + ' - ' + data.cidade + ' - ' + data.bairro;
              }
              else if (xhr.status === 404) {
                  document.getElementById('output').innerHTML = xhr.statusText;
                }
                else 
                  document.getElementById('output').innerHTML = 'Erro desconhecido';
            }
         };
         xhr.open ('GET', 'http://api.postmon.com.br/v1/cep/' + document.getElementById('cep').value);
         xhr.send();
      }