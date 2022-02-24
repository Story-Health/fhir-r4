import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IPeriod } from "./Period";
export enum NamingSystem_UniqueIdTypeKind {
  _oid = "oid",
  _uuid = "uuid",
  _uri = "uri",
  _other = "other",
}

export interface INamingSystem_UniqueId {
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
   * Identifies the unique identifier scheme used for this particular identifier.
   */
  type?: NamingSystem_UniqueIdTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * The string that should be sent over the wire to identify the code system or identifier system.
   */
  value?: string;

  /**
   * Extensions for value
   */
  _value?: IElement;

  /**
   * Indicates whether this identifier is the "preferred" identifier of this type.
   */
  preferred?: boolean;

  /**
   * Extensions for preferred
   */
  _preferred?: IElement;

  /**
   * Notes about the past or intended usage of this identifier.
   */
  comment?: string;

  /**
   * Extensions for comment
   */
  _comment?: IElement;

  /**
   * Identifies the period of time over which this identifier is considered appropriate to refer to the naming system.  Outside of this window, the identifier might be non-deterministic.
   */
  period?: IPeriod;
}
