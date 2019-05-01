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
import * as Mappers from "../models/apiSchemaMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ApiSchema. */
export class ApiSchema {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ApiSchema.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the schema configuration at the API level.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiSchemaListByApiResponse>
   */
  listByApi(resourceGroupName: string, serviceName: string, apiId: string, options?: Models.ApiSchemaListByApiOptionalParams): Promise<Models.ApiSchemaListByApiResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param callback The callback
   */
  listByApi(resourceGroupName: string, serviceName: string, apiId: string, callback: msRest.ServiceCallback<Models.SchemaCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByApi(resourceGroupName: string, serviceName: string, apiId: string, options: Models.ApiSchemaListByApiOptionalParams, callback: msRest.ServiceCallback<Models.SchemaCollection>): void;
  listByApi(resourceGroupName: string, serviceName: string, apiId: string, options?: Models.ApiSchemaListByApiOptionalParams | msRest.ServiceCallback<Models.SchemaCollection>, callback?: msRest.ServiceCallback<Models.SchemaCollection>): Promise<Models.ApiSchemaListByApiResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        options
      },
      listByApiOperationSpec,
      callback) as Promise<Models.ApiSchemaListByApiResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the schema specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiSchemaGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiSchemaGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ApiSchemaGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        schemaId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.ApiSchemaGetEntityTagResponse>;
  }

  /**
   * Get the schema configuration at the API level.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiSchemaGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiSchemaGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, callback: msRest.ServiceCallback<Models.SchemaContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SchemaContract>): void;
  get(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SchemaContract>, callback?: msRest.ServiceCallback<Models.SchemaContract>): Promise<Models.ApiSchemaGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        schemaId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApiSchemaGetResponse>;
  }

  /**
   * Creates or updates schema configuration for the API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param parameters The schema contents to apply.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiSchemaCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, parameters: Models.SchemaContract, options?: Models.ApiSchemaCreateOrUpdateOptionalParams): Promise<Models.ApiSchemaCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param parameters The schema contents to apply.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, parameters: Models.SchemaContract, callback: msRest.ServiceCallback<Models.SchemaContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param parameters The schema contents to apply.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, parameters: Models.SchemaContract, options: Models.ApiSchemaCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.SchemaContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, parameters: Models.SchemaContract, options?: Models.ApiSchemaCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.SchemaContract>, callback?: msRest.ServiceCallback<Models.SchemaContract>): Promise<Models.ApiSchemaCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        schemaId,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ApiSchemaCreateOrUpdateResponse>;
  }

  /**
   * Deletes the schema configuration at the Api.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, ifMatch: string, options?: Models.ApiSchemaDeleteMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema identifier within an API. Must be unique in the current API Management
   * service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, ifMatch: string, options: Models.ApiSchemaDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, schemaId: string, ifMatch: string, options?: Models.ApiSchemaDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        schemaId,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Get the schema configuration at the API level.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiSchemaListByApiNextResponse>
   */
  listByApiNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiSchemaListByApiNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByApiNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SchemaCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByApiNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SchemaCollection>): void;
  listByApiNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SchemaCollection>, callback?: msRest.ServiceCallback<Models.SchemaCollection>): Promise<Models.ApiSchemaListByApiNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByApiNextOperationSpec,
      callback) as Promise<Models.ApiSchemaListByApiNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByApiOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SchemaCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas/{schemaId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.schemaId,
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
      headersMapper: Mappers.ApiSchemaGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas/{schemaId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.schemaId,
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
      bodyMapper: Mappers.SchemaContract,
      headersMapper: Mappers.ApiSchemaGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas/{schemaId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.schemaId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SchemaContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SchemaContract,
      headersMapper: Mappers.ApiSchemaCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.SchemaContract,
      headersMapper: Mappers.ApiSchemaCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas/{schemaId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.schemaId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.force,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByApiNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.SchemaCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
