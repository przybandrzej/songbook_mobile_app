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
    define(['ApiClient', 'model/UserSongRatingDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UserSongRatingDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.SongbookApi) {
      root.SongbookApi = {};
    }
    root.SongbookApi.UserSongRatingResourceApi = factory(root.SongbookApi.ApiClient, root.SongbookApi.UserSongRatingDTO);
  }
}(this, function(ApiClient, UserSongRatingDTO) {
  'use strict';

  /**
   * UserSongRatingResource service.
   * @module api/UserSongRatingResourceApi
   * @version 1.5.5
   */

  /**
   * Constructs a new UserSongRatingResourceApi. 
   * @alias module:api/UserSongRatingResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUsingPOST7 operation.
     * @callback module:api/UserSongRatingResourceApi~createUsingPOST7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSongRatingDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create
     * @param {module:model/UserSongRatingDTO} dto dto
     * @param {module:api/UserSongRatingResourceApi~createUsingPOST7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSongRatingDTO}
     */
    this.createUsingPOST7 = function(dto, callback) {
      var postBody = dto;

      // verify the required parameter 'dto' is set
      if (dto === undefined || dto === null) {
        throw new Error("Missing the required parameter 'dto' when calling createUsingPOST7");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = UserSongRatingDTO;

      return this.apiClient.callApi(
        '/api/ratings', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUsingDELETE8 operation.
     * @callback module:api/UserSongRatingResourceApi~deleteUsingDELETE8Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete
     * @param {Number} songId songId
     * @param {Number} userId userId
     * @param {module:api/UserSongRatingResourceApi~deleteUsingDELETE8Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUsingDELETE8 = function(songId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'songId' is set
      if (songId === undefined || songId === null) {
        throw new Error("Missing the required parameter 'songId' when calling deleteUsingDELETE8");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUsingDELETE8");
      }


      var pathParams = {
        'songId': songId,
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ratings/{userId}/{songId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllUsingGET8 operation.
     * @callback module:api/UserSongRatingResourceApi~getAllUsingGET8Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserSongRatingDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAll
     * @param {Object} opts Optional parameters
     * @param {Number} opts.equal equal
     * @param {Number} opts.greaterThanEqual greaterThanEqual
     * @param {Number} opts.lessThanEqual lessThanEqual
     * @param {module:api/UserSongRatingResourceApi~getAllUsingGET8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserSongRatingDTO>}
     */
    this.getAllUsingGET8 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'equal': opts['equal'],
        'greaterThanEqual': opts['greaterThanEqual'],
        'lessThanEqual': opts['lessThanEqual'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [UserSongRatingDTO];

      return this.apiClient.callApi(
        '/api/ratings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBySongIdUsingGET1 operation.
     * @callback module:api/UserSongRatingResourceApi~getBySongIdUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserSongRatingDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBySongId
     * @param {Number} id id
     * @param {module:api/UserSongRatingResourceApi~getBySongIdUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserSongRatingDTO>}
     */
    this.getBySongIdUsingGET1 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBySongIdUsingGET1");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [UserSongRatingDTO];

      return this.apiClient.callApi(
        '/api/ratings/song/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getByUserIdAndSongIdUsingGET operation.
     * @callback module:api/UserSongRatingResourceApi~getByUserIdAndSongIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSongRatingDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getByUserIdAndSongId
     * @param {Number} songId songId
     * @param {Number} userId userId
     * @param {module:api/UserSongRatingResourceApi~getByUserIdAndSongIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSongRatingDTO}
     */
    this.getByUserIdAndSongIdUsingGET = function(songId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'songId' is set
      if (songId === undefined || songId === null) {
        throw new Error("Missing the required parameter 'songId' when calling getByUserIdAndSongIdUsingGET");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getByUserIdAndSongIdUsingGET");
      }


      var pathParams = {
        'songId': songId,
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = UserSongRatingDTO;

      return this.apiClient.callApi(
        '/api/ratings/{userId}/{songId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getByUserIdUsingGET operation.
     * @callback module:api/UserSongRatingResourceApi~getByUserIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserSongRatingDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getByUserId
     * @param {Number} id id
     * @param {module:api/UserSongRatingResourceApi~getByUserIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserSongRatingDTO>}
     */
    this.getByUserIdUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getByUserIdUsingGET");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [UserSongRatingDTO];

      return this.apiClient.callApi(
        '/api/ratings/user/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUsingPUT7 operation.
     * @callback module:api/UserSongRatingResourceApi~updateUsingPUT7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSongRatingDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update
     * @param {module:model/UserSongRatingDTO} dto dto
     * @param {module:api/UserSongRatingResourceApi~updateUsingPUT7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSongRatingDTO}
     */
    this.updateUsingPUT7 = function(dto, callback) {
      var postBody = dto;

      // verify the required parameter 'dto' is set
      if (dto === undefined || dto === null) {
        throw new Error("Missing the required parameter 'dto' when calling updateUsingPUT7");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = UserSongRatingDTO;

      return this.apiClient.callApi(
        '/api/ratings', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
