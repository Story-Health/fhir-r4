import { ICodeableConcept } from "./CodeableConcept";
import { IDocumentReference_Content } from "./DocumentReference_Content";
import { IDocumentReference_Context } from "./DocumentReference_Context";
import { IDocumentReference_RelatesTo } from "./DocumentReference_RelatesTo";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export enum DocumentReferenceStatusKind {
  _current = "current",
  _superseded = "superseded",
  _enteredInError = "entered-in-error",
}

export interface IDocumentReference extends IDomainResource {
  /**
   * This is a DocumentReference resource
   */
  resourceType: "DocumentReference";

  /**
   * The document and format referenced. There may be multiple content element repetitions, each with a different format.
   */
  content: IDocumentReference_Content[];

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
   * Document identifier as assigned by the source of the document. This identifier is specific to this version of the document. This unique identifier may be used elsewhere to identify this version of the document.
   */
  masterIdentifier?: IIdentifier;

  /**
   * Other identifiers associated with the document, including version independent identifiers.
   */
  identifier?: IIdentifier[];

  /**
   * The status of this document reference.
   */
  status?: DocumentReferenceStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * The status of the underlying document.
   */
  docStatus?: string;

  /**
   * Extensions for docStatus
   */
  _docStatus?: IElement;

  /**
   * Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.
   */
  type?: ICodeableConcept;

  /**
   * A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type.
   */
  category?: ICodeableConcept[];

  /**
   * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
   */
  subject?: IReference;

  /**
   * When the document reference was created.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * Identifies who is responsible for adding the information to the document.
   */
  author?: IReference[];

  /**
   * Which person or organization authenticates that this document is valid.
   */
  authenticator?: IReference;

  /**
   * Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.
   */
  custodian?: IReference;

  /**
   * Relationships that this document has with other document references that already exist.
   */
  relatesTo?: IDocumentReference_RelatesTo[];

  /**
   * Human-readable description of the source document.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security contains the security labels of the "reference" to the document, while DocumentReference.securityLabel contains a snapshot of the security labels on the document the reference refers to.
   */
  securityLabel?: ICodeableConcept[];

  /**
   * The clinical context in which the document was prepared.
   */
  context?: IDocumentReference_Context;
}
