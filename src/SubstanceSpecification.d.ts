import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";
import { ISubstanceSpecification_Code } from "./SubstanceSpecification_Code";
import { ISubstanceSpecification_Moiety } from "./SubstanceSpecification_Moiety";
import { ISubstanceSpecification_MolecularWeight } from "./SubstanceSpecification_MolecularWeight";
import { ISubstanceSpecification_Name } from "./SubstanceSpecification_Name";
import { ISubstanceSpecification_Property } from "./SubstanceSpecification_Property";
import { ISubstanceSpecification_Relationship } from "./SubstanceSpecification_Relationship";
import { ISubstanceSpecification_Structure } from "./SubstanceSpecification_Structure";

export interface ISubstanceSpecification extends IDomainResource {
  /**
   * This is a SubstanceSpecification resource
   */
  resourceType: "SubstanceSpecification";

  /**
   * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
   */
  meta?: IMeta;

  /**
   * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * Extensions for implicitRules
   */
  _implicitRules?: IElement;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * Extensions for language
   */
  _language?: IElement;

  /**
   * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: INarrative;

  /**
   * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
   */
  contained?: IResourceList[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * Identifier by which this substance is known.
   */
  identifier?: IIdentifier;

  /**
   * High level categorization, e.g. polymer or nucleic acid.
   */
  type?: ICodeableConcept;

  /**
   * Status of substance within the catalogue e.g. approved.
   */
  status?: ICodeableConcept;

  /**
   * If the substance applies to only human or veterinary use.
   */
  domain?: ICodeableConcept;

  /**
   * Textual description of the substance.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Supporting literature.
   */
  source?: IReference[];

  /**
   * Textual comment about this record of a substance.
   */
  comment?: string;

  /**
   * Extensions for comment
   */
  _comment?: IElement;

  /**
   * Moiety, for structural modifications.
   */
  moiety?: ISubstanceSpecification_Moiety[];

  /**
   * General specifications for this substance, including how it is related to other substances.
   */
  property?: ISubstanceSpecification_Property[];

  /**
   * General information detailing this substance.
   */
  referenceInformation?: IReference;

  /**
   * Structural information.
   */
  structure?: ISubstanceSpecification_Structure;

  /**
   * Codes associated with the substance.
   */
  code?: ISubstanceSpecification_Code[];

  /**
   * Names applicable to this substance.
   */
  name?: ISubstanceSpecification_Name[];

  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids).
   */
  molecularWeight?: ISubstanceSpecification_MolecularWeight[];

  /**
   * A link between this substance and another, with details of the relationship.
   */
  relationship?: ISubstanceSpecification_Relationship[];

  /**
   * Data items specific to nucleic acids.
   */
  nucleicAcid?: IReference;

  /**
   * Data items specific to polymers.
   */
  polymer?: IReference;

  /**
   * Data items specific to proteins.
   */
  protein?: IReference;

  /**
   * Material or taxonomic/anatomical source for the substance.
   */
  sourceMaterial?: IReference;
}
