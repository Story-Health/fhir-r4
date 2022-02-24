import { IExtension } from "./Extension";
import { IQuantity } from "./Quantity";
import { IRatio } from "./Ratio";
import { ITiming } from "./Timing";

export interface INutritionOrder_Administration {
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
   * The time period and frequency at which the enteral formula should be delivered to the patient.
   */
  schedule?: ITiming;

  /**
   * The volume of formula to provide to the patient per the specified administration schedule.
   */
  quantity?: IQuantity;

  /**
   * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
   */
  rateQuantity?: IQuantity;

  /**
   * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
   */
  rateRatio?: IRatio;
}
