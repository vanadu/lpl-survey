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
      <main className="page home">
        <header className="home-head card card--lift">

          <SurveyHero/>

        </header>


        <section className="content-body home-head">
            <h1>2026&nbsp;LP/GOLPP&nbsp;Survey Methodology</h1>
        </section>

        <section className="content-body" id="overview">
          <h2>1. Overview</h2>
          <section className="subsection" id="overview_background">
            <h3>1.1 Background</h3>
            <p>
              Primary veterinarians in the 21st century often face unrealistic expectations from a clientele that is increasingly emotionally dependent on their companion animals. While the veterinary knowledgebase expands exponentially, primary practitioners must balance clinical workload, continuing education, and business considerations. As a result, less common or slowly emerging diseases can receive limited practical attention in general practice settings. Canine laryngeal paralysis (LP/GOLPP) exemplifies this problem.
            </p>
            <LearnMoreContent
              id="background"
              header="Read more..."
              openSection={openSection}
              setOpenSection={setOpenSection}
            >
                <p>LP/GOLPP often presents with subtle, progressive symptoms that overlap with the normal aging process and other respiratory conditions, which complicates diagnosis and treatment. But over the last decade, social media has increased public awareness of LP/GOLPP. In many cases, animal owners may be more familiar with current procedural options than the attending primary veterinarian. This widening informational asymmetry contributed significantly to the development and objectives of the present survey project.</p> 
                <p>The primary objective of this survey project is to collect structured owner-reported information relating to LP/GOLPP, associated interventions, clinical progression, and long-term management outcomes. It is designed to identify recurring patterns in owner-reported experiences to support future comparative and hypothesis-generating analysis. Secondary objectives include facilitating more informed discussion among owners, clinicians, and researchers regarding treatment outcomes and unmet informational needs within the LP/GOLPP community. An additional objective is to support future clinical discussion and hypothesis generation by organizing owner-reported experiences into structured and analyzable datasets.</p>
                <p>The survey is not intended to replace controlled clinical research, diagnostic evaluation, or formal epidemiological investigation, but rather to supplement existing knowledge with large-scale owner-perspective data that may otherwise remain undocumented, with the goal of informing and stimulating future empirical investigation.</p>
                <p>The survey is implemented as a standalone web-based platform using structured branching logic and procedure-specific sections intended to improve relevance, reduce respondent burden, and capture granular procedural and outcome data. It is designed to be open-ended without fixed limits on duration or dataset growth and functionally supports ongoing updates to participant data as respondents’ companion animals proceed through the aging process and end-of-life. The project also emphasizes transparency regarding methodological limitations, including self-selection bias, owner-reported data limitations, and the inability to establish population prevalence or causal relationships from survey findings.</p>
            </LearnMoreContent>
          </section>{/* /#background */}

          <section className="subsection" id="overview_objectives">
            <h3>1.2 Objectives</h3>
            <p>The survey is intended primarily as a descriptive observational instrument designed to document real-world experiences across a broad and diverse respondent population.</p>
            <LearnMoreContent
              id="objectives"
              header="Read more..."
              openSection={openSection}
              setOpenSection={setOpenSection}
            >
              <p>Secondary objectives include exploratory identification of recurring patterns involving symptom progression, procedural outcomes, complications, functional impairment, quality-of-life changes, and post-treatment adaptation. The survey also supports comparative analysis between different procedural approaches, management strategies, and reported outcomes where sufficient response volume exists to permit meaningful comparison.</p>
              <p>An additional objective is to support future clinical discussion and hypothesis generation by organizing owner-reported experiences into structured and analyzable datasets. The survey is not intended to replace controlled clinical research, diagnostic evaluation, or formal epidemiological investigation, but rather to supplement existing knowledge with large-scale owner-perspective data that may otherwise remain undocumented.</p>
              <p>The project also seeks to improve informational transparency and public understanding surrounding LP/GOLPP by consolidating owner experiences, procedural terminology, and outcome reporting into a centralized and publicly accessible resource.</p>
            </LearnMoreContent>
          </section>

          <section className="subsection" id="overview_intended_use_of_findings">
            <h3>1.3 Intended Use of Findings</h3>
            <p>The survey is designed to document owner-reported experiences relating to canine laryngeal paralysis (LP/GOLPP), associated interventions, complications, quality-of-life effects, and long-term management outcomes in a structured and analyzable format.</p>
            <LearnMoreContent
              id="intended_use_of_findings"
              header="Read more..."
              openSection={openSection}
              setOpenSection={setOpenSection}
            >
              <p>The collected data may be used to identify recurring trends, generate hypotheses, support comparative discussion of treatment approaches, and highlight areas where additional clinical research may be warranted. Survey findings may also contribute to improved public understanding of the practical and functional realities associated with LP/GOLPP management from the owner perspective.</p>
              <p>The survey is not intended to produce population-representative prevalence estimates, establish causal relationships, replace controlled clinical studies, or provide individualized medical guidance. Because participation is voluntary and respondent verification is limited, findings must be interpreted within the methodological constraints described elsewhere in this document.</p>
              <p>Aggregated findings may be published or referenced in educational materials, public reports, advocacy discussions, or future collaborative efforts involving clinicians, researchers, or patient communities, provided that appropriate methodological limitations and interpretation boundaries are clearly disclosed.</p>


            </LearnMoreContent>





          </section>



        </section>




      </main>
    
    </>
  )
}

export default Method