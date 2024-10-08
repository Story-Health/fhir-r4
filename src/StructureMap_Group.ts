import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IStructureMap_Input } from "./StructureMap_Input";
import { IStructureMap_Rule } from "./StructureMap_Rule";

export enum StructureMap_GroupTypeModeKind {
  _none = "none",
  _types = "types",
  _typeAndTypes = "type-and-types",
}

export interface IStructureMap_Group {
  /**
   * A name assigned to an instance of data. The instance must be provided when the mapping is invoked.
   */
  input: IStructureMap_Input[];

  /**
   * Transform Rule from source to target.
   */
  rule: IStructureMap_Rule[];

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
   * A unique name for the group for the convenience of human readers.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Another group that this group adds rules to.
   */
  extends?: string;

  /**
   * Extensions for extends
   */
  _extends?: IElement;

  /**
   * If this is the default rule set to apply for the source type or this combination of types.
   */
  typeMode?: StructureMap_GroupTypeModeKind;

  /**
   * Extensions for typeMode
   */
  _typeMode?: IElement;

  /**
   * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
   */
  documentation?: string;

  /**
   * Extensions for documentation
   */
  _documentation?: IElement;
}
