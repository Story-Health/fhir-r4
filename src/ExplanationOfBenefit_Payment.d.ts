import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IMoney } from "./Money";

export interface IExplanationOfBenefit_Payment {
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
   * Whether this represents partial or complete payment of the benefits payable.
   */
  type?: ICodeableConcept;

  /**
   * Total amount of all adjustments to this payment included in this transaction which are not related to this claim's adjudication.
   */
  adjustment?: IMoney;

  /**
   * Reason for the payment adjustment.
   */
  adjustmentReason?: ICodeableConcept;

  /**
   * Estimated date the payment will be issued or the actual issue date of payment.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * Benefits payable less any payment adjustment.
   */
  amount?: IMoney;

  /**
   * Issuer's unique identifier for the payment instrument.
   */
  identifier?: IIdentifier;
}
