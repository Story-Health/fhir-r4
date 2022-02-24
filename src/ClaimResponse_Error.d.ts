import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";

export interface IClaimResponse_Error {
  /**
   * An error code, from a specified code system, which details why the claim could not be adjudicated.
   */
  code: ICodeableConcept;

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
   * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   */
  itemSequence?: number;

  /**
   * Extensions for itemSequence
   */
  _itemSequence?: IElement;

  /**
   * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   */
  detailSequence?: number;

  /**
   * Extensions for detailSequence
   */
  _detailSequence?: IElement;

  /**
   * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
   */
  subDetailSequence?: number;

  /**
   * Extensions for subDetailSequence
   */
  _subDetailSequence?: IElement;
}
