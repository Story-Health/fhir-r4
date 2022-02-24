import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IGoal_Target } from "./Goal_Target";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export enum GoalLifecycleStatusKind {
  _proposed = "proposed",
  _planned = "planned",
  _accepted = "accepted",
  _active = "active",
  _onHold = "on-hold",
  _completed = "completed",
  _cancelled = "cancelled",
  _enteredInError = "entered-in-error",
  _rejected = "rejected",
}

export interface IGoal extends IDomainResource {
  /**
   * This is a Goal resource
   */
  resourceType: "Goal";

  /**
   * Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding".
   */
  description: ICodeableConcept;

  /**
   * Identifies the patient, group or organization for whom the goal is being established.
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
   * Business identifiers assigned to this goal by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * The state of the goal throughout its lifecycle.
   */
  lifecycleStatus?: GoalLifecycleStatusKind;

  /**
   * Extensions for lifecycleStatus
   */
  _lifecycleStatus?: IElement;

  /**
   * Describes the progression, or lack thereof, towards the goal against the target.
   */
  achievementStatus?: ICodeableConcept;

  /**
   * Indicates a category the goal falls within.
   */
  category?: ICodeableConcept[];

  /**
   * Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.
   */
  priority?: ICodeableConcept;

  /**
   * The date or event after which the goal should begin being pursued.
   */
  startDate?: string;

  /**
   * Extensions for startDate
   */
  _startDate?: IElement;

  /**
   * The date or event after which the goal should begin being pursued.
   */
  startCodeableConcept?: ICodeableConcept;

  /**
   * Indicates what should be done by when.
   */
  target?: IGoal_Target[];

  /**
   * Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.
   */
  statusDate?: string;

  /**
   * Extensions for statusDate
   */
  _statusDate?: IElement;

  /**
   * Captures the reason for the current status.
   */
  statusReason?: string;

  /**
   * Extensions for statusReason
   */
  _statusReason?: IElement;

  /**
   * Indicates whose goal this is - patient goal, practitioner goal, etc.
   */
  expressedBy?: IReference;

  /**
   * The identified conditions and other health record elements that are intended to be addressed by the goal.
   */
  addresses?: IReference[];

  /**
   * Any comments related to the goal.
   */
  note?: IAnnotation[];

  /**
   * Identifies the change (or lack of change) at the point when the status of the goal is assessed.
   */
  outcomeCode?: ICodeableConcept[];

  /**
   * Details of what's changed (or not changed).
   */
  outcomeReference?: IReference[];
}
