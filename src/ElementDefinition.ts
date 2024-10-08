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
import { IElementDefinition_Base } from "./ElementDefinition_Base";
import { IElementDefinition_Binding } from "./ElementDefinition_Binding";
import { IElementDefinition_Constraint } from "./ElementDefinition_Constraint";
import { IElementDefinition_Example } from "./ElementDefinition_Example";
import { IElementDefinition_Mapping } from "./ElementDefinition_Mapping";
import { IElementDefinition_Slicing } from "./ElementDefinition_Slicing";
import { IElementDefinition_Type } from "./ElementDefinition_Type";
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

export enum ElementDefinitionRepresentationKind {
  _xmlAttr = "xmlAttr",
  _xmlText = "xmlText",
  _typeAttr = "typeAttr",
  _cdaText = "cdaText",
  _xhtml = "xhtml",
}

export interface IElementDefinition {
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
   * The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
   */
  path?: string;

  /**
   * Extensions for path
   */
  _path?: IElement;

  /**
   * Codes that define how this element is represented in instances, when the deviation varies from the normal case.
   */
  representation?: ElementDefinitionRepresentationKind[];

  /**
   * Extensions for representation
   */
  _representation?: IElement[];

  /**
   * The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.
   */
  sliceName?: string;

  /**
   * Extensions for sliceName
   */
  _sliceName?: IElement;

  /**
   * If true, indicates that this slice definition is constraining a slice definition with the same name in an inherited profile. If false, the slice is not overriding any slice in an inherited profile. If missing, the slice might or might not be overriding a slice in an inherited profile, depending on the sliceName.
   */
  sliceIsConstraining?: boolean;

  /**
   * Extensions for sliceIsConstraining
   */
  _sliceIsConstraining?: IElement;

  /**
   * A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.
   */
  label?: string;

  /**
   * Extensions for label
   */
  _label?: IElement;

  /**
   * A code that has the same meaning as the element in a particular terminology.
   */
  code?: ICoding[];

  /**
   * Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).
   */
  slicing?: IElementDefinition_Slicing;

  /**
   * A concise description of what this element means (e.g. for use in autogenerated summaries).
   */
  short?: string;

  /**
   * Extensions for short
   */
  _short?: IElement;

  /**
   * Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource. (Note: The text you are reading is specified in ElementDefinition.definition).
   */
  definition?: string;

  /**
   * Extensions for definition
   */
  _definition?: IElement;

  /**
   * Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc. (Note: The text you are reading is specified in ElementDefinition.comment).
   */
  comment?: string;

  /**
   * Extensions for comment
   */
  _comment?: IElement;

  /**
   * This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.
   */
  requirements?: string;

  /**
   * Extensions for requirements
   */
  _requirements?: IElement;

  /**
   * Identifies additional names by which this element might also be known.
   */
  alias?: string[];

  /**
   * Extensions for alias
   */
  _alias?: IElement[];

  /**
   * The minimum number of times this element SHALL appear in the instance.
   */
  min?: number;

  /**
   * Extensions for min
   */
  _min?: IElement;

  /**
   * The maximum number of times this element is permitted to appear in the instance.
   */
  max?: string;

  /**
   * Extensions for max
   */
  _max?: IElement;

  /**
   * Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. When the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot - then the information in provided in the element definition may be different to the base definition. On the original definition of the element, it will be same.
   */
  base?: IElementDefinition_Base;

  /**
   * Identifies an element defined elsewhere in the definition whose content rules should be applied to the current element. ContentReferences bring across all the rules that are in the ElementDefinition for the element, including definitions, cardinality constraints, bindings, invariants etc.
   */
  contentReference?: string;

  /**
   * Extensions for contentReference
   */
  _contentReference?: IElement;

  /**
   * The data type or resource that the value of this element is permitted to be.
   */
  type?: IElementDefinition_Type[];

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueBase64Binary?: string;

  /**
   * Extensions for defaultValueBase64Binary
   */
  _defaultValueBase64Binary?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueBoolean?: boolean;

  /**
   * Extensions for defaultValueBoolean
   */
  _defaultValueBoolean?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueCanonical?: string;

  /**
   * Extensions for defaultValueCanonical
   */
  _defaultValueCanonical?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueCode?: string;

  /**
   * Extensions for defaultValueCode
   */
  _defaultValueCode?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueDate?: string;

  /**
   * Extensions for defaultValueDate
   */
  _defaultValueDate?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueDateTime?: string;

