import { ICodeableConcept } from "./CodeableConcept";
import { ICoding } from "./Coding";
import { IContract_Answer } from "./Contract_Answer";
import { IContract_Context } from "./Contract_Context";
import { IContract_ValuedItem } from "./Contract_ValuedItem";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IPeriod } from "./Period";
import { IReference } from "./Reference";

export interface IContract_Asset {
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
   * Differentiates the kind of the asset .
   */
  scope?: ICodeableConcept;

  /**
   * Target entity type about which the term may be concerned.
   */
  type?: ICodeableConcept[];

  /**
   * Associated entities.
   */
  typeReference?: IReference[];

  /**
   * May be a subtype or part of an offered asset.
   */
  subtype?: ICodeableConcept[];

  /**
   * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
   */
  relationship?: ICoding;

  /**
   * Circumstance of the asset.
   */
  context?: IContract_Context[];

  /**
   * Description of the quality and completeness of the asset that imay be a factor in its valuation.
   */
  condition?: string;

  /**
   * Extensions for condition
   */
  _condition?: IElement;

  /**
   * Type of Asset availability for use or ownership.
   */
  periodType?: ICodeableConcept[];

  /**
   * Asset relevant contractual time period.
   */
  period?: IPeriod[];

  /**
   * Time period of asset use.
   */
  usePeriod?: IPeriod[];

  /**
   * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
   */
  text?: string;

  /**
   * Extensions for text
   */
  _text?: IElement;

  /**
   * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
   */
  linkId?: string[];

  /**
   * Extensions for linkId
   */
  _linkId?: IElement[];

  /**
   * Response to assets.
   */
  answer?: IContract_Answer[];

  /**
   * Security labels that protects the asset.
   */
  securityLabelNumber?: number[];

  /**
   * Extensions for securityLabelNumber
   */
  _securityLabelNumber?: IElement[];

  /**
   * Contract Valued Item List.
   */
  valuedItem?: IContract_ValuedItem[];
}
