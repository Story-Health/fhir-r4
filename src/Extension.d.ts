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

export interface IExtension {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * Source of the definition for the extension code - a logical name or a URL.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueBase64Binary?: string;

  /**
   * Extensions for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCanonical?: string;

  /**
   * Extensions for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCode?: string;

  /**
   * Extensions for valueCode
   */
  _valueCode?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDate?: string;

  /**
   * Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDateTime?: string;

  /**
   * Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDecimal?: number;

  /**
   * Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueId?: string;

  /**
   * Extensions for valueId
   */
  _valueId?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueInstant?: string;

  /**
   * Extensions for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueInteger?: number;

  /**
   * Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMarkdown?: string;

  /**
   * Extensions for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueOid?: string;

  /**
   * Extensions for valueOid
   */
  _valueOid?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valuePositiveInt?: number;

  /**
   * Extensions for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTime?: string;

  /**
   * Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUnsignedInt?: number;

  /**
   * Extensions for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUri?: string;

  /**
   * Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUrl?: string;

  /**
   * Extensions for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUuid?: string;

  /**
   * Extensions for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAddress?: IAddress;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAge?: IAge;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAnnotation?: IAnnotation;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAttachment?: IAttachment;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCoding?: ICoding;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactPoint?: IContactPoint;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCount?: ICount;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDistance?: IDistance;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDuration?: IDuration;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueHumanName?: IHumanName;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueIdentifier?: IIdentifier;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMoney?: IMoney;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valuePeriod?: IPeriod;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueQuantity?: IQuantity;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRange?: IRange;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRatio?: IRatio;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueReference?: IReference;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueSampledData?: ISampledData;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueSignature?: ISignature;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTiming?: ITiming;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactDetail?: IContactDetail;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContributor?: IContributor;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueExpression?: IExpression;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUsageContext?: IUsageContext;

  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDosage?: IDosage;
}
