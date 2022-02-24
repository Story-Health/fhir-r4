import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";

export interface IObservationDefinition_QuantitativeDetails {
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
   * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  customaryUnit?: ICodeableConcept;

  /**
   * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  unit?: ICodeableConcept;

  /**
   * Factor for converting value expressed with SI unit to value expressed with customary unit.
   */
  conversionFactor?: number;

  /**
   * Extensions for conversionFactor
   */
  _conversionFactor?: IElement;

  /**
   * Number of digits after decimal separator when the results of such observations are of type Quantity.
   */
  decimalPrecision?: number;

  /**
   * Extensions for decimalPrecision
   */
  _decimalPrecision?: IElement;
}
