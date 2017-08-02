/**
*  jQuery listen for clicks and interaction
*
*/
$(document).ready(function(){

	liveSettings = {};
	liveSettings.cloudIP = "http://localhost:8822";
	liveSettings.localIP = "http://localhost:8822";
	liveSettings.localURL = "http://localhost/resolutionwallet/src/index.html";
	liveSettings.DmapURL = "http://localhost/dapp/";
	// connect to socket.io
	var socketpi = io.connect(liveSettings.localIP);
	var liveStoragescid = '';

	$("a").click(function(e) {
		e.preventDefault(e);
		var idclick = $(this).attr("id");
console.log(idclick);
		var cycleid = $("#dht-new-message input#lkn-cycle-message.form-dht").val()

		switch(idclick){

			case "authorisation-in":
				// sign in authorisation
				$("#authorisation").show();
				$("#dmap-view").hide();

			break;
			case "dmap-list":

				$("#dmap-view").show();
				$("#k-in-form").hide();
				$("#authorisation").hide();

				var DmapsLive = '';

				DmapsLive += '<section id="dmaps-order">';
				DmapsLive += '<ul>';
				DmapsLive += '	<li>';
				DmapsLive += '	</li>';
				DmapsLive += '</ul>';
				DmapsLive += '</section>';

				$("#dmap-live-list").html(DmapsLive);

			break;

			case "urllink":

				var buildurl = $(idclick).attr('href');
				window.open(buildurl);

			break;

			case "get-lkn":
				//send a message to server to connect to peer to peer Network
				socketpi.emit('LKN', 'get-latest');
				$("#network-messages").empty();

			break;

			case "lkn-start-cycle":
				//send a message to server to connect to peer to peer Network
				var messageContent = {};
				var messageNewstring = $("#dht-new-message input#lkn-cycle-message.form-dht").val();
				messageContent.type = 'sendm';
				messageContent.lkn = 'start';
				messageContent.cycleid = messageNewstring;
				messageContent.text = messageNewstring;
				socketpi.emit('LKN', messageContent);

			break;

			case "lkn-validate-datamodel":
				//send a message to server to connect to peer to peer Network
				var messageContent = {};
				var messageNewstring = $("#dht-new-message input#lkn-datamodel-message.form-dht").val();
				messageContent.type = 'sendm';
				messageContent.lkn = 'datamodel';
				messageContent.cycleid = cycleid;
				messageContent.text = messageNewstring;
				socketpi.emit('LKN', messageContent);

			break;

			case "lkn-validate-data":
				//send a message to server to connect to peer to peer Network
				var messageContent = {};
				var messageNewstring = $("#dht-new-message input#lkn-data-message.form-dht").val();
				messageContent.type = 'sendm';
				messageContent.lkn = 'data';
				messageContent.cycleid = cycleid;
				messageContent.text = messageNewstring;
				socketpi.emit('LKN', messageContent);

			break;

			case "lkn-validate-science":
				//send a message to server to connect to peer to peer Network
				var messageContent = {};
				var messageNewstring = $("#dht-new-message input#lkn-science-message.form-dht").val();
				messageContent.type = 'sendm';
				messageContent.lkn = 'science';
				messageContent.cycleid = cycleid;
				messageContent.text = messageNewstring;
				socketpi.emit('LKN', messageContent);

			break;

			case "lkn-validate-compute":
				//send a message to server to connect to peer to peer Network
				var messageContent = {};
				var messageNewstring = $("#dht-new-message input#lkn-compute-message.form-dht").val();
				messageContent.type = 'sendm';
				messageContent.lkn = 'compute';
				messageContent.cycleid = cycleid;
				messageContent.text = messageNewstring;
				socketpi.emit('LKN', messageContent);

			break;

			case "lkn-consensus-value":
				//send a message to server to connect to peer to peer Network
				var messageContent = {};
				var messageNewstring = $("#dht-new-message input#lkn-value-message.form-dht").val();
				messageContent.type = 'sendm';
				messageContent.lkn = 'value';
				messageContent.cycleid = cycleid;
				messageContent.text = messageNewstring;
				socketpi.emit('LKN', messageContent);

			break;


		}
	});
// #sensor-data-add-new  form #sensor_form ul li button #sensor-data-save.submit
		$("#sensor-data-save").click(function(e) {
			e.preventDefault(e);
			var targetclick = e.target;
console.log(targetclick);
console.log($(targetclick).attr("id"));
			if($(targetclick).attr("id") == "sensor-data-save" )
			{
			var sensorNew = {};
			var sensorInfo = {};
			// extract sensor details form or auto via bluetooth firmware call
			var sensorname = $("#sensor_form #add-name-sensor").val();
			var sensorFWid = $("#sensor_form #add-firmware-sensor").val();
			var sensorAcc = $("input#add-acc-sensor").val();
			var sensorTemp = $("input#add-temp-sensor").val();
			var sensorIRlight = $("input#add-irlight-sensor").val();
			var sensorGene = $("input#add-gene-sensor").val();
			sensorInfo.devicename = sensorname;
			sensorInfo.FWid = sensorFWid;
			sensorInfo.Accellerometer = sensorAcc;
			sensorInfo.Temperature = sensorTemp;
			sensorInfo.IRlight = sensorIRlight;
			sensorInfo.gene = sensorGene;
			sensorNew.type = 'sensor-add';
			sensorNew.info = sensorInfo;
			socketpi.emit('ethereumAPI', sensorNew);
			// remove the form
			//$("#sensor_form").hide();
			//$("#sensor-data-save").hide();
			$("#sensor-data-template-form").hide();
		}

	});

	// check permission statusCode
	$("#network-messages").click(function(e) {
		e.preventDefault(e);
console.log('networkmessage block');
		var targetclick = e.target;
console.log(targetclick);
console.log($(targetclick).attr("id"));
console.log($(targetclick).attr("class"));

		if($(targetclick).attr("id") == "check-permssion-status")
		{
			var smartcontract = $(targetclick).data("scid");
			var getContractpermission = {};
			getContractpermission.type = 'get-permission-status';
			getContractpermission.scid = smartcontract;
			//getContractpermission.pubethk = peerPublicEthereum;
			//getContractpermission.plevel = permissionLevelask;
			socketpi.emit('ethereumAPI', getContractpermission);

		}
		else if ($(targetclick).attr("id") == "set-permission-invite")
		{
			var peerPublicEthereum = $(targetclick).data("pkasker");
			// update the smart contract for this ID permssion / token access
			var matchDatamodeltoStorage = $("#match-storage-scid").val();
			//send a message with smart contract ID to ptop Network
			var setContractpermission = {};
			setContractpermission.type = 'set-permission';
			setContractpermission.scid = matchDatamodeltoStorage;
			setContractpermission.pubethk = peerPublicEthereum;
			setContractpermission.plevel = 2;

			socketpi.emit('ethereumAPI', setContractpermission);

		}
		else if ($(targetclick).attr("id") == "data-api-call")
		{
			// call the storage contract, get token and then make API call to SAFE API to get the dataIN



		}
		else if($(targetclick).attr("id") == "urllink")
		{

			var buildurl = $(targetclick).attr('href');
console.log(buildurl);
			window.open(buildurl);

		}

	});

	socketpi.on('dhtlive', function (connect) {

		$("#Dsensor-api-status").text('live');
		$("#Dsensor-api-status").css("background-color", "green");

	});

	socketpi.on('ethconnect-out', function (connect) {

		$("#ethereum-api-status").text('live');
		$("#ethereum-api-status").css("background-color", "green");

	});

	socketpi.on('safe-network', function (connect) {

		$("#maidsafe-api-status").text('live');
		$("#maidsafe-api-status").css("background-color", "green");

	});

	socketpi.on('dmap-view-data', function (dmapData) {

		var regress = [];
		// pass on to chart, visualisation etc UI UX abilities
		liveChart.scatterPlotMulti('canvas-predict-chart', dmapData, regress);  // UI location, x axis y axis

	});


	socketpi.on('new-lkn-message', function (lknmessageIn) {
		// which cycle belongs too?
		if(lknmessageIn.lkn == 'start')
		{
			var lkncycle = '';
			lkncycle += '<div id="lkn-cycle-id" data-cycleid=' + lknmessageIn.cycleid + '>';
			lkncycle += 'Cycle = 1  ID= ' + lknmessageIn.cycleid;
			lkncycle += '<span id="lkn-datamodel-' + lknmessageIn.cycleid + '"> Data Model: </span>';
			lkncycle += '<span id="lkn-data-' + lknmessageIn.cycleid + '"> Data:  </span>';
			lkncycle += '<span id="lkn-science-' + lknmessageIn.cycleid + '"> Science: </span>';
			lkncycle += '<span id="lkn-compute-' + lknmessageIn.cycleid + '"> Compute: </span>';
			lkncycle += '<span id="lkn-value-' + lknmessageIn.cycleid + '"> Value:: </span>';
			lkncycle += '</div>';

			$("#network-messages").append(lkncycle);
		}
		else if(lknmessageIn.lkn == 'datamodel')
		{
			$("#lkn-datamodel-" + lknmessageIn.cycleid).append('<b>' + lknmessageIn.text + '</b>');
		}
		else if(lknmessageIn.lkn == 'data')
		{
			$("#lkn-data-" + lknmessageIn.cycleid).append('<a id="urllink" href="' + lknmessageIn.text + '">Source</a>');
		}
		else if(lknmessageIn.lkn == 'science')
		{
			$("#lkn-science-" + lknmessageIn.cycleid).append('<a id="urllink" href="' + lknmessageIn.text + '">Repo</a>');
		}
		else if(lknmessageIn.lkn == 'compute')
		{
			$("#lkn-compute-" + lknmessageIn.cycleid).append('<b>' + lknmessageIn.text + '</b>');
		}
		else if(lknmessageIn.lkn == 'value')
		{
			$("#lkn-value-" + lknmessageIn.cycleid).append('<b>' + lknmessageIn.text + '</b>');
		}


	});

	livepouch = new pouchdbSettings();
	// save in context of tool knowledge template name
});

