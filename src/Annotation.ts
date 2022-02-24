import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IReference } from "./Reference";

export interface IAnnotation {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The individual responsible for making the annotation.
   */
  authorReference?: IReference;

  /**
   * The individual responsible for making the annotation.
   */
  authorString?: string;

  /**
   * Extensions for authorString
   */
  _authorString?: IElement;

  /**
   * Indicates when this particular annotation was made.
   */
  time?: string;

  /**
   * Extensions for time
   */
  _time?: IElement;

  /**
   * The text of the annotation in markdown format.
   */
  text?: string;

  /**
   * Extensions for text
   */
  _text?: IElement;
}
