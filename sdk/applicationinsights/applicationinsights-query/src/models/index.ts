/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * The parameters for a single metrics query
 */
export interface MetricsPostBodySchemaParameters {
  /**
   * Possible values include: 'requests/count', 'requests/duration', 'requests/failed',
   * 'users/count', 'users/authenticated', 'pageViews/count', 'pageViews/duration',
   * 'client/processingDuration', 'client/receiveDuration', 'client/networkDuration',
   * 'client/sendDuration', 'client/totalDuration', 'dependencies/count', 'dependencies/failed',
   * 'dependencies/duration', 'exceptions/count', 'exceptions/browser', 'exceptions/server',
   * 'sessions/count', 'performanceCounters/requestExecutionTime',
   * 'performanceCounters/requestsPerSecond', 'performanceCounters/requestsInQueue',
   * 'performanceCounters/memoryAvailableBytes', 'performanceCounters/exceptionsPerSecond',
   * 'performanceCounters/processCpuPercentage', 'performanceCounters/processIOBytesPerSecond',
   * 'performanceCounters/processPrivateBytes', 'performanceCounters/processorCpuPercentage',
   * 'availabilityResults/availabilityPercentage', 'availabilityResults/duration',
   * 'billing/telemetryCount', 'customEvents/count'
   */
  metricId: MetricId;
  timespan?: string;
  aggregation?: MetricsAggregation[];
  interval?: string;
  segment?: MetricsSegment[];
  top?: number;
  orderby?: string;
  filter?: string;
}

/**
 * A metric request
 */
export interface MetricsPostBodySchema {
  /**
   * An identifier for this query.  Must be unique within the post body of the request.  This
   * identifier will be the 'id' property of the response object representing this query.
   */
  id: string;
  /**
   * The parameters for a single metrics query
   */
  parameters: MetricsPostBodySchemaParameters;
}

/**
 * A metric segment
 */
export interface MetricsSegmentInfo {
  /**
   * Start time of the metric segment (only when an interval was specified).
   */
  start?: Date;
  /**
   * Start time of the metric segment (only when an interval was specified).
   */
  end?: Date;
  /**
   * Segmented metric data (if further segmented).
   */
  segments?: MetricsSegmentInfo[];
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
}

/**
 * A metric result data.
 */
export interface MetricsResultInfo {
  /**
   * Start time of the metric.
   */
  start?: Date;
  /**
   * Start time of the metric.
   */
  end?: Date;
  /**
   * The interval used to segment the metric data.
   */
  interval?: string;
  /**
   * Segmented metric data (if segmented).
   */
  segments?: MetricsSegmentInfo[];
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
}

/**
 * A metric result.
 */
export interface MetricsResult {
  value?: MetricsResultInfo;
}

/**
 * An interface representing MetricsResultsItem.
 */
export interface MetricsResultsItem {
  /**
   * The specified ID for this metric.
   */
  id: string;
  /**
   * The HTTP status code of this metric query.
   */
  status: number;
  /**
   * The results of this metric query.
   */
  body: MetricsResult;
}

/**
 * An interface representing ErrorDetail.
 * @summary Error details.
 */
export interface ErrorDetail {
  /**
   * The error's code.
   */
  code: string;
  /**
   * A human readable error message.
   */
  message: string;
  /**
   * Indicates which property in the request is responsible for the error.
   */
  target?: string;
  /**
   * Indicates which value in 'target' is responsible for the error.
   */
  value?: string;
  /**
   * Indicates resources which were responsible for the error.
   */
  resources?: string[];
  additionalProperties?: any;
}

/**
 * An interface representing ErrorInfo.
 * @summary The code and message for an error.
 */
export interface ErrorInfo {
  /**
   * A machine readable error code.
   */
  code: string;
  /**
   * A human readable error message.
   */
  message: string;
  /**
   * error details.
   */
  details?: ErrorDetail[];
  /**
   * Inner error details if they exist.
   */
  innererror?: ErrorInfo;
  additionalProperties?: any;
}

/**
 * Custom dimensions of the event
 */
export interface EventsResultDataCustomDimensions {
  additionalProperties?: any;
}

/**
 * Custom measurements of the event
 */
export interface EventsResultDataCustomMeasurements {
  additionalProperties?: any;
}

/**
 * Operation info for an event result
 */
export interface EventsOperationInfo {
  /**
   * Name of the operation
   */
  name?: string;
  /**
   * ID of the operation
   */
  id?: string;
  /**
   * Parent ID of the operation
   */
  parentId?: string;
  /**
   * Synthetic source of the operation
   */
  syntheticSource?: string;
}

