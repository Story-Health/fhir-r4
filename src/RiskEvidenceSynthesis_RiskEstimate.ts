import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IRiskEvidenceSynthesis_PrecisionEstimate } from "./RiskEvidenceSynthesis_PrecisionEstimate";

export interface IRiskEvidenceSynthesis_RiskEstimate {
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
   * Human-readable summary of risk estimate.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Examples include proportion and mean.
   */
  type?: ICodeableConcept;

  /**
   * The point estimate of the risk estimate.
   */
  value?: number;

  /**
   * Extensions for value
   */
  _value?: IElement;

  /**
   * Specifies the UCUM unit for the outcome.
   */
  unitOfMeasure?: ICodeableConcept;

  /**
   * The sample size for the group that was measured for this risk estimate.
   */
  denominatorCount?: number;

  /**
   * Extensions for denominatorCount
   */
  _denominatorCount?: IElement;

  /**
   * The number of group members with the outcome of interest.
   */
  numeratorCount?: number;

  /**
   * Extensions for numeratorCount
   */
  _numeratorCount?: IElement;

  /**
   * A description of the precision of the estimate for the effect.
   */
  precisionEstimate?: IRiskEvidenceSynthesis_PrecisionEstimate[];
}
