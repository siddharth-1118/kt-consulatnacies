"use client";

import { useState, useEffect } from "react";

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<"gst" | "tax">("gst");

  // GST Calculator State
  const [gstAmount, setGstAmount] = useState<number>(10000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [gstType, setGstType] = useState<"exclusive" | "inclusive">("exclusive");
  const [gstResults, setGstResults] = useState({
    base: 10000,
    cgst: 900,
    sgst: 900,
    total: 11800,
  });

  // Tax Calculator State
  const [annualIncome, setAnnualIncome] = useState<number>(1200000);
  const [deductions, setDeductions] = useState<number>(150000);
  const [taxResults, setTaxResults] = useState({
    oldTax: 106600,
    newTax: 67600,
    savings: 39000,
    betterRegime: "New Tax Regime",
  });

  // Calculate GST
  const calculateGST = () => {
    const amt = Number(gstAmount) || 0;
    const rate = Number(gstRate) || 0;

    let base = 0;
    let total = 0;
    let gstVal = 0;

    if (gstType === "exclusive") {
      base = amt;
      gstVal = amt * (rate / 100);
      total = amt + gstVal;
    } else {
      total = amt;
      gstVal = amt - amt * (100 / (100 + rate));
      base = amt - gstVal;
    }

    const cgst = gstVal / 2;
    const sgst = gstVal / 2;

    setGstResults({
      base: parseFloat(base.toFixed(2)),
      cgst: parseFloat(cgst.toFixed(2)),
      sgst: parseFloat(sgst.toFixed(2)),
      total: parseFloat(total.toFixed(2)),
    });
  };

  // Calculate Tax Estimate (FY 2026-27 / AY 2027-28 slabs)
  const calculateTax = () => {
    const income = Number(annualIncome) || 0;
    const oldDeductions = Number(deductions) || 0;

    // --- OLD REGIME CALCULATION ---
    const oldStandardDeduction = 50000;
    const oldTaxableIncome = Math.max(0, income - oldStandardDeduction - oldDeductions);
    let oldTax = 0;

    if (oldTaxableIncome <= 500000) {
      // Under 87A, rebate is applicable up to 5L taxable income
      oldTax = 0;
    } else {
      // Slab calculations
      if (oldTaxableIncome > 1000000) {
        oldTax += (oldTaxableIncome - 1000000) * 0.3;
        oldTax += 500000 * 0.2; // 5L to 10L (20%)
        oldTax += 250000 * 0.05; // 2.5L to 5L (5%)
      } else if (oldTaxableIncome > 500000) {
        oldTax += (oldTaxableIncome - 500000) * 0.2;
        oldTax += 250000 * 0.05;
      } else if (oldTaxableIncome > 250000) {
        oldTax += (oldTaxableIncome - 250000) * 0.05;
      }
    }
    // Add 4% cess
    if (oldTax > 0) {
      oldTax = oldTax * 1.04;
    }

    // --- NEW REGIME CALCULATION ---
    // Standard deduction in New regime is 75,000
    const newStandardDeduction = 75000;
    const newTaxableIncome = Math.max(0, income - newStandardDeduction);
    let newTax = 0;

    if (newTaxableIncome <= 700000) {
      // Rebate up to 7L taxable income (under 87A)
      newTax = 0;
    } else {
      // New Regime Slabs
      // 0 - 3L: Nil
      // 3L - 7L: 5% (400000 * 0.05 = 20000)
      // 7L - 10L: 10% (300000 * 0.10 = 30000)
      // 10L - 12L: 15% (200000 * 0.15 = 30000)
      // 12L - 15L: 20% (300000 * 0.20 = 60000)
      // Above 15L: 30%
      if (newTaxableIncome > 1500000) {
        newTax += (newTaxableIncome - 1500000) * 0.3;
        newTax += 60000; // 12-15L
        newTax += 30000; // 10-12L
        newTax += 30000; // 7-10L
        newTax += 20000; // 3-7L
      } else if (newTaxableIncome > 1200000) {
        newTax += (newTaxableIncome - 1200000) * 0.2;
        newTax += 30000; // 10-12L
        newTax += 30000; // 7-10L
        newTax += 20000; // 3-7L
      } else if (newTaxableIncome > 1000000) {
        newTax += (newTaxableIncome - 1000000) * 0.15;
        newTax += 30000; // 7-10L
        newTax += 20000; // 3-7L
      } else if (newTaxableIncome > 700000) {
        newTax += (newTaxableIncome - 700000) * 0.1;
        newTax += 20000; // 3-7L
      } else if (newTaxableIncome > 300000) {
        newTax += (newTaxableIncome - 300000) * 0.05;
      }
    }
    // Add 4% cess
    if (newTax > 0) {
      newTax = newTax * 1.04;
    }

    const diff = Math.abs(oldTax - newTax);
    const betterRegime = newTax < oldTax ? "New Tax Regime" : "Old Tax Regime";

    setTaxResults({
      oldTax: Math.round(oldTax),
      newTax: Math.round(newTax),
      savings: Math.round(diff),
      betterRegime,
    });
  };

  // Run on mount
  useEffect(() => {
    calculateGST();
  }, [gstAmount, gstRate, gstType]);

  useEffect(() => {
    calculateTax();
  }, [annualIncome, deductions]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(val);
  };

  return (
    <section className="calculators-section" id="calculators">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Interactive Utilities</span>
          <h2 className="section-title">Quick Tax Calculators</h2>
          <div className="title-divider"></div>
          <p className="section-lead">
            Perform instant calculations for GST and get a preliminary comparison of Old vs. New Tax Regimes.
          </p>
        </div>

        <div className="calc-widget-container">
          <div className="calc-tabs">
            <button
              className={`tab-btn ${activeTab === "gst" ? "active" : ""}`}
              onClick={() => setActiveTab("gst")}
            >
              GST Calculator
            </button>
            <button
              className={`tab-btn ${activeTab === "tax" ? "active" : ""}`}
              onClick={() => setActiveTab("tax")}
            >
              Income Tax Estimator (FY 2026-27)
            </button>
          </div>

          {/* GST Calculator */}
          {activeTab === "gst" && (
            <div className="tab-content active">
              <div className="calc-grid-layout">
                <div className="calc-inputs">
                  <div className="form-group">
                    <label htmlFor="gst-amount">Amount (₹)</label>
                    <input
                      type="number"
                      id="gst-amount"
                      min="0"
                      value={gstAmount}
                      onChange={(e) => setGstAmount(Number(e.target.value))}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gst-rate">GST Rate (%)</label>
                    <select
                      id="gst-rate"
                      value={gstRate}
                      onChange={(e) => setGstRate(Number(e.target.value))}
                    >
                      <option value="5">5% (Essentials)</option>
                      <option value="12">12% (Standard)</option>
                      <option value="18">18% (Standard Services/Goods)</option>
                      <option value="28">28% (Luxury)</option>
                    </select>
                  </div>
                  <div className="form-group radio-group">
                    <label>Calculation Type</label>
                    <div className="radio-options">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="gst-type"
                          value="exclusive"
                          checked={gstType === "exclusive"}
                          onChange={() => setGstType("exclusive")}
                        />{" "}
                        GST Exclusive
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="gst-type"
                          value="inclusive"
                          checked={gstType === "inclusive"}
                          onChange={() => setGstType("inclusive")}
                        />{" "}
                        GST Inclusive
                      </label>
                    </div>
                  </div>
                </div>
                <div className="calc-results">
                  <h4>GST Breakdown</h4>
                  <div className="result-row">
                    <span>Base Amount:</span>
                    <span className="bold">{formatCurrency(gstResults.base)}</span>
                  </div>
                  <div className="result-row">
                    <span>CGST (Central):</span>
                    <span>{formatCurrency(gstResults.cgst)}</span>
                  </div>
                  <div className="result-row">
                    <span>SGST (State):</span>
                    <span>{formatCurrency(gstResults.sgst)}</span>
                  </div>
                  <div className="result-row total-row">
                    <span>Total Amount:</span>
                    <span className="bold">{formatCurrency(gstResults.total)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Income Tax Calculator */}
          {activeTab === "tax" && (
            <div className="tab-content active">
              <div className="calc-grid-layout">
                <div className="calc-inputs">
                  <div className="form-group">
                    <label htmlFor="annual-income">Annual Income (₹)</label>
                    <input
                      type="number"
                      id="annual-income"
                      min="0"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value))}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="annual-deductions">
                      Eligible Deductions (₹){" "}
                      <span className="info-note">
                        (Only applies to Old Regime - Sec 80C, 80D, etc.)
                      </span>
                    </label>
                    <input
                      type="number"
                      id="annual-deductions"
                      min="0"
                      value={deductions}
                      onChange={(e) => setDeductions(Number(e.target.value))}
                    />
                  </div>
                </div>
                <div className="calc-results">
                  <h4>Regime Comparison</h4>
                  <div className="comparison-cards">
                    <div className={`regime-card ${taxResults.betterRegime === "Old Tax Regime" ? "highlighted" : ""}`}>
                      <h5>Old Tax Regime</h5>
                      <div className="regime-val">{formatCurrency(taxResults.oldTax).replace(".00", "")}</div>
                      <span className="regime-note">With deductions</span>
                    </div>
                    <div className={`regime-card ${taxResults.betterRegime === "New Tax Regime" ? "highlighted" : ""}`}>
                      <h5>New Tax Regime</h5>
                      <div className="regime-val">{formatCurrency(taxResults.newTax).replace(".00", "")}</div>
                      <span className="regime-note">No deductions</span>
                    </div>
                  </div>
                  {taxResults.savings > 0 ? (
                    <div className="best-regime-suggestion">
                      You save <strong>{formatCurrency(taxResults.savings).replace(".00", "")}</strong> in the{" "}
                      <strong>{taxResults.betterRegime}</strong>!
                    </div>
                  ) : (
                    <div className="best-regime-suggestion">
                      Both regimes yield the same tax liability.
                    </div>
                  )}
                  <p className="disclaimer">
                    *Note: This is a simplified estimate. Real calculations depend on complete source data and specific allowances. Contact Hemanth Kumar for a detailed review.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
