import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IList_Entry } from "./List_Entry";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export enum ListStatusKind {
  _current = "current",
  _retired = "retired",
  _enteredInError = "entered-in-error",
}
export enum ListModeKind {
  _working = "working",
  _snapshot = "snapshot",
  _changes = "changes",
}

export interface IList extends IDomainResource {
  /**
   * This is a List resource
   */
  resourceType: "List";

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
   * Identifier for the List assigned for business purposes outside the context of FHIR.
   */
  identifier?: IIdentifier[];

  /**
   * Indicates the current state of this list.
   */
  status?: ListStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
   */
  mode?: ListModeKind;

  /**
   * Extensions for mode
   */
  _mode?: IElement;

  /**
   * A label for the list assigned by the author.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * This code defines the purpose of the list - why it was created.
   */
  code?: ICodeableConcept;

  /**
   * The common subject (or patient) of the resources that are in the list if there is one.
   */
  subject?: IReference;

  /**
   * The encounter that is the context in which this list was created.
   */
  encounter?: IReference;

  /**
   * The date that the list was prepared.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list.
   */
  source?: IReference;

  /**
   * What order applies to the items in the list.
   */
  orderedBy?: ICodeableConcept;

  /**
   * Comments that apply to the overall list.
   */
  note?: IAnnotation[];

  /**
   * Entries in this list.
   */
  entry?: IList_Entry[];

  /**
   * If the list is empty, why the list is empty.
   */
  emptyReason?: ICodeableConcept;
}
