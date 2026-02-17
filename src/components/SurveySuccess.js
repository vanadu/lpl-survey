import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img-lpl-logo.png"; // keep your existing import

const SurveySuccess = () => {
  
  // !VA Set minimum the spinner time before submit. 
  // const MIN_SPINNER_MS = 5000; // ← DEBUG (change to 800–1200 later)/


  const searchParams = useSearchParams();
  const ok = searchParams?.get("ok");

  const [phase, setPhase] = useState("loading");

  useEffect(() => {
    const t = setTimeout(() => setPhase("done"), 50);
    return () => clearTimeout(t);
  }, []);


  return (
    <>
      <div className="success-container-wrap">
        <div className="success-container success-stage">

          <div className={`success-spinner ${phase === "done" ? "fadeOut" : ""}`}>
            <div className="spinner-object" />
          </div>

          <div className={`success-content ${phase === "done" ? "fadeIn" : ""}`}>
            <h1 className="success-head">Your survey was submitted successfully!</h1>
            <Link href='/' className='link-dark'>
                <Image 
                src={logo} 
                className="success-logo" alt="LarParLife Logo" 
              />
            </Link>
            <p className="success-text">Thank you for taking the survey.</p>
          </div>

        </div>
      </div>
    </>

  );
};

export default SurveySuccess;
