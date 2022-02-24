import { IElement } from "./Element";
import { IExampleScenario_ContainedInstance } from "./ExampleScenario_ContainedInstance";
import { IExampleScenario_Version } from "./ExampleScenario_Version";
import { IExtension } from "./Extension";

export interface IExampleScenario_Instance {
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
   * The id of the resource for referencing.
   */
  resourceId?: string;

  /**
   * Extensions for resourceId
   */
  _resourceId?: IElement;

  /**
   * The type of the resource.
   */
  resourceType?: string;

  /**
   * Extensions for resourceType
   */
  _resourceType?: IElement;

  /**
   * A short name for the resource instance.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Human-friendly description of the resource instance.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * A specific version of the resource.
   */
  version?: IExampleScenario_Version[];

  /**
   * Resources contained in the instance (e.g. the observations contained in a bundle).
   */
  containedInstance?: IExampleScenario_ContainedInstance[];
}
