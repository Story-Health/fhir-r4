import { IAttachment } from "./Attachment";
import { ICodeableConcept } from "./CodeableConcept";
import { IContactPoint } from "./ContactPoint";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IHealthcareService_AvailableTime } from "./HealthcareService_AvailableTime";
import { IHealthcareService_Eligibility } from "./HealthcareService_Eligibility";
import { IHealthcareService_NotAvailable } from "./HealthcareService_NotAvailable";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export interface IHealthcareService extends IDomainResource {
  /**
   * This is a HealthcareService resource
   */
  resourceType: "HealthcareService";

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
   * External identifiers for this item.
   */
  identifier?: IIdentifier[];

  /**
   * This flag is used to mark the record to not be used. This is not used when a center is closed for maintenance, or for holidays, the notAvailable period is to be used for this.
   */
  active?: boolean;

  /**
   * Extensions for active
   */
  _active?: IElement;

  /**
   * The organization that provides this healthcare service.
   */
  providedBy?: IReference;

  /**
   * Identifies the broad category of service being performed or delivered.
   */
  category?: ICodeableConcept[];

  /**
   * The specific type of service that may be delivered or performed.
   */
  type?: ICodeableConcept[];

  /**
   * Collection of specialties handled by the service site. This is more of a medical term.
   */
  specialty?: ICodeableConcept[];

  /**
   * The location(s) where this healthcare service may be provided.
   */
  location?: IReference[];

  /**
   * Further description of the service as it would be presented to a consumer while searching.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
   */
  comment?: string;

  /**
   * Extensions for comment
   */
  _comment?: IElement;

  /**
   * Extra details about the service that can't be placed in the other fields.
   */
  extraDetails?: string;

  /**
   * Extensions for extraDetails
   */
  _extraDetails?: IElement;

  /**
   * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
   */
  photo?: IAttachment;

  /**
   * List of contacts related to this specific healthcare service.
   */
  telecom?: IContactPoint[];

  /**
   * The location(s) that this service is available to (not where the service is provided).
   */
  coverageArea?: IReference[];

  /**
   * The code(s) that detail the conditions under which the healthcare service is available/offered.
   */
  serviceProvisionCode?: ICodeableConcept[];

  /**
   * Does this service have specific eligibility requirements that need to be met in order to use the service?
   */
  eligibility?: IHealthcareService_Eligibility[];

  /**
   * Programs that this service is applicable to.
   */
  program?: ICodeableConcept[];

  /**
   * Collection of characteristics (attributes).
   */
  characteristic?: ICodeableConcept[];

  /**
   * Some services are specifically made available in multiple languages, this property permits a directory to declare the languages this is offered in. Typically this is only provided where a service operates in communities with mixed languages used.
   */
  communication?: ICodeableConcept[];

  /**
   * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
   */
  referralMethod?: ICodeableConcept[];

  /**
   * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
   */
  appointmentRequired?: boolean;

  /**
   * Extensions for appointmentRequired
   */
  _appointmentRequired?: IElement;

  /**
   * A collection of times that the Service Site is available.
   */
  availableTime?: IHealthcareService_AvailableTime[];

  /**
   * The HealthcareService is not available during this period of time due to the provided reason.
   */
  notAvailable?: IHealthcareService_NotAvailable[];

  /**
   * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   */
  availabilityExceptions?: string;

  /**
   * Extensions for availabilityExceptions
   */
  _availabilityExceptions?: IElement;

  /**
   * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
   */
  endpoint?: IReference[];
}
