import { ICoding } from "./Coding";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IImagingStudy_Instance } from "./ImagingStudy_Instance";
import { IImagingStudy_Performer } from "./ImagingStudy_Performer";
import { IReference } from "./Reference";

export interface IImagingStudy_Series {
  /**
   * The modality of this series sequence.
   */
  modality: ICoding;

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
   * The DICOM Series Instance UID for the series.
   */
  uid?: string;

  /**
   * Extensions for uid
   */
  _uid?: IElement;

  /**
   * The numeric identifier of this series in the study.
   */
  number?: number;

  /**
   * Extensions for number
   */
  _number?: IElement;

  /**
   * A description of the series.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: number;

  /**
   * Extensions for numberOfInstances
   */
  _numberOfInstances?: IElement;

  /**
   * The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.connectionType.
   */
  endpoint?: IReference[];

  /**
   * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
   */
  bodySite?: ICoding;

  /**
   * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
   */
  laterality?: ICoding;

  /**
   * The specimen imaged, e.g., for whole slide imaging of a biopsy.
   */
  specimen?: IReference[];

  /**
   * The date and time the series was started.
   */
  started?: string;

  /**
   * Extensions for started
   */
  _started?: IElement;

  /**
   * Indicates who or what performed the series and how they were involved.
   */
  performer?: IImagingStudy_Performer[];

  /**
   * A single SOP instance within the series, e.g. an image, or presentation state.
   */
  instance?: IImagingStudy_Instance[];
}
