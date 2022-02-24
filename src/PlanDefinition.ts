import { ICodeableConcept } from "./CodeableConcept";
import { IContactDetail } from "./ContactDetail";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IPlanDefinition_Action } from "./PlanDefinition_Action";
import { IPlanDefinition_Goal } from "./PlanDefinition_Goal";
import { IReference } from "./Reference";
import { IRelatedArtifact } from "./RelatedArtifact";
import { IResourceList } from "./ResourceList";
import { IUsageContext } from "./UsageContext";

export enum PlanDefinitionStatusKind {
  _draft = "draft",
  _active = "active",
  _retired = "retired",
  _unknown = "unknown",
}

export interface IPlanDefinition extends IDomainResource {
  /**
   * This is a PlanDefinition resource
   */
  resourceType: "PlanDefinition";

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
   * An absolute URI that is used to identify this plan definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this plan definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the plan definition is stored on different servers.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * A formal identifier that is used to identify this plan definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
   */
  identifier?: IIdentifier[];

  /**
   * The identifier that is used to identify this version of the plan definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the plan definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.
   */
  version?: string;

  /**
   * Extensions for version
   */
  _version?: IElement;

  /**
   * A natural language name identifying the plan definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * A short, descriptive, user-friendly title for the plan definition.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * An explanatory or alternate title for the plan definition giving additional information about its content.
   */
  subtitle?: string;

  /**
   * Extensions for subtitle
   */
  _subtitle?: IElement;

  /**
   * A high-level category for the plan definition that distinguishes the kinds of systems that would be interested in the plan definition.
   */
  type?: ICodeableConcept;

  /**
   * The status of this plan definition. Enables tracking the life-cycle of the content.
   */
  status?: PlanDefinitionStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A Boolean value to indicate that this plan definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * Extensions for experimental
   */
  _experimental?: IElement;

  /**
   * A code or group definition that describes the intended subject of the plan definition.
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * A code or group definition that describes the intended subject of the plan definition.
   */
  subjectReference?: IReference;

  /**
   * The date  (and optionally time) when the plan definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the plan definition changes.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * The name of the organization or individual that published the plan definition.
   */
  publisher?: string;

  /**
   * Extensions for publisher
   */
  _publisher?: IElement;

  /**
   * Contact details to assist a user in finding and communicating with the publisher.
   */
  contact?: IContactDetail[];

  /**
   * A free text natural language description of the plan definition from a consumer's perspective.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate plan definition instances.
   */
  useContext?: IUsageContext[];

  /**
   * A legal or geographic region in which the plan definition is intended to be used.
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Explanation of why this plan definition is needed and why it has been designed as it has.
   */
  purpose?: string;

  /**
   * Extensions for purpose
   */
  _purpose?: IElement;

  /**
   * A detailed description of how the plan definition is used from a clinical perspective.
   */
  usage?: string;

  /**
   * Extensions for usage
   */
  _usage?: IElement;

  /**
   * A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
   */
  copyright?: string;

  /**
   * Extensions for copyright
   */
  _copyright?: IElement;

  /**
   * The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   */
  approvalDate?: string;

  /**
   * Extensions for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
   */
  lastReviewDate?: string;

  /**
   * Extensions for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * The period during which the plan definition content was or is planned to be in active use.
   */
  effectivePeriod?: IPeriod;

  /**
   * Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
   */
  topic?: ICodeableConcept[];

  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  author?: IContactDetail[];

  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: IContactDetail[];

  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: IContactDetail[];

  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: IContactDetail[];

  /**
   * Related artifacts such as additional documentation, justification, or bibliographic references.
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * A reference to a Library resource containing any formal logic used by the plan definition.
   */
  library?: string[];

  /**
   * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
   */
  goal?: IPlanDefinition_Goal[];

  /**
   * An action or group of actions to be taken as part of the plan.
   */
  action?: IPlanDefinition_Action[];
}
