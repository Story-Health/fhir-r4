import { IAge } from "./Age";
import { ICodeableConcept } from "./CodeableConcept";
import { IDuration } from "./Duration";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IPeriod } from "./Period";
import { IRange } from "./Range";
import { IReference } from "./Reference";
import { IRelatedArtifact } from "./RelatedArtifact";
import { IRequestGroup_Condition } from "./RequestGroup_Condition";
import { IRequestGroup_RelatedAction } from "./RequestGroup_RelatedAction";
import { ITiming } from "./Timing";

export interface IRequestGroup_Action {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * A user-visible prefix for the action.
   */
  prefix?: string;

  /**
   * Extensions for prefix
   */
  _prefix?: IElement;

  /**
   * The title of the action displayed to a user.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * A short description of the action used to provide a summary to display to the user.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
   */
  textEquivalent?: string;

  /**
   * Extensions for textEquivalent
   */
  _textEquivalent?: IElement;

  /**
   * Indicates how quickly the action should be addressed with respect to other actions.
   */
  priority?: string;

  /**
   * Extensions for priority
   */
  _priority?: IElement;

  /**
   * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
   */
  code?: ICodeableConcept[];

  /**
   * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
   */
  documentation?: IRelatedArtifact[];

  /**
   * An expression that describes applicability criteria, or start/stop conditions for the action.
   */
  condition?: IRequestGroup_Condition[];

  /**
   * A relationship to another action such as "before" or "30-60 minutes after start of".
   */
  relatedAction?: IRequestGroup_RelatedAction[];

  /**
   * An optional value describing when the action should be performed.
   */
  timingDateTime?: string;

  /**
   * Extensions for timingDateTime
   */
  _timingDateTime?: IElement;

  /**
   * An optional value describing when the action should be performed.
   */
  timingAge?: IAge;

  /**
   * An optional value describing when the action should be performed.
   */
  timingPeriod?: IPeriod;

  /**
   * An optional value describing when the action should be performed.
   */
  timingDuration?: IDuration;

  /**
   * An optional value describing when the action should be performed.
   */
  timingRange?: IRange;

  /**
   * An optional value describing when the action should be performed.
   */
  timingTiming?: ITiming;

  /**
   * The participant that should perform or be responsible for this action.
   */
  participant?: IReference[];

  /**
   * The type of action to perform (create, update, remove).
   */
  type?: ICodeableConcept;

  /**
   * Defines the grouping behavior for the action and its children.
   */
  groupingBehavior?: string;

  /**
   * Extensions for groupingBehavior
   */
  _groupingBehavior?: IElement;

  /**
   * Defines the selection behavior for the action and its children.
   */
  selectionBehavior?: string;

  /**
   * Extensions for selectionBehavior
   */
  _selectionBehavior?: IElement;

  /**
   * Defines expectations around whether an action is required.
   */
  requiredBehavior?: string;

  /**
   * Extensions for requiredBehavior
   */
  _requiredBehavior?: IElement;

  /**
   * Defines whether the action should usually be preselected.
   */
  precheckBehavior?: string;

  /**
   * Extensions for precheckBehavior
   */
  _precheckBehavior?: IElement;

  /**
   * Defines whether the action can be selected multiple times.
   */
  cardinalityBehavior?: string;

  /**
   * Extensions for cardinalityBehavior
   */
  _cardinalityBehavior?: IElement;

  /**
   * The resource that is the target of the action (e.g. CommunicationRequest).
   */
  resource?: IReference;

  /**
   * Sub actions.
   */
  action?: IRequestGroup_Action[];
}
