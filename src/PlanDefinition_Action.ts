import { IAge } from "./Age";
import { ICodeableConcept } from "./CodeableConcept";
import { IDataRequirement } from "./DataRequirement";
import { IDuration } from "./Duration";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IPeriod } from "./Period";
import { IPlanDefinition_Condition } from "./PlanDefinition_Condition";
import { IPlanDefinition_DynamicValue } from "./PlanDefinition_DynamicValue";
import { IPlanDefinition_Participant } from "./PlanDefinition_Participant";
import { IPlanDefinition_RelatedAction } from "./PlanDefinition_RelatedAction";
import { IRange } from "./Range";
import { IReference } from "./Reference";
import { IRelatedArtifact } from "./RelatedArtifact";
import { ITiming } from "./Timing";
import { ITriggerDefinition } from "./TriggerDefinition";

export enum PlanDefinition_ActionGroupingBehaviorKind {
  _visualGroup = "visual-group",
  _logicalGroup = "logical-group",
  _sentenceGroup = "sentence-group",
}
export enum PlanDefinition_ActionSelectionBehaviorKind {
  _any = "any",
  _all = "all",
  _allOrNone = "all-or-none",
  _exactlyOne = "exactly-one",
  _atMostOne = "at-most-one",
  _oneOrMore = "one-or-more",
}
export enum PlanDefinition_ActionRequiredBehaviorKind {
  _must = "must",
  _could = "could",
  _mustUnlessDocumented = "must-unless-documented",
}
export enum PlanDefinition_ActionPrecheckBehaviorKind {
  _yes = "yes",
  _no = "no",
}
export enum PlanDefinition_ActionCardinalityBehaviorKind {
  _single = "single",
  _multiple = "multiple",
}

export interface IPlanDefinition_Action {
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
   * A brief description of the action used to provide a summary to display to the user.
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
   * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template.
   */
  code?: ICodeableConcept[];

  /**
   * A description of why this action is necessary or appropriate.
   */
  reason?: ICodeableConcept[];

  /**
   * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
   */
  documentation?: IRelatedArtifact[];

  /**
   * Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
   */
  goalId?: string[];

  /**
   * Extensions for goalId
   */
  _goalId?: IElement[];

  /**
   * A code or group definition that describes the intended subject of the action and its children, if any.
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * A code or group definition that describes the intended subject of the action and its children, if any.
   */
  subjectReference?: IReference;

  /**
   * A description of when the action should be triggered.
   */
  trigger?: ITriggerDefinition[];

  /**
   * An expression that describes applicability criteria or start/stop conditions for the action.
   */
  condition?: IPlanDefinition_Condition[];

  /**
   * Defines input data requirements for the action.
   */
  input?: IDataRequirement[];

  /**
   * Defines the outputs of the action, if any.
   */
  output?: IDataRequirement[];

  /**
   * A relationship to another action such as "before" or "30-60 minutes after start of".
   */
  relatedAction?: IPlanDefinition_RelatedAction[];

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
   * Indicates who should participate in performing the action described.
   */
  participant?: IPlanDefinition_Participant[];

  /**
   * The type of action to perform (create, update, remove).
   */
  type?: ICodeableConcept;

  /**
   * Defines the grouping behavior for the action and its children.
   */
  groupingBehavior?: PlanDefinition_ActionGroupingBehaviorKind;

  /**
   * Extensions for groupingBehavior
   */
  _groupingBehavior?: IElement;

  /**
   * Defines the selection behavior for the action and its children.
   */
  selectionBehavior?: PlanDefinition_ActionSelectionBehaviorKind;

  /**
   * Extensions for selectionBehavior
   */
  _selectionBehavior?: IElement;

  /**
   * Defines the required behavior for the action.
   */
  requiredBehavior?: PlanDefinition_ActionRequiredBehaviorKind;

  /**
   * Extensions for requiredBehavior
   */
  _requiredBehavior?: IElement;

  /**
   * Defines whether the action should usually be preselected.
   */
  precheckBehavior?: PlanDefinition_ActionPrecheckBehaviorKind;

  /**
   * Extensions for precheckBehavior
   */
  _precheckBehavior?: IElement;

  /**
   * Defines whether the action can be selected multiple times.
   */
  cardinalityBehavior?: PlanDefinition_ActionCardinalityBehaviorKind;

  /**
   * Extensions for cardinalityBehavior
   */
  _cardinalityBehavior?: IElement;

  /**
   * A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.
   */
  definitionCanonical?: string;

  /**
   * Extensions for definitionCanonical
   */
  _definitionCanonical?: IElement;

  /**
   * A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.
   */
  definitionUri?: string;

  /**
   * Extensions for definitionUri
   */
  _definitionUri?: IElement;

  /**
   * A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
   */
  transform?: string;

  /**
   * Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
   */
  dynamicValue?: IPlanDefinition_DynamicValue[];

  /**
   * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
   */
  action?: IPlanDefinition_Action[];
}
