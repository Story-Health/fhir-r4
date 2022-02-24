import { ICapabilityStatement_Interaction } from "./CapabilityStatement_Interaction";
import { ICapabilityStatement_Operation } from "./CapabilityStatement_Operation";
import { ICapabilityStatement_SearchParam } from "./CapabilityStatement_SearchParam";
import { IElement } from "./Element";
import { IExtension } from "./Extension";

export enum CapabilityStatement_ResourceReferencePolicyKind {
  _literal = "literal",
  _logical = "logical",
  _resolves = "resolves",
  _enforced = "enforced",
  _local = "local",
}
export enum CapabilityStatement_ResourceVersioningKind {
  _noVersion = "no-version",
  _versioned = "versioned",
  _versionedUpdate = "versioned-update",
}
export enum CapabilityStatement_ResourceConditionalReadKind {
  _notSupported = "not-supported",
  _modifiedSince = "modified-since",
  _notMatch = "not-match",
  _fullSupport = "full-support",
}
export enum CapabilityStatement_ResourceConditionalDeleteKind {
  _notSupported = "not-supported",
  _single = "single",
  _multiple = "multiple",
}

export interface ICapabilityStatement_Resource {
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
   * A type of resource exposed via the restful interface.
   */
  type?: string;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles](profiling.html#profile-uses).
   */
  profile?: string;

  /**
   * A list of profiles that represent different use cases supported by the system. For a server, "supported by the system" means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles](profiling.html#profile-uses).
   */
  supportedProfile?: string[];

  /**
   * Additional information about the resource type used by the system.
   */
  documentation?: string;

  /**
   * Extensions for documentation
   */
  _documentation?: IElement;

  /**
   * Identifies a restful operation supported by the solution.
   */
  interaction?: ICapabilityStatement_Interaction[];

  /**
   * This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.
   */
  versioning?: CapabilityStatement_ResourceVersioningKind;

  /**
   * Extensions for versioning
   */
  _versioning?: IElement;

  /**
   * A flag for whether the server is able to return past versions as part of the vRead operation.
   */
  readHistory?: boolean;

  /**
   * Extensions for readHistory
   */
  _readHistory?: IElement;

  /**
   * A flag to indicate that the server allows or needs to allow the client to create new identities on the server (that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.
   */
  updateCreate?: boolean;

  /**
   * Extensions for updateCreate
   */
  _updateCreate?: IElement;

  /**
   * A flag that indicates that the server supports conditional create.
   */
  conditionalCreate?: boolean;

  /**
   * Extensions for conditionalCreate
   */
  _conditionalCreate?: IElement;

  /**
   * A code that indicates how the server supports conditional read.
   */
  conditionalRead?: CapabilityStatement_ResourceConditionalReadKind;

  /**
   * Extensions for conditionalRead
   */
  _conditionalRead?: IElement;

  /**
   * A flag that indicates that the server supports conditional update.
   */
  conditionalUpdate?: boolean;

  /**
   * Extensions for conditionalUpdate
   */
  _conditionalUpdate?: IElement;

  /**
   * A code that indicates how the server supports conditional delete.
   */
  conditionalDelete?: CapabilityStatement_ResourceConditionalDeleteKind;

  /**
   * Extensions for conditionalDelete
   */
  _conditionalDelete?: IElement;

  /**
   * A set of flags that defines how references are supported.
   */
  referencePolicy?: CapabilityStatement_ResourceReferencePolicyKind[];

  /**
   * Extensions for referencePolicy
   */
  _referencePolicy?: IElement[];

  /**
   * A list of _include values supported by the server.
   */
  searchInclude?: string[];

  /**
   * Extensions for searchInclude
   */
  _searchInclude?: IElement[];

  /**
   * A list of _revinclude (reverse include) values supported by the server.
   */
  searchRevInclude?: string[];

  /**
   * Extensions for searchRevInclude
   */
  _searchRevInclude?: IElement[];

  /**
   * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
   */
  searchParam?: ICapabilityStatement_SearchParam[];

  /**
   * Definition of an operation or a named query together with its parameters and their meaning and type. Consult the definition of the operation for details about how to invoke the operation, and the parameters.
   */
  operation?: ICapabilityStatement_Operation[];
}
