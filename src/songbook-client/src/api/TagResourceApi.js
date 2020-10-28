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
    define(['ApiClient', 'model/SongDTO', 'model/TagDTO', 'model/UniversalCreateDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SongDTO'), require('../model/TagDTO'), require('../model/UniversalCreateDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.SongbookApi) {
      root.SongbookApi = {};
    }
    root.SongbookApi.TagResourceApi = factory(root.SongbookApi.ApiClient, root.SongbookApi.SongDTO, root.SongbookApi.TagDTO, root.SongbookApi.UniversalCreateDTO);
  }
}(this, function(ApiClient, SongDTO, TagDTO, UniversalCreateDTO) {
  'use strict';

  /**
   * TagResource service.
   * @module api/TagResourceApi
   * @version 1.5.5
   */

  /**
   * Constructs a new TagResourceApi. 
   * @alias module:api/TagResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUsingPOST5 operation.
     * @callback module:api/TagResourceApi~createUsingPOST5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TagDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create
     * @param {module:model/UniversalCreateDTO} tagDto tagDto
     * @param {module:api/TagResourceApi~createUsingPOST5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TagDTO}
     */
    this.createUsingPOST5 = function(tagDto, callback) {
      var postBody = tagDto;

      // verify the required parameter 'tagDto' is set
      if (tagDto === undefined || tagDto === null) {
        throw new Error("Missing the required parameter 'tagDto' when calling createUsingPOST5");
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
      var returnType = TagDTO;

      return this.apiClient.callApi(
        '/api/tags', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUsingDELETE5 operation.
     * @callback module:api/TagResourceApi~deleteUsingDELETE5Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete
     * @param {Number} id id
     * @param {module:api/TagResourceApi~deleteUsingDELETE5Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUsingDELETE5 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUsingDELETE5");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/tags/id/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllUsingGET5 operation.
     * @callback module:api/TagResourceApi~getAllUsingGET5Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TagDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAll
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit limit
     * @param {module:api/TagResourceApi~getAllUsingGET5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TagDTO>}
     */
    this.getAllUsingGET5 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
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
      var returnType = [TagDTO];

      return this.apiClient.callApi(
        '/api/tags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getByIdUsingGET5 operation.
     * @callback module:api/TagResourceApi~getByIdUsingGET5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TagDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getById
     * @param {Number} id id
     * @param {module:api/TagResourceApi~getByIdUsingGET5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TagDTO}
     */
    this.getByIdUsingGET5 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getByIdUsingGET5");
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
      var returnType = TagDTO;

      return this.apiClient.callApi(
        '/api/tags/id/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getByNameUsingGET2 operation.
     * @callback module:api/TagResourceApi~getByNameUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TagDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getByName
     * @param {String} name name
     * @param {module:api/TagResourceApi~getByNameUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TagDTO>}
     */
    this.getByNameUsingGET2 = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getByNameUsingGET2");
      }


      var pathParams = {
        'name': name
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
      var returnType = [TagDTO];

      return this.apiClient.callApi(
        '/api/tags/name/{name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSongsByTagIdUsingGET operation.
     * @callback module:api/TagResourceApi~getSongsByTagIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SongDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getSongsByTagId
     * @param {Number} id id
     * @param {module:api/TagResourceApi~getSongsByTagIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SongDTO>}
     */
    this.getSongsByTagIdUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSongsByTagIdUsingGET");
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
      var returnType = [SongDTO];

      return this.apiClient.callApi(
        '/api/tags/id/{id}/songs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUsingPUT5 operation.
     * @callback module:api/TagResourceApi~updateUsingPUT5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TagDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update
     * @param {module:model/TagDTO} tagDto tagDto
     * @param {module:api/TagResourceApi~updateUsingPUT5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TagDTO}
     */
    this.updateUsingPUT5 = function(tagDto, callback) {
      var postBody = tagDto;

      // verify the required parameter 'tagDto' is set
      if (tagDto === undefined || tagDto === null) {
        throw new Error("Missing the required parameter 'tagDto' when calling updateUsingPUT5");
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
      var returnType = TagDTO;

      return this.apiClient.callApi(
        '/api/tags', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));