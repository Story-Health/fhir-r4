import { IAppointment_Participant } from "./Appointment_Participant";
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

export enum AppointmentStatusKind {
  _proposed = "proposed",
  _pending = "pending",
  _booked = "booked",
  _arrived = "arrived",
  _fulfilled = "fulfilled",
  _cancelled = "cancelled",
  _noshow = "noshow",
  _enteredInError = "entered-in-error",
  _checkedIn = "checked-in",
  _waitlist = "waitlist",
}

export interface IAppointment extends IDomainResource {
  /**
   * This is a Appointment resource
   */
  resourceType: "Appointment";

  /**
   * List of participants involved in the appointment.
   */
  participant: IAppointment_Participant[];

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
   * This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  identifier?: IIdentifier[];

  /**
   * The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
   */
  status?: AppointmentStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply.
   */
  cancelationReason?: ICodeableConcept;

  /**
   * A broad categorization of the service that is to be performed during this appointment.
   */
  serviceCategory?: ICodeableConcept[];

  /**
   * The specific service that is to be performed during this appointment.
   */
  serviceType?: ICodeableConcept[];

  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  specialty?: ICodeableConcept[];

  /**
   * The style of appointment or patient that has been booked in the slot (not service type).
   */
  appointmentType?: ICodeableConcept;

  /**
   * The coded reason that this appointment is being scheduled. This is more clinical than administrative.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   */
  reasonReference?: IReference[];

  /**
   * The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).
   */
  priority?: number;

  /**
   * Extensions for priority
   */
  _priority?: IElement;

  /**
   * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Additional information to support the appointment provided when making the appointment.
   */
  supportingInformation?: IReference[];

  /**
   * Date/Time that the appointment is to take place.
   */
  start?: string;

  /**
   * Extensions for start
   */
  _start?: IElement;

  /**
   * Date/Time that the appointment is to conclude.
   */
  end?: string;

  /**
   * Extensions for end
   */
  _end?: IElement;

  /**
   * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work.  Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end.
   */
  minutesDuration?: number;

  /**
   * Extensions for minutesDuration
   */
  _minutesDuration?: IElement;

  /**
   * The slots from the participants' schedules that will be filled by the appointment.
   */
  slot?: IReference[];

  /**
   * The date that this appointment was initially created. This could be different to the meta.lastModified value on the initial entry, as this could have been before the resource was created on the FHIR server, and should remain unchanged over the lifespan of the appointment.
   */
  created?: string;

  /**
   * Extensions for created
   */
  _created?: IElement;

  /**
   * Additional comments about the appointment.
   */
  comment?: string;

  /**
   * Extensions for comment
   */
  _comment?: IElement;

  /**
   * While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before).
   */
  patientInstruction?: string;

  /**
   * Extensions for patientInstruction
   */
  _patientInstruction?: IElement;

  /**
   * The service request this appointment is allocated to assess (e.g. incoming referral or procedure request).
   */
  basedOn?: IReference[];

  /**
                     * A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within.

The duration (usually in minutes) could also be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time. However, in other situations the duration may be calculated by the scheduling system.
                     */
  requestedPeriod?: IPeriod[];
}
