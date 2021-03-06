/*
 * Songbook API
 * Tourist songs application
 *
 * OpenAPI spec version: 1.5.5
 * Contact: andrzej.przybysz01@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SongbookApi) {
      root.SongbookApi = {};
    }
    root.SongbookApi.UserDTO = factory(root.SongbookApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserDTO model module.
   * @module model/UserDTO
   * @version 1.5.5
   */

  /**
   * Constructs a new <code>UserDTO</code>.
   * @alias module:model/UserDTO
   * @class
   * @param email {String} 
   * @param id {Number} 
   * @param songs {Array.<Number>} 
   * @param userRoleId {Number} 
   * @param username {String} 
   */
  var exports = function(email, id, songs, userRoleId, username) {
    this.email = email;
    this.id = id;
    this.songs = songs;
    this.userRoleId = userRoleId;
    this.username = username;
  };

  /**
   * Constructs a <code>UserDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDTO} obj Optional instance to populate.
   * @return {module:model/UserDTO} The populated <code>UserDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activated'))
        obj.activated = ApiClient.convertToType(data['activated'], 'Boolean');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('imageUrl'))
        obj.imageUrl = ApiClient.convertToType(data['imageUrl'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('registrationDate'))
        obj.registrationDate = ApiClient.convertToType(data['registrationDate'], 'Date');
      if (data.hasOwnProperty('songs'))
        obj.songs = ApiClient.convertToType(data['songs'], ['Number']);
      if (data.hasOwnProperty('userRoleId'))
        obj.userRoleId = ApiClient.convertToType(data['userRoleId'], 'Number');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} activated
   */
  exports.prototype.activated = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} imageUrl
   */
  exports.prototype.imageUrl = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  /**
   * @member {Date} registrationDate
   */
  exports.prototype.registrationDate = undefined;

  /**
   * @member {Array.<Number>} songs
   */
  exports.prototype.songs = undefined;

  /**
   * @member {Number} userRoleId
   */
  exports.prototype.userRoleId = undefined;

  /**
   * @member {String} username
   */
  exports.prototype.username = undefined;

  return exports;

}));
