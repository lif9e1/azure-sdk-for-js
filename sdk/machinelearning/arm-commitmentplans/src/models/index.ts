/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing SkuCapacity.
 * Describes scaling information of a SKU.
 *
 */
export interface SkuCapacity {
  /**
   * @member {number} [minimum] The minimum capacity.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly minimum?: number;
  /**
   * @member {number} [maximum] The maximum capacity that can be set.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly maximum?: number;
  /**
   * @member {number} [default] The default capacity.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly default?: number;
  /**
   * @member {SkuCapacityScaleType} [scaleType] The scale type applicable to
   * the sku. Possible values include: 'Automatic', 'Manual', 'None'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly scaleType?: SkuCapacityScaleType;
}

/**
 * @interface
 * An interface representing SkuCapability.
 * Describes The SKU capabilites object.
 *
 */
export interface SkuCapability {
  /**
   * @member {string} [name] The capability name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [value] The capability value.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly value?: string;
}

/**
 * @interface
 * An interface representing SkuCost.
 * Describes metadata for SKU cost info.
 *
 */
export interface SkuCost {
  /**
   * @member {string} [meterID] The meter used for this part of a SKU's cost.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly meterID?: string;
  /**
   * @member {number} [quantity] The multiplier for the meter ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly quantity?: number;
  /**
   * @member {string} [extendedUnit] The overall duration represented by the
   * quantity.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly extendedUnit?: string;
}

/**
 * @interface
 * An interface representing SkuRestrictions.
 * Describes restrictions which would prevent a SKU from being used.
 *
 */
export interface SkuRestrictions {
  /**
   * @member {ResourceSkuRestrictionsType} [type] The type of restrictions.
   * Possible values include: 'location', 'zone'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: ResourceSkuRestrictionsType;
  /**
   * @member {string[]} [values] The value of restrictions. If the restriction
   * type is set to location. This would be different locations where the SKU
   * is restricted.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly values?: string[];
  /**
   * @member {ResourceSkuRestrictionsReasonCode} [reasonCode] The reason for
   * restriction. Possible values include: 'QuotaId',
   * 'NotAvailableForSubscription'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly reasonCode?: ResourceSkuRestrictionsReasonCode;
}

/**
 * @interface
 * An interface representing CatalogSku.
 * Details of a commitment plan SKU.
 *
 */
export interface CatalogSku {
  /**
   * @member {string} [resourceType] Resource type name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resourceType?: string;
  /**
   * @member {string} [name] SKU name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [tier] SKU tier
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly tier?: string;
  /**
   * @member {string[]} [locations] Regions where the SKU is available.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly locations?: string[];
  /**
   * @member {SkuCapacity} [capacity] SKU scaling information
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly capacity?: SkuCapacity;
  /**
   * @member {SkuCapability[]} [capabilities] The capability information for
   * the specified SKU.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly capabilities?: SkuCapability[];
  /**
   * @member {SkuCost[]} [costs] The cost information for the specified SKU.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly costs?: SkuCost[];
  /**
   * @member {SkuRestrictions[]} [restrictions] Restrictions which would
   * prevent a SKU from being used. This is empty if there are no restrictions.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly restrictions?: SkuRestrictions[];
}

/**
 * @interface
 * An interface representing Resource.
 * Common properties of an ARM resource.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource Id.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} location Resource location.
   */
  location: string;
  /**
   * @member {string} [type] Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] User-defined tags for
   * the resource.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing CommitmentAssociationProperties.
 * Properties of an Azure ML commitment association.
 *
 */
export interface CommitmentAssociationProperties {
  /**
   * @member {string} [associatedResourceId] The ID of the resource this
   * association points to, such as the ARM ID of an Azure ML web service.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly associatedResourceId?: string;
  /**
   * @member {string} [commitmentPlanId] The ARM ID of the parent Azure ML
   * commitment plan.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly commitmentPlanId?: string;
  /**
   * @member {Date} [creationDate] The date at which this commitment
   * association was created, in ISO 8601 format.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly creationDate?: Date;
}

/**
 * @interface
 * An interface representing CommitmentAssociation.
 * Represents the association between a commitment plan and some other
 * resource, such as a Machine Learning web service.
 *
 * @extends Resource
 */
export interface CommitmentAssociation extends Resource {
  /**
   * @member {string} [etag] An entity tag used to enforce optimistic
   * concurrency.
   */
  etag?: string;
  /**
   * @member {CommitmentAssociationProperties} [properties] The properties of
   * the commitment association resource.
   */
  properties?: CommitmentAssociationProperties;
}

/**
 * @interface
 * An interface representing ResourceSku.
 * The SKU of a resource.
 *
 */
export interface ResourceSku {
  /**
   * @member {number} [capacity] The scale-out capacity of the resource. 1 is
   * 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment
   * plan resource.
   */
  capacity?: number;
  /**
   * @member {string} [name] The SKU name. Along with tier, uniquely identifies
   * the SKU.
   */
  name?: string;
  /**
   * @member {string} [tier] The SKU tier. Along with name, uniquely identifies
   * the SKU.
   */
  tier?: string;
}

/**
 * @interface
 * An interface representing MoveCommitmentAssociationRequest.
 * Specifies the destination Azure ML commitment plan for a move operation.
 *
 */
export interface MoveCommitmentAssociationRequest {
  /**
   * @member {string} [destinationPlanId] The ARM ID of the commitment plan to
   * re-parent the commitment association to.
   */
  destinationPlanId?: string;
}

/**
 * @interface
 * An interface representing CommitmentPlanPatchPayload.
 * The properties of a commitment plan which may be updated via PATCH.
 *
 */
export interface CommitmentPlanPatchPayload {
  /**
   * @member {{ [propertyName: string]: string }} [tags] User-defined tags for
   * the commitment plan.
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {ResourceSku} [sku] The commitment plan SKU.
   */
  sku?: ResourceSku;
}

/**
 * @interface
 * An interface representing PlanQuantity.
 * Represents the quantity a commitment plan provides of a metered resource.
 *
 */
export interface PlanQuantity {
  /**
   * @member {number} [allowance] The quantity added to the commitment plan at
   * an interval specified by its allowance frequency.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly allowance?: number;
  /**
   * @member {number} [amount] The quantity available to the plan the last time
   * usage was calculated.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly amount?: number;
  /**
   * @member {string} [includedQuantityMeter] The Azure meter for usage against
   * included quantities.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly includedQuantityMeter?: string;
  /**
   * @member {string} [overageMeter] The Azure meter for usage which exceeds
   * included quantities.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly overageMeter?: string;
}

/**
 * @interface
 * An interface representing CommitmentPlanProperties.
 * Properties of an Azure ML commitment plan.
 *
 */
export interface CommitmentPlanProperties {
  /**
   * @member {boolean} [chargeForOverage] Indicates whether usage beyond the
   * commitment plan's included quantities will be charged.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly chargeForOverage?: boolean;
  /**
   * @member {boolean} [chargeForPlan] Indicates whether the commitment plan
   * will incur a charge.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly chargeForPlan?: boolean;
  /**
   * @member {Date} [creationDate] The date at which this commitment plan was
   * created, in ISO 8601 format.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly creationDate?: Date;
  /**
   * @member {{ [propertyName: string]: PlanQuantity }} [includedQuantities]
   * The included resource quantities this plan gives you.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly includedQuantities?: { [propertyName: string]: PlanQuantity };
  /**
   * @member {number} [maxAssociationLimit] The maximum number of commitment
   * associations that can be children of this commitment plan.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly maxAssociationLimit?: number;
  /**
   * @member {number} [maxCapacityLimit] The maximum scale-out capacity for
   * this commitment plan.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly maxCapacityLimit?: number;
  /**
   * @member {number} [minCapacityLimit] The minimum scale-out capacity for
   * this commitment plan.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly minCapacityLimit?: number;
  /**
   * @member {string} [planMeter] The Azure meter which will be used to charge
   * for this commitment plan.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly planMeter?: string;
  /**
   * @member {number} [refillFrequencyInDays] The frequency at which this
   * commitment plan's included quantities are refilled.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly refillFrequencyInDays?: number;
  /**
   * @member {boolean} [suspendPlanOnOverage] Indicates whether this commitment
   * plan will be moved into a suspended state if usage goes beyond the
   * commitment plan's included quantities.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly suspendPlanOnOverage?: boolean;
}

/**
 * @interface
 * An interface representing CommitmentPlan.
 * An Azure ML commitment plan resource.
 *
 * @extends Resource
 */
export interface CommitmentPlan extends Resource {
  /**
   * @member {string} [etag] An entity tag used to enforce optimistic
   * concurrency.
   */
  etag?: string;
  /**
   * @member {CommitmentPlanProperties} [properties] The commitment plan
   * properties.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly properties?: CommitmentPlanProperties;
  /**
   * @member {ResourceSku} [sku] The commitment plan SKU.
   */
  sku?: ResourceSku;
}

/**
 * @interface
 * An interface representing PlanUsageHistory.
 * Represents historical information about usage of the Azure resources
 * associated with a commitment plan.
 *
 */
export interface PlanUsageHistory {
  /**
   * @member {{ [propertyName: string]: number }} [planDeletionOverage] Overage
   * incurred as a result of deleting a commitment plan.
   */
  planDeletionOverage?: { [propertyName: string]: number };
  /**
   * @member {{ [propertyName: string]: number }} [planMigrationOverage]
   * Overage incurred as a result of migrating a commitment plan from one SKU
   * to another.
   */
  planMigrationOverage?: { [propertyName: string]: number };
  /**
   * @member {{ [propertyName: string]: number }} [planQuantitiesAfterUsage]
   * Included quantities remaining after usage against the commitment plan's
   * associated resources was calculated.
   */
  planQuantitiesAfterUsage?: { [propertyName: string]: number };
  /**
   * @member {{ [propertyName: string]: number }} [planQuantitiesBeforeUsage]
   * Included quantities remaining before usage against the commitment plan's
   * associated resources was calculated.
   */
  planQuantitiesBeforeUsage?: { [propertyName: string]: number };
  /**
   * @member {{ [propertyName: string]: number }} [planUsageOverage] Usage
   * against the commitment plan's associated resources which was not covered
   * by included quantities and is therefore overage.
   */
  planUsageOverage?: { [propertyName: string]: number };
  /**
   * @member {{ [propertyName: string]: number }} [usage] Usage against the
   * commitment plan's associated resources.
   */
  usage?: { [propertyName: string]: number };
  /**
   * @member {Date} [usageDate] The date of usage, in ISO 8601 format.
   */
  usageDate?: Date;
}

/**
 * @interface
 * An interface representing CommitmentAssociationsListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommitmentAssociationsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skipToken] Continuation token for pagination.
   */
  skipToken?: string;
}

/**
 * @interface
 * An interface representing CommitmentPlansListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommitmentPlansListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skipToken] Continuation token for pagination.
   */
  skipToken?: string;
}

/**
 * @interface
 * An interface representing CommitmentPlansListInResourceGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommitmentPlansListInResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skipToken] Continuation token for pagination.
   */
  skipToken?: string;
}

/**
 * @interface
 * An interface representing UsageHistoryListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface UsageHistoryListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skipToken] Continuation token for pagination.
   */
  skipToken?: string;
}

/**
 * @interface
 * An interface representing AzureMLCommitmentPlansManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface AzureMLCommitmentPlansManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the SkuListResult.
 * The list of commitment plan SKUs.
 *
 * @extends Array<CatalogSku>
 */
export interface SkuListResult extends Array<CatalogSku> {
}

/**
 * @interface
 * An interface representing the CommitmentAssociationListResult.
 * A page of commitment association resources.
 *
 * @extends Array<CommitmentAssociation>
 */
export interface CommitmentAssociationListResult extends Array<CommitmentAssociation> {
  /**
   * @member {string} [nextLink] A URI to retrieve the next page of results.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the CommitmentPlanListResult.
 * A page of commitment plan resources.
 *
 * @extends Array<CommitmentPlan>
 */
export interface CommitmentPlanListResult extends Array<CommitmentPlan> {
  /**
   * @member {string} [nextLink] A URI to retrieve the next page of results.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the PlanUsageHistoryListResult.
 * A page of usage history.
 *
 * @extends Array<PlanUsageHistory>
 */
export interface PlanUsageHistoryListResult extends Array<PlanUsageHistory> {
  /**
   * @member {string} [nextLink] A URI to retrieve the next page of results.
   */
  nextLink?: string;
}

/**
 * Defines values for SkuCapacityScaleType.
 * Possible values include: 'Automatic', 'Manual', 'None'
 * @readonly
 * @enum {string}
 */
export type SkuCapacityScaleType = 'Automatic' | 'Manual' | 'None';

/**
 * Defines values for ResourceSkuRestrictionsType.
 * Possible values include: 'location', 'zone'
 * @readonly
 * @enum {string}
 */
export type ResourceSkuRestrictionsType = 'location' | 'zone';

/**
 * Defines values for ResourceSkuRestrictionsReasonCode.
 * Possible values include: 'QuotaId', 'NotAvailableForSubscription'
 * @readonly
 * @enum {string}
 */
export type ResourceSkuRestrictionsReasonCode = 'QuotaId' | 'NotAvailableForSubscription';

/**
 * Contains response data for the list operation.
 */
export type SkusListResponse = SkuListResult & {
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
      parsedBody: SkuListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type CommitmentAssociationsGetResponse = CommitmentAssociation & {
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
      parsedBody: CommitmentAssociation;
    };
};

/**
 * Contains response data for the list operation.
 */
export type CommitmentAssociationsListResponse = CommitmentAssociationListResult & {
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
      parsedBody: CommitmentAssociationListResult;
    };
};

/**
 * Contains response data for the move operation.
 */
export type CommitmentAssociationsMoveResponse = CommitmentAssociation & {
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
      parsedBody: CommitmentAssociation;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type CommitmentAssociationsListNextResponse = CommitmentAssociationListResult & {
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
      parsedBody: CommitmentAssociationListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type CommitmentPlansGetResponse = CommitmentPlan & {
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
      parsedBody: CommitmentPlan;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type CommitmentPlansCreateOrUpdateResponse = CommitmentPlan & {
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
      parsedBody: CommitmentPlan;
    };
};

/**
 * Contains response data for the patch operation.
 */
export type CommitmentPlansPatchResponse = CommitmentPlan & {
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
      parsedBody: CommitmentPlan;
    };
};

/**
 * Contains response data for the list operation.
 */
export type CommitmentPlansListResponse = CommitmentPlanListResult & {
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
      parsedBody: CommitmentPlanListResult;
    };
};

/**
 * Contains response data for the listInResourceGroup operation.
 */
export type CommitmentPlansListInResourceGroupResponse = CommitmentPlanListResult & {
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
      parsedBody: CommitmentPlanListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type CommitmentPlansListNextResponse = CommitmentPlanListResult & {
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
      parsedBody: CommitmentPlanListResult;
    };
};

/**
 * Contains response data for the listInResourceGroupNext operation.
 */
export type CommitmentPlansListInResourceGroupNextResponse = CommitmentPlanListResult & {
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
      parsedBody: CommitmentPlanListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type UsageHistoryListResponse = PlanUsageHistoryListResult & {
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
      parsedBody: PlanUsageHistoryListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type UsageHistoryListNextResponse = PlanUsageHistoryListResult & {
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
      parsedBody: PlanUsageHistoryListResult;
    };
};