/**
 * Session info for an event result
 */
export interface EventsSessionInfo {
  /**
   * ID of the session
   */
  id?: string;
}

/**
 * User info for an event result
 */
export interface EventsUserInfo {
  /**
   * ID of the user
   */
  id?: string;
  /**
   * Account ID of the user
   */
  accountId?: string;
  /**
   * Authenticated ID of the user
   */
  authenticatedId?: string;
}

/**
 * Cloud info for an event result
 */
export interface EventsCloudInfo {
  /**
   * Role name of the cloud
   */
  roleName?: string;
  /**
   * Role instance of the cloud
   */
  roleInstance?: string;
}

/**
 * AI related application info for an event result
 */
export interface EventsAiInfo {
  /**
   * iKey of the app
   */
  iKey?: string;
  /**
   * Name of the application
   */
  appName?: string;
  /**
   * ID of the application
   */
  appId?: string;
  /**
   * SDK version of the application
   */
  sdkVersion?: string;
}

/**
 * Application info for an event result
 */
export interface EventsApplicationInfo {
  /**
   * Version of the application
   */
  version?: string;
}

/**
 * Client info for an event result
 */
export interface EventsClientInfo {
  /**
   * Model of the client
   */
  model?: string;
  /**
   * Operating system of the client
   */
  os?: string;
  /**
   * Type of the client
   */
  type?: string;
  /**
   * Browser of the client
   */
  browser?: string;
  /**
   * IP address of the client
   */
  ip?: string;
  /**
   * City of the client
   */
  city?: string;
  /**
   * State or province of the client
   */
  stateOrProvince?: string;
  /**
   * Country or region of the client
   */
  countryOrRegion?: string;
}

/**
 * Contains the possible cases for EventsResultData.
 */
export type EventsResultDataUnion = EventsResultData | EventsTraceResult | EventsCustomEventResult | EventsPageViewResult | EventsBrowserTimingResult | EventsRequestResult | EventsDependencyResult | EventsExceptionResult | EventsAvailabilityResultResult | EventsPerformanceCounterResult | EventsCustomMetricResult;

/**
 * Events query result data.
 */
export interface EventsResultData {
  /**
   * Polymorphic Discriminator
   */
  type: "eventsResultData";
  /**
   * The unique ID for this event.
   */
  id?: string;
  /**
   * Count of the event
   */
  count?: number;
  /**
   * Timestamp of the event
   */
  timestamp?: Date;
  /**
   * Custom dimensions of the event
   */
  customDimensions?: EventsResultDataCustomDimensions;
  /**
   * Custom measurements of the event
   */
  customMeasurements?: EventsResultDataCustomMeasurements;
  /**
   * Operation info of the event
   */
  operation?: EventsOperationInfo;
  /**
   * Session info of the event
   */
  session?: EventsSessionInfo;
  /**
   * User info of the event
   */
  user?: EventsUserInfo;
  /**
   * Cloud info of the event
   */
  cloud?: EventsCloudInfo;
  /**
   * AI info of the event
   */
  ai?: EventsAiInfo;
  /**
   * Application info of the event
   */
  application?: EventsApplicationInfo;
  /**
   * Client info of the event
   */
  client?: EventsClientInfo;
}

/**
 * An events query result.
 */
export interface EventsResults {
  /**
   * OData context metadata endpoint for this response
   */
  odatacontext?: string;
  /**
   * OData messages for this response.
   */
  aimessages?: ErrorInfo[];
  /**
   * Contents of the events query result.
   */
  value?: EventsResultDataUnion[];
}

/**
 * An event query result.
 */
export interface EventsResult {
  /**
   * OData messages for this response.
   */
  aimessages?: ErrorInfo[];
  value?: EventsResultDataUnion;
}

/**
 * The trace information
 */
export interface EventsTraceInfo {
  /**
   * The trace message
   */
  message?: string;
  /**
   * The trace severity level
   */
  severityLevel?: number;
}

/**
 * A trace result
 */
