import { IElement } from "./Element";
import { IExtension } from "./Extension";

export enum StructureMap_StructureModeKind {
  _source = "source",
  _queried = "queried",
  _target = "target",
  _produced = "produced",
}

export interface IStructureMap_Structure {
  /**
   * The canonical reference to the structure.
   */
  url: string;

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
   * How the referenced structure is used in this mapping.
   */
  mode?: StructureMap_StructureModeKind;

  /**
   * Extensions for mode
   */
  _mode?: IElement;

  /**
   * The name used for this type in the map.
   */
  alias?: string;

  /**
   * Extensions for alias
   */
  _alias?: IElement;

  /**
   * Documentation that describes how the structure is used in the mapping.
   */
  documentation?: string;

  /**
   * Extensions for documentation
   */
  _documentation?: IElement;
}
