import { ICodeableConcept } from "./CodeableConcept";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IQuantity } from "./Quantity";
import { ISubstanceSpecification_MolecularWeight } from "./SubstanceSpecification_MolecularWeight";

export interface ISubstanceSpecification_Isotope {
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
   * Substance identifier for each non-natural or radioisotope.
   */
  identifier?: IIdentifier;

  /**
   * Substance name for each non-natural or radioisotope.
   */
  name?: ICodeableConcept;

  /**
   * The type of isotopic substitution present in a single substance.
   */
  substitution?: ICodeableConcept;

  /**
   * Half life - for a non-natural nuclide.
   */
  halfLife?: IQuantity;

  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids).
   */
  molecularWeight?: ISubstanceSpecification_MolecularWeight;
}
