import { IAttachment } from "./Attachment";
import { ICodeableConcept } from "./CodeableConcept";
import { IElement } from "./Element";
import { IExtension } from "./Extension";
import { ISubstanceNucleicAcid_Linkage } from "./SubstanceNucleicAcid_Linkage";
import { ISubstanceNucleicAcid_Sugar } from "./SubstanceNucleicAcid_Sugar";

export interface ISubstanceNucleicAcid_Subunit {
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
   * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
   */
  subunit?: number;

  /**
   * Extensions for subunit
   */
  _subunit?: IElement;

  /**
   * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured.
   */
  sequence?: string;

  /**
   * Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * The length of the sequence shall be captured.
   */
  length?: number;

  /**
   * Extensions for length
   */
  _length?: IElement;

  /**
   * (TBC).
   */
  sequenceAttachment?: IAttachment;

  /**
   * The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant.
   */
  fivePrime?: ICodeableConcept;

  /**
   * The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant.
   */
  threePrime?: ICodeableConcept;

  /**
   * The linkages between sugar residues will also be captured.
   */
  linkage?: ISubstanceNucleicAcid_Linkage[];

  /**
   * 5.3.6.8.1 Sugar ID (Mandatory).
   */
  sugar?: ISubstanceNucleicAcid_Sugar[];
}
