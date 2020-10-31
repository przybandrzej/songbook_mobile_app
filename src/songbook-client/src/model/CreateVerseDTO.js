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

import {ApiClient} from '../ApiClient';
import {CreateLineDTO} from './CreateLineDTO';

/**
 * The CreateVerseDTO model module.
 * @module model/CreateVerseDTO
 * @version 1.5.5
 */
export class CreateVerseDTO {
  /**
   * Constructs a new <code>CreateVerseDTO</code>.
   * Class representing a DTO for creating verses of songs.
   * @alias module:model/CreateVerseDTO
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateVerseDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateVerseDTO} obj Optional instance to populate.
   * @return {module:model/CreateVerseDTO} The populated <code>CreateVerseDTO</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateVerseDTO();
      if (data.hasOwnProperty('chorus'))
        obj.chorus = ApiClient.convertToType(data['chorus'], 'Boolean');
      if (data.hasOwnProperty('order'))
        obj.order = ApiClient.convertToType(data['order'], 'Number');
      if (data.hasOwnProperty('lines'))
        obj.lines = ApiClient.convertToType(data['lines'], [CreateLineDTO]);
    }
    return obj;
  }
}

/**
 * @member {Boolean} chorus
 */
CreateVerseDTO.prototype.chorus = undefined;

/**
 * Order of the verse in the song
 * @member {Number} order
 */
CreateVerseDTO.prototype.order = undefined;

/**
 * @member {Array.<module:model/CreateLineDTO>} lines
 */
CreateVerseDTO.prototype.lines = undefined;

