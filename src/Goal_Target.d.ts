import { ICodeableConcept } from "./CodeableConcept";
import { IDuration } from "./Duration";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IQuantity } from "./Quantity";
import { IRange } from "./Range";
import { IRatio } from "./Ratio";

export interface IGoal_Target {
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
   * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   */
  measure?: ICodeableConcept;

  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailQuantity?: IQuantity;

  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailRange?: IRange;

  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailCodeableConcept?: ICodeableConcept;

  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailString?: string;

  /**
   * Extensions for detailString
   */
  _detailString?: IElement;

  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailBoolean?: boolean;

  /**
   * Extensions for detailBoolean
   */
  _detailBoolean?: IElement;

  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailInteger?: number;

  /**
   * Extensions for detailInteger
   */
  _detailInteger?: IElement;

  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailRatio?: IRatio;

  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDate?: string;

  /**
   * Extensions for dueDate
   */
  _dueDate?: IElement;

  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDuration?: IDuration;
}
