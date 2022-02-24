import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { IContactDetail } from "./ContactDetail";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { INarrative } from "./Narrative";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";
import { IRelatedArtifact } from "./RelatedArtifact";
import { IResourceList } from "./ResourceList";
import { IRiskEvidenceSynthesis_Certainty } from "./RiskEvidenceSynthesis_Certainty";
import { IRiskEvidenceSynthesis_RiskEstimate } from "./RiskEvidenceSynthesis_RiskEstimate";
import { IRiskEvidenceSynthesis_SampleSize } from "./RiskEvidenceSynthesis_SampleSize";
import { IUsageContext } from "./UsageContext";

export enum RiskEvidenceSynthesisStatusKind {
  _draft = "draft",
  _active = "active",
  _retired = "retired",
  _unknown = "unknown",
}

export interface IRiskEvidenceSynthesis extends IDomainResource {
  /**
   * This is a RiskEvidenceSynthesis resource
   */
  resourceType: "RiskEvidenceSynthesis";

  /**
   * A reference to a EvidenceVariable resource that defines the population for the research.
   */
  population: IReference;

  /**
   * A reference to a EvidenceVariable resomece that defines the outcome for the research.
   */
  outcome: IReference;

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
   * An absolute URI that is used to identify this risk evidence synthesis when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this risk evidence synthesis is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the risk evidence synthesis is stored on different servers.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * A formal identifier that is used to identify this risk evidence synthesis when it is represented in other formats, or referenced in a specification, model, design or an instance.
   */
  identifier?: IIdentifier[];

  /**
   * The identifier that is used to identify this version of the risk evidence synthesis when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the risk evidence synthesis author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   */
  version?: string;

  /**
   * Extensions for version
   */
  _version?: IElement;

  /**
   * A natural language name identifying the risk evidence synthesis. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * A short, descriptive, user-friendly title for the risk evidence synthesis.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * The status of this risk evidence synthesis. Enables tracking the life-cycle of the content.
   */
  status?: RiskEvidenceSynthesisStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * The date  (and optionally time) when the risk evidence synthesis was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the risk evidence synthesis changes.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * The name of the organization or individual that published the risk evidence synthesis.
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
   * A free text natural language description of the risk evidence synthesis from a consumer's perspective.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: IAnnotation[];

  /**
   * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate risk evidence synthesis instances.
   */
  useContext?: IUsageContext[];

  /**
   * A legal or geographic region in which the risk evidence synthesis is intended to be used.
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * A copyright statement relating to the risk evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the risk evidence synthesis.
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
   * The period during which the risk evidence synthesis content was or is planned to be in active use.
   */
  effectivePeriod?: IPeriod;

  /**
   * Descriptive topics related to the content of the RiskEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
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
   * Type of synthesis eg meta-analysis.
   */
  synthesisType?: ICodeableConcept;

  /**
   * Type of study eg randomized trial.
   */
  studyType?: ICodeableConcept;

  /**
   * A reference to a EvidenceVariable resource that defines the exposure for the research.
   */
  exposure?: IReference;

  /**
   * A description of the size of the sample involved in the synthesis.
   */
  sampleSize?: IRiskEvidenceSynthesis_SampleSize;

  /**
   * The estimated risk of the outcome.
   */
  riskEstimate?: IRiskEvidenceSynthesis_RiskEstimate;

  /**
   * A description of the certainty of the risk estimate.
   */
  certainty?: IRiskEvidenceSynthesis_Certainty[];
}
