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

export interface ITask_Output {
  /**
   * The name of the Output parameter.
   */
  type: ICodeableConcept;

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
   * The value of the Output parameter as a basic type.
   */
  valueBase64Binary?: string;

  /**
   * Extensions for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueCanonical?: string;

  /**
   * Extensions for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueCode?: string;

  /**
   * Extensions for valueCode
   */
  _valueCode?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueDate?: string;

  /**
   * Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueDateTime?: string;

  /**
   * Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueDecimal?: number;

  /**
   * Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueId?: string;

  /**
   * Extensions for valueId
   */
  _valueId?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueInstant?: string;

  /**
   * Extensions for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueInteger?: number;

  /**
   * Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueMarkdown?: string;

  /**
   * Extensions for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueOid?: string;

  /**
   * Extensions for valueOid
   */
  _valueOid?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valuePositiveInt?: number;

  /**
   * Extensions for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueTime?: string;

  /**
   * Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueUnsignedInt?: number;

  /**
   * Extensions for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueUri?: string;

  /**
   * Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueUrl?: string;

  /**
   * Extensions for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueUuid?: string;

  /**
   * Extensions for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueAddress?: IAddress;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueAge?: IAge;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueAnnotation?: IAnnotation;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueAttachment?: IAttachment;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueCoding?: ICoding;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueContactPoint?: IContactPoint;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueCount?: ICount;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueDistance?: IDistance;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueDuration?: IDuration;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueHumanName?: IHumanName;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueIdentifier?: IIdentifier;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueMoney?: IMoney;

  /**
   * The value of the Output parameter as a basic type.
   */
  valuePeriod?: IPeriod;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueQuantity?: IQuantity;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueRange?: IRange;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueRatio?: IRatio;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueReference?: IReference;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueSampledData?: ISampledData;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueSignature?: ISignature;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueTiming?: ITiming;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueContactDetail?: IContactDetail;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueContributor?: IContributor;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueExpression?: IExpression;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueUsageContext?: IUsageContext;

  /**
   * The value of the Output parameter as a basic type.
   */
  valueDosage?: IDosage;
}
