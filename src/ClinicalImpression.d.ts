import { IAnnotation } from "./Annotation";
import { IClinicalImpression_Finding } from "./ClinicalImpression_Finding";
import { IClinicalImpression_Investigation } from "./ClinicalImpression_Investigation";
import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export interface IClinicalImpression extends IDomainResource {
  /**
   * This is a ClinicalImpression resource
   */
  resourceType: "ClinicalImpression";

  /**
   * The patient or group of individuals assessed as part of this record.
   */
  subject: IReference;

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
   * Business identifiers assigned to this clinical impression by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * Identifies the workflow status of the assessment.
   */
  status?: string;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Captures the reason for the current state of the ClinicalImpression.
   */
  statusReason?: ICodeableConcept;

  /**
   * Categorizes the type of clinical assessment performed.
   */
  code?: ICodeableConcept;

  /**
   * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * The point in time or period over which the subject was assessed.
   */
  effectiveDateTime?: string;

  /**
   * Extensions for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * The point in time or period over which the subject was assessed.
   */
  effectivePeriod?: IPeriod;

  /**
   * Indicates when the documentation of the assessment was complete.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * The clinician performing the assessment.
   */
  assessor?: IReference;

  /**
   * A reference to the last assessment that was conducted on this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.
   */
  previous?: IReference;

  /**
   * A list of the relevant problems/conditions for a patient.
   */
  problem?: IReference[];

  /**
   * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
   */
  investigation?: IClinicalImpression_Investigation[];

  /**
   * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
   */
  protocol?: string[];

  /**
   * Extensions for protocol
   */
  _protocol?: IElement[];

  /**
   * A text summary of the investigations and the diagnosis.
   */
  summary?: string;

  /**
   * Extensions for summary
   */
  _summary?: IElement;

  /**
   * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
   */
  finding?: IClinicalImpression_Finding[];

  /**
   * Estimate of likely outcome.
   */
  prognosisCodeableConcept?: ICodeableConcept[];

  /**
   * RiskAssessment expressing likely outcome.
   */
  prognosisReference?: IReference[];

  /**
   * Information supporting the clinical impression.
   */
  supportingInfo?: IReference[];

  /**
   * Commentary about the impression, typically recorded after the impression itself was made, though supplemental notes by the original author could also appear.
   */
  note?: IAnnotation[];
}
