import { IDataRequirement } from "./DataRequirement";
import { IElement } from "./Element";
import { IExpression } from "./Expression";
import { IExtension } from "./Extension";
import { IReference } from "./Reference";
import { ITiming } from "./Timing";
export enum TriggerDefinitionTypeKind {
  _namedEvent = "named-event",
  _periodic = "periodic",
  _dataChanged = "data-changed",
  _dataAdded = "data-added",
  _dataModified = "data-modified",
  _dataRemoved = "data-removed",
  _dataAccessed = "data-accessed",
  _dataAccessEnded = "data-access-ended",
}

export interface ITriggerDefinition {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The type of triggering event.
   */
  type?: TriggerDefinitionTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingTiming?: ITiming;

  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingReference?: IReference;

  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingDate?: string;

  /**
   * Extensions for timingDate
   */
  _timingDate?: IElement;

  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingDateTime?: string;

  /**
   * Extensions for timingDateTime
   */
  _timingDateTime?: IElement;

  /**
   * The triggering data of the event (if this is a data trigger). If more than one data is requirement is specified, then all the data requirements must be true.
   */
  data?: IDataRequirement[];

  /**
   * A boolean-valued expression that is evaluated in the context of the container of the trigger definition and returns whether or not the trigger fires.
   */
  condition?: IExpression;
}
