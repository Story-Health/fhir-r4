import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMedicationAdministration_Dosage } from "./MedicationAdministration_Dosage";
import { IMedicationAdministration_Performer } from "./MedicationAdministration_Performer";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export interface IMedicationAdministration extends IDomainResource {
  /**
   * This is a MedicationAdministration resource
   */
  resourceType: "MedicationAdministration";

  /**
   * The person or animal or group receiving the medication.
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
   * Identifiers associated with this Medication Administration that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
   */
  instantiates?: string[];

  /**
   * Extensions for instantiates
   */
  _instantiates?: IElement[];

  /**
   * A larger event of which this particular event is a component or step.
   */
  partOf?: IReference[];

  /**
   * Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
   */
  status?: string;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A code indicating why the administration was not performed.
   */
  statusReason?: ICodeableConcept[];

  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  category?: ICodeableConcept;

  /**
   * Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
   */
  medicationCodeableConcept?: ICodeableConcept;

  /**
   * Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
   */
  medicationReference?: IReference;

  /**
   * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
   */
  context?: IReference;

  /**
   * Additional information (for example, patient height and weight) that supports the administration of the medication.
   */
  supportingInformation?: IReference[];

  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectiveDateTime?: string;

  /**
   * Extensions for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectivePeriod?: IPeriod;

  /**
   * Indicates who or what performed the medication administration and how they were involved.
   */
  performer?: IMedicationAdministration_Performer[];

  /**
   * A code indicating why the medication was given.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Condition or observation that supports why the medication was administered.
   */
  reasonReference?: IReference[];

  /**
   * The original request, instruction or authority to perform the administration.
   */
  request?: IReference;

  /**
   * The device used in administering the medication to the patient.  For example, a particular infusion pump.
   */
  device?: IReference[];

  /**
   * Extra information about the medication administration that is not conveyed by the other attributes.
   */
  note?: IAnnotation[];

  /**
   * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
   */
  dosage?: IMedicationAdministration_Dosage;

  /**
   * A summary of the events of interest that have occurred, such as when the administration was verified.
   */
  eventHistory?: IReference[];
}
