import { IConceptMap_Target } from "./ConceptMap_Target";
import { IElement } from "./Element";
import { IExtension } from "./Extension";

export interface IConceptMap_Element {
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
   * Identity (code or path) or the element/item being mapped.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * The display for the code. The display is only provided to help editors when editing the concept map.
   */
  display?: string;

  /**
   * Extensions for display
   */
  _display?: IElement;

  /**
   * A concept from the target value set that this concept maps to.
   */
  target?: IConceptMap_Target[];
}
