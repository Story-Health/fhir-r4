import { ICodeableConcept } from "./CodeableConcept";
import { IDataRequirement_CodeFilter } from "./DataRequirement_CodeFilter";
import { IDataRequirement_DateFilter } from "./DataRequirement_DateFilter";
import { IDataRequirement_Sort } from "./DataRequirement_Sort";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IReference } from "./Reference";

export interface IDataRequirement {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
   */
  type?: string;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * The profile of the required data, specified as the uri of the profile definition.
   */
  profile?: string[];

  /**
   * The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.
   */
  subjectReference?: IReference;

  /**
                     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. 

The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
                     */
  mustSupport?: string[];

  /**
   * Extensions for mustSupport
   */
  _mustSupport?: IElement[];

  /**
   * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
   */
  codeFilter?: IDataRequirement_CodeFilter[];

  /**
   * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
   */
  dateFilter?: IDataRequirement_DateFilter[];

  /**
   * Specifies a maximum number of results that are required (uses the _count search parameter).
   */
  limit?: number;

  /**
   * Extensions for limit
   */
  _limit?: IElement;

  /**
   * Specifies the order of the results to be returned.
   */
  sort?: IDataRequirement_Sort[];
}