export interface EventsTraceResult {
  /**
   * Polymorphic Discriminator
   */
  type: "trace";
  /**
   * The unique ID for this event.
   */
  id?: string;
  /**
   * Count of the event
   */
  count?: number;
  /**
   * Timestamp of the event
   */
  timestamp?: Date;
  /**
   * Custom dimensions of the event
   */
  customDimensions?: EventsResultDataCustomDimensions;
  /**
   * Custom measurements of the event
   */
  customMeasurements?: EventsResultDataCustomMeasurements;
  /**
   * Operation info of the event
   */
  operation?: EventsOperationInfo;
  /**
   * Session info of the event
   */
  session?: EventsSessionInfo;
  /**
   * User info of the event
   */
  user?: EventsUserInfo;
  /**
   * Cloud info of the event
   */
  cloud?: EventsCloudInfo;
  /**
   * AI info of the event
   */
  ai?: EventsAiInfo;
  /**
   * Application info of the event
   */
  application?: EventsApplicationInfo;
  /**
   * Client info of the event
   */
  client?: EventsClientInfo;
  trace?: EventsTraceInfo;
}

/**
 * The custom event information
 */
export interface EventsCustomEventInfo {
  /**
   * The name of the custom event
   */
  name?: string;
}

/**
 * A custom event result
 */
export interface EventsCustomEventResult {
  /**
   * Polymorphic Discriminator
   */
  type: "customEvent";
  /**
   * The unique ID for this event.
   */
  id?: string;
  /**
   * Count of the event
   */
  count?: number;
  /**
   * Timestamp of the event
   */
  timestamp?: Date;
  /**
   * Custom dimensions of the event
   */
  customDimensions?: EventsResultDataCustomDimensions;
  /**
   * Custom measurements of the event
   */
  customMeasurements?: EventsResultDataCustomMeasurements;
  /**
   * Operation info of the event
   */
  operation?: EventsOperationInfo;
  /**
   * Session info of the event
   */
  session?: EventsSessionInfo;
  /**
   * User info of the event
   */
  user?: EventsUserInfo;
  /**
   * Cloud info of the event
   */
  cloud?: EventsCloudInfo;
  /**
   * AI info of the event
   */
  ai?: EventsAiInfo;
  /**
   * Application info of the event
   */
  application?: EventsApplicationInfo;
  /**
   * Client info of the event
   */
  client?: EventsClientInfo;
  customEvent?: EventsCustomEventInfo;
}

/**
 * The page view information
 */
export interface EventsPageViewInfo {
  /**
   * The name of the page
   */
  name?: string;
  /**
   * The URL of the page
   */
  url?: string;
  /**
   * The duration of the page view
   */
  duration?: string;
  /**
   * The performance bucket of the page view
   */
  performanceBucket?: string;
}

/**
 * A page view result
 */
export interface EventsPageViewResult {
  /**
   * Polymorphic Discriminator
   */
  type: "pageView";
  /**
   * The unique ID for this event.
   */
  id?: string;
  /**
   * Count of the event
   */
  count?: number;
  /**
   * Timestamp of the event
   */
  timestamp?: Date;
  /**
   * Custom dimensions of the event
   */
  customDimensions?: EventsResultDataCustomDimensions;
  /**
   * Custom measurements of the event
   */
  customMeasurements?: EventsResultDataCustomMeasurements;
  /**
   * Operation info of the event
   */
  operation?: EventsOperationInfo;
  /**
   * Session info of the event
   */
  session?: EventsSessionInfo;
  /**
   * User info of the event
   */
  user?: EventsUserInfo;
  /**
   * Cloud info of the event
   */
  cloud?: EventsCloudInfo;
  /**
   * AI info of the event
   */
  ai?: EventsAiInfo;
  /**
   * Application info of the event
   */
  application?: EventsApplicationInfo;
  /**
   * Client info of the event
   */
  client?: EventsClientInfo;
  pageView?: EventsPageViewInfo;
}

/**
 * The browser timing information
 */
export interface EventsBrowserTimingInfo {
  /**
   * The path of the URL
   */
  urlPath?: string;
  /**
   * The host of the URL
   */
  urlHost?: string;
  /**
   * The name of the page
   */
  name?: string;
  /**
   * The url of the page
   */
  url?: string;
  /**
   * The total duration of the load
   */
  totalDuration?: number;
  /**
   * The performance bucket of the load
   */
  performanceBucket?: string;
  /**
   * The network duration of the load
   */
  networkDuration?: number;
  /**
   * The send duration of the load
   */
  sendDuration?: number;
  /**
   * The receive duration of the load
   */
  receiveDuration?: number;
  /**
   * The processing duration of the load
   */
  processingDuration?: number;
}

/**
 * Client performance information
 */
export interface EventsClientPerformanceInfo {
  /**
   * The name of the client performance
   */
  name?: string;
}

/**
 * A browser timing result
 */