  /**
   * Extensions for defaultValueDateTime
   */
  _defaultValueDateTime?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueDecimal?: number;

  /**
   * Extensions for defaultValueDecimal
   */
  _defaultValueDecimal?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueId?: string;

  /**
   * Extensions for defaultValueId
   */
  _defaultValueId?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueInstant?: string;

  /**
   * Extensions for defaultValueInstant
   */
  _defaultValueInstant?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueInteger?: number;

  /**
   * Extensions for defaultValueInteger
   */
  _defaultValueInteger?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueMarkdown?: string;

  /**
   * Extensions for defaultValueMarkdown
   */
  _defaultValueMarkdown?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueOid?: string;

  /**
   * Extensions for defaultValueOid
   */
  _defaultValueOid?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValuePositiveInt?: number;

  /**
   * Extensions for defaultValuePositiveInt
   */
  _defaultValuePositiveInt?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueString?: string;

  /**
   * Extensions for defaultValueString
   */
  _defaultValueString?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueTime?: string;

  /**
   * Extensions for defaultValueTime
   */
  _defaultValueTime?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueUnsignedInt?: number;

  /**
   * Extensions for defaultValueUnsignedInt
   */
  _defaultValueUnsignedInt?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueUri?: string;

  /**
   * Extensions for defaultValueUri
   */
  _defaultValueUri?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueUrl?: string;

  /**
   * Extensions for defaultValueUrl
   */
  _defaultValueUrl?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueUuid?: string;

  /**
   * Extensions for defaultValueUuid
   */
  _defaultValueUuid?: IElement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueAddress?: IAddress;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueAge?: IAge;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueAnnotation?: IAnnotation;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueAttachment?: IAttachment;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueCodeableConcept?: ICodeableConcept;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueCoding?: ICoding;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueContactPoint?: IContactPoint;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueCount?: ICount;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueDistance?: IDistance;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueDuration?: IDuration;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueHumanName?: IHumanName;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueIdentifier?: IIdentifier;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueMoney?: IMoney;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValuePeriod?: IPeriod;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueQuantity?: IQuantity;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueRange?: IRange;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueRatio?: IRatio;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueReference?: IReference;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueSampledData?: ISampledData;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueSignature?: ISignature;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueTiming?: ITiming;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueContactDetail?: IContactDetail;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueContributor?: IContributor;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueDataRequirement?: IDataRequirement;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueExpression?: IExpression;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueParameterDefinition?: IParameterDefinition;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueRelatedArtifact?: IRelatedArtifact;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueTriggerDefinition?: ITriggerDefinition;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueUsageContext?: IUsageContext;

  /**
   * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
   */
  defaultValueDosage?: IDosage;

  /**
   * The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing').
   */
  meaningWhenMissing?: string;

  /**
   * Extensions for meaningWhenMissing
   */
  _meaningWhenMissing?: IElement;

  /**
   * If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.
   */
  orderMeaning?: string;

  /**
   * Extensions for orderMeaning
   */
  _orderMeaning?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedBase64Binary?: string;

  /**
   * Extensions for fixedBase64Binary
   */
  _fixedBase64Binary?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedBoolean?: boolean;

  /**
   * Extensions for fixedBoolean
   */
  _fixedBoolean?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedCanonical?: string;

  /**
   * Extensions for fixedCanonical
   */
  _fixedCanonical?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedCode?: string;

  /**
   * Extensions for fixedCode
   */
  _fixedCode?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedDate?: string;

  /**
   * Extensions for fixedDate
   */
  _fixedDate?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedDateTime?: string;

  /**
   * Extensions for fixedDateTime
   */
  _fixedDateTime?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedDecimal?: number;

  /**
   * Extensions for fixedDecimal
   */
  _fixedDecimal?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedId?: string;

  /**
   * Extensions for fixedId
   */
  _fixedId?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedInstant?: string;

  /**
   * Extensions for fixedInstant
   */
  _fixedInstant?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedInteger?: number;

  /**
   * Extensions for fixedInteger
   */
  _fixedInteger?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedMarkdown?: string;

  /**
   * Extensions for fixedMarkdown
   */
  _fixedMarkdown?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedOid?: string;

  /**
   * Extensions for fixedOid
   */
  _fixedOid?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedPositiveInt?: number;

  /**
   * Extensions for fixedPositiveInt
   */
  _fixedPositiveInt?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedString?: string;

