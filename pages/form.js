import { useState } from "react";
import router from "next/router";
import styles from "../styles/Formpage.module.css";
import Stepper from "../components/Stepper";
import Link from 'next/link';
export default function FormPage({ currentStep }) {
  const [formData, setFormData] = useState({
    projectName: "",
    projectUrl: "",
    email:"",
    projectCategory: null,
    goal: "",
    fullTimeWorkers: 0,
  });
  const [steps, setSteps] = useState(0);
  const [productStage, setProductStage] = useState("");
  const categories = [
    "NFT",
    "GameFi",
    "DeFi",
    "DAO",
    "SocialFi",
    "Metaverse",
    "Tools",
    "Ecosystem",
    "Others",
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategorySelect = (category) => {
    setFormData({
      ...formData,
      projectCategory: category,
    });
  };

 

  const handleBackClick = (e) => {
    e.preventDefault();
    if (steps > 0) {
      setSteps(steps - 1);
    }
  };
  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      goal: e.target.value,
    });
  };
  const handleIncrement = () => {
    setFormData({
      ...formData,
      fullTimeWorkers: formData.fullTimeWorkers + 1,
    });
  };

  const handleDecrement = () => {
    if (formData.fullTimeWorkers > 0) {
      setFormData({
        ...formData,
        fullTimeWorkers: formData.fullTimeWorkers - 1,
      });
    }
  };
  const handleProductStageChange = (e) => {
    setProductStage(e.target.value);
  };

  const finalizeFormSubmission = () => {
    localStorage.setItem("formData", JSON.stringify({ ...formData, productStage, email: formData.email }));

    router.push("/listpage");
  };
 

  return (
    <div className={styles.formContainer}>
      <div className={styles.stepperContainer}>
        <Stepper currentStep={steps} />
      </div>
      {steps === 0 && (
        <>
          <h1 className={styles.heading}>
            To Create Quest you need firstly create Project
          </h1>
          <h1 className={styles.heading2}>Add New Project</h1>

          <form  className={styles.form}>
            <label className={styles.label}>
              Project Name (It can be changed later)
              <input
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                className={styles.input}
              />
            </label>

            <label className={styles.label}>
              Project URL (It cannot be changed after creation)
              <input
                name="projectUrl"
                value={formData.projectUrl}
                onChange={handleInputChange}
                className={styles.input}
              />
            </label>

            <label className={styles.label3}>
              Project Category (It cannot be changed after creation)
              <div className={styles.categoryButtons}>
                {categories.map((category) => (
                  <button
                    type="button"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </label>

            <button type="button" onClick={() => setSteps(steps + 1)} className={styles.add}>
              Add Project
            </button>
          </form>
        </>
      )}
      {steps === 1 && (
        <>
          <h1 className={styles.radioheading}>Project Details</h1>
          <div className={styles.radioGroup}>
            <h1 >What is your main goal with AlphaQuest?</h1>
            <label>
              <input
                className={styles.radio}
                type="radio"
                onChange={handleRadioChange}
                name="goal"
                value="Grow My Community"
              />
              Grow My Community
            </label>
            <label>
              <input
                 onChange={handleRadioChange}
                type="radio"
                name="goal"
                value="Activate Existing Members"
              />{" "}
              Activate Existing Members
            </label>
            <label>
              <input type="radio"    onChange={handleRadioChange} name="goal" value="Understand My Members" />{" "}
              Understand My Members
            </label>
            <label>
              <input type="radio"    onChange={handleRadioChange} name="goal" value="Other" /> Other
            </label>
          </div>

          <button className={styles.backButton} onClick={handleBackClick}>
            Back
          </button>
          <button
            className={styles.continueButton}
            onClick={() => setSteps(steps + 1)}
          >
            Continue
          </button>
        </>
      )}
      {steps === 2 && (
        <>
          <h1 className={styles.radioheading}>Create Project</h1>
          <div className={styles.radioGroup}>
            <h1 className={styles.shrink}>How many full-time workers on the project?</h1>
            <div className={styles.counterContainer}>
          <button className={styles.minusButton} onClick={handleDecrement}>-</button>
          <input className={styles.workerCount} readOnly value={formData.fullTimeWorkers} />
          <button className={styles.plusButton} onClick={handleIncrement}>+</button>
        </div>
        <h1 className={styles.shrink}>Are you pre or post product launch?</h1>
            <label>
              <input
                className={styles.radio}
                type="radio"
                onChange={handleProductStageChange}
                name="productStage"
                value="Pre Product"
              />
             Pre Product
            </label>
            <label>
              <input
              onChange={handleProductStageChange}
                type="radio"
                name="productStage"
                value="Post Product"
              />{" "}
            Post Product
            </label>
            <div>
            <h1>Contact Email</h1>
            <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input3}
              />
              </div>
          </div>

          <button className={styles.backButton} onClick={handleBackClick}>
            Back
          </button>
          <button className={styles.continueButton} onClick={finalizeFormSubmission}>Create Project</button>
        </>
      )}
    </div>
  );
}
