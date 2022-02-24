import { IAttachment } from "./Attachment";
import { ICodeableConcept } from "./CodeableConcept";
import { ICoding } from "./Coding";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IPeriod } from "./Period";
import { IQuantity } from "./Quantity";
import { IReference } from "./Reference";

export interface IExplanationOfBenefit_SupportingInfo {
  /**
   * The general class of the information supplied: information; exception; accident, employment; onset, etc.
   */
  category: ICodeableConcept;

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
   * A number to uniquely identify supporting information entries.
   */
  sequence?: number;

  /**
   * Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
   */
  code?: ICodeableConcept;

  /**
   * The date when or period to which this information refers.
   */
  timingDate?: string;

  /**
   * Extensions for timingDate
   */
  _timingDate?: IElement;

  /**
   * The date when or period to which this information refers.
   */
  timingPeriod?: IPeriod;

  /**
   * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueQuantity?: IQuantity;

  /**
   * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueAttachment?: IAttachment;

  /**
   * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
   */
  valueReference?: IReference;

  /**
   * Provides the reason in the situation where a reason code is required in addition to the content.
   */
  reason?: ICoding;
}
