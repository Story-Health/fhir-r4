import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";
import { ISupplyDelivery_SuppliedItem } from "./SupplyDelivery_SuppliedItem";
import { ITiming } from "./Timing";

export enum SupplyDeliveryStatusKind {
  _inProgress = "in-progress",
  _completed = "completed",
  _abandoned = "abandoned",
  _enteredInError = "entered-in-error",
}

export interface ISupplyDelivery extends IDomainResource {
  /**
   * This is a SupplyDelivery resource
   */
  resourceType: "SupplyDelivery";

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
   * Identifier for the supply delivery event that is used to identify it across multiple disparate systems.
   */
  identifier?: IIdentifier[];

  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  basedOn?: IReference[];

  /**
   * A larger event of which this particular event is a component or step.
   */
  partOf?: IReference[];

  /**
   * A code specifying the state of the dispense event.
   */
  status?: SupplyDeliveryStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A link to a resource representing the person whom the delivered item is for.
   */
  patient?: IReference;

  /**
   * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  type?: ICodeableConcept;

  /**
   * The item that is being delivered or has been supplied.
   */
  suppliedItem?: ISupplyDelivery_SuppliedItem;

  /**
   * The date or time(s) the activity occurred.
   */
  occurrenceDateTime?: string;

  /**
   * Extensions for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * The date or time(s) the activity occurred.
   */
  occurrencePeriod?: IPeriod;

  /**
   * The date or time(s) the activity occurred.
   */
  occurrenceTiming?: ITiming;

  /**
   * The individual responsible for dispensing the medication, supplier or device.
   */
  supplier?: IReference;

  /**
   * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
   */
  destination?: IReference;

  /**
   * Identifies the person who picked up the Supply.
   */
  receiver?: IReference[];
}
