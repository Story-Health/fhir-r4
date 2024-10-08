import { IElement } from "./Element";
import { IExtension } from "./Extension";

export enum DurationComparatorKind {
  _lower = "Lower",
  _lowerOrEqual = "LowerOrEqual",
  _greaterOrEqual = "GreaterOrEqual",
  _greater = "Greater",
}

export interface IDuration {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The value of the measured amount. The value includes an implicit precision in the presentation of the value.
   */
  value?: number;

  /**
   * Extensions for value
   */
  _value?: IElement;

  /**
   * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
   */
  comparator?: DurationComparatorKind;

  /**
   * Extensions for comparator
   */
  _comparator?: IElement;

  /**
   * A human-readable form of the unit.
   */
  unit?: string;

  /**
   * Extensions for unit
   */
  _unit?: IElement;

  /**
   * The identification of the system that provides the coded form of the unit.
   */
  system?: string;

  /**
   * Extensions for system
   */
  _system?: IElement;

  /**
   * A computer processable form of the unit in some unit representation system.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;
}
