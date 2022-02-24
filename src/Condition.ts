import { IAge } from "./Age";
import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { ICondition_Evidence } from "./Condition_Evidence";
import { ICondition_Stage } from "./Condition_Stage";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IRange } from "./Range";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export interface ICondition extends IDomainResource {
  /**
   * This is a Condition resource
   */
  resourceType: "Condition";

  /**
   * Indicates the patient or group who the condition record is associated with.
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
   * Business identifiers assigned to this condition by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * The clinical status of the condition.
   */
  clinicalStatus?: ICodeableConcept;

  /**
   * The verification status to support the clinical status of the condition.
   */
  verificationStatus?: ICodeableConcept;

  /**
   * A category assigned to the condition.
   */
  category?: ICodeableConcept[];

  /**
   * A subjective assessment of the severity of the condition as evaluated by the clinician.
   */
  severity?: ICodeableConcept;

  /**
   * Identification of the condition, problem or diagnosis.
   */
  code?: ICodeableConcept;

  /**
   * The anatomical location where this condition manifests itself.
   */
  bodySite?: ICodeableConcept[];

  /**
   * The Encounter during which this Condition was created or to which the creation of this record is tightly associated.
   */
  encounter?: IReference;

  /**
   * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetDateTime?: string;

  /**
   * Extensions for onsetDateTime
   */
  _onsetDateTime?: IElement;

  /**
   * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetAge?: IAge;

  /**
   * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetPeriod?: IPeriod;

  /**
   * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetRange?: IRange;

  /**
   * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetString?: string;

  /**
   * Extensions for onsetString
   */
  _onsetString?: IElement;

  /**
   * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementDateTime?: string;

  /**
   * Extensions for abatementDateTime
   */
  _abatementDateTime?: IElement;

  /**
   * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementAge?: IAge;

  /**
   * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementPeriod?: IPeriod;

  /**
   * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementRange?: IRange;

  /**
   * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementString?: string;

  /**
   * Extensions for abatementString
   */
  _abatementString?: IElement;

  /**
   * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
   */
  recordedDate?: string;

  /**
   * Extensions for recordedDate
   */
  _recordedDate?: IElement;

  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: IReference;

  /**
   * Individual who is making the condition statement.
   */
  asserter?: IReference;

  /**
   * Clinical stage or grade of a condition. May include formal severity assessments.
   */
  stage?: ICondition_Stage[];

  /**
   * Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition.
   */
  evidence?: ICondition_Evidence[];

  /**
   * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
   */
  note?: IAnnotation[];
}
