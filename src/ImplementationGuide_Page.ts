import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IReference } from "./Reference";
export enum ImplementationGuide_PageGenerationKind {
  _html = "html",
  _markdown = "markdown",
  _xml = "xml",
  _generated = "generated",
}

export interface IImplementationGuide_Page {
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
   * The source address for the page.
   */
  nameUrl?: string;

  /**
   * Extensions for nameUrl
   */
  _nameUrl?: IElement;

  /**
   * The source address for the page.
   */
  nameReference?: IReference;

  /**
   * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * A code that indicates how the page is generated.
   */
  generation?: ImplementationGuide_PageGenerationKind;

  /**
   * Extensions for generation
   */
  _generation?: IElement;

  /**
   * Nested Pages/Sections under this page.
   */
  page?: IImplementationGuide_Page[];
}
