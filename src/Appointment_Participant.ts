import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";
export enum Appointment_ParticipantRequiredKind {
  _required = "required",
  _optional = "optional",
  _informationOnly = "information-only",
}
export enum Appointment_ParticipantStatusKind {
  _accepted = "accepted",
  _declined = "declined",
  _tentative = "tentative",
  _needsAction = "needs-action",
}

export interface IAppointment_Participant {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * Role of participant in the appointment.
   */
  type?: ICodeableConcept[];

  /**
   * A Person, Location/HealthcareService or Device that is participating in the appointment.
   */
  actor?: IReference;

  /**
   * Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
   */
  required?: Appointment_ParticipantRequiredKind;

  /**
   * Extensions for required
   */
  _required?: IElement;

  /**
   * Participation status of the actor.
   */
  status?: Appointment_ParticipantStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Participation period of the actor.
   */
  period?: IPeriod;
}
