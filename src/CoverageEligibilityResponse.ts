import { ICodeableConcept } from "./CodeableConcept";
import { ICoverageEligibilityResponse_Error } from "./CoverageEligibilityResponse_Error";
import { ICoverageEligibilityResponse_Insurance } from "./CoverageEligibilityResponse_Insurance";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export enum CoverageEligibilityResponsePurposeKind {
  _authRequirements = "auth-requirements",
  _benefits = "benefits",
  _discovery = "discovery",
  _validation = "validation",
}
export enum CoverageEligibilityResponseOutcomeKind {
  _queued = "queued",
  _complete = "complete",
  _error = "error",
  _partial = "partial",
}

export interface ICoverageEligibilityResponse extends IDomainResource {
  /**
   * This is a CoverageEligibilityResponse resource
   */
  resourceType: "CoverageEligibilityResponse";

  /**
   * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
   */
  patient: IReference;

  /**
   * Reference to the original request resource.
   */
  request: IReference;

  /**
   * The Insurer who issued the coverage in question and is the author of the response.
   */
  insurer: IReference;

  /**
   * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
   */
  meta?: IMeta;

  /**
   * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * Extensions for implicitRules
   */
  _implicitRules?: IElement;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * Extensions for language
   */
  _language?: IElement;

  /**
   * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: INarrative;

  /**
   * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
   */
  contained?: IResourceList[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  identifier?: IIdentifier[];

  /**
   * The status of the resource instance.
   */
  status?: string;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  purpose?: CoverageEligibilityResponsePurposeKind[];

  /**
   * Extensions for purpose
   */
  _purpose?: IElement[];

  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedDate?: string;

  /**
   * Extensions for servicedDate
   */
  _servicedDate?: IElement;

  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedPeriod?: IPeriod;

  /**
   * The date this resource was created.
   */
  created?: string;

  /**
   * Extensions for created
   */
  _created?: IElement;

  /**
   * The provider which is responsible for the request.
   */
  requestor?: IReference;

  /**
   * The outcome of the request processing.
   */
  outcome?: CoverageEligibilityResponseOutcomeKind;

  /**
   * Extensions for outcome
   */
  _outcome?: IElement;

  /**
   * A human readable description of the status of the adjudication.
   */
  disposition?: string;

  /**
   * Extensions for disposition
   */
  _disposition?: IElement;

  /**
   * Financial instruments for reimbursement for the health care products and services.
   */
  insurance?: ICoverageEligibilityResponse_Insurance[];

  /**
   * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
   */
  preAuthRef?: string;

  /**
   * Extensions for preAuthRef
   */
  _preAuthRef?: IElement;

  /**
   * A code for the form to be used for printing the content.
   */
  form?: ICodeableConcept;

  /**
   * Errors encountered during the processing of the request.
   */
  error?: ICoverageEligibilityResponse_Error[];
}
