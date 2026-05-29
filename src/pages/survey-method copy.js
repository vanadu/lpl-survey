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
            <p>This page provides an overview of the methodology, objectives, technical architecture, and interpretive limitations of the LP/GOLPP Survey project. It explains how the survey was designed, how data is collected and organized, the intended use of findings, and the constraints inherent to owner-reported observational research. The purpose of this documentation is to promote transparency, improve interpretability, and provide contextual reference for participants, clinicians, researchers, and other interested readers.
            </p>
        </section>

        <hr className="method-section-rule" />

        <section className="content-body" id="overview">
          <h2>1. Methodology Overview</h2>
          <section className="subsection" id="overview_background">
            <h3>1.1 Background</h3>
            <p>
              Primary veterinarians in the 21st century often face unrealistic expectations from a clientele that is increasingly emotionally dependent on their companion animals. While the veterinary knowledgebase expands exponentially, primary practitioners must balance clinical workload, continuing education, and business considerations. As a result, less common or slowly emerging diseases can receive limited practical attention in general practice settings. Canine laryngeal paralysis (LP/GOLPP) exemplifies this problem.
            </p>
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
          </section>{/* /#background */}

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
              <p>The findings and observations derived from this survey must be interpreted within the limitations inherent to voluntary owner-reported observational research. </p>
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
          </section>{/* End overview_interpretation_boundaries */}

          <hr />

          <section className="content-body" id="technical_overview">
            <h2>2. Technical Overview</h2>
            <section className="subsection" id="">
              <h3>2.1 Implementation</h3>
                <p>The survey platform is designed as a long-term, independently controlled research infrastructure emphasizing flexibility, scalability, accessibility, low operational cost, and future expansion potential.</p>

                <ul>
                  <li>
                    <span className="emphasis">Dedicated online platform</span>
                    <LearnMoreContent
                      id="dedicated_online_platform"
                      header="More..."
                      openSection={openSection}
                      setOpenSection={setOpenSection}
                      >
                      <p>A standalone website provides full control over survey structure, presentation, deployment, maintenance, SEO strategy, supporting content, and long-term project continuity independent of third-party platforms.</p>
                    </LearnMoreContent>
                    {/* End LearnMoreContent */}
                  </li>
                  <li>
                    <span className="emphasis">Professionally developed infrastructure</span>
                    <LearnMoreContent
                      id="professionally_developed_infrastructure"
                      header="More..."
                      openSection={openSection}
                      setOpenSection={setOpenSection}
                      >
                      <p>The platform was designed and implemented by an experienced web-technology professional with emphasis on maintainability, extensibility, structured data handling, usability, and long-term operational stability.</p>
                    </LearnMoreContent>
                    {/* End LearnMoreContent */} 
                  </li>
                  <li><span className="emphasis">No fixed duration limitations</span>
                  <LearnMoreContent
                    id="no_fixed_duration_limitations"
                    header="More..."
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    >
                    <p>The survey remains continuously available without predefined collection deadlines, allowing long-term accumulation of observational data as awareness, participation, and respondent follow-up increase over time.</p>
                  </LearnMoreContent>
                  {/* End LearnMoreContent */} </li>
                  <li><span className="emphasis">Scalable and expandable architecture</span> 
                  <LearnMoreContent
                    id="scalable_and_expandable_architecture"
                    header="More..."
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    >
                    <p>The platform supports ongoing expansion of survey content, supporting resources, procedural categories, analytical capabilities, and future project requirements without fundamental structural redesign.</p>
                  </LearnMoreContent>
                  {/* End LearnMoreContent */}
                  </li>
                  <li><span className="emphasis">Secure data handling</span> 
                  <LearnMoreContent
                    id="secure_data_handling"
                    header="More..."
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    >
                    <p>The platform incorporates modern web-development practices intended to support secure data transmission, controlled infrastructure management, and responsible handling of participant-submitted information.</p>
                  </LearnMoreContent>
                  {/* End LearnMoreContent */}
                  </li>
                  <li><span className="emphasis">Version-updatable design</span>
                  <LearnMoreContent
                    id="version_updatable_design"
                    header="More..."
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    >
                    <p>Survey content, branching logic, terminology, and informational resources can be revised over time while preserving platform continuity and maintaining compatibility with evolving project objectives.</p>
                  </LearnMoreContent>
                  {/* End LearnMoreContent */}
                   </li>
                  <li><span className="emphasis">Search-indexable &lsquo;Browse mode&rsquo;</span>
                  <LearnMoreContent
                    id="search_indexable_browse_mode"
                    header="More..."
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    >
                    <p>A dedicated Browse mode allows search-engine indexing of informational survey content, improving discoverability, public education value, and long-term search visibility related to LP/GOLPP topics.</p>
                  </LearnMoreContent>
                  {/* End LearnMoreContent */}
                  
                  </li>
                  <li><span className="emphasis">Multi-platform shareability</span>
                  <LearnMoreContent
                    id="multi_platform_shareability"
                    header="More..."
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    >
                    <p>The website structure supports distribution through social media, email, advocacy communities, discussion forums, and other electronic communication channels without platform-specific dependency. </p>
                  </LearnMoreContent>
                  {/* End LearnMoreContent */}
                  </li>
                  <li><span className="emphasis">Independent ownership and control</span>
                  <LearnMoreContent
                    id="independent_ownership_and_control"
                    header="More..."
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    >
                    <p>The project maintains independent ownership of platform infrastructure, survey logic, datasets, presentation methods, and long-term operational direction without reliance on commercial survey providers.</p>
                  </LearnMoreContent>
                  {/* End LearnMoreContent */}
                  </li>
                  <li><span className="emphasis">Low long-term operational cost</span>
                  <LearnMoreContent
                    id="low_long_term_operational_cost"
                    header="More..."
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    >
                    <p>Self-hosted infrastructure substantially reduces recurring subscription costs associated with commercial survey services, particularly for long-duration projects involving growing datasets and evolving functionality.</p>
                  </LearnMoreContent>
                  {/* End LearnMoreContent */}
                  </li>
                  <li><span className="emphasis">Unlimited supporting information capacity</span>
                  <LearnMoreContent
                    id="unlimited_supporting_information_capacity"
                    header="More..."
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    >
                    <p>The website structure supports extensive presentation of secondary information including procedural explanations, terminology references, educational materials, methodological documentation, and future analytical publications.</p>
                  </LearnMoreContent>
                  {/* End LearnMoreContent */}
                  </li>
                </ul>
            </section>{/* End  */}

          </section>{/* End  */}




        </section>




      </main>
    
    </>
  )
}

export default Method