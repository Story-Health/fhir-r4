import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IGraphDefinition_Compartment } from "./GraphDefinition_Compartment";
import { IGraphDefinition_Link } from "./GraphDefinition_Link";

export interface IGraphDefinition_Target {
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
   * Type of resource this link refers to.
   */
  type?: string;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * A set of parameters to look up.
   */
  params?: string;

  /**
   * Extensions for params
   */
  _params?: IElement;

  /**
   * Profile for the target resource.
   */
  profile?: string;

  /**
   * Compartment Consistency Rules.
   */
  compartment?: IGraphDefinition_Compartment[];

  /**
   * Additional links from target resource.
   */
  link?: IGraphDefinition_Link[];
}
