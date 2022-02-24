import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { IMolecularSequence_Roc } from "./MolecularSequence_Roc";
import { IQuantity } from "./Quantity";

export enum MolecularSequence_QualityTypeKind {
  _indel = "indel",
  _snp = "snp",
  _unknown = "unknown",
}

export interface IMolecularSequence_Quality {
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
   * INDEL / SNP / Undefined variant.
   */
  type?: MolecularSequence_QualityTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * Gold standard sequence used for comparing against.
   */
  standardSequence?: ICodeableConcept;

  /**
   * Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  start?: number;

  /**
   * Extensions for start
   */
  _start?: IElement;

  /**
   * End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   */
  end?: number;

  /**
   * Extensions for end
   */
  _end?: IElement;

  /**
   * The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
   */
  score?: IQuantity;

  /**
   * Which method is used to get sequence quality.
   */
  method?: ICodeableConcept;

  /**
   * True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
   */
  truthTP?: number;

  /**
   * Extensions for truthTP
   */
  _truthTP?: IElement;

  /**
   * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
   */
  queryTP?: number;

  /**
   * Extensions for queryTP
   */
  _queryTP?: IElement;

  /**
   * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
   */
  truthFN?: number;

  /**
   * Extensions for truthFN
   */
  _truthFN?: IElement;

  /**
   * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
   */
  queryFP?: number;

  /**
   * Extensions for queryFP
   */
  _queryFP?: IElement;

  /**
   * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
   */
  gtFP?: number;

  /**
   * Extensions for gtFP
   */
  _gtFP?: IElement;

  /**
   * QUERY.TP / (QUERY.TP + QUERY.FP).
   */
  precision?: number;

  /**
   * Extensions for precision
   */
  _precision?: IElement;

  /**
   * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
   */
  recall?: number;

  /**
   * Extensions for recall
   */
  _recall?: IElement;

  /**
   * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
   */
  fScore?: number;

  /**
   * Extensions for fScore
   */
  _fScore?: IElement;

  /**
   * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
   */
  roc?: IMolecularSequence_Roc;
}
