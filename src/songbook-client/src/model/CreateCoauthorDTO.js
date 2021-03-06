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
    root.SongbookApi.CreateCoauthorDTO = factory(root.SongbookApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateCoauthorDTO model module.
   * @module model/CreateCoauthorDTO
   * @version 1.5.5
   */

  /**
   * Constructs a new <code>CreateCoauthorDTO</code>.
   * @alias module:model/CreateCoauthorDTO
   * @class
   * @param coauthorFunction {module:model/CreateCoauthorDTO.CoauthorFunctionEnum} 
   */
  var exports = function(coauthorFunction) {
    this.coauthorFunction = coauthorFunction;
  };

  /**
   * Constructs a <code>CreateCoauthorDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCoauthorDTO} obj Optional instance to populate.
   * @return {module:model/CreateCoauthorDTO} The populated <code>CreateCoauthorDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('authorName'))
        obj.authorName = ApiClient.convertToType(data['authorName'], 'String');
      if (data.hasOwnProperty('coauthorFunction'))
        obj.coauthorFunction = ApiClient.convertToType(data['coauthorFunction'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} authorName
   */
  exports.prototype.authorName = undefined;

  /**
   * @member {module:model/CreateCoauthorDTO.CoauthorFunctionEnum} coauthorFunction
   */
  exports.prototype.coauthorFunction = undefined;


  /**
   * Allowed values for the <code>coauthorFunction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CoauthorFunctionEnum = {
    /**
     * value: "MUSIC"
     * @const
     */
    MUSIC: "MUSIC",

    /**
     * value: "TEXT"
     * @const
     */
    TEXT: "TEXT"
  };

  return exports;

}));