export interface EventsBrowserTimingResult {
  /**
   * Polymorphic Discriminator
   */
  type: "browserTiming";
  /**
   * The unique ID for this event.
   */
  id?: string;
  /**
   * Count of the event
   */
  count?: number;
  /**
   * Timestamp of the event
   */
  timestamp?: Date;
  /**
   * Custom dimensions of the event
   */
  customDimensions?: EventsResultDataCustomDimensions;
  /**
   * Custom measurements of the event
   */
  customMeasurements?: EventsResultDataCustomMeasurements;
  /**
   * Operation info of the event
   */
  operation?: EventsOperationInfo;
  /**
   * Session info of the event
   */
  session?: EventsSessionInfo;
  /**
   * User info of the event
   */
  user?: EventsUserInfo;
  /**
   * Cloud info of the event
   */
  cloud?: EventsCloudInfo;
  /**
   * AI info of the event
   */
  ai?: EventsAiInfo;
  /**
   * Application info of the event
   */
  application?: EventsApplicationInfo;
  /**
   * Client info of the event
   */
  client?: EventsClientInfo;
  browserTiming?: EventsBrowserTimingInfo;
  clientPerformance?: EventsClientPerformanceInfo;
}

/**
 * The request info
 */
export interface EventsRequestInfo {
  /**
   * The name of the request
   */
  name?: string;
  /**
   * The URL of the request
   */
  url?: string;
  /**
   * Indicates if the request was successful
   */
  success?: string;
  /**
   * The duration of the request
   */
  duration?: number;
  /**
   * The performance bucket of the request
   */
  performanceBucket?: string;
  /**
   * The result code of the request
   */
  resultCode?: string;
  /**
   * The source of the request
   */
  source?: string;
  /**
   * The ID of the request
   */
  id?: string;
}

/**
 * A request result
 */
export interface EventsRequestResult {
  /**
   * Polymorphic Discriminator
   */
  type: "request";
  /**
   * The unique ID for this event.
   */
  id?: string;
  /**
   * Count of the event
   */
  count?: number;
  /**
   * Timestamp of the event
   */
  timestamp?: Date;
  /**
   * Custom dimensions of the event
   */
  customDimensions?: EventsResultDataCustomDimensions;
  /**
   * Custom measurements of the event
   */
  customMeasurements?: EventsResultDataCustomMeasurements;
  /**
   * Operation info of the event
   */
  operation?: EventsOperationInfo;
  /**
   * Session info of the event
   */
  session?: EventsSessionInfo;
  /**
   * User info of the event
   */
  user?: EventsUserInfo;
  /**
   * Cloud info of the event
   */
  cloud?: EventsCloudInfo;
  /**
   * AI info of the event
   */
  ai?: EventsAiInfo;
  /**
   * Application info of the event
   */
  application?: EventsApplicationInfo;
  /**
   * Client info of the event
   */
  client?: EventsClientInfo;
  request?: EventsRequestInfo;
}

/**
 * The dependency info
 */
export interface EventsDependencyInfo {
  /**
   * The target of the dependency
   */
  target?: string;
  /**
   * The data of the dependency
   */
  data?: string;
  /**
   * Indicates if the dependency was successful
   */
  success?: string;
  /**
   * The duration of the dependency
   */
  duration?: number;
  /**
   * The performance bucket of the dependency
   */
  performanceBucket?: string;
  /**
   * The result code of the dependency
   */
  resultCode?: string;
  /**
   * The type of the dependency
   */
  type?: string;
  /**
   * The name of the dependency
   */
  name?: string;
  /**
   * The ID of the dependency
   */
  id?: string;
}

/**
 * A dependency result
 */
export interface EventsDependencyResult {
  /**
   * Polymorphic Discriminator
   */
  type: "dependency";
  /**
   * The unique ID for this event.
   */
  id?: string;
  /**
   * Count of the event
   */
  count?: number;
  /**
   * Timestamp of the event
   */
  timestamp?: Date;
  /**
   * Custom dimensions of the event
   */
  customDimensions?: EventsResultDataCustomDimensions;
  /**
   * Custom measurements of the event
   */
  customMeasurements?: EventsResultDataCustomMeasurements;
  /**
   * Operation info of the event
   */
  operation?: EventsOperationInfo;
  /**
   * Session info of the event
   */
  session?: EventsSessionInfo;
  /**
   * User info of the event
   */
  user?: EventsUserInfo;
  /**
   * Cloud info of the event
   */
  cloud?: EventsCloudInfo;
  /**
   * AI info of the event
   */
  ai?: EventsAiInfo;
  /**
   * Application info of the event
   */
  application?: EventsApplicationInfo;
  /**
   * Client info of the event
   */
  client?: EventsClientInfo;
  dependency?: EventsDependencyInfo;
}

