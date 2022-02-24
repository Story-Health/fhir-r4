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

export interface IElementDefinition_Example {
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
   * Describes the purpose of this example amoung the set of examples.
   */
  label?: string;

  /**
   * Extensions for label
   */
  _label?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueBase64Binary?: string;

  /**
   * Extensions for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCanonical?: string;

  /**
   * Extensions for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCode?: string;

  /**
   * Extensions for valueCode
   */
  _valueCode?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDate?: string;

  /**
   * Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDateTime?: string;

  /**
   * Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDecimal?: number;

  /**
   * Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueId?: string;

  /**
   * Extensions for valueId
   */
  _valueId?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueInstant?: string;

  /**
   * Extensions for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueInteger?: number;

  /**
   * Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueMarkdown?: string;

  /**
   * Extensions for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueOid?: string;

  /**
   * Extensions for valueOid
   */
  _valueOid?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valuePositiveInt?: number;

  /**
   * Extensions for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueTime?: string;

  /**
   * Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUnsignedInt?: number;

  /**
   * Extensions for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUri?: string;

  /**
   * Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUrl?: string;

  /**
   * Extensions for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUuid?: string;

  /**
   * Extensions for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAddress?: IAddress;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAge?: IAge;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAnnotation?: IAnnotation;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAttachment?: IAttachment;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCoding?: ICoding;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueContactPoint?: IContactPoint;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCount?: ICount;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDistance?: IDistance;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDuration?: IDuration;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueHumanName?: IHumanName;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueIdentifier?: IIdentifier;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueMoney?: IMoney;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valuePeriod?: IPeriod;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueQuantity?: IQuantity;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueRange?: IRange;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueRatio?: IRatio;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueReference?: IReference;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueSampledData?: ISampledData;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueSignature?: ISignature;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueTiming?: ITiming;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueContactDetail?: IContactDetail;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueContributor?: IContributor;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueExpression?: IExpression;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUsageContext?: IUsageContext;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDosage?: IDosage;
}
