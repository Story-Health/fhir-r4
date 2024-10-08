import { ICodeableConcept } from "./CodeableConcept";
import { ICoding } from "./Coding";
import { IConsent_Actor } from "./Consent_Actor";
import { IConsent_Data } from "./Consent_Data";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IPeriod } from "./Period";
export enum Consent_ProvisionTypeKind {
  _deny = "deny",
  _permit = "permit",
}

export interface IConsent_Provision {
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
   * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
   */
  type?: Consent_ProvisionTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * The timeframe in this rule is valid.
   */
  period?: IPeriod;

  /**
   * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  actor?: IConsent_Actor[];

  /**
   * Actions controlled by this Rule.
   */
  action?: ICodeableConcept[];

  /**
   * A security label, comprised of 0..* security label fields (Privacy tags), which define which resources are controlled by this exception.
   */
  securityLabel?: ICoding[];

  /**
   * The context of the activities a user is taking - why the user is accessing the data - that are controlled by this rule.
   */
  purpose?: ICoding[];

  /**
   * The class of information covered by this rule. The type can be a FHIR resource type, a profile on a type, or a CDA document, or some other type that indicates what sort of information the consent relates to.
   */
  class?: ICoding[];

  /**
   * If this code is found in an instance, then the rule applies.
   */
  code?: ICodeableConcept[];

  /**
   * Clinical or Operational Relevant period of time that bounds the data controlled by this rule.
   */
  dataPeriod?: IPeriod;

  /**
   * The resources controlled by this rule if specific resources are referenced.
   */
  data?: IConsent_Data[];

  /**
   * Rules which provide exceptions to the base rule or subrules.
   */
  provision?: IConsent_Provision[];
}
