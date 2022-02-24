import { ICodeableConcept } from "./CodeableConcept";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IInsurancePlan_GeneralCost } from "./InsurancePlan_GeneralCost";
import { IInsurancePlan_SpecificCost } from "./InsurancePlan_SpecificCost";
import { IReference } from "./Reference";

export interface IInsurancePlan_Plan {
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
   * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * Type of plan. For example, "Platinum" or "High Deductable".
   */
  type?: ICodeableConcept;

  /**
   * The geographic region in which a health insurance plan's benefits apply.
   */
  coverageArea?: IReference[];

  /**
   * Reference to the network that providing the type of coverage.
   */
  network?: IReference[];

  /**
   * Overall costs associated with the plan.
   */
  generalCost?: IInsurancePlan_GeneralCost[];

  /**
   * Costs associated with the coverage provided by the product.
   */
  specificCost?: IInsurancePlan_SpecificCost[];
}
