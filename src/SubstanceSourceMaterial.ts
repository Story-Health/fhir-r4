import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IResourceList } from "./ResourceList";
import { ISubstanceSourceMaterial_FractionDescription } from "./SubstanceSourceMaterial_FractionDescription";
import { ISubstanceSourceMaterial_Organism } from "./SubstanceSourceMaterial_Organism";
import { ISubstanceSourceMaterial_PartDescription } from "./SubstanceSourceMaterial_PartDescription";

export interface ISubstanceSourceMaterial extends IDomainResource {
  /**
   * This is a SubstanceSourceMaterial resource
   */
  resourceType: "SubstanceSourceMaterial";

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
   * General high level classification of the source material specific to the origin of the material.
   */
  sourceMaterialClass?: ICodeableConcept;

  /**
   * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent.
   */
  sourceMaterialType?: ICodeableConcept;

  /**
   * The state of the source material when extracted.
   */
  sourceMaterialState?: ICodeableConcept;

  /**
   * The unique identifier associated with the source material parent organism shall be specified.
   */
  organismId?: IIdentifier;

  /**
   * The organism accepted Scientific name shall be provided based on the organism taxonomy.
   */
  organismName?: string;

  /**
   * Extensions for organismName
   */
  _organismName?: IElement;

  /**
   * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
   */
  parentSubstanceId?: IIdentifier[];

  /**
   * The parent substance of the Herbal Drug, or Herbal preparation.
   */
  parentSubstanceName?: string[];

  /**
   * Extensions for parentSubstanceName
   */
  _parentSubstanceName?: IElement[];

  /**
   * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate.
   */
  countryOfOrigin?: ICodeableConcept[];

  /**
   * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
   */
  geographicalLocation?: string[];

  /**
   * Extensions for geographicalLocation
   */
  _geographicalLocation?: IElement[];

  /**
   * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum).
   */
  developmentStage?: ICodeableConcept;

  /**
   * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
   */
  fractionDescription?: ISubstanceSourceMaterial_FractionDescription[];

  /**
   * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
   */
  organism?: ISubstanceSourceMaterial_Organism;

  /**
   * To do.
   */
  partDescription?: ISubstanceSourceMaterial_PartDescription[];
}
