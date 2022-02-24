import { ICodeableConcept } from "./CodeableConcept";
import { IContract_Answer } from "./Contract_Answer";
import { IContract_Party } from "./Contract_Party";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IReference } from "./Reference";

export interface IContract_Offer {
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
   * Unique identifier for this particular Contract Provision.
   */
  identifier?: IIdentifier[];

  /**
   * Offer Recipient.
   */
  party?: IContract_Party[];

  /**
   * The owner of an asset has the residual control rights over the asset: the right to decide all usages of the asset in any way not inconsistent with a prior contract, custom, or law (Hart, 1995, p. 30).
   */
  topic?: IReference;

  /**
   * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
   */
  type?: ICodeableConcept;

  /**
   * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
   */
  decision?: ICodeableConcept;

  /**
   * How the decision about a Contract was conveyed.
   */
  decisionMode?: ICodeableConcept[];

  /**
   * Response to offer text.
   */
  answer?: IContract_Answer[];

  /**
   * Human readable form of this Contract Offer.
   */
  text?: string;

  /**
   * Extensions for text
   */
  _text?: IElement;

  /**
   * The id of the clause or question text of the offer in the referenced questionnaire/response.
   */
  linkId?: string[];

  /**
   * Extensions for linkId
   */
  _linkId?: IElement[];

  /**
   * Security labels that protects the offer.
   */
  securityLabelNumber?: number[];

  /**
   * Extensions for securityLabelNumber
   */
  _securityLabelNumber?: IElement[];
}
