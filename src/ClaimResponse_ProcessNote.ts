import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";

export enum ClaimResponse_ProcessNoteTypeKind {
  _display = "display",
  _print = "print",
  _printoper = "printoper",
}

export interface IClaimResponse_ProcessNote {
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
   * A number to uniquely identify a note entry.
   */
  number?: number;

  /**
   * Extensions for number
   */
  _number?: IElement;

  /**
   * The business purpose of the note text.
   */
  type?: ClaimResponse_ProcessNoteTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * The explanation or description associated with the processing.
   */
  text?: string;

  /**
   * Extensions for text
   */
  _text?: IElement;

  /**
   * A code to define the language used in the text of the note.
   */
  language?: ICodeableConcept;
}
