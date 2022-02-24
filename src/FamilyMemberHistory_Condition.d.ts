import { IAge } from "./Age";
import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IPeriod } from "./Period";
import { IRange } from "./Range";

export interface IFamilyMemberHistory_Condition {
  /**
   * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
   */
  code: ICodeableConcept;

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
   * Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the relation.
   */
  outcome?: ICodeableConcept;

  /**
   * This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.
   */
  contributedToDeath?: boolean;

  /**
   * Extensions for contributedToDeath
   */
  _contributedToDeath?: IElement;

  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetAge?: IAge;

  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetRange?: IRange;

  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetPeriod?: IPeriod;

  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetString?: string;

  /**
   * Extensions for onsetString
   */
  _onsetString?: IElement;

  /**
   * An area where general notes can be placed about this specific condition.
   */
  note?: IAnnotation[];
}
