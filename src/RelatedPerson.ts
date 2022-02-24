import { IAddress } from "./Address";
import { IAttachment } from "./Attachment";
import { ICodeableConcept } from "./CodeableConcept";
import { IContactPoint } from "./ContactPoint";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IHumanName } from "./HumanName";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";
import { IRelatedPerson_Communication } from "./RelatedPerson_Communication";
import { IResourceList } from "./ResourceList";

export enum RelatedPersonGenderKind {
  _male = "male",
  _female = "female",
  _other = "other",
  _unknown = "unknown",
}

export interface IRelatedPerson extends IDomainResource {
  /**
   * This is a RelatedPerson resource
   */
  resourceType: "RelatedPerson";

  /**
   * The patient this person is related to.
   */
  patient: IReference;

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
   * Identifier for a person within a particular scope.
   */
  identifier?: IIdentifier[];

  /**
   * Whether this related person record is in active use.
   */
  active?: boolean;

  /**
   * Extensions for active
   */
  _active?: IElement;

  /**
   * The nature of the relationship between a patient and the related person.
   */
  relationship?: ICodeableConcept[];

  /**
   * A name associated with the person.
   */
  name?: IHumanName[];

  /**
   * A contact detail for the person, e.g. a telephone number or an email address.
   */
  telecom?: IContactPoint[];

  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  gender?: RelatedPersonGenderKind;

  /**
   * Extensions for gender
   */
  _gender?: IElement;

  /**
   * The date on which the related person was born.
   */
  birthDate?: string;

  /**
   * Extensions for birthDate
   */
  _birthDate?: IElement;

  /**
   * Address where the related person can be contacted or visited.
   */
  address?: IAddress[];

  /**
   * Image of the person.
   */
  photo?: IAttachment[];

  /**
   * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   */
  period?: IPeriod;

  /**
   * A language which may be used to communicate with about the patient's health.
   */
  communication?: IRelatedPerson_Communication[];
}
