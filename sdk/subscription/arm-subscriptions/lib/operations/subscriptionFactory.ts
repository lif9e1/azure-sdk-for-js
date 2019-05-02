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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/subscriptionFactoryMappers";
import * as Parameters from "../models/parameters";
import { SubscriptionClientContext } from "../subscriptionClientContext";

/** Class representing a SubscriptionFactory. */
export class SubscriptionFactory {
  private readonly client: SubscriptionClientContext;

  /**
   * Create a SubscriptionFactory.
   * @param {SubscriptionClientContext} client Reference to the service client.
   */
  constructor(client: SubscriptionClientContext) {
    this.client = client;
  }

  /**
   * Creates an Azure subscription
   * @param billingAccountName The name of the commerce root billing account.
   * @param invoiceSectionName The name of the invoice section.
   * @param body The subscription creation parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionFactoryCreateSubscriptionResponse>
   */
  createSubscription(billingAccountName: string, invoiceSectionName: string, body: Models.SubscriptionCreationParameters, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionFactoryCreateSubscriptionResponse> {
    return this.beginCreateSubscription(billingAccountName,invoiceSectionName,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SubscriptionFactoryCreateSubscriptionResponse>;
  }

  /**
   * Creates an Azure subscription
   * @param billingAccountName The name of the commerce root billing account.
   * @param invoiceSectionName The name of the invoice section.
   * @param body The subscription creation parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateSubscription(billingAccountName: string, invoiceSectionName: string, body: Models.SubscriptionCreationParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountName,
        invoiceSectionName,
        body,
        options
      },
      beginCreateSubscriptionOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginCreateSubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Subscription/createSubscription",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.SubscriptionCreationParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionCreationResult,
      headersMapper: Mappers.SubscriptionFactoryCreateSubscriptionHeaders
    },
    202: {
      headersMapper: Mappers.SubscriptionFactoryCreateSubscriptionHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
