import { ICoding } from "./Coding";
import { IElement } from "./Element";
import { IExtension } from "./Extension";

export interface ICodeSystem_Property1 {
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
   * A code that is a reference to CodeSystem.property.code.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * The value of this property.
   */
  valueCode?: string;

  /**
   * Extensions for valueCode
   */
  _valueCode?: IElement;

  /**
   * The value of this property.
   */
  valueCoding?: ICoding;

  /**
   * The value of this property.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * The value of this property.
   */
  valueInteger?: number;

  /**
   * Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * The value of this property.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The value of this property.
   */
  valueDateTime?: string;

  /**
   * Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * The value of this property.
   */
  valueDecimal?: number;

  /**
   * Extensions for valueDecimal
   */
  _valueDecimal?: IElement;
}
