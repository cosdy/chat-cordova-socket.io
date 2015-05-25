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
var webSocket = io.connect( 'http://199.175.49.244:3000', {  'reconnect': true, 'reconnection delay':5000,  'max reconnection attempts': 5 });
 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        
		//var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');
		
		webSocket.on('connect', function(){
			
		 });
		 
		 webSocket.on('Welcome', function(data){
			alert(data);
		 });
        
        console.log('Received Event: ' + id);
    }
};

app.initialize();


 webSocket.on('recibe', function(data){
	$("#listado").append("<li class='callout-glyphicons-location'>"+data+"</li>");
	$("#listado").animate({ scrollTop: $('#listado')[0].scrollHeight}, 1000);
});

$(function(){
	
	$(document).on("click", "#enviar", function(){
		var msg = $("#caja").val();
		$("#caja").val("");
		webSocket.emit('enviar', msg);
	});	
});