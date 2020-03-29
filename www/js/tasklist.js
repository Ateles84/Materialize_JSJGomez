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

function afegirTasca() {
    //alert("hello");

    var text = prompt("Nova tasca: ");

    var nou_elem = $("<li><a class = 'ui-btn ui-btn-icon-right ui-icon-carat-r' href= ''>"+text+"<button id = 'btnEsborrar'>Esborra</button></a></li>");

    $('button',nou_elem).click(esborrarTasca);
    $("#llista").append(nou_elem);

    localStorage.setItem(text, text);
}

function afegirTascaLocalStorage(text) {
    var nou_elem = $("<li><a class = 'ui-btn ui-btn-icon-right ui-icon-carat-r' href= ''>"+text+"<button id = 'btnEsborrar'>Esborra</button></a></li>");

    $('button',nou_elem).click(esborrarTasca);
    $("#llista").append(nou_elem);

}

function esborrarTasca(event) {

    $(event.target).parent().parent().remove(); //Versio jquery

}

function allStorage() {

    return Object.keys(localStorage);

}

var app = {
    // Application Constructor
    initialize: function() {
        //document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        var keys = allStorage();
        for (var i = 0; i < keys.length; i++) {
          afegirTascaLocalStorage(localStorage.getItem(keys[i]));
        }
    }
};

app.initialize();
