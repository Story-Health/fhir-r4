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
import { IResourceList } from "./ResourceList";
import { ISampledData } from "./SampledData";
import { ISignature } from "./Signature";
import { ITiming } from "./Timing";
import { ITriggerDefinition } from "./TriggerDefinition";
import { IUsageContext } from "./UsageContext";

export interface IParameters_Parameter {
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
   * The name of the parameter (reference to the operation definition).
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueBase64Binary?: string;

  /**
   * Extensions for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueCanonical?: string;

  /**
   * Extensions for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueCode?: string;

  /**
   * Extensions for valueCode
   */
  _valueCode?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueDate?: string;

  /**
   * Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueDateTime?: string;

  /**
   * Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueDecimal?: number;

  /**
   * Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueId?: string;

  /**
   * Extensions for valueId
   */
  _valueId?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueInstant?: string;

  /**
   * Extensions for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueInteger?: number;

  /**
   * Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueMarkdown?: string;

  /**
   * Extensions for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueOid?: string;

  /**
   * Extensions for valueOid
   */
  _valueOid?: IElement;

  /**
   * If the parameter is a data type.
   */
  valuePositiveInt?: number;

  /**
   * Extensions for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueTime?: string;

  /**
   * Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueUnsignedInt?: number;

  /**
   * Extensions for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueUri?: string;

  /**
   * Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueUrl?: string;

  /**
   * Extensions for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueUuid?: string;

  /**
   * Extensions for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueAddress?: IAddress;

  /**
   * If the parameter is a data type.
   */
  valueAge?: IAge;

  /**
   * If the parameter is a data type.
   */
  valueAnnotation?: IAnnotation;

  /**
   * If the parameter is a data type.
   */
  valueAttachment?: IAttachment;

  /**
   * If the parameter is a data type.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * If the parameter is a data type.
   */
  valueCoding?: ICoding;

  /**
   * If the parameter is a data type.
   */
  valueContactPoint?: IContactPoint;

  /**
   * If the parameter is a data type.
   */
  valueCount?: ICount;

  /**
   * If the parameter is a data type.
   */
  valueDistance?: IDistance;

  /**
   * If the parameter is a data type.
   */
  valueDuration?: IDuration;

  /**
   * If the parameter is a data type.
   */
  valueHumanName?: IHumanName;

  /**
   * If the parameter is a data type.
   */
  valueIdentifier?: IIdentifier;

  /**
   * If the parameter is a data type.
   */
  valueMoney?: IMoney;

  /**
   * If the parameter is a data type.
   */
  valuePeriod?: IPeriod;

  /**
   * If the parameter is a data type.
   */
  valueQuantity?: IQuantity;

  /**
   * If the parameter is a data type.
   */
  valueRange?: IRange;

  /**
   * If the parameter is a data type.
   */
  valueRatio?: IRatio;

  /**
   * If the parameter is a data type.
   */
  valueReference?: IReference;

  /**
   * If the parameter is a data type.
   */
  valueSampledData?: ISampledData;

  /**
   * If the parameter is a data type.
   */
  valueSignature?: ISignature;

  /**
   * If the parameter is a data type.
   */
  valueTiming?: ITiming;

  /**
   * If the parameter is a data type.
   */
  valueContactDetail?: IContactDetail;

  /**
   * If the parameter is a data type.
   */
  valueContributor?: IContributor;

  /**
   * If the parameter is a data type.
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * If the parameter is a data type.
   */
  valueExpression?: IExpression;

  /**
   * If the parameter is a data type.
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * If the parameter is a data type.
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * If the parameter is a data type.
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * If the parameter is a data type.
   */
  valueUsageContext?: IUsageContext;

  /**
   * If the parameter is a data type.
   */
  valueDosage?: IDosage;

  /**
   * If the parameter is a whole resource.
   */
  resource?: IResourceList;

  /**
   * A named part of a multi-part parameter.
   */
  part?: IParameters_Parameter[];
}
