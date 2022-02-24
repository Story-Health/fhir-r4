import { ICoding } from "./Coding";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IQuestionnaire_AnswerOption } from "./Questionnaire_AnswerOption";
import { IQuestionnaire_EnableWhen } from "./Questionnaire_EnableWhen";
import { IQuestionnaire_Initial } from "./Questionnaire_Initial";

export enum Questionnaire_ItemTypeKind {
  _group = "group",
  _display = "display",
  _boolean = "boolean",
  _decimal = "decimal",
  _integer = "integer",
  _date = "date",
  _dateTime = "dateTime",
  _time = "time",
  _string = "string",
  _text = "text",
  _url = "url",
  _choice = "choice",
  _openChoice = "open-choice",
  _attachment = "attachment",
  _reference = "reference",
  _quantity = "quantity",
}
export enum Questionnaire_ItemEnableBehaviorKind {
  _all = "all",
  _any = "any",
}

export interface IQuestionnaire_Item {
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
   * An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.
   */
  linkId?: string;

  /**
   * Extensions for linkId
   */
  _linkId?: IElement;

  /**
                     * This element is a URI that refers to an [[[ElementDefinition]]] that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in Comments, below. If this element is present then the following element values MAY be derived from the Element Definition if the corresponding elements of this Questionnaire resource instance have no value:

* code (ElementDefinition.code) 
* type (ElementDefinition.type) 
* required (ElementDefinition.min) 
* repeats (ElementDefinition.max) 
* maxLength (ElementDefinition.maxLength) 
* answerValueSet (ElementDefinition.binding)
* options (ElementDefinition.binding).
                     */
  definition?: string;

  /**
   * Extensions for definition
   */
  _definition?: IElement;

  /**
   * A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).
   */
  code?: ICoding[];

  /**
   * A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.
   */
  prefix?: string;

  /**
   * Extensions for prefix
   */
  _prefix?: IElement;

  /**
   * The name of a section, the text of a question or text content for a display item.
   */
  text?: string;

  /**
   * Extensions for text
   */
  _text?: IElement;

  /**
   * The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).
   */
  type?: Questionnaire_ItemTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.
   */
  enableWhen?: IQuestionnaire_EnableWhen[];

  /**
   * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
   */
  enableBehavior?: Questionnaire_ItemEnableBehaviorKind;

  /**
   * Extensions for enableBehavior
   */
  _enableBehavior?: IElement;

  /**
   * An indication, if true, that the item must be present in a "completed" QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.
   */
  required?: boolean;

  /**
   * Extensions for required
   */
  _required?: IElement;

  /**
   * An indication, if true, that the item may occur multiple times in the response, collecting multiple answers for questions or multiple sets of answers for groups.
   */
  repeats?: boolean;

  /**
   * Extensions for repeats
   */
  _repeats?: IElement;

  /**
   * An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.
   */
  readOnly?: boolean;

  /**
   * Extensions for readOnly
   */
  _readOnly?: IElement;

  /**
   * The maximum number of characters that are permitted in the answer to be considered a "valid" QuestionnaireResponse.
   */
  maxLength?: number;

  /**
   * Extensions for maxLength
   */
  _maxLength?: IElement;

  /**
   * A reference to a value set containing a list of codes representing permitted answers for a "choice" or "open-choice" question.
   */
  answerValueSet?: string;

  /**
   * One of the permitted answers for a "choice" or "open-choice" question.
   */
  answerOption?: IQuestionnaire_AnswerOption[];

  /**
   * One or more values that should be pre-populated in the answer when initially rendering the questionnaire for user input.
   */
  initial?: IQuestionnaire_Initial[];

  /**
   * Text, questions and other groups to be nested beneath a question or group.
   */
  item?: IQuestionnaire_Item[];
}
