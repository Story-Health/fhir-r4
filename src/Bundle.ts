import { IBundle_Entry } from "./Bundle_Entry";
import { IBundle_Link } from "./Bundle_Link";
import { IElement } from "./Element";
import { IIdentifier } from "./Identifier";
import { IResource } from "./IResource";
import { IMeta } from "./Meta";
import { ISignature } from "./Signature";

export enum BundleTypeKind {
  _document = "document",
  _message = "message",
  _transaction = "transaction",
  _transactionResponse = "transaction-response",
  _batch = "batch",
  _batchResponse = "batch-response",
  _history = "history",
  _searchset = "searchset",
  _collection = "collection",
}

export interface IBundle extends IResource {
  /**
   * This is a Bundle resource
   */
  resourceType: "Bundle";

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
   * A persistent identifier for the bundle that won't change as a bundle is copied from server to server.
   */
  identifier?: IIdentifier;

  /**
   * Indicates the purpose of this bundle - how it is intended to be used.
   */
  type?: BundleTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle.
   */
  timestamp?: string;

  /**
   * Extensions for timestamp
   */
  _timestamp?: IElement;

  /**
   * If a set of search matches, this is the total number of entries of type 'match' across all pages in the search.  It does not include search.mode = 'include' or 'outcome' entries and it does not provide a count of the number of entries in the Bundle.
   */
  total?: number;

  /**
   * Extensions for total
   */
  _total?: IElement;

  /**
   * A series of links that provide context to this bundle.
   */
  link?: IBundle_Link[];

  /**
   * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
   */
  entry?: IBundle_Entry[];

  /**
   * Digital Signature - base64 encoded. XML-DSig or a JWT.
   */
  signature?: ISignature;
}
