/**
* LKN validate datamodel
*
* LKN datamodel valication class
*
*
* @package    LKN protocol
* @copyright  Copyright (c) 2017 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/

/**
* DatamodelValid
* @class DatamodelValid
*/
var DatamodelValid = function() {


};

/**
* check compatibilty
* @method validatdString
*
*/
DatamodelValid.prototype.validatdString = function(socket) {

  socket.emit('validate-datamodel', 'passed');

};

module.exports = DatamodelValid;
