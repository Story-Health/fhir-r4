import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { IDosage } from "./Dosage";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export interface IMedicationStatement extends IDomainResource {
  /**
   * This is a MedicationStatement resource
   */
  resourceType: "MedicationStatement";

  /**
   * The person, animal or group who is/was taking the medication.
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
   * Identifiers associated with this Medication Statement that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  basedOn?: IReference[];

  /**
   * A larger event of which this particular event is a component or step.
   */
  partOf?: IReference[];

  /**
   * A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally, this will be active or completed.
   */
  status?: string;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Captures the reason for the current state of the MedicationStatement.
   */
  statusReason?: ICodeableConcept[];

  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  category?: ICodeableConcept;

  /**
   * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
   */
  medicationCodeableConcept?: ICodeableConcept;

  /**
   * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
   */
  medicationReference?: IReference;

  /**
   * The encounter or episode of care that establishes the context for this MedicationStatement.
   */
  context?: IReference;

  /**
   * The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.taken element is No).
   */
  effectiveDateTime?: string;

  /**
   * Extensions for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.taken element is No).
   */
  effectivePeriod?: IPeriod;

  /**
   * The date when the medication statement was asserted by the information source.
   */
  dateAsserted?: string;

  /**
   * Extensions for dateAsserted
   */
  _dateAsserted?: IElement;

  /**
   * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
   */
  informationSource?: IReference;

  /**
   * Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement.
   */
  derivedFrom?: IReference[];

  /**
   * A reason for why the medication is being/was taken.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Condition or observation that supports why the medication is being/was taken.
   */
  reasonReference?: IReference[];

  /**
   * Provides extra information about the medication statement that is not conveyed by the other attributes.
   */
  note?: IAnnotation[];

  /**
   * Indicates how the medication is/was or should be taken by the patient.
   */
  dosage?: IDosage[];
}