/**
 * A parsed stack entry
 */
export interface EventsExceptionDetailsParsedStack {
  /**
   * The assembly of the stack entry
   */
  assembly?: string;
  /**
   * The method of the stack entry
   */
  method?: string;
  /**
   * The level of the stack entry
   */
  level?: number;
  /**
   * The line of the stack entry
   */
  line?: number;
}

/**
 * Exception details
 */
export interface EventsExceptionDetail {
  /**
   * The severity level of the exception detail
   */
  severityLevel?: string;
  /**
   * The outer ID of the exception detail
   */
  outerId?: string;
  /**
   * The message of the exception detail
   */
  message?: string;
  /**
   * The type of the exception detail
   */
  type?: string;
  /**
   * The ID of the exception detail
   */
  id?: string;
  /**
   * The parsed stack
   */
  parsedStack?: EventsExceptionDetailsParsedStack[];
}

/**
 * The exception info
 */
export interface EventsExceptionInfo {
  /**
   * The severity level of the exception
   */
  severityLevel?: number;
  /**
   * The problem ID of the exception
   */
  problemId?: string;
  /**
   * Indicates where the exception was handled at
   */
  handledAt?: string;
  /**
   * The assembly which threw the exception
   */
  assembly?: string;
  /**
   * The method that threw the exception
   */
  method?: string;
  /**
   * The message of the exception
   */
  message?: string;
  /**
   * The type of the exception
   */
  type?: string;
  /**
   * The outer type of the exception
   */
  outerType?: string;
  /**
   * The outer method of the exception
   */
  outerMethod?: string;
  /**
   * The outer assembly of the exception
   */
  outerAssembly?: string;
  /**
   * The outer message of the exception
   */
  outerMessage?: string;
  /**
   * The inner most type of the exception
   */
  innermostType?: string;
  /**
   * The inner most message of the exception
   */
  innermostMessage?: string;
  /**
   * The inner most method of the exception
   */
  innermostMethod?: string;
  /**
   * The inner most assembly of the exception
   */
  innermostAssembly?: string;
  /**
   * The details of the exception
   */
  details?: EventsExceptionDetail[];
}

/**
 * An exception result
 */
export interface EventsExceptionResult {
  /**
   * Polymorphic Discriminator
   */
  type: "exception";
  /**
   * The unique ID for this event.
   */
  id?: string;
  /**
   * Count of the event
   */
  count?: number;
  /**
   * Timestamp of the event
   */
  timestamp?: Date;
  /**
   * Custom dimensions of the event
   */
  customDimensions?: EventsResultDataCustomDimensions;
  /**
   * Custom measurements of the event
   */
  customMeasurements?: EventsResultDataCustomMeasurements;
  /**
   * Operation info of the event
   */
  operation?: EventsOperationInfo;
  /**
   * Session info of the event
   */
  session?: EventsSessionInfo;
  /**
   * User info of the event
   */
  user?: EventsUserInfo;
  /**
   * Cloud info of the event
   */
  cloud?: EventsCloudInfo;
  /**
   * AI info of the event
   */
  ai?: EventsAiInfo;
  /**
   * Application info of the event
   */
  application?: EventsApplicationInfo;
  /**
   * Client info of the event
   */
  client?: EventsClientInfo;
  exception?: EventsExceptionInfo;
}

/**
 * The availability result info
 */
export interface EventsAvailabilityResultInfo {
  /**
   * The name of the availability result
   */
  name?: string;
  /**
   * Indicates if the availability result was successful
   */
  success?: string;
  /**
   * The duration of the availability result
   */
  duration?: number;
  /**
   * The performance bucket of the availability result
   */
  performanceBucket?: string;
  /**
   * The message of the availability result
   */
  message?: string;
  /**
   * The location of the availability result
   */
  location?: string;
  /**
   * The ID of the availability result
   */
  id?: string;
  /**
   * The size of the availability result
   */
  size?: string;
}

/**
 * An availability result result
 */
