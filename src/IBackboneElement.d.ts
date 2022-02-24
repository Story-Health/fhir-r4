import { IElement } from "./Element";
import { IExtension } from "./Extension";

export interface IBackboneElement extends IElement {
  modifierExtension?: IExtension[];
}
