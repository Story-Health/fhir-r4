import { IAuditEvent_Agent } from "./AuditEvent_Agent";
import { IAuditEvent_Entity } from "./AuditEvent_Entity";
import { IAuditEvent_Source } from "./AuditEvent_Source";
import { ICodeableConcept } from "./CodeableConcept";
import { ICoding } from "./Coding";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IResourceList } from "./ResourceList";

export enum AuditEventActionKind {
  _c = "C",
  _r = "R",
  _u = "U",
  _d = "D",
  _e = "E",
}
export enum AuditEventOutcomeKind {
  _success = "0",
  _minorFailure = "4",
  _seriousFailure = "8",
  _majorFailure = "12",
}

export interface IAuditEvent extends IDomainResource {
  /**
   * This is a AuditEvent resource
   */
  resourceType: "AuditEvent";

  /**
   * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
   */
  type: ICoding;

  /**
   * An actor taking an active role in the event or activity that is logged.
   */
  agent: IAuditEvent_Agent[];

  /**
   * The system that is reporting the event.
   */
  source: IAuditEvent_Source;

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
   * Identifier for the category of event.
   */
  subtype?: ICoding[];

  /**
   * Indicator for type of action performed during the event that generated the audit.
   */
  action?: AuditEventActionKind;

  /**
   * Extensions for action
   */
  _action?: IElement;

  /**
   * The period during which the activity occurred.
   */
  period?: IPeriod;

  /**
   * The time when the event was recorded.
   */
  recorded: string;

  /**
   * Extensions for recorded
   */
  _recorded?: IElement;

  /**
   * Indicates whether the event succeeded or failed.
   */
  outcome?: AuditEventOutcomeKind;

  /**
   * Extensions for outcome
   */
  _outcome?: IElement;

  /**
   * A free text description of the outcome of the event.
   */
  outcomeDesc?: string;

  /**
   * Extensions for outcomeDesc
   */
  _outcomeDesc?: IElement;

  /**
   * The purposeOfUse (reason) that was used during the event being recorded.
   */
  purposeOfEvent?: ICodeableConcept[];

  /**
   * Specific instances of data or objects that have been accessed.
   */
  entity?: IAuditEvent_Entity[];
}
