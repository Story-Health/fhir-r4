import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";

export enum IdentifierUseKind {
  _usual = "usual",
  _official = "official",
  _temp = "temp",
  _secondary = "secondary",
  _old = "old",
}

export interface IIdentifier {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The purpose of this identifier.
   */
  use?: IdentifierUseKind;

  /**
   * Extensions for use
   */
  _use?: IElement;

  /**
   * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
   */
  type?: ICodeableConcept;

  /**
   * Establishes the namespace for the value - that is, a URL that describes a set values that are unique.
   */
  system?: string;

  /**
   * Extensions for system
   */
  _system?: IElement;

  /**
   * The portion of the identifier typically relevant to the user and which is unique within the context of the system.
   */
  value?: string;

  /**
   * Extensions for value
   */
  _value?: IElement;

  /**
   * Time period during which identifier is/was valid for use.
   */
  period?: IPeriod;

  /**
   * Organization that issued/manages the identifier.
   */
  assigner?: IReference;
}
