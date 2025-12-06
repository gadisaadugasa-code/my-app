"use client";

import { useState } from "react";

export default function TelemedicineRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    medicalConcern: "",
    preferredTime: "",
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    alert("Registration submitted! A doctor will contact you shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checkbox.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>🩺</div>
          <h1 style={styles.title}>Telemedicine Consultation</h1>
          <p style={styles.subtitle}>Register for a virtual doctor appointment</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.grid}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                style={styles.input}
                placeholder="John Doe"
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="john@example.com"
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                placeholder="+1 (123) 456-7890"
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Preferred Time</label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (8 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 9 PM)</option>
              </select>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Medical Concern *</label>
            <textarea
              name="medicalConcern"
              value={formData.medicalConcern}
              onChange={handleChange}
              style={{...styles.input, ...styles.textarea}}
              placeholder="Briefly describe your symptoms or concern..."
              rows={4}
              required
            />
          </div>

          <div style={styles.checkboxGroup}>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              style={styles.checkbox}
              required
            />
            <label style={styles.checkboxLabel}>
              I agree to the <a href="#" style={styles.link}>Terms of Service</a> and understand that this is not an emergency service
            </label>
          </div>

          <button 
            type="submit" 
            style={styles.button}
            disabled={!formData.agreeTerms}
          >
            Book Virtual Consultation
          </button>
        </form>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            <span style={styles.emergency}>⚠️ Emergency?</span> Call 911 or visit nearest hospital
          </p>
          <p style={styles.footerNote}>
            A doctor will contact you within 24 hours to confirm your appointment
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f7ff",
    padding: "20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 112, 243, 0.1)",
    padding: "40px",
    width: "100%",
    maxWidth: "800px",
    border: "1px solid #e1f0ff",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "32px",
  },
  logo: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  title: {
    margin: "0 0 8px 0",
    color: "#0070f3",
    fontSize: "28px",
  },
  subtitle: {
    margin: "0",
    color: "#666",
    fontSize: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    padding: "12px 16px",
    border: "1px solid #d1e9ff",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.2s",
    backgroundColor: "#f8fbff",
    ":focus": {
      borderColor: "#0070f3",
      boxShadow: "0 0 0 3px rgba(0, 112, 243, 0.1)",
    },
  },
  textarea: {
    resize: "vertical" as const,
    fontFamily: "inherit",
  },
  checkboxGroup: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    padding: "16px",
    backgroundColor: "#f8fbff",
    borderRadius: "8px",
    border: "1px solid #d1e9ff",
  },
  checkbox: {
    marginTop: "4px",
  },
  checkboxLabel: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.5",
  },
  button: {
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "16px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s",
    ":hover": {
      backgroundColor: "#0051cc",
      transform: "translateY(-1px)",
    },
    ":disabled": {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
      transform: "none",
    },
  },
  footer: {
    marginTop: "32px",
    paddingTop: "20px",
    borderTop: "1px solid #eee",
    textAlign: "center" as const,
  },
  footerText: {
    margin: "0 0 8px 0",
    color: "#666",
    fontSize: "14px",
  },
  emergency: {
    color: "#ff6b6b",
    fontWeight: "600",
  },
  footerNote: {
    margin: "0",
    color: "#888",
    fontSize: "13px",
    fontStyle: "italic",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "500",
    ":hover": {
      textDecoration: "underline",
    },
  },
};