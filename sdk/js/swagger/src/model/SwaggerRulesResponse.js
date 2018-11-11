/**
 * ORY Oathkeeper
 * ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Rule'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rule'))
  } else {
    // Browser globals (root is window)
    if (!root.OryOathkeeper) {
      root.OryOathkeeper = {}
    }
    root.OryOathkeeper.SwaggerRulesResponse = factory(
      root.OryOathkeeper.ApiClient,
      root.OryOathkeeper.Rule
    )
  }
})(this, function(ApiClient, Rule) {
  'use strict'

  /**
   * The SwaggerRulesResponse model module.
   * @module model/SwaggerRulesResponse
   * @version Latest
   */

  /**
   * Constructs a new <code>SwaggerRulesResponse</code>.
   * A list of rules
   * @alias module:model/SwaggerRulesResponse
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>SwaggerRulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerRulesResponse} obj Optional instance to populate.
   * @return {module:model/SwaggerRulesResponse} The populated <code>SwaggerRulesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('Body')) {
        obj['Body'] = ApiClient.convertToType(data['Body'], [Rule])
      }
    }
    return obj
  }

  /**
   * in: body type: array
   * @member {Array.<module:model/Rule>} Body
   */
  exports.prototype['Body'] = undefined

  return exports
})
