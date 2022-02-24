import { IAttachment } from "./Attachment";
import { ICoding } from "./Coding";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IQuantity } from "./Quantity";
import { IReference } from "./Reference";

export interface IContract_Answer {
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
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueDecimal?: number;

  /**
   * Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueInteger?: number;

  /**
   * Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueDate?: string;

  /**
   * Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueDateTime?: string;

  /**
   * Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueTime?: string;

  /**
   * Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueUri?: string;

  /**
   * Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueAttachment?: IAttachment;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueCoding?: ICoding;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueQuantity?: IQuantity;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
   */
  valueReference?: IReference;
}
