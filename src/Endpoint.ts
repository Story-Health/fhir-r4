import { ICodeableConcept } from "./CodeableConcept";
import { ICoding } from "./Coding";
import { IContactPoint } from "./ContactPoint";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export enum EndpointStatusKind {
  _active = "active",
  _suspended = "suspended",
  _error = "error",
  _off = "off",
  _enteredInError = "entered-in-error",
  _test = "test",
}

export interface IEndpoint extends IDomainResource {
  /**
   * This is a Endpoint resource
   */
  resourceType: "Endpoint";

  /**
   * A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook).
   */
  connectionType: ICoding;

  /**
   * The payload type describes the acceptable content that can be communicated on the endpoint.
   */
  payloadType: ICodeableConcept[];

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
   * Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
   */
  identifier?: IIdentifier[];

  /**
   * active | suspended | error | off | test.
   */
  status?: EndpointStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A friendly name that this endpoint can be referred to with.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * The organization that manages this endpoint (even if technically another organization is hosting this in the cloud, it is the organization associated with the data).
   */
  managingOrganization?: IReference;

  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  contact?: IContactPoint[];

  /**
   * The interval during which the endpoint is expected to be operational.
   */
  period?: IPeriod;

  /**
   * The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType).
   */
  payloadMimeType?: string[];

  /**
   * Extensions for payloadMimeType
   */
  _payloadMimeType?: IElement[];

  /**
   * The uri that describes the actual end-point to connect to.
   */
  address?: string;

  /**
   * Extensions for address
   */
  _address?: IElement;

  /**
   * Additional headers / information to send as part of the notification.
   */
  header?: string[];

  /**
   * Extensions for header
   */
  _header?: IElement[];
}
