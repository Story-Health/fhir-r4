import { IElement } from "./Element";
import { IExtension } from "./Extension";

export interface IMessageDefinition_Focus {
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
   * The kind of resource that must be the focus for this message.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * A profile that reflects constraints for the focal resource (and potentially for related resources).
   */
  profile?: string;

  /**
   * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  min?: number;

  /**
   * Extensions for min
   */
  _min?: IElement;

  /**
   * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  max?: string;

  /**
   * Extensions for max
   */
  _max?: IElement;
}
