/**
*  jQuery listen for clicks and interaction
*
*/
$(document).ready(function(){

	liveSettings = {};
	liveSettings.cloudIP = "http://localhost:8822";
	liveSettings.localIP = "http://localhost:8822";
	liveSettings.localURL = "http://localhost/aboynejames/test/dsensor/electronwallet/resolutionwallet/src/index.html";
	liveSettings.DmapURL = "http://localhost/aboynejames/test/dsensor/dapp/";
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
				$("#ptop-view").hide();
				$("#dmap-view").hide();
				$("#sensor-data").hide();
				$("#mindmap").hide();
				$("#being").hide();
				$("#ourworld").hide();
				$("#stream").hide();

			break;

			case "urllink":

				var buildurl = $(idclick).attr('href');
				window.open(buildurl);

			break;

			case "connectDHT":
				//send a message to server to connect to peer to peer Network
				socketpi.emit('LKN', 'start');

			break;

			case "seedDHT":
				//send a message to server to connect to peer to peer Network
				socketpi.emit('LKN', 'seed');

			break;

			case "get-lkn":
				//send a message to server to connect to peer to peer Network
				socketpi.emit('LKN', 'get-latest');

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

			case "readmDHT":
				//send a message to server to connect to peer to peer Network
				socketpi.emit('LKN', 'readm');

			break;

			case "gaiasoul-me-view":

				$("#being").show();
				$("#ourworld").hide();
				$("#stream").hide();
				$("#mindmap").hide();
				$("#ptop-view").hide();
				$("#authorisation").hide();

			break;

			case "gaiasoul-ourworld-view":
				$("#ourworld").show();
				$("#being").hide();
				$("#stream").hide();
				$("#mindmap").hide();
				$("#ptop-view").hide();
				$("#authorisation").hide();

			break;

			case "gaiasoul-stream-view":

				$("#stream").show();
				$("#being").hide();
				$("#ourworld").hide();
				$("#mindmap").hide();
				$("#ptop-view").hide();
				$("#authorisation").hide();

				var streamSummary = '';

				streamSummary += '<section class="life-stream" id="context-life-stream"></section>';

				$("#stream-dmaps ol").append(streamSummary);

				// context

				//life
				var DmapsLife = '';

				DmapsLife += '<section id="dmaps-order">';
				DmapsLife += '<ul>';
				DmapsLife += '	<li>';
				DmapsLife += '	</li>';
				DmapsLife += '</ul>';
				DmapsLife += '</section>';

				$("#context-life-stream").html(DmapsLife);

			break;

			case "gaiasoul-mindmap-view":

				$("#mindmap").show();
				$("#being").hide();
				$("#ourworld").hide();
				$("#stream").hide();
				$("#ptop-view").hide();
				$("#authorisation").hide();
				//mainstart();

			break;

			case "sensor-list":

				$("#sensor-data").show();
				$("#dmap-view").hide();
				$("#mindmap").hide();
				$("#being").hide();
				$("#ourworld").hide();
				$("#stream").hide();
				$("#ptop-view").hide();
				$("#authorisation").hide();

				// get history of smart contracts registered


			break;

			case "dmap-list":

				$("#dmap-view").show();
				$("#sensor-data").hide();
				$("#mindmap").hide();
				$("#being").hide();
				$("#ourworld").hide();
				$("#stream").hide();
				$("#ptop-view").hide();
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

			case "dmap-existing-call":
				//  call the localdata get SCID's for dmaps
				socketpi.emit('walletlive', 'resolution-dmaps');

			break;

			case "dmap-add":

				$("#dmap-add-new").show();

				var newformdmap = $("#dmap-template-form").html();
				$("#dmap-live-form").html(newformdmap);
				// add buttons for form
				dmapbuttons = '';
				dmapbuttons += '<button class="submit" type="submit"  id="dmap-save-new-mapping" >Save</button>';
				dmapbuttons += '<button class="submit" type="submit" id="dmap-test-new-research" >Test Research</button>';
				dmapbuttons += '<button class="submit" type="submit" id="dmap-roll-new-mapping" >Roll out to Network</button>';

				$("#dmap-add-button").html(dmapbuttons);

			break;

			case "sensor-data-add":

				$("#sensor-data-add-new").show();
//console.log($("#sensor-data-add-new").show());
				var newformsensor = $("#sensor-data-template-form").html();
//console.log(newformsensor);
				//$("#sensor-data-add-new").html(newformsensor);
				$("#sensor-data-template-form").show();

					var checkboxmeasure = '';
					checkboxmeasure += '<li>';
					checkboxmeasure += '		<fieldset id="add-sensor-measurements">';
					checkboxmeasure += '		<label>Types of Measuring Sensors</label>';
					checkboxmeasure += '			<li><input id="add-acc-sensor" type="checkbox"  value="acc" /> Accellerometer </li>';
					checkboxmeasure += '			<li><input id="add-temp-sensor" type="checkbox"  value="temp" /> Temperature </li>';
					checkboxmeasure += '			<li><input id="add-irlight-sensor" type="checkbox"  value="irlight" /> IR light </li>';
					checkboxmeasure += '			<li><input id="add-centrifuge-sensor" type="checkbox"  value="irlight" /> Centrifuge </li>';
					checkboxmeasure += '			<li>Add another measuring sensor</li>';
					checkboxmeasure += '	</fieldset>';
					checkboxmeasure += '</li>';
					checkboxmeasure += '<div id="sensor-data-add-button"></div>';
					$("#checkbox-new").html(checkboxmeasure);
					//$("#sensor-data-add-button").html('<button class="submit" type="submit" id="sensor-data-save">Add Sensor & Register on Blockchain</button>');

			break;

			case "ptop-list":
				$("#ptop-view").show();
				$("#dmap-view").hide();
				$("#sensor-data").hide();
				$("#mindmap").hide();
				$("#being").hide();
				$("#ourworld").hide();
				$("#stream").hide();
				$("#authorisation").hide();

			break;

			case "refresh-sensor-list":
				//socketpi.emit('ethereumAPI', 'recall-sensor-contract');
				socketpi.emit('walletlive', 'resolution-wallet');

			break;

			case "safe-token-call":
				socketpi.emit('ethereumAPI', 'storageapi-safe-token');

			break;

			case "safe-permission-list":

			var permissionlistLive = '';

			permissionlistLive += '<section id="safe-permission-history">';
			permissionlistLive += '<ul>';
			permissionlistLive += '	<li>';
			permissionlistLive += '	</li>';
			permissionlistLive += '</ul>';
			permissionlistLive += '</section>';

			$("#permssion-safe-list").html(permissionlistLive);

			break;

			case "ethereum-set":
				var ekey = $("input#connect-ethpk").val();//'52bddcd1897e2b7516b2218e69fda38c017c29b9';
console.log(ekey);
				startethereum = {};
				startethereum['set-key'] = 'public';
				startethereum['set-public'] = ekey;
				socketpi.emit('ethereumAPI', startethereum);

			break;

			case "sensor-update-amiigo":

				socketpi.emit('sensorAPI', 'amiigo-sensor-upate');

			break;

			case "sensor-update-23andme":
				socketpi.emit('sensorAPI', '23andme-gene');

			break;
			/*
			*  Dapp connectiviity control
			*/
			case"dshare":
				var dshareidstatus = $("#dshare").data("dshare-status");
				if(dshareidstatus == "on")
				{
					$("#dshare-api").show();
					$("#dshare").data("dshare-status", "off");
				}
				else
				{
					$("#dshare-api").hide();
					$("#dshare-api-add").hide();
					$("#dshare").data("dshare-status", "on");
				}
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

	// listen for interaction with dsensor data smart contracts
	$("#sensor-data-list").click(function(e) {
		e.preventDefault(e);
		var targetclick = e.target;
console.log(targetclick);
console.log($(targetclick).attr("id"));
console.log($(targetclick).attr("class"));
			var returnData = {};
			var sensorContractID = $(targetclick).data("smartcsensor");
			var storageContract = $(targetclick).data("permcontractid");
			var storageHistContract = $(targetclick).data("perhistorysm");

		if($(targetclick).attr("id") == "sensor-check" )
		{
			returnData.type = 'check-sensor-data';
			returnData.scid = sensorContractID;
			socketpi.emit('sensorAPI', returnData);

		}
		else if($(targetclick).attr("id") == "sensor-upload" )
		{
			returnData.type = 'upload-sensor-data';
			returnData.scid = sensorContractID;
			socketpi.emit('sensorAPI', returnData);

		}
		else if ($(targetclick).attr("id") == "sensor-permission")
		{
			returnData.type = 'permission-sensor-data';
			returnData.scid = sensorContractID;
			socketpi.emit('sensorAPI', returnData);

		}
		else if ($(targetclick).attr("class") == "get-history-perm")
		{
			returnData.type = 'history-stsensor-data';
			returnData.scid = storageHistContract;
			socketpi.emit('ethereumAPI', returnData);

		}
		else if ($(targetclick).attr("class") == "set-permission-id")
		{
			// show the permission add form
			$("#set-permissions-" + storageContract).show();

		}
		else if ($(targetclick).attr("id") == "set-permission-to")
		{
			var permgrant = $(targetclick).data("permgrantto");
			// update the smart contract for this ID
			var extractEthk = '#set-permissions-' + permgrant + ' input#receiverAddress.form-control';
			var extractPlevel = '#set-permissions-' + permgrant + ' input#permission-level.form-control';
			//send a message with smart contract ID to ptop Network
			var peerPublicEthereum = $(extractEthk).val();
			var permissionLevelask = $(extractPlevel).val();
			var setContractpermission = {};
			setContractpermission.type = 'set-permission';
			setContractpermission.scid = permgrant;
			setContractpermission.pubethk = peerPublicEthereum;
			setContractpermission.plevel = permissionLevelask;
			socketpi.emit('ethereumAPI', setContractpermission);
			// show the permission add form
			$("#set-permissions-" + permgrant).hide();
		}

	});

	// listen for interaction with localdata existing sensors
	$("#sensor-data-live-list").click(function(e) {

		e.preventDefault(e);
		var targetclick = e.target;
console.log(targetclick);
console.log($(targetclick).attr("id"));
console.log($(targetclick).attr("class"));
			var returnData = {};
			var sensorContractID = $(targetclick).data("smartcsensor");
			var storageContract = $(targetclick).data("permcontractid");
			var storageHistContract = $(targetclick).data("perhistorysm");

		if($(targetclick).attr("id") == "sensor-check" )
		{
			returnData.type = 'check-sensor-data';
			returnData.scid = sensorContractID;
			socketpi.emit('sensorAPI', returnData);

		}

	});

	// button clicks
	$("button").click(function(e) {
		e.preventDefault(e);
console.log('button clicked');
var targetclick = e.target;
console.log(targetclick);
console.log($(targetclick).attr("id"));
console.log($(targetclick).attr("class"));
		if($(targetclick).attr("id") == "upload-genome")
		{
			// present file upload UI
		$("#file-upload-source").show();
		$("#upload").show();
		$("#filedrag").show();

		}
		else if($(targetclick).attr("id") == "network-signin")
		{
			// validate username and password via server(personal cloud mode TOBD)


			// present the public key box
			$("#siginform").hide();
			$("#signed-in").show();
			$("#connectivity").show();



		}

	});


		/*
		*  Dapp connectiviity control
		*
		*/
		$(".D-apis").click(function(e) {
			e.preventDefault(e);
			var $sotgt = $(e.target);
			idclick = $($sotgt).attr("id");
			switch(idclick){

				case"bitcoin-api-status":


				break;

				case"Dsensor-api-status":
					$("#dshare-api-add").show();
					$("#Dsensor-api-status").text('live');
					$("#Dsensor-api-status").css("background-color", "green");

				break;

				case"ethereum-api-status":

				break;

				case"maidsafe-api-status":

				break;
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

	// intereaction with Dmaps
	$("#dmap-add-button").click(function(e) {
		e.preventDefault(e);
		var targetclick = e.target;
	console.log(targetclick);
	console.log($(targetclick).attr("id"));
	console.log($(targetclick).attr("class"));
		if($(targetclick).attr("id") == "dmap-roll-new-mapping" )
		{
			// extract the form details
			// still need to setup Dmap for this research (check for collaborative context ie existing work toDO)
			var DmapNew = {};
			var DmapInfo = {};
			// extract sensor details form or auto via bluetooth firmware call
			var dmapRname = $("input#dmap-mapping-name").val();
			var dmapRdescription = $("#dmap-mapping-description").val();
			var dmapRdatam1 = $("select#dmap-mapping-build").val();
			var dmapRdatam2 = $("select#dmap-mapping-build-second").val();
			var dmapRgitrepo = $("input#mapping-code-github").val();
			var dmapRgithash = $("input#mapping-code-githubhash").val();
			var dmapRvisualisation1 = $("input#3d-human").val();
			var dmapRvisualisation2 = $("input#3d-world").val();
			var dmapRvisualisation3 = $("input#3d-knowledgemap").val();
			var dmapRvisualisation4 = $("input#customchart").val();
			var dmapRvisualisation5 = $("input#datatables").val();
			var dmapRdapp = $("input#dapp-location-directory").val();
			DmapInfo.dmaprname = dmapRname;
			DmapInfo.description = dmapRdescription;  // link to initial thought paper?
			DmapInfo.datamodel1 = dmapRdatam1;
			DmapInfo.datamodel2 = dmapRdatam2;
			DmapInfo.gitrepo = dmapRgitrepo;
			DmapInfo.githash = dmapRgithash;
			DmapInfo.visualisation = dmapRvisualisation1;
			DmapInfo.dapp = dmapRdapp;

			var DmapInputDetails = {};
			DmapInputDetails.type = 'dmap-add';
			DmapInputDetails.info = DmapInfo;
			socketpi.emit('ethereumAPI', DmapInputDetails);
			// remove the form
			$("#dmap-live-form").empty();
			$("#dmap-add-button").empty();

		}
		else if($(targetclick).attr("id") == "dmap-test-new-research" )
		{
			// still need to setup Dmap for this research (check for collaborative context ie existing work toDO)
			var DmapresearchNew = {};
			var DmapresearchInfo = {};
			// extract sensor details form or auto via bluetooth firmware call
			var dmapRname = $("input#dmap-mapping-name").val();
			var dmapRdescription = $("#dmap-mapping-description").val();
			var dmapRdatam1 = $("select#dmap-mapping-build").val();
			var dmapRdatam2 = $("select#dmap-mapping-build-second").val();
			var dmapRgitrepo = $("input#mapping-code-github").val();
			var dmapRgithash = $("input#mapping-code-githubhash").val();
			var dmapRvisualisation1 = $("input#3d-human").val();
			var dmapRvisualisation2 = $("input#3d-world").val();
			var dmapRvisualisation3 = $("input#3d-knowledgemap").val();
			var dmapRvisualisation4 = $("input#customchart").val();
			var dmapRvisualisation5 = $("input#datatables").val();
			var dmapRdapp = $("input#dapp-location-directory").val();
			DmapresearchInfo.dmaprname = dmapRname;
			DmapresearchInfo.description = dmapRdescription;  // link to initial thought paper?
			DmapresearchInfo.datamodel1 = dmapRdatam1;
			DmapresearchInfo.datamodel2 = dmapRdatam2;
			DmapresearchInfo.gitrepo = dmapRgitrepo;
			DmapresearchInfo.githash = dmapRgithash;
			DmapresearchInfo.visualisation = dmapRvisualisation1;
			DmapresearchInfo.dapp = dmapRdapp;

			DmapresearchNew.type = 'dmap-add-research';
			DmapresearchNew.info = DmapresearchInfo;
			socketpi.emit('ethereumAPI', DmapresearchNew);
			// remove the form
			$("#dmap-live-form").empty();
			$("#dmap-add-button").empty();

		}
		else if($(targetclick).attr("id") == "refresh-dmap-list" )
		{
			socketpi.emit('ethereumAPI', 'recall-dmap-contract');

		}

	});

	// intereaction with live Dmaps
	$("#dmap-live-list").click(function(e) {
		e.preventDefault(e);
		var targetclick = e.target;
console.log(targetclick);
console.log($(targetclick).attr("id"));
console.log($(targetclick).attr("class"));
		var dmaptoVis =  $(targetclick).data("scvisual");

		if($(targetclick).attr("id") == "heart-rate-history" )
		{
			var permissionlistLiveh = '';
			permissionlistLiveh += '<section id="safe-permission-history">';
			permissionlistLiveh += '<ul>';
			permissionlistLiveh += '	<li>';
			permissionlistLiveh += '	</li>';
			permissionlistLiveh += '</ul>';
			permissionlistLiveh += '</section>';

			$("#permssion-heart-list").html(permissionlistLiveh);

		}
		else if($(targetclick).attr("id") == "genome-view-list")
		{


		}
		else if($(targetclick).attr("id") == "dmap-name")
		{
			// PROVIDE SUMMARY FOR DMAP AND EXTERNAL LINK TO DMAP
			var dmapSummary = '';
			dmapSummary += '<section id="dmap-summary">';
			dmapSummary += '<header>Summary</header>';
			dmapSummary += '<div id="dapp-launch-' + dmaptoVis + '"></div>';
			dmapSummary += '<div id="dmap-summary-info' + dmaptoVis + '"></div>';
			dmapSummary += '<div id="dmap-summary-chart' + dmaptoVis + '"></div>';
			dmapSummary += '<div id="dmap-summary-gene' + dmaptoVis + '"></div>';
			dmapSummary += '<div id="dmap-3d-views">3D HUMAN 3D WORLD KNOWLEDGE MAP</div>';
			dmapSummary += '</section>';

			var formIDplacer = "#dmap-summary-" + dmaptoVis;
			$(formIDplacer).html(dmapSummary);
			// get the DMap ID & route to visualisation, is computationally active or needs start or update of compute
			// set placer html for the Dmap or route to 3d human, world or knowledge map
			var dmapchart = '';
			dmapchart += '<section id="future-chartmap">';
			dmapchart += '<header>Chart/Map</header>';
			dmapchart += '<div id="canvas-predict-chart"></div>';
			dmapchart += '<div id="canvas-predict-chart-light"></div>';
			dmapchart += '<div id="canvas-predict-chart-temperature"></div>';
			dmapchart += '</section>';
			$("#dmap-summary-chart").html(dmapchart);

			// hardwire genomic placer html
			var geneviewlist = '';
			geneviewlist += '<section id="gene-list">';
			geneviewlist += '<header>23andme sequence</header>';
			geneviewlist += '<div id="gene-list-23andme"></div>';
			geneviewlist += '</section>';
			$("#dmap-summary-gene").html(geneviewlist);

			var visInfo = {};
			visInfo.type = 'dmap-analysis';
			visInfo.scid = dmaptoVis;
			socketpi.emit('ethereumAPI', visInfo);

		}
		else if($(targetclick).attr("id") == "dapp-launch")
		{
			var dapptoDir =  $(targetclick).data("dappdir");
			var dapptoSCID =  $(targetclick).data("dappscid");
			// open in new browser window and then its over to the dapp to call smart contracts visualisation etc.
			var buildDapperurl = liveSettings.DmapURL + dapptoDir + "/index.html?=" + dapptoSCID;
			window.open(buildDapperurl);

		}
		else if($(targetclick).attr("id") == "send-permission-invite")
		{
				// send direct invite message to this peer
				var invitepk = $("#invite-research-peers li input#research-peer-pubethk").val();
				var invitscid = $(targetclick).data("dmapscid");
				var invitemess = {};
				invitemess.pubethk = invitepk;
				invitemess.scid = invitscid;
				invitemess.type = 'peer-invite';
				socketpi.emit('ethereumAPI', invitemess);

		}
		else if($(targetclick).attr("class") == "invite-peer-form")
		{

			var dmapcontractid =  $(targetclick).data("dmapcontractid");
			// invite list of Peer to join in Researcher (required SM Dmap ID for this researcher)
			var inviteResearchpeers = '';
			inviteResearchpeers += '<header>Peer to Invite:</header>';
			inviteResearchpeers += '<li>';
			inviteResearchpeers += '<label for="research-peer">Eth Pub Key</label>';
			inviteResearchpeers += '<input type="text"  id="research-peer-pubethk" placeholder="" required />';
			inviteResearchpeers += '<button id="send-permission-invite" class="submit" data-dmapscid="'+ dmapcontractid + '" type="submit">Send invite</button> <a href="" id="another-peer-invite" data-dmapcontractid=' + dmapcontractid + '> add</a>';
			inviteResearchpeers += '</li>';

			$("#invite-research-peers").append(inviteResearchpeers);

		}
		else if($(targetclick).attr("id") == "another-peer-invite")
		{
			var dmapcontractid =  $(targetclick).data("dmapcontractid");
			// invite list of Peer to join in Researcher (required SM Dmap ID for this researcher)
			var inviteResearchpeers = '';
			inviteResearchpeers += '<header>Peer to Invite:</header>';
			inviteResearchpeers += '<li>';
			inviteResearchpeers += '<label for="research-peer">Eth Pub Key</label>';
			inviteResearchpeers += '<input type="text"  id="research-peer-pubethk" placeholder="" required />';
			inviteResearchpeers += '<button id="send-permission-invite" class="submit" data-dmapscid="'+ dmapcontractid + '" type="submit">Send invite</button> <a href="" id="another-peer-invite" data-dmapcontractid=' + dmapcontractid + ' > add</a>';
			inviteResearchpeers += '</li>';

			$("#invite-research-peers").append(inviteResearchpeers);

		}

});

	/*
	* listening of context Display Data
	*/
	socketpi.on('startWallet', function (contextdata) {
		// parse out type of contracts, ie. senosr storage dmap compute datamodel, quotes
console.log(contextdata);
		contextdata.forEach(function(singlecontract){

			var startsensorinfo = JSON.parse(singlecontract.info);

			var buildSensorinfo = '';
			buildSensorinfo += '<li class="sensor-list-container" id="sensorid-'+ singlecontract.scid + '" >';
			buildSensorinfo += '<a id="sensor-check"  data-smartcsensor="' + contextdata.scid + '" href="" class="check-sensor-holder">Check</a>';
			//buildSensorinfo += '<a id="sensor-upload"  data-smartcsensor="' + newSensorcontractID + '" href=""> UPLOAD </a>';
			buildSensorinfo += '<span class="sensor-name-holder" id="sensor-name">' + startsensorinfo.devicename + '</span>';
			buildSensorinfo += '<div class="storage-content-holder" id="storage-holder-'+ singlecontract.scid + '"></div>';
			buildSensorinfo += '</li>';

			$("#sensor-data-live-list ul").append(buildSensorinfo);

		});

	});

	socketpi.on('dmapWallet', function (contextdata) {
	// parse out type of contracts, ie. senosr storage dmap compute datamodel, quotes
		contextdata.forEach(function(singlecontract){

			var startDmapinfo = JSON.parse(singlecontract.info);

			var buildDmapinfo = '';
			buildDmapinfo += '<li class="dmap-holder" id="dmapid-'+ singlecontract.scid + '" >';
			buildDmapinfo += '<div class="dmap-name-holder"><a id="dmap-name" href="" data-scvisual="' + singlecontract.scid + '" >LIVE- ' + startDmapinfo.dmaprname + '</a>';
			buildDmapinfo += ' by ----- Prection Score -- Network score -- ';
			buildDmapinfo += '<a class="dmap-history-holder" id="dmap-history-'+ singlecontract.scid + '" href="">History </a>';
			buildDmapinfo += '<a class="invite-peer-form" id="permssion-'+ singlecontract.scid + '" data-dmapcontractid="' + singlecontract.scid + '" href=""> Invite Peers</a></div>';
			buildDmapinfo += '<section id="invite-research-peers"></section>';
			buildDmapinfo += '<section id="dmap-summary-' + singlecontract.scid + '"></section>';
			buildDmapinfo += '</li>';

			$("#dmaps-order").append(buildDmapinfo);
		});

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

	socketpi.on('peerUImessage', function (peerdata) {

		$("#tcpreturn").text(peerdata);

	});

	socketpi.on('dmap-view-data', function (dmapData) {

		var regress = [];
		// pass on to chart, visualisation etc UI UX abilities
		liveChart.scatterPlotMulti('canvas-predict-chart', dmapData, regress);  // UI location, x axis y axis

	});

	socketpi.on('dmap-view-data-light', function (dmapData) {

		var regress = [];
		// pass on to chart, visualisation etc UI UX abilities
		liveChart.scatterPlotTwo('canvas-predict-chart-light', dmapData, regress);
	});

	socketpi.on('dmap-view-data-temperature', function (chartData) {

	var regress = [];
	// pass on to chart, visualisation etc UI UX abilities
	liveChart.scatterPlot('canvas-predict-chart-temperature', chartData, regress);

	});

	// gene data flow
	socketpi.on('dmap-view-data-gene', function (geneData) {

	$("#gene-list-23andme").text(geneData.genotype);

	});

	var trackTimestamp = 0;
	// message listening
	socketpi.on('new-message-file', function (newFile) {

		// keep track of last time only display if new-sensor
		var content = JSON.parse(newFile);
		var messText = JSON.parse(content.value);
		var timeM = new Date(content.timestamp);

		if(content.timestamp > trackTimestamp)
		{
			var prepmessage = '';
			prepmessage += '<li id=" ' + newFile.key + ' + ">';
			prepmessage += '<div><a href="" id="" >' + messText.text  + '</a> Time ' + timeM +'</div>';
			prepmessage += '</li>';
			$("#network-messages").prepend(prepmessage);
			trackTimestamp = content.timestamp;
		}

	});

	// message listening
	socketpi.on('dmap-contract-new', function (newDmapcontractID) {
		// add to current Dmap UI list
		var buildDmapinfo = '';
		buildDmapinfo += '<li id="dmapid-'+ newDmapcontractID.scid + '" >';
		buildDmapinfo += 'LIVE';
		buildDmapinfo += '<a id="dmap-name" href="" data-scvisual="' + newDmapcontractID.scid + '" >' + newDmapcontractID.info.dmaprname + '</a> by ABOYNEJAMES Prection Score -- Network score --';
		buildDmapinfo += '<a id="dapp-launch" data-dappscid="' + newDmapcontractID.scid + '" href=""> Launch Dapp </a>';
		buildDmapinfo += '<a id="dmap-history-'+ newDmapcontractID.scid + '" href=""> History </a>';
		buildDmapinfo += '</li>';

		$("#dmaps-order").append(buildDmapinfo);

	});

	// message listening
	socketpi.on('dmapresearch-contract-new', function (newDmapcontractID) {
		// add to current Dmap UI list
		var buildDmapinfo = '';
		buildDmapinfo += '<li class="dmap-holder" id="dmapid-'+ newDmapcontractID.scid + '" >';
		buildDmapinfo += '<div class="dmap-name-holder"><a id="dmap-name" href="" data-scvisual="' + newDmapcontractID.scid + '" >LIVE- ' + newDmapcontractID.info.dmaprname + '</a>';
		buildDmapinfo += ' by ----- Prection Score -- Network score -- ';
		buildDmapinfo += '<a class="dmap-history-holder" id="dmap-history-'+ newDmapcontractID.scid + '" href="">History </a>';
		buildDmapinfo += '<a class="invite-peer-form" id="permssion-'+ newDmapcontractID.scid + '" data-dmapcontractid="' + newDmapcontractID.scid + '" href=""> Invite Peers</a></div>';
		buildDmapinfo += '<section id="invite-research-peers"></section>';
		buildDmapinfo += '<section id="dmap-summary-' + newDmapcontractID.scid + '"></section>';
		buildDmapinfo += '</li>';

		$("#dmaps-order").append(buildDmapinfo);

	});

	socketpi.on('dapp-summary-out', function (liveDappinfo) {
		// form dapp info.
			dappSummary = '';
			dappSummary += '<a id="dapp-launch" data-dappscid="' + liveDappinfo.scid + '"  data-dappdir="' + liveDappinfo.dappdir + '" href=""> Launch Dapp </a>';
			var formscidpath = "#dapp-launch-" + liveDappinfo.scid;
			$(formscidpath).html(dappSummary);

	});

	socketpi.on('sensor-contract-new', function (newSensorcontractID) {
		// add to current Dmap UI list
		var buildSensorinfo = '';
		buildSensorinfo += '<li class="sensor-list-container" id="sensorid-'+ newSensorcontractID.scid + '" >';
		buildSensorinfo += '<div class="check-sensor-holder"><a  id="sensor-check"  data-smartcsensor="' + newSensorcontractID.scid + '" href="">Check</a></div>';
		//buildSensorinfo += '<a id="sensor-upload"  data-smartcsensor="' + newSensorcontractID + '" href=""> UPLOAD </a>';
		buildSensorinfo += '<div class="sensor-name-holder" id="sensor-name">' + newSensorcontractID.info.devicename + '</div>';
		buildSensorinfo += '<div class="storage-content-holder" id="storage-holder-'+ newSensorcontractID.scid + '"></div>';
		buildSensorinfo += '</li>';

		$("#sensor-data-list ul").append(buildSensorinfo);

	});

	socketpi.on('storage-contract-new', function (newStoragecontractID) {
		// temp keep UI list of storage contracts
		liveStoragescid = newStoragecontractID.storagescid;
		// set storage ID for this sensor source
		var buildSensorinfo = '';

		buildSensorinfo += '<div class="get-history-perm" ><a  id="sensor-history-'+ newStoragecontractID.storagescid + '" data-perhistorysm="' + newStoragecontractID.storagescid + '" href="">History </a>';
		buildSensorinfo += '<div id="phistory-holder-'+ newStoragecontractID.storagescid + '"></div></div>';
		buildSensorinfo += '<div class="set-permission-id">';
		buildSensorinfo += '<a id="sensor-permssion-'+ newStoragecontractID.storagescid + '" data-permcontractid="' + newStoragecontractID.storagescid + '"> Set Permission</a>';
		buildSensorinfo += '<div id="set-permissions-' + newStoragecontractID.storagescid + '">';
		buildSensorinfo += '	<input id="receiverAddress" class="form-control" type="text" placeholder="Receiver address"></input><br>';
		buildSensorinfo += '	<input id="permission-level" class="form-control" type="text" placeholder="Level"></input><br>';
		buildSensorinfo += '	<button id="set-permission-to" data-permgrantto="' + newStoragecontractID.storagescid + '">Grant Permission To</button>';
		buildSensorinfo += '</div>';
		buildSensorinfo += '<div id="ask-permission-identity">';
		buildSensorinfo += '	<ol>';
		buildSensorinfo += '		<li>Identities asking for permission access</li>';
		buildSensorinfo += '	</ol>';
		buildSensorinfo += '</div>';
		buildSensorinfo += '</div>';

		$("#storage-holder-" + newStoragecontractID.sensorscid).append(buildSensorinfo);
		$("#set-permissions-" + newStoragecontractID.storagescid).hide();

	});

	socketpi.on('storage-history-plist', function (historyplist) {
		// built history list HTML
		var permlisthist = '';
		permlisthist += '<div id="permssion-safe-list">';
		permlisthist += '<section id="safe-permission-history"><ul>';

		historyplist.forEach(function(idaccess) {

			permlisthist += '<li>';
			permlisthist += 'Date: ' + '---' + '' + 'Id-- ' + historyplist.pubketh;
			permlisthist += '</li>';

		});
		permlisthist += '</ul></section></div>';

		// display the code
		$("#phistory-holder-" + historyplist.scid).append(permlisthist);

	});

	socketpi.on('new-sc-notification', function (smartcIN) {
		// build the notification
		// retrieve storage contract for this data model type
		storageContractscid = liveStoragescid;

		if(smartcIN.type == "Peer-invite")
		{
			var scnotice = '';
			scnotice += '<div id="sc-permission-notice">';
			scnotice += 'Smart contract ID = ' + smartcIN.scid;
			scnotice += '<span> Data request: ' + smartcIN.data[0] + '-' + smartcIN.data[1] + '<a href="" id="set-permission-invite" data-pkasker='+ smartcIN.pkasker + '>Permission GRANT </a></span>';

			scnotice += '<select class="select-storage-contract" id="match-storage-scid">';
			scnotice += '	<option value="none" selected="">Please select</option>';
			scnotice += '	<option value="' + storageContractscid + '">' + storageContractscid + '</option>';
			scnotice += '</select>';

			scnotice += ' <a href="" id="check-permssion-status" data-scid=""> Check permission</a>';

			scnotice += '</div>';

			$("#network-messages").append(scnotice);
		}
		if(smartcIN.type == "sendPermission")
		{
			// inform dmapper that smart contract ID of the storage contract they asked for permission
console.log('permission grant storeage contract ID =====');
			var grantnotice = '';

			grantnotice += '<div id="granted-storage-contractid" data-storscid="' + smartcIN.scid + '">Granted by';
			grantnotice += '<a href="" id="data-api-call" data-storscid="' + smartcIN.scid + '">Data API call</a>';
			grantnotice += '</div>';

			$("#network-messages").append(grantnotice);
		}

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
	var savedatatool = {};
	savedatatool.tooltemplate = 'Worldrecord-template';
	savedatatool.lifedata = 777.99;
	livepouch.singleSave(savedatatool);
	var datap = livepouch.allDocs();
console.log('data plsease');
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
