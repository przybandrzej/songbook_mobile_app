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

/**
 * The UserSongRatingDTO model module.
 * @module model/UserSongRatingDTO
 * @version 1.5.5
 */
export class UserSongRatingDTO {
  /**
   * Constructs a new <code>UserSongRatingDTO</code>.
   * @alias module:model/UserSongRatingDTO
   * @class
   * @param id {Number} 
   * @param rating {Number} 
   * @param songId {Number} 
   * @param userId {Number} 
   */
  constructor(id, rating, songId, userId) {
    this.id = id;
    this.rating = rating;
    this.songId = songId;
    this.userId = userId;
  }

  /**
   * Constructs a <code>UserSongRatingDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSongRatingDTO} obj Optional instance to populate.
   * @return {module:model/UserSongRatingDTO} The populated <code>UserSongRatingDTO</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserSongRatingDTO();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
      if (data.hasOwnProperty('songId'))
        obj.songId = ApiClient.convertToType(data['songId'], 'Number');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
UserSongRatingDTO.prototype.id = undefined;

/**
 * @member {Number} rating
 */
UserSongRatingDTO.prototype.rating = undefined;

/**
 * @member {Number} songId
 */
UserSongRatingDTO.prototype.songId = undefined;

/**
 * @member {Number} userId
 */
UserSongRatingDTO.prototype.userId = undefined;


