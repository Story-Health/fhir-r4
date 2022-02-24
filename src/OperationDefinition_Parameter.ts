import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IOperationDefinition_Binding } from "./OperationDefinition_Binding";
import { IOperationDefinition_ReferencedFrom } from "./OperationDefinition_ReferencedFrom";

export enum OperationDefinition_ParameterUseKind {
  _in = "in",
  _out = "out",
}
export enum OperationDefinition_ParameterSearchTypeKind {
  _number = "number",
  _date = "date",
  _string = "string",
  _token = "token",
  _reference = "reference",
  _composite = "composite",
  _quantity = "quantity",
  _uri = "uri",
  _special = "special",
}

export interface IOperationDefinition_Parameter {
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
   * The name of used to identify the parameter.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Whether this is an input or an output parameter.
   */
  use?: OperationDefinition_ParameterUseKind;

  /**
   * Extensions for use
   */
  _use?: IElement;

  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  min?: number;

  /**
   * Extensions for min
   */
  _min?: IElement;

  /**
   * The maximum number of times this element is permitted to appear in the request or response.
   */
  max?: string;

  /**
   * Extensions for max
   */
  _max?: IElement;

  /**
   * Describes the meaning or use of this parameter.
   */
  documentation?: string;

  /**
   * Extensions for documentation
   */
  _documentation?: IElement;

  /**
   * The type for this parameter.
   */
  type?: string;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this parameter refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.
   */
  targetProfile?: string[];

  /**
   * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
   */
  searchType?: OperationDefinition_ParameterSearchTypeKind;

  /**
   * Extensions for searchType
   */
  _searchType?: IElement;

  /**
   * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
   */
  binding?: IOperationDefinition_Binding;

  /**
   * Identifies other resource parameters within the operation invocation that are expected to resolve to this resource.
   */
  referencedFrom?: IOperationDefinition_ReferencedFrom[];

  /**
   * The parts of a nested Parameter.
   */
  part?: IOperationDefinition_Parameter[];
}
