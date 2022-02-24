import { IElement } from "./Element";
import { IExtension } from "./Extension";
export enum Device_DeviceNameTypeKind {
  _udiLabelName = "udi-label-name",
  _userFriendlyName = "user-friendly-name",
  _patientReportedName = "patient-reported-name",
  _manufacturerName = "manufacturer-name",
  _modelName = "model-name",
  _other = "other",
}

export interface IDevice_DeviceName {
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
   * The name of the device.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
                     * The type of deviceName.
UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
                     */
  type?: Device_DeviceNameTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;
}
