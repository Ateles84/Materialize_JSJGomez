/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

$(document).ready(function(){
    $('.sidenav').sidenav();
  //  $('.barra-busca').on("input", buscaArtista());
});

function buscaArtista() {
    eliminarInecesaris();
    var aux, ul;
    aux = document.getElementById('search');
    var input;
    if (aux != null) {
      if (aux.value == "") {
        return;
      } else {
        input = aux.value;
      }
    }
    else {
      input = "Queen";
    }

    ul = document.getElementById("llistaUL");
    console.log(input);
    $.ajax({
      method: "GET",
      url: "https://musicbrainz.org/ws/2/artist?query="+input,
  dataType: "json",   // necessitem això pq ens retorni un objecte JSON
}).done(function (msg) {
  for(var item in msg.artists) {

    console.log(msg.artists[item]);
    var li = document.createElement("li");
    var text = msg.artists[item].name;
    li.appendChild(document.createTextNode(text));
    li.setAttribute("class", "collection-item");
    ul.appendChild(li);
};
}).fail(function () {
    alert("ERROR");
});
}

function eliminarInecesaris() {
    var ul = document.getElementById("llistaUL");
    ul.innerHTML = '';
}



app.initialize();
