import { IAuditEvent_Detail } from "./AuditEvent_Detail";
import { ICoding } from "./Coding";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IReference } from "./Reference";

export interface IAuditEvent_Entity {
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
   * Identifies a specific instance of the entity. The reference should be version specific.
   */
  what?: IReference;

  /**
   * The type of the object that was involved in this audit event.
   */
  type?: ICoding;

  /**
   * Code representing the role the entity played in the event being audited.
   */
  role?: ICoding;

  /**
   * Identifier for the data life-cycle stage for the entity.
   */
  lifecycle?: ICoding;

  /**
   * Security labels for the identified entity.
   */
  securityLabel?: ICoding[];

  /**
   * A name of the entity in the audit event.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Text that describes the entity in more detail.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * The query parameters for a query-type entities.
   */
  query?: string;

  /**
   * Extensions for query
   */
  _query?: IElement;

  /**
   * Tagged value pairs for conveying additional information about the entity.
   */
  detail?: IAuditEvent_Detail[];
}
