import { IAccount } from "./Account";
import { IActivityDefinition } from "./ActivityDefinition";
import { IAdverseEvent } from "./AdverseEvent";
import { IAllergyIntolerance } from "./AllergyIntolerance";
import { IAppointment } from "./Appointment";
import { IAppointmentResponse } from "./AppointmentResponse";
import { IAuditEvent } from "./AuditEvent";
import { IBasic } from "./Basic";
import { IBinary } from "./Binary";
import { IBiologicallyDerivedProduct } from "./BiologicallyDerivedProduct";
import { IBodyStructure } from "./BodyStructure";
import { IBundle } from "./Bundle";
import { ICapabilityStatement } from "./CapabilityStatement";
import { ICarePlan } from "./CarePlan";
import { ICareTeam } from "./CareTeam";
import { IChargeItem } from "./ChargeItem";
import { IChargeItemDefinition } from "./ChargeItemDefinition";
import { IClaim } from "./Claim";
import { IClaimResponse } from "./ClaimResponse";
import { IClinicalImpression } from "./ClinicalImpression";
import { ICodeSystem } from "./CodeSystem";
import { ICommunication } from "./Communication";
import { ICommunicationRequest } from "./CommunicationRequest";
import { ICompartmentDefinition } from "./CompartmentDefinition";
import { IComposition } from "./Composition";
import { IConceptMap } from "./ConceptMap";
import { ICondition } from "./Condition";
import { IConsent } from "./Consent";
import { IContract } from "./Contract";
import { ICoverage } from "./Coverage";
import { ICoverageEligibilityRequest } from "./CoverageEligibilityRequest";
import { ICoverageEligibilityResponse } from "./CoverageEligibilityResponse";
import { IDetectedIssue } from "./DetectedIssue";
import { IDevice } from "./Device";
import { IDeviceDefinition } from "./DeviceDefinition";
import { IDeviceMetric } from "./DeviceMetric";
import { IDeviceRequest } from "./DeviceRequest";
import { IDeviceUseStatement } from "./DeviceUseStatement";
import { IDiagnosticReport } from "./DiagnosticReport";
import { IDocumentManifest } from "./DocumentManifest";
import { IDocumentReference } from "./DocumentReference";
import { IEncounter } from "./Encounter";
import { IEndpoint } from "./Endpoint";
import { IEnrollmentRequest } from "./EnrollmentRequest";
import { IEnrollmentResponse } from "./EnrollmentResponse";
import { IEpisodeOfCare } from "./EpisodeOfCare";
import { IEventDefinition } from "./EventDefinition";
import { IExampleScenario } from "./ExampleScenario";
import { IExplanationOfBenefit } from "./ExplanationOfBenefit";
import { IFamilyMemberHistory } from "./FamilyMemberHistory";
import { IFlag } from "./Flag";
import { IGoal } from "./Goal";
import { IGraphDefinition } from "./GraphDefinition";
import { IGroup } from "./Group";
import { IGuidanceResponse } from "./GuidanceResponse";
import { IHealthcareService } from "./HealthcareService";
import { IImagingStudy } from "./ImagingStudy";
import { IImmunization } from "./Immunization";
import { IImmunizationEvaluation } from "./ImmunizationEvaluation";
import { IImmunizationRecommendation } from "./ImmunizationRecommendation";
import { IImplementationGuide } from "./ImplementationGuide";
import { IInsurancePlan } from "./InsurancePlan";
import { IInvoice } from "./Invoice";
import { ILibrary } from "./Library";
import { ILinkage } from "./Linkage";
import { IList } from "./List";
import { ILocation } from "./Location";
import { IMeasure } from "./Measure";
import { IMeasureReport } from "./MeasureReport";
import { IMedia } from "./Media";
import { IMedication } from "./Medication";
import { IMedicationAdministration } from "./MedicationAdministration";
import { IMedicationDispense } from "./MedicationDispense";
import { IMedicationKnowledge } from "./MedicationKnowledge";
import { IMedicationRequest } from "./MedicationRequest";
import { IMedicationStatement } from "./MedicationStatement";
import { IMedicinalProduct } from "./MedicinalProduct";
import { IMedicinalProductAuthorization } from "./MedicinalProductAuthorization";
import { IMedicinalProductContraindication } from "./MedicinalProductContraindication";
import { IMedicinalProductIndication } from "./MedicinalProductIndication";
import { IMedicinalProductIngredient } from "./MedicinalProductIngredient";
import { IMedicinalProductInteraction } from "./MedicinalProductInteraction";
import { IMedicinalProductManufactured } from "./MedicinalProductManufactured";
import { IMedicinalProductPackaged } from "./MedicinalProductPackaged";
import { IMedicinalProductPharmaceutical } from "./MedicinalProductPharmaceutical";
import { IMedicinalProductUndesirableEffect } from "./MedicinalProductUndesirableEffect";
import { IMessageDefinition } from "./MessageDefinition";
import { IMessageHeader } from "./MessageHeader";
import { INamingSystem } from "./NamingSystem";
import { INutritionOrder } from "./NutritionOrder";
import { IObservation } from "./Observation";
import { IObservationDefinition } from "./ObservationDefinition";
import { IOperationDefinition } from "./OperationDefinition";
import { IOperationOutcome } from "./OperationOutcome";
import { IOrganization } from "./Organization";
import { IOrganizationAffiliation } from "./OrganizationAffiliation";
import { IParameters } from "./Parameters";
import { IPatient } from "./Patient";
import { IPaymentNotice } from "./PaymentNotice";
import { IPaymentReconciliation } from "./PaymentReconciliation";
import { IPerson } from "./Person";
import { IPlanDefinition } from "./PlanDefinition";
import { IPractitioner } from "./Practitioner";
import { IPractitionerRole } from "./PractitionerRole";
import { IProcedure } from "./Procedure";
import { IProvenance } from "./Provenance";
import { IQuestionnaire } from "./Questionnaire";
import { IQuestionnaireResponse } from "./QuestionnaireResponse";
import { IRelatedPerson } from "./RelatedPerson";
import { IRequestGroup } from "./RequestGroup";
import { IResearchStudy } from "./ResearchStudy";
import { IResearchSubject } from "./ResearchSubject";
import { IRiskAssessment } from "./RiskAssessment";
import { ISchedule } from "./Schedule";
import { ISearchParameter } from "./SearchParameter";
import { IServiceRequest } from "./ServiceRequest";
import { ISlot } from "./Slot";
import { ISpecimen } from "./Specimen";
import { ISpecimenDefinition } from "./SpecimenDefinition";
import { IStructureDefinition } from "./StructureDefinition";
import { IStructureMap } from "./StructureMap";
import { ISubscription } from "./Subscription";
import { ISubstance } from "./Substance";
import { ISubstancePolymer } from "./SubstancePolymer";
import { ISubstanceReferenceInformation } from "./SubstanceReferenceInformation";
import { ISubstanceSpecification } from "./SubstanceSpecification";
import { ISupplyDelivery } from "./SupplyDelivery";
import { ISupplyRequest } from "./SupplyRequest";
import { ITask } from "./Task";
import { ITerminologyCapabilities } from "./TerminologyCapabilities";
import { ITestReport } from "./TestReport";
import { ITestScript } from "./TestScript";
import { IValueSet } from "./ValueSet";
import { IVerificationResult } from "./VerificationResult";
import { IVisionPrescription } from "./VisionPrescription";

