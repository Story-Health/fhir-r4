import { IAnnotation } from "./Annotation";
import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IIdentifier } from "./Identifier";
import { IDomainResource } from "./IDomainResource";
import { IInvoice_LineItem } from "./Invoice_LineItem";
import { IInvoice_Participant } from "./Invoice_Participant";
import { IInvoice_PriceComponent } from "./Invoice_PriceComponent";
import { IMeta } from "./Meta";
import { IMoney } from "./Money";
import { INarrative } from "./Narrative";
import { IReference } from "./Reference";
import { IResourceList } from "./ResourceList";

export enum InvoiceStatusKind {
  _draft = "draft",
  _issued = "issued",
  _balanced = "balanced",
  _cancelled = "cancelled",
  _enteredInError = "entered-in-error",
}

export interface IInvoice extends IDomainResource {
  /**
   * This is a Invoice resource
   */
  resourceType: "Invoice";

  /**
   * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
   */
  meta?: IMeta;

  /**
   * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * Extensions for implicitRules
   */
  _implicitRules?: IElement;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * Extensions for language
   */
  _language?: IElement;

  /**
   * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: INarrative;

  /**
   * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
   */
  contained?: IResourceList[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
   */
  identifier?: IIdentifier[];

  /**
   * The current state of the Invoice.
   */
  status?: InvoiceStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * In case of Invoice cancellation a reason must be given (entered in error, superseded by corrected invoice etc.).
   */
  cancelledReason?: string;

  /**
   * Extensions for cancelledReason
   */
  _cancelledReason?: IElement;

  /**
   * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
   */
  type?: ICodeableConcept;

  /**
   * The individual or set of individuals receiving the goods and services billed in this invoice.
   */
  subject?: IReference;

  /**
   * The individual or Organization responsible for balancing of this invoice.
   */
  recipient?: IReference;

  /**
   * Date/time(s) of when this Invoice was posted.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * Indicates who or what performed or participated in the charged service.
   */
  participant?: IInvoice_Participant[];

  /**
   * The organizationissuing the Invoice.
   */
  issuer?: IReference;

  /**
   * Account which is supposed to be balanced with this Invoice.
   */
  account?: IReference;

  /**
   * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
   */
  lineItem?: IInvoice_LineItem[];

  /**
   * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
   */
  totalPriceComponent?: IInvoice_PriceComponent[];

  /**
   * Invoice total , taxes excluded.
   */
  totalNet?: IMoney;

  /**
   * Invoice total, tax included.
   */
  totalGross?: IMoney;

  /**
   * Payment details such as banking details, period of payment, deductibles, methods of payment.
   */
  paymentTerms?: string;

  /**
   * Extensions for paymentTerms
   */
  _paymentTerms?: IElement;

  /**
   * Comments made about the invoice by the issuer, subject, or other participants.
   */
  note?: IAnnotation[];
}
