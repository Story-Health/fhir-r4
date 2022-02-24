import { IAddress } from "./Address";
import { IAge } from "./Age";
import { IAnnotation } from "./Annotation";
import { IAttachment } from "./Attachment";
import { ICodeableConcept } from "./CodeableConcept";
import { ICoding } from "./Coding";
import { IContactDetail } from "./ContactDetail";
import { IContactPoint } from "./ContactPoint";
import { IContributor } from "./Contributor";
import { ICount } from "./Count";
import { IDataRequirement } from "./DataRequirement";
import { IDistance } from "./Distance";
import { IDosage } from "./Dosage";
import { IDuration } from "./Duration";
import { IElement } from "./Element";
import { IExpression } from "./Expression";
import { IExtension } from "./Extension";
import { IHumanName } from "./HumanName";
import { IIdentifier } from "./Identifier";
import { IMoney } from "./Money";
import { IParameterDefinition } from "./ParameterDefinition";
import { IPeriod } from "./Period";
import { IQuantity } from "./Quantity";
import { IRange } from "./Range";
import { IRatio } from "./Ratio";
import { IReference } from "./Reference";
import { IRelatedArtifact } from "./RelatedArtifact";
import { ISampledData } from "./SampledData";
import { ISignature } from "./Signature";
import { ITiming } from "./Timing";
import { ITriggerDefinition } from "./TriggerDefinition";
import { IUsageContext } from "./UsageContext";

export enum StructureMap_SourceListModeKind {
  _first = "first",
  _notFirst = "not_first",
  _last = "last",
  _notLast = "not_last",
  _onlyOne = "only_one",
}

export interface IStructureMap_Source {
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
   * Type or variable this rule applies to.
   */
  context?: string;

  /**
   * Extensions for context
   */
  _context?: IElement;

  /**
   * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
   */
  min?: number;

  /**
   * Extensions for min
   */
  _min?: IElement;

  /**
   * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
   */
  max?: string;

  /**
   * Extensions for max
   */
  _max?: IElement;

  /**
   * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
   */
  type?: string;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueBase64Binary?: string;

  /**
   * Extensions for defaultValueBase64Binary
   */
  _defaultValueBase64Binary?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueBoolean?: boolean;

  /**
   * Extensions for defaultValueBoolean
   */
  _defaultValueBoolean?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCanonical?: string;

  /**
   * Extensions for defaultValueCanonical
   */
  _defaultValueCanonical?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCode?: string;

  /**
   * Extensions for defaultValueCode
   */
  _defaultValueCode?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDate?: string;

  /**
   * Extensions for defaultValueDate
   */
  _defaultValueDate?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDateTime?: string;

  /**
   * Extensions for defaultValueDateTime
   */
  _defaultValueDateTime?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDecimal?: number;

  /**
   * Extensions for defaultValueDecimal
   */
  _defaultValueDecimal?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueId?: string;

  /**
   * Extensions for defaultValueId
   */
  _defaultValueId?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueInstant?: string;

  /**
   * Extensions for defaultValueInstant
   */
  _defaultValueInstant?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueInteger?: number;

  /**
   * Extensions for defaultValueInteger
   */
  _defaultValueInteger?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueMarkdown?: string;

  /**
   * Extensions for defaultValueMarkdown
   */
  _defaultValueMarkdown?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueOid?: string;

  /**
   * Extensions for defaultValueOid
   */
  _defaultValueOid?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValuePositiveInt?: number;

  /**
   * Extensions for defaultValuePositiveInt
   */
  _defaultValuePositiveInt?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueString?: string;

  /**
   * Extensions for defaultValueString
   */
  _defaultValueString?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueTime?: string;

  /**
   * Extensions for defaultValueTime
   */
  _defaultValueTime?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUnsignedInt?: number;

  /**
   * Extensions for defaultValueUnsignedInt
   */
  _defaultValueUnsignedInt?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUri?: string;

  /**
   * Extensions for defaultValueUri
   */
  _defaultValueUri?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUrl?: string;

  /**
   * Extensions for defaultValueUrl
   */
  _defaultValueUrl?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUuid?: string;

  /**
   * Extensions for defaultValueUuid
   */
  _defaultValueUuid?: IElement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAddress?: IAddress;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAge?: IAge;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAnnotation?: IAnnotation;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAttachment?: IAttachment;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCodeableConcept?: ICodeableConcept;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCoding?: ICoding;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueContactPoint?: IContactPoint;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCount?: ICount;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDistance?: IDistance;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDuration?: IDuration;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueHumanName?: IHumanName;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueIdentifier?: IIdentifier;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueMoney?: IMoney;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValuePeriod?: IPeriod;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueQuantity?: IQuantity;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueRange?: IRange;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueRatio?: IRatio;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueReference?: IReference;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueSampledData?: ISampledData;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueSignature?: ISignature;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueTiming?: ITiming;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueContactDetail?: IContactDetail;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueContributor?: IContributor;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDataRequirement?: IDataRequirement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueExpression?: IExpression;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueParameterDefinition?: IParameterDefinition;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueRelatedArtifact?: IRelatedArtifact;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueTriggerDefinition?: ITriggerDefinition;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUsageContext?: IUsageContext;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDosage?: IDosage;

  /**
   * Optional field for this source.
   */
  element?: string;

  /**
   * Extensions for element
   */
  _element?: IElement;

  /**
   * How to handle the list mode for this element.
   */
  listMode?: StructureMap_SourceListModeKind;

  /**
   * Extensions for listMode
   */
  _listMode?: IElement;

  /**
   * Named context for field, if a field is specified.
   */
  variable?: string;

  /**
   * Extensions for variable
   */
  _variable?: IElement;

  /**
   * FHIRPath expression  - must be true or the rule does not apply.
   */
  condition?: string;

  /**
   * Extensions for condition
   */
  _condition?: IElement;

  /**
   * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
   */
  check?: string;

  /**
   * Extensions for check
   */
  _check?: IElement;

  /**
   * A FHIRPath expression which specifies a message to put in the transform log when content matching the source rule is found.
   */
  logMessage?: string;

  /**
   * Extensions for logMessage
   */
  _logMessage?: IElement;
}
