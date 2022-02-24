import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";
import { ITiming } from "./Timing";
import { IVerificationResult_Attestation } from "./VerificationResult_Attestation";
import { IVerificationResult_PrimarySource } from "./VerificationResult_PrimarySource";
import { IVerificationResult_Validator } from "./VerificationResult_Validator";

export interface IVerificationResult extends IDomainResource {
  /**
   * This is a VerificationResult resource
   */
  resourceType: "VerificationResult";

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
   * A resource that was validated.
   */
  target?: IReference[];

  /**
   * The fhirpath location(s) within the resource that was validated.
   */
  targetLocation?: string[];

  /**
   * Extensions for targetLocation
   */
  _targetLocation?: IElement[];

  /**
   * The frequency with which the target must be validated (none; initial; periodic).
   */
  need?: ICodeableConcept;

  /**
   * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
   */
  status?: string;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * When the validation status was updated.
   */
  statusDate?: string;

  /**
   * Extensions for statusDate
   */
  _statusDate?: IElement;

  /**
   * What the target is validated against (nothing; primary source; multiple sources).
   */
  validationType?: ICodeableConcept;

  /**
   * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
   */
  validationProcess?: ICodeableConcept[];

  /**
   * Frequency of revalidation.
   */
  frequency?: ITiming;

  /**
   * The date/time validation was last completed (including failed validations).
   */
  lastPerformed?: string;

  /**
   * Extensions for lastPerformed
   */
  _lastPerformed?: IElement;

  /**
   * The date when target is next validated, if appropriate.
   */
  nextScheduled?: string;

  /**
   * Extensions for nextScheduled
   */
  _nextScheduled?: IElement;

  /**
   * The result if validation fails (fatal; warning; record only; none).
   */
  failureAction?: ICodeableConcept;

  /**
   * Information about the primary source(s) involved in validation.
   */
  primarySource?: IVerificationResult_PrimarySource[];

  /**
   * Information about the entity attesting to information.
   */
  attestation?: IVerificationResult_Attestation;

  /**
   * Information about the entity validating information.
   */
  validator?: IVerificationResult_Validator[];
}
