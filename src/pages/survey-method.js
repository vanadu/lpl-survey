import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../public/img-lpl-org-logo.png"
import BrowseMode from "../../public/img-browse-mode.png"
import SurveyMode from "../../public/img-survey-mode.png"
import SurveyHero from "../components/SurveyHero"
import LearnMoreContent from "../components/LearnMoreContent"

import ShowMoreContent from '../components/ShowMoreContent'

const Method = () => {

  // Stores the ID of the currently open section 
  const [openSection, setOpenSection] = useState(null);

  return (
    <>
      <main className="page method">
        <section className="content-body method-head">
          <h1>2026&nbsp;LP/GOLPP&nbsp;Survey Methodology</h1>
          <p>This page provides an overview of the methodology, objectives, technical architecture, and interpretive limitations of the LP/GOLPP Survey project. It explains how the survey was designed, how data is collected and organized, the intended use of findings, and the constraints inherent to owner-reported observational research. The purpose of this documentation is to promote transparency, improve interpretability, and provide contextual reference for participants, clinicians, researchers, and other interested readers.</p>
        </section>

        <hr className="method-section-rule" />

        <section className="content-body">
          <nav className="survey-method-toc" aria-label="Survey methodology sections">
            <h2 className="survey-method-toc__heading">Contents</h2>

            <ol className="survey-method-toc__list">
              <li className="survey-method-toc__item">
                <a className="survey-method-toc__link" href="#overview">Overview</a>
              </li>
              <li className="survey-method-toc__item">
                <a className="survey-method-toc__link" href="#implementation">Implementation</a>
              </li>
              <li className="survey-method-toc__item">
                <a className="survey-method-toc__link" href="#respondent_population_and_recruitment">Respondent Population and Recruitment</a>
              </li>
              <li className="survey-method-toc__item">
                <a className="survey-method-toc__link" href="#survey_structure_and_methodology">Survey Structure and Methodology</a>
              </li>
              <li className="survey-method-toc__item">
                <a className="survey-method-toc__link" href="#data_collection_and_quality_control">Data Collection and Quality Control</a>
              </li>
              <li className="survey-method-toc__item">
                <a className="survey-method-toc__link" href="#analysis_framework">Analysis Framework</a>
              </li>
              <li className="survey-method-toc__item">
                <a className="survey-method-toc__link" href="#transparency_and_ethics">Transparency and Ethics</a>
              </li>
              <li className="survey-method-toc__item">
                <a className="survey-method-toc__link" href="#future_development">Future Development</a>
              </li>
              <li className="survey-method-toc__item">
                <a className="survey-method-toc__link" href="#platform_reusuability">Platform Reuseablity in Other Veterinary-Medical Contexts</a>
              </li>
              <li className="survey-method-toc__item">
                <a className="survey-method-toc__link" href="#internationalization_and_localization">Internationalization and Localization</a>
              </li>
            </ol>
          </nav>
        </section>

        <hr className="method-section-rule" />

        <section className="content-body" id="overview">
          <h2>1. Methodology Overview</h2>

          <section className="subsection" id="overview_background">
            <h3>1.1 Background</h3>
            <p>Primary veterinarians in the 21st century often face unrealistic expectations from a clientele that is increasingly emotionally dependent on their companion animals. While the veterinary knowledgebase expands exponentially, primary practitioners must balance clinical workload, continuing education, and business considerations. As a result, less common or slowly emerging diseases can receive limited practical attention in general practice settings. Canine laryngeal paralysis (LP/GOLPP) exemplifies this problem.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="background"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>LP/GOLPP often presents with subtle, progressive symptoms that overlap with the normal aging process and other respiratory conditions, which complicates diagnosis and treatment. But over the last decade, social media has increased public awareness of LP/GOLPP. In many cases, animal owners may be more familiar with current procedural options than the attending primary veterinarian. This informational asymmetry contributed significantly to the development of the present survey project.</p>
              <p>The primary objective of this project is to collect structured owner-reported information relating to LP/GOLPP, associated interventions, clinical progression, and long-term management outcomes. It is designed to identify recurring patterns in owner-reported experiences to support future comparative and hypothesis-generating analysis. Secondary objectives include facilitating more informed discussion among owners, clinicians, and researchers regarding treatment outcomes and unmet informational needs within the LP/GOLPP community. An additional objective is to support future clinical discussion and hypothesis generation by organizing owner-reported experiences into structured and analyzable datasets.</p>
              <p>The survey is not intended to replace controlled clinical research, diagnostic evaluation, or formal epidemiological investigation, but rather to supplement existing knowledge with large-scale owner-perspective data that may otherwise remain undocumented, with the goal of informing and stimulating future empirical investigation.</p>
              <p>The survey is implemented as a standalone web-based platform using structured branching logic and procedure-specific sections intended to improve relevance, reduce respondent burden, and capture granular procedural and outcome data. It is designed to be open-ended without fixed limits on duration or dataset growth and functionally supports ongoing updates to participant data as respondents’ companion animals proceed through the aging process and end-of-life. The project also emphasizes transparency regarding methodological limitations, including self-selection bias, owner-reported data limitations, and the inability to establish population prevalence or causal relationships from survey findings.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="overview_objectives">
            <h3>1.2 Objectives</h3>
            <p>The survey is intended primarily as a descriptive observational instrument designed to document real-world experiences across a broad and diverse respondent population.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="objectives"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Secondary objectives include exploratory identification of recurring patterns involving symptom progression, procedural outcomes, complications, functional impairment, quality-of-life changes, and post-treatment adaptation. The survey also supports comparative analysis between different procedural approaches, management strategies, and reported outcomes where sufficient response volume exists to permit meaningful comparison.</p>
              <p>An additional objective is to support future clinical discussion and hypothesis generation by organizing owner-reported experiences into structured and analyzable datasets. The survey is not intended to replace controlled clinical research, diagnostic evaluation, or formal epidemiological investigation, but rather to supplement existing knowledge with large-scale owner-perspective data that may otherwise remain undocumented.</p>
              <p>The project also seeks to improve informational transparency and public understanding surrounding LP/GOLPP by consolidating owner experiences, procedural terminology, and outcome reporting into a centralized and publicly accessible resource.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="overview_intended_use_of_findings">
            <h3>1.3 Intended Use of Findings</h3>
            <p>The survey is designed to document owner-reported experiences relating to canine laryngeal paralysis (LP/GOLPP), associated interventions, complications, quality-of-life effects, and long-term management outcomes in a structured and analyzable format.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="intended_use_of_findings"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>The collected data may be used to identify recurring trends, generate hypotheses, support comparative discussion of treatment approaches, and highlight areas where additional clinical research may be warranted. Survey findings may also contribute to improved public understanding of the practical and functional realities associated with LP/GOLPP management from the owner perspective.</p>
              <p>The survey is not intended to produce population-representative prevalence estimates, establish causal relationships, replace controlled clinical studies, or provide individualized medical guidance. Because participation is voluntary and respondent verification is limited, findings must be interpreted within the methodological constraints described elsewhere in this document.</p>
              <p>Aggregated findings may be published or referenced in educational materials, public reports, advocacy discussions, or future collaborative efforts involving clinicians, researchers, or patient communities, provided that appropriate methodological limitations and interpretation boundaries are clearly disclosed.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="overview_interpretation_boundaries">
            <h3>1.4 Interpretation Boundaries</h3>
            <p>The findings and observations derived from this survey must be interpreted within the limitations inherent to voluntary owner-reported observational research.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="interpretation_boundaries"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Participation in the survey is self-selected and recruitment occurs through publicly accessible online channels, including search-engine discovery, social media distribution, advocacy communities, and word-of-mouth referral. As a result, the respondent population may not be representative of the broader population of dogs affected by laryngeal paralysis (LP/GOLPP).</p>
              <p>Survey responses are based primarily on owner recollection, personal interpretation, and available medical understanding at the time of submission. Although efforts are made to improve internal consistency through structured branching logic and validation mechanisms, independent clinical verification of reported diagnoses, procedures, complications, and outcomes is generally not possible.</p>
              <p>Accordingly, survey findings should not be interpreted as establishing population prevalence, proving causal relationships, validating treatment efficacy, or replacing controlled clinical research. Observed associations may reflect confounding variables including disease severity, case selection, referral patterns, comorbidities, surgeon preference, reporting bias, survivorship bias, or differing follow-up durations.</p>
              <p>The survey is intended primarily as a descriptive and exploratory informational resource designed to support pattern identification, comparative discussion, and future hypothesis generation.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>
        </section>

        <hr className="method-section-rule" />



<section className="content-body" id="implementation">
  <hr className="survey-method-section-separator" />

  <a href="#top" className="back-to-top">
    <span className="back-to-top-icon">↑</span> Back to Top
  </a>

  <h2>2. Platform Design and Implementation</h2>

  <section className="survey-method-subsection" id="dedicated_online_platform">
    <h3>2.1 Dedicated Online Platform</h3>

    <p>
      The survey is implemented as a standalone web-based platform rather than
      through a third-party survey service. 
    </p>

    {/* LearnMoreContent start */}
    <LearnMoreContent
      id="section_2_1"
      header="More..."
      openSection={openSection}
      setOpenSection={setOpenSection}
    >
      <p>
        This approach provides direct control over survey structure, content presentation, deployment, maintenance, supporting resources, and long-term project direction. Independent platform development also allows the survey to evolve beyond
        the limitations of conventional form-based survey tools. Survey content,
        branching logic, procedural categories, informational pages, and future
        analytical features can be revised as project needs change.
      </p>
    </LearnMoreContent>
    {/* LearnMoreContent end */}
  </section>

  <section className="survey-method-subsection" id="long_term_availability_and_scalability">
    <h3>2.2 Long-Term Availability and Scalability</h3>

    <p>
      The platform was designed to support long-term data collection without a
      fixed enrollment period or predefined project end date. 
    </p>

    {/* LearnMoreContent start */}
    <LearnMoreContent
      id="section_2_2"
      header="More..."
      openSection={openSection}
      setOpenSection={setOpenSection}
    >
      <p>
        This structure allows the survey to accumulate responses over time as awareness,
        participation, and follow-up opportunities increase.The platform can also support future expansion of survey content, procedure-specific sections, educational resources, outcome categories, and analytical capabilities without requiring a fundamental redesign of the project.
      </p>
    </LearnMoreContent>
    {/* LearnMoreContent end */}
  </section>

  <section className="survey-method-subsection" id="technical_architecture_and_maintainability">
    <h3>2.3 Technical Architecture and Maintainability</h3>

    <p>
      The survey platform was developed with emphasis on maintainability,
      structured data handling, usability, and operational stability. 
    </p>

    {/* LearnMoreContent start */}
    <LearnMoreContent
      id="section_2_3"
      header="More..."
      openSection={openSection}
      setOpenSection={setOpenSection}
    >
      <p>
        Its architecture supports ongoing revision of survey content, terminology,
      branching logic, and supporting information. This design allows the project to respond to emerging informational needs, correct or clarify survey content, and incorporate future refinements while preserving continuity of the survey framework and accumulated methodological experience.
      </p>
    </LearnMoreContent>
    {/* LearnMoreContent end */}
  </section>

  <section className="survey-method-subsection" id="search_visibility_and_public_accessibility">
    <h3>2.4 Search Visibility and Public Accessibility</h3>

    <p>
      The website structure supports public access, search-engine discovery,
      and distribution through social media, email, advocacy communities,
      discussion forums, and other online channels.
    </p>

    {/* LearnMoreContent start */}
    <LearnMoreContent
      id="section_2_4"
      header="More..."
      openSection={openSection}
      setOpenSection={setOpenSection}
    >
      <p>
        A dedicated Browse mode allows informational survey content to be made
        available in a search-indexable format. This improves discoverability,
        supports public education, and allows potential respondents to evaluate
        the project before deciding whether to participate.
      </p>
    </LearnMoreContent>
    {/* LearnMoreContent end */}
  </section>

  <section className="survey-method-subsection" id="independent_ownership_and_operational_control">
    <h3>2.5 Independent Ownership and Operational Control</h3>

    <p>
      The project maintains independent control over platform infrastructure,
      survey logic, datasets, presentation methods, and long-term operational
      direction.
    </p>

    {/* LearnMoreContent start */}
    <LearnMoreContent
      id="section_2_5"
      header="More..."
      openSection={openSection}
      setOpenSection={setOpenSection}
    >
      <p>
        This independence reduces reliance on commercial survey providers,
        limits recurring platform costs, and preserves flexibility for future
        development, publication, collaboration, and data-stewardship decisions.
      </p>

      <p>
        The website structure also supports extensive secondary information,
        including procedural explanations, terminology references, educational
        materials, methodological documentation, and future analytical
        publications.
      </p>
    </LearnMoreContent>
    {/* LearnMoreContent end */}
  </section>
</section>











        <hr className="method-section-rule" />

        <section className="content-body" id="respondent_population_and_recruitment">
          <a href="#top" className="back-to-top">
            <span className="back-to-top-icon">↑</span> Back to Top
          </a>
          <h2>3. Respondent Population and Recruitment</h2>

          <section className="subsection" id="respondent_population">
            <h3>3.1 Intended Respondent Population</h3>
            <p>The survey targets owners and caregivers of dogs diagnosed with, suspected of having, or previously treated for canine laryngeal paralysis (LP/GOLPP).</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="intended_respondent_population"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Respondents may include individuals whose dogs are currently undergoing evaluation, receiving conservative management, recovering from surgical intervention, living with long-term disease progression, or deceased following diagnosis or treatment. The survey is intended to capture a broad range of experiences across different stages of disease progression and clinical management.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="inclusion_and_exclusion_criteria">
            <h3>3.2 Inclusion and Exclusion Criteria</h3>
            <p>Participation is open to respondents regardless of geographic location, veterinary provider, treatment approach, or procedural history.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="inclusion_and_exclusion_criteria"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>The survey seeks input from owners whose dogs have undergone common surgical procedures such as unilateral arytenoid lateralization (tie-back), as well as less common interventions including endolaryngeal stenting, partial arytenoidectomy, ventriculocordectomy, permanent tracheostomy, and other emerging or procedure-specific approaches. Responses from owners who elected non-surgical management are also considered valuable for comparative and descriptive analysis.</p>
              <p>The survey does not require referral from a veterinarian, specialist, advocacy organization, or research institution. Participation occurs voluntarily through self-enrollment. Respondents are responsible for determining whether they possess sufficient knowledge of their dog&lsquo;s medical history, diagnosis, treatment, and outcomes to provide meaningful responses.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="recruitment_channels">
            <h3>3.3 Recruitment Channels</h3>
            <p>Recruitment occurs primarily through publicly accessible online channels.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="recruitment_channels"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>These channels may include search-engine discovery, social media platforms, disease-specific discussion groups, educational resources, advocacy communities, veterinary referrals, and word-of-mouth recommendations. The survey platform incorporates publicly accessible informational content intended to improve discoverability and allow potential participants to evaluate the project&lsquo;s objectives before choosing whether to participate.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="voluntary_participation_and_self_selection_bias">
            <h3>3.4 Voluntary Participation and Self-Selection Bias</h3>
            <p>Because participation is voluntary and self-selected, the respondent population may differ from the broader population of dogs affected by LP/GOLPP.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="voluntary_participation_and_self_selection_bias"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Owners who experienced unusually positive outcomes, significant complications, strong advocacy interests, or prolonged disease management may be more likely to participate than owners with less notable experiences. Consequently, survey findings should be interpreted as observations derived from a self-selected respondent population rather than a statistically representative sample of all affected dogs.</p>
              <p>The survey is intended to document and organize owner-reported experiences across a large and diverse participant population. The objective is not to establish population prevalence estimates, but rather to identify recurring patterns, support comparative discussion, and facilitate future hypothesis generation relating to LP/GOLPP diagnosis, treatment, and long-term management.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="survey_length_and_respondent_engagement">
            <h3>3.5 Survey Length and Respondent Engagement</h3>
            <p>The survey was intentionally designed to collect detailed information regarding diagnosis, treatment history, procedural outcomes, complications, quality-of-life effects, and long-term disease management.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="survey_length_and_respondent_engagement"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>As a result, completion requires a greater time commitment than many conventional online surveys. While survey length may discourage participation by some potential respondents, it may also encourage participation by individuals who are more familiar with their dog&lsquo;s medical history and more willing to provide thoughtful, comprehensive responses.</p>
              <p>This effect may help reduce the proportion of incomplete, impulsive, or minimally engaged submissions and improve the overall depth and interpretive value of the collected dataset. Nevertheless, the possibility that survey length influences participation patterns represents an additional source of self-selection bias that should be considered when interpreting survey findings.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>
        </section>

        <hr className="method-section-rule" />

        <section className="content-body" id="survey_structure_and_methodology">
          <h2>4. Survey Structure and Methodology</h2>

          <section className="subsection" id="survey_development_approach">
            <a href="#top" className="back-to-top">
              <span className="back-to-top-icon">↑</span> Back to Top
            </a>
            <h3>4.1 Survey Development Approach</h3>
            <p>The survey was developed as a structured observational instrument designed to collect detailed owner-reported information relating to canine laryngeal paralysis (LP/GOLPP), associated interventions, disease progression, complications, and long-term outcomes.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="survey_development_approach"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Survey content evolved through iterative review of published literature, owner experiences, veterinary resources, online discussions, and recurring themes identified within the LP/GOLPP community. Development emphasized practical relevance, clarity of language, flexibility, and the ability to capture both common and less frequently reported experiences.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="question_design_principles">
            <h3>4.2 Question Design Principles</h3>
            <p>Questions were designed to maximize clarity while minimizing ambiguity and respondent burden.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="question_design_principles"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Wherever possible, the survey uses plain-language terminology that can be understood by respondents without formal veterinary training. Questions generally focus on observable events, documented diagnoses, reported procedures, functional outcomes, and owner experiences rather than requiring respondents to interpret complex medical concepts.</p>
              <p>The survey favors structured response formats that support aggregation and comparative analysis. Explanatory text, contextual guidance, and informational resources are incorporated where appropriate to improve consistency of interpretation and reduce misunderstanding.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="branching_and_conditional_logic">
            <h3>4.3 Branching and Conditional Logic</h3>
            <p>The survey employs extensive branching and conditional display logic.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="branching_and_conditional_logic"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Respondents are presented only with questions that are relevant to their individual circumstances. This approach reduces unnecessary respondent burden and allows the survey to collect greater detail within applicable topic areas without requiring every participant to navigate the entire questionnaire.</p>
              <p>Branching logic also supports collection of procedure-specific information, complication reporting, follow-up experiences, and outcome measures while maintaining a coherent respondent experience. The objective is to balance survey comprehensiveness with usability and completion efficiency.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="procedure_specific_sections">
            <h3>4.4 Procedure-Specific Sections</h3>
            <p>LP/GOLPP management encompasses a diverse range of treatment approaches.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="procedure_specific_sections"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>To accommodate this variability, the survey includes dedicated sections for major procedural categories and management strategies. These sections collect information relating to treatment selection, procedural details, recovery experiences, complications, perceived effectiveness, and long-term outcomes.</p>
              <p>Procedure-specific sections allow respondents to provide detailed information relevant to their particular experiences while avoiding extensive questioning regarding interventions that were never performed. This structure also supports future comparative analysis between different treatment approaches where sufficient response volume exists.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="response_formats_and_measurement_categories">
            <h3>4.5 Response Formats and Measurement Categories</h3>
            <p>The survey incorporates multiple response formats, including single-selection questions, multiple-selection questions, rating scales, numerical responses, date-related information, and structured categorical fields.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="response_formats_and_measurement_categories"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Different response formats are used according to the nature of the information being collected. Many questions focus on observable characteristics such as symptom frequency, exercise tolerance, respiratory function, recovery experiences, quality-of-life changes, and treatment outcomes. Standardized response structures improve consistency across submissions and facilitate descriptive and comparative analysis.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="free_text_narrative_responses">
            <h3>4.6 Free-Text Narrative Responses</h3>
            <p>Although structured data collection forms the foundation of the survey, selected sections provide opportunities for respondents to submit narrative comments and additional contextual information.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="free_text_narrative_responses"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>These responses allow participants to describe circumstances that may not be adequately captured through predefined answer choices.</p>
              <p>Narrative submissions may provide valuable insight into unusual presentations, uncommon complications, decision-making factors, emotional experiences, and other topics that structured response formats cannot fully represent. Qualitative responses may also assist with identifying emerging themes that warrant future investigation or incorporation into subsequent survey revisions.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>
        </section>

        <hr className="method-section-rule" />

        <section className="content-body" id="data_collection_and_quality_control">
          <h2>5. Data Collection and Quality Control</h2>

          <section className="subsection" id="submission_workflow">
            <a href="#top" className="back-to-top">
              <span className="back-to-top-icon">↑</span> Back to Top
            </a>            
            <h3>5.1 Submission Workflow</h3>
            <p>Survey responses are submitted electronically through the project&lsquo;s web-based platform.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="submission_workflow"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Respondents may complete the survey in a single session or return to continue completion at a later time where platform functionality permits. Submitted responses are stored within the project&lsquo;s data infrastructure for subsequent review, analysis, and aggregation.</p>
              <p>The survey is designed to support ongoing data collection without predefined enrollment periods or submission deadlines. This approach allows continued accumulation of observational data as new participants discover the project and as existing respondents experience additional disease progression, treatment decisions, or long-term outcomes.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="draft_persistence_and_technical_infrastructure">
            <h3>5.2 Draft Persistence and Technical Infrastructure</h3>
            <p>Because LP/GOLPP histories can be complex and detailed, the survey incorporates limited draft-preservation functionality intended to reduce respondent burden during completion.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="draft_persistence_and_technical_infrastructure"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>This functionality allows respondents to save their progress and return later using the same device and browser environment. However, the project intentionally avoids mandatory account creation, user authentication systems, and centralized storage of personally identifiable respondent information.</p>
              <p>This design reflects a trade-off between convenience and accessibility. More comprehensive draft-management systems could permit respondents to resume survey completion across different devices, browsers, and locations. Such functionality would generally require user accounts, persistent identifiers, and additional collection and storage of user-related information. The project prioritizes ease of participation, privacy considerations, and low barriers to entry over cross-device continuity. As a result, draft-preservation capabilities remain intentionally limited compared to those commonly found in account-based survey platforms.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="duplicate_mitigation_and_validation_logic">
            <h3>5.3 Duplicate Mitigation and Validation Logic</h3>
            <p>The survey incorporates validation mechanisms intended to improve response consistency and reduce common data-entry errors.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="duplicate_mitigation_and_validation_logic"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Conditional logic, structured response formats, and input validation help identify incomplete entries, inconsistent responses, and formatting issues before submission.</p>
              <p>Because participation is voluntary and anonymous or pseudonymous in many cases, definitive prevention of duplicate submissions is not always possible. Consequently, duplicate identification may rely on review of response characteristics, submission timing, and other available indicators where appropriate.</p>
              <p>The survey also informs respondents that a sample of participants may be contacted for verification purposes. This process may be used to clarify selected responses, assess consistency, or request supporting context when a submission raises methodological questions. Separately, respondents may indicate whether they are willing to be contacted for additional follow-up information. This opt-in mechanism allows the project to request further detail regarding disease progression, treatment outcomes, or related survey topics without making continued contact a condition of participation.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="handling_incomplete_or_ambiguous_responses">
            <h3>5.4 Handling Incomplete or Ambiguous Responses</h3>
            <p>Not all respondents will possess complete medical records or detailed knowledge of every aspect of their dog&lsquo;s diagnosis, treatment history, or long-term management.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="handling_incomplete_or_ambiguous_responses"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>The survey therefore permits respondents to indicate when information is unavailable, uncertain, or unknown rather than requiring speculative responses.</p>
              <p>Incomplete submissions may still provide valuable information and may be retained for analysis where sufficient data exist to support meaningful interpretation. However, meaningful participation requires a minimum level of familiarity with the dog&lsquo;s medical history and clinical experience. To support data quality, the project may establish review criteria based on factors such as response completeness, internal consistency, and the proportion of questions answered as &ldquo;Don&lsquo;t Know&rdquo; or equivalent uncertainty responses. Submissions that exceed defined thresholds for missing or unknown information may be flagged for further review, excluded from selected analyses, or omitted from the dataset when insufficient information exists to support reliable interpretation.</p>
              <p>Similarly, ambiguous, contradictory, or internally inconsistent responses may be excluded from specific analyses when data quality cannot be reasonably established.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="limitations_of_owner_reported_data">
            <h3>5.5 Limitations of Owner-Reported Data</h3>
            <p>The survey relies primarily on owner-reported information rather than direct clinical observation or independent medical verification.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="limitations_of_owner_reported_data"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Respondents may differ in medical knowledge, record availability, recall accuracy, and interpretation of events. Consequently, reported diagnoses, complications, outcomes, and treatment details may contain inaccuracies or omissions.</p>
              <p>These limitations are inherent to owner-reported observational research and must be considered when interpreting survey findings. However, the primary objective of the survey is not to establish the precise accuracy of individual responses, but rather to identify recurring patterns across a large and diverse respondent population. While individual submissions may contain errors, uncertainties, or incomplete information, meaningful trends may still emerge when sufficient numbers of responses are evaluated collectively.</p>
              <p>The survey is therefore designed to emphasize broad pattern identification, comparative observation, and hypothesis generation rather than definitive clinical measurement. Appropriate data-quality controls may be applied to reduce the influence of incomplete, inconsistent, or low-information submissions, but a degree of variability is expected within any large-scale owner-reported dataset. Findings should be interpreted in this context and viewed as observational indicators that may warrant further investigation rather than as independently verified clinical conclusions.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="data_security_and_future_safeguards">
            <h3>5.6 Data Security and Future Safeguards</h3>
            <p>The project employs standard web-hosting and data-management practices intended to support responsible handling of participant information.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="data_security_and_future_safeguards"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Reasonable efforts are made to protect collected data from unauthorized access, accidental loss, or unintended disclosure.</p>
              <p>As the project evolves, additional safeguards may be implemented to further strengthen data protection and submission integrity. These measures may include automated detection of suspicious or repeated submissions, enhanced administrative access controls, expanded activity monitoring, improved backup procedures, and additional protections designed to reduce automated spam or malicious submissions.</p>
              <p>Although no internet-based system can guarantee absolute security, the project seeks to follow widely accepted practices for responsible collection, storage, and management of participant-submitted information while balancing accessibility, usability, and long-term sustainability.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>
        </section>

        <hr className="method-section-rule" />

        <section className="content-body" id="analysis_framework">
          <h2>6. Analysis Framework</h2>

          <section className="subsection" id="descriptive_analysis">
            <a href="#top" className="back-to-top">
              <span className="back-to-top-icon">↑</span> Back to Top
            </a>            
            <h3>6.1 Descriptive Analysis</h3>
            <p>The primary analytical objective of the survey is descriptive.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="descriptive_analysis"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Responses are aggregated to summarize respondent characteristics, disease progression patterns, treatment histories, reported complications, quality-of-life impacts, and long-term outcomes. Results may be presented as counts, percentages, distributions, averages, or other summary measures intended to describe the respondent population and their reported experiences.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="comparative_analysis">
            <h3>6.2 Comparative Analysis</h3>
            <p>Where sufficient response volume exists, comparative analysis may be conducted between different treatment approaches, management strategies, disease stages, demographic groups, or other relevant categories.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="comparative_analysis"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Such comparisons are intended to identify potential differences, similarities, and recurring patterns within the dataset.</p>
              <p>Because participation is voluntary and self-selected, comparative findings should be interpreted as observational rather than causal. Observed differences may reflect underlying factors not directly measured by the survey.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="exploratory_pattern_identification">
            <h3>6.3 Exploratory Pattern Identification</h3>
            <p>A central objective of the project is identification of recurring patterns that may not be apparent from individual case reports or isolated clinical experiences.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="exploratory_pattern_identification"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Analysis may explore relationships involving symptom progression, procedural outcomes, complications, adaptation strategies, quality-of-life changes, environmental factors, and other variables reported by respondents.</p>
              <p>The purpose of this analysis is to generate observations and questions that may warrant further investigation rather than establish definitive conclusions.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="qualitative_narrative_review">
            <h3>6.4 Qualitative Narrative Review</h3>
            <p>In addition to structured survey responses, selected narrative submissions may be reviewed to identify recurring themes, unusual experiences, emerging concerns, or factors not adequately captured through predefined response categories.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="qualitative_narrative_review"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Narrative analysis may provide additional context for quantitative findings and assist with identifying future areas for survey refinement, educational content development, or clinical discussion.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="statistical_and_interpretive_limitations">
            <h3>6.5 Statistical and Interpretive Limitations</h3>
            <p>The survey was not designed as a controlled clinical study and does not employ randomized sampling or population-representative recruitment methods.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="statistical_and_interpretive_limitations"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Consequently, findings cannot be used to establish disease prevalence, treatment efficacy, risk prediction, or causal relationships.</p>
              <p>Statistical analysis may be used where appropriate to summarize and explore the collected data, but all findings must be interpreted within the limitations of voluntary participation, owner-reported information, incomplete verification, and potential self-selection bias. The analytical value of the survey lies primarily in its ability to identify recurring trends, support comparative discussion, and generate hypotheses for future investigation.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>
        </section>

        <hr className="method-section-rule" />

        <section className="content-body" id="transparency_and_ethics">
          <h2>7. Transparency and Ethics</h2>

          <section className="subsection" id="privacy_and_data_handling">
            <a href="#top" className="back-to-top">
              <span className="back-to-top-icon">↑</span> Back to Top
            </a>            
            <h3>7.1 Privacy and Data Handling</h3>
            <p>The project seeks to collect and manage participant-submitted information in a responsible manner consistent with its observational and educational objectives.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="privacy_and_data_handling"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Personally identifiable information is limited to information voluntarily provided by respondents and is used only for purposes described elsewhere in this document. Reasonable efforts are made to protect collected information from unauthorized access, disclosure, or misuse.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="non_commercial_intent_and_data_stewardship">
            <h3>7.2 Non-Commercial Intent and Data Stewardship</h3>
            <p>The primary purpose of this project is educational, observational, and research-oriented.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="non_commercial_intent_and_data_stewardship"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>The survey was developed to improve understanding of owner-reported experiences relating to canine laryngeal paralysis (LP/GOLPP), facilitate discussion within the affected community, and support future investigation of recurring patterns and outcomes.</p>
              <p>Participation in the survey is voluntary and no fee is required to access survey content or contribute responses. The project is not conducted on behalf of a commercial sponsor, product manufacturer, veterinary provider, or other organization with a direct financial interest in survey findings.</p>
              <p>The project owner retains responsibility for management of the survey platform, collected datasets, analytical outputs, publications, and future development of the project. While aggregated findings may be publicly shared, access to underlying datasets, specialized analyses, collaborative research activities, or other project resources may be subject to separate agreements, project policies, cost-recovery arrangements, or other conditions determined by the project owner. These provisions are intended to support responsible stewardship of the dataset, ensure project sustainability, and preserve flexibility for future research and collaboration opportunities.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="transparency_and_limitations_disclosure">
            <h3>7.3 Transparency and Limitations Disclosure</h3>
            <p>The project is committed to transparent disclosure of methodological limitations, including the challenges associated with voluntary participation, self-selection bias, owner-reported information, incomplete verification, and other factors that may influence interpretation of survey findings.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="transparency_and_limitations_disclosure"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Published analyses and summaries should be considered within these limitations and should not be interpreted as substitutes for controlled clinical research or professional veterinary guidance.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>
        </section>

        <hr className="method-section-rule" />

        <section className="content-body" id="future_development">
          <h2>8. Future Development</h2>

          <section className="subsection" id="planned_refinements">
            <a href="#top" className="back-to-top">
              <span className="back-to-top-icon">↑</span> Back to Top
            </a>            
            <h3>8.1 Planned Refinements</h3>
            <p>The survey is intended to remain an evolving project subject to ongoing review and refinement.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="planned_refinements"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Future revisions may include expansion of procedure-specific content, improved terminology, additional outcome measures, revised branching logic, enhanced educational resources, and other modifications informed by respondent feedback and accumulated project experience.</p>
              <p>As participation increases and additional data become available, opportunities may emerge to improve survey structure, strengthen data-quality procedures, and address informational gaps identified through analysis of collected responses.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="potential_clinical_collaboration">
            <h3>8.2 Potential Clinical Collaboration</h3>
            <p>The current platform architecture provides opportunities for future collaboration with veterinary institutions, academic researchers, specialty hospitals, advocacy organizations, and other parties with an interest in LP/GOLPP research and education.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="potential_clinical_collaboration"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>Such collaborations may involve data analysis, methodological review, educational initiatives, validation efforts, or other activities intended to improve understanding of the disease and its management.</p>
              <p>Should future research objectives require more rigorous participant verification, enhanced identity management, formal authentication procedures, or institution-specific data governance standards, the survey framework could be adapted to support those requirements while preserving continuity of survey structure and accumulated methodological experience. Such developments may provide additional opportunities for data validation, longitudinal follow-up, and integration with more formal research initiatives.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="longitudinal_and_follow_up_opportunities">
            <h3>8.3 Longitudinal and Follow-Up Opportunities</h3>
            <p>Although the survey currently functions primarily as a cross-sectional observational instrument, the platform architecture supports future development of longitudinal research capabilities.</p>
            {/* Start LearnMoreContent */}
            <LearnMoreContent
              id="longitudinal_and_follow_up_opportunities"
              header="More..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>These capabilities may include follow-up surveys, outcome updates, disease progression tracking, post-procedural monitoring, and other mechanisms intended to capture changes over time.</p>
              <p>Longitudinal participation may provide additional insight into long-term treatment outcomes, complication development, quality-of-life changes, survival patterns, and other aspects of LP/GOLPP that are difficult to evaluate through single-point-in-time reporting.</p>
              <p>The long-term direction of the project will depend upon participation levels, data quality, available resources, collaborative opportunities, and the ongoing informational needs of the LP/GOLPP community. Future development priorities may evolve as new information, technologies, and research opportunities emerge.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>
        </section>

        <hr className="survey-method-section-separator" />

        <section className="content-body" id="platform_reusuability">
          <h2>9. Platform Reuseablity in Other Veterinary-Medical Contexts</h2>
          <section className="subsection" id="platform_infrastructure_vs_survey_content">
            <h3>9.1 Platform Infrastructure vs. Survey Content</h3>
            <p>
              The biggest challenge in a self-hosted survey project such as the <span className="emphasis">2026 LP/GOLPP Survey</span>  lies not in the design and implementation of the disease-specific questionnaire itself, but in the creation of a reliable and coherent underlying platform infrastructure. 
            </p>
            <LearnMoreContent
              id="platform_infrastructure_vs_survey_content"
              header="Read more..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>The platform incorporates a reusable combination of front-end and back-end technologies, survey-engine integration, branching-logic systems, data-handling workflows, content-management structures, validation mechanisms, deployment procedures, and supporting development tools intended to support long-term observational research projects.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}


          </section>

          <section className="subsection" id="separation_of_concerns">
            <h3>9.2 Separation of Concerns </h3>
            <p>The architecture was designed to separate survey content from the technical framework that delivers, validates, stores, and manages collected information.</p>
            <LearnMoreContent
              id="separation_of_concerns"
              header="Read more..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>As a result, future projects can leverage the existing infrastructure while replacing only the subject-matter content, survey logic, terminology, and research objectives appropriate to a different disease, specialty, or investigative focus.</p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="reuseable_survey_framework ">
            <h3>9.3 Reuseable Survey Framework for Veterinary-Medical Data Collection</h3>
            <p>A core objective of this project was to generate a digital framework and comprehensive toolset to eliminate the need for future project sponsors, researchers, advocacy organizations, veterinary institutions, or other stakeholders to recreate foundational survey infrastructure from the ground up.</p>
            <LearnMoreContent
              id="reuseable_survey_framework"
              header="Read more..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>
                Instead, existing technical components can be adapted and extended to support new research initiatives while benefiting from previously developed workflows, tested implementation patterns, and accumulated operational experience.</p>
              <p>
                The resulting framework represents a reusable foundation for future veterinary-medical data-collection projects and provides a practical starting point upon which subject-matter experts can build without first solving the numerous technical challenges associated with developing and maintaining a modern survey platform.
              </p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>
        </section>
        
        <hr className="survey-method-section-separator" />

        <section className="content-body" id="internationalization_and_localization">
          <h2>10. Internationalization and Localization</h2>
          <section className="subsection" id="multilanguage_design_architecture">
            <h3>10.1 Multi-Language Design Architecture</h3>
            <p>The platform architecture was designed with future internationalization and localization requirements in mind.</p>
            <LearnMoreContent
              id="multilanguage_design_architecture"
              header="Read more..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>
                Although the current implementation is presented primarily in English and focuses on a specific veterinary-medical subject area, the underlying framework supports adaptation to multiple languages, regions, and cultural contexts without requiring fundamental changes to the supporting infrastructure.
              </p>
              <p>
                Survey content, informational resources, response options, labels, instructional text, and other user-facing elements can be separated from the technical systems responsible for presentation, navigation, branching logic, validation, data collection, and reporting. This separation allows language-specific content to be developed and maintained independently of the underlying platform architecture.
              </p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>

          <section className="subsection" id="integrated_internationalization_support">
            <h3>10.2 Integrated Internationalization Support</h3>
            <p>The framework can also accommodate regional differences in terminology, measurement systems, date formats, procedural nomenclature, and other factors that may vary across veterinary communities, professional organizations, or geographic regions.</p>
            <LearnMoreContent
              id="integrated_internationalization_support"
              header="Read more..."
              openSection={openSection}
              setOpenSection={setOpenSection}
              >
              <p>
                Such flexibility may be particularly valuable for diseases and treatment approaches that involve international participation, multinational collaboration, or geographically diverse respondent populations.
              </p>
              <p>
                By incorporating internationalization considerations into the platform design from the outset, future projects may expand into additional languages and jurisdictions without requiring extensive redevelopment of the underlying technology stack. This approach reduces future implementation effort and creates opportunities for broader participation, cross-regional comparison, and more diverse observational datasets while preserving consistency within the overall survey framework.
              </p>
            </LearnMoreContent>
            {/* End LearnMoreContent */}
          </section>
        </section>






      </main>
    </>
  )
}

export default Method
