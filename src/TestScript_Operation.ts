import { ICoding } from "./Coding";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { ITestScript_RequestHeader } from "./TestScript_RequestHeader";

export enum TestScript_OperationMethodKind {
  _delete = "delete",
  _get = "get",
  _options = "options",
  _patch = "patch",
  _post = "post",
  _put = "put",
  _head = "head",
}

export interface ITestScript_Operation {
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
   * Server interaction or operation type.
   */
  type?: ICoding;

  /**
   * The type of the resource.  See http://build.fhir.org/resourcelist.html.
   */
  resource?: string;

  /**
   * Extensions for resource
   */
  _resource?: IElement;

  /**
   * The label would be used for tracking/logging purposes by test engines.
   */
  label?: string;

  /**
   * Extensions for label
   */
  _label?: IElement;

  /**
   * The description would be used by test engines for tracking and reporting purposes.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * The mime-type to use for RESTful operation in the 'Accept' header.
   */
  accept?: string;

  /**
   * Extensions for accept
   */
  _accept?: IElement;

  /**
   * The mime-type to use for RESTful operation in the 'Content-Type' header.
   */
  contentType?: string;

  /**
   * Extensions for contentType
   */
  _contentType?: IElement;

  /**
   * The server where the request message is destined for.  Must be one of the server numbers listed in TestScript.destination section.
   */
  destination?: number;

  /**
   * Extensions for destination
   */
  _destination?: IElement;

  /**
   * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
   */
  encodeRequestUrl?: boolean;

  /**
   * Extensions for encodeRequestUrl
   */
  _encodeRequestUrl?: IElement;

  /**
   * The HTTP method the test engine MUST use for this operation regardless of any other operation details.
   */
  method?: TestScript_OperationMethodKind;

  /**
   * Extensions for method
   */
  _method?: IElement;

  /**
   * The server where the request message originates from.  Must be one of the server numbers listed in TestScript.origin section.
   */
  origin?: number;

  /**
   * Extensions for origin
   */
  _origin?: IElement;

  /**
   * Path plus parameters after [type].  Used to set parts of the request URL explicitly.
   */
  params?: string;

  /**
   * Extensions for params
   */
  _params?: IElement;

  /**
   * Header elements would be used to set HTTP headers.
   */
  requestHeader?: ITestScript_RequestHeader[];

  /**
   * The fixture id (maybe new) to map to the request.
   */
  requestId?: string;

  /**
   * Extensions for requestId
   */
  _requestId?: IElement;

  /**
   * The fixture id (maybe new) to map to the response.
   */
  responseId?: string;

  /**
   * Extensions for responseId
   */
  _responseId?: IElement;

  /**
   * The id of the fixture used as the body of a PUT or POST request.
   */
  sourceId?: string;

  /**
   * Extensions for sourceId
   */
  _sourceId?: IElement;

  /**
   * Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.
   */
  targetId?: string;

  /**
   * Extensions for targetId
   */
  _targetId?: IElement;

  /**
   * Complete request URL.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;
}
