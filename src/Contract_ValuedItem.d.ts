import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IMoney } from "./Money";
import { IQuantity } from "./Quantity";
import { IReference } from "./Reference";

export interface IContract_ValuedItem {
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
   * Specific type of Contract Valued Item that may be priced.
   */
  entityCodeableConcept?: ICodeableConcept;

  /**
   * Specific type of Contract Valued Item that may be priced.
   */
  entityReference?: IReference;

  /**
   * Identifies a Contract Valued Item instance.
   */
  identifier?: IIdentifier;

  /**
   * Indicates the time during which this Contract ValuedItem information is effective.
   */
  effectiveTime?: string;

  /**
   * Extensions for effectiveTime
   */
  _effectiveTime?: IElement;

  /**
   * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
   */
  quantity?: IQuantity;

  /**
   * A Contract Valued Item unit valuation measure.
   */
  unitPrice?: IMoney;

  /**
   * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
   */
  factor?: number;

  /**
   * Extensions for factor
   */
  _factor?: IElement;

  /**
   * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
   */
  points?: number;

  /**
   * Extensions for points
   */
  _points?: IElement;

  /**
   * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
   */
  net?: IMoney;

  /**
   * Terms of valuation.
   */
  payment?: string;

  /**
   * Extensions for payment
   */
  _payment?: IElement;

  /**
   * When payment is due.
   */
  paymentDate?: string;

  /**
   * Extensions for paymentDate
   */
  _paymentDate?: IElement;

  /**
   * Who will make payment.
   */
  responsible?: IReference;

  /**
   * Who will receive payment.
   */
  recipient?: IReference;

  /**
   * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
   */
  linkId?: string[];

  /**
   * Extensions for linkId
   */
  _linkId?: IElement[];

  /**
   * A set of security labels that define which terms are controlled by this condition.
   */
  securityLabelNumber?: number[];

  /**
   * Extensions for securityLabelNumber
   */
  _securityLabelNumber?: IElement[];
}
