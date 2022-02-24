import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IQuantity } from "./Quantity";
import { IVisionPrescription_Prism } from "./VisionPrescription_Prism";

export enum VisionPrescription_LensSpecificationEyeKind {
  _right = "right",
  _left = "left",
}

export interface IVisionPrescription_LensSpecification {
  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  product: ICodeableConcept;

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
   * The eye for which the lens specification applies.
   */
  eye?: VisionPrescription_LensSpecificationEyeKind;

  /**
   * Extensions for eye
   */
  _eye?: IElement;

  /**
   * Lens power measured in dioptres (0.25 units).
   */
  sphere?: number;

  /**
   * Extensions for sphere
   */
  _sphere?: IElement;

  /**
   * Power adjustment for astigmatism measured in dioptres (0.25 units).
   */
  cylinder?: number;

  /**
   * Extensions for cylinder
   */
  _cylinder?: IElement;

  /**
   * Adjustment for astigmatism measured in integer degrees.
   */
  axis?: number;

  /**
   * Extensions for axis
   */
  _axis?: IElement;

  /**
   * Allows for adjustment on two axis.
   */
  prism?: IVisionPrescription_Prism[];

  /**
   * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   */
  add?: number;

  /**
   * Extensions for add
   */
  _add?: IElement;

  /**
   * Contact lens power measured in dioptres (0.25 units).
   */
  power?: number;

  /**
   * Extensions for power
   */
  _power?: IElement;

  /**
   * Back curvature measured in millimetres.
   */
  backCurve?: number;

  /**
   * Extensions for backCurve
   */
  _backCurve?: IElement;

  /**
   * Contact lens diameter measured in millimetres.
   */
  diameter?: number;

  /**
   * Extensions for diameter
   */
  _diameter?: IElement;

  /**
   * The recommended maximum wear period for the lens.
   */
  duration?: IQuantity;

  /**
   * Special color or pattern.
   */
  color?: string;

  /**
   * Extensions for color
   */
  _color?: IElement;

  /**
   * Brand recommendations or restrictions.
   */
  brand?: string;

  /**
   * Extensions for brand
   */
  _brand?: IElement;

  /**
   * Notes for special requirements such as coatings and lens materials.
   */
  note?: IAnnotation[];
}