  /**
   * Extensions for fixedString
   */
  _fixedString?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedTime?: string;

  /**
   * Extensions for fixedTime
   */
  _fixedTime?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedUnsignedInt?: number;

  /**
   * Extensions for fixedUnsignedInt
   */
  _fixedUnsignedInt?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedUri?: string;

  /**
   * Extensions for fixedUri
   */
  _fixedUri?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedUrl?: string;

  /**
   * Extensions for fixedUrl
   */
  _fixedUrl?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedUuid?: string;

  /**
   * Extensions for fixedUuid
   */
  _fixedUuid?: IElement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedAddress?: IAddress;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedAge?: IAge;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedAnnotation?: IAnnotation;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedAttachment?: IAttachment;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedCodeableConcept?: ICodeableConcept;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedCoding?: ICoding;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedContactPoint?: IContactPoint;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedCount?: ICount;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedDistance?: IDistance;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedDuration?: IDuration;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedHumanName?: IHumanName;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedIdentifier?: IIdentifier;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedMoney?: IMoney;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedPeriod?: IPeriod;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedQuantity?: IQuantity;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedRange?: IRange;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedRatio?: IRatio;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedReference?: IReference;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedSampledData?: ISampledData;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedSignature?: ISignature;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedTiming?: ITiming;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedContactDetail?: IContactDetail;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedContributor?: IContributor;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedDataRequirement?: IDataRequirement;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedExpression?: IExpression;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedParameterDefinition?: IParameterDefinition;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedRelatedArtifact?: IRelatedArtifact;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedTriggerDefinition?: ITriggerDefinition;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedUsageContext?: IUsageContext;

  /**
   * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
   */
  fixedDosage?: IDosage;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternBase64Binary?: string;

  /**
   * Extensions for patternBase64Binary
   */
  _patternBase64Binary?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternBoolean?: boolean;

  /**
   * Extensions for patternBoolean
   */
  _patternBoolean?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternCanonical?: string;

  /**
   * Extensions for patternCanonical
   */
  _patternCanonical?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternCode?: string;

  /**
   * Extensions for patternCode
   */
  _patternCode?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternDate?: string;

  /**
   * Extensions for patternDate
   */
  _patternDate?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternDateTime?: string;

  /**
   * Extensions for patternDateTime
   */
  _patternDateTime?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternDecimal?: number;

  /**
   * Extensions for patternDecimal
   */
  _patternDecimal?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternId?: string;

  /**
   * Extensions for patternId
   */
  _patternId?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternInstant?: string;

  /**
   * Extensions for patternInstant
   */
  _patternInstant?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternInteger?: number;

  /**
   * Extensions for patternInteger
   */
  _patternInteger?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternMarkdown?: string;

  /**
   * Extensions for patternMarkdown
   */
  _patternMarkdown?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternOid?: string;

  /**
   * Extensions for patternOid
   */
  _patternOid?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternPositiveInt?: number;

  /**
   * Extensions for patternPositiveInt
   */
  _patternPositiveInt?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternString?: string;

  /**
   * Extensions for patternString
   */
  _patternString?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternTime?: string;

  /**
   * Extensions for patternTime
   */
  _patternTime?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternUnsignedInt?: number;

  /**
   * Extensions for patternUnsignedInt
   */
  _patternUnsignedInt?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternUri?: string;

  /**
   * Extensions for patternUri
   */
  _patternUri?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternUrl?: string;

  /**
   * Extensions for patternUrl
   */
  _patternUrl?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternUuid?: string;

  /**
   * Extensions for patternUuid
   */
  _patternUuid?: IElement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternAddress?: IAddress;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternAge?: IAge;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternAnnotation?: IAnnotation;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternAttachment?: IAttachment;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternCodeableConcept?: ICodeableConcept;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternCoding?: ICoding;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternContactPoint?: IContactPoint;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternCount?: ICount;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternDistance?: IDistance;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternDuration?: IDuration;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternHumanName?: IHumanName;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternIdentifier?: IIdentifier;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternMoney?: IMoney;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternPeriod?: IPeriod;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternQuantity?: IQuantity;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternRange?: IRange;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternRatio?: IRatio;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternReference?: IReference;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternSampledData?: ISampledData;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternSignature?: ISignature;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternTiming?: ITiming;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternContactDetail?: IContactDetail;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternContributor?: IContributor;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternDataRequirement?: IDataRequirement;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternExpression?: IExpression;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternParameterDefinition?: IParameterDefinition;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternRelatedArtifact?: IRelatedArtifact;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternTriggerDefinition?: ITriggerDefinition;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternUsageContext?: IUsageContext;

