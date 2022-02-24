import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { IDeviceRequest_Parameter } from "./DeviceRequest_Parameter";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";
import { ITiming } from "./Timing";

export interface IDeviceRequest extends IDomainResource {
  /**
   * This is a DeviceRequest resource
   */
  resourceType: "DeviceRequest";

  /**
   * The patient who will use the device.
   */
  subject: IReference;

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
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  identifier?: IIdentifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this DeviceRequest.
   */
  instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this DeviceRequest.
   */
  instantiatesUri?: string[];

  /**
   * Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * Plan/proposal/order fulfilled by this request.
   */
  basedOn?: IReference[];

  /**
   * The request takes the place of the referenced completed or terminated request(s).
   */
  priorRequest?: IReference[];

  /**
   * Composite request this is part of.
   */
  groupIdentifier?: IIdentifier;

  /**
   * The status of the request.
   */
  status?: string;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Whether the request is a proposal, plan, an original order or a reflex order.
   */
  intent?: string;

  /**
   * Extensions for intent
   */
  _intent?: IElement;

  /**
   * Indicates how quickly the {{title}} should be addressed with respect to other requests.
   */
  priority?: string;

  /**
   * Extensions for priority
   */
  _priority?: IElement;

  /**
   * The details of the device to be used.
   */
  codeReference?: IReference;

  /**
   * The details of the device to be used.
   */
  codeCodeableConcept?: ICodeableConcept;

  /**
   * Specific parameters for the ordered item.  For example, the prism value for lenses.
   */
  parameter?: IDeviceRequest_Parameter[];

  /**
   * An encounter that provides additional context in which this request is made.
   */
  encounter?: IReference;

  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrenceDateTime?: string;

  /**
   * Extensions for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrencePeriod?: IPeriod;

  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrenceTiming?: ITiming;

  /**
   * When the request transitioned to being actionable.
   */
  authoredOn?: string;

  /**
   * Extensions for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  requester?: IReference;

  /**
   * Desired type of performer for doing the diagnostic testing.
   */
  performerType?: ICodeableConcept;

  /**
   * The desired performer for doing the diagnostic testing.
   */
  performer?: IReference;

  /**
   * Reason or justification for the use of this device.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Reason or justification for the use of this device.
   */
  reasonReference?: IReference[];

  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
   */
  insurance?: IReference[];

  /**
   * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).
   */
  supportingInfo?: IReference[];

  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  note?: IAnnotation[];

  /**
   * Key events in the history of the request.
   */
  relevantHistory?: IReference[];
}
