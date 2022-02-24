import { IElement } from "./Element";
import { IDomainResource } from "./IDomainResource";
import { IMeta } from "./Meta";
import { IParameters_Parameter } from "./Parameters_Parameter";

export interface IParameters extends IDomainResource {
  /**
   * This is a Parameters resource
   */
  resourceType: "Parameters";

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
   * A parameter passed to or received from the operation.
   */
  parameter?: IParameters_Parameter[];
}
