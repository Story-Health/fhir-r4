import { IAge } from "./Age";
import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IFamilyMemberHistory_Condition } from "./FamilyMemberHistory_Condition";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IRange } from "./Range";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export enum FamilyMemberHistoryStatusKind {
  _partial = "partial",
  _completed = "completed",
  _enteredInError = "entered-in-error",
  _healthUnknown = "health-unknown",
}

export interface IFamilyMemberHistory extends IDomainResource {
  /**
   * This is a FamilyMemberHistory resource
   */
  resourceType: "FamilyMemberHistory";

  /**
   * The person who this history concerns.
   */
  patient: IReference;

  /**
   * The type of relationship this person has to the patient (father, mother, brother etc.).
   */
  relationship: ICodeableConcept;

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
   * Business identifiers assigned to this family member history by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
   */
  instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
   */
  instantiatesUri?: string[];

  /**
   * Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * A code specifying the status of the record of the family history of a specific family member.
   */
  status?: FamilyMemberHistoryStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Describes why the family member's history is not available.
   */
  dataAbsentReason?: ICodeableConcept;

  /**
   * The date (and possibly time) when the family member history was recorded or last updated.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * The birth sex of the family member.
   */
  sex?: ICodeableConcept;

  /**
   * The actual or approximate date of birth of the relative.
   */
  bornPeriod?: IPeriod;

  /**
   * The actual or approximate date of birth of the relative.
   */
  bornDate?: string;

  /**
   * Extensions for bornDate
   */
  _bornDate?: IElement;

  /**
   * The actual or approximate date of birth of the relative.
   */
  bornString?: string;

  /**
   * Extensions for bornString
   */
  _bornString?: IElement;

  /**
   * The age of the relative at the time the family member history is recorded.
   */
  ageAge?: IAge;

  /**
   * The age of the relative at the time the family member history is recorded.
   */
  ageRange?: IRange;

  /**
   * The age of the relative at the time the family member history is recorded.
   */
  ageString?: string;

  /**
   * Extensions for ageString
   */
  _ageString?: IElement;

  /**
   * If true, indicates that the age value specified is an estimated value.
   */
  estimatedAge?: boolean;

  /**
   * Extensions for estimatedAge
   */
  _estimatedAge?: IElement;

  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedBoolean?: boolean;

  /**
   * Extensions for deceasedBoolean
   */
  _deceasedBoolean?: IElement;

  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedAge?: IAge;

  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedRange?: IRange;

  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedDate?: string;

  /**
   * Extensions for deceasedDate
   */
  _deceasedDate?: IElement;

  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedString?: string;

  /**
   * Extensions for deceasedString
   */
  _deceasedString?: IElement;

  /**
   * Describes why the family member history occurred in coded or textual form.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
   */
  reasonReference?: IReference[];

  /**
   * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
   */
  note?: IAnnotation[];

  /**
   * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
   */
  condition?: IFamilyMemberHistory_Condition[];
}
