import { ICodeableConcept } from "./CodeableConcept";
import { IDataRequirement } from "./DataRequirement";
import { IDuration } from "./Duration";
import { IElement } from "./Element";
import { IExpression } from "./Expression";
import { IExtension } from "./Extension";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";
import { ITiming } from "./Timing";
import { ITriggerDefinition } from "./TriggerDefinition";
import { IUsageContext } from "./UsageContext";
export enum EvidenceVariable_CharacteristicGroupMeasureKind {
  _mean = "mean",
  _median = "median",
  _meanOfMean = "mean-of-mean",
  _meanOfMedian = "mean-of-median",
  _medianOfMean = "median-of-mean",
  _medianOfMedian = "median-of-median",
}

export interface IEvidenceVariable_Characteristic {
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
   * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionReference?: IReference;

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCanonical?: string;

  /**
   * Extensions for definitionCanonical
   */
  _definitionCanonical?: IElement;

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCodeableConcept?: ICodeableConcept;

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionExpression?: IExpression;

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionDataRequirement?: IDataRequirement;

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionTriggerDefinition?: ITriggerDefinition;

  /**
   * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
   */
  usageContext?: IUsageContext[];

  /**
   * When true, members with this characteristic are excluded from the element.
   */
  exclude?: boolean;

  /**
   * Extensions for exclude
   */
  _exclude?: IElement;

  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveDateTime?: string;

  /**
   * Extensions for participantEffectiveDateTime
   */
  _participantEffectiveDateTime?: IElement;

  /**
   * Indicates what effective period the study covers.
   */
  participantEffectivePeriod?: IPeriod;

  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveDuration?: IDuration;

  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveTiming?: ITiming;

  /**
   * Indicates duration from the participant's study entry.
   */
  timeFromStart?: IDuration;

  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  groupMeasure?: EvidenceVariable_CharacteristicGroupMeasureKind;

  /**
   * Extensions for groupMeasure
   */
  _groupMeasure?: IElement;
}