export interface EventsAvailabilityResultResult {
  /**
   * Polymorphic Discriminator
   */
  type: "availabilityResult";
  /**
   * The unique ID for this event.
   */
  id?: string;
  /**
   * Count of the event
   */
  count?: number;
  /**
   * Timestamp of the event
   */
  timestamp?: Date;
  /**
   * Custom dimensions of the event
   */
  customDimensions?: EventsResultDataCustomDimensions;
  /**
   * Custom measurements of the event
   */
  customMeasurements?: EventsResultDataCustomMeasurements;
  /**
   * Operation info of the event
   */
  operation?: EventsOperationInfo;
  /**
   * Session info of the event
   */
  session?: EventsSessionInfo;
  /**
   * User info of the event
   */
  user?: EventsUserInfo;
  /**
   * Cloud info of the event
   */
  cloud?: EventsCloudInfo;
  /**
   * AI info of the event
   */
  ai?: EventsAiInfo;
  /**
   * Application info of the event
   */
  application?: EventsApplicationInfo;
  /**
   * Client info of the event
   */
  client?: EventsClientInfo;
  availabilityResult?: EventsAvailabilityResultInfo;
}

/**
 * The performance counter info
 */
export interface EventsPerformanceCounterInfo {
  /**
   * The value of the performance counter
   */
  value?: number;
  /**
   * The name of the performance counter
   */
  name?: string;
  /**
   * The category of the performance counter
   */
  category?: string;
  /**
   * The counter of the performance counter
   */
  counter?: string;
  /**
   * The instance name of the performance counter
   */
  instanceName?: string;
  /**
   * The instance of the performance counter
   */
  instance?: string;
}

/**
 * A performance counter result
 */
export interface EventsPerformanceCounterResult {
  /**
   * Polymorphic Discriminator
   */
  type: "performanceCounter";
  /**
   * The unique ID for this event.
   */
  id?: string;
  /**
   * Count of the event
   */
  count?: number;
  /**
   * Timestamp of the event
   */
  timestamp?: Date;
  /**
   * Custom dimensions of the event
   */
  customDimensions?: EventsResultDataCustomDimensions;
  /**
   * Custom measurements of the event
   */
  customMeasurements?: EventsResultDataCustomMeasurements;
  /**
   * Operation info of the event
   */
  operation?: EventsOperationInfo;
  /**
   * Session info of the event
   */
  session?: EventsSessionInfo;
  /**
   * User info of the event
   */
  user?: EventsUserInfo;
  /**
   * Cloud info of the event
   */
  cloud?: EventsCloudInfo;
  /**
   * AI info of the event
   */
  ai?: EventsAiInfo;
  /**
   * Application info of the event
   */
  application?: EventsApplicationInfo;
  /**
   * Client info of the event
   */
  client?: EventsClientInfo;
  performanceCounter?: EventsPerformanceCounterInfo;
}

/**
 * The custom metric info
 */
export interface EventsCustomMetricInfo {
  /**
   * The name of the custom metric
   */
  name?: string;
  /**
   * The value of the custom metric
   */
  value?: number;
  /**
   * The sum of the custom metric
   */
  valueSum?: number;
  /**
   * The count of the custom metric
   */
  valueCount?: number;
  /**
   * The minimum value of the custom metric
   */
  valueMin?: number;
  /**
   * The maximum value of the custom metric
   */
  valueMax?: number;
  /**
   * The standard deviation of the custom metric
   */
  valueStdDev?: number;
}

/**
 * A custom metric result
 */
export interface EventsCustomMetricResult {
  /**
   * Polymorphic Discriminator
   */
  type: "customMetric";
  /**
   * The unique ID for this event.
   */
  id?: string;
  /**
   * Count of the event
   */
  count?: number;
  /**
   * Timestamp of the event
   */
  timestamp?: Date;
  /**
   * Custom dimensions of the event
   */
  customDimensions?: EventsResultDataCustomDimensions;
  /**
   * Custom measurements of the event
   */
  customMeasurements?: EventsResultDataCustomMeasurements;
  /**
   * Operation info of the event
   */
  operation?: EventsOperationInfo;
  /**
   * Session info of the event
   */
  session?: EventsSessionInfo;
  /**
   * User info of the event
   */
  user?: EventsUserInfo;
  /**
   * Cloud info of the event
   */
  cloud?: EventsCloudInfo;
  /**
   * AI info of the event
   */
  ai?: EventsAiInfo;
  /**
   * Application info of the event
   */
  application?: EventsApplicationInfo;
  /**
   * Client info of the event
   */
  client?: EventsClientInfo;
  customMetric?: EventsCustomMetricInfo;
}

/**
 * The Analytics query. Learn more about the [Analytics query
 * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
 */
