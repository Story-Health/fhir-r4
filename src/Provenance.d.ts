import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IProvenance_Agent } from "./Provenance_Agent";
import { IProvenance_Entity } from "./Provenance_Entity";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";
import { ISignature } from "./Signature";

export interface IProvenance extends IDomainResource {
  /**
   * This is a Provenance resource
   */
  resourceType: "Provenance";

  /**
   * The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.
   */
  target: IReference[];

  /**
   * An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place.
   */
  agent: IProvenance_Agent[];

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
   * The period during which the activity occurred.
   */
  occurredPeriod?: IPeriod;

  /**
   * The period during which the activity occurred.
   */
  occurredDateTime?: string;

  /**
   * Extensions for occurredDateTime
   */
  _occurredDateTime?: IElement;

  /**
   * The instant of time at which the activity was recorded.
   */
  recorded?: string;

  /**
   * Extensions for recorded
   */
  _recorded?: IElement;

  /**
   * Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.
   */
  policy?: string[];

  /**
   * Extensions for policy
   */
  _policy?: IElement[];

  /**
   * Where the activity occurred, if relevant.
   */
  location?: IReference;

  /**
   * The reason that the activity was taking place.
   */
  reason?: ICodeableConcept[];

  /**
   * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
   */
  activity?: ICodeableConcept;

  /**
   * An entity used in this activity.
   */
  entity?: IProvenance_Entity[];

  /**
   * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
   */
  signature?: ISignature[];
}
