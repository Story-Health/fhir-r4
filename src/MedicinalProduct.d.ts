import { ICodeableConcept } from "./CodeableConcept";
import { ICoding } from "./Coding";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMarketingStatus } from "./MarketingStatus";
import { IMedicinalProduct_ManufacturingBusinessOperation } from "./MedicinalProduct_ManufacturingBusinessOperation";
import { IMedicinalProduct_Name } from "./MedicinalProduct_Name";
import { IMedicinalProduct_SpecialDesignation } from "./MedicinalProduct_SpecialDesignation";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export interface IMedicinalProduct extends IDomainResource {
  /**
   * This is a MedicinalProduct resource
   */
  resourceType: "MedicinalProduct";

  /**
   * The product's name, including full name and possibly coded parts.
   */
  name: IMedicinalProduct_Name[];

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
   * Business identifier for this product. Could be an MPID.
   */
  identifier?: IIdentifier[];

  /**
   * Regulatory type, e.g. Investigational or Authorized.
   */
  type?: ICodeableConcept;

  /**
   * If this medicine applies to human or veterinary uses.
   */
  domain?: ICoding;

  /**
   * The dose form for a single part product, or combined form of a multiple part product.
   */
  combinedPharmaceuticalDoseForm?: ICodeableConcept;

  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  legalStatusOfSupply?: ICodeableConcept;

  /**
   * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
   */
  additionalMonitoringIndicator?: ICodeableConcept;

  /**
   * Whether the Medicinal Product is subject to special measures for regulatory reasons.
   */
  specialMeasures?: string[];

  /**
   * Extensions for specialMeasures
   */
  _specialMeasures?: IElement[];

  /**
   * If authorised for use in children.
   */
  paediatricUseIndicator?: ICodeableConcept;

  /**
   * Allows the product to be classified by various systems.
   */
  productClassification?: ICodeableConcept[];

  /**
   * Marketing status of the medicinal product, in contrast to marketing authorizaton.
   */
  marketingStatus?: IMarketingStatus[];

  /**
   * Pharmaceutical aspects of product.
   */
  pharmaceuticalProduct?: IReference[];

  /**
   * Package representation for the product.
   */
  packagedMedicinalProduct?: IReference[];

  /**
   * Supporting documentation, typically for regulatory submission.
   */
  attachedDocument?: IReference[];

  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
   */
  masterFile?: IReference[];

  /**
   * A product specific contact, person (in a role), or an organization.
   */
  contact?: IReference[];

  /**
   * Clinical trials or studies that this product is involved in.
   */
  clinicalTrial?: IReference[];

  /**
   * Reference to another product, e.g. for linking authorised to investigational product.
   */
  crossReference?: IIdentifier[];

  /**
   * An operation applied to the product, for manufacturing or adminsitrative purpose.
   */
  manufacturingBusinessOperation?: IMedicinalProduct_ManufacturingBusinessOperation[];

  /**
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
   */
  specialDesignation?: IMedicinalProduct_SpecialDesignation[];
}
