import { IAuditEvent_Network } from "./AuditEvent_Network";
import { ICodeableConcept } from "./CodeableConcept";
import { ICoding } from "./Coding";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IReference } from "./Reference";

export interface IAuditEvent_Agent {
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
   * Specification of the participation type the user plays when performing the event.
   */
  type?: ICodeableConcept;

  /**
   * The security role that the user was acting under, that come from local codes defined by the access control security system (e.g. RBAC, ABAC) used in the local context.
   */
  role?: ICodeableConcept[];

  /**
   * Reference to who this agent is that was involved in the event.
   */
  who?: IReference;

  /**
   * Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
   */
  altId?: string;

  /**
   * Extensions for altId
   */
  _altId?: IElement;

  /**
   * Human-meaningful name for the agent.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Indicator that the user is or is not the requestor, or initiator, for the event being audited.
   */
  requestor?: boolean;

  /**
   * Extensions for requestor
   */
  _requestor?: IElement;

  /**
   * Where the event occurred.
   */
  location?: IReference;

  /**
   * The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.
   */
  policy?: string[];

  /**
   * Extensions for policy
   */
  _policy?: IElement[];

  /**
   * Type of media involved. Used when the event is about exporting/importing onto media.
   */
  media?: ICoding;

  /**
   * Logical network location for application activity, if the activity has a network location.
   */
  network?: IAuditEvent_Network;

  /**
   * The reason (purpose of use), specific to this agent, that was used during the event being recorded.
   */
  purposeOfUse?: ICodeableConcept[];
}