export interface QueryBody {
  /**
   * The query to execute.
   */
  query: string;
  /**
   * Optional. The timespan over which to query data. This is an ISO8601 time period value.  This
   * timespan is applied in addition to any that are specified in the query expression.
   */
  timespan?: string;
  /**
   * A list of Application IDs for cross-application queries.
   */
  applications?: string[];
}

/**
 * A column in a table.
 * @summary A table column.
 */
export interface Column {
  /**
   * The name of this column.
   */
  name?: string;
  /**
   * The data type of this column.
   */
  type?: string;
}

/**
 * Contains the columns and rows for one table in a query response.
 * @summary A query response table.
 */
export interface Table {
  /**
   * The name of the table.
   */
  name: string;
  /**
   * The list of columns in this table.
   */
  columns: Column[];
  /**
   * The resulting rows from this query.
   */
  rows: any[][];
}

/**
 * Contains the tables, columns & rows resulting from a query.
 * @summary A query response.
 */
export interface QueryResults {
  /**
   * The list of tables, columns and rows.
   */
  tables: Table[];
}

/**
 * Contains details when the response code indicates an error.
 * @summary Error details.
 */
export interface ErrorResponse {
  /**
   * The error details.
   */
  error: ErrorInfo;
}

/**
 * An interface representing ApplicationInsightsDataClientOptions.
 */
export interface ApplicationInsightsDataClientOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface MetricsGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The timespan over which to retrieve metric values. This is an ISO8601 time period value. If
   * timespan is omitted, a default time range of `PT12H` ("last 12 hours") is used. The actual
   * timespan that is queried may be adjusted by the server based. In all cases, the actual time
   * span used for the query is included in the response.
   */
  timespan?: string;
  /**
   * The time interval to use when retrieving metric values. This is an ISO8601 duration. If
   * interval is omitted, the metric value is aggregated across the entire timespan. If interval is
   * supplied, the server may adjust the interval to a more appropriate size based on the timespan
   * used for the query. In all cases, the actual interval used for the query is included in the
   * response.
   */
  interval?: string;
  /**
   * The aggregation to use when computing the metric values. To retrieve more than one aggregation
   * at a time, separate them with a comma. If no aggregation is specified, then the default
   * aggregation for the metric is used.
   */
  aggregation?: MetricsAggregation[];
  /**
   * The name of the dimension to segment the metric values by. This dimension must be applicable
   * to the metric you are retrieving. To segment by more than one dimension at a time, separate
   * them with a comma (,). In this case, the metric data will be segmented in the order the
   * dimensions are listed in the parameter.
   */
  segment?: MetricsSegment[];
  /**
   * The number of segments to return.  This value is only valid when segment is specified.
   */
  top?: number;
  /**
   * The aggregation function and direction to sort the segments by.  This value is only valid when
   * segment is specified.
   */
  orderby?: string;
  /**
   * An expression used to filter the results.  This value should be a valid OData filter
   * expression where the keys of each clause should be applicable dimensions for the metric you
   * are retrieving.
   */
  filter?: string;
}

/**
 * Optional Parameters.
 */
export interface EventsGetByTypeOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Optional. The timespan over which to retrieve events. This is an ISO8601 time period value.
   * This timespan is applied in addition to any that are specified in the Odata expression.
   */
  timespan?: string;
  /**
   * An expression used to filter the returned events
   */
  filter?: string;
  /**
   * A free-text search expression to match for whether a particular event should be returned
   */
  search?: string;
  /**
   * A comma-separated list of properties with \"asc\" (the default) or \"desc\" to control the
   * order of returned events
   */
  orderby?: string;
  /**
   * Limits the properties to just those requested on each returned event
   */
  select?: string;
  /**
   * The number of items to skip over before returning events
   */
  skip?: number;
  /**
   * The number of events to return
   */
  top?: number;
  /**
   * Format for the returned events
   */
  format?: string;
  /**
   * Request a count of matching items included with the returned events
   */
  count?: boolean;
  /**
   * An expression used for aggregation over returned events
   */
  apply?: string;
}

/**
 * Optional Parameters.
 */
export interface EventsGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Optional. The timespan over which to retrieve events. This is an ISO8601 time period value.
   * This timespan is applied in addition to any that are specified in the Odata expression.
   */
  timespan?: string;
}