  /**
                     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  

When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.

When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.

When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,

1. If primitive: it must match exactly the pattern value
2. If a complex object: it must match (recursively) the pattern value
3. If an array: it must match (recursively) the pattern value.
                     */
  patternDosage?: IDosage;

  /**
   * A sample value for this element demonstrating the type of information that would typically be found in the element.
   */
  example?: IElementDefinition_Example[];

  /**
   * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  minValueDate?: string;

  /**
   * Extensions for minValueDate
   */
  _minValueDate?: IElement;

  /**
   * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  minValueDateTime?: string;

  /**
   * Extensions for minValueDateTime
   */
  _minValueDateTime?: IElement;

  /**
   * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  minValueInstant?: string;

  /**
   * Extensions for minValueInstant
   */
  _minValueInstant?: IElement;

  /**
   * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  minValueTime?: string;

  /**
   * Extensions for minValueTime
   */
  _minValueTime?: IElement;

  /**
   * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  minValueDecimal?: number;

  /**
   * Extensions for minValueDecimal
   */
  _minValueDecimal?: IElement;

  /**
   * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  minValueInteger?: number;

  /**
   * Extensions for minValueInteger
   */
  _minValueInteger?: IElement;

  /**
   * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  minValuePositiveInt?: number;

  /**
   * Extensions for minValuePositiveInt
   */
  _minValuePositiveInt?: IElement;

  /**
   * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  minValueUnsignedInt?: number;

  /**
   * Extensions for minValueUnsignedInt
   */
  _minValueUnsignedInt?: IElement;

  /**
   * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  minValueQuantity?: IQuantity;

  /**
   * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  maxValueDate?: string;

  /**
   * Extensions for maxValueDate
   */
  _maxValueDate?: IElement;

  /**
   * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  maxValueDateTime?: string;

  /**
   * Extensions for maxValueDateTime
   */
  _maxValueDateTime?: IElement;

  /**
   * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  maxValueInstant?: string;

  /**
   * Extensions for maxValueInstant
   */
  _maxValueInstant?: IElement;

  /**
   * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  maxValueTime?: string;

  /**
   * Extensions for maxValueTime
   */
  _maxValueTime?: IElement;

  /**
   * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  maxValueDecimal?: number;

  /**
   * Extensions for maxValueDecimal
   */
  _maxValueDecimal?: IElement;

  /**
   * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  maxValueInteger?: number;

  /**
   * Extensions for maxValueInteger
   */
  _maxValueInteger?: IElement;

  /**
   * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  maxValuePositiveInt?: number;

  /**
   * Extensions for maxValuePositiveInt
   */
  _maxValuePositiveInt?: IElement;

  /**
   * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  maxValueUnsignedInt?: number;

  /**
   * Extensions for maxValueUnsignedInt
   */
  _maxValueUnsignedInt?: IElement;

  /**
   * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
   */
  maxValueQuantity?: IQuantity;

  /**
   * Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.
   */
  maxLength?: number;

  /**
   * Extensions for maxLength
   */
  _maxLength?: IElement;

  /**
   * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
   */
  condition?: string[];

  /**
   * Extensions for condition
   */
  _condition?: IElement[];

  /**
   * Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.
   */
  constraint?: IElementDefinition_Constraint[];

  /**
   * If true, implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way.  If false, the element may be ignored and not supported. If false, whether to populate or use the data element in any way is at the discretion of the implementation.
   */
  mustSupport?: boolean;

  /**
   * Extensions for mustSupport
   */
  _mustSupport?: IElement;

  /**
   * If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.
   */
  isModifier?: boolean;

  /**
   * Extensions for isModifier
   */
  _isModifier?: IElement;

  /**
   * Explains how that element affects the interpretation of the resource or element that contains it.
   */
  isModifierReason?: string;

  /**
   * Extensions for isModifierReason
   */
  _isModifierReason?: IElement;

  /**
   * Whether the element should be included if a client requests a search with the parameter _summary=true.
   */
  isSummary?: boolean;

  /**
   * Extensions for isSummary
   */
  _isSummary?: IElement;

  /**
   * Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri).
   */
  binding?: IElementDefinition_Binding;

  /**
   * Identifies a concept from an external specification that roughly corresponds to this element.
   */
  mapping?: IElementDefinition_Mapping[];
}
