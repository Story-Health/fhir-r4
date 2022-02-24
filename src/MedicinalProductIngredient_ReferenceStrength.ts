import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IRatio } from "./Ratio";

export interface IMedicinalProductIngredient_ReferenceStrength {
  /**
   * Strength expressed in terms of a reference substance.
   */
  strength: IRatio;

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
   * Relevant reference substance.
   */
  substance?: ICodeableConcept;

  /**
   * Strength expressed in terms of a reference substance.
   */
  strengthLowLimit?: IRatio;

  /**
   * For when strength is measured at a particular point or distance.
   */
  measurementPoint?: string;

  /**
   * Extensions for measurementPoint
   */
  _measurementPoint?: IElement;

  /**
   * The country or countries for which the strength range applies.
   */
  country?: ICodeableConcept[];
}