export type IResourceList =
  | IAccount
  | IActivityDefinition
  | IAdverseEvent
  | IAllergyIntolerance
  | IAppointment
  | IAppointmentResponse
  | IAuditEvent
  | IBasic
  | IBinary
  | IBiologicallyDerivedProduct
  | IBodyStructure
  | IBundle
  | ICapabilityStatement
  | ICarePlan
  | ICareTeam
  | IChargeItem
  | IChargeItemDefinition
  | IClaim
  | IClaimResponse
  | IClinicalImpression
  | ICodeSystem
  | ICommunication
  | ICommunicationRequest
  | ICompartmentDefinition
  | IComposition
  | IConceptMap
  | ICondition
  | IConsent
  | IContract
  | ICoverage
  | ICoverageEligibilityRequest
  | ICoverageEligibilityResponse
  | IDetectedIssue
  | IDevice
  | IDeviceDefinition
  | IDeviceMetric
  | IDeviceRequest
  | IDeviceUseStatement
  | IDiagnosticReport
  | IDocumentManifest
  | IDocumentReference
  | IEncounter
  | IEndpoint
  | IEnrollmentRequest
  | IEnrollmentResponse
  | IEpisodeOfCare
  | IEventDefinition
  | IExampleScenario
  | IExplanationOfBenefit
  | IFamilyMemberHistory
  | IFlag
  | IGoal
  | IGraphDefinition
  | IGroup
  | IGuidanceResponse
  | IHealthcareService
  | IImagingStudy
  | IImmunization
  | IImmunizationEvaluation
  | IImmunizationRecommendation
  | IImplementationGuide
  | IInsurancePlan
  | IInvoice
  | ILibrary
  | ILinkage
  | IList
  | ILocation
  | IMeasure
  | IMeasureReport
  | IMedia
  | IMedication
  | IMedicationAdministration
  | IMedicationDispense
  | IMedicationKnowledge
  | IMedicationRequest
  | IMedicationStatement
  | IMedicinalProduct
  | IMedicinalProductAuthorization
  | IMedicinalProductContraindication
  | IMedicinalProductIndication
  | IMedicinalProductIngredient
  | IMedicinalProductInteraction
  | IMedicinalProductManufactured
  | IMedicinalProductPackaged
  | IMedicinalProductPharmaceutical
  | IMedicinalProductUndesirableEffect
  | IMessageDefinition
  | IMessageHeader
  | INamingSystem
  | INutritionOrder
  | IObservation
  | IObservationDefinition
  | IOperationDefinition
  | IOperationOutcome
  | IOrganization
  | IOrganizationAffiliation
  | IParameters
  | IPatient
  | IPaymentNotice
  | IPaymentReconciliation
  | IPerson
  | IPlanDefinition
  | IPractitioner
  | IPractitionerRole
  | IProcedure
  | IProvenance
  | IQuestionnaire
  | IQuestionnaireResponse
  | IRelatedPerson
  | IRequestGroup
  | IResearchStudy
  | IResearchSubject
  | IRiskAssessment
  | ISchedule
  | ISearchParameter
  | IServiceRequest
  | ISlot
  | ISpecimen
  | ISpecimenDefinition
  | IStructureDefinition
  | IStructureMap
  | ISubscription
  | ISubstance
  | ISubstancePolymer
  | ISubstanceReferenceInformation
  | ISubstanceSpecification
  | ISupplyDelivery
  | ISupplyRequest
  | ITask
  | ITerminologyCapabilities
  | ITestReport
  | ITestScript
  | IValueSet
  | IVerificationResult
  | IVisionPrescription;
