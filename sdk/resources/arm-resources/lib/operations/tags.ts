/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/tagsMappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";

/** Class representing a Tags. */
export class Tags {
  private readonly client: ResourceManagementClientContext;

  /**
   * Create a Tags.
   * @param {ResourceManagementClientContext} client Reference to the service client.
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes a tag value.
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteValue(tagName: string, tagValue: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to delete.
   * @param callback The callback
   */
  deleteValue(tagName: string, tagValue: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteValue(tagName: string, tagValue: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteValue(tagName: string, tagValue: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        tagName,
        tagValue,
        options
      },
      deleteValueOperationSpec,
      callback);
  }

  /**
   * Creates a tag value. The name of the tag must already exist.
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to create.
   * @param [options] The optional parameters
   * @returns Promise<Models.TagsCreateOrUpdateValueResponse>
   */
  createOrUpdateValue(tagName: string, tagValue: string, options?: msRest.RequestOptionsBase): Promise<Models.TagsCreateOrUpdateValueResponse>;
  /**
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to create.
   * @param callback The callback
   */
  createOrUpdateValue(tagName: string, tagValue: string, callback: msRest.ServiceCallback<Models.TagValue>): void;
  /**
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to create.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdateValue(tagName: string, tagValue: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TagValue>): void;
  createOrUpdateValue(tagName: string, tagValue: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TagValue>, callback?: msRest.ServiceCallback<Models.TagValue>): Promise<Models.TagsCreateOrUpdateValueResponse> {
    return this.client.sendOperationRequest(
      {
        tagName,
        tagValue,
        options
      },
      createOrUpdateValueOperationSpec,
      callback) as Promise<Models.TagsCreateOrUpdateValueResponse>;
  }

  /**
   * The tag name can have a maximum of 512 characters and is case insensitive. Tag names created by
   * Azure have prefixes of microsoft, azure, or windows. You cannot create tags with one of these
   * prefixes.
   * @summary Creates a tag in the subscription.
   * @param tagName The name of the tag to create.
   * @param [options] The optional parameters
   * @returns Promise<Models.TagsCreateOrUpdateResponse>
   */
  createOrUpdate(tagName: string, options?: msRest.RequestOptionsBase): Promise<Models.TagsCreateOrUpdateResponse>;
  /**
   * @param tagName The name of the tag to create.
   * @param callback The callback
   */
  createOrUpdate(tagName: string, callback: msRest.ServiceCallback<Models.TagDetails>): void;
  /**
   * @param tagName The name of the tag to create.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(tagName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TagDetails>): void;
  createOrUpdate(tagName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TagDetails>, callback?: msRest.ServiceCallback<Models.TagDetails>): Promise<Models.TagsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        tagName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.TagsCreateOrUpdateResponse>;
  }

  /**
   * You must remove all values from a resource tag before you can delete it.
   * @summary Deletes a tag from the subscription.
   * @param tagName The name of the tag.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(tagName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param tagName The name of the tag.
   * @param callback The callback
   */
  deleteMethod(tagName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param tagName The name of the tag.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(tagName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(tagName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        tagName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the names and values of all resource tags that are defined in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.TagsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.TagsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.TagsListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TagsListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TagsListResult>, callback?: msRest.ServiceCallback<Models.TagsListResult>): Promise<Models.TagsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.TagsListResponse>;
  }

  /**
   * Gets the names and values of all resource tags that are defined in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TagsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TagsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TagsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TagsListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TagsListResult>, callback?: msRest.ServiceCallback<Models.TagsListResult>): Promise<Models.TagsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.TagsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteValueOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}",
  urlParameters: [
    Parameters.tagName,
    Parameters.tagValue,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateValueOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}",
  urlParameters: [
    Parameters.tagName,
    Parameters.tagValue,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TagValue
    },
    201: {
      bodyMapper: Mappers.TagValue
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/tagNames/{tagName}",
  urlParameters: [
    Parameters.tagName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TagDetails
    },
    201: {
      bodyMapper: Mappers.TagDetails
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/tagNames/{tagName}",
  urlParameters: [
    Parameters.tagName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/tagNames",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TagsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TagsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
