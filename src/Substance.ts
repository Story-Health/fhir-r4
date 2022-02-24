import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IResourceList } from "./ResourceList";
import { ISubstance_Ingredient } from "./Substance_Ingredient";
import { ISubstance_Instance } from "./Substance_Instance";

export enum SubstanceStatusKind {
  _active = "active",
  _inactive = "inactive",
  _enteredInError = "entered-in-error",
}

export interface ISubstance extends IDomainResource {
  /**
   * This is a Substance resource
   */
  resourceType: "Substance";

  /**
   * A code (or set of codes) that identify this substance.
   */
  code: ICodeableConcept;

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
   * Unique identifier for the substance.
   */
  identifier?: IIdentifier[];

  /**
   * A code to indicate if the substance is actively used.
   */
  status?: SubstanceStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes.
   */
  category?: ICodeableConcept[];

  /**
   * A description of the substance - its appearance, handling requirements, and other usage notes.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
   */
  instance?: ISubstance_Instance[];

  /**
   * A substance can be composed of other substances.
   */
  ingredient?: ISubstance_Ingredient[];
}
