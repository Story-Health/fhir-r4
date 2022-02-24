import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IDomainResource } from "./IDomainResource";
import { IMedicationKnowledge_AdministrationGuidelines } from "./MedicationKnowledge_AdministrationGuidelines";
import { IMedicationKnowledge_Cost } from "./MedicationKnowledge_Cost";
import { IMedicationKnowledge_DrugCharacteristic } from "./MedicationKnowledge_DrugCharacteristic";
import { IMedicationKnowledge_Ingredient } from "./MedicationKnowledge_Ingredient";
import { IMedicationKnowledge_Kinetics } from "./MedicationKnowledge_Kinetics";
import { IMedicationKnowledge_MedicineClassification } from "./MedicationKnowledge_MedicineClassification";
import { IMedicationKnowledge_MonitoringProgram } from "./MedicationKnowledge_MonitoringProgram";
import { IMedicationKnowledge_Monograph } from "./MedicationKnowledge_Monograph";
import { IMedicationKnowledge_Packaging } from "./MedicationKnowledge_Packaging";
import { IMedicationKnowledge_Regulatory } from "./MedicationKnowledge_Regulatory";
import { IMedicationKnowledge_RelatedMedicationKnowledge } from "./MedicationKnowledge_RelatedMedicationKnowledge";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IQuantity } from "./Quantity";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export interface IMedicationKnowledge extends IDomainResource {
  /**
   * This is a MedicationKnowledge resource
   */
  resourceType: "MedicationKnowledge";

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
   * A code that specifies this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
   */
  code?: ICodeableConcept;

  /**
   * A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties.
   */
  status?: string;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
   */
  manufacturer?: IReference;

  /**
   * Describes the form of the item.  Powder; tablets; capsule.
   */
  doseForm?: ICodeableConcept;

  /**
   * Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).
   */
  amount?: IQuantity;

  /**
   * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
   */
  synonym?: string[];

  /**
   * Extensions for synonym
   */
  _synonym?: IElement[];

  /**
   * Associated or related knowledge about a medication.
   */
  relatedMedicationKnowledge?: IMedicationKnowledge_RelatedMedicationKnowledge[];

  /**
   * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
   */
  associatedMedication?: IReference[];

  /**
   * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
   */
  productType?: ICodeableConcept[];

  /**
   * Associated documentation about the medication.
   */
  monograph?: IMedicationKnowledge_Monograph[];

  /**
   * Identifies a particular constituent of interest in the product.
   */
  ingredient?: IMedicationKnowledge_Ingredient[];

  /**
   * The instructions for preparing the medication.
   */
  preparationInstruction?: string;

  /**
   * Extensions for preparationInstruction
   */
  _preparationInstruction?: IElement;

  /**
   * The intended or approved route of administration.
   */
  intendedRoute?: ICodeableConcept[];

  /**
   * The price of the medication.
   */
  cost?: IMedicationKnowledge_Cost[];

  /**
   * The program under which the medication is reviewed.
   */
  monitoringProgram?: IMedicationKnowledge_MonitoringProgram[];

  /**
   * Guidelines for the administration of the medication.
   */
  administrationGuidelines?: IMedicationKnowledge_AdministrationGuidelines[];

  /**
   * Categorization of the medication within a formulary or classification system.
   */
  medicineClassification?: IMedicationKnowledge_MedicineClassification[];

  /**
   * Information that only applies to packages (not products).
   */
  packaging?: IMedicationKnowledge_Packaging;

  /**
   * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
   */
  drugCharacteristic?: IMedicationKnowledge_DrugCharacteristic[];

  /**
   * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
   */
  contraindication?: IReference[];

  /**
   * Regulatory information about a medication.
   */
  regulatory?: IMedicationKnowledge_Regulatory[];

  /**
   * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
   */
  kinetics?: IMedicationKnowledge_Kinetics[];
}
