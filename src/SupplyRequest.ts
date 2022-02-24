import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IQuantity } from "./Quantity";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";
import { ISupplyRequest_Parameter } from "./SupplyRequest_Parameter";
import { ITiming } from "./Timing";

export enum SupplyRequestStatusKind {
  _draft = "draft",
  _active = "active",
  _suspended = "suspended",
  _cancelled = "cancelled",
  _completed = "completed",
  _enteredInError = "entered-in-error",
  _unknown = "unknown",
}

export interface ISupplyRequest extends IDomainResource {
  /**
   * This is a SupplyRequest resource
   */
  resourceType: "SupplyRequest";

  /**
   * The amount that is being ordered of the indicated item.
   */
  quantity: IQuantity;

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
   * Business identifiers assigned to this SupplyRequest by the author and/or other systems. These identifiers remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * Status of the supply request.
   */
  status?: SupplyRequestStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
   */
  category?: ICodeableConcept;

  /**
   * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
   */
  priority?: string;

  /**
   * Extensions for priority
   */
  _priority?: IElement;

  /**
   * The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemReference?: IReference;

  /**
   * Specific parameters for the ordered item.  For example, the size of the indicated item.
   */
  parameter?: ISupplyRequest_Parameter[];

  /**
   * When the request should be fulfilled.
   */
  occurrenceDateTime?: string;

  /**
   * Extensions for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * When the request should be fulfilled.
   */
  occurrencePeriod?: IPeriod;

  /**
   * When the request should be fulfilled.
   */
  occurrenceTiming?: ITiming;

  /**
   * When the request was made.
   */
  authoredOn?: string;

  /**
   * Extensions for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * The device, practitioner, etc. who initiated the request.
   */
  requester?: IReference;

  /**
   * Who is intended to fulfill the request.
   */
  supplier?: IReference[];

  /**
   * The reason why the supply item was requested.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * The reason why the supply item was requested.
   */
  reasonReference?: IReference[];

  /**
   * Where the supply is expected to come from.
   */
  deliverFrom?: IReference;

  /**
   * Where the supply is destined to go.
   */
  deliverTo?: IReference;
}