(function () {

'use strict';

var $ = document.querySelector.bind(document);

// IndexedDB

var db = new PouchDB('mydb-idb');

db.info().then(function (info) {
$('#idb').innerHTML = '&#10004; We can use PouchDB with IndexedDB!';
}).catch(function (err) {
$('#idb').innerHTML = 'Error for IndexedDB';
});

// WebSQL

var websqlDB = new PouchDB('mydb-websql', {adapter: 'websql'});

websqlDB.info().then(function (info) {
$('#websql').innerHTML = '&#10004; We can use PouchDB with WebSQL!';
}).catch(function (err) {
$('#websql').innerHTML = 'Error for WebSQL';
});

// LevelDB

var NodePouchDB = require('pouchdb');

var leveldbDB = new NodePouchDB('mydb-leveldb');

leveldbDB.info().then(function (info) {
$('#leveldb').innerHTML = '&#10004; We can use PouchDB with LevelDB!';
}).catch(function (err) {
$('#leveldb').innerHTML = 'Error for LevelDB';
});

// node-websql

NodePouchDB.plugin(require('pouchdb-adapter-node-websql'));
var sqliteDB = new NodePouchDB('mydb-sqlite', {adapter: 'websql'});

sqliteDB.info().then(function (info) {
$('#sqlitedb').innerHTML = '&#10004; We can use PouchDB with node-websql (SQLite)!';
}).catch(function (err) {
$('#sqlitedb').innerHTML = 'Error for node-websql (SQLite)';
});

})();
