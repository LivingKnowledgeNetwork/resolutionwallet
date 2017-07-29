/**
* Self Server
*
* Start node.js  Server
*
* @package    LKN protocol  server bridge to resolution wallet
* @copyright  Copyright (c) 2017 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
const http = require("http");
const url = require("url");
const sio = require('socket.io');
const fs = require('fs');
const util = require('util');
const EventEmitter = require('events').EventEmitter;
const peertopeer = require('./peertopeer.js');
//var pouchdbServer = require('./pouchdb-utility.js');

/**
* controls start of node.js server
* @method start
*
*/
function start(route, handle) {

  //livepouch = new pouchdbServer();
  PeertoPeer = new peertopeer();


	var app = http.createServer(onRequest).listen(8822);
console.log('server up');

	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;

//console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);
	}

	// data for live two way socket data flow for real time display everywhere
		var io = sio.listen(app);

		io.sockets.on('connection', function (socket, server) {

			socket.on("walletlive", function(walletIN){

				if(walletIN == "")
				{


				}

			});

			socket.on('LKN', function(dataIN){

			if(dataIN == "start")
			{
				PeertoPeer.startDHTkad(8816);
				socket.emit('dhtlive', "DHT started");

			}
			else if(dataIN == "seed")
			{
				//PeertoPeer.seedDHTkad();  //now automatic
			}
      if(dataIN == "get-latest")
      {
        PeertoPeer.getKnowledge();
      }
			else if(dataIN == "readm")
			{
				PeertoPeer.readmDHTkad();
			}
			else if(dataIN.type == "sendm")
			{
				PeertoPeer.sendmDHTkad(dataIN);
			}
			else if(dataIN.type == "smartcontractID")
			{
				PeertoPeer.sendmDHTkad(dataIN.pubethk);
			}


		});

		PeertoPeer.on("client-message", function(newMessage) {
				// send data back to client with message
				socket.emit('new-message-file', newMessage);

			});

		PeertoPeer.on("sc-notification", function(newSCnotice) {
			// call ethereum api
			socket.emit('new-sc-notification', newSCnotice);

		});

		PeertoPeer.on("lkn-message", function(newSCnotice) {
			// call ethereum api
			socket.emit('new-lkn-message', newSCnotice);

		});
	});

} // closes start function


exports.start = start;
