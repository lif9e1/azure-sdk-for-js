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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { MonitorManagementClientContext } from "./monitorManagementClientContext";


class MonitorManagementClient extends MonitorManagementClientContext {
  // Operation groups
  metricDefinitions: operations.MetricDefinitions;
  metrics: operations.Metrics;
  diagnosticSettings: operations.DiagnosticSettingsOperations;
  diagnosticSettingsCategory: operations.DiagnosticSettingsCategoryOperations;
  eventCategories: operations.EventCategories;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the MonitorManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.MonitorManagementClientOptions) {
    super(credentials, options);
    this.metricDefinitions = new operations.MetricDefinitions(this);
    this.metrics = new operations.Metrics(this);
    this.diagnosticSettings = new operations.DiagnosticSettingsOperations(this);
    this.diagnosticSettingsCategory = new operations.DiagnosticSettingsCategoryOperations(this);
    this.eventCategories = new operations.EventCategories(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  MonitorManagementClient,
  MonitorManagementClientContext,
  Models as MonitorManagementModels,
  Mappers as MonitorManagementMappers
};
export * from "./operations";