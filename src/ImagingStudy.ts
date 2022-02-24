import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { ICoding } from "./Coding";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IImagingStudy_Series } from "./ImagingStudy_Series";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export enum ImagingStudyStatusKind {
  _registered = "registered",
  _available = "available",
  _cancelled = "cancelled",
  _enteredInError = "entered-in-error",
  _unknown = "unknown",
}

export interface IImagingStudy extends IDomainResource {
  /**
   * This is a ImagingStudy resource
   */
  resourceType: "ImagingStudy";

  /**
   * The subject, typically a patient, of the imaging study.
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
   * Identifiers for the ImagingStudy such as DICOM Study Instance UID, and Accession Number.
   */
  identifier?: IIdentifier[];

  /**
   * The current state of the ImagingStudy.
   */
  status?: ImagingStudyStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  modality?: ICoding[];

  /**
   * The healthcare event (e.g. a patient and healthcare provider interaction) during which this ImagingStudy is made.
   */
  encounter?: IReference;

  /**
   * Date and time the study started.
   */
  started?: string;

  /**
   * Extensions for started
   */
  _started?: IElement;

  /**
   * A list of the diagnostic requests that resulted in this imaging study being performed.
   */
  basedOn?: IReference[];

  /**
   * The requesting/referring physician.
   */
  referrer?: IReference;

  /**
   * Who read the study and interpreted the images or other content.
   */
  interpreter?: IReference[];

  /**
   * The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.connectionType.
   */
  endpoint?: IReference[];

  /**
   * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
   */
  numberOfSeries?: number;

  /**
   * Extensions for numberOfSeries
   */
  _numberOfSeries?: IElement;

  /**
   * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: number;

  /**
   * Extensions for numberOfInstances
   */
  _numberOfInstances?: IElement;

  /**
   * The procedure which this ImagingStudy was part of.
   */
  procedureReference?: IReference;

  /**
   * The code for the performed procedure type.
   */
  procedureCode?: ICodeableConcept[];

  /**
   * The principal physical location where the ImagingStudy was performed.
   */
  location?: IReference;

  /**
   * Description of clinical condition indicating why the ImagingStudy was requested.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this Study.
   */
  reasonReference?: IReference[];

  /**
   * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
   */
  note?: IAnnotation[];

  /**
   * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Each study has one or more series of images or other content.
   */
  series?: IImagingStudy_Series[];
}
