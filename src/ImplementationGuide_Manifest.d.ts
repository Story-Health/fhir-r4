import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IImplementationGuide_Page1 } from "./ImplementationGuide_Page1";
import { IImplementationGuide_Resource1 } from "./ImplementationGuide_Resource1";

export interface IImplementationGuide_Manifest {
  /**
   * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
   */
  resource: IImplementationGuide_Resource1[];

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
   * A pointer to official web page, PDF or other rendering of the implementation guide.
   */
  rendering?: string;

  /**
   * Extensions for rendering
   */
  _rendering?: IElement;

  /**
   * Information about a page within the IG.
   */
  page?: IImplementationGuide_Page1[];

  /**
   * Indicates a relative path to an image that exists within the IG.
   */
  image?: string[];

  /**
   * Extensions for image
   */
  _image?: IElement[];

  /**
   * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
   */
  other?: string[];

  /**
   * Extensions for other
   */
  _other?: IElement[];
}