/**
 * Defines values for MetricId.
 * Possible values include: 'requests/count', 'requests/duration', 'requests/failed',
 * 'users/count', 'users/authenticated', 'pageViews/count', 'pageViews/duration',
 * 'client/processingDuration', 'client/receiveDuration', 'client/networkDuration',
 * 'client/sendDuration', 'client/totalDuration', 'dependencies/count', 'dependencies/failed',
 * 'dependencies/duration', 'exceptions/count', 'exceptions/browser', 'exceptions/server',
 * 'sessions/count', 'performanceCounters/requestExecutionTime',
 * 'performanceCounters/requestsPerSecond', 'performanceCounters/requestsInQueue',
 * 'performanceCounters/memoryAvailableBytes', 'performanceCounters/exceptionsPerSecond',
 * 'performanceCounters/processCpuPercentage', 'performanceCounters/processIOBytesPerSecond',
 * 'performanceCounters/processPrivateBytes', 'performanceCounters/processorCpuPercentage',
 * 'availabilityResults/availabilityPercentage', 'availabilityResults/duration',
 * 'billing/telemetryCount', 'customEvents/count'
 * @readonly
 * @enum {string}
 */
export type MetricId = 'requests/count' | 'requests/duration' | 'requests/failed' | 'users/count' | 'users/authenticated' | 'pageViews/count' | 'pageViews/duration' | 'client/processingDuration' | 'client/receiveDuration' | 'client/networkDuration' | 'client/sendDuration' | 'client/totalDuration' | 'dependencies/count' | 'dependencies/failed' | 'dependencies/duration' | 'exceptions/count' | 'exceptions/browser' | 'exceptions/server' | 'sessions/count' | 'performanceCounters/requestExecutionTime' | 'performanceCounters/requestsPerSecond' | 'performanceCounters/requestsInQueue' | 'performanceCounters/memoryAvailableBytes' | 'performanceCounters/exceptionsPerSecond' | 'performanceCounters/processCpuPercentage' | 'performanceCounters/processIOBytesPerSecond' | 'performanceCounters/processPrivateBytes' | 'performanceCounters/processorCpuPercentage' | 'availabilityResults/availabilityPercentage' | 'availabilityResults/duration' | 'billing/telemetryCount' | 'customEvents/count';

/**
 * Defines values for MetricsAggregation.
 * Possible values include: 'min', 'max', 'avg', 'sum', 'count', 'unique'
 * @readonly
 * @enum {string}
 */
export type MetricsAggregation = 'min' | 'max' | 'avg' | 'sum' | 'count' | 'unique';

/**
 * Defines values for MetricsSegment.
 * Possible values include: 'applicationBuild', 'applicationVersion',
 * 'authenticatedOrAnonymousTraffic', 'browser', 'browserVersion', 'city', 'cloudRoleName',
 * 'cloudServiceName', 'continent', 'countryOrRegion', 'deploymentId', 'deploymentUnit',
 * 'deviceType', 'environment', 'hostingLocation', 'instanceName'
 * @readonly
 * @enum {string}
 */
export type MetricsSegment = 'applicationBuild' | 'applicationVersion' | 'authenticatedOrAnonymousTraffic' | 'browser' | 'browserVersion' | 'city' | 'cloudRoleName' | 'cloudServiceName' | 'continent' | 'countryOrRegion' | 'deploymentId' | 'deploymentUnit' | 'deviceType' | 'environment' | 'hostingLocation' | 'instanceName';

/**
 * Defines values for EventType.
 * Possible values include: '$all', 'traces', 'customEvents', 'pageViews', 'browserTimings',
 * 'requests', 'dependencies', 'exceptions', 'availabilityResults', 'performanceCounters',
 * 'customMetrics'
 * @readonly
 * @enum {string}
 */
export type EventType = '$all' | 'traces' | 'customEvents' | 'pageViews' | 'browserTimings' | 'requests' | 'dependencies' | 'exceptions' | 'availabilityResults' | 'performanceCounters' | 'customMetrics';

/**
 * Contains response data for the get operation.
 */
export type MetricsGetResponse = MetricsResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: MetricsResult;
    };
};

/**
 * Contains response data for the getMultiple operation.
 */
export type MetricsGetMultipleResponse = Array<MetricsResultsItem> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: MetricsResultsItem[];
    };
};

/**
 * Contains response data for the getMetadata operation.
 */
export type MetricsGetMetadataResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the getByType operation.
 */
export type EventsGetByTypeResponse = EventsResults & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EventsResults;
    };
};

/**
 * Contains response data for the get operation.
 */
export type EventsGetResponse = EventsResults & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EventsResults;
    };
};

/**
 * Contains response data for the execute operation.
 */
export type QueryExecuteResponse = QueryResults & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: QueryResults;
    };
};
