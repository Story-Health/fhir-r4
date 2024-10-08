import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { IContactPoint } from "./ContactPoint";
import { IDevice_DeviceName } from "./Device_DeviceName";
import { IDevice_Property } from "./Device_Property";
import { IDevice_Specialization } from "./Device_Specialization";
import { IDevice_UdiCarrier } from "./Device_UdiCarrier";
import { IDevice_Version } from "./Device_Version";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export enum DeviceStatusKind {
  _active = "active",
  _inactive = "inactive",
  _enteredInError = "entered-in-error",
  _unknown = "unknown",
}

export interface IDevice extends IDomainResource {
  /**
   * This is a Device resource
   */
  resourceType: "Device";

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
   * Unique instance identifiers assigned to a device by manufacturers other organizations or owners.
   */
  identifier?: IIdentifier[];

  /**
   * The reference to the definition for the device.
   */
  definition?: IReference;

  /**
   * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
   */
  udiCarrier?: IDevice_UdiCarrier[];

  /**
   * Status of the Device availability.
   */
  status?: DeviceStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Reason for the dtatus of the Device availability.
   */
  statusReason?: ICodeableConcept[];

  /**
   * The distinct identification string as required by regulation for a human cell, tissue, or cellular and tissue-based product.
   */
  distinctIdentifier?: string;

  /**
   * Extensions for distinctIdentifier
   */
  _distinctIdentifier?: IElement;

  /**
   * A name of the manufacturer.
   */
  manufacturer?: string;

  /**
   * Extensions for manufacturer
   */
  _manufacturer?: IElement;

  /**
   * The date and time when the device was manufactured.
   */
  manufactureDate?: string;

  /**
   * Extensions for manufactureDate
   */
  _manufactureDate?: IElement;

  /**
   * The date and time beyond which this device is no longer valid or should not be used (if applicable).
   */
  expirationDate?: string;

  /**
   * Extensions for expirationDate
   */
  _expirationDate?: IElement;

  /**
   * Lot number assigned by the manufacturer.
   */
  lotNumber?: string;

  /**
   * Extensions for lotNumber
   */
  _lotNumber?: IElement;

  /**
   * The serial number assigned by the organization when the device was manufactured.
   */
  serialNumber?: string;

  /**
   * Extensions for serialNumber
   */
  _serialNumber?: IElement;

  /**
   * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
   */
  deviceName?: IDevice_DeviceName[];

  /**
   * The model number for the device.
   */
  modelNumber?: string;

  /**
   * Extensions for modelNumber
   */
  _modelNumber?: IElement;

  /**
   * The part number of the device.
   */
  partNumber?: string;

  /**
   * Extensions for partNumber
   */
  _partNumber?: IElement;

  /**
   * The kind or type of device.
   */
  type?: ICodeableConcept;

  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   */
  specialization?: IDevice_Specialization[];

  /**
   * The actual design of the device or software version running on the device.
   */
  version?: IDevice_Version[];

  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  property?: IDevice_Property[];

  /**
   * Patient information, If the device is affixed to a person.
   */
  patient?: IReference;

  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  owner?: IReference;

  /**
   * Contact details for an organization or a particular human that is responsible for the device.
   */
  contact?: IContactPoint[];

  /**
   * The place where the device can be found.
   */
  location?: IReference;

  /**
   * A network address on which the device may be contacted directly.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  note?: IAnnotation[];

  /**
   * Provides additional safety characteristics about a medical device.  For example devices containing latex.
   */
  safety?: ICodeableConcept[];

  /**
   * The parent device.
   */
  parent?: IReference;
}
