import { IElement } from "./Element";
import { IExtension } from "./Extension";

export enum NarrativeStatusKind {
  _generated = "generated",
  _extensions = "extensions",
  _additional = "additional",
  _empty = "empty",
}

export interface INarrative {
  /**
   * The actual narrative content, a stripped down version of XHTML.
   */
  div: string;

  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
   */
  status?: NarrativeStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;
}
