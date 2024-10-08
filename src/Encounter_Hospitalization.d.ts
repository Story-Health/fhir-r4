import { ICodeableConcept } from "./CodeableConcept";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IReference } from "./Reference";

export interface IEncounter_Hospitalization {
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
   * Pre-admission identifier.
   */
  preAdmissionIdentifier?: IIdentifier;

  /**
   * The location/organization from which the patient came before admission.
   */
  origin?: IReference;

  /**
   * From where patient was admitted (physician referral, transfer).
   */
  admitSource?: ICodeableConcept;

  /**
   * Whether this hospitalization is a readmission and why if known.
   */
  reAdmission?: ICodeableConcept;

  /**
   * Diet preferences reported by the patient.
   */
  dietPreference?: ICodeableConcept[];

  /**
   * Special courtesies (VIP, board member).
   */
  specialCourtesy?: ICodeableConcept[];

  /**
   * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
   */
  specialArrangement?: ICodeableConcept[];

  /**
   * Location/organization to which the patient is discharged.
   */
  destination?: IReference;

  /**
   * Category or kind of location after discharge.
   */
  dischargeDisposition?: ICodeableConcept;
}
