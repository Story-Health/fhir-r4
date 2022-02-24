import { IElement } from "./Element";
import { IExtension } from "./Extension";

export interface ICodeSystem_Filter {
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
   * The code that identifies this filter when it is used as a filter in [[[ValueSet]]].compose.include.filter.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * A description of how or why the filter is used.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * A list of operators that can be used with the filter.
   */
  operator?: string[];

  /**
   * Extensions for operator
   */
  _operator?: IElement[];

  /**
   * A description of what the value for the filter should be.
   */
  value?: string;

  /**
   * Extensions for value
   */
  _value?: IElement;
}
