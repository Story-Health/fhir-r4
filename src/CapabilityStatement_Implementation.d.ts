import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IReference } from "./Reference";

export interface ICapabilityStatement_Implementation {
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
   * Information about the specific installation that this capability statement relates to.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * The organization responsible for the management of the instance and oversight of the data on the server at the specified URL.
   */
  custodian?: IReference;
}
