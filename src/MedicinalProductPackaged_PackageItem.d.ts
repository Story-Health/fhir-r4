import { ICodeableConcept } from "./CodeableConcept";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IProdCharacteristic } from "./ProdCharacteristic";
import { IProductShelfLife } from "./ProductShelfLife";
import { IQuantity } from "./Quantity";
import { IReference } from "./Reference";

export interface IMedicinalProductPackaged_PackageItem {
  /**
   * The physical type of the container of the medicine.
   */
  type: ICodeableConcept;

  /**
   * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
   */
  quantity: IQuantity;

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
   * Including possibly Data Carrier Identifier.
   */
  identifier?: IIdentifier[];

  /**
   * Material type of the package item.
   */
  material?: ICodeableConcept[];

  /**
   * A possible alternate material for the packaging.
   */
  alternateMaterial?: ICodeableConcept[];

  /**
   * A device accompanying a medicinal product.
   */
  device?: IReference[];

  /**
   * The manufactured item as contained in the packaged medicinal product.
   */
  manufacturedItem?: IReference[];

  /**
   * Allows containers within containers.
   */
  packageItem?: IMedicinalProductPackaged_PackageItem[];

  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: IProdCharacteristic;

  /**
   * Other codeable characteristics.
   */
  otherCharacteristics?: ICodeableConcept[];

  /**
   * Shelf Life and storage information.
   */
  shelfLifeStorage?: IProductShelfLife[];

  /**
   * Manufacturer of this Package Item.
   */
  manufacturer?: IReference[];
}